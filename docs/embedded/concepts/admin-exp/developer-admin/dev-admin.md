---
title: Developer Admin
description: This article describes the role and responsibilities of Developer Tenant Admin in SharePoint Embedded.
ms.date: 05/21/2024
ms.localizationpriority: high
---
# Developer Admin

## Overview

Organizations that create file management applications with the help of SharePoint Embedded are referred to as Developer Ecosystem and the persona responsible for the management of the applications is called the developer administrator. Developer administrators can perform various administrative actions on the SharePoint Embedded applications created and on the container types, the blueprint for the containers that hold the content of instances of the application. They can also create and manage trial container types to get started with the SharePoint Embedded experience, attach billing profiles to their application, etc. In this article, we describe the enterprise manageability features that are supported in the developer administrator role.

## Developer Admin Role

> [!IMPORTANT]
> Global Administrators can assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded container commandlets mentioned in this article.
>
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.

A Microsoft 365 SharePoint Embedded Administrator serves as the developer admin. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. The SharePoint Embedded Role is available in Microsoft Entra and Microsoft 365 Admin Center. For information on [SharePoint Embedded Administrator](../adminrole.md) role.

The following are some of the container-specific commands actions currently supported on PowerShell:

- Creation of container types
  - Creation of Standard container type with standard billing
  - Creation of Standard container type with direct to customer billing
  - Creation of Trial container type
- Container type management
  - Viewing of container types in the developer tenant
  - Editing properties of a container type in the developer tenant
  - Configuration properties of a container type in the developer tenant
  - Manage billing of applications/ container types for standard billing

### Billing responsibilities of the developer admin

There are two types of billing models followed:

Standard billing:
The developer admin is responsible for the billing of SharePoint Embedded applications. The developer admin needs to establish billing for SharePoint Embedded while creating container types given they have owner or contributor permissions on the Azure subscription that they use to establish the billing relationship on the product. To learn more about how to set up billing and manage cost and invoice, read about [PAYG for SharePoint Embedded](../billing/billing.md).

Direct to Customer billing:
In this model, the customer, or the consuming tenant admin, is responsible for billing. To ensure the Direct to Customer (DTC) Billing model, the developer admin must set the billing property of Direct to customer to enabled.

## Administration Tools

Developer admins are able to manage SharePoint Embedded applications with PowerShell commands using SharePoint Online Management Shell.

To get started using PowerShell to manage SharePoint Embedded, you have to install the SharePoint Online Management Shell and connect to SharePoint Online.

> [!IMPORTANT]
> You must use the latest version of SharePoint PowerShell to use container type administration cmdlets.

## PowerShell cmdlets for admin experience

### Creation of container types

The developer administrator can create a container type using PowerShell cmdlets. Each container type is associated to an application ID, a one to one mapping, and an Azure subscription ID. The developer administrator can also create Trial container types that have a validity of 30 days to test out SharePoint Embedded. The following commands can be used to create SharePoint Embedded container types on the developer admin’s tenant:

Standard billing container type:

```powershell
New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>​
```
Direct to customer billing container type:

```powershell
New-SPOContainerType -IsPassThroughBilling -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

Trial container type:

```powershell
New-SPOContainerType –TrialContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

OwningApplicationId is the ID of the SharePoint Embedded application. Azure Subscription ID is the ID of the Microsoft Entra ID profile for billing purposes.

### Viewing of container types

The developer administrator can view container types and the corresponding applications created in their tenant using PowerShell commandlets. The following commands can be used to view SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Get-SPOContainerType​
Get-SPOContainerType -ContainerTypeId <ContainerTypeId>
```

### Manage properties of container types

Using PowerShell cmdlets, the developer administrator can change the properties of container types, both standard and trial. The following commands can be used to change the properties SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId>
                     [-OwningApplicationId <OwningApplicationId>]
                     [-ContainerTypeName <ContainerTypeName>]
                     [-WhatIf] [-Confirm]
```

### Container type configuration properties

The developer administrator can change container type configuration settings using PowerShell commandlets. The following container type properties can be set:

1. Discoverability Disabled: Controls if file items inside the container surface in other Microsoft 365 properties (MRU, etc.).
1. Sharing Restricted: Only manager and owner can share files in the container if restricted sharing is true.

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

## Manage billing profile of applications/ container types

The developer administrator can change the billing profile of container types using PowerShell cmdlets. The following commands can be used to change the properties SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId>
                     [-AzureSubscriptionId <AzureSubscriptionId>]
                     [-ResourceGroup <ResourceGroup>]​[-WhatIf]
                     [-Confirm]
```

For more information about billing, see [Billing](../billing/billing.md).

## Roles and Permissions

The user or admin who creates the billing relationship for SharePoint Embedded needs to have owner or contributor permissions on an Azure subscription.

If you don't have an Azure subscription, follow steps here to [create a subscription.](/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions)
