---
title: SharePoint Embedded Container Types
description: This article explains how Container Types work.
ms.date: 04/09/2024
ms.localizationpriority: high
---

# SharePoint Embedded Container Types

Container Type is a SharePoint Embedded framework that defines the relationship, access privileges, billing accountability between a SharePoint Embedded application and a set of container instances. It also configures the behaviors of the set of container instances. Each Container Type is strongly coupled with one SharePoint Embedded application, which is referred to as the owning application. The owning application developer is responsible for creating and managing their Container Type. SharePoint Embedded mandates a 1:1 relationship between owning application and Container Type.
Container Type is represented on each container instance as an immutable property (ContainerTypeID) and is used across the entire SharePoint Embedded ecosystem, including:

- Access authorization. A SharePoint Embedded application must be associated to a Container Type to get access to container instances of that type. Once associated, the application has access to all container instances of that type. The actual access privilege is determined by the application-ContainerTypeID permission setting. The owning application by default has full access privilege to all container instances of the Container Type it is strongly coupled with. Learn more about [SharePoint Embedded Authorization](../app-concepts/auth.md).
- Easy exploration. Container Type can be created for trial purposes, allowing developers to explore SharePoint Embedded application development and assess its features for free.
- Billing. Container Type for non-trial purposes are billable and must be created with an Azure Subscription. Usage of containers is metered and charged. Learn more about [metering](../admin-exp/meters.md) and the [SharePoint Embedded billing experience](../admin-exp/billing.md).
- Configurable behaviors. Container Type defines selected behaviors for all container instances of that type. Learn more about setting [Container Type configuration](../app-concepts/containertypes.md#configuring-container-types) 


> [!NOTE]
> 1. You must specify the purpose of the Container Type you are creating at creation time. Dependent on the purpose, you may or may not need to provide your Azure Subscription ID. A Container Type set for trial purpose cannot be converted for production; or vice versa.
> 2. You must use the latest version of SharePoint Powershell for Container Type configurations. 

## Trial use

A Container Type can be created for trial/development purposes and is not linked to any Azure billing profile. This enables developers to explore SharePoint Embedded application development and assess its features for free. In this scenario, the developer tenant is the same as the consuming tenant.  Each developer can have only one Container Type in the Trial status in their tenant at a time; and the Container Type is valid for up to 30 days but can be removed at any time within this period. To create a Container Type for trial purposes, you can:

- Use SharePoint Embedded Visual Studio Code Extension to create the Container Type in just a few steps. The Visual Studio Code extension also registers your Container Type and creates Containers for you.
- Use SharePoint PowerShell. You must be a SharePoint Embedded Administrator or Global Administrator to run this cmdlet. If you're a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

```powershell
New-SPOContainerType
[–TrialContainerType]
[ -ContainerTypeName <ContainerTypeName>]
[ -OwningApplicationId <OwningApplicationId>]
```

The following restrictions are applied to Container Type in the Trial status:
- Up to five active Container instances of the Container Type can be created.
- Each Container instance has up to 1GB of storage space.
- The Container Type expires after 30 days and access to any existing Container instances of that type will be removed. 
- Developer must delete all Container instances of an existing Container Type in Trial status to create a new Container Type for trial.
- The Container Type is restricted to work in the developer tenant. It cannot be deployed in other consuming tenants.

## Standard/Non-trial use

Container Type can also be created with an Azure billing profile, which includes an Azure Subscription ID and a Region Group. This Container Type is in the Standard status and is billable. You need the following to create a Container Type in the Standard status:
-	An Azure subscription and Resource Group must be present in the Azure portal
-	An App registration must be created in Microsoft Entra ID
Each developer tenant can create up to five Container Types in the Standard status. To create one, use the following Powershell cmdlet:

```powershell
New-SPOContainerType
[–ContainerTypeName <ContainerTypeName>]
[-OwningApplicationId <OwningApplicationId>]
[-AzureSubscriptionId <AzureSubscriptionId>]
[-ResourceGroup <ResourceGroup>]
[-Region <Region>]
```
> [!NOTE]
> The user or admin who will set up billing relationship for SharePoint Embedded will need to have owner or contributor permissions on the Azure subscription.
> 

## Configuring Container Types
Developer Admin can set selected settings on the SharePoint Embedded Container Types created by using this PowerShell cmdlet.

This cmdlet allows admins to set [M365 content discoverability](../content-experiences/user-experiences-overview.md) and [sharing](../app-concepts/sharing-and-perm.md) settings on Container Types. The setting is applicable to all container instances of the Container Type.

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId 4f0af585-8dcc-0000-223d-661eb2c604e4 -DiscoverabilityDisabled $False
```

## Viewing Container Types

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

## Deleting Container Types

Developer Admins can only delete Container Types in Trial status. To delete a Container Type in Trial status, you must remove all Containers of the Container Type first, including from the deleted container collection. To remove Containers, refer to [Consuming Tenant Admin](../admin-exp/cta.md#delete-containers). Once all the Containers are deleted, Developer Admins can delete the Container Types using the below PowerShell cmdlet.

```powershell
Remove-SPOContainerType
[-ContainerTypeId <ContainerTypeId>]
```
