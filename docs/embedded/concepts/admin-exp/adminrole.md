---
title: SharePoint Embedded Administrator 
description: This article explains the new admin role for SharePoint Embedded.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# The SharePoint Embedded Administrator 

The SharePoint Embedded admininistrator is a dedicated role to manage SharePoint Embedded Containers through SPO PowerShell and SharePoint admin center. This is required for developer admins to create new Container types through PowerShell cmdlets and  consume tenants admins to manage Containers created on their tenants. 

The Global Administrator (Global admin) role already has all the permissions of the SharePoint Embedded admin role. A SharePoint Administrator can assign themselves the SharePoint Embedded admin role to act as a consuming tenant admin or a developer administrator for SharePoint Embedded. 

The SharePoint Embedded admin role is available in Microsoft Entra and Microsoft 365 Admin Center (MAC). This role doesn't have access to site management. This means that a SharePoint Embedded admin won't be able to see Active and Deleted sites page on SharePoint Administrator Center as well as not be able to run site specific PowerShell cmdlets. 

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

The following are some of the actions currently supported on SPAC:

a)	View Active Container page
b)	View Deleted Container page
c)	View the detailed information of a Container
d)	Soft delete a Container
e)	Restore a deleted Container
f)	Purge a deleted Container

## Assigning the SharePoint Embedded admin Role 

The Global admin can assign the SharePoint Embedded admin role to users through both Entra and Microsoft admin center.  

### Through Entra 

Follow the following steps to assign the role of SharePoint Embedded admin on Entra: 

1. Sign into Entra as a Global admin 

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/a8e5c70e-7537-4027-8893-68a9e5108893)

1. Select the **“Users”** tab on the left-hand panel and select **“All users”**

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/6748a676-2a26-47a2-8429-1d24293d318a)

1. Select the user to assign the role of SharePoint Embedded admin under **“All users”**

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/8b95316c-f324-4500-80d5-1b693568fdcf)

1. Select the **“Assigned role”** tab on the left panel

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/75e69958-a139-41e9-9b25-59e343c469c0)

1. Select on **“Add assignments”** button and search for **“SharePoint Embedded”** in the panel that opens

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/c2d9db27-bc82-49a4-82fe-f0e3cab71db9)

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/2a1a8b56-6e19-4bb6-9fa0-27208abb80a1)

1. Select the “SharePoint Embedded Administrator” option and select on **“Add”**

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/0fc19905-786e-4e9e-b592-a255c0eb71ff)

1. The selected user is assigned the role of SharePoint Embedded admin

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/199eb669-565f-4022-ba82-3472403c63cf)

### Through Microsoft 365 Admin Center

1. Sign into MAC as a Global admin

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/8a52b7c6-91ed-4491-9e9d-26bffc1f0385)

1. Select **“Users”** and select **“Active users”** under it

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/933ebbd5-595a-4d7b-b4e6-4f718ee38317)

1. Select the user to assign the role of SharePoint Embedded admin

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/e9e806e0-efb4-4e35-b192-0e640f8e8431)

1. Select on **“Manage roles”** option under Roles

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/59e019ae-85aa-4282-bd15-5ba6f18d7ea7)

1. Select **“Admin center access”** and under **“Collaboration”**, select **“SharePoint Embedded Administrator”**

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/92786c95-ce03-4526-a591-bcabe7a4c700)

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/2227cf77-a9a0-498e-8cf4-76e4eb160df2)

1. Select **"Save changes"**. Now the selected user is assigned the role of SharePoint Embedded admin

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/6c64d48d-3c3b-48dc-8f01-0dae15322572)

    ![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/bd94f615-8de6-49e7-b2ef-c80ffaf90d44)
