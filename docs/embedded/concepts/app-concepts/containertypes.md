---
title: SharePoint Embedded Container Types
description: This article explains how Container Types work.
ms.date: 03/05/2023
ms.localizationpriority: high
---
 
# SharePoint Embedded Container Types

In SharePoint Embedded, files and documents are stored in Containers, each identified by a Container Type, which is a property stamped on every instance. This Container Type links all Containers to a specific Azure Subscription for billing. Each Container Type is owned by a single SharePoint Embedded Application, and each SharePoint Embedded Application can own only one Container Type. It specifies the access permissions an SharePoint Embedded Application has for all Containers of that type, such as creating, reading, writing, deleting containers, and managing container permissions.

## Types of Container Types
There are two types of Container Types that a developer tenant can create
1. Trial Container Types
2. Standard Container Types
 
## Trial Container Types
To enable customers to explore the development of SharePoint Embedded applications and assess its features, we offer the ability to create a Trial Container Type. Each customer can have only one Trial Container Type in their tenant at a time. Trial Container Types are not linked to a billing profile and can only be utilized by the tenant developing the application; in this scenario, the partner tenant is always the same as the consuming tenant. The Trial Container Type remains valid for up to 30 days but can be removed at any time within this period. There are two ways to create a Trial Container Type:

- You can use [SharePoint Embedded Visual Studio Code Extension](https://techcommunity.microsoft.com/t5/sharepoint-embedded-blog/introducing-the-sharepoint-embedded-visual-studio-code-extension/ba-p/4040723) to create a Trial Container Type with just a few clicks. The VS Code extension also registers your Container Type and creates Containers for you.

- A Trial Container Type can be created using SPO Powershell. You must be a SharePoint Online Administrator or Global Administrator to run this cmdlet.
   
```ps
New-SPOContainerType
[–TrialContainerType]
[ -ContainerTypeName <ContainerTypeName>]
[ -OwningApplicationId <OwningApplicationId>]
```
After creating the Trial Container Type, customers can create up to five active Containers in the trial Container Type. Trial Containers are provided with 1 GB of storage space. The Trial Container Type expires after 30 days, resulting in the loss of access to all Containers created using that Container Type. Customers can create a new Trial Container Type, but doing so requires the deletion of ALL existing Trial Containers

> [!NOTE]
> The Trial Container Type is the only Container Type that is restricted to the Partner (creating) tenant and cannot be shared with other consuming tenants.
> 
> It is not possible to convert a Trial Container Type and/or the associated Containers to a Standard Container Type.


## Standard Container Types
Standard Container Types are associated with a billing profile in [Azure Portal](portal.azure.com) when they are created. The billing profile includes a n Azure Subscription ID and a Region Group. There are two pre-requisites to creating s Standard Container Type
- An Azure subscription and Resource Group must be present in the [Azure Portal](portal.azure.com).
- An App regisration must be created in [Azure Entra]
  
To meet the pre-requisites of creating a Standard Container Type, refer to [register containertype](bing.com).

#### Create a Standard ContainerType

A developer admin can create a new billable Container Type using the following PowerShell cmdlet. Tenants can create a maximum of five Container Types. Trial Container Types don't count against the maximum number of Container Types that a Partner tenant can create.

You must be a SharePoint Online Administrator or Global Administrator to run this cmdlet and must have the latest version of SharePoint PowerShell module.

```ps
New-SPOContainerType
[–ContainerTypeName <ContainerTypeName>]
[-OwningApplicationId <OwningApplicationId>]
[ -AzureSubscriptionId <AzureSubscriptionId>]
[ -ResourceGroup <ResourceGroup>]
[ -Region <Region>]
```


## Viewing ContainerTypes
Developer Admin can view all the SharePoint Embedded Container Types created by them on their tenant using this PowerShell commandlet. This cmdlet retrieves and returns the list of Container Types  created for a SharePoint Embedded Application in the tenant. 

```ps
Get-SPOContainerType   
```
Example of an output of the Get-SPOContainerType  cmdlet
```ps
ContainerTypeId     : 4f0af585-8dcc-0000-223d-661eb2c604e4
ContainerTypeName   : ContosoLegal
OwningApplicationId : a735e4af-b86e-0000-93ba-1faded6c39e1
Classification      : Standard
AzureSubscriptionId : 564e9025-f7f5-xxx9-9ddd-4cdxxxx1755
ResourceGroup       : prod-resources
Region              : EastUS
```

## Registering Container Types
To register both Trial and Standard Container Types, please refer to the following [tutorial](../../tutorials/register-containertype.md)

## Deleting Trial Container Types

Developer Admins can only delete Trial Container Types and not Standard Container Types. To delete a trial Container Type, you must remove all Containers of the Trial Container Type first, including from the recycle bin. To remove Containers from the Trial Container Type refer to the Consuming Tenant Admin [article](https://learn.microsoft.com/en-us/sharepoint/dev/embedded/concepts/admin-exp/cta#delete-containers)

```ps
Remove-SPOContainerType
[-ContainerTypeId <ContainerTypeId>]
```
Once all the Containers are deleted, Developer Admins can delete the Container Types using the below PowerShell commandlet.



