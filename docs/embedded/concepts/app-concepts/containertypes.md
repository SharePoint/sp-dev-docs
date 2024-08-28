---
title: SharePoint Embedded Container Types
description: This article explains how Container Types work.
ms.date: 07/30/2024
ms.localizationpriority: high
---

# SharePoint Embedded Container Types

A container type is a SharePoint Embedded resource that defines the relationship, access privileges, and billing accountability between a SharePoint Embedded application and a set of containers. Also, the container type defines behaviors on the set of containers.

Each container type is strongly coupled with one SharePoint Embedded application, which is referred to as the owning application. The owning application developer is responsible for creating and managing their container types. SharePoint Embedded mandates a 1:1 relationship between owning application and container type.

Container type is represented on each container instance as an immutable property (ContainerTypeID) and is used across the entire SharePoint Embedded ecosystem, including:

- Access authorization. A SharePoint Embedded application must be associated with a container type to get access to container instances of that type. Once associated, the application has access to all container instances of that type. The actual access privilege is determined by the application-ContainerTypeID permission setting. The owning application by default has full access privilege to all container instances of the container type it's strongly coupled with. Learn more about [SharePoint Embedded Authorization](../app-concepts/auth.md).
- Easy exploration. Container type can be created for trial purposes, allowing developers to explore SharePoint Embedded application development and assess its features for free.
- Billing. Container types for non-trial purposes are billable and must be created with an Azure Subscription. The usage of containers is metered and charged. Learn more about [metering](../admin-exp/billing/meters.md) and the [SharePoint Embedded billing experience](../admin-exp/billing/billing.md).
- Configurable behaviors. Container type defines selected behaviors for all container instances of that type. Learn more about setting [Container type configuration](../app-concepts/containertypes.md#configuring-container-types).

> [!NOTE]
>
> 1. You must specify the purpose of the container type you are creating at creation time. Depending on the purpose, you may or may not need to provide your Azure Subscription ID. A container type set for trial purpose cannot be converted for production; or vice versa.
> 1. You must use the latest version of SharePoint Powershell for container type configurations.

## Trial use

A container type can be created for trial/development purposes and isn't linked to any Azure billing profile. This enables developers to explore SharePoint Embedded application development and assess its features for free. In this scenario, the developer tenant is the same as the consuming tenant.  Each developer can have only one container type in the trial status in their tenant at a time. The container type is valid for up to 30 days but can be removed at any time within this period. To create a container type for trial purposes, you can:

- Use SharePoint Embedded Visual Studio Code Extension to create the container type in just a few steps. The Visual Studio Code extension also registers your container type and creates containers for you.
- Use SharePoint PowerShell. You must be a SharePoint Embedded Administrator or Global Administrator to run this cmdlet. If you're a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

```powershell
New-SPOContainerType
[–TrialContainerType]
[ -ContainerTypeName <ContainerTypeName>]
[ -OwningApplicationId <OwningApplicationId>]
```

The following restrictions are applied to container type in the trial status:

- Up to five active containers of the container type can be created.
- Each container has up to 1 GB of storage space.
- The container type expires after 30 days and access to any existing containers of that container type will be removed.
- The developer must permanently delete all containers of an existing container type in trial status to create a new container type for trial. This includes containers in the deleted container collection.
- The container type is restricted to work in the developer tenant. It can't be deployed in other consuming tenants.

## Standard/Non-trial use

Container type can also be created with an Azure billing profile, which includes an Azure Subscription ID and a Region Group. This container type is in the standard status and is billable. You need the following to create a container type in the standard status:

- An Azure subscription and Resource Group must be present in the Azure portal
- An App registration must be created in Microsoft Entra ID
- Each developer tenant can create up to five container types in the standard status. To create one, use the following PowerShell cmdlet:

```powershell
New-SPOContainerType
[–ContainerTypeName <ContainerTypeName>]
[-OwningApplicationId <OwningApplicationId>]
[-AzureSubscriptionId <AzureSubscriptionId>]
[-ResourceGroup <ResourceGroup>]
[-Region <Region>]
```

> [!NOTE]
> The user or admin who will set up a billing relationship for SharePoint Embedded will need to have owner or contributor permissions on the Azure subscription.

## Configuring Container Types

Developer Admin can set selected settings on the SharePoint Embedded container types created by using this PowerShell cmdlet.

This cmdlet allows admins to set [Microsoft 365 content discoverability](../content-experiences/user-experiences-overview.md) and [sharing](../app-concepts/sharing-and-perm.md) settings on container types. The setting applies to all container instances of the container type

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId 4f0af585-8dcc-0000-223d-661eb2c604e4 -DiscoverabilityDisabled $False
```

## Viewing Container Types

Developer Admin can view all the SharePoint Embedded container types created by them on their tenant using this PowerShell cmdlet. This cmdlet retrieves and returns the list of container types  created for a SharePoint Embedded Application in the tenant.

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

To create and interact with containers, you must [register](../app-concepts/register-api-documentation.md) the container type within the Consuming Tenant. The owning application defines the permissions for the container type by invoking the [registration API](../app-concepts/register-api-documentation.md).

## Deleting Container Types

Developer Admins can only delete container types in trial status. To delete a container type in trial status, you must remove all containers of the container type first, including from the deleted container collection. To remove containers, refer to [Consuming Tenant Admin](../admin-exp/consuming-tenant-admin/cta.md). Once all the containers are deleted, Developer Admins can delete the container types using the below PowerShell cmdlet.

```powershell
Remove-SPOContainerType
[-ContainerTypeId <ContainerTypeId>]
```
