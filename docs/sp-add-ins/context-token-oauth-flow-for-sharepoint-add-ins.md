---
title: Complete basic operations using SharePoint REST endpoints
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Context Token OAuth flow for SharePoint Add-ins
Learn about the OAuth authentication and authorization flow for low-trust, provider-hosted add-ins in SharePoint.


## Get an overview of OAuth and SharePoint provider-hosted SharePoint Add-ins
<a name="OAuth_Actors"> </a>

In SharePoint,  **the OAuth authentication and authorization flow for a provider-hosted, low-trust, add-in involves a series of interactions between your add-in, SharePoint, the authorization server, and the browser** at runtime. The authorization server in this scenario is Microsoft Azure Access Control Service (ACS).
 

 
With a provider-hosted add-in, you have a remote web application or service that is separate from SharePoint, and not part of the SharePoint farm or SharePoint Online tenancy. It can be hosted in the cloud or on an on-premise server. In this article, the remote component is called Contoso.com.
 
> [!NOTE] 
> The remote component can also host event receivers that respond to events that occur to SharePoint items, such as lists or list items. Examples of remote events that Contoso.com might want to respond to are list events, such as adding or removing a list item; or web events, such as adding or deleting a site. For more information about how to create remote event receivers, see  [Create a remote event receiver in SharePoint Add-ins](create-a-remote-event-receiver-in-sharepoint-add-ins.md).
 

Contoso.com uses the SharePoint client object model (CSOM) or the SharePoint REST APIs to make calls to SharePoint. The Contoso.com application uses an OAuth token-passing flow to authenticate with SharePoint.  **SharePoint and Contoso.com do not trust each other; but both trust ACS** and will accept tokens issued by ACS. There are three tokens involved: SharePoint has ACS create a context token that SharePoint forwards to Constoso.com. Contoso.com validates that the context token was issued by ACS so it trusts it. Contoso.com then extracts a refresh token from the context token and uses it to get an access token directly from ACS. It includes the access token in all its requests to SharePoint. SharePoint validates that the access token was issued by ACS, so it responds to the requests from Contoso.com.
 

 
 **You provide the token-handling code** in the remote component. (But if your remote component is hosted on .NET, the Microsoft Office Developer Tools for Visual Studio provide sample code that does most of the work for you.) For details about token-handling code, see [Handle security tokens in provider-hosted low-trust SharePoint Add-ins](handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md).
 

 

## Complete the prerequisites for using the flow
<a name="Prerequisites"> </a>

There are some preliminary steps that must be done before a SharePoint Add-in can use the Context Token flow. 
 

 

- If the SharePoint Add-in is to be installed to an on-premise SharePoint farm, there are setup requirements that don't apply if it is only installed to SharePoint Online:
    
      - The  **farm must be configured** to support add-ins. (This is actually a requirement for installing any SharePoint Add-ins to the farm, even if they don't use the Context Token flow.) For more information, see [Configure an environment for SharePoint Add-ins](http://technet.microsoft.com/en-us/library/fp161236%28v=office.15%29.aspx).
    
 
  - The  **customer** who is installing the add-in **must have an Office 365 account**. This is necessary to get access to ACS. The customer does not have to use their account for any other purpose.
    
 
  - The farm must be configured to share the trust relationship that Office 365 has with ACS. This is easily done with Windows PowerShell scripts. For details, see  [Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site](use-an-office-365-sharepoint-site-to-authorize-provider-hosted-add-ins-on-an-on.md).
    
 
- Regardless of whether the add-in is installed to SharePoint Online or to an on-premise SharePoint farm, the  **SharePoint Add-in must be registered with ACS**. For details about how this can be done, see [Register SharePoint Add-ins 2013](register-sharepoint-add-ins.md). Among other things, the add-in provides ACS with its client ID and client secret as part of the registration.
    
 

## See the steps in the Context Token flow
<a name="OAuth_ProcessFlowSteps"> </a>

The OAuth authentication and authorization flow for a SharePoint provider-hosted add-in is shown in the following figure.
 

 

**OAuth Context Token flow**

 

 
![OAuth authorization process flow](../images/833fcdcc-1755-438b-9ada-dce9646564c0.gif)
 
These are the steps that correspond to the numbers in the figure:
 

 

 

1. A user launches the SharePoint Add-in from SharePoint. The design of the add-in determines how this is done:
    
      - If the add-in is designed to surface the remote web application (at Contoso.com) in an add-in part (which is essentially a wrapper around an **IFRAME**), then launching the add-in simply means navigating to a SharePoint page that contains the add-in part. (If the user is not already logged on, SharePoint prompts the user to log on.) SharePoint processes the page and detects that there is a component from the Contoso.com application on the page. (For details about add-in parts, see  [Create add-in parts to install with your SharePoint Add-in](create-add-in-parts-to-install-with-your-sharepoint-add-in.md).)
    
 
  - If the add-in is designed to use as a full page in the browser, then the user launches it by clicking on its add-in tile on the SharePoint website's  **Site Contents** page. (A variation of this is when the add-in includes a custom menu or ribbon item that launches the remote component.)
    
 
2. Regardless of how the add-in is launched, SharePoint must get a context token that it can send to the Contoso.com application, so it asks ACS to create a context token that contains information about the SharePoint context including the current user, the remote application URL, and other information. The context token also contains an encrypted refresh token.
    
 
3. ACS signs the context token, with an algorithm that uses the Contoso.com add-in secret, and returns it to SharePoint. Only ACS and the Contoso.com add-in know the secret.
    
 
4. If the Contoso.com application is surfaced in an add-in part, SharePoint renders the page that hosts the add-in part and adds the context token to the URL that the  **IFRAME** in the add-in part calls to get its contents. If the Contoso.com application is full page, SharePoint redirects the browser to Constoso.com and includes the context token as a part of the redirect response.
    
 
5. The context token is included in the browser request that is sent to the Contoso.com server.
    
 
6. The Contoso.com server gets the context token and validates the signature which it can do because it knows the client secret. This assures Contoso.com that the token was issued by ACS and not an imposter pretending to be SharePoint. Contoso.com extracts the refresh token from the context token and sends it, along with other information including the its client ID and client secret, to ACS in a request for an access token that will allow it to access SharePoint,
    
 
7. ACS validates the refresh token so that it is assured that it issued the token, and then it returns an access token to Contoso.com. Optionally, Contoso.com can cache this access token so it doesn't have ask ACS for an access token every time that it accesses SharePoint. By default, access tokens are good for a few hours at a time. (When this article was written, the default expiration for ACS-issued access tokens to SharePoint was 12 hours, but that could change.) Each access token is specific to the user account that is specified in the original request for authorization, and grants access only to the service (in this case, SharePoint) that is specified in that request. Refresh tokens are longer lived (six months when this article was written) and can also be cached. So, the same refresh token can be redeemed for a new access token from ACS until the refresh token itself expires. (For more information about caching tokens, see  [Handle security tokens in provider-hosted low-trust SharePoint Add-ins](handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md).) When the refresh token expires, the Contoso.com can get a new one by obtaining a new context token. For details about how this is done, see  [Get a new context token](handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md#GetNewContextToken).
    
 
8. Contoso.com uses the access token to make a SharePoint REST API call or CSOM request to spnv. It does this by passing the OAuth access token in the HTTP  **Authorization** header. (Sample code for creating the header is provided in the Office Developer Tools for Visual Studio if your remote component is hosted on a .NET platform.
    
 
9. SharePoint validates the access token so that it is assured the token was issued by ACS. It then sends the data that Contoso.com requested to Contoso.com or performs the create, read, update, or delete (CRUD) operation that Contoso.com requested.
    
 
10. The Contoso.com application page renders in the browser (or in the  **IFRAME** of the add-in part).
    
 

## See also
<a name="Filename_AdditionalResources"> </a>


-  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
    
 
-  [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md)
    
 
-  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap.md)
    
 
-  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md)
    
 

