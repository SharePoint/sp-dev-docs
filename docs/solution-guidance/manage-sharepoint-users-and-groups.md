---
title: Manage SharePoint users and groups
description: Manage users, groups, and permissions within a SharePoint site collection.
ms.date: 4/26/2018
localization_priority: Normal
---

# Manage SharePoint users and groups

This article shows you how to add or remove groups and users within a given site collection. The code examples in this article add users and groups, and then give them permission levels of access to SharePoint. These user and group permission level actions are implemented via extension methods in the [Core.GroupManagement](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.GroupManagement) PnP sample.

## Before you begin

To get started, download the [Core.GroupManagement](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.GroupManagement) sample add-in from the Office 365 Developer Patterns and Practices project on GitHub.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

## Add and remove groups and users

The following example shows you how to add groups and add users to groups.

```csharp
cc.Load(cc.Web, web => web.CurrentUser);
cc.ExecuteQuery();
Microsoft.SharePoint.Client.User currentUser = cc.Web.CurrentUser;

if (!cc.Web.GroupExists("Test"))
{
  Group group = cc.Web.AddGroup("Test", "Test group", true);
  cc.Web.AddUserToGroup("Test", currentUser.LoginName);
}
```

<br/>

The next example removes a group.

```csharp
if (cc.Web.GroupExists("Test"))
{
  cc.Web.RemoveGroup("Test");
}
```

<br/>

The next example removes users from groups.

```csharp
cc.Load(cc.Web, web => web.CurrentUser);
cc.ExecuteQuery();
Microsoft.SharePoint.Client.User currentUser = cc.Web.CurrentUser;
if (cc.Web.GroupExists("Test"))
{
  if (cc.Web.IsUserInGroup("Test", currentUser.LoginName))
  {
    cc.Web.RemoveUserFromGroup("Test", currentUser.LoginName);
  }
}
```

## Add permission level to group or user

The following example adds a permission level to a group.

```csharp
if (cc.Web.GroupExists("Test"))
{
  cc.Web.AddPermissionLevelToGroup("Test", RoleType.Contributor);
}
```

<br/>

The next example adds a permission level to a user.

```csharp
cc.Load(cc.Web, web => web.CurrentUser);
cc.ExecuteQuery();
Microsoft.SharePoint.Client.User currentUser = cc.Web.CurrentUser;
cc.Web.AddPermissionLevelToUser(currentUser.LoginName, RoleType.Reader);
```

## Remove permission level from group or user

The following example removes a permission level from a group.

```csharp
if (cc.Web.GroupExists("Test"))
{
  cc.Web.RemovePermissionLevelFromGroup("Test", RoleType.Reader);
}

```

<br/>

The next example removes a permission level from a user.

```csharp
cc.Load(cc.Web, web => web.CurrentUser);
cc.ExecuteQuery();
Microsoft.SharePoint.Client.User currentUser = cc.Web.CurrentUser;
cc.Web.RemovePermissionLevelFromUser(currentUser.LoginName, RoleType.Reader);
```

## See also

- [SharePoint site provisioning solutions](sharepoint-site-provisioning-solutions.md)

