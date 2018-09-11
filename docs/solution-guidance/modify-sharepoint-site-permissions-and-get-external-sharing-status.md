---
title: Modify SharePoint site permissions and get external sharing status
description: Modify properties of site collection administrators by using CSOM. Get the external sharing status and external users of a site collection or tenant.
ms.date: 4/26/2018
---

# Modify SharePoint site permissions and get external sharing status

You can use the [Core.SitePermissions](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.SitePermissions) sample to modify the site collection administrators on any site collection, including those for OneDrive for Business on Office 365 tenants. This sample also shows you how to obtain external sharing status for Office 365 Multi-Tenant installations.

Using a console application, you create a **ClientContext** object to get permissions to list and/or modify administrators, and get external sharing status. You also create a registered add-in by using OAuth tokens.

## Before you begin

To get started, download the [Core.SitePermissions](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.SitePermissions) sample add-in from the Office 365 Developer Patterns and Practices project on GitHub.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

## Work with site collection administrators

To update the administrators of a site collection, you must be an administrator for the site collection. The first step is to create a **ClientContext** object by a user with the right permissions.

```csharp
ClientContext cc = new AuthenticationManager().GetSharePointOnlineAuthenticatedContextTenant(String.Format("https://{0}.sharepoint.com/sites/{1}", tenantName, siteName), String.Format("{0}@{1}.onmicrosoft.com", userName, tenantName), password); 
```

<br/>

Using the **ClientContext** object, you can get a list of the current site collection administrators or update the site collection administrators, as shown in the following example.

```csharp
List<UserEntity> admins = cc.Web.GetAdministrators();

List<UserEntity> adminsToAdd = new List<UserEntity>();
adminsToAdd.Add(new UserEntity() { LoginName = "i:0#.f|membership|user@domain" });

cc.Web.AddAdministrators(adminsToAdd);

UserEntity adminToRemove = new UserEntity() { LoginName = "i:0#.f|membership|user@domain" };
cc.Web.RemoveAdministrator(adminToRemove);
```

<br/>

You can set the site collection administrators for site collections where you're not already a site collection administrator by creating a **ClientContext** object using a registered add-in. Here, the **ClientContext** object is based on an OAuth token with tenant-level permissions.

```csharp
// Use (Get-MsolCompanyInformation).ObjectID to obtain Target/Tenant realm: <guid>
//
// Manually register an add-in via the appregnew.aspx page and generate an add-in ID and 
// add-in secret. The add-in title and add-in domain can be a simple string like "MyAddin".
//
// Update the add-in ID in your worker role settings.
//
// Add the add-in secret in your worker role settings. 
//
// Manually set the permission XML for your add-in via the appinv.aspx page:
// 1. Look up your add-in via its add-in ID.
// 2. Paste the permission XML and choose create.
//
// Sample permission XML:
// <AppPermissionRequests AllowAppOnlyPolicy="true">
//   <AppPermissionRequest Scope="http://sharepoint/content/tenant" Right="FullControl" />
// </AppPermissionRequests>
//
// Because you're granting tenant-wide full control to an add-in, the add-in secret is as important
// as the password from your SharePoint administration account.
```

<br/>

After you've done that, you can use the following code to obtain a **ClientContext** object for this add-in.

```csharp
ClientContext cc = new AuthenticationManager().GetAppOnlyAuthenticatedContext("https://tenantname-my.sharepoint.com/personal/user2", "<your tenant realm>", "<appID>", "<appsecret>");
```

## Work with external sharing (Office 365 MT only)

This scenario shows how to get the external sharing status of a site collection, and get a list of external users for a specific site collection or for the whole tenant. Because this requires the tenant CSOM libraries, you need to create a **ClientContext** against the tenant admin site collection. The user account has to be a tenant administrator account.

```csharp
ClientContext ccTenant = new AuthenticationManager().GetSharePointOnlineAuthenticatedContextTenant(String.Format("https://{0}-admin.sharepoint.com/", tenantName), String.Format("{0}@{1}.onmicrosoft.com", userName, tenantName), password);
```

<br/>

After the **ClientContext** is ready, you can use the following code to get the external sharing status and a list of external users.

```csharp
ccTenant.Web.GetSharingCapabilitiesTenant(new Uri(String.Format("https://{0}.sharepoint.com/sites/{1}", tenantName, siteName)))

List<ExternalUserEntity> externalUsers = ccTenant.Web.GetExternalUsersForSiteTenant(new Uri(String.Format("https://{0}.sharepoint.com/sites/{1}", tenantName, siteName)));

List<ExternalUserEntity> externalUsers = ccTenant.Web.GetExternalUsersTenant();

```

## See also
   
- [Provisioning.Pages sample](https://github.com/SharePoint/PnP/tree/dev/Samples/Provisioning.Pages)
- [SharePoint site provisioning solutions](sharepoint-site-provisioning-solutions.md)