---
title: Connect to new Microsoft 365 group - CSOM development
description: Client-side object model development for connecting to a new Microsoft 365 group operation.
ms.date: 10/21/2020
localization_priority: Priority
---

# Connect to new Microsoft 365 group: CSOM development

The SharePoint client-side object model (CSOM) provides access to the SharePoint object model from code that is running locally or on a different server than SharePoint.

> [!IMPORTANT]
> It is **not** supported to connect a Communication site to Microsoft 365 group.

## Prerequisites

Before you get started, make sure that you're familiar with the following:

- [Using the Client Object Model](https://msdn.microsoft.com/library/ff798388.aspx)
- [Common Programming Tasks in the Managed Client Object Model](https://msdn.microsoft.com/library/ee537013.aspx)

You also need to reference the [Microsoft.SharePointOnline.CSOM](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM/) NuGet package (version 16.1.6906.1200 or later).

## CSOM code example

The following example shows how to create a __Microsoft.Online.SharePoint.TenantAdministration.Tenant__ object and call the __CreateGroupForSite__ method to return a list of themes. 

> [!NOTE]
> * The URL used to create the context object includes the _-admin_ suffix, because **TenantAdministration** methods work with the admin site.
> * Create a __Tenant__ instance with the [Tenant constructor](https://msdn.microsoft.com/library/dn174852.aspx), and then call the methods on that instance.

```csharp
using System.Security;
using Microsoft.SharePoint.Client;
using Microsoft.Online.SharePoint.TenantAdministration;
using Microsoft.Online.SharePoint.TenantManagement;

...

ClientContext ctx = new ClientContext("https://contoso-admin.sharepoint.com/");
var pwd = "mypassword";
var passWord = new SecureString();
foreach (char c in pwd.ToCharArray()) passWord.AppendChar(c);
ctx.Credentials = new SharePointOnlineCredentials("admin@mydomain.com", passWord);
Tenant tenant = new Tenant(ctx);
tenant.CreateGroupForSite("https://contoso.sharepoint.com/sites/team-site", "display-name-for-group", "alias-for-group", true);
ctx.ExecuteQuery();
```


## Methods in Microsoft.Online.SharePoint.TenantAdministration.Tenant class

Use the following methods to create a new Microsoft 365 Group and attach it to an existing site.

### CreateGroupForSite method

Create a new Microsoft 365 group and attach it to an existing site. After this succeeds for a given site, calling it again with the same site will throw an Exception.

__Namespace:__ Microsoft.Online.SharePoint.TenantAdministration.Tenant<br/>
__Return type:__ void

|Parameter          | Type                |Description |
|-----------        |------               |-------------|
| siteUrl           | string              | URL of the site to connect to a new Microsoft 365 group. |
| displayName       | string              | Display Name group to create. |
| alias             | string              | Alias of the new group to create. |
| isPublic          | bool                | Whether the group is public or private. |
| optionalParams    | GroupCreationParams | An optional set of creation parameters for the group. |

<br/>

__type:__ Microsoft.Online.SharePoint.TenantAdministration.GroupCreationParams<br/>

|Property         | Type      |Description |
|-----------      |------     |-------------|
| Description     | string    | Gets and sets the group description. |
| Owners          | string[]  | Gets and sets the group owners. These should be the principal names of the users.|
| CreationOptions | string[]  | Gets and sets the group's creation options. |
| Classification  | string    | Gets and sets the group's data classification. |

<br/>

## See also

- [Overview of the "Connect to new Microsoft 365 group" feature](groupify-overview.md)
- [Modernize your classic SharePoint sites](../../transform/modernize-classic-sites.md)



