# Consuming Tenant Admin PowerShell 

 
The Consuming tenant administrator (CTA) can manage containers using PowerShell commands. They can access the container management specific commands on PowerShell. To do so, they need to be assigned the role of Microsoft 365 SharePoint Embedded Administrator (SPE Admin). Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Consuming Tenant Admin for SharePoint Embedded. The SharePoint Embedded Role is available in Microsoft Entra and Microsoft 365 Admin Center.  

For information on SPE admin role, see SPE Admin 

 The following are some of the container specific commands actions currently supported on PowerShell: 

Application administration 
- Get details of all SPE applications in CTA’s tenant 
- Get details of all SPE applications in CTA’s tenant sorted basis storage 
- Get detail of a specific SPE application in CTA’s tenant 
- Get the permissions of owning applications in the CTA’s tenant 
- Configure External sharing setting of a container of a SPE application in CTA’s tenant 

 

Container administration 
- Get details of all containers of a SPE application in CTA’s tenant 
- Get details of a specific container of a SPE application in CTA’s tenant 
- Set Sensitivity label of a specific container of a SPE application in CTA’s tenant 
- Soft delete a container of a SPE application in CTA’s tenant 
- Get details of all soft deleted containers in CTA’s tenant 
- Restore a soft deleted container of a SPE application in CTA’s tenant 
- Permanently delete a soft deleted container of a SPE application in CTA’s tenant 

Administration Tools 

Consuming tenant CTA can manage SharePoint Embedded applications with PowerShell commands using SharePoint Online Management Shell. 

To get started using PowerShell to manage SharePoint Embedded, you have to install the SharePoint Online Management Shell and connect to SharePoint Online. 

 

 Important 

You need version 16.0.24211.12000 or higher to run the commands for SharePoint Embedded. 

 

Consuming Tenant Administrator in PowerShell 

 

Application Administration 

With PowerShell cmdlets, tenant admin can get a list of SharePoint Embedded applications registered in their Microsoft 365 tenancy. They can also see the Sharing capability and Tenant Sharing Capability information of a SPE application . They can also view all the applications that have "read" and/or "write" access and the level of access to these SharePoint Embedded applications. 

View Applications 

 

The following commands can be used to manage SharePoint Embedded applications registered on your Microsoft 365 tenants. 

 

Get-SPOApplication 

A screen shot of a computer

Description automatically generated 

 

Get-SPOApplication -OwningApplicationId <OwningApplicationId> 

A screenshot of a computer program

Description automatically generated 

 

Get-SPOApplication -OwningApplicationId <OwningApplicationId> -ApplicationId <ApplicationId> 

A black screen with white text

Description automatically generated 

OwningApplicationId is the ID of the SharePoint Embedded application and ApplicationId is the ID of the application that has access to the SharePoint Embedded application. Application Administration cmdlets aren't applicable for Microsoft Loop. For more information about using this command, see Get-SPOApplication cmdlet. 

Set Sharing Capability of applications 

CTA can set the sharing capability at an application level to determine whether files of the containers of the application be shared with external guests or not 

Set-SPOApplication -OwningApplicationId <OwningApplicationId> – SharingCapability <SharingCapability> - OverrideTenantSharingCapability <$ OverrideTenantSharingCapability > 

 

<SharingCapability> can take the following values: Disabled; ExistingExternalUserSharingOnly; ExternalUserSharingOnly;  ExternalUserAndGuestSharing 

< $OverrideTenantSharingCapability > can take the following values: $true; $false 

 

 

 

For information on Sharing Capability, see Sharing Capability 

 

Container Administration 

View Containers 

CTA can get a list of all the containers for a SharePoint Embedded application using the following commands. This command lists all the active containers within the application. 

Get-SPOContainer -OwningApplicationId <OwningApplicationId> 

Get-SPOContainer -OwningApplicationId <OwningApplicationId> | FT 

The OwningApplicationId is the ID of the SharePoint Embedded application. For more information about using this command, see Get-SPOContainer cmdlet. To enumerate Microsoft Loop containers, use Owning App ID: a187e399-0c36-4b98-8f04-1edc167a0996 for all the cmdlets of container administration. 

A screenshot of a computer

Description automatically generated 

A black screen with white text

Description automatically generated 

CTA can also get a list of all the containers of a SharePoint Embedded application sorted by storage using the following commands. 

Get-SPOContainer -OwningApplicationId <OwningApplicationId> -SortByStorage <value> 

<value> can be Ascending; Descending 

A screenshot of a computer

Description automatically generated 

 

View details of a Container 

CTA can get the details of a container within an application using the following command. This command returns more details of a container including StorageUsed, Ownership details, SiteURL, Label information, Owners count etc. 

CTA can use the following command: 

Get-SPOContainer -OwningApplicationId <OwningApplicationId> -Identity <ContainerId> 

 

Here, the Identity is the ID of the Container. For more information about using this command, see Get-SPOContainer cmdlet. 

 

Sensitivity Label of a container 

CTA can set the sensitivity label of a container of an application using the following: 

Set-SPOContainer -Identity <ContainerID> -SensitivityLabel <SensitivityLabel> 

The ContainerId is the ID of the container whose sensitivity label is being set 

 

CTA can remove the sensitivity label of a container of an application using the following: 

Set-SPOContainer -Identity b! <ContainerID> -RemoveLabel 

 

 

Delete Containers 

Deleting a container can have implications on the functionality of a SharePoint Embedded app, Here are some examples of the potential issues that an application can encounter when deleting a container. 

 

Data Loss: Deleting a container removes all its content. If the SharePoint Embedded application relies on the data stored within the deleted container, the app might no longer function as expected or might lose access to critical information. 

Broken Links: If the SharePoint Embedded application contains links or references to the deleted container, those links become broken, leading to errors or malfunctioning features within the app. 

Permissions Issues: Deleting a container can affect permissions settings. If the SharePoint Embedded app relies on specific permissions granted to the deleted container, it might encounter permission issues and fail to function properly. 

Therefore, it's essential to carefully consider the consequences of deleting a container and ensure that appropriate measures are taken to mitigate any potential issues. 

 

Permanent Deletion 

When CTA delete a Container, it goes into the Recycle Bin. A deleted container can be restored from the Recycle Bin within 93 days. If a container is deleted from the Recycle Bin, or it exceeds the 93-day retention period, it's permanently deleted. Deleting a container deletes everything within it, including all documents and files. 

 

CTA should notify the Container owners before they delete a Container so they can move their data to another location, and also inform users when the Container is deleted. 

 

 Warning 

 

Deleting a container may cause unexpected issues for the SharePoint Embedded application the container belongs to and may interrupt usage of the application. 

 

Remove-SPOContainer -Identity <ContainerId> 

The ContainerId is the ID of the container that is moved to the deleted container collection. For more information about using this command, see Remove-SPOContainer cmdlet. 

 

View deleted containers 

CTA can get a list of deleted containers on the deleted container collection using the following command. For more information about using this command, see Get-SPODeletedContainer. 

 

Get-SPODeletedContainer 

Restore deleted containers 

CTA can restore a deleted container from the deleted container collection using the following command. For more information about using this command, see Restore-SPODeletedContainer cmdlet. 

 

Restore-SPODeletedContainer -Identity <ContainerId> 

Permanently delete Containers 

CTA can permanently delete a Container from the deleted container collection if the Container has no further retention policies applied to it. For more information about using this command, see Remove-SPODeletedContainer cmdlet. 

 

Remove-SPODeletedContainer -Identity <ContainerId> 

 

 

 
