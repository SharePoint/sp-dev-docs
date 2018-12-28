---
title: Authorize provider-hosted add-in users at run time by using OAuth
ms.date: 11/03/2017
---
# Authorize provider-hosted add-in users at run time by using OAuth

Provide authorized access to SharePoint resources by using OAuth in provider-hosted add-ins at run time.

_**Applies to:** SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

Your users can access SharePoint add-ins by opening a SharePoint site, choosing  **Site Contents**, and then choosing the add-in. SharePoint redirects users to the remote web where your provider-hosted add-in runs. Because users access the add-in from SharePoint, users are authorized by SharePoint before they can access the add-in.

Alternatively, if your users go directly to the URL of your provider-hosted add-in, that add-in must authorize them at run time by using OAuth. In this scenario, the provider-hosted add-in must handle authorization because your user wasn't authorized by SharePoint first. The [Core.DynamicPermissions ](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.DynamicPermissions) sample shows you how to dynamically request permissions from a website by using OAuth.
Use this solution to:

- Authorize users who navigate directly to your provider-hosted add-in rather than accessing your add-in from SharePoint. For example, you might not want your users to use the SharePoint UI. Instead, your users might use a provider-hosted add-in that shows relevant data retrieved from SharePoint.
    
- Build a provider-hosted add-in that can authenticate users with OAuth, and that can be sold through the Office Store.
    
## Before you begin

To get started, download the [Core.DynamicPermissions ](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.DynamicPermissions) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

Before you run the code sample: 

- Make sure you have  **Manage** permissions on the site. Learn more at [Understanding permission levels](https://support.office.com/article/Understanding-permission-levels-87ECBB0E-6550-491A-8826-C075E4859848).
    
- Register the add-in on a SharePoint site by using AppRegNew.aspx: 
    
	1. Navigate to appregnew.aspx on your SharePoint site. For example, if you want to use your add-in on the contoso.sharepoint.com site, navigate to http://contoso.sharepoint.com/_layouts/15/appregnew.aspx.
    
	2. Choose  **Generate** to generate a new **Client id**.
    
	3. Choose  **Generate** to generate a new **Client Secret**. 
	
	4. Enter a title for your add-in in  **Title**.
	
	5. In  **Add-in Domain**, enter the URL of your provider-hosted add-in. For example, enter localhost. 
	
	6. In  **Redirect URI**, enter the URL of your provider-hosted add-in. SharePoint will redirect your add-in to this URL after authorization and consent is granted. For example, enter https://localhost:44363/Home/Callback. You can get the domain name and port number from the  **SSL URL** property on the Core.DynamicPermissionsWeb project in Visual Studio.
	
	7. Choose  **Create**. 
    
- Copy the Client ID and Client Secret into the  **appSettings** element in Core.DynamicPermissionsWeb\web.config.

## Using the Core.DynamicPermissions add-in

When you run the code sample:

1. In  **Connect to Office 365**, enter the URL of the SharePoint site that you registered your add-in on, and then choose  **Connect**. For example, enter https://contoso.sharepoint.com.
    
2. Sign in to your Office 365 site.
    
3. If you are asked to grant consent to the permissions the add-in is requesting, choose  **Trust It**. Notice that you are redirected to the /_layouts/15/OAuthAuthorize.aspx page. 
    
	> [!NOTE] 
    > Your user must have  **Manage** permissions to grant consent to the permissions the add-in is requesting. You can learn more at [Authorization Code OAuth flow for SharePoint Add-ins](http://msdn.microsoft.com/library/e89e91c7-ea39-49b9-af5a-7f047a7e2ab7%28Office.15%29.aspx).

4. In  **Successfully connected to Contoso**, enter the name of a new list to create, and then choose  **Create List**.
    
5. Verify that  **Lists in Contoso**, which shows all the lists that belong to the Contoso site, shows your new list. 
    
When choosing  **Connect** on **Connect to Office 365**,  **Connect** in Controllers\HomeController.cs is called, which then calls **TokenRepository.Connect** . The URL entered by the user on **Connect to Office 365** is passed to **TokenRepository.Connect** as **hostUrl**.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```csharp
 public ActionResult Connect(string hostUrl)
        {
            TokenRepository repository = new TokenRepository(Request, Response);
            repository.Connect(hostUrl);
            return View();            
        }
```

**TokenRepository.Connect** calls **TokenHelper.GetAuthorizationUrl** . **TokenHelper.GetAuthorizationUrl** returns the redirect URL to OAuthAuthorize.aspx using the **hostUrl** and the desired permissions on the SharePoint resource. OAuthAuthorize.aspx is used to authorize users using OAuth. When redirected to OAuthorize.aspx, the user must sign in to Office 365, and then consent to the permissions the add-in is requesting, or trust the add-in. The desired permission on the SharePoint resource is **Web.Manage** . After user authorization, the code sample creates lists on the SharePoint site. To create lists on a SharePoint site, users must have **Web.Manage** permissions.

> [!NOTE] 
> **TokenHelper.GetAuthorizationUrl** returns a URL of the form **https://contoso.sharepoint.com/_layouts/15/OAuthAuthorize.aspx?IsDlg=1&amp;client_id=<Client ID>&amp;scope=Web.Manage&amp;response_type=code** , where **&lt;Client ID&gt;** is the add-in's Client ID. If your add-in is registered through the Seller Dashboard, any Office 365 site can install the add-in. If your add-in is not registered through the Seller Dashboard, you must register your add-in by using appregnew.aspx, and then update Core.DynamicPermissionsWeb\web.config. To learn more, see[Register SharePoint Add-ins 2013](http://msdn.microsoft.com/library/be41a5dc-2af9-4fd9-bf4e-ad6dfa849524%28Office.15%29.aspx).

```csharp
 public void Connect(string hostUrl)
        {
            if (!IsConnectedToO365)
            {
                HttpCookie spHostUrlCookie = new HttpCookie("SPHostUrl");
                spHostUrlCookie.Value = hostUrl;
                spHostUrlCookie.Expires = DateTime.Now.AddYears(5);
                _response.Cookies.Add(spHostUrlCookie);
                _response.Redirect(TokenHelper.GetAuthorizationUrl(hostUrl, "Web.Manage"));
            }
        }
```

After authorization, the add-in is redirected to  **Callback** in Controllers\HomeController.cs, which is the Redirect URI specified on the appregnew.aspx. **TokenHelper** passes the authorization code, **code** , to **Callback** . To grant the access token described later in this article, the authorization code, **code** , must be returned to **Callback** . **Callback** then calls **TokenRepository.Callback** .

```csharp
 public ActionResult Callback(string code)
        {
            TokenRepository repository = new TokenRepository(Request, Response);
            repository.Callback(code);
            return RedirectToAction("Index");
        }
```

**TokenRepository.Callback** calls **TokenCache.UpdateCacheWithCode** , which uses **TokenHelper.GetAccessToken** to obtain an OAuth access token based on the authorization code, **code** .

```csharp
public void Callback(string code)
        {
            HttpCookie spHostUrlCookie = _request.Cookies["SPHostUrl"];
            if (null != spHostUrlCookie)
            {
                Uri sharePointSiteUrl = new Uri(spHostUrlCookie.Value);
                TokenCache.UpdateCacheWithCode(_request, _response, sharePointSiteUrl);
            }
        }
```

```csharp
 public static void UpdateCacheWithCode(HttpRequestBase request, HttpResponseBase response, Uri targetUri)
        {
            string refreshToken = TokenHelper.GetAccessToken(request.QueryString["code"], "00000003-0000-0ff1-ce00-000000000000", targetUri.Authority, TokenHelper.GetRealmFromTargetUrl(targetUri), new Uri(request.Url.GetLeftPart(UriPartial.Path))).RefreshToken;
            SetRefreshTokenCookie(response.Cookies, refreshToken);
            SetRefreshTokenCookie(request.Cookies, refreshToken);
        }
```

Your add-in now has the access token for this user and can proceed to create lists on the SharePoint site. 

## See also
<a name="bk_addresources"> </a>

- [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md).
    
