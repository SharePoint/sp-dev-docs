---
title: Role, inheritance, elevation of privilege, and password changes in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: a72c6cad-9e3d-4d57-bf26-24cd1ad7f020
---


# Role, inheritance, elevation of privilege, and password changes in SharePoint 2013

## Roles, role definitions, and role assignments
<a name="SP15_RoleInheritance_Role"> </a>

A role consists of two parts: a role definition and a role assignment. 
  
    
    
The role definition, or permission level, is the list of rights associated with the role. A right is a uniquely controllable action within a SharePoint website. For example, a user with the **Read** role can browse pages in the website and view items in lists. User permissions are never managed directly by using rights. All user and group permissions are managed through roles. A role definition is a collection of rights bound to a specific object. Role definitions (for example, **Full Control**, **Read**, **Contribute**, **Design**, or **Limited Access**) are scoped to the website and mean the same thing everywhere within the website, but their meanings can differ between sites within the same site collection. Role definitions can also be inherited from the parent website, just as permissions can be inherited. 
  
    
    
The role assignment is the relationship among the role definition, the users and groups, and the scope (for example, one user may be a reader on list 1, while another user is a reader on list 2). The relationship expressed through the role assignment is the key to making SharePoint 2013 security management role-based. All permissions are managed through roles; you never assign rights directly to a user. You assign only meaningful collections of rights (role definitions) that are well-defined and consistent. You manage unique permissions by adding or removing users and groups to or from role definitions through role assignments.
  
    
    
The website administrator can customize the default role definitions and create additional custom roles by using the Manage Roles page, which lists the available role definitions in the site.
  
    
    

## Role definition inheritance
<a name="SP15_RoleInheritance_RoleDefInheritance"> </a>

SharePoint 2013 supports inheriting role definitions similarly to how it supports inheriting permissions, and breaking role definition inheritance requires also breaking permissions inheritance.
  
    
    
Each SharePoint object can have its own set of permissions or inherit its permissions from its parent container. SharePoint 2013 does not support partial inheritance, where an object would inherit all the permissions of its parent and also have some of its own permissions. Permissions are either unique or inherited. SharePoint 2013 does not support directed inheritance. For example, an object can inherit only from its parent container, not from some other object or container.
  
    
    
When a website inherits role definitions, the roles are read-only, like the read-only permissions in an inherited website. The user can navigate to the parent site that holds the unique role definitions via a link. The default setting for all new websites, even sites with unique permissions, is to inherit role definitions from the parent website. When the permissions are unique, role definitions can be reverted to inherited role definitions or edited as local role definitions.
  
    
    
Role definition inheritance in a website affects permissions inheritance following these rules:
  
    
    

- Cannot inherit permissions unless it also inherits role definitions.
    
  
- Cannot create unique role definitions unless it also creates unique permissions.
    
  
- Cannot revert to inherited role definitions unless it also reverts all unique permissions within the website. The existing permissions are dependent on the role definitions.
    
  
- Cannot revert to inherited permissions unless it also reverts to inherited role definitions. The permissions for a website are always tied to the role definitions for that website.
    
  

## Managing user tokens
<a name="SP15_RoleInheritance_ManagingUserTokens"> </a>

SharePoint fetches user token information from the SharePoint database. If the user has never visited the site or if the user's token was generated more than 24 hours previously, SharePoint generates a new user token by trying to refresh the list of groups that the user belongs to. 
  
    
    
If the user account is an NT account, SharePoint uses the **AuthZ** interface to query the Active Directory directory service for the **TokenGroups** property. This may fail if SharePoint is running in an extranet mode, and does not have permission to query Active Directory for this property.
  
    
    
If the user account is a membership user, SharePoint queries the ASP.NET **RoleManager** for all the roles that the user belongs to. This may fail if there is not a proper .config file for the current executable file.
  
    
    
If SharePoint can't obtain the user's group memberships from Active Directory or **<roleManager>**, the newly generated token contains only the user's unique security ID (SID). No exception is thrown, but an entry is written into the ULS server log. The new token is also written into the SharePoint database so that it will not be regenerated within 24 hours.
  
    
    
After SharePoint obtains a fresh token, from the SharePoint database or by generating a new token, SharePoint sets the timestamp to be the current time and then returns it to the caller. This guarantees that the token is fresh for 24 hours.
  
    
    
After the  [SPUserToken](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPUserToken.aspx) object is returned to the caller, it is the caller's responsibility to not use the token after it is expired. You can write a helper utility to track the token expiration by recording the time when you get the token, and compare the diff with current time against [SPWebService.TokenTimeout](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPWebService.TokenTimeout.aspx) .
  
    
    
If an expired token is used to create a SharePoint website, an exception is thrown. The default token timeout value is 24 hours. It can be accessed via  [SPWebService.TokenTimeout](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPWebService.TokenTimeout.aspx) .
  
    
    

## Elevation of privilege
<a name="SP15_RoleInheritance_ElevationOfPrivilege"> </a>

Elevation of privilege, a feature that was added in Windows SharePoint Services 3.0, enables you to programmatically perform actions in code by using an increased level of privilege. The  [SPSecurity.RunWithElevatedPrivileges](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSecurity.RunWithElevatedPrivileges.aspx) method enables you to supply a delegate that runs a subset of code in the context of an account with higher privileges than the current user.
  
    
    
The following is a standard use of **RunWithElevatedPrivileges**.
  
    
    



```cs

SPSecurity.RunWithElevatedPrivileges(delegate()
{
    // Do things by assuming the permission of the "system account".
});
```

Frequently, to perform actions in SharePoint, you must get a new  [SPSite](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.aspx) object to effect the changes. For example:
  
    
    



```cs

SPSecurity.RunWithElevatedPrivileges(delegate()
{
    using (SPSite site = new SPSite(web.Site.ID))
    {
       // Do things by assuming the permission of the "system account".
    }
});
```

Although elevation of privilege provides a powerful technique for managing security, it should be used with care. You should not expose direct, uncontrolled mechanisms for people with low privileges to circumvent the permissions granted to them.
  
    
    

> [!IMPORTANT]
> If the method passed to  [RunWithElevatedPrivileges](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSecurity.RunWithElevatedPrivileges.aspx) includes any write operations, the call to [RunWithElevatedPrivileges](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSecurity.RunWithElevatedPrivileges.aspx) should be preceded by a call to either [SPUtility.ValidateFormDigest()](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPUtility.ValidateFormDigest.aspx) or [SPWeb.ValidateFormDigest()](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.ValidateFormDigest.aspx) .
  
    
    


## Automatic password changes
<a name="SP15_RoleInheritance_AutomaticPasswordChange"> </a>

The automatic password change feature enables you to update and deploy passwords without performing manual password update tasks across multiple accounts, services, and web applications. This makes managing password in SharePoint 2013 simpler. You can use the automatic password change feature to determine whether a password is about to expire and to reset the password by using a long, cryptographically strong random string.
  
    
    

### Managed account

You use managed accounts to implement the automatic password change feature. Managed accounts improve security and ensure application isolation. With managed accounts, you can:
  
    
    

- Configure the automatic password change feature to deploy passwords across all services in a farm.
    
  
- Configure SharePoint web applications and services, that are running on application servers in a SharePoint farm, to use different domain accounts.
    
  
- Map managed accounts to various services and web applications in a farm.
    
  
- Create multiple accounts in Active Directory Domain Services (AD DS), and then register each of these accounts in SharePoint.
    
  
You can also register managed accounts and enable SharePoint 2013 to control account passwords. Users have to be notified about planned password changes and related service interruptions, but the accounts used by a SharePoint farm, web applications, and various services can be automatically reset and deployed within the farm as necessary, based on individually configured password reset schedules.
  
    
    
Operations that you can use the  [SPManagedAccount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPManagedAccount.aspx) class to perform include:
  
    
    

- Change password
    
  
- Set a password change schedule
    
  
- Propagate password change
    
  
- Find out when a password was last changed
    
  
- Enforce minimum length for password
    
  
For more information about the managed account API, see the following links:
  
    
    

-  [SPManagedAccount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPManagedAccount.aspx)
    
  
-  [SPManagedAccount.EventProcessingOptions](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPManagedAccount.EventProcessingOptions.aspx)
    
  
-  [SPManagedAccount.EventType](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPManagedAccount.EventType.aspx)
    
  

## Additional resources
<a name="SP15_RoleInheritance_AdditionalResources"> </a>


-  [Authentication, authorization, and security in SharePoint 2013](authentication-authorization-and-security-in-sharepoint.md)
    
  
-  [Authorization, users, groups, and the object model in SharePoint 2013](authorization-users-groups-and-the-object-model-in-sharepoint.md)
    
  
-  [Claims-based identity in SharePoint 2013](claims-based-identity-in-sharepoint.md)
    
  
-  [Claims-based identity and concepts in SharePoint 2013](claims-based-identity-and-concepts-in-sharepoint.md)
    
  
-  [Configuration, administration, and resources in SharePoint 2013](configuration-administration-and-resources-in-sharepoint.md)
    
  

