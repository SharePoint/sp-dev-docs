---
title: Consuming Tenant Admin PowerShell
description: This article describes how an admin can manage containers through SPO PowerShell.
ms.date: 10/08/2024
ms.localizationpriority: high
---

# SharePoint Embedded container management in PowerShell

The consuming tenant administrator can manage containers using PowerShell commands, designed for container management. To access these commands, they must be assigned the role of Microsoft 365 SharePoint Embedded Administrator. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator role. The Global Administrator role inherently includes all permissions of the SharePoint Embedded Administrator role. The SharePoint Embedded Administrator role is available in both Microsoft Entra and the Microsoft 365 Admin Center.

For more information on assigning the SharePoint Embedded admin role, see the [SharePoint Embedded Administrator](../adminrole.md).

The following are some of the container-specific commands actions currently supported on PowerShell:

### Application administration

- Get the details of all SharePoint Embedded applications registered in the tenant
- Get the details of all SharePoint Embedded applications the tenant sorted basis storage
- Get the details of a specific SharePoint Embedded application in the tenant
- Get the permissions of owning applications in the tenant
- Configure the External sharing setting of a container of a SharePoint Embedded application in the tenant

### Container administration

- Get details of all containers of a particular SharePoint Embedded application in the tenant
- Get details of a specific container
- Set the Sensitivity label of a specific container
- Soft delete a container
- Get details of all soft deleted containers
- Restore a soft deleted container
- Permanently delete a soft deleted container

## Administration through SharePoint PowerShell

Consuming tenant admin can manage SharePoint Embedded applications with PowerShell commands using [SharePoint Online Management Shell](/powershell/sharepoint/sharepoint-online/connect-sharepoint-online).

To get started using PowerShell to manage SharePoint Embedded, you have to install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588) and [connect to SharePoint Online](/powershell/module/sharepoint-online/connect-sposervice).

> [!IMPORTANT]
> You must use the latest version of SharePoint PowerShell to use container administration cmdlets.

## Application Administration

With PowerShell cmdlets, tenant admin can get a list of SharePoint Embedded applications registered in their Microsoft 365 tenancy. They can also view all the applications that have "read" and/or "write" access and the level of access to these SharePoint Embedded applications.

The following commands can be used to manage SharePoint Embedded applications registered on your Microsoft 365 tenants.

```powershell
Get-SPOApplication
```

```powershell

Get-SPOApplication -OwningApplicationId <OwningApplicationId>
```

For more information, see [Get-SPOApplication cmdlet](/powershell/module/sharepoint-online/get-spoapplication).

### View guest application permissions

Admins can view the guest application permissions for any SharePoint Embedded application within their tenant using this command.

```powershell
Get-SPOApplication -OwningApplicationId <OwningApplicationId> -ApplicationId <ApplicationId>
```

`OwningApplicationId` is the ID of the SharePoint Embedded application and ApplicationId is the guest application ID that has access to the SharePoint Embedded application. Application Administration cmdlets don't apply to Microsoft Loop. For more information, see [Get-SPOApplication cmdlet](/powershell/module/sharepoint-online/get-spoapplication).

### Set sharing capability of applications

Consuming tenant admins can set the sharing capability at an application level to determine whether files of the containers of the application be shared with external guests or not.

```powershell
Set-SPOApplication -OwningApplicationId <OwningApplicationId> – SharingCapability <SharingCapability> - OverrideTenantSharingCapability <$ OverrideTenantSharingCapability >
```

`SharingCapability` can take the following values: `Disabled`; `ExistingExternalUserSharingOnly`; `ExternalUserSharingOnly`;  ExternalUserAndGuestSharing

`$OverrideTenantSharingCapability` can take the following values: `$true`; `$false`

## Container Administration

### View Containers

Admins can get a list of all the containers for a SharePoint Embedded application using the following commands. This command lists all the active containers within the application.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> |FT
```

The `OwningApplicationId` is the ID of the SharePoint Embedded application. For more information about using this command, see [Get-SPOContainer cmdlet](/powershell/module/sharepoint-online/get-spocontainer). 

> [!Note]
> To enumerate Microsoft Loop containers, use Owning App ID: **a187e399-0c36-4b98-8f04-1edc167a0996** for all the cmdlets of container administration.

### View containers sorted by storage
Consuming tenant admins can also get a list of all the containers of a SharePoint Embedded application sorted by storage using the following commands.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> -SortByStorage <value> |FT
```

`<value>` can be Ascending; Descending

### View details of a Container

Consuming tenant admins can get the details of a container within an application using the following command. This command returns more details of a container including StorageUsed, Ownership details, SiteURL, Label information, Owners count, etc.

Consuming tenant admins can use the following command:

```powershell
Get-SPOContainer -Identity <ContainerId>
Get-SPOContainer -Identity <siteURL>
```
Here, the `containerId` is the ID of the container & `siteURL` is the URL of the SharePoint site that is associated with the container.

### Sensitivity Label of a container

Consuming tenant admins can set the sensitivity label of a container of an application using the following:

```powershell
Set-SPOContainer -Identity <ContainerID> -SensitivityLabel <SensitivityLabel>
```

Consuming tenant admins can remove the sensitivity label of a container of an application using the following:

```powershell
Set-SPOContainer -Identity <ContainerID> -RemoveLabel
```

The `ContainerId` is the ID of the container whose sensitivity label is being set

### Delete containers

Deleting a container can have implications on the functionality of a SharePoint Embedded app, Here are some examples of the potential issues that an application can encounter when deleting a container.

- Data Loss: Deleting a container removes all its content. If the SharePoint Embedded application relies on the data stored within the deleted container, the app might no longer function as expected or might lose access to critical information.
- Broken Links: If the SharePoint Embedded application contains links or references to the deleted container, those links become broken, leading to errors or malfunctioning features within the app.
- Permissions Issues: Deleting a container can affect permissions settings. If the SharePoint Embedded app relies on specific permissions granted to the deleted container, it might encounter permission issues and fail to function properly.

Therefore, it's essential to carefully consider the consequences of deleting a container and ensure that appropriate measures are taken to mitigate any potential issues.

### Permanent deletion

When admins delete a Container, it goes into the Recycle Bin. A deleted container can be restored from the Recycle Bin within 93 days. If a container is deleted from the Recycle Bin, or it exceeds the 93-day retention period, it's permanently deleted. Deleting a container deletes everything within it, including all documents and files.

Admins should notify the Container owners before they delete a Container so they can move their data to another location, and also inform users when the Container is deleted.

> [!WARNING]
> Deleting a container may cause unexpected issues for the SharePoint Embedded application the Container belongs to and may interrupt usage of the application.

```powershell
Remove-SPOContainer -Identity <ContainerId>
```

The `ContainerId` is the ID of the container that is moved to the deleted container collection. For more information about using this command, see [Remove-SPOContainer cmdlet](/powershell/module/sharepoint-online/remove-spocontainer).

### View deleted containers

Admins can get a list of deleted containers on the deleted container collection using the following command. For more information about using this command, see [Get-SPODeletedContainer](/powershell/module/sharepoint-online/get-spodeletedcontainer).

```powershell
Get-SPODeletedContainer
```

### Restore deleted containers

Admins can restore a deleted container from the deleted container collection using the following command. For more information about using this command, see [Restore-SPODeletedContainer cmdlet](/powershell/module/sharepoint-online/get-spodeletedcontainer).

```powershell
Restore-SPODeletedContainer -Identity <ContainerId>
```

### Permanently delete containers

Admins can permanently delete a container from the deleted container collection if the container has no further retention policies applied to it. For more information about using this command, see [Remove-SPODeletedContainer cmdlet](/powershell/module/sharepoint-online/remove-spodeletedcontainer).

```powershell
Remove-SPODeletedContainer -Identity <ContainerId>
```

### Guest application permission management

If permitted, Admins can add, edit, and remove guest application access to SharePoint Embedded applications. A guest application is defined as any application within the enterprise applications of the owning tenant. For more information about using this command, see [Set-SPOApplicationPermission](/powershell/module/sharepoint-online/set-spoapplicationpermission).

```powershell
Set-SPOApplicationPermission
   [[-OwningApplicationId] <OwningApplicationid>]
   [[-ApplicationId] <ApplicationId>]
   [[-PermissionAppOnly] <AppOnlyPermission>]
   [[-PermissionDelegated] <DelegatedPermission>]
```
 
## Security and Compliance Administration

SharePoint Embedded uses Microsoft’s comprehensive compliance and data governance solutions to help organizations manage risks, protect, and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions work similarly in the SharePoint Embedded platform as they do today in Microsoft 365 platform so that data is stored in a secure, protected way that meets customers’ business and compliance policies while making it easy for Compliance and SharePoint Administrators to enforce critical security and compliance policies on the content. For information on supported security and compliance capabilities, see [Security and Compliance](../../security-and-compliance.md).
