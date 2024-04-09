---
title: SharePoint Embedded Container Types
description: This article explains how Container Types work.
ms.date: 03/05/2023
ms.localizationpriority: high
---

# SharePoint Embedded Container Types

In SharePoint Embedded, files and documents are stored in Containers, each identified by a Container Type, which is a property stamped on every instance. A Container Type links all Containers to a specific Azure Subscription for billing. A single SharePoint Embedded Application owns each Container Type, and each SharePoint Embedded Application can own only one Container Type. It specifies the access permissions a SharePoint Embedded Application has for all Containers of that type, such as creating, reading, writing, deleting containers, and managing container permissions.

## Two Kinds of Container Types

There are two kinds of Container Types that a developer tenant can create:

1. [Trial Container Types](#trial-container-types)
1. [Standard Container Types](#standard-container-types)



## Trial Container Types

To enable customers to explore the development of SharePoint Embedded applications and assess its features, we offer the ability to create a Trial Container Type. Each customer can have only one Trial Container Type in their tenant at a time. The tenant developing the application can utilize Trial Container Types, which aren't linked to a billing profile. In this scenario, the partner tenant remains the same as the consuming tenant. The Trial Container Type remains valid for up to 30 days but can be removed at any time within this period. There are two ways to create a Trial Container Type:

- You can use [SharePoint Embedded Visual Studio Code Extension](../../getting-started/spembedded-for-vscode.md) to create a Trial Container Type in just a few steps. The Visual Studio Code extension also registers your Container Type and creates Containers for you.
- A Trial Container Type can be created using SharePoint PowerShell. You must be a SharePoint Embedded Administrator or Global Administrator to run this cmdlet. If you are a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

```powershell
New-SPOContainerType
[–TrialContainerType]
[ -ContainerTypeName <ContainerTypeName>]
[ -OwningApplicationId <OwningApplicationId>]
```
After a Trial Container Type is created, customers can create up to five active Containers in the trial Container Type. Trial Containers are provided with 1 GB of storage space. The Trial Container Type expires after 30 days, resulting in the loss of access to all Containers created using that Container Type. Customers can create a new Trial Container Type, but doing so requires the deletion of ALL existing Trial Containers.

> [!NOTE]
> The Trial Container Type is the only Container Type that is restricted to the Partner (creating) tenant and cannot be shared with other consuming tenants.
>
> It is not possible to convert a Trial Container Type and/or the associated Containers to a Standard Container Type.

## Standard Container Types

Standard Container Types are associated with a billing profile in [Azure portal](https://portal.azure.com) when they're created. The billing profile includes an Azure Subscription ID and a Region Group. There are two prerequisites to creating s Standard Container:
- An Azure subscription and Resource Group must be present in the [Azure portal](https://portal.azure.com)
- An App registration must be created in [Microsoft Entra ID](https://entra.microsoft.com)

## Create a Standard ContainerType

A developer admin can create a new billable Container Type using the following PowerShell cmdlet. Tenants can create a maximum of five Container Types. Trial Container Types don't count against the maximum number of Container Types that a Partner tenant can create.


> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded Container commandlets mentioned in this article.
> 
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
> 
> If you are a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.


> [!NOTE]
> The user or admin who will set up billing relationship for SharePoint Embedded will need to have owner or contributor permissions on the Azure subscription.

```powershell
New-SPOContainerType
[–ContainerTypeName <ContainerTypeName>]
[-OwningApplicationId <OwningApplicationId>]
[ -AzureSubscriptionId <AzureSubscriptionId>]
[ -ResourceGroup <ResourceGroup>]
[ -Region <Region>]
```

## Viewing ContainerTypes

Developer Admin can view all the SharePoint Embedded Container Types created by them on their tenant using this PowerShell cmdlet. This cmdlet retrieves and returns the list of Container Types  created for a SharePoint Embedded Application in the tenant.

```powershell
Get-SPOContainerType
```

Example output of the `Get-SPOContainerType`  cmdlet

```powershell
ContainerTypeId     : 4f0af585-8dcc-0000-223d-661eb2c604e4
ContainerTypeName   : ContosoLegal
OwningApplicationId : a735e4af-b86e-0000-93ba-1faded6c39e1
Classification      : Standard
AzureSubscriptionId : 564e9025-f7f5-xxx9-9ddd-4cdxxxx1755
ResourceGroup       : prod-resources
Region              : EastUS
```

## Registering Container Types

In order to create and interact with Containers, you must [register](../app-concepts/register-api-documentation.md) the Container Type within the Consuming Tenant. The owning application defines the permissions for the Container Type by invoking the [registration API](../app-concepts/register-api-documentation.md).

## Deleting Trial Container Types

Developer Admins can only delete Trial Container Types and not Standard Container Types. To delete a trial Container Type, you must remove all Containers of the Trial Container Type first, including from the recycle bin. To remove Containers from the Trial Container Type, refer to [Consuming Tenant Admin](../admin-exp/cta.md#delete-containers). Once all the Containers are deleted, Developer Admins can delete the Container Types using the below PowerShell cmdlet.

```powershell
Remove-SPOContainerType
[-ContainerTypeId <ContainerTypeId>]
```
