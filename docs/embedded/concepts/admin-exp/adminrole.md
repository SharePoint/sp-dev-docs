# The SharePoint Embedded Administrator 

The SharePoint Embedded admin role is a dedicated role to manage SharePoint Embedded containers through SPO PowerShell and SPAC. This is required for developer admins to create new Container Types through PowerShell cmdlets and for consuming tenants admins to manage containers created on their tenants. 

The Global Administrator (Global Admin) role already has all the permissions of the SharePoint Embedded admin role. A SharePoint Administrator (SP Admin) can assign themselves the SPE Admin role to act as a consuming tenant admin or a developer administrator for SharePoint Embedded. 

The SharePoint Embedded admin role is available in Microsoft Entra and Microsoft 365 Admin Center (MAC). The SPE Admin does not have access to site management. This means that a SPE Admin will not be able to see Active and Deleted sites page on SharePoint Administrator Center (SPAC) as well as not be able to run site specific PowerShell cmdlets. 

## SharePoint Embedded Administrator tasks in developer tenant
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

## SharePoint Embedded Administrator tasks in consuming tenant
The following are some of the container specific commands actions currently supported on PowerShell:

a)	Application administration
- Get details of all SPE applications in CTA’s tenant
- Get detail of a specific SPE application in CTA’s tenant
- Get the permissions of owning applications in the CTA’s tenant
- Configure External sharing setting of a container of a SPE application in CTA’s tenant

b)	Container administration
- Get details of all containers of a SPE application in CTA’s tenant
- Get details of all containers of a SPE application in CTA’s tenant sorted basis storage
- Get details of a specific container of a SPE application in CTA’s tenant
- Set Sensitivity label of a specific container of a SPE application in CTA’s tenant
- Soft delete a container of a SPE application in CTA’s tenant
- Get details of all soft deleted containers in CTA’s tenant
- Restore a soft deleted container of a SPE application in CTA’s tenant
- Permanently delete a soft deleted container of a SPE application in CTA’s tenant

The following are some of the actions currently supported on SPAC:

a)	View Active container page

b)	View Deleted container page

c)	View the detailed information of a container

d)	Soft delete a container

e)	Restore a deleted container

f)	Purge a deleted container


## Assigning the SPE Admin Role 

The Global Admin can assign the SPE admin role to users through both Entra and MAC.  

### Through Entra 

Follow the following steps to assign the role of SPE Admin on Entra: 
1. Sign into Entra as a Global Admin 

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/a8e5c70e-7537-4027-8893-68a9e5108893)

2. Select “Users” tab on the left-hand panel and select “All users”

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/6748a676-2a26-47a2-8429-1d24293d318a)

3. Select the user to assign the role of SPE Admin under “All users”

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/8b95316c-f324-4500-80d5-1b693568fdcf)

4. Select the “Assigned role” tab on the left panel

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/75e69958-a139-41e9-9b25-59e343c469c0)

5. Click on “Add assignments” button and search for “SharePoint Embedded” in the panel that opens.

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/c2d9db27-bc82-49a4-82fe-f0e3cab71db9)

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/2a1a8b56-6e19-4bb6-9fa0-27208abb80a1)

6. Select the “SharePoint Embedded Administrator” option and click on “Add”

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/0fc19905-786e-4e9e-b592-a255c0eb71ff)


7. The selected user is assigned the role of SPE Admin

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/199eb669-565f-4022-ba82-3472403c63cf)


### Through M365 Admin Center

1. Sign into MAC as a Global Admin

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/8a52b7c6-91ed-4491-9e9d-26bffc1f0385)

2. Select “Users” and select “Active users” under it

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/933ebbd5-595a-4d7b-b4e6-4f718ee38317)

3. Select the user to assign the role of SPE Admin

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/e9e806e0-efb4-4e35-b192-0e640f8e8431)

4. Click on “Manage roles” option under Roles

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/59e019ae-85aa-4282-bd15-5ba6f18d7ea7)

5. Select “Admin center access” and under “Collaboration”, select “SharePoint Embedded Administrator”

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/92786c95-ce03-4526-a591-bcabe7a4c700)

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/2227cf77-a9a0-498e-8cf4-76e4eb160df2)

6. Click on Save changes and the selected user is assigned the role of SPE Admin 

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/6c64d48d-3c3b-48dc-8f01-0dae15322572)

![image](https://github.com/cindylay/sp-dev-docs/assets/136049061/bd94f615-8de6-49e7-b2ef-c80ffaf90d44)


