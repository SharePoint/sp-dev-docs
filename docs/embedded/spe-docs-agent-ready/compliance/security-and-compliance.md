---
title: Security and compliance for SharePoint Embedded
description: How SharePoint Embedded inherits Microsoft Purview compliance — audit, eDiscovery, retention, DLP, sensitivity labels, and access policies — from the consuming tenant.
ms.topic: concept-article
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: concept
  difficulty: intermediate
  roles: [compliance-officer, consuming-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - capability: spe-admin
  api_surface:
    - id: updateContainer
      method: PATCH
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell
      when: always
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
      when: always
  related:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
  stability: ga
  last_validated: proposed
---

# Security and compliance for SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

SharePoint Embedded (SPE) content is governed by the same Microsoft Purview compliance and data governance solutions that govern SharePoint Online content. Because SPE storage lives in the **consuming tenant**, compliance policies configured there apply to SPE containers in the same way they apply to SharePoint sites — without separate SPE-specific configuration for tenant-wide policies.

> [!IMPORTANT]
> SPE has **no built-in user interface by design**. Compliance scenarios that require end-user interaction (for example, a DLP override justification or a policy tip) are not natively rendered. The owning application that governs a container must surface these experiences through Microsoft Graph.

To target a policy at a specific container, a compliance or SharePoint admin first retrieves the container's `ContainerSiteURL` with PowerShell:

| Step | Cmdlet | Returns |
|---|---|---|
| 1 | `Get-SPOApplication` | Registered SPE applications and their `OwningApplicationId` |
| 2 | `Get-SPOContainer -OwningApplicationId <owning-application-id>` | Containers of that application and their `ContainerID` |
| 3 | `Get-SPOContainer -OwningApplicationId <owning-application-id> -Identity <container-id>` | Container details including `ContainerSiteURL` |

See [Get-SPOContainer](https://learn.microsoft.com/powershell/module/sharepoint-online/get-spocontainer) and [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell).

## Why it matters / when to use

Use Purview governance over SPE when the organization must manage risk, protect sensitive data, and satisfy regulatory requirements for content that an embedded application stores in its tenant. The supported capabilities split into compliance policies (applied in the Microsoft Purview portal) and security features (set with PowerShell at the container level).

### Compliance policies (Microsoft Purview portal)

| Capability | How it applies to SPE | Tenant-wide vs. targeted |
|---|---|---|
| **Audit** | All user and admin operations in SPE apps are captured in the organization's unified audit log, with extra fields `ContainerInstanceId` and `ContainerTypeId` to isolate SPE content. | Always on; filter by container fields. See [SharePoint Embedded audit log events](/sharepoint/dev/embedded/compliance/audit-events). |
| **eDiscovery** | Search, hold, and export SPE content with Purview eDiscovery. | Select **All** SharePoint sites to cover every container, or **Choose sites** and supply a container URL to scope to specific containers. |
| **Data Lifecycle Management (retention & holds)** | Retention and hold policies apply to SPE containers. | A policy on **All sites** covers all SharePoint sites and all containers; or supply specific container URLs to scope it. |
| **Data Loss Prevention (DLP)** | Identify, monitor, and protect sensitive items in SPE apps. | Configure on **All sites** for tenant-wide coverage, or supply container URLs to scope it. |

For these capabilities, see [Auditing solutions](https://learn.microsoft.com/purview/audit-solutions-overview), [eDiscovery solutions](https://learn.microsoft.com/purview/ediscovery), [Data Lifecycle Management](https://learn.microsoft.com/purview/data-lifecycle-management), and [Data loss prevention](https://learn.microsoft.com/purview/dlp-learn-about-dlp).

### Security features (PowerShell, per container)

| Capability | Cmdlet | Notes |
|---|---|---|
| **Sensitivity labels** | `Set-SPOContainer -Identity <container-id-or-site-url> -SensitivityLabel <sensitivity-label-guid>` | Global Administrators and SharePoint Administrators set or remove labels on a container. See [sensitivity labels](https://learn.microsoft.com/purview/sensitivity-labels). |
| **Block download policy** | `Set-SPOSite -Identity <container-site-url> -BlockDownloadPolicy $true` | Requires a **SharePoint Advanced Management (SAM)** license. See [Block download policy](https://learn.microsoft.com/sharepoint/block-download-from-sites). |
| **Conditional access policy** | `Set-SPOContainer -Identity <container-site-url> -ConditionalAccessPolicy <policy>` | Accepts `AllowFullAccess`, `AllowLimitedAccess`, or `BlockAccess`. `AuthorizationContext` support is coming. See [Control access from unmanaged devices](https://learn.microsoft.com/sharepoint/control-access-from-unmanaged-devices). |

## When NOT to use

- **You need a portal-rendered end-user compliance experience** (policy tips, DLP override justification, interactive retention labeling) directly from SPE. SPE has no UI; the owning application must implement these via Microsoft Graph. Do not expect SharePoint's native UI prompts to appear.
- **You want to label or lifecycle-manage containers as an everyday admin task.** Routine sensitivity labeling, archive, and delete are covered by the consuming tenant admin surfaces. See [Manage containers in the SharePoint admin center](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux).
- **You expect Block download policy without the right license.** It requires SharePoint Advanced Management; without SAM the policy is not enforced.

## Key terms

| Term | Meaning |
|---|---|
| Consuming tenant | The Microsoft 365 tenant where SPE content is stored and where Purview policies apply. |
| `ContainerSiteURL` | The SharePoint site URL backing a container; the addressable unit for scoping eDiscovery, retention, DLP, block download, and conditional access policies. |
| `ContainerInstanceId` / `ContainerTypeId` | Audit-log fields that isolate SPE content within the unified audit log. |
| Policy tip | An in-product notice about a DLP-flagged file. Not natively rendered by SPE; the client app must surface it via Graph. |
| SharePoint Advanced Management (SAM) | The license required to enforce the block download policy. |

## How it fits together

SPE inherits compliance from the **consuming tenant**, where content physically resides. Tenant-wide policies (audit, eDiscovery on **All** sites, retention/DLP on **All sites**) flow to SPE containers automatically because each container is backed by a SharePoint site that participates in the same SharePoint workload. Targeted policies use the container's `ContainerSiteURL` to scope to individual containers.

The split between the platform's two planes matters here:

- **Control plane** — the consuming tenant admin governs registration, container lifecycle, sensitivity labels, and access policies (PowerShell / SharePoint admin center).
- **Content plane** — Purview policies act on the files (`driveItem` content) inside containers; interactive end-user compliance experiences must be implemented by the owning app through Microsoft Graph because SPE itself has no UI.

For the admin surfaces that complement these compliance controls, see [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta).

## Related

- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta)
- [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell)
- [Manage containers in the SharePoint admin center](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux)
- [SharePoint Embedded audit log events](/sharepoint/dev/embedded/compliance/audit-events)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
- [Microsoft Purview eDiscovery solutions](https://learn.microsoft.com/purview/ediscovery)
