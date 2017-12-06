---
title: Get user identity and properties in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Get user identity and properties in SharePoint
Retrieve user identity and user information in SharePoint.
 

 

There are different ways to retrieve user identity and information, depending on what information you want to retrieve. This article shows you some of the ways you can accomplish that.
 

## Prerequisites for retrieving user identity and properties
<a name="Prereq"> </a>


- Prepare your add-in development environment as described in  [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md).
    
 
- Install Visual Studio.
    
 
- Install the most recent version of  [Office Developer Tools for Visual Studio 2013](http://aka.ms/OfficeDevToolsForVS2013) or [Office Developer Tools for Visual Studio 2015](http://aka.ms/OfficeDevToolsForVS2015).
    
> [!NOTE] 
> For guidance on how to setup a development environment that fits your needs, see  [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md).
 


### Core concepts to know for retrieving user identity and properties

The following table lists some useful articles that can help you to understand the concepts involved in creating SharePoint Add-ins.
 

 


|**Article **|**Description**|
|:-----|:-----|
| [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md)|Learn about SharePoint add-in permissions for working with SharePoint, including types of add-in permissions, permission request scopes, and managing permissions. This article also discusses the differences in add-in permission rights, and user rights.|
| [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md)|Learn about the OAuth authentication and authorization flow for cloud-hosted add-ins.|
| [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)|Learn how to create a basic provider-hosted SharePoint Add-in with the Office Developer Tools for Visual Studio 2012, how to interact with Microsoft SharePoint sites by using the SharePoint CSOM, and how to implement OAuth in a SharePoint Add-in.|

## Retrieving current website user identity
<a name="WebsiteUserID"> </a>

The easiest way to retrieve the identity of the current user of the website is via the  **Web** object. With the TokenHelper.cs file in your project, you can get the current website user identity using the following code snippet.
 

 

```C#
ClientContext clientContext =
                    TokenHelper.GetClientContextWithAccessToken(
                        sharepointUrl.ToString(), accessToken);
 
 
            //Load the properties for the Web object.
            Web web = clientContext.Web;
            clientContext.Load(web);
            clientContext.ExecuteQuery();
 
            //Get the site name.
            siteName = web.Title;
 
            //Get the current user.
            clientContext.Load(web.CurrentUser);
            clientContext.ExecuteQuery();
            currentUser = clientContext.Web.CurrentUser.LoginName;

```


- If you are using Office 365, the login name you get is similar to  `i:0#.f|membership|adam@contoso.com`.
    
 
- If you are using Microsoft SharePoint on-premises and the user is logged in as a normal user using NTLM, the login name you get is similar to  `i:0#.w|contoso\adam`.
    
 
- If you are using SharePoint on-premises and the user is logged in using a farm account, the login name you get is  `SHAREPOINT\System`.
    
 

## Retrieving user identity using the ResolvePrincipal method
<a name="ResolvePrincipal"> </a>

The following is another way to retrieve user's login name. If you have the user's email address or display name, you can use the  **ResolvePrincipal** method to get the user's login name.
 
> [!NOTE] 
> The APIs are in the Microsoft.SharePoint.Client.Utilities namespace in the  [Microsoft.SharePoint.Client.dll](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.utilities.utility.resolveprincipal.aspx) assembly.
 

The following is sample code to show how to get the user login information.
 

 



```C#
ClientResult<Microsoft.SharePoint.Client.Utilities.PrincipalInfo> persons = Microsoft.SharePoint.Client.Utilities.Utility.ResolvePrincipal(clientContext, clientContext.Web, <email>, Microsoft.SharePoint.Client.Utilities.PrincipalType.User, Microsoft.SharePoint.Client.Utilities.PrincipalSource.All, null, true);
                    clientContext.ExecuteQuery();
                    Microsoft.SharePoint.Client.Utilities.PrincipalInfo person = persons.Value;

```

The  **Person.LoginName** value gives the login information.
 

 

## Retrieving user identity and profile properties
<a name="Profile"> </a>

If you want to retrieve the user's identity and properties, you can use the OAuth token and the social features APIs. First get the OAuth token and then set it to the client context. The following sample code shows how to get the user profile properties.
 

 

```C#

ClientContext clientContext = new ClientContext(<sharepointurl>);
clientContext.AuthenticationMode = ClientAuthenticationMode.Anonymous;
clientContext.FormDigestHandlingEnabled = false;
clientContext.ExecutingWebRequest +=
delegate(object oSender, WebRequestEventArgs webRequestEventArgs)
{                      
    webRequestEventArgs.WebRequestExecutor.RequestHeaders["Authorization"] =
        "Bearer " + accessToken;
};

```

Then, use the  **UserProfilesPeopleManager** API to get the properties of the user who is using the add-in.
 

 



```C#

PeopleManager peopleManager = new PeopleManager(clientContext);
PersonProperties personDetails = peopleManager.GetMyProperties();
clientContext.Load(personDetails, personsD => personsD.AccountName, personsD => personsD.Email,  personsD => personsD.DisplayName);
                clientContext.ExecuteQuery();

```

For the code to work:
 

 

- The user profile shared service should be configured and synced on SharePoint for the users.
    
 
- You must add the following permission scope for social features in the add-in manifest:
    
```XML
  <AppPermissionRequest Right="Read" Scope="http://sharepoint/social/tenant" />

```

The APIs are in Microsoft.SharePoint.Client.UserProfiles.dll.
 

 
The following is another sample code snippet that shows how to access the user profile store.
 

 



```C#

ClientContext clientContext; //Create this like you normally would.               
PeopleManager peopleManager = new PeopleManager(clientContext);
PersonProperties myProperties = peopleManager.GetMyProperties();
clientContext.Load(myProperties);
clientContext.ExecuteQuery();

```


## See also
<a name="AdditionalResources"> </a>


-  [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md)
    
 
-  [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md)
    
 
-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 
-  [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md)
    
 
-  [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
    
 

