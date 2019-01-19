---
title: Elevated privileges in SharePoint Add-ins
ms.date: 11/03/2017
localization_priority: Normal
---
# Elevated privileges in SharePoint Add-ins

Use the app-only policy or service accounts to elevate privileges in SharePoint Add-ins.

_**Applies to:** apps for SharePoint | SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

Different methods are used to elevate privileges in SharePoint Add-ins and farm solutions. Farm solutions elevate privileges by using RunWithElevatedPrivileges(SPSecurity.CodeToRunElevated), which belongs to the SharePoint server-side object model. SharePoint Add-ins use either the app-only policy or service accounts.

You might want to use elevated privileges in your add-in when:

* Your add-in performs actions for users that the users don't have adequate individual permissions to complete. Administrators might not assign users certain permissions because the permission level is too high.

   Your organization might, for example, implement a custom site collection provisioning solution that users must use to create site collections. Your organization might specify that all new site collections must have certain lists, content types, or fields associated with them. If users create site collections on their own, they might or might not remember to create these objects on their new site collection. In this scenario, users create site collections by using the add-in, but users aren't individually assigned permissions to create site collections.

* Your add-in is not acting on behalf of any user; for example, a governance or management process.

## App-only policy authorization

App-only policy uses OAuth to authenticate your add-in. When your add-in uses the app-only policy, SharePoint checks the permissions of the add-in principal only. These are the permissions that were granted to the add-in. Authorization succeeds if the add-in has sufficient permissions to perform the task, regardless of the permissions associated with the current user. When authorization succeeds, an access token is returned to your add-in. Your add-in will use this access token to perform any operations required by your code.

For more information, see [App authorization policy types in SharePoint 2013](https://msdn.microsoft.com/library/office/fp179892.aspx).

> [!NOTE] 
> The app-only policy is available only for provider-hosted add-ins. SharePoint-hosted add-ins that access the host web must use the user+app policy.

Benefits of using the app-only policy in your add-in include:

* You do not need to grant a separate user license. Service accounts require a separate user license.

* You get more granular control over permissions than is available with service accounts. For example, you can apply FullControl permissions on your web, which isn't possible when you use service accounts.

You can't use the app-only policy with the following APIs:

* User Profile

* Search

* Taxonomy (this only applies to scenarios that write to the managed metadata service)

To use the app-only policy, you first must grant permissions to the add-in by using appinv.aspx. The following code from AppManifest.xml file shows how to set the app-only policy and the permissions for your add-in.

```xml
 <AppPermissionRequests AllowAppOnlyPolicy="true">
   <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />
 </AppPermissionRequests>
```

Using the app-only policy requires that your add-in use either low-trust or high-trust authorization. The policy is not available with the SharePoint cross-domain JavaScript library, which is a third way of getting authorized access to SharePoint resources.

### Low-trust authorization

Your add-in can use low-trust authorization when using the Microsoft Azure Access Control Service (ACS) to establish trust between your provider-hosted add-in and either your Office 365 site or your on-premises SharePoint farm. You can learn more at [Three authorization systems for SharePoint Add-ins 2013](https://msdn.microsoft.com/en-us/library/office/dn790706.aspx). 

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), will be retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://dev.office.com/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).

To get a reference to the [ClientContext](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.clientcontext.aspx) object, your add-in should:

1. Get the access token by using TokenHelper.GetAppOnlyAccessToken.

2. Use TokenHelper.GetClientContextWithAccessToken to get the ClientContext object.

> [!NOTE] 
> The TokenHelper file is source code that is generated by the Microsoft Office Developer Tools for Visual Studio. There is no reference documentation for it, but there are extensive comments in the TokenHelper class. To see the code comments, create a provider-hosted add-in in Visual Studio.

> [!NOTE] 
> he code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```cs
Uri siteUrl = new Uri(ConfigurationManager.AppSettings["MySiteUrl"]);
try
{
    // Connect to a site using an app-only token.
    string realm = TokenHelper.GetRealmFromTargetUrl(siteUrl);
    var token = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal, siteUrl.Authority, realm).AccessToken;

    using (var ctx = TokenHelper.GetClientContextWithAccessToken(siteUrl.ToString(), token))
    {
        // Perform operations on the ClientContext object, which uses the app-only token. 
    }
}
catch (Exception ex)
{
    Console.WriteLine("Error in execution: " + ex.Message);
}
```

### High-trust authorization

If your add-in uses the high-trust authorization system (also known as S2S protocol), it calls a different **TokenHelper** method: **TokenHelper.GetS2SAccessTokenWithWindowsIdentity**.

**Important:** The **TokenHelper.GetS2SAccessTokenWithWindowsIdentity** is used for both app-only and user+app calls. The second parameter of the method, which holds the user identity, determines which policy is used. Pass **null** to use the app-only policy.

## Service accounts

Use service accounts to elevate privileges for your add-in only when the app-only policy does not provide sufficient permissions to complete your task. Also, in certain scenarios a user account is required. For example, you need to use service accounts when your code works with any of the following SharePoint service applications:

* User Profile service using the client-side object model (CSOM)

* Managed metadata service

* Search

When planning to use service accounts in your add-in, consider the following:

* Service accounts require a separate user license.

* Create either one service account per add-in, or use one service account for all add-ins in your SharePoint environment.

* You must supply the user name and password during authorization. Ensure service account credentials are stored or retrieved securely.

* Before your add-in can perform an action on a site, service accounts first must be granted permission to access the site.

> [!NOTE] 
> Add-ins purchased from the Office Store cannot use service accounts.

The following code shows how to authenticate by using [SharePointOnlineCredentials](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.sharepointonlinecredentials.aspx) with a service account.

```cs
using (ClientContext context = new ClientContext("https://contoso.sharepoint.com"))
{

    // Use default authentication mode.
    context.AuthenticationMode = ClientAuthenticationMode.Default;  

    // Specify the credentials for the service account.
    context.Credentials = new SharePointOnlineCredentials("User Name", "Password");
}
```

## See also

- [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md).
- [Add-in authorization policy types in SharePoint 2013](https://msdn.microsoft.com/en-us/library/office/fp179892.aspx).
- [Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site](https://msdn.microsoft.com/en-us/library/office/dn155905.aspx).
