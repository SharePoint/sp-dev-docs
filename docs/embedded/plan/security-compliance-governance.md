---
title: Plan security, compliance, and governance
description: Plan how Microsoft Purview, audit, DLP, retention, labels, and access policies apply to SharePoint Embedded content.
ms.date: 07/13/2026
ms.reviewer: mawin
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Plan security, compliance, and governance

**Applies to:** Compliance administrator

<!-- agent:
task_type: concept
audience: compliance
outcome: Identify which tenant settings and Microsoft Purview capabilities apply to SharePoint Embedded containers.
next: ../plan/limits-calling-patterns.md
-->

Use this article to plan security, compliance, and governance for content stored in SharePoint Embedded.

SharePoint Embedded content resides in the consuming tenant's Microsoft 365 boundary.

Supported consuming tenant Microsoft 365 settings and Microsoft Purview capabilities apply to the app documents stored there.

## Governance model

SharePoint Embedded is API-only and doesn't provide a built-in user interface (UI).

The owning application provides the user experience.

Compliance administrators and SharePoint Embedded administrators enforce supported policies on containers and content by using Microsoft Purview, supported admin capabilities, and PowerShell.

Some compliance scenarios require user interaction. Because SharePoint Embedded doesn't include a native UI, the app must provide the experience when those scenarios are required.

## Tenant responsibility

Content is stored in the consuming tenant.

Therefore, consuming tenant policies and administrator decisions govern the content.

For an enterprise line-of-business (LOB) app, the enterprise tenant owns and consumes the app.

For an independent software vendor (ISV) app, each customer tenant governs its own SharePoint Embedded content.

For tenant role planning, see [Understand app and tenant architecture](../plan/app-tenant-architecture.md).

## Discover applications and containers

Compliance administrators may need container details to target policies.

Use this PowerShell discovery flow to retrieve container details for policy scope:

1. View registered SharePoint Embedded applications in the tenant.

   ```powershell
   Get-SPOApplication
   ```

1. Retrieve containers for an application by using the application ID.

   ```powershell
   Get-SPOContainer -OwningApplicationId <OwningApplicationID>
   ```

1. Retrieve details for a container, including the container site URL.

   ```powershell
   Get-SPOContainer -OwningApplicationId <ApplicationID> -Identity <ContainerID>
   ```

For cmdlet details, see [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer).

## Microsoft Purview support

SharePoint Embedded supports Microsoft Purview compliance features for content stored in the platform.

SharePoint Embedded supports these Microsoft Purview capabilities:

- Audit
- eDiscovery
- Data Lifecycle Management
- Data Loss Prevention

These capabilities work similarly to SharePoint content, with limitations where the app must provide user interaction.

## Audit

Audit capabilities mirror the existing audit functionality supported in SharePoint.

User and admin operations performed in applications hosted in SharePoint Embedded are captured, recorded, and retained in the organization's unified audit log.

Audit events related to SharePoint Embedded include additional data to help filter results:

- `ContainerInstanceId`
- `ContainerTypeId`

Use these properties to isolate SharePoint Embedded content during audit searches.

For more information, see [Auditing solutions in Microsoft Purview](/purview/audit-solutions-overview).

## eDiscovery

Compliance administrators can use Microsoft Purview eDiscovery tools to search, hold, and export SharePoint Embedded content.

To search all SharePoint Embedded content, configure eDiscovery Search for all SharePoint sites.

This includes SharePoint sites and SharePoint Embedded containers.

To limit eDiscovery Search to specific containers, choose sites under the SharePoint sites workload and provide the container URL.

For more information, see [Microsoft Purview eDiscovery solutions](/purview/ediscovery).

## Data Lifecycle Management

SharePoint Embedded supports retention and hold policies through the Microsoft Purview compliance portal.

Retention policies configured for all SharePoint sites apply to all SharePoint sites and all containers in SharePoint Embedded.

To selectively enforce a policy on one or more SharePoint Embedded containers, use the container URL when configuring the policy.

Because SharePoint Embedded has no built-in UI, app support is required for user-interaction scenarios such as a user applying a retention label through the app.

For more information, see [Learn about Microsoft Purview Data Lifecycle Management](/purview/data-lifecycle-management).

## Data Loss Prevention

Microsoft Purview Data Loss Prevention can identify, monitor, and automatically protect sensitive items stored in SharePoint Embedded applications.

DLP policies can be enforced on all SharePoint sites and SharePoint Embedded containers by configuring the policy for all sites.

Admins can also restrict DLP enforcement to specific SharePoint Embedded containers by specifying container URLs.

Some DLP scenarios require user interaction.

For example, a DLP policy that prevents external sharing might allow a business justification override.

The client app must provide the user interaction if the scenario is required.

Policy tips for SharePoint Embedded files also require app support through Microsoft Graph where applicable.

For more information, see [Learn about data loss prevention](/purview/dlp-learn-about-dlp).

## Sensitivity labels

Global Administrators and SharePoint Embedded Administrators can set and remove sensitivity labels on a SharePoint Embedded container by using SharePoint PowerShell.

Use this command:

```powershell
Set-SPOContainer -Identity <ContainerID/ContainerSiteURL> -SensitivityLabel <SensitivityLabelGUID>
```

The label is applied at the **container level**: it sets the container's sensitivity and governs container settings such as conditional access and guest sharing. It doesn't retroactively relabel files that already exist in the container, and each file carries its own sensitivity label. For item-level labeling behavior, see [Learn about sensitivity labels](/purview/sensitivity-labels).

## Block download policy

SharePoint Administrators or Global Administrators can block file downloads from SharePoint Embedded containers.

Use this command:

```powershell
Set-SPOSite -Identity <ContainerSiteURL> -BlockDownloadPolicy $true
```

A SharePoint Advanced Management license is needed to enforce this policy.

For more information, see [Block download policy for SharePoint sites and OneDrive](/sharepoint/block-download-from-sites).

## Conditional Access

SharePoint Embedded supports basic Conditional Access policy configurations.

Available policy values:

- `AllowFullAccess`
- `AllowLimitedAccess`
- `BlockAccess`

Use this cmdlet:

```powershell
Set-SPOContainer -Identity <ContainerSiteURL> -ConditionalAccessPolicy <SPOConditionalAccessPolicyType>
```

For more information, see [Control access from unmanaged devices](/sharepoint/control-access-from-unmanaged-devices).

## Information barriers

The beta Microsoft Graph `fileStorageContainer` resource has an **informationBarrier** property that lets you manage a container's information barrier. Because the endpoint is in beta, don't use it in production. Use information barrier segments to restrict communication and collaboration between groups of users where required by compliance policy.

For more information, see [Information barriers in SharePoint](/purview/information-barriers-sharepoint).

## Tenant settings

Consuming tenant Microsoft 365 settings apply to app documents stored by SharePoint Embedded.

This includes supported security, compliance, risk, and governance settings.

Your application shouldn't assume that every consuming tenant has the same policy configuration.

Design for policy enforcement results, blocked operations, and user-facing messages.

## Governance responsibilities

| Area | App owner | Consuming tenant admin |
| --- | --- | --- |
| User experience for files | Provide app UI. | Validate policy expectations. |
| Container discovery | Expose identifiers where appropriate. | Use PowerShell and admin tools. |
| Purview policies | Handle policy-driven user experience (UX) requirements. | Configure audit, eDiscovery, DLP, retention, and labels. |
| Access model | Request least privilege. | Grant consent and manage tenant settings. |
| Compliance evidence | Preserve app context and auditability. | Use unified audit log and Purview tools. |

## Planning checklist

- Identify the consuming tenant governance owner.
- Inventory SharePoint Embedded applications and containers.
- Capture container URLs needed for targeted policies.
- Plan audit searches using `ContainerInstanceId` and `ContainerTypeId`.
- Decide whether policies apply to all sites or selected containers.
- Plan DLP user interaction in the app.
- Plan retention label user interaction in the app if required.
- Decide whether sensitivity labels are required on containers.
- Decide whether block download policy is required.
- Decide whether Conditional Access settings are required.
- Validate licensing requirements for advanced policies.

## Next steps

Review scale, throttling, and retry behavior: [Understand limits and calling patterns](../plan/limits-calling-patterns.md).
