# The SharePoint Embedded Administrator 

The SharePoint Embedded admin role is a dedicated role to manage SharePoint Embedded containers through SPO PowerShell and UX. This is required for developer administrator to create new Container Types through PowerShell cmdlets and for consuming tenants admins to manage containers created on their tenants. 

The Global Administrator (Global Admin) role already has all the permissions of the SharePoint Embedded admin role. A SharePoint Administrator (SP Admin) can assign themselves the SPE Admin role to act as a consuming tenant admin or a developer administrator for SharePoint Embedded. 

The SharePoint Embedded admin role is available in Microsoft Entra and Microsoft 365 Admin Center (MAC). The SPE Admin does not have access to site management. This means that a SPE Admin will not be able to see Active and Deleted sites page on SharePoint Administrator Center (SPAC) as well as not be able to run site specific PowerShell cmdlets. 

## SharePoint Embedded Administrator tasks in developer tenant
Add the Powershell cmdlets or link to the cmdlets
## SharePoint Embedded Administrator tasks in consuming tenant
Add the Powershell cmdlets or link to the cmdlets
## Assigning the SPE Admin Role 

The Global Admin can assign the SPE admin role to users through both Entra and MAC.  

### Through Entra 

Follow the following steps to assign the role of SPE Admin on Entra: 
1. Sign into Entra as a Global Admin 
[Add image]
2. Select “Users” tab on the left-hand panel and select “All users” [Add iMage]
3. Select the user to assign the role of SPE Admin under “All users” [Add iMage]
4. Select the “Assigned role” tab on the left panel [Add iMage]
5. Click on “Add assignments” button and search for “SharePoint Embedded” in the panel that opens.  [Add iMage]
6. Select the “SharePoint Embedded Administrator” option and click on “Add”
7. The selected user is assigned the role of SPE Admin

### Through M365 Admin Center

1. Sign into MAC as a Global Admin
2. Select “Users” and select “Active users” under it
3. Click on “Manage roles” option under Roles
4. Select “Admin center access” and under “Collaboration”, select “SharePoint Embedded Administrator”
5. Click on Save changes and the selected user is assigned the role of SPE Admin 
