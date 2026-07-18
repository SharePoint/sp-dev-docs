---
title: Create apps with PowerShell
description: Create and configure SharePoint Embedded apps with SharePoint PowerShell.
ms.date: 07/13/2026
ms.reviewer: shsaravanan
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Create apps with PowerShell

**Applies to:** Developer tenant administrator — SharePoint Embedded admin / Global admin

<!-- agent:
task_type: how-to
audience: administrator
outcome: Create SharePoint Embedded apps and configure standard billing with SharePoint PowerShell.
next: install-sharepoint-embedded-app.md
-->

Use SharePoint PowerShell to create SharePoint Embedded container types for apps. Each container type is associated with one Microsoft Entra application.

## Before you begin

Make sure you have:

- The SharePoint Embedded Administrator or Global Administrator role.
- The latest SharePoint Online Management Shell.
- The Microsoft Entra application ID that owns the container type.
- For standard billing setup, owner or contributor permissions on the Azure subscription.

> [!IMPORTANT]
> Choose the billing method when you create the container type. You can't change the billing method after creation.

## Create a standard billed app

Use standard billing when the organization that owns the app pays for SharePoint Embedded usage.

```powershell
New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

Set up billing for the standard container type by assigning an Azure subscription, resource group, and region.

```powershell
Add-SPOContainerTypeBilling -ContainerTypeId <ContainerTypeId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>
```

## Create a pass-through billed app

Use pass-through billing when the consuming tenant pays for SharePoint Embedded usage.

```powershell
New-SPOContainerType -IsPassThroughBilling -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

For pass-through billing, the consuming tenant administrator must set up Microsoft 365 pay-as-you-go services before users can access the app. For more information, see [Set up billing in Microsoft 365 admin center](setup-billing-microsoft-365-admin-center.md).

## Create a trial app

Use a trial app for evaluation and proof-of-concept work.

```powershell
New-SPOContainerType -TrialContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId>
```

Trial apps are valid for 30 days.

## View apps

List SharePoint Embedded apps created in the owning tenant.

```powershell
Get-SPOContainerType
Get-SPOContainerType -ContainerTypeId <ContainerTypeId>
```

## Update app properties

Update supported container type properties.

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId>
                     [-ContainerTypeName <ContainerTypeName>]
                     [-WhatIf] [-Confirm]
```

## Configure app behavior

Configure supported container type settings, such as discoverability and sharing restrictions.

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId <ContainerTypeId> -DiscoverabilityDisabled $true
Set-SPOContainerTypeConfiguration -ContainerTypeId <ContainerTypeId> -SharingRestricted $true
```

View the current configuration.

```powershell
Get-SPOContainerTypeConfiguration -ContainerTypeId <ContainerTypeId>
```

## Related content

- [Create apps in SharePoint admin center](create-apps-sharepoint-admin-center.md)
- [Install a SharePoint Embedded app](install-sharepoint-embedded-app.md)
- [PowerShell reference](../reference/powershell.md)

## Next steps

Install the app in the tenant: [Install a SharePoint Embedded app](install-sharepoint-embedded-app.md).
