# Creating SharePoint Add-ins that use low-trust authorization
Learn about the low-trust authorization system for SharePoint Add-ins.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

Remote components in a SharePoint Add-in (or external application) can gain authorization to SharePoint resources by passing an access token to SharePoint with each HTTP request. The remote components obtain the access token from a Microsoft Azure Access Control Service (ACS) account that is associated with the customer's Office 365 tenancy. Azure ACS acts as the authorization server in an  [OAuth 2.0](http://oauth.net/) transaction, called aflow, with SharePoint as the resource server and the remote components as the client. For related protocol specifications, see  [Web Authorization Protocol (oauth)](http://datatracker.ietf.org/doc/active/#oauth). 
 

Provider-hosted SharePoint Add-ins that use low-trust authorization system can be sold in the Office Store and installed on either Microsoft SharePoint Online or an on-premise SharePoint farm that has been configured to use the customer's Office 365 tenancy to establish trust with Azure ACS. The customer must have an Office 365 tenancy to install SharePoint Add-ins that use the low-trust system. However, it is not necessary for the customer to use the tenancy for any other purpose. For instructions about linking an on-premise farm to a Office 365 tenancy, see  [Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site](use-an-office-365-sharepoint-site-to-authorize-provider-hosted-add-ins-on-an-on-premises-sharepoint-site.md).
 


## Registration with Azure ACS
<a name="Registration"> </a>

To use the low-trust system, the SharePoint Add-in must first be registered with Azure ACS and with the App Management Service of the SharePoint farm or SharePoint Online tenancy. (It is called "App Management Service" because SharePoint Add-ins were originally called "apps for SharePoint".) For add-ins that are sold through the Office Store, registration to ACS is performed in the Seller Dashboard and registration with the service is performed when the add-in is installed. For add-ins that are distributed in the organization add-in catalog, registration to both ACS and the service is performed on the \_Layouts\15\AppRegNew.aspx page of any SharePoint tenancy or farm where the add-in is to be installed. External, non- SharePoint, applications that access SharePoint, also need to be registered. This category includes Office Add-ins, Windows Store apps, web applications, and device apps such as smartphone apps.
 

 

 **Note**  Registration requires that the application have an Internet domain. Any existing domain can be used for this purpose, but you can't be 100% certain that any domain you don't own will always exist, so a web application would need to be part of a native device application even if the web application component played no other role than to enable registration. For an advanced code sample that is designed in this way, see  [Provision sites in batches with the add-in model](http://code.msdn.microsoft.com/Provision-sites-in-batches-fcf31bc6).
 

For more information on registration, see  [Register SharePoint Add-ins 2013](register-sharepoint-add-ins-2013.md).
 

 

### Add-in secret expiration

The add-in secret must be replaced every 12 months. For details, see  [Replace an expiring client secret in a SharePoint Add-in](replace-an-expiring-client-secret-in-a-sharepoint-add-in.md).
 

 

## Authorization policies
<a name="Policies"> </a>

A SharePoint Add-in can be designed to use either of two authorization policies:
 

 

-  **User + add-in Policy:** Add-ins that use this policy can only perform actions that both the add-in and the user have permission to do. This is the default policy that is used unless the developer takes specific steps to use the other.
    
 
-  **App-only Policy:** Add-ins that use this policy can perform any action that it has permission to do, even if the user does not have permission for the action. The developer must request that this policy be used in the add-in manifest of the add-in. The request must be approved by the user who installs the add-in. This policy is allowed for only provider-hosted SharePoint Add-ins.
    
 
For more information about authorization policies, see  [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint-2013.md).
 

 

## Two OAuth runtime flows
<a name="Flows"> </a>

Each time a cloud-hosted SharePoint Add-in or external application that is accessing SharePoint is run, a flow -- a series of interactions between the add-in, SharePoint, ACS, and sometimes the end user -- occurs. The end result of the flow is that SharePoint receives an access token included with each create, update, delete (CRUD) request that the application makes to SharePoint.
 

 
There are two major OAuth flows used by SharePoint. One is for cloud-hosted SharePoint Add-ins. The other, called "on the fly," is for applications on other platforms that access SharePoint data.
 

 

-  **Context Token flow:** The remote component of the SharePoint Add-in uses the SharePoint client object model (CSOM) or REST endpoints to make calls to SharePoint. SharePoint requests a context token from ACS that it can send to the remote server. The remote server uses the context token to request an access token from the ACS. The remote server then uses the access token to talk back to SharePoint. For details about this flow, see [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md).
    
 
-  **Authenticaton Code flow:** a SharePoint Add-in is granted the permissions it needs to SharePoint resources when it is installed. But applications that are not installed on SharePoint must ask for permissions "on the fly," that is, each time they run. There is no SharePoint context token in this flow. Instead, when the add-in runs and attempts to access SharePoint, SharePoint prompts the user to grant the permissions to the application that it is requesting. When the user grants the permissions, SharePoint obtains an authorization code from ACS which it passes to the application. The application uses the code to obtain an access token from ACS which it can then use to talk to SharePoint. For details about this flow, see [Authorization Code OAuth flow for SharePoint Add-ins](authorization-code-oauth-flow-for-sharepoint-add-ins.md).
    
 

## Troubleshooting low-trust SharePoint Add-ins
<a name="Trouble"> </a>

This article provides some general troubleshooting guidance and information about some specific issues with SharePoint Add-ins that use the low-trust authorization system.
 

 

### Use the Fiddler tool

The free  [Fiddler tool](http://www.telerik.com/fiddler) can be used to capture the HTTP Requests sent by the remote component of your add-in to SharePoint. There is a [free extension to the tool](https://github.com/andrewconnell/SPOAuthFiddlerExt) that automatically decodes the access tokens in the requests.
 

 

### Turn off the HTTPS requirement for OAuth during development
<a name="TurnOffHTTPRequirement"> </a>

OAuth requires SharePoint to run HTTPS (not only your service, but SharePoint too). This can get in the away when you are developing the add-in. For example, you may get a 403 (forbidden) message when attempting to make a call to SharePoint when debugging the add-in because the SSL support is not present in the "localhost" where your add-in is running.
 

 
You can turn off the HTTPS requirement during development using the following Windows PowerShell cmdlets.
 

 



```
$serviceConfig = Get-SPSecurityTokenServiceConfig
$serviceConfig.AllowOAuthOverHttp = $true
$serviceConfig.Update()

```

To turn the HTTPS requirement back on later, use the following Windows PowerShell cmdlets.
 

 



```
$serviceConfig = Get-SPSecurityTokenServiceConfig
$serviceConfig.AllowOAuthOverHttp = $false
$serviceConfig.Update()

```


### Miscellaneous SSL and domain-related authorization errors
<a name="DomainRelatedErrors"> </a>

A mismatch of domain names in configuration files and registration forms can prevent authorization. The following four values have to be exactly the same:
 

 

- The  **Add-in Domain** that is specified when the SharePoint Add-in is registered on either AppRegNew.aspx or Seller Dashboard.
    
 
- The domain under which the remote web application's security certificate is registered.
    
 
- The domain part of the  **StartPage** value in the AppManifest.xml file.
    
 
- The domain part of the URLs of any event receivers specified in the AppManifest.xml.
    
 
In connection with this point, note the following:
 

 

- If the remote component of your SharePoint Add-in is using any port other than 443, you must explicitly include the port as part of the domain in all four places; for example,  `contoso.com:3333`. (You must use the HTTPS protocol for which the default port is 443.)
    
 
- If you create a DNS CNAME alias for your remote web application, use the CNAME alias for the domain value in all four places. For example, if your application is hosted at contoso.cloudapp.net and you create a CNAME of contososoftware.com for it, use contososoftware.com as the domain.
    
 
- The domain needs to be hardcoded in the  **StartPage** value (and any event receiver URLs) of the AppManifest.xml file before the add-in is packaged. If you use the **Publish** wizard in Visual Studio to package the add-in, you will be prompted for the domain and the Office Developer Tools for Visual Studio will insert it into the **StartPage** value for you (in place of the `~remoteWebUrl` token that is used during debugging. But if you are not using the **Publish** wizard, or even if you are but your remote web application is deployed to Azure, you must manually replace the token with the domain (and protocol); for example `https://contososoftware.com` or `https://MyCloudVM:3333`.
    
 

### Error "The underlying connection was closed: Could not establish trust relationship for the SSL/TLS secure channel."
<a name="ErrorConnectionClosed"> </a>

This error is an SSL handshake issue, not an OAuth issue. Make sure that the certificate you are using is trusted by SharePoint, and that the certificate matches the endpoint name.
 

 

### Errors using HTTP DAV method to read files from SharePoint
<a name="ErrorConnectionClosed"> </a>

HTTP DAV does not work with OAuth. If you are using the SharePoint client object model (CSOM), use the following code to read a file.
 

 

```C#
File f = clientContext.Web.GetFileByServerRelativeUrl( url);
ClientResult<Stream> r = f.OpenBinaryStream();
clientContext.ExecuteQuery();

```


## In this section
<a name="Trouble"> </a>

 [Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site](use-an-office-365-sharepoint-site-to-authorize-provider-hosted-add-ins-on-an-on-premises-sharepoint-site.md)
 

 
 [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md)
 

 
 [Authorization Code OAuth flow for SharePoint Add-ins](authorization-code-oauth-flow-for-sharepoint-add-ins.md)
 

 
 [Replace an expiring client secret in a SharePoint Add-in](replace-an-expiring-client-secret-in-a-sharepoint-add-in.md)
 

 

## Additional resources
<a name="FileName_AdditionalResources"> </a>


-  [Register SharePoint Add-ins 2013](register-sharepoint-add-ins-2013.md)
    
 

