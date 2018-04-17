---
title: Creating SharePoint Add-ins that use low-trust authorization
description: A provider-hosted SharePoint Add-in can get access to resources in the SharePoint tenancy or farm on which the add-in is installed. Primarily intended for add-ins whose remote components are hosted in the cloud.
ms.date: 12/27/2017
ms.prod: sharepoint
---


# Creating SharePoint Add-ins that use low-trust authorization

Remote components in a SharePoint Add-in (or external application) can gain authorization to SharePoint resources by passing an access token to SharePoint with each HTTP request. The remote components obtain the access token from a Microsoft Azure Access Control Service (ACS) account that is associated with the customer's Office 365 tenancy. Azure ACS acts as the authorization server in an [OAuth 2.0](http://oauth.net/) transaction, called a flow, with SharePoint as the resource server and the remote components as the client. For related protocol specifications, see [Web Authorization Protocol (oauth)](http://datatracker.ietf.org/doc/active/#oauth). 
 
Provider-hosted SharePoint Add-ins that use the low-trust authorization system can be sold in the Office Store and installed on either Microsoft SharePoint Online or an on-premises SharePoint farm that has been configured to use the customer's Office 365 tenancy to establish trust with Azure ACS. The customer must have an Office 365 tenancy to install SharePoint Add-ins that use the low-trust system. However, it is not necessary for the customer to use the tenancy for any other purpose. For instructions about linking an on-premises farm to an Office 365 tenancy, see [Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site](use-an-office-365-sharepoint-site-to-authorize-provider-hosted-add-ins-on-an-on.md).
 
<a name="Registration"> </a>

## Registration with Azure ACS

To use the low-trust system, the SharePoint Add-in must first be registered with Azure ACS and with the App Management Service of the SharePoint farm or SharePoint Online tenancy. (It is called "App Management Service" because SharePoint Add-ins were originally called "apps for SharePoint.") 

For add-ins that are sold through the Office Store, registration to ACS is performed in the Seller Dashboard, and registration with the service is performed when the add-in is installed. 

For add-ins that are distributed in the organization add-in catalog, registration to both ACS and the service is performed on the \_Layouts\15\AppRegNew.aspx page of any SharePoint tenancy or farm where the add-in is to be installed. External, non-SharePoint, applications that access SharePoint, also need to be registered. This category includes Office Add-ins, Windows Store apps, web applications, and device apps such as smartphone apps.
 
> [!NOTE] 
> Registration requires that the application have an Internet domain. Any existing domain can be used for this purpose, but you can't be 100% certain that any domain you don't own will always exist, so a web application would need to be part of a native device application even if the web application component played no other role than to enable registration. For an advanced code sample that is designed in this way, see [Provision sites in batches with the add-in model](https://github.com/SharePoint/PnP/tree/dev/Samples/Provisioning.Batch).
 
For more information about registration, see [Register SharePoint Add-ins](register-sharepoint-add-ins.md).

### Add-in secret expiration

The add-in secret must be replaced every 12 months. For details, see [Replace an expiring client secret in a SharePoint Add-in](replace-an-expiring-client-secret-in-a-sharepoint-add-in.md).
 

<a name="Policies"> </a> 

## Authorization policies

A SharePoint Add-in can be designed to use one of three authorization policies:

- **User-only policy**. When the user-only policy is used, SharePoint checks only the permissions for the user. SharePoint uses this policy when the user is accessing resources directly without using an add-in, such as when a user first opens a SharePoint website's home page or accesses SharePoint APIs from PowerShell.

- **Add-in-only policy**. An add-in that uses this policy can perform any action that it has permission to do, even if the user does not have permission for the action. The developer must request that this policy be used in the add-in manifest of the add-in. The request must be approved by the user who installs the add-in. This policy is allowed for only provider-hosted SharePoint Add-ins.

- **User+add-in policy**. Add-ins that use this policy can only perform actions that both the add-in and the user have permission to do. This is the default policy that is used unless the developer takes specific steps to use another.

For more information about authorization policies, see [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint.md).


<a name="Flows"> </a>

## Two OAuth runtime flows

Each time a cloud-hosted SharePoint Add-in or external application that is accessing SharePoint is run, a flow, or a series of interactions between the add-in, SharePoint, ACS, and sometimes the end user, occurs. The end result of the flow is that SharePoint receives an access token included with each create, read, update and delete (CRUD) request that the application makes to SharePoint.

There are two major OAuth flows used by SharePoint. One is for cloud-hosted SharePoint Add-ins. The other, called "on the fly," is for applications on other platforms that access SharePoint data.

- **Context Token flow**. The remote component of the SharePoint Add-in uses the SharePoint client object model (CSOM) or REST endpoints to make calls to SharePoint. SharePoint requests a context token from ACS that it can send to the remote server. The remote server uses the context token to request an access token from ACS. The remote server then uses the access token to talk back to SharePoint. 

    For details about this flow, see [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md).  
 
- **Authenticaton Code flow**. A SharePoint Add-in is granted the permissions it needs to SharePoint resources when it is installed. But applications that are not installed on SharePoint must ask for permissions "on the fly," that is, each time they run. There is no SharePoint context token in this flow. Instead, when the add-in runs and attempts to access SharePoint, SharePoint prompts the user to grant the permissions to the application that it is requesting. When the user grants the permissions, SharePoint obtains an authorization code from ACS that it passes to the application. The application uses the code to obtain an access token from ACS which it can then use to talk to SharePoint. 

    For details about this flow, see [Authorization Code OAuth flow for SharePoint Add-ins](authorization-code-oauth-flow-for-sharepoint-add-ins.md).
    

<a name="Trouble"> </a> 

## Troubleshooting low-trust SharePoint Add-ins

This article provides some general troubleshooting guidance and information about some specific issues with SharePoint Add-ins that use the low-trust authorization system.

### Use the Fiddler tool

The free [Fiddler tool](https://www.telerik.com/fiddler) can be used to capture the HTTP Requests sent by the remote component of your add-in to SharePoint. There is a [free extension to the tool](https://github.com/andrewconnell/SPOAuthFiddlerExt) that automatically decodes the access tokens in the requests.
 
<a name="TurnOffHTTPRequirement"> </a>
 
### Turn off the HTTPS requirement for OAuth during development

OAuth requires SharePoint to run HTTPS (not only your service, but SharePoint, too). This can get in the way when you are developing the add-in. For example, you may get a 403 (forbidden) message when attempting to make a call to SharePoint when debugging the add-in because the SSL support is not present in the "localhost" where your add-in is running.
 
You can turn off the HTTPS requirement during development by using the following Windows PowerShell cmdlets.

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

<a name="DomainRelatedErrors"> </a>

### Miscellaneous SSL and domain-related authorization errors

A mismatch of domain names in configuration files and registration forms can prevent authorization. The following four values have to be exactly the same:

- The **Add-in Domain** that is specified when the SharePoint Add-in is registered on either AppRegNew.aspx or the Seller Dashboard.    
 
- The domain under which the remote web application's security certificate is registered.    
 
- The domain part of the **StartPage** value in the AppManifest.xml file.    
 
- The domain part of the URLs of any event receivers specified in the AppManifest.xml.   
 
In connection with this point, note the following: 

- If the remote component of your SharePoint Add-in is using any port other than 443, you must explicitly include the port as part of the domain in all four places; for example, `contoso.com:3333`. (You must use the HTTPS protocol for which the default port is 443.)    
 
- If you create a DNS CNAME alias for your remote web application, use the CNAME alias for the domain value in all four places. For example, if your application is hosted at contoso.cloudapp.net and you create a CNAME of contososoftware.com for it, use contososoftware.com as the domain.    
 
- The domain needs to be hardcoded in the **StartPage** value (and any event receiver URLs) of the AppManifest.xml file before the add-in is packaged. If you use the Publish Wizard in Visual Studio to package the add-in, you are prompted for the domain, and the Office Developer Tools for Visual Studio inserts it into the **StartPage** value for you (in place of the `~remoteWebUrl` token that is used during debugging. But if you are not using the Publish Wizard, or even if you are but your remote web application is deployed to Azure, you must manually replace the token with the domain (and protocol); for example `https://contososoftware.com` or `https://MyCloudVM:3333`.
    
<a name="ErrorConnectionClosed"> </a> 

### Error "The underlying connection was closed: Could not establish trust relationship for the SSL/TLS secure channel."

This error is an SSL handshake issue, not an OAuth issue. Make sure that the certificate you are using is trusted by SharePoint, and that the certificate matches the endpoint name.

### Errors using HTTP DAV method to read files from SharePoint

HTTP DAV does not work with OAuth. If you are using the SharePoint client object model (CSOM), use the following code to read a file.

```C#
File f = clientContext.Web.GetFileByServerRelativeUrl( url);
ClientResult<Stream> r = f.OpenBinaryStream();
clientContext.ExecuteQuery();

```

## See also

- [Handle security tokens in provider-hosted low-trust SharePoint Add-ins](handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)

    
 

