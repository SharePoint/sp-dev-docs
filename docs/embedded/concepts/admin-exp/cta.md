---
title: Consuming Tenant Admin
description: This article describes the role and responsibilities of Consuming Tenant Admin in SharePoint Embedded
ms.date: 11/28/2023
ms.localizationpriority: high
---
# Consuming Tenant Admin

> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded Container commandlets mentioned in this article.
> 
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
> 
> If you are a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

The organizations that use the SharePoint Embedded applications on their Microsoft 365(Microsoft 365) tenants are the consuming tenants and the persona that is responsible for managing these applications on their Microsoft 365 tenancy is the consuming tenant administrator. Consuming tenant administrators can perform various administrative actions on the SharePoint Embedded applications registered on their Microsoft 365 tenant and on the Containers that hold the content. They can also manage tenant level configurations and ensure that data is stored in a secure, protected way that meets customers’ business and compliance policies. In this article, we describe the enterprise manageability features that are supported and can be performed by the consuming tenant administrator.

## 1. Consuming Tenant Admin Role

Microsoft 365 SharePoint Embedded Administrator serves as the consuming tenant admin.  Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Consuming Tenant Admin for SharePoint Embedded. The SharePoint Embedded Role is available in Microsoft Entra and M365 Admin Center.

## 1. Administration Tools

Consuming tenant admins are able to manage SharePoint Embedded applications with PowerShell commands using [SharePoint Online Management Shell](/powershell/sharepoint/sharepoint-online/connect-sharepoint-online).

To get started using PowerShell to manage SharePoint Embedded, you have to install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588) and [connect to SharePoint Online](/powershell/module/sharepoint-online/connect-sposervice).

> [!IMPORTANT]
> You need version 16.0.24211.12000 or higher to run the commands for SharePoint Embedded.

## 1. Application Administration

With PowerShell cmdlets, tenant admin can get a list of SharePoint Embedded applications registered in their Microsoft 365 tenancy. They can also view all the applications that have read and/or write access and the level of access to these SharePoint Embedded applications.

The following commands can be used manage SharePoint Embedded applications registered on your Microsoft 365 tenants.

```powershell
Get-SPOApplication

# or

Get-SPOApplication -OwningApplicationId <OwningApplicationId>

# or

Get-SPOApplication -OwningApplicationId <OwningApplicationId> -ApplicationId <ApplicationId>
```

OwningApplicationId is the ID of the SharePoint Embedded application and ApplicationId is the ID of the application that has access to the SharePoint Embedded application. Application Administration cmdlets aren't applicable for Microsoft Loop. For more information about using this command, see [Get-SPOApplication cmdlet](/powershell/module/sharepoint-online/get-spoapplication)

## 1. Container Administration

### View Containers

Admins can get a list of all the containers for a SharePoint Embedded application using the following commands. This command will list all the active containers within the application.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> | FT
```

The `OwningApplicationId` is the ID of the SharePoint Embedded application. For more information about using this command, see [Get-SPOContainer cmdlet](/powershell/module/sharepoint-online/get-spocontainer). To enumerate Microsoft Loop containers, use Owning App ID: a187e399-0c36-4b98-8f04-1edc167a0996 for all the cmdlets of container administration.

### View details of a Container

Admins can get the details of a container within an application using the following command. This command will return more details of a container including StorageUsed, Ownership details, SiteURL, Label information etc.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> -Identity <ContainerId>
```

Here, the Identity is the ID of the Container. For more information about using this command, see [Get-SPOContainer cmdlet](/powershell/module/sharepoint-online/get-spocontainer).

### Delete Containers

When admins deletes a Container, it's moved into the deleted container collection. A deleted container can be restored from the collection within 93 days. If a container is deleted from the collection, or it exceeds the 93-day retention period, it's permanently deleted. Deleting a container deletes everything within it, including all documents and files.

Admins should notify the Container owners before you delete a Container so they can move their data to another location, and also inform users when the Container will be deleted.

> [!WARNING]
> Deleting a container may cause unexpected issues for the SharePoint Embedded application the Container belongs to and may interrupt usage of the application.

```powershell
Remove-SPOContainer -Identity <ContainerId>
```

The `ContainerId` is the ID of the container that will be moved to the deleted container collection. For more information about using this command, see [Remove-SPOContainer cmdlet](/powershell/module/sharepoint-online/remove-spocontainer).

### View deleted containers

Admins can get a list of deleted containers on the deleted container collection using the following command. For more information about using this command, see [Get-SPODeletedContainer](/powershell/module/sharepoint-online/get-spodeletedcontainer).

```powershell
Get-SPODeletedContainer
```

### Restore deleted containers

Admins can restore a deleted container from the deleted container collection using the following command. For more information about using this command, see [Restore-SPODeletedContainer cmdlet](/powershell/module/sharepoint-online/get-spodeletedcontainer).

```powershell
Restore-SPODeletedContainer -Identity <ContainerId>
```

### Permanently delete Containers

Admins can permanently delete a Container from the deleted container collection if the Container has no further retention policies applied to it. For more information about using this command, see [Remove-SPODeletedContainer cmdlet](/powershell/module/sharepoint-online/remove-spodeletedcontainer).

```powershell
Remove-SPODeletedContainer -Identity <ContainerId>
```

<!-- ## 5. Tenant Administration

SharePoint Online enables admins to manage various tenant-wide settings with the [Set-SPOTenant](/powershell/module/sharepoint-online/set-spotenant) PowerShell command. This command allows administrators to modify global settings that impact the behavior and functionality of SharePoint Online for all users in the organization.

These tenant-wide settings are also applicable to all SharePoint Embedded applications on the tenant. These settings include conditional access policies, BlockDownloadFileTypePolicy, and SharingCapability to name a few. Learn more about the Set-SPOTenant settings here: [Set-SPOTenant](/powershell/module/sharepoint-online/set-spotenant).

### Unique External Sharing settings for SharePoint Embedded

Admins can configure external sharing settings ONLY for SharePoint Embedded applications at the tenant level with the following commands. The external sharing features let users in your organization share content with people outside the organization (such as partners, vendors, clients, or customers), ensuring sensitive data isn't accidentally shared with unauthorized users.

```powershell
Set-SPOTenant -ContainerSharingCapability <ContainerSharingCapabilities>
```

> [!NOTE]
>
> * External sharing for SharePoint Embedded is defaulted to the tenant setting set with `Set-SPOTenant [-SharingCapability <SharingCapabilities>]`.
> * External sharing settings for SharePoint Embedded must be equally or more restrictive than the tenant-wide external sharing settings.

Other unique sharing settings for SharePoint Embedded application include:

```powershell
Set-SPOTenant -ContainerDefaultShareLinkScope
```

```powershell
Set-SPOTenant -ContainerDefaultShareLinkRole
```

```powershell
Set-SPOTenant -ContainerDefaultLinkToExistingAccess
``` -->

## 1. Security and Compliance Administration

SharePoint Embedded uses Microsoft’s comprehensive compliance and data governance solutions to help organizations manage risks, protect, and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions work in a similar manner in the SharePoint Embedded platform as they do today in Microsoft 365 platform so that data is stored in a secure, protected way that meets customers’ business and compliance policies while making it easy for Compliance and SharePoint Administrators to enforce critical security and compliance policies on the content. For information on supported security and compliance capabilities, see [Security and Compliance](../security-and-compliance.md).
