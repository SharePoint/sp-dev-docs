---
title: SharePoint Embedded container management cmdlets (PowerShell)
description: Reference for the SharePoint Online Management Shell cmdlets a consuming tenant admin uses to manage SharePoint Embedded apps and containers.
ms.topic: reference
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: reference
  difficulty: intermediate
  roles: [consuming-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
      kind: concept
    - capability: spe-admin
  api_surface:
    - id: listContainers
      method: GET
      path: /storage/fileStorage/containers?$filter=containerTypeId eq {container-type-id}
      permissions: [FileStorageContainer.Selected]
    - id: getContainer
      method: GET
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: updateContainer
      method: PATCH
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: deleteContainer
      method: DELETE
      path: /storage/fileStorage/containers/{container-id}
      permissions: [FileStorageContainer.Selected]
    - id: restoreDeletedContainer
      method: POST
      path: /storage/fileStorage/deletedContainers/{container-id}/restore
      permissions: [FileStorageContainer.Selected]
    - id: permanentDeleteContainer
      method: POST
      path: /storage/fileStorage/containers/{container-id}/permanentDelete
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: owning-application-id
      type: uuid
      source: user-supplied
    - name: application-id
      type: uuid
      source: user-supplied
    - name: container-id
      type: string
      source: prior-step
    - name: container-site-url
      type: uri
      source: prior-step
    - name: sensitivity-label
      type: string
      source: user-supplied
    - name: sharing-capability
      type: enum
      source: user-supplied
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux
      when: always
    - uri: /sharepoint/dev/embedded/compliance/security-and-compliance
      when: govern-content
  related:
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
    - uri: /sharepoint/dev/embedded/administration/adminrole
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded container management cmdlets (PowerShell)
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

This page tabulates the SharePoint Online Management Shell cmdlets a consuming tenant admin (CTA) uses to enumerate and govern SharePoint Embedded applications and containers. To run these cmdlets, the caller must hold the **SharePoint Embedded Administrator** role (or Global Administrator); see [SharePoint Embedded admin role](/sharepoint/dev/embedded/administration/adminrole).

> [!IMPORTANT]
> Use the latest version of the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588) to access the container administration cmdlets. Connect first with [`Connect-SPOService`](https://learn.microsoft.com/powershell/module/sharepoint-online/connect-sposervice).

> [!NOTE]
> The cmdlets in this reference have **no Graph API equivalent today** for application-scoped enumeration and sharing capability. The container lifecycle cmdlets map to the Graph operations listed in `agent.api_surface` (`listContainers`, `getContainer`, `deleteContainer`, `restoreDeletedContainer`, `permanentDeleteContainer`). Use the Graph equivalents for unattended automation where one exists.

## Connect

| Cmdlet | Parameters | Description |
|---|---|---|
| `Connect-SPOService` | `-Url <spo-admin-url>` | Connect the shell to your SharePoint admin endpoint before running any container cmdlet. |

```pwsh
Connect-SPOService -Url "https://{tenant}-admin.sharepoint.com"
```

## Application administration cmdlets

| Cmdlet | Parameters | Description |
|---|---|---|
| `Get-SPOApplication` | *(none)* | List every SharePoint Embedded application registered in the tenant. |
| `Get-SPOApplication` | `-OwningApplicationId <owning-application-id>` | Get the details of one SharePoint Embedded application. |
| `Get-SPOApplication` | `-OwningApplicationId <owning-application-id>` `-ApplicationId <application-id>` | View the guest application permissions for a guest application that has access to the SPE application. Does not apply to Microsoft Loop. |
| `Set-SPOApplication` | `-OwningApplicationId <owning-application-id>` `-SharingCapability <sharing-capability>` `-OverrideTenantSharingCapability <$true \| $false>` | Set the external sharing capability for all containers of the application. |
| `Set-SPOApplicationPermission` | `-OwningApplicationId <owning-application-id>` `-ApplicationId <application-id>` `-PermissionAppOnly <app-only-permission>` `-PermissionDelegated <delegated-permission>` | Add, edit, or remove guest application access to an SPE application. A guest application is any application within the enterprise applications of the owning tenant. |

`{sharing-capability}` accepts one of: `Disabled`, `ExistingExternalUserSharingOnly`, `ExternalUserSharingOnly`, `ExternalUserAndGuestSharing`.

## Container administration cmdlets

| Cmdlet | Parameters | Description |
|---|---|---|
| `Get-SPOContainer` | `-OwningApplicationId <owning-application-id>` | List all active containers of an application. |
| `Get-SPOContainer` | `-OwningApplicationId <owning-application-id>` `-ArchiveStatus Archived` | List all archived containers of an application. |
| `Get-SPOContainer` | `-OwningApplicationId <owning-application-id>` `-SortByStorage <Ascending \| Descending>` | List containers of an application sorted by storage. |
| `Get-SPOContainer` | `-Identity <container-id>` *or* `-Identity <container-site-url>` | Get the details of one container: `StorageUsed`, ownership, `SiteURL`, label, owner count, and more. |
| `Set-SPOContainer` | `-Identity <container-id>` `-SensitivityLabel <sensitivity-label>` | Set the sensitivity label on a container. |
| `Set-SPOContainer` | `-Identity <container-id>` `-RemoveLabel` | Remove the sensitivity label from a container. |
| `Remove-SPOContainer` | `-Identity <container-id>` | Soft-delete a container (moves it to the deleted container collection). |
| `Get-SPODeletedContainer` | *(none)* | List all soft-deleted containers in the deleted container collection. |
| `Restore-SPODeletedContainer` | `-Identity <container-id>` | Restore a soft-deleted container. If it was archived at deletion, it is restored to the archived state. |
| `Remove-SPODeletedContainer` | `-Identity <container-id>` | Permanently delete a soft-deleted container (only if no retention policy applies). |

> [!NOTE]
> To enumerate Microsoft Loop containers, use the owning app ID `a187e399-0c36-4b98-8f04-1edc167a0996` for all container administration cmdlets.

> [!WARNING]
> Deleting a container removes all its content and may break the SharePoint Embedded application it belongs to: data loss, broken links, and permission failures. Notify container owners before deletion. A deleted container can be restored from the deleted container collection within **93 days**; after that, or after explicit purge, it is permanently deleted and cannot be recovered.

## Examples

### List every SPE application, then its active containers

```pwsh
Get-SPOApplication
Get-SPOContainer -OwningApplicationId "{owning-application-id}" | Format-Table
```

### List archived containers, sorted largest-first

```pwsh
Get-SPOContainer -OwningApplicationId "{owning-application-id}" -ArchiveStatus Archived | Format-Table
Get-SPOContainer -OwningApplicationId "{owning-application-id}" -SortByStorage Descending | Format-Table
```

### Inspect one container by ID or by site URL

```pwsh
Get-SPOContainer -Identity "{container-id}"
Get-SPOContainer -Identity "{container-site-url}"
```

### Set, then remove, a sensitivity label

```pwsh
Set-SPOContainer -Identity "{container-id}" -SensitivityLabel "{sensitivity-label}"
Set-SPOContainer -Identity "{container-id}" -RemoveLabel
```

### Restrict external sharing on an application's containers

```pwsh
Set-SPOApplication -OwningApplicationId "{owning-application-id}" -SharingCapability "Disabled" -OverrideTenantSharingCapability $true
```

### Soft-delete, list, restore, then permanently delete

```pwsh
Remove-SPOContainer -Identity "{container-id}"
Get-SPODeletedContainer
Restore-SPODeletedContainer -Identity "{container-id}"
Remove-SPODeletedContainer -Identity "{container-id}"
```

## See also

- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta)
- [Manage containers in the SharePoint admin center](/sharepoint/dev/embedded/administration/consuming-tenant-admin/ctaux)
- [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance)
- [SharePoint Embedded admin role](/sharepoint/dev/embedded/administration/adminrole)
- [Get-SPOContainer cmdlet](https://learn.microsoft.com/powershell/module/sharepoint-online/get-spocontainer)
- [Get-SPOApplication cmdlet](https://learn.microsoft.com/powershell/module/sharepoint-online/get-spoapplication)
- [Remove-SPOContainer cmdlet](https://learn.microsoft.com/powershell/module/sharepoint-online/remove-spocontainer)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
