---
title: SharePoint Embedded developer administrator
description: This article describes the role and responsibilities of developer tenant admin in SharePoint Embedded.
ms.date: 01/20/2026
ms.localizationpriority: high
---
# SharePoint Embedded Developer Administrator

## Overview

Organizations that use SharePoint Embedded for file management are included in the developer ecosystem which developer administrators oversee. These administrators are responsible for managing applications and the container types that have containers, the foundation of an application that needs to store content. Additionally, they can connect billing profiles to their applications. This article describes the management features available to developer administrators.

## Developer Admin role

> [!IMPORTANT]
> Global Administrators can assign the SharePoint Embedded Administrator role available in Microsoft 365 Admin Center or Microsoft Entra ID to execute SharePoint Embedded container cmdlets mentioned in this article.
>
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.

A Microsoft 365 SharePoint Embedded Administrator serves as the developer admin. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator role. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. The SharePoint Embedded Role is available in Microsoft Entra ID and Microsoft 365 Admin Center. For information on the [SharePoint Embedded Administrator](../adminrole.md) role.

The following are some of the SharePoint Embedded actions currently supported on PowerShell:

- Creation of container types
  - Creation of a standard container type with standard billing
  - Creation of a standard container type with passthrough billing
  - Creation of a trial container type
- Container type management
  - Viewing of container types in the tenant
  - Editing properties of a container type in the tenant
  - Configuration properties of a container type in the tenant
  - Manage billing of applications/ container types for standard billing
  - Removing a container type in the tenant

### Billing responsibilities of the developer admin

There are two types of billing models in SharePoint Embedded. To learn more, see [SharePoint Embedded billing](../billing/billing.md).

#### Standard billing

The developer admin is responsible for the billing of SharePoint Embedded applications. The developer admin needs to [set the billing profile for the container type](../../getting-started/containertypes.md#set-the-billing-profile) after its creation, provided they have owner or contributor permissions on an Azure subscription. To learn more about how to set up billing, read about [creating container types](../../getting-started/containertypes.md#creating-container-types) and [SharePoint Embedded billing](../billing/billing.md).

#### Passthrough billing

In this model, the customer, or the consuming tenant admin, is responsible for billing. For this reason, this billing model is also known as "direct-to-customer billing." To ensure the passthrough billing model is in place, the developer admin must set the `billingClassification` on the container type to `directToCustomer`. To learn more about how to set up passthrough billing in the container type, read about [creating container types](../../getting-started/containertypes.md#creating-container-types). To learn more about how to configure billing for SharePoint Embedded applications with passthrough billing in a consuming tenant, see [setup guide in the consuming tenant Admin Center](../consuming-tenant-admin/cta.md#set-up-billing-for-passthrough-container-type).

## Administration Tools

Developer admins are able to manage SharePoint Embedded applications with Microsoft Graph APIs and PowerShell commands using the SharePoint Online Management Shell.

To get started using the Microsoft Graph APIs for SharePoint Embedded management, see:

- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) resource representing a container type and its related methods
- [fileStorageContainerTypeRegistration](/graph/api/resources/filestoragecontainertyperegistration) resource representing the registration of a container type in a consuming tenant and its related methods

## PowerShell cmdlets for admin experience

To get started using PowerShell to manage SharePoint Embedded, you have to install the SharePoint Online Management Shell and connect to SharePoint.

> [!IMPORTANT]
> You must use the latest version of SharePoint PowerShell to use container type administration cmdlets.

### Creation of container types

The developer administrator can create a container type using PowerShell cmdlets. Each container type is associated with an application ID, a one-to-one mapping, and an Azure subscription ID. The developer administrator can also create trial container types that have a validity of 30 days to test out SharePoint Embedded. The following [commands](/powershell/module/sharepoint-online/new-spocontainertype) can be used to create SharePoint Embedded container types on the developer admin’s tenant:

Standard billing container type:

```powershell
New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
Add-SPOContainerTypeBilling -ContainerTypeId <ContainerTypeId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>​
```

Passthrough billing container type:

```powershell
New-SPOContainerType -IsPassThroughBilling -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

Trial container type:

```powershell
New-SPOContainerType –TrialContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

`OwningApplicationId` is the ID of the SharePoint Embedded application. `AzureSubscriptionId` is the ID of the Azure subscription for billing purposes.

### Viewing of container types

The developer administrator can view container types and the corresponding applications created in their tenant using PowerShell commandlets. The following commands can be used to view SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Get-SPOContainerType​
Get-SPOContainerType -ContainerTypeId <ContainerTypeId>
```

### Manage properties of container types

The developer administrator can change the properties of container types, both standard and trial. The following commands can be used to change the properties of SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId>
                     [-OwningApplicationId <OwningApplicationId>]
                     [-ContainerTypeName <ContainerTypeName>]
                     [-WhatIf] [-Confirm]
```

### Container type configuration properties

The developer administrator can change container type configuration settings using PowerShell commandlets. The following container type properties can be set:

1. Discoverability Disabled: Controls if file items inside the container surface in other Microsoft 365 properties (MRU, etc.).
1. Sharing Restricted: Only the manager and owner can share files in the container if restricted sharing is true.

The following commands can be used to change the configuration settings of SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId > -DiscoverabilityDisabled $value
```

For `DiscoverabilityDisabled` `$value` can be set to `$true`; `$false`

The default value `$true` - ensures all content is hidden.

```powershell
Set-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId > -SharingRestricted $value
```

For `SharingRestricted` `$value` can be set to `$true`; `$false`

```powershell
Set-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId > - DiscoverabilityDisabled $value -SharingRestriced $value
```

The developer admin can view the container type configuration settings using the following cmdlet:

```powershell
Get-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId >
```

## Manage billing profile of container types

The developer administrator can change the billing profile of container types using PowerShell cmdlets. The following commands can be used to change the properties of SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId>
                     [-AzureSubscriptionId <AzureSubscriptionId>]
                     [-ResourceGroup <ResourceGroup>]​[-WhatIf]
                     [-Confirm]
```

For more information about billing, see [Billing](../billing/billing.md).

## Roles and Permissions

The user or admin who creates the billing relationship for SharePoint Embedded needs to have owner or contributor permissions on an Azure subscription.

If you don't have an Azure subscription, follow the steps here to [create a subscription](/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions).
