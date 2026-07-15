---
title: PowerShell Reference
description: Reference for SharePoint Online PowerShell cmdlets used to administer SharePoint Embedded.
ms.date: 07/13/2026
ms.reviewer: dilucesr
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# PowerShell reference

**Applies to:** Consuming tenant administrator

<!-- agent:
task_type: reference
audience: administrator
outcome: Find SharePoint Online PowerShell cmdlets for SharePoint Embedded administration tasks.
next: ../admin/manage-containers-powershell.md
-->

SharePoint Embedded administrators use the latest [SharePoint Online Management Shell](/powershell/sharepoint/sharepoint-online/connect-sharepoint-online) and connect with [Connect-SPOService](/powershell/module/sharepoint-online/connect-sposervice). Users must be SharePoint Embedded Administrators or Global Administrators for the supported container administration cmdlets.

For task guidance, see [manage containers with PowerShell](../admin/manage-containers-powershell.md).

## Application administration

| Task | Cmdlet | Parameters | Example |
| --- | --- | --- | --- |
| List SharePoint Embedded applications | [Get-SPOApplication](/powershell/module/sharepoint-online/get-spoapplication) | None | `Get-SPOApplication` |
| Get a specific owning application | [Get-SPOApplication](/powershell/module/sharepoint-online/get-spoapplication) | `-OwningApplicationId` | `Get-SPOApplication -OwningApplicationId <OwningApplicationId>` |
| View guest application permissions | [Get-SPOApplication](/powershell/module/sharepoint-online/get-spoapplication) | `-OwningApplicationId`, `-ApplicationId` | `Get-SPOApplication -OwningApplicationId <OwningApplicationId> -ApplicationId <ApplicationId>` |
| Set application sharing capability | Set-SPOApplication | `-OwningApplicationId`, `-SharingCapability`, `-OverrideTenantSharingCapability` | `Set-SPOApplication -OwningApplicationId <OwningApplicationId> -SharingCapability <SharingCapability> -OverrideTenantSharingCapability <$OverrideTenantSharingCapability>` |
| Manage guest application permission | [Set-SPOApplicationPermission](/powershell/module/sharepoint-online/set-spoapplicationpermission) | `-OwningApplicationId`, `-GuestApplicationId`, `-PermissionAppOnly`, `-PermissionDelegated` | `Set-SPOApplicationPermission -OwningApplicationId <OwningApplicationId> -GuestApplicationId <GuestApplicationId> -PermissionAppOnly <AppOnlyPermission> -PermissionDelegated <DelegatedPermission>` |

`SharingCapability` accepts `Disabled`, `ExistingExternalUserSharingOnly`, `ExternalUserSharingOnly`, and `ExternalUserAndGuestSharing`. `OverrideTenantSharingCapability` can be `$true` or `$false`.

> [!NOTE]
> Application administration cmdlets don't apply to Microsoft Loop.

## Container administration

| Task | Cmdlet | Parameters | Example |
| --- | --- | --- | --- |
| List active containers for an application | [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer) | `-OwningApplicationId` | `Get-SPOContainer -OwningApplicationId <OwningApplicationId> \| FT` |
| List containers sorted by storage | [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer) | `-OwningApplicationId`, `-SortByStorage` | `Get-SPOContainer -OwningApplicationId <OwningApplicationId> -SortByStorage <AscendingOrDescending> \| FT` |
| List archived containers for an application | [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer) | `-OwningApplicationId`, `-ArchiveStatus` | `Get-SPOContainer -OwningApplicationId <OwningApplicationId> -ArchiveStatus Archived \| FT` |
| Get container details | [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer) | `-Identity` | `Get-SPOContainer -Identity <ContainerId>` |
| Get container details by site URL | [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer) | `-Identity` | `Get-SPOContainer -Identity <siteURL>` |
| Set a sensitivity label | Set-SPOContainer | `-Identity`, `-SensitivityLabel` | `Set-SPOContainer -Identity <ContainerID> -SensitivityLabel <SensitivityLabel>` |
| Remove a sensitivity label | Set-SPOContainer | `-Identity`, `-RemoveLabel` | `Set-SPOContainer -Identity <ContainerID> -RemoveLabel` |
| Soft delete a container | [Remove-SPOContainer](/powershell/module/sharepoint-online/remove-spocontainer) | `-Identity` | `Remove-SPOContainer -Identity <ContainerId>` |
| List deleted containers | [Get-SPODeletedContainer](/powershell/module/sharepoint-online/get-spodeletedcontainer) | None | `Get-SPODeletedContainer` |
| Restore a deleted container | Restore-SPODeletedContainer | `-Identity` | `Restore-SPODeletedContainer -Identity <ContainerId>` |
| Permanently delete a deleted container | [Remove-SPODeletedContainer](/powershell/module/sharepoint-online/remove-spodeletedcontainer) | `-Identity` | `Remove-SPODeletedContainer -Identity <ContainerId>` |

Deleted containers can be restored from the deleted container collection within 93 days. Permanently deleting a container deletes all documents and files in it. If a container was in the archived state when it was deleted, restoring it returns it to the archived state.

> [!NOTE]
> To enumerate Microsoft Loop containers, use owning app ID `a187e399-0c36-4b98-8f04-1edc167a0996`.

## Related resources

- [Manage containers with PowerShell](../admin/manage-containers-powershell.md)
- [Create and configure a container type](../build/create-container-type.md)
