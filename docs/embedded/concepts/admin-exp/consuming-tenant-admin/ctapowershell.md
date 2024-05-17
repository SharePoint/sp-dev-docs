# Consuming Tenant Admin PowerShell 

 
The Consuming Tenant Administrator (CTA) can manage containers using PowerShell commands, specifically designed for container management. To access these commands, they must be assigned the role of Microsoft 365 SharePoint Embedded Administrator (SPE Admin). Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator role. The Global Administrator role inherently includes all permissions of the SharePoint Embedded Administrator role. Additionally, a SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Consuming Tenant Admin for SharePoint Embedded. The SharePoint Embedded Administrator role is available in both Microsoft Entra and the Microsoft 365 Admin Center.

For more information on how to assign the SharePoint Embedded Admin role, refer to the [SPE Admin]([docs/embedded/concepts/admin-exp/adminrole.md](https://github.com/cindylay/sp-dev-docs/blob/update-ga/docs/embedded/concepts/admin-exp/adminrole.md))

 The following are some of the container specific commands actions currently supported on PowerShell: 

### Application administration 
- Get details of all SPE applications registered in the tenant
- Get details of all SPE applications in CTA’s tenant sorted basis storage 
- Get detail of a specific SPE application in the tenant
- Get the permissions of owning applications in the tenant 
- Configure External sharing setting of a container of a SPE application in the tenant

 ### Container administration 
- Get details of all containers of a particular SharePoint Embedded application in the tenant
- Get details of a specific container
- Set Sensitivity label of a specific container
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

# or

Get-SPOApplication -OwningApplicationId <OwningApplicationId>

# or

Get-SPOApplication -OwningApplicationId <OwningApplicationId> -ApplicationId <ApplicationId>
```

OwningApplicationId is the ID of the SharePoint Embedded application and ApplicationId is the ID of the application that has access to the SharePoint Embedded application. Application Administration cmdlets aren't applicable for Microsoft Loop. For more information about using this command, see [Get-SPOApplication cmdlet](/powershell/module/sharepoint-online/get-spoapplication).

## Container Administration

### View Containers

Admins can get a list of all the containers for a SharePoint Embedded application using the following commands. This command lists all the active containers within the application.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> | FT
```

The `OwningApplicationId` is the ID of the SharePoint Embedded application. For more information about using this command, see [Get-SPOContainer cmdlet](/powershell/module/sharepoint-online/get-spocontainer). To enumerate Microsoft Loop containers, use Owning App ID: a187e399-0c36-4b98-8f04-1edc167a0996 for all the cmdlets of container administration.

### View details of a Container

Admins can get the details of a container within an application using the following command. This command returns more details of a container including StorageUsed, Ownership details, SiteURL, Label information etc.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> -Identity <ContainerId>
```

Here, the Identity is the ID of the Container. For more information about using this command, see [Get-SPOContainer cmdlet](/powershell/module/sharepoint-online/get-spocontainer).

### Delete Containers

Deleting a container can have implications on the functionality of a SharePoint Embedded app, Here are some examples of the potential issues that an application can encounter when deleting a container.

- Data Loss: Deleting a container removes all its content. If the SharePoint Embedded application relies on the data stored within the deleted container, the app might no longer function as expected or might lose access to critical information.
- Broken Links: If the SharePoint Embedded application contains links or references to the deleted container, those links become broken, leading to errors or malfunctioning features within the app.
- Permissions Issues: Deleting a container can affect permissions settings. If the SharePoint Embedded app relies on specific permissions granted to the deleted container, it might encounter permission issues and fail to function properly.

Therefore, it's essential to carefully consider the consequences of deleting a container and ensure that appropriate measures are taken to mitigate any potential issues.

### Permanent Deletion

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

### Permanently delete Containers

Admins can permanently delete a Container from the deleted container collection if the Container has no further retention policies applied to it. For more information about using this command, see [Remove-SPODeletedContainer cmdlet](/powershell/module/sharepoint-online/remove-spodeletedcontainer).

```powershell
Remove-SPODeletedContainer -Identity <ContainerId>
```
