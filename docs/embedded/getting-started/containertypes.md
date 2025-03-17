---
title: Create New SharePoint Embedded Container Types
description: This article explains how Container Types work and the steps to create new Container Types.
ms.date: 03/03/2025
ms.localizationpriority: high
---

# SharePoint Embedded Container Types

A container type is a SharePoint Embedded resource that defines the relationship, access privileges, and billing accountability between a SharePoint Embedded application and a set of containers. Also, the container type defines behaviors on the set of containers.

Each container type is strongly coupled with one SharePoint Embedded application, which is referred to as the owning application. The owning application developer is responsible for creating and managing their container types. SharePoint Embedded mandates a 1:1 relationship between owning application and a container type.

Container type is represented on each container instance as an immutable property (ContainerTypeID) and is used across the entire SharePoint Embedded ecosystem, including:

- **Access authorization**: A SharePoint Embedded application must be associated with a container type to get access to container instances of that type. Once associated, the application has access to all container instances of that type. The actual access privilege is determined by the application-ContainerTypeID permission setting. The owning application by default has full access privilege to all container instances of the container type it's strongly coupled with. Learn more about [SharePoint Embedded Authorization](../development/auth.md).
- **Easy exploration**: Container type can be created for trial purposes, allowing developers to explore SharePoint Embedded application development and assess its features for free.
- **Billing**: Container types for non-trial purposes are billable and must be created with an Azure Subscription. The usage of containers is metered and charged. Learn more about [metering](../administration/billing/meters.md) and the [SharePoint Embedded billing experience](../administration/billing/billing.md).
- **Configurable behaviors**: Container type defines selected behaviors for all container instances of that type. Learn more about setting [Container type configuration](../getting-started/containertypes.md#configuring-container-types).

> [!NOTE]
>
> 1. You must specify the purpose of the container type you're creating at creation time. Depending on the purpose, you may or may not need to provide your Azure Subscription ID. A container type set for trial purposes can't be converted for production; or vice versa.
> 1. You must use the latest version of SharePoint PowerShell to configure a container type. For permissions and the most current information about Windows PowerShell for SharePoint Embedded, see the documentation at [Intro to SharePoint Embedded Management Shell](/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell).

# Container Types Explained

## Trial use

A container type can be created for trial/development purposes and isn't linked to any Azure billing profile. This enables developers to explore SharePoint Embedded application development and assess its features for free. For trial container types, the developer tenant is the same as the consuming tenant. 
Each developer can have only one container type in the trial status in their tenant at a time. The trial container type is valid for up to 30 days but can be removed at any time within this period. 

To create a container type for trial purposes, you can:

- Use SharePoint Embedded Visual Studio Code Extension to create the container type in just a few steps. The Visual Studio Code extension registers your container type and creates containers for you.
- Use SharePoint PowerShell. You must be a SharePoint Embedded Administrator or Global Administrator to run this cmdlet. If you're a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

```powershell
New-SPOContainerType [–TrialContainerType] [-ContainerTypeName] <String> [-OwningApplicationId] <String> [-ApplicationRedirectUrl] <String> [<CommonParameters>]
```

The following restrictions are applied to trial container types:

- Up to five containers of the container type can be created. This includes active containers and those in the recycle bin.
- Each container has up to 1 GB of storage space.
- The container type expires after 30 days and access to any existing containers of that container type will be removed.
- The developer must permanently delete all containers of an existing container type in trial status to create a new container type for trial. This includes containers in the deleted container collection.
- The container type is restricted to work in the developer tenant. It can't be deployed in other consuming tenants.

## Standard/Non-trial use

A standard container type is linked to a billing profile, which can be regular or direct-to-consumer billing. Each developer tenant can create up to five standard container types.
Standard container types are created using the [New-SPOContainerType](/powershell/module/sharepoint-online/new-spocontainertype) cmdlet. For container types with regular billing, create a billing profile using the [Add-SPOContainerTypeBilling](/powershell/module/sharepoint-online/add-spocontainertypebilling) cmdlet. For container types with direct to customer billing, use the flag `-IsPassThroughBilling`. For the direct to customer billed container type, there's no need to attach a billing profile. 

You need the following to create a standard container type:

- Use SharePoint PowerShell. You must be a SharePoint Embedded Administrator or Global Administrator to run this cmdlet. If you're a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.
- An Azure subscription and a resource group must be present in the Azure portal for regular billing. 
- An App registration must be created in Microsoft Entra ID.

To create a standard container type with a regular billing profile, use the following cmdlets:

```powershell
New-SPOContainerType [-ContainerTypeName] <String> [-OwningApplicationId] <String> [-ApplicationRedirectUrl] <String> [<CommonParameters>]
```

```powershell
Add-SPOContainerTypeBilling –ContainerTypeId <ContainerTypeId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>
```

> [!NOTE]
> The user or admin who sets up a billing relationship for SharePoint Embedded must have owner or contributor permissions on the Azure subscription.

To create a direct to customer billed, standard container type, use the following cmdlet:

```powershell
New-SPOContainerType [-ContainerTypeName] <String> [-OwningApplicationId] <String> [-ApplicationRedirectUrl] <String> [-IsPassThroughBilling] [<CommonParameters>]
```

## Configuring Container Types

The Developer Admin can set selected settings on the SharePoint Embedded container types created by using this PowerShell cmdlet.

This cmdlet allows admins to set [Microsoft 365 content discoverability](../development/content-experiences/user-experiences-overview.md) and [sharing](../development/sharing-and-perm.md) settings on container types. The setting applies to all container instances of the container type:

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId 4f0af585-8dcc-0000-223d-661eb2c604e4 -DiscoverabilityDisabled $False
```

## Viewing Container Types

The Developer Admin can view all the SharePoint Embedded container types they created on their tenant using `Get-SPOContainerType`. This cmdlet retrieves and returns the list of container types created for a SharePoint Embedded Application in the tenant.

```powershell
Get-SPOContainerType [<CommonParameters>]
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

To create and interact with containers, you must [register](../getting-started/register-api-documentation.md) the container type within the Consuming Tenant. The owning application defines the permissions for the container type by invoking the [registration API](../getting-started/register-api-documentation.md).

## Deleting Container Types

Developer admins can delete both trial and standard container types. To delete a container type, you must first remove all containers of that container type, including from the deleted container collection. To remove containers, refer to [Consuming Tenant Admin](../administration/consuming-tenant-admin/cta.md).
Once all the containers are deleted, Developer admins can delete the container type using `Remove-SPOContainerType`.

```powershell
Remove-SPOContainerType [-ContainerTypeId <ContainerTypeId>]
```
