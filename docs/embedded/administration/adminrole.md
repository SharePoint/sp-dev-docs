---
title: SharePoint Embedded administrator
description: This article explains the new admin role for SharePoint Embedded.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# The SharePoint Embedded administrator

The SharePoint Embedded administrator is a dedicated role to manage SharePoint Embedded containers through [SharePoint PowerShell](/powershell/module/sharepoint-online/connect-sposervice) and SharePoint admin center. This role is required for [developer admins](./developer-admin/dev-admin.md) to create new container types through PowerShell cmdlets and also for consuming tenant admins to manage containers created in their tenants.

The global administrator role already has all the permissions of the SharePoint Embedded administrator role. A global administrator can assign a user the SharePoint Embedded administrator role to act as a consuming tenant admin or a developer administrator for SharePoint Embedded.

The SharePoint Embedded administrator role is available in Microsoft Entra and Microsoft 365 Admin Center. This role doesn't have access to site management. This means that a SharePoint Embedded administrator can't see 'Active sites' and 'Deleted sites' pages on the SharePoint Admin Center and also can't run site specific PowerShell cmdlets.

## SharePoint Embedded administrator tasks in the developer tenant

The following are some of the container-specific commands actions currently supported on PowerShell:

- Creation of container types
  - Creation of a Standard container type with standard billing
  - Creation of a Standard container type with direct to customer billing
  - Creation of a Trial container type

- Container type management
  - Viewing of container types in the developer tenant
  - Editing properties of a container type in the developer tenant
  - Configuration properties of a container type in the developer tenant
  - Manage billing of applications/ container types for standard billing

## SharePoint Embedded administrator tasks in consuming tenant

The following are some of the container-specific commands actions currently supported on PowerShell:

- Application administration
  - Get details of all SharePoint Embedded applications in the tenant
  - Get detail of a specific application in the tenant
  - Get the permissions of owning applications in the tenant
  - Configure External sharing setting of a container of an application in tenant

- Container administration
  - Get details of all containers of an application in the tenant
  - Get details of all containers of an application in the tenant sorted by storage
  - Get details of a specific container of an application in the tenant
  - Set Sensitivity label of a specific container of an application in the tenant
  - Soft delete a container of an application in the tenant
  - Get details of all soft deleted containers in the tenant
  - Restore a soft deleted container of an application in the tenant
  - Permanently delete a soft deleted container of an application in the tenant

The following are some of the actions currently supported on SharePoint Admin Center:

- View Active container page
- View Deleted container page
- View the detailed information of a container
- Soft delete a container
- Restore a deleted container
- Purge a deleted container

## Assigning the SharePoint Embedded administrator Role

The Global admin can assign the SharePoint Embedded Admin role to users through both Entra and Microsoft admin center.

### Through Entra

Follow the following steps to assign the role of SharePoint Embedded administrator on Entra:

1. Sign into Entra as a Global admin
1. Select the **“Users”** tab on the left-hand panel and select **“All users”**
1. Select the user to assign the role of SharePoint Embedded administrator under **“All users”**
1. Select the **“Assigned role”** tab on the left panel
1. Select on **“Add assignments”** button and search for **“SharePoint Embedded”** in the panel that opens
1. Select the 'SharePoint Embedded administrator' option and select on **“Add”**
1. The selected user is assigned the role of SharePoint Embedded administrator

### Through Microsoft 365 Admin Center

1. Sign into Microsoft 365 Admin Center as a Global admin
1. Select **“Users”** and select **“Active users”** under it
1. Select the user to assign the role of SharePoint Embedded administrator
1. Select on **“Manage roles”** option under Roles
1. Select **“Admin center access”** and under **“Collaboration”**, select **“SharePoint Embedded administrator”**
1. Select **"Save changes"**. Now the selected user is assigned the role of SharePoint Embedded administrator
