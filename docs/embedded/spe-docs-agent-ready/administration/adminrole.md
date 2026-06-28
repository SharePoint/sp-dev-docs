---
title: SharePoint Embedded Administrator role
description: What the SharePoint Embedded Administrator role grants, how it differs from a SharePoint admin, and the tasks it enables in developer and consuming tenants.
ms.topic: concept-article
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: concept
  difficulty: beginner
  roles: [owning-admin, consuming-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - capability: global-admin
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin
      when: always
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
      when: admin-consuming-tenant
  related:
    - uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded Administrator role
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

The **SharePoint Embedded Administrator** is a dedicated Microsoft Entra / Microsoft 365 role for managing SharePoint Embedded container types and containers through [SharePoint PowerShell](https://learn.microsoft.com/powershell/module/sharepoint-online/connect-sposervice) and the SharePoint admin center. The role is required for [developer admins](/sharepoint/dev/embedded/administration/developer-admin/dev-admin) to create container types through PowerShell cmdlets, and for consuming tenant admins to manage containers created in their tenants.

The role is available in both **Microsoft Entra** and the **Microsoft 365 admin center**. The **Global Administrator** role already has all the permissions of the SharePoint Embedded Administrator role; a Global Administrator can assign the role to a user so that user can act as a developer admin or a consuming tenant admin for SharePoint Embedded.

> [!IMPORTANT]
> The SharePoint Embedded Administrator role does **not** have access to site management. A holder can't see the **Active sites** or **Deleted sites** pages in the SharePoint admin center and can't run site-specific PowerShell cmdlets. The role is scoped to SharePoint Embedded container types and containers only.

## Why it matters / when to use

Assign this role to grant SharePoint Embedded administration without granting full SharePoint or tenant administration.

- Assign it to a **developer admin** who needs to create and manage container types and billing in the developer (owning) tenant.
- Assign it to a **consuming tenant admin** who needs to manage the containers created in their tenant.
- Prefer it over Global Administrator for least-privilege: it covers SharePoint Embedded tasks without the broad surface of Global Administrator and without SharePoint site management.

## When NOT to use

- Do not assign it when the user needs to manage SharePoint **sites** (active/deleted sites, site-specific cmdlets); it has no site-management access. Use a SharePoint or Global admin role for that.
- Do not assign a separate SharePoint Embedded Administrator role to an existing **Global Administrator**; that role already includes all SharePoint Embedded Administrator permissions.
- Do not rely on this role for Azure billing setup. Attaching a billing profile requires owner or contributor permissions on an **Azure subscription**, which is a separate authorization. See [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin#roles-and-permissions).

## Key terms

| Term | Meaning |
|---|---|
| SharePoint Embedded Administrator | Dedicated Entra / Microsoft 365 role for SharePoint Embedded container type and container management; no site-management access. |
| Global Administrator | Tenant-wide admin role that already includes all SharePoint Embedded Administrator permissions and can assign the role. |
| Developer (owning) tenant | The tenant where container types are created and standard billing is configured. |
| Consuming tenant | The tenant where a registered application's containers are created and managed. |
| Developer admin | A SharePoint Embedded Administrator (or Global Administrator) acting in the developer tenant. |
| Consuming tenant admin | A SharePoint Embedded Administrator (or Global/SharePoint Administrator) acting in a consuming tenant. |

## How it fits together

The same role label applies in two contexts, with different supported tasks depending on which tenant the holder operates in.

### Tasks in the developer (owning) tenant

A SharePoint Embedded Administrator in the developer tenant can, through PowerShell:

- Create container types:
  - Standard container type with standard billing.
  - Standard container type with direct-to-customer (passthrough) billing.
  - Trial container type.
- Manage container types:
  - View container types in the developer tenant.
  - Edit properties of a container type.
  - Set configuration properties of a container type.
  - Manage billing of applications / container types for standard billing.

For the cmdlets, see [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin).

### Tasks in the consuming tenant

A SharePoint Embedded Administrator in a consuming tenant can, through PowerShell, perform application administration (get details of all SharePoint Embedded applications, get a specific application, get permissions of owning applications, configure external sharing of a container) and container administration (get details of all containers — including sorted by storage and archived — get a specific container, set the sensitivity label of a container, soft-delete a container, list soft-deleted containers, restore a soft-deleted container, and permanently delete a soft-deleted container).

Through the SharePoint admin center, the same role can view the Active, Archived, and Deleted container pages and a container's details, and can archive an active container, reactivate an archived container, soft-delete a container, restore a deleted container, and purge a deleted container.

For the consuming-tenant cmdlets and UX, see [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta) and [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell).

### Assigning the role

A Global Administrator assigns the SharePoint Embedded Administrator role through either Microsoft Entra or the Microsoft 365 admin center. For the step-by-step assignment procedure, see [Developer admin — Assign the SharePoint Embedded Administrator role](/sharepoint/dev/embedded/administration/developer-admin/dev-admin#step-1).

## Related

- [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin)
- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta)
- [Container management in PowerShell](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctapowershell)
- [Pay-as-you-go billing](/sharepoint/dev/embedded/administration/billing/billing)
- [Connect-SPOService](https://learn.microsoft.com/powershell/module/sharepoint-online/connect-sposervice)
