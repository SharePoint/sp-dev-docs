---
title: Overview of the SharePoint 2013 mobile client authentication object model
ms.prod: SHAREPOINT
ms.assetid: 00ee657f-a32a-495e-80b4-83ac0f60df44
---


# Overview of the SharePoint 2013 mobile client authentication object model
Get an overview of development with the authentication APIs of the SharePoint 2013 client object model for Silverlight.
## Authentication and client context on a Windows Phone
<a name="SP15Mobileclientauth_auth"> </a>

The process of authenticating a SharePoint user on a Windows Phone 7.5 is a little different from the same process on a client computer. Client code on a Windows Phone 7.5 first creates an object of the **Authenticator** class or **ODataAuthenticator** class, which were added to the SharePoint 2013client object model for Microsoft Silverlight for Windows Phone. It then uses this object as the user's credentials.
  
    
    

> **Note:**
> For more information about the APIs that are discussed in this section, see  [Overview of the SharePoint 2013 mobile object model](overview-of-the-sharepoint-mobile-object-model.md). For more information about the SharePoint client object model for Silverlight, see  [Managed Client Object Model](http://msdn.microsoft.com/en-us/library/ee537247.aspx) and [Using the Silverlight Object Model](http://msdn.microsoft.com/en-us/library/ee538971.aspx). 
  
    
    


## Authenticating the user in the SharePoint client object model for Silverlight
<a name="SP15Mobileclientauth_user"> </a>

The following are the required steps to get an authenticated client context object:
  
    
    

1. Obtain a  [ClientContext](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.clientcontext.aspx) object.
    
  
2. Construct a new **Authenticator** object and initialize its properties.
    
    > **Note:**
      > One **Authenticator** object can be used with one **ClientContext** object only. You can't share an **Authenticator** object across multiple **ClientContext** objects with different URLs.
3. The **Authenticator** class implements the [ICredentials](http://msdn.microsoft.com/en-us/library/system.net.icredentials.aspx) interface, so you assign the object to the [Credentials](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.client.clientruntimecontext.credentials.aspx) property of the **ClientContext** object.
    
  
You can then add the rest of your client object model code and call **ExecuteQueryAsync**.
  
    
    
The following code shows these steps.
  
    
    



```cs

ClientContext context = new ClientContext(ListUrl);

// Create an instance of Authenticator object.
Authenticator at = new Authenticator();

// Replace <username> and <password> with valid values. 
at.UserName = "<username>";
at.Password = "<password>";
at.AuthenticationMode = ClientAuthenticationMode.FormsAuthentication;

at.CookieCachingEnabled = true;

// Assign the instance of Authenticator object to the ClientContext.Credential property.
// ClientContext is the object that is central to the client object model for making calls to the server running SharePoint 
// for fetching and updating data.
context.Credentials = at;

ListItemCollection items = context.Web.Lists.GetByTitle(ListName).GetItems(CamlQuery.CreateAllItemsQuery());

// Load the query and execute the request to fetch data.
context.Load(items);
context.ExecuteQueryAsync(
    (object obj, ClientRequestSucceededEventArgs args) =>
    {
// Success logic
    },

    (object obj, ClientRequestFailedEventArgs args) =>
    {
// Failure logic
    });


```

Optionally, you can specify a Unified Access Gateway (UAG) server by setting the **Authenticator.UagServerUrl** property.
  
    
    
If the SharePoint URL has basic or forms-based authentication support, the **ExecuteQueryAsync** calls prompt the user for logon information, as shown in Figure 1. Otherwise, the call will fail. Enable basic or forms-based authentication authorization on the SharePoint site to avoid an authentication error.
  
    
    

**Figure 1. SharePoint client authentication**

  
    
    

  
    
    
![SharePointClientAuthentication](images/SP15Con_SharePointClientAuthenticationFig1.png)
  
    
    
The user enters the user name and password and chooses **Log On**, as shown in Figure 1. The user has the option to choose **Remember me** to remember their user name and has the option to choose **Remember my password** to remember their password, as shown in Figure 1. After the user name or password is remembered, the user doesn't have to enter credentials the next time the app is started. The **ExecuteQueryAsync** then uses the logged on credentials to make web requests to the server running SharePoint to fetch data.
  
    
    

## Authenticating the user in the SharePoint OData object model
<a name="SP15Mobileclientauth_OData"> </a>

The following are the required steps to get an authenticated OData context object.
  
    
    

1. Construct a new **ODataAuthenticator** object and initialize its properties.
    
  
2. Register a handler for the **AuthenticationCompleted** event.
    
  
3. Call the **ODataAuthenticator.Authenticate** method, which will raise the **AuthenticationCompleted** event.
    
  
4. Obtain an OData context object inside the **OnAuthenticationCompleted** handler.
    
  
You can then add the rest of your OData calls in the **OnAuthenticationCompleted** handler.
  
    
    
The following code shows these steps.
  
    
    



```cs

ODataAuthenticator oat = new ODataAuthenticator();

// Replace <username> and <password> with valid values. 
oat.UserName = "<username>";
oat.Password = "<password>";

oat.AuthenticationMode = ClientAuthenticationMode.FormsAuthentication;


oat.AuthenticationCompleted += 
           new EventHandler<SendingRequestEventArgs>(OnAuthenticationCompleted);

// The Authenticate method will raise the AuthenticationCompleted event.
oat.Authenticate("My_service_URL");  

```

Your code must also implement two event handlers, as described in the following section.
  
    
    

### Implementing the OnAuthenticationCompleted and OnSendingRequest handlers and getting the ClientContext object

An implementation of the **OnAuthenticationCompleted** handler should first check for any errors in the authentication. If there are any, it should handle them appropriately, such as displaying an error message to the user, and then exit.
  
    
    
If there are no errors, the handler should create an instance of a new **DataServiceContext** object and then register a handler for the **SendingRequest** event. From that point, your OData calling code is programmed against the **DataServiceContext** object just as it is on a computer.
  
    
    
The following is an example of an implementation of an **OnAuthenticationCompleted** handler.
  
    
    



```cs

void OnAuthenticationCompleted(object sender, AuthenticationCompletedEventArgs e)
{
    if (e.Error != null)
    {
        MessageBox.Show(error);
        return;
    }
    ODataAuthenticator oat = sender as ODataAuthenticator;

    // Construct an OData context object.
    contextObj = new DataServiceContext(oat.ResolvedUrl);

    // Register the SendingRequest event handler.
    contextObj.SendingRequest += 
        new EventHandler<SendingRequestEventArgs>(OnSendingRequest);  
    
    // Your data retrieval logic goes here. 
    // For example, if there is a GetData method: 
    // contextObj.GetData();   
}


```

All that the **OnSendingRequest** handler needs to do is set the cookie container of the **Request** object to the cookie container of the **ODataAuthenticator** object. The following is an example.
  
    
    



```cs

void OnSendingRequest(object sender, SendingRequestEventArgs e)
{ 
    ODataAuthenticator oat = sender as ODataAuthenticator;
    ((HttpWebRequest)e.Request).CookieContainer = oat.CookieContainer;
}

```


## Advanced usage
<a name="SP15Mobileclientauth_advance"> </a>


1. You can choose to construct an **Authenticator** object with a hard-coded user name/password option. The user of the app will not be prompted for a user name and password, and hard-coded credentials will be used for authenticating the user.
    
     `public Authenticator(string userName, string password)`
    
     `public Authenticator(string userName, string password, string domain)`
    
    The same constructor can be used to create a custom logon page. You can write a custom logon page by passing the credentials from code-behind files.
    


cs
  
Authenticator at = new Authenticator();
at.AuthenticationMode = ClientAuthenticationMode.MicrosoftOnline;                          



2. Authentication type can be set accordingly. By default, basic authentication is used.
    
  

### Authenticating against SharePoint Online

To authenticate against a SharePoint Online URL, set the **AuthenticationMode** property of the **Authenticator** object to **MicrosoftOnline** mode. The remaining steps in the procedure are the same as those for an on-premises SharePoint URL.
  
    
    

> **Note:**
> The user name and password cannot be hard-coded for SharePoint Online.The user will be prompted for logon credentials. 
  
    
    


#### Federation Authentication

 **FederationAuthURI** property is used to pass **ADFS** authentication scheme preference where, **ADFS** is configured to use multiple authentication handlers. **FederationAuthURI** specifies the type of authentication required by Authentication request when, SharePoint Online authentication is used with Federation. This parameter can override the priority established by the order in which authentication handlers are configured. To know more about Authentication handler, see [Authentication Handler Overview](http://msdn.microsoft.com/en-us/library/ee895365.aspx).
  
    
    

```cs

 Authenticator auth = new Authenticator("domain\\\\name", "xyz"); 
 auth.FederationPassiveAuthUri = "urn:oasis:names:tc:SAML:2.0:ac:classes:Password"; 
//Replace <SiteUrl> with valid value 
ClientContext ctx = new ClientContext("SiteUrl"); 
               ctx.Credentials = auth; 
               ctx.ExecuteQueryAsync( 
 (object sender, ClientRequestSucceededEventArgs args) => 
   { 
    /* successful callback code */ 
   }, 
 (object sender, ClientRequestFailedEventArgs args) => 
   { 
   /* failure callback code */ 
  });

```

 **ADFS** is an optional property which will be effective only when it is used with Microsoft SharePoint Online. Using **ADFS** authentication with any other authentication scheme will not have any effect. With Microsoft SharePoint online, if **ADFS** is not set then default scheme will be used, i.e. server preference.
  
    
    

## Cookie caching
<a name="SP15Mobileclientauth_cookie"> </a>

The **Authenticator** class also includes members that you can use to enable and manage caching of cookies or credentials or both. For information about these members of the **Authenticator** class and their uses, see [Overview of the SharePoint 2013 mobile object model](overview-of-the-sharepoint-mobile-object-model.md).
  
    
    

## Additional resources
<a name="SP15Mobileclientauth_addlresources"> </a>


-  [Build Windows Phone apps that access SharePoint 2013](build-windows-phone-apps-that-access-sharepoint.md)
    
  
-  [Overview of the SharePoint 2013 mobile object model](overview-of-the-sharepoint-mobile-object-model.md)
    
  

