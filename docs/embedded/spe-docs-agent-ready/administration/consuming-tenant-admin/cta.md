---
title: Consuming tenant admin for SharePoint Embedded
description: The consuming tenant admin role governs SharePoint Embedded apps and containers on a Microsoft 365 tenant via PowerShell, the SharePoint admin center, and Graph.
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
  roles: [consuming-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - capability: spe-admin
  api_surface:
    - id: listContainerTypeRegistrations
      method: GET
      path: /storage/fileStorage/containerTypeRegistrations
      permissions: [FileStorageContainerTypeReg.Manage.All]
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell
      when: always
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux
      when: always
    - uri: /sharepoint/dev/embedded/compliance/security-and-compliance
      when: govern-content
  related:
    - uri: /sharepoint/dev/embedded/administration/adminrole
    - uri: /sharepoint/dev/embedded/administration/billing/meters
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
  stability: ga
  last_validated: proposed
---

# Consuming tenant admin for SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

A **consuming tenant** is a Microsoft 365 tenant that has one or more SharePoint Embedded (SPE) applications installed on it. The **consuming tenant administrator (CTA)** is the persona responsible for managing those applications and the containers that hold their content on that tenant.

The CTA role is filled by the **SharePoint Embedded Administrator** role (available in both Microsoft Entra ID and the Microsoft 365 admin center). A Global Administrator can assign this role to a user; the Global Administrator role already includes every permission the SharePoint Embedded Administrator role grants.

> [!IMPORTANT]
> A user must hold the SharePoint Embedded Administrator role (or Global Administrator) to run the SharePoint Embedded container cmdlets and to see the container pages in the SharePoint admin center. See [SharePoint Embedded admin role](/sharepoint/dev/embedded/administration/adminrole).

## Why it matters / when to use

The CTA is the tenant's control point for every SPE app another organization (or Microsoft) has installed. The role exists so that the tenant — not the app vendor — retains governance over content stored on its own Microsoft 365 tenancy. A CTA uses the role to:

- Enumerate every SPE application registered on the tenant and the containers each one holds.
- Inspect a container's storage, ownership, owners, and sensitivity label.
- Apply tenant-level governance: sensitivity labels, external sharing capability, and membership (Owner, Manager, Writer, Reader roles).
- Manage container lifecycle: archive, reactivate, soft-delete, restore, and permanently delete.
- Ensure content meets the organization's business and compliance policies.

Three administration surfaces are available, each documented separately:

| Surface | Use it for | Page |
|---|---|---|
| Microsoft Graph | Container type registration management (list, get, update, delete) | [Graph reference](https://learn.microsoft.com/graph/api/resources/filestoragecontainertyperegistration) |
| SharePoint Online Management Shell (PowerShell) | Scripted enumeration, sensitivity labels, sharing capability, and container lifecycle | [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell) |
| SharePoint admin center (SPAC) | Point-and-click container lifecycle, membership, sorting, and filtering | [Manage containers in the SharePoint admin center](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux) |

## When NOT to use

- **You own the application and container type.** Container type creation, billing classification, and owning-tenant configuration belong to the developer/owning admin, not the CTA. See [SharePoint Embedded admin overview](/sharepoint/dev/embedded/administration/adminrole).
- **You are applying compliance policies (eDiscovery, retention, DLP).** Those are configured by a compliance officer in the Microsoft Purview portal, not through the CTA container surfaces. See [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance).
- **You are creating, reading, or writing file content programmatically.** That is the app's content-plane work through Graph `driveItem` APIs, not a CTA task.

## Key terms

| Term | Meaning |
|---|---|
| Consuming tenant | A Microsoft 365 tenant where one or more SPE applications are installed and their containers are stored. |
| Consuming tenant admin (CTA) | The persona — backed by the SharePoint Embedded Administrator role — that governs SPE apps and containers on a consuming tenant. |
| SharePoint Embedded Administrator | The Entra/Microsoft 365 role that grants CTA capabilities. A subset of Global Administrator. |
| Container type registration | The `fileStorageContainerTypeRegistration` resource representing a container type's registration on the consuming tenant. Managed with the `FileStorageContainerTypeReg.Manage.All` delegated permission. |
| Active / Archived / Deleted container | The three lifecycle collections a CTA can view and act on. Deleted containers are purged after 93 days unless a retention policy applies. |
| Passthrough (direct-to-customer) billing | A billing classification where the consuming tenant pays for SPE consumption directly through its own Azure subscription via Microsoft Syntex billing. |

## How it fits together

SharePoint Embedded separates a **control plane** (container types, registrations, consent, billing) from a **content plane** (containers and their `driveItem` files). The CTA operates almost entirely on the consuming tenant's side of this split:

- **Owning tenant** — the app vendor (or enterprise developer) creates the container type and sets its billing classification. This is *not* CTA work.
- **Consuming tenant** — the app is installed, the container type is registered, containers are created, and content is stored. The CTA governs everything here: the registration (`fileStorageContainerTypeRegistration`), container lifecycle, membership, sensitivity labels, and sharing capability.

Storage, the actual files, and the Microsoft Purview compliance that governs them all live in the consuming tenant — which is why governance is a CTA and compliance-officer responsibility on that tenant, not the vendor's.

For passthrough (direct-to-customer) apps, the CTA must also set up Microsoft Syntex billing in the [Microsoft 365 admin center](https://admin.microsoft.com/) before any user can access the app. No Graph API exists for this step today; see api-surface.json gap `activateConsumingTenantPayg`. For the billing meters that apply, see [Meters](/sharepoint/dev/embedded/administration/billing/meters).

> [!WARNING]
> If you turn off SharePoint Embedded or disconnect the linked Azure subscription, all users immediately lose access to every application built on the service, along with their read and write permissions.

## Related

- [SharePoint Embedded admin role](/sharepoint/dev/embedded/administration/adminrole)
- [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell)
- [Manage containers in the SharePoint admin center](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux)
- [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance)
- [Billing meters](/sharepoint/dev/embedded/administration/billing/meters)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
