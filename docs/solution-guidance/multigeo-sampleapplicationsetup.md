---
title: Set up a Multi-Geo sample application
description: Configure sample applications for a Multi-Geo tenant.
ms.date: 4/27/2018
---

# Set up a Multi-Geo sample application

> [!IMPORTANT] 
> OneDrive and SharePoint Online Multi-Geo is currently in preview and is subject to change.

When developing for a Multi-Geo tenant, it's important to understand the security model. Fortunately, the model used for a Multi-Geo tenant is the same as the model used for a regular tenant. 

This article shows you how to configure the following sample applications:

- [An application that can read and update profiles for all users using the Graph API](#read-update-graph)
- [An application that can read and update profiles for all users using the CSOM User Profile API](#read-update-csom)
- [An application that can discover the Multi-Geo configuration](#discover)
- [An application that can create and delete site collections and set tenant site collection properties](#site-collections)

<a name="read-update-graph"> </a>

## Read and update profiles for all users using the Graph API

As explained in the article [Work with user profiles in a Multi-Geo tenant](multigeo-userprofileexperience.md), the preferred model to use to read and update user profile properties is the Graph API. This section explains the permissions you must grant to your application to realize tenant-wide user profile reads and updates. 

There is [a long list of possible permissions](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference) that you can grant to an application defined in Azure AD, but for manipulating profiles, you can limit the permissions to the following.

|Permission|Type|Description|Admin consent needed |
|:-----|:-----|:-----|:-----|
|**[User.ReadWrite.All](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference#user-permissions)** | Application permission | Allows the app to read and write the full set of profile properties, group membership, reports, and managers of other users in your organization, without a signed-in user.<br/><br/>Also allows the app to create and delete non-administrative users.<br/><br/>Does not allow reset of user passwords. | Yes |
|**[Sites.ReadWrite.All](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference#sites-permissions)** | Application permission | Allows the app to read/write documents and list items in all site collections without a signed-in user. <br/><br/>This permission is only needed if the application will be retrieving the user's personal site location (for example, `https://graph.microsoft.com/v1.0/users/UserB@contoso.onmicrosoft.com?$select=mySite`). | Yes |

The Microsoft Graph-based Multi-Geo samples use the Microsoft Authentication Library (MSAL) to connect with the Microsoft Graph on the v2 endpoint. Compared to ADAL, which connects by using the v1 endpoint, MSAL allows connection to the Microsoft Graph by using Microsoft accounts, Azure AD, and Azure AD B2C. The following instructions will help you set up your application for the v2 endpoint, but you can also use the "older" approach based on the v1 endpoints.

### Register your application

1. To use application permissions against the Microsoft Graph, register your application at https://apps.dev.microsoft.com. 

2. After you're signed in, choose **Add an app**, and then choose **Add a new converged application**.

3. Give your application a name, and then choose **Create application**.

4. The application configuration screen appears.

  ![Register application in Azure AD](media/multigeo/multigeopermissions_registerapp1.png)

5. **Generate a new password** and make a note of it together with the **application ID**.

6. Choose **Add Platform**, and then choose **Native application** as the platform target because the application does not have a landing page.

  ![Configure application in Azure AD part 1](media/multigeo/multigeopermissions_registerapp2.png)

7. Add the necessary **Application Permissions**. In this sample app, we have added the Sites.ReadWrite.All and User.ReadWrite.All application permissions.

8. Clear the **Live SDK support** check box.

  ![Configure application in Azure AD part 2](media/multigeo/multigeopermissions_registerapp3.png)

9. Save your changes.


### Consent to the application

1. In this sample, the User.ReadWrite.All and Sites.ReadWrite.All application permissions require admin consent in a tenant before they can be used. Create a consent URL like the following:

  ```
  https://login.microsoftonline.com/<tenant>/adminconsent?client_id=<clientid>&state=<something>
  ```

2. Use the client ID from the registered app, and consent to the app from my tenant contoso.onmicrosoft.com; the URL looks like this:

  ```
  https://login.microsoftonline.com/contoso.onmicrosoft.com/adminconsent?client_id=6e4433ca-7011-4a11-85b6-1195b0114fea&state=12345
  ```

3. Browse to the created URL and sign in as a tenant admin, and consent to the application. You can see that the consent screen shows the name of your application as well as the permission scopes you configured.

  ![Tenant consent for Azure AD application](media/multigeo/multigeopermissions_registerapp4.png)



<a name="read-update-csom"> </a>

## Read and update profiles for all users using the CSOM User Profile API

When using the CSOM API to manipulate profile properties, you do this only for the custom created properties because out-of-the-box properties are better handled via the Microsoft Graph API. For more information, see the article [Work with user profiles in a Multi-Geo tenant](multigeo-userprofileexperience.md). 

From a permission point of view there are two modes:

- **Using user credentials**

  This requires setting up a `ClientContext` object by using the tenant admin URL and SharePoint Online admin credentials. Because there's only one Azure AD instance holding users, this implies that a SharePoint Online admin is the admin for all the geo locations.

  ```csharp
  string tenantAdminSiteForMyGeoLocation = "https://contoso-europe-admin.sharepoint.com";

  using (ClientContext cc = new ClientContext(tenantAdminSiteForMyGeoLocation))
  {
      SecureString securePassword = GetSecurePassword("password");
      cc.Credentials = new SharePointOnlineCredentials("admin@contoso.onmicrosoft.com", securePassword);
      
      // user profile logic
  }

  static SecureString GetSecurePassword(string Password)
  {
      SecureString sPassword = new SecureString();
      foreach (char c in Password.ToCharArray()) sPassword.AppendChar(c);
      return sPassword;
  }
  ```

- **Using an app-only principal**

  When using app-only, you must grant the created app principal **full control** for the [http://sharepoint/social/tenant](https://dev.office.com/sharepoint/docs/general-development/get-started-developing-with-social-features-in-sharepoint#bkmk_AppPerms) permission scope. 
  
The following instructions show you how to use appregnew.aspx and appinv.aspx to register an app principal and consent to it.

### Create the principal

1. Go to a site in your tenant (for example, `https://contoso.sharepoint.com`), and then call the appregnew.aspx page (for example, `https://contoso.sharepoint.com/_layouts/15/appregnew.aspx`). 

2. On this page, choose the **Generate** button to generate a client ID and client secret. 

3. Complete the remaining fields as follows:

  - Title: `Multi-Geo demo`
  - App Domain: `www.localhost.com`
  - Redirect URI: `https://www.localhost.com`

  ![Register ACS app principal](media/multigeo/multigeopermissions_registerprincipal1.png)

  > [!NOTE] 
  > Store the retrieved information (client ID and client secret) because you'll need these in the next step.

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), will be retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://dev.office.com/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).


### Grant permissions to the created principal

The next step is granting permissions to the newly created principal. Because we're granting tenant-scoped permissions, this grant can only be done via the appinv.aspx page on the tenant administration site. 

1. You can reach this site via `https://contoso-admin.sharepoint.com/_layouts/15/appinv.aspx`. 

2. After the page is loaded, add your client ID, and then **look up** the created principal.

  ![Grant permissions to app principal](media/multigeo/multigeopermissions_registerprincipal2.png)

3. To grant permissions, you must provide the permission XML that describes the needed permissions. Because the UI experience scanner needs to be able to access all sites and uses search with app-only, it requires the following permissions:

  ```xml
  <AppPermissionRequests AllowAppOnlyPolicy="true">
    <AppPermissionRequest Scope="http://sharepoint/social/tenant" Right="FullControl" />
  </AppPermissionRequests>
  ```

4. When you choose **Create**, you are presented with a permission consent dialog. Choose **Trust It** to grant the permissions.

  ![Consent the app principal](media/multigeo/multigeopermissions_registerprincipal3.png)


### Use the principal in your code

After the principal is created and consented, you can use the principal's ID and secret to request access. The `TokenHelper.cs` class grabs the ID and secret from the application's configuration file.

```csharp
string tenantAdminSiteForMyGeoLocation = "https://contoso-europe-admin.sharepoint.com";

//Get the realm for the URL.
string realm = TokenHelper.GetRealmFromTargetUrl(siteUri);

//Get the access token for the URL.  
string accessToken = TokenHelper.GetAppOnlyAccessToken(TokenHelper.SharePointPrincipal, siteUri.Authority, realm).AccessToken;

//Create a client context object based on the retrieved access token.
using (ClientContext cc = TokenHelper.GetClientContextWithAccessToken(tenantAdminSiteForMyGeoLocation, accessToken))
{
    // user profile logic
}
```

<br/>

A sample app.config looks like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <!-- Use AppRegNew.aspx and AppInv.aspx to register client id with proper secret -->
    <add key="ClientId" value="[Your Client ID]" />
    <add key="ClientSecret" value="[Your Client Secret]" />
  </appSettings>
</configuration>
```


> [!NOTE] 
> You can easily insert the `TokenHelper.cs` class in your project by adding the [AppForSharePointOnlineWebToolkit] (https://www.nuget.org/packages/AppForSharePointOnlineWebToolkit/) NuGet package to your solution.


<a name="discover"> </a>

## Discover the Multi-Geo configuration

The only supported API that you can use to discover the geo locations in a Multi-Geo tenant is the Graph API. This section explains the permissions you must grant to your application to discover Multi-Geo information. 

There is [a long list of possible permissions](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference) that you can grant to an application defined in Azure AD, but for reading Multi-Geo tenant configuration information, you can limit permissions to the following.

|Permission |Type |Description |Admin consent needed |
|:-----|:-----|:-----|:-----|
|**[Sites.ReadWrite.All](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference#sites-permissions)** | Application permission | Allows the app to read/write documents and list items in all site collections without a signed-in user. | Yes |

Use the Azure AD application creation steps as described in the [Read/update profiles for all users](#read-update-graph) section.

<a name="site-collections"> </a>

## Create and delete site collections and set tenant site collection properties

### Using the Microsoft Graph API

The [Multi-Geo sites](multigeo-sites.md) article provides more details about how to create group sites (also known as "modern" team sites) by using the Microsoft Graph API. In this section, we're only addressing the permissions. The following table lists the needed permissions.

|Permission|Type|Description|Admin consent needed |
|:-----|:-----|:-----|:-----|
|**[Group.ReadWrite.All](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference#group-permissions)** | Application permission | Allows the app to create groups, read and update group memberships, and delete groups.<br/><br/>All of these operations can be performed by the app without a signed-in user.<br/><br/>Note that not all group API supports access using app-only permissions. | Yes |

The Microsoft Graph based Multi-Geo samples use the Microsoft Authentication Library (MSAL) to connect with the Microsoft Graph on the v2 endpoint. Compared to ADAL, which connects using the v1 endpoint, MSAL allows connection to the Microsoft Graph by using Microsoft accounts, Azure AD, and Azure AD B2C. 

Use the Azure AD application creation steps as described in the [Read/update profiles for all users](#read-update-graph) section.

### Using the CSOM Tenant API

Using the CSOM Tenant API is very similar to the [previously described CSOM guidance](#read-update-csom); in fact, the guidance for using user credentials is identical. For using an app-only principal, the instructions are the same, but you must grant different permissions (**tenant** and **full control**).

```xml
<AppPermissionRequests AllowAppOnlyPolicy="true">
  <AppPermissionRequest Scope="http://sharepoint/content/tenant" Right="FullControl" />
</AppPermissionRequests>
```

## See also

- [Microsoft Graph Developer Center](https://developer.microsoft.com/en-us/graph)
- [Get access tokens to call Microsoft Graph](https://developer.microsoft.com/en-us/graph/docs/concepts/auth_overview)
- [Microsoft Graph documentation](https://developer.microsoft.com/en-us/graph/docs/concepts/overview)
- [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
- [App-only and elevated privileges in the SharePoint Add-in model](app-only-elevated-privileges-sharepoint-add-in.md)
- [OneDrive and SharePoint Online Multi-Geo Preview](multigeo-introduction.md)