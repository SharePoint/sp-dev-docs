
# Troubleshooting high-trust SharePoint Add-ins
Get some help with problems developing high-trust SharePoint Add-ins.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint#bk_newname).
 

This article describes the Fiddler tool and also provides some guidance for resolving some specific issues.
 

## Use the Fiddler tool

The free  [Fiddler tool](http://www.telerik.com/fiddler) can be used to capture the HTTP Requests sent by the remote component of your add-in to SharePoint. There is a [free extension to the tool](https://github.com/andrewconnell/SPOAuthFiddlerExt) that automatically decodes the access tokens in the requests.
 

 
After you have installed Fiddler on the web application server, add the following markup to your web.config file to make requests from your remote web app go through this proxy. This way, you can capture a Fiddler trace and see the full response from SharePoint when you get an error.
 

 

 **Note**  Ensure that you remove this markup if you are not running Fiddler. If you don't remove the markup, your add-in won't be able to make HTTP requests.
 




```XML
<system.net>
  <defaultProxy>
    <proxy usesystemdefault="False" bypassonlocal="False" proxyaddress="http://127.0.0.1:8888" />
  </defaultProxy>
</system.net>

```

After you have Fiddler installed, you can also check the response headers from SharePoint, which will include a request GUID. This request GUID is a correlation ID you can look up in the logs to find any log errors associated with that request.
 

 

## 401 Unauthorized error
<a name="UnauthorizedException"> </a>

Several things can cause a  **401 Unauthorized** error when the high-trust add-in first accesses SharePoint. If you are using the Client-side Object Model (CSOM), the error looks something like the following:
 

 

```C#
[WebException: The remote server returned an error: (401) Unauthorized.]
   System.Net.HttpWebRequest.GetResponse() +8515936
   Microsoft.SharePoint.Client.SPWebRequestExecutor.Execute() +178
   Microsoft.SharePoint.Client.ClientRequest.ExecuteQueryToServer(ChunkStringBuilder sb) +1427
   Microsoft.SharePoint.Client.ClientRequest.ExecuteQuery() +270
   Microsoft.SharePoint.Client.ClientRuntimeContext.ExecuteQuery() +146
   Microsoft.SharePoint.Client.ClientContext.ExecuteQuery() +666
   S2STestWeb.Default.Page_Load(Object sender, EventArgs e) in c:\MyFiles\HightrustTest\HightrustTestWeb\Default.aspx.cs:28
   System.Web.UI.Control.LoadRecursive() +71
   System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +3178
```

If you are using the TokenHelper file and Windows identity, the code that triggers the exception looks like the following:
 

 



```C#
ClientContext clientContext = 
    TokenHelper.GetS2SClientContextWithWindowsIdentity(sharepointUrl, Request.LogonUserIdentity); 
clientContext.Load(clientContext.Web);
clientContext.ExecuteQuery();
```

Your first step in troubleshooting the issue is to use the Visual Studio debugger to verify that the access token and the  **ClientContext** object are constructed successfully. If they are, investigate the following possibilities:
 

 
 **Possible issues and resolution:**
 

 

- There is no user profile created for the user who is accessing the remote web application. Create the user profile.
    
 
- Your add-in does not have permission to the resource you are trying to access. Open the SharePoint Management Shell and run that the following Windows PowerShell cmdlet. The variable  `$web` is the SharePoint website you are trying to get access to and `$appPrincipal`) is the add-in ID. For more information, see  [Set-SPAppPrincipalPermission](http://technet.microsoft.com/en-us/library/jj219714%28v=office.15%29.aspx).
    
```
  Set-SPAppPrincipalPermission -Site $web -AppPrincipal $appPrincipal -Scope Site -Right FullControl
```

- Your web application is accepting anonymous requests. This means there is not a real user identity in the access token. Ensure that anonymous access has been disabled in IIS for the root directory of your remote web application. You can also check this by debugging your remote web application, and checking the value of  **Request.LogonUserIdentity** in the default.aspx.cs (or .vb) file to ensure that it's not an anonymous user.
    
 
- Your digital certificate was not added to the trusted certificate store. Be sure you have followed the procedures in  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins).
    
 

## Miscellaneous SSL and domain-related authorization errors
<a name="DomainRelatedErrors"> </a>

A mismatch of domain names in configuration files and registration forms can prevent authorization. The following four values have to be exactly the same:
 

 

- The  **Add-in Domain** that is specified when the SharePoint Add-in is registered on AppRegNew.aspx.
    
 
- The domain under which the remote web application's security certificate is registered.
    
 
- The domain part of the  **StartPage** value in the AppManifest.xml file.
    
 
- The domain part of the URLs of any event receivers specified in the AppManifest.xml.
    
 
In connection with this point, note the following:
 

 

- If the remote component of your SharePoint Add-in is using any port other than 443, you must explicitly include the port as part of the domain in all four places; for example,  `MarketingServer:3333`. (You must use the HTTPS protocol for which the default port is 443.)
    
 
- The domain needs to be hardcoded in the  **StartPage** value (and any event receiver URLs) of the AppManifest.xml file before the add-in is packaged. If you use the **Publish** wizard in Visual Studio to package the add-in, you will be prompted for the domain and the Office Developer Tools for Visual Studio will insert it into the **StartPage** value for you (in place of the `~remoteWebUrl` token that is used during debugging. But if you are not using the **Publish** wizard you must manually replace the token with the domain (and protocol); for example `https://MarketingServer` or `https://MarketingServer:3333`.
    
 

## Runtime error saying that there's no certificate with that serial number
<a name="DomainRelatedErrors"> </a>

If you are sure you have the correct certificate serial number in the web.config and you can see the certificate in the  **Windows Certificate Store**, then there may be a hidden extra character in the serial number in the web.config. This will happen if the serial number is copy'n'pasted from the **Microsoft Management Console**. Delete the entire serial number value from the web.config and *manually*  retype it.
 

 

