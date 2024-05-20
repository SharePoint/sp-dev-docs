---
title: SharePoint Embedded Administrator 
description: This article explains the new admin role for SharePoint Embedded.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# The SharePoint Embedded Administrator 

The SharePoint Embedded Admininistrator is a dedicated role to manage SharePoint Embedded Containers through SPO PowerShell and SharePoint admin center. This is required for developer admins to create new Container types through PowerShell cmdlets and  consume tenants admins to manage Containers created on their tenants. 

The Global Administrator (Global admin) role already has all the permissions of the SharePoint Embedded Admininistrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Admininistrator role to act as a consuming tenant admin or a developer administrator for SharePoint Embedded. 

The SharePoint Embedded Admininistrator role is available in Microsoft Entra and Microsoft 365 Admin Center. This role doesn't have access to site management. This means that a SharePoint Embedded Admininistrator won't be able to see Active and Deleted sites page on SharePoint Administrator Center as well as not be able to run site specific PowerShell cmdlets. 

## SharePoint Embedded Administrator tasks in developer tenant
The following are some of the Container specific commands actions currently supported on PowerShell:

a)	Creation of Container Types
- Creation of a Standard Container Type with standard billing
- Creation of a Standard Container Type with direct to customer billing
- Creation of a Trial Container Type

b)	Container Type management
- Viewing of Container Types in the developer tenant
- Editing properties of a Container Type in the developer tenant
- Configuration properties of a Container Type in the developer tenant
- Manage billing of applications/ Container Types for standard billing

## SharePoint Embedded Administrator tasks in consuming tenant
The following are some of the Container specific commands actions currently supported on PowerShell:

a)	Application administration
- Get details of all SharePoint Embedded applications in the tenant
- Get detail of a specific application in the tenant
- Get the permissions of owning applications in the tenant
- Configure External sharing setting of a container of an application in tenant

b)	Container administration
- Get details of all containers of an application in the tenant
- Get details of all Containers of an application in the tenant sorted by storage
- Get details of a specific container of an application in the tenant
- Set Sensitivity label of a specific Container of an application in the tenant
- Soft delete a Container of an application in the tenant
- Get details of all soft deleted Containers in the tenant
- Restore a soft deleted Container of an application in the tenant
- Permanently delete a soft deleted Container of an application in the tenant

The following are some of the actions currently supported on SharePoint Admin Center:

a)	View Active Container page
b)	View Deleted Container page
c)	View the detailed information of a Container
d)	Soft delete a Container
e)	Restore a deleted Container
f)	Purge a deleted Container

## Assigning the SharePoint Embedded Admininistrator Role 

The Global admin can assign the SharePoint Embedded Admin role to users through both Entra and Microsoft admin center.  

### Through Entra 

Follow the following steps to assign the role of SharePoint Embedded Admininistrator on Entra: 

1. Sign into Entra as a Global admin
2. Select the **“Users”** tab on the left-hand panel and select **“All users”**
3. Select the user to assign the role of SharePoint Embedded Admininistrator under **“All users”**
4. Select the **“Assigned role”** tab on the left panel
5. Select on **“Add assignments”** button and search for **“SharePoint Embedded”** in the panel that opens
6. Select the “SharePoint Embedded Administrator” option and select on **“Add”**
7. The selected user is assigned the role of SharePoint Embedded admininistrator

### Through Microsoft 365 Admin Center

1. Sign into M365 Admin Center as a Global admin
2. Select **“Users”** and select **“Active users”** under it
3. Select the user to assign the role of SharePoint Embedded Admininistrator
4. Select on **“Manage roles”** option under Roles
5. Select **“Admin center access”** and under **“Collaboration”**, select **“SharePoint Embedded Administrator”**
6. Select **"Save changes"**. Now the selected user is assigned the role of SharePoint Embedded Admininistrator
