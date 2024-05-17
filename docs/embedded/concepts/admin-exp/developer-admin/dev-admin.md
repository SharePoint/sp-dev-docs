---
title: Developer Admin
description: This article describes the role and responsibilities of Developer Tenant Admin in SharePoint Embedded.
ms.date: 04/09/2024
ms.localizationpriority: high
---
# Developer Admin

## Overview

Organizations that create file management applications with the help of SharePoint Embedded are referred to as Developer Ecosystem and the persona responsible for the management of the applications is called the developer administrator. Developer administrators can perform various administrative actions on the SharePoint Embedded applications created and on the Container types, the blueprint for the containers that hold the content of instances of the application. They can also create and manage trial container types to get started with the SharePoint Embedded experience, attach billing profiles to their application, etc. In this article, we describe the enterprise manageability features that are supported and can be performed by the developer administrator.

## Developer Admin Role

> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded Container commandlets mentioned in this article.
> 
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
> 
> If you are a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.


A Microsoft 365 SharePoint Embedded Administrator serves as the developer admin. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Developer Admin for SharePoint Embedded. The SharePoint Embedded Role is available in Microsoft Entra and Microsoft 365 Admin Center.

For information on SPE admin role, see [SPE Admin](https://github.com/cindylay/sp-dev-docs/blob/update-ga/docs/embedded/concepts/admin-exp/adminrole.md)

The following are some of the container specific commands actions currently supported on PowerShell:
a)	Creation of container types
- Creation of standard container type with standard billing
- Creation of standard container type with direct to customer billing
- Creation of trial container type

b)	Container type management
- Viewing of container types in the developer tenant
- Editing properties of a container type in the developer tenant
- Configuration properties of a container type in the developer tenant
- Manage billing of applications/ container types for standard billing


### Billing responsibilities of Developer admin

There are two types of billing models followed: 

Standard billing:
The developer admin is responsible for the billing of SPE applications. The developer admin needs to establish billing for SharePoint Embedded while creating container types given they have owner or contributor permissions on the Azure subscription that they use to establish the billing relationship on the product. To learn more about how to set up billing and manage cost and invoice, read about [PAYG for SharePoint Embedded](./billing.md).

Direct to Customer billing:
The customer or the Consuming Tenant Admin is responsible for billing. The developer admin should ensure to set the billing property of Direct to customer enabled to ensure this.


## Administration Tools

Developer admins are able to manage SharePoint Embedded applications with PowerShell commands using SharePoint Online Management Shell.

To get started using PowerShell to manage SharePoint Embedded, you have to install the SharePoint Online Management Shell and connect to SharePoint Online.

> [!IMPORTANT]
> You must use the latest version of SharePoint PowerShell to use container type administration cmdlets.


## PowerShell cmdlets for admin experience

### Creation of container types

Using PowerShell cmdlets, the developer administrator can create container types and attach it to an application ID (One to one mapping) and Azure subscription ID. The administrator can also create trial container types that have a validity of 30 days to get a feel of the standard container types. The following commands can be used to create SharePoint Embedded applications on the developer admin’s tenant:

Standard billing containertype:

```powershell
New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>​
```
Direct to customer billing containertype:

```powershell
New-SPOContainerType -IsPassThroughBilling -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

Trial containertype:

```powershell
New-SPOContainerType –TrialContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

OwningApplicationId is the ID of the SharePoint Embedded application. Azure Subscription ID is the ID of the Microsoft Entra ID profile for billing purposes.

### Viewing of container types

Using PowerShell cmdlets, the developer administrator can view container types and the corresponding applications created in their tenant. The following commands can be used to view SharePoint Embedded applications created on the developer admin’s tenant:

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

### Configuration properties of containertypes

Using PowerShell cmdlet, the developer administrator can change the configuration settings of a containertype. The following properties of a containertype can be set:
a)	Discoverability Disabled: Controls if file items inside the container will surface in other M365 properties (MRU, etc).

b)	Sharing Restricted: Only manager and owner can share files in the container if restricted sharing is true.

The following commands can be used to change the configuration settings of SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId > - DiscoverabilityDisabled $value
```

$value can be $true; $false

Default value: true - all content will be hidden

```powershell
Set-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId > - SharingRestricted $value
```

$value can be $true; $false

```powershell
Set-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId > - DiscoverabilityDisabled $value -SharingRestriced $value
```


The Developer admin can view the configuration settings of a containertype using the following cmdlet:

```powershell
Get-SPOContainertypeConfiguration -ContainerTypeId < ContainerTypeId >
```
![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/46346e26-59e6-4acf-808b-4deafabe03d2)


## Manage billing profile of applications/ container types

Using PowerShell cmdlets, the developer administrator can change the billing profile of container types. The following commands can be used to change the properties SharePoint Embedded applications created on the developer admin’s tenant:

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId>
                     [-AzureSubscriptionId <AzureSubscriptionId>]
                     [-ResourceGroup <ResourceGroup>]​[-WhatIf]
                     [-Confirm]
```

For more information about billing, see [Billing](./billing.md).

## Roles and Permissions

The user or admin who will set up billing relationship for SharePoint Embedded need to have owner or contributor permissions on an Azure subscription.

If you don't have an Azure subscription, follow steps here to [create a subscription.](/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions)
