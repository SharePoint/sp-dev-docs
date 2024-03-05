---
title: SharePoint Embedded Container Types
description: This article explains how Container Types work.
ms.date: 03/05/2023
ms.localizationpriority: high
---
 
# SharePoint Embedded Container Types

In SharePoint Embedded, all files and documents are stored in Containers, and each Container is identified by a Container Type.

Container Type is a property stamped on every Container instance. Each Container Type is owned by one SharePoint Embedded Application; and each Application can own only one Container Type.

The primary function of a Container Type is to manage the application workload that can access the Containers. Container Type defines the access permissions an Application has towards all Containers of that type, including create, read, write, delete containers; manage container permissions, etc.

> [!TIP]
> To learn more about application architecture, see [Application Architecture](./app-architecture.md).

## Types of Container Types
There are two types of Container Types that a developer tenant can create
1. Trial Container Types
2. Standard Container Types
 
### Trial Container Types
To enable customers to experience developing SharePoint Embedded applications and evaluate the features it offers, we provide customers the capability to create a Trial Container Type. Each customer can only have one Trial Container Type in their tenant at a time. Trial Container Types are not associated with a billing profile and can only be used by the tenant developing the application; in this case, the partner tenant is always the same as the consuming tenant. The Trial Container Type is valid for up to 30 days but can be removed at any time within the 30-day window.

#### There are two ways to create a Trial Container Type:

1. If you have an M365 tenant, the [SharePoint Embedded Visual Studio Code Extension](https://techcommunity.microsoft.com/t5/sharepoint-embedded-blog/introducing-the-sharepoint-embedded-visual-studio-code-extension/ba-p/4040723) quickly walks you through the creation of an application in Microsoft Entra ID and a Trial Container Type in just a few clicks. The VS Code extension also registers your Container Type and creates Containers for you.

2. A Trial Container Type can be created using SPO Powershell. You must be a SharePoint Online Administrator or Global Administrator to run this cmdlet.
   
```ps
New-SPOContainerType
[–TrialContainerType]
[ -ContainerTypeName <ContainerTypeName>]
[ -OwningApplicationId <OwningApplicationId>]
```


> [!NOTE]
> The Trial Container Type is the only Container Type that is restricted to the Partner (creating) tenant and cannot be shared with other consuming tenants.
> 
> It is not possible* to convert a Trial Container Type and/or the associated Containers to a Standard Container Type.

Tenants can create a maximum of five Container Types. Trial Container Types don't count against the maximum number of Container Types that a Partner tenant can create.

Once the Trial Container Type is created, the customer can create as many as five active Containers of that type. Trial Containers are allotted 1 GB of storage space. A Trial Container Type will expire after 30 days. Once the Trial Container Type is expired, access will be lost to all Containers created using that Container Type. A new Trial Container Type can be created; however, it requires the deletion of ALL existing Trial Containers.

## Standard Container Types
Standard Container Types are associated with a billing profile in [Azure Portal](portal.azure.com) when they are created--including an Azure Subscription ID and a Region Group. To create Standard Container Types refer to [register containertype](bing.com).

### Create a Standard ContainerType

Creates a new containertype in the tenant. This command is available only in SharePoint Online Management Shell version 16.0.24211.12000 or higher to run this cmdlet. You must be a SharePoint Online Administrator or Global Administrator to run this cmdlet. 

```ps
New-SPOContainerType
[–ContainerTypeName <ContainerTypeName>]
[-OwningApplicationId <OwningApplicationId>]
[ -AzureSubscriptionId <AzureSubscriptionId>]
[ -ResourceGroup <ResourceGroup>]
[ -Region <Region>]
```


### Viewing ContainerTypes
Partner Tenant Admins can view all the SharePoint Embedded Container Types created by them on their tenant using this PowerShell commandlet.

```ps
Get-SPOContainerType   
```
Retrieves and returns the list of Container Types and details of a containertype created for a SharePoint Embedded Application in the tenant. 


```ps
Get-SPOContainerType  
[-ContainerTypeId <ContainerTypeId>] 
```
Returns the details of the specified Container Type.


> Note: You must be a SharePoint Online Administrator or Global Administrator to run this cmdlet. The Power Shell commandlets are only available only in SharePoint Online Management Shell version 16.0.24211.12000 or higher. 

## Registering Container Types
To register both Trial and Standard Container Types, please refer to the following [tutorial](../../tutorials/register-containertype.md)


## Deleting Container Types

Partner Tenant Admins can only delete Trial Container Types and not Standard Container Types. To delete a trial Container Type, you must remove all Containers of the Trial Container Type first, including from the recycle bin. 

To remove Containers from the Trial Container Type refer to the Consuming Tenant Admin [article](https://learn.microsoft.com/en-us/sharepoint/dev/embedded/concepts/admin-exp/cta#delete-containers)


Once all the Containers are deleted, Partner Tenant Admins can delete the Container Types using the below PowerShell commandlet.

```ps
Remove-SPOContainerType
[-ContainerTypeId <ContainerTypeId>]
```
> > Note:
>  For trial Container Types, the partner tenant is always same as consuming tenant  
>  Deletion of a Standard Container Type is not supported.
