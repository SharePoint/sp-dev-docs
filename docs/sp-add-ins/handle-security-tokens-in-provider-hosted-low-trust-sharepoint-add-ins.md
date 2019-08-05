---
title: Handle security tokens in provider-hosted low-trust SharePoint Add-ins
description: The context, access, and refresh tokens that are used for authorization by low-trust, provider-hosted SharePoint Add-ins, and how to work with them in your code.
ms.date: 12/28/2017
ms.prod: sharepoint
localization_priority: Priority
---


# Handle security tokens in provider-hosted low-trust SharePoint Add-ins

> [!IMPORTANT] 
> This article is entirely about the use of security tokens in the low-trust authorization system, not the high-trust system. For information about the use of tokens in the high-trust system, see [Create and use access tokens in provider-hosted high-trust SharePoint Add-ins](create-and-use-access-tokens-in-provider-hosted-high-trust-sharepoint-add-ins.md).
 
SharePoint Add-ins that use the [low-trust authorization system](creating-sharepoint-add-ins-that-use-low-trust-authorization.md) to gain access to SharePoint data participate in an OAuthflow that involves the passing of security tokens (in [JSON Web Token](https://datatracker.ietf.org/doc/rfc7519/) format) among SharePoint, Microsoft Azure Access Control Service (ACS), the remote components of the SharePoint Add-in, and, in some cases, the user's browser. 

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), will be retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://dev.office.com/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).

There are different flows depending on the design of the add-in, but all of them involve at least the following two types of tokens:

- **Access token**. Included in each create, read, update, or delete (CRUD) request from the remote components of the add-in to SharePoint. SharePoint validates the token and serves the request.

- **Refresh token**. Used to obtain a first access token in the [Context Token flow](context-token-oauth-flow-for-sharepoint-add-ins.md), and to replace expiring access tokens in both the Context Token flow and the [Authorization Code flow](authorization-code-oauth-flow-for-sharepoint-add-ins.md) of the low-trust authorization system.

Depending on which OAuth flow the add-in is using, one or the other of the following is also part of the process:

- **Context token**. Used, in the Context Token flow, to provide the remote component with a refresh token and with information that it needs to request an access token from Azure ACS.

- **Authorizaton code**. Not a token, but an authorization code, unique to each pair of user and application. It is used in the Authorization Code flow to obtain a first access token and a refresh token.
    
<a name="AccessTokens"> </a> 

## Access tokens

In the low-trust authorization system, the access tokens are created by Azure ACS and sent to the remote component of your SharePoint Add-in. (When this article was written, ACS-issued access tokens for SharePoint had a life span of 12 hours, but that could change.) The main things that the code in your SharePoint Add-in needs to do are:

- **Request an access token from Azure ACS**. Depending on which OAuth flow is being used, the add-in uses either an authorization code or information it extracts from a context token to make the request.

- **Include the token in every HTTP request to SharePoint**. The token is added as an **Authorization** header to the request. The value of the header is the word "Bearer", followed by a space, followed by the base 64-encoded access token.

- Optionally (but recommended), **cache the access token** for reuse on subsequent requests.

- Optionally, **forward the access token to back-end systems** so they can directly access SharePoint.
    
These tasks must be done with server-side code. If you are using managed code, sample code for some of these tasks is in the SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb) files that are part of Microsoft Office Developer Tools for Visual Studio. For an example of PHP code that carries out some of these tasks, see [Understanding and Using the SharePoint REST Interface](https://msdn.microsoft.com/en-us/magazine/dn198245.aspx).
 

<a name="CacheAccessToken"> </a> 

### Cache the access token

Depending on your SharePoint Add-in's architecture and the hosting platform, there are several ways to cache the access token on the server:

- In session state
- In application state
- In [Windows Server AppFabric Caching](http://msdn.microsoft.com/library/8aef3f5d-2a77-46d9-b951-0768fedd31a1%28Office.15%29.aspx) or its equivalent in a non-Microsoft operating system
- In the [Microsoft Azure Caching Service](https://docs.microsoft.com/en-us/azure/redis-cache/cache-faq) or its equivalent in a non-Microsoft cloud service
- In a database
- In a [memcached](http://www.memcached.org/) system
    
> [!NOTE] 
> In most scenarios, you won't be able to use terms as simple as "AccessToken" as the caching key because your add-in must keep the tokens for different users and SharePoint farms/tenancies distinct. If your add-in uses the [Context Token flow](context-token-oauth-flow-for-sharepoint-add-ins.md), there is special **CacheKey** provided by SharePoint that can be used to distinguish cached tokens. This section explains what the issues are and what to do when your application is not using the Context Token flow.

Caching the access token in **session state** is fine for most scenarios. If the remote web application is accessing other services that use OAuth (in addition to SharePoint) and it is caching the various access tokens in session state, be sure to use distinct cache keys for the tokens; for example, instead of "AccessToken", use "SharePoint\_AccessToken", "Facebook\_AccessToken", "SAP\_Gateway\_AccessToken", and so on. (If you are not using session state or some other caching that automatically separates each user's cache, you need to relativize your keys for users.)

If the application accesses more than one SharePoint farm or online tenancy, you can use the SharePoint domain as part of the application's primary caching key (`SharePoint<mydomain>.sharepoint.com_AccessToken`) or use the farm/tenancy's realm (`SharePoint<realmGUID>_AccessToken`), both of which can be read from the access token. (Your code needs to reverse the Base 64-encoding of the token to read it. In managed code, the TokenHelper.cs, or .vb, file has sample code for this purpose that uses classes from the **Microsoft.IdentityModel.S2S.Tokens** and **System.IdentityModel.Tokens** namespaces.) There is another option available when the application is using the Context Token flow as described in the next paragraph.

Scenarios may exist in which your application needs to cache the access token someplace that is available to the application across sessions or after a session ends. For example, the application may be designed to enable users to schedule actions to occur after the user has closed the application. If those actions include accessing SharePoint, the add-in needs to retrieve the access token. In this kind of scenario, your application must keep the access tokens of different users distinct. 

If you are using the Context Token flow, a cache key string is provided for this purpose in the context token that SharePoint passes to the remote component of your SharePoint Add-in when the add-in is launched. For more information about this **special cache key** and how to use it, see [Understand the cache key](#CacheKey). You can also use this string for the scenario described earlier. The scheduling system has some means of storing configuration data that it needs, such as when the scheduled work executes and what it should do. Use this storage to hold the cache key for the access token.

If the cross-session cache you use is also shared by multiple applications, the cache keys have to be relativized to applications as well as to users and to SharePoint realms. The cache key that is provided in the context token is unique to applications as well as to users and SharePoint realms.
 
**If your application is using the Authorization Code flow**, there is no context token and, hence, no specially made cache key. In that scenario, you need to create your own system of keys for cached data that are relativized to one or more of the following depending on what potential name clashes might occur given the use cases of your application: the user, the SharePoint realm, and the application. You can use the claims inside the access token for this purpose; for example, the `nameId` and the `aud` (see the following tables). Your code can simply concatenate the strings or use them as seeds to create a unique hash that can serve as the cache key.

Finally, if your application makes both add-in-only and user+add-in calls to SharePoint, it will have two different access tokens, so you need distinct cache keys. After you have decided on a basic cache key, just append "\_add-in-only" or "\_add-in+user" to it.
 

> [!WARNING] 
> It is not a secure practice to store the access token in a cookie. It is usually a good practice to avoid having the access token pass through the browser.
 
<a name="ForwardTokenToBackend"> </a>

### Forward the access token to backend systems

A SharePoint Add-in may have backend servers that are not hosted in the same domain as the remote web application. When a backend server needs to perform CRUD operations on SharePoint, the add-in performs faster if these operations can go directly from the backend system to SharePoint. Fortunately, domain is only important when your application is getting an access token from ACS. After it has the token, it can forward it to the backend services, and they can call SharePoint by using it. 

Code in these systems needs to handle expired access tokens and send a request for a new one back to the parent web application that is actually registered with ACS (see [Handle expired access tokens](#Expired)). This technique should only be used for your application's own backend servers, not to external web services. Also, if you are using this technique, consider designing the backend services to use add-in-only calls whenever possible.
 

<a name="Expired"> </a> 

### Handle expired access tokens

An access token expires after a few hours (twelve hours as of the time this article was written, but that can change). If the application is still accessing SharePoint after the access token expires, the first request to SharePoint after the expiration results in a **401 Unauthorized** error. Your code has to handle this response. 

Alternatively, the code can test the expiration time of the access token before it is used. Your code uses the refresh token to obtain another access token from ACS. In the Context Token flow, the refresh token is included in the context token that your add-in receives from SharePoint at the start of its first session with SharePoint. In the Authorization Code flow, it is passed to the application along with the first access token. Your code must cache it so it is available when needed. The refresh token lasts a few months and can be persisted in a cookie or in server-side storage. For more information, see [Understand the handling and caching of refresh tokens](#RefreshTokens).
 

<a name="ExampleAccessTokens"> </a> 

### Examples of access tokens for the low-trust authorization system

This section describes access tokens, with examples, and shows how they differ depending on the authorization policy that is being used.

#### User+add-in policy

The following is a decoded example of a user+add-in access token generated by ACS to be used for calls to SharePoint by using the [user+add-in policy](add-in-authorization-policy-types-in-sharepoint.md). White space has been added for readability. The token complies with the [JSON Web Token](https://datatracker.ietf.org/doc/rfc7519/) protocol. The JavaScript Object Notation (JSON) object in the token is called the **claim set** (see Table 1 for details about the properties in the claim set). 

Note that all the values must be lowercase. (User+add-in access tokens are the same in the [Context Token flow](context-token-oauth-flow-for-sharepoint-add-ins.md) and the [Authorization Code flow](authorization-code-oauth-flow-for-sharepoint-add-ins.md).)

```json
{
 "aud": "00000003-0000-0ff1-ce00-000000000000/company.sharepoint.com@040f2415-e6e3-4480-96ce-26ef73275f73",
 "iss": "00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73",
 "nbf": 1377549246,
 "exp": 1377592446,
 "nameid": "2303000085ff9abc",
 "actor": "964de6ad-6d28-4dc7-8e05-3acd8006e5c9@040f2415-e6e3-4480-96ce-26ef73275f73",
 "identityprovider": "urn:federation:microsoftonline"
}
```

<br/>

**Table 1: ACS-issued user+add-in access token claims**

|**Claim**|**Description**|**Corresponding value in the sample access token**|
|:-----|:-----|:-----|
| `aud`|Short for "audience", meaning the principal for which the token is intended.<br/><br/>The format is `audience principal ID/SharePoint domain@SharePoint realm`, where _audience principal ID_ is a permanent security principal ID for SharePoint (see [Microsoft Product Application Principal Constants](https://msdn.microsoft.com/en-us/library/hh629982(v=office.12).aspx)).<br/><br/>_SharePoint realm_ is the GUID of the SharePoint Online tenancy, or the on-premises SharePoint farm, that the access token is used to access. This GUID functions as the realm's ID for the token issuer, in this case Azure ACS.|`00000003-0000-0ff1-ce00-000000000000/company.sharepoint.com@040f2415-e6e3-4480-96ce-26ef73275f73`|
| `iss`|Short for "issuer". It represents the principal that created the token. The format is `Issuer GUID@SharePoint realm GUID`.In the low-trust authorization system, the issuer is Azure ACS and its GUID is `00000001-0000-0000-c000-000000000000`.|`00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73`|
| `nbf`|Short for "not before". It represents the time at which the token *starts* being valid, in seconds since midnight, January 1, 1970. By default, it is set to the moment the token is created (see [JWT time values](#JWTtimes)).|`1377549246`|
| `exp`|Short for "expiration". It represents the time the token expires. By default, this is 12 hours after the **nbf** time (see [JWT time values](#JWTtimes)).|`1377592446`|
| `nameid`|A unique identifier for the user for whom the token is issued. The format varies depending on the identity provider. In this example, the provider is Microsoft Online, but if it was Active Directory, the ID would look like `s-1-5-21-2127521184-1604012920-1887927527-415149`.|`2303000085ff9abc`|
| `actor`|The principal that seeks access to the SharePoint farm or tenancy. It has the form `Client ID of Application@SharePoint realm`.|`964de6ad-6d28-4dc7-8e05-3acd8006e5c9@040f2415-e6e3-4480-96ce-26ef73275f73`|
| `identityprovider`|The unique name of the identity provider as registered with the Internet Assigned Numbers Authority (IANA).For an add-in that is installed to SharePoint Online, the value is usually the same as in this example. For an add-in that is installed to an on-premises farm, it would typically be an on-premises identity provider, such as `urn:office:idp:activedirectory`.|`urn:federation:microsoftonline`|
 
<br/>

#### Add-in-only policy

The following is a decoded example of an add-in-only access token generated by ACS to be used for calls to SharePoint using the [add-in-only policy](add-in-authorization-policy-types-in-sharepoint.md). White space has been added for readability. The token complies with the [JSON Web Token](https://datatracker.ietf.org/doc/rfc7519/) protocol. See Table 2 for details about the properties in the claim set. (The add-in-only policy is not available for applications that use the [Authorization Code flow](authorization-code-oauth-flow-for-sharepoint-add-ins.md), because they do not have an add-in manifest file and, thus, cannot request permission to use add-in-only calls.)

```json
{
 "aud":"00000003-0000-0ff1-ce00-000000000000/company.sharepoint.com@040f2415-e6e3-4480-96ce-26ef73275f73",
 "iss":"00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73",
 "nbf":1403304705,
 "exp":1403347905,
 "nameid":"c76da14e-07fd-4638-a723-1ff60ce70d63@040f2415-e6e3-4480-96ce-26ef73275f73",
 "sub":"1d47ac31-498b-4988-8aac-85fc9bd2e1ce",
 "oid":"1d47ac31-498b-4988-8aac-85fc9bd2e1ce",
 "trustedfordelegation":"false",
 "identityprovider":"00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73"
}
```

<br/>

**Table 2: ACS-issued add-in-only access token claims**

|**Claim**|**Description**|**Corresponding value in the sample access token**|
|:-----|:-----|:-----|
| `aud`|Same as the user+add-in token in Table 1.|`00000003-0000-0ff1-ce00-000000000000/company.sharepoint.com@040f2415-e6e3-4480-96ce-26ef73275f73`|
| `iss`|Same as the user+add-in token in Table 1.|`00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73`|
| `nbf`|Same as the user+add-in token in Table 1.|`1403304705`|
| `exp`|Same as the user+add-in token in Table 1.|`1403347905`|
| `nameid`|A unique identifier for the add-in, instead of the user, because the user's identity doesn't matter with the add-in-only policy. The format is `client ID@SharePoint realm`.|`c76da14e-07fd-4638-a723-1ff60ce70d63@040f2415-e6e3-4480-96ce-26ef73275f73`|
| `sub`|Short for "subject". It is the subject of the token, which is the principal that is seeking access to SharePoint; in this case, the remote web application. The object ID is used for the value. See the `oid` claim.|`1d47ac31-498b-4988-8aac-85fc9bd2e1ce`|
| `oid`|Short for "object ID". It is the object ID in Azure Active Directory for the remote web application. In an add-in-only access token, the subject and object ID are the same value.|`1d47ac31-498b-4988-8aac-85fc9bd2e1ce`|
| `trustedfordelegation`|A Boolean value that specifies whether SharePoint should trust the SharePoint Add-in to authenticate and authorize the user. It is false in add-in-only calls because the user identity doesn't matter.|`false`|
| `identityprovider`|The unique name of the identity provider. Because it is the add-in, rather than a user, whose identity is being provided, ACS is the identity provider. The format is `ACS GUID@SharePoint realm`.|`00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73`|

<br/>

<a name="ContextTokens"> </a>

## Context tokens

A context token is used only in the [Context Token flow](context-token-oauth-flow-for-sharepoint-add-ins.md) of the low-trust authorization system. When the SharePoint Add-in is launched in SharePoint, SharePoint requests that Azure ACS create a context token that SharePoint then passes on to the remote component of the SharePoint Add-in. The token is passed as a hidden form parameter called **SPAppToken** in a request from SharePoint for the start page of the remote component. The token is signed with a client secret known only to ACS and the SharePoint Add-in. 

The context token includes a refresh token that the add-in uses, along with other information from the context token, to request an access token from ACS. (When this article was written, ACS-issued context tokens for SharePoint had a life span of 12 hours, but that could change.) 

The main tasks for the code in the SharePoint Add-in are the following:

- Use the client secret of the add-in to validate the context token.

- Cache the context token, or extract and separately cache the refresh token and certain other items from inside it.

- Use the refresh token and other information to request an access token from ACS (which is itself then cached).

- Cache the CacheKey from the context token.
    
> [!IMPORTANT] 
> The first two tasks must occur before the user goes to another page or refreshes the page, or the token is lost. For example, in an ASP.NET web forms application, consider doing those tasks in the **Page_Load** method (in a conditional code block that runs only when the request is not a postback). In an ASP.NET MVC application, consider doing these tasks in the default controller method.

If you are using managed code, sample code for some of these tasks is in the SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb) files that are included in Microsoft Office Developer Tools for Visual Studio. You just need to make simple calls to the members of the TokenHelper class. For example, your code can do the first task with the following single line of code:

```csharp
SharePointContextToken contextToken =
    TokenHelper.ReadAndValidateContextToken(contextTokenString, 
    Request.Url.Authority);
```

For an example of how to do some of these tasks with PHP, see the sample [SharePoint: Perform operations on SharePoint Document Library from PHP site](https://code.msdn.microsoft.com/office/SharePoint-2013-Perform-8a78b8ef).
 

<a name="CacheContextToken"> </a> 

### Cache the context token or parts of it

You can cache a whole context token, or just the refresh token and certain other items that are inside it that your code uses to get access tokens, in either server-side or client-side storage. For simplicity, this article assumes that you cache the context token as a unit.
 
> [!IMPORTANT] 
> We remind you one more time because it's really important: do not use client-side caching for the *access* token. It is safe to use it only for the context token.

You have the same [server-side caching options](#CacheAccessToken) as are listed earlier for the access token. Client-side options include a cookie and a hidden form field on an HTML page. Another option is to store the context token in the session cache, but store the CacheKey obtained from inside it on the client.

If your application accesses SharePoint after a session is ended, neither session-caching nor client-side caching is an option, because the refresh token must be available to the application in case the original access token has expired when the post-session work executes. In this scenario, you need a durable (cross-session) cache that is shared by multiple users and/or SharePoint realms and/or applications. So your code has to use cache keys that distinguish user, SharePoint realm, and/or application as explained earlier in [Cache the access token](#CacheAccessToken). 

You can use the special cache key that is inside the context token for this purpose, just as you used it for the access token (see the next section [Understand the cache key](#CacheKey)).
 

<a name="CacheKey"> </a> 

#### Understand the cache key

The cache key is an opaque string that is unique to the combination of user, user name issuer, add-in, and SharePoint farm or SharePoint Online tenant. Before it is encrypted, it has the following form, where _Realm_ is the GUID of the on-premises SharePoint farm or the SharePoint Online tenancy.
 
 _UserNameId_ + "," + _UserNameIdIssuer_ + "," + _ApplicationId_ + "," + _Realm_
 
The cache key does not contain site URL information. Each SharePoint Online tenant (or on-premises SharePoint farm) has a unique realm, so, the cache key is unique for each combination of user name, user name issuer, application, and farm. In the example context token, the encrypted cache key value is:
 
`KQAIUpDUD0sm5Tr83U+jZGYVuPPCPu8BGwoWiAACqNw=`
 
Because your application may be caching multiple items, such as both the access token and the context token in the same cache with the same cache key, consider using the cache key as a stem and either appending or prepending a specific string such as "AccessToken" or "ContextToken" to it as needed to form a complete cache key. 

Another option is to create a class with properties for the various things you want to cache, and then cache an object of that type. 

A third option, if you are using a database as a cache, is to use a table with a CacheKey column and additional columns for the cached items (AccessToken, ContextToken, etc.).

Your application does not have to use the same cache for everything it is caching, of course. A common pattern is to cache the access token in session cache, the context token (or the refresh token from inside it) in a database, and the CacheKey in a cookie.
 

<a name="UseContextTokenToGetAccessToken"> </a> 

### Use the context token to get an access token

To get an access token, your application sends a request directly to ACS. The request includes three pieces of information that are extracted from the context token (and other information):

- The refresh token
- The application principal GUID of SharePoint
- The realm GUID of the SharePoint farm or SharePoint Online tenancy to which the add-in is seeking access
    
 
The TokenHelper.cs (or .vb) file has code that creates this request. For an example of PHP code that does this, see  [SharePoint: Perform operations on SharePoint Document Library from PHP site](https://code.msdn.microsoft.com/office/SharePoint-2013-Perform-8a78b8ef).
 
The application can get the realm of the SharePoint tenancy or farm at runtime as an alternative to parsing it from the context token. If you are using managed code, there is a `TokenHelper.GetRealmFromTargetUrl` method to get the realm. Be sure to cache the value so that your code does not make another network call to get it again.
 

<a name="GetNewContextToken"> </a> 

### Get a new context token

If you need a new context token, typically because the refresh token (which is contained in context tokens) has expired, your code can get a new one by redirecting the browser to a special page in every SharePoint website, AppRedirect.aspx. Two query parameters have to be attached to the URL of this page:

- `client_id`: The client ID of your SharePoint Add-in.

- `redirect_uri`: The URI to which you want the browser redirected after the new context token is obtained. SharePoint will POST the context token to this URI. Typically, this is the same page, controller method, or web service method that requested the new context token. The value must be URL-encoded.
    
The following shows the structure of the URL:

```
https://<SharePointDomain> /_layouts/15/appredirect.aspx?client_id=<app_client_GUID> &amp;redirect_uri=<URL-encoded_redirect_URI>
```

The following is an example of making the request in ASP.NET that uses the TokenHelper file:

```
Response.Redirect(TokenHelper.GetAppContextTokenRequestUrl(sharePointUrl, Server.UrlEncode(Request.Url.ToString())));
```

<a name="ExampleContextToken"> </a>

### Example of a context token

The following is an example of a context token. The small JavaScript Object Notation (JSON) object at the top contains metadata about the token. These properties are the same as in access tokens (see earlier). The value of the **alg** property is the name of the algorithm that is used to generate the signature that ACS appends to the token. See Table 3 for details about the properties in the payload of the token. Note that all the values must be lowercase. (White space has been added for readability.)

```json
{"typ":"JWT","alg":"HS256"}
.
{
 "aud":"a044e184-7de2-4d05-aacf-52118008c44e/fabrikam.com@040f2415-e6e3-4480-96ce-26ef73275f73",
 "iss":"00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73",
 "nbf":"1335822895",
 "exp":"1335866095",
 "appctxsender":"00000003-0000-0ff1-ce00-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73",
 "appctx":"{
            \"CacheKey\":\"KQAIUpDUD0sm5Tr83U+jZGYVuPPCPu8BGwoWiAACqNw=\",
            \"SecurityTokenServiceUri\":\"https://accounts.accesscontrol.windows-int-sn1-004.accesscontrol.aadint.windows-int.net/tokens/OAuth/2\"
           }",
 "refreshtoken":"IAAAAC1Lv5w0OrcFAmJx0xk6aaBdhgsw3VPnPzNEDAWypTHtCYytZ2/dBBUKj+HLK8YB3IUCUfDxYpAque
NHKtgs4rYJJ5AegQpNMOJR1yYK8ngivQx0oetj7aSPuGVb+k6at6G0Kx5LZ5vhxkAq8iUSwu8p4L2cvNMzDF1mDKfMivqxgrIZkr2nbf9as0SJFL6VG5hZnDE4HKq
xJnejSW3umatKM4fsfY1MClVCxrkXb2EQ8H/TmwaJc388YW063GEVUS/3BTSgSIRBKQUmXJuJ6BZY7WTm84LaGrx3mIjnUTM/jnqPoPG55JbCC9sS/MeGNPtzPPCDg
6Vv7dVhQ1Dq5Y3fQ65e9LpJ580jCgzYYvpIFT+Wx5V+17mjY2T8wug04K2ts87Znsr+GfFCorf7NS/lj5HjoxRAQ2tva/8dwguSLwxcUwi/Q9MbpR0NNtlpwVazqi9O
hJ4Df7gVhUDdJ0Dtc6aFCPbl5ZLDDRs42xK2", 
 "isbrowserhostedapp": "true"
}
```

<br/>

The `aud`, `iss`, `nbf`, and `exp` claims are exactly the same as in an access token described in Table 1. 

The `appctxsender`, `appctx`, `CacheKey`, `SecurityTokenServiceUri`, `refreshtoken`, and `isbrowserhostedapp` claims are described in the following table.

<br/>

**Table 3. Context token claims and information**

|Claim |Description |Corresponding value in sample context token |
|:-----|:-----|:-----|
|`aud`||`a044e184-7de2-4d05-aacf-52118008c44e/fabrikam.com@040f2415-e6e3-4480-96ce-26ef73275f73`|
|`iss`||`00000001-0000-0000-c000-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73`|
|`nbf`||`1335822895`|
|`exp`||`1335866095`|
|`appctxsender`|Short for "application context sender". It represents the application that sent the context token to the SharePoint Add-in. It has the form `GUID of principal@SharePoint realm`, where _GUID of principal_ is the constant ID of the application principal; either SharePoint, Exchange, Lync, or Workflow.|`00000003-0000-0ff1-ce00-000000000000@040f2415-e6e3-4480-96ce-26ef73275f73`|
|`appctx`|Short for "add-in context". It is a JSON object that contains the **CacheKey** and **SecurityTokenServiceURI**.|`CacheKey:"KQAIUpDUD0sm5Tr83U+jZGYVuPPCPu8BGwoWiAACqNw=\"`, `SecurityTokenServiceUri:"https://accounts.accesscontrol.windows-int-sn1-004.accesscontrol.aadint.windows-int.net/tokens/OAuth/2\"`|
|`CacheKey`|A unique value that can be used as the key in any key/value structured cache to store and retrieve the context token. It could also be used as the value of a key column in a row of a database.|`KQAIUpDUD0sm5Tr83U+jZGYVuPPCPu8BGwoWiAACqNw=`|
|`SecurityTokenServiceURI`|The URI of the token issuing service.|`https://accounts.accesscontrol.windows-int-sn1-004.accesscontrol.aadint.windows-int.net/tokens/OAuth/2`|
|`refreshtoken`|The refresh token for the add-in.|`IAAAAC1Lv5w0OrcFAmJx0xk6???`|
|`isbrowserhostedapp`|A **Boolean** field that specifies whether the request to the add-in that contains the context token is coming from a browser (true) or from a remote event receiver (false).|`true`|

<br/>

<a name="UseContextTokenToLimitAccess"> </a>

### Use the context token to limit access to only SharePoint users

If you want to limit access to your remote component, such as a WCF service, to SharePoint users, your code can simply validate the context token in the HTTP Request. (If you are using managed code, you can just call `TokenHelper.ReadAndValidateContextToken()`). 

Your code can verify that the actor claim of the token starts with `00000003-0000-0ff1-ce00-000000000000`, if you want to make sure that it is SharePoint (and not, for example, Exchange, Lync, or Workflow). If you want to do additional validation that requires a call back to SharePoint, such as limiting access to users with a certain role in SharePoint, you can cache the fact that you have done this validation for a particular user (by using the context token's **CacheKey**) so that you have to do this only once.
 

<a name="RefreshTokens"> </a> 

## Refresh tokens

A refresh token is included in the context token that SharePoint posts to your web application when it is launched. The refresh token is an encrypted token that your SharePoint Add-in cannot unencrypt. Your code uses it, along with other information, to get a new access token when the current access token expires. It is also used to get the *first* access token in the [Context Token flow](context-token-oauth-flow-for-sharepoint-add-ins.md). (When this article was written, ACS-issued refresh tokens for SharePoint had a life span of 6 months, but that could change.)

Because an access token lasts hours (currently 12) and an end user gets a new one each time he launches your SharePoint Add-in from SharePoint, you only need the refresh token in one of these scenarios:

- Users have long running sessions with your add-in in which the add-in makes calls to SharePoint many hours (currently more than 12) after it is launched.

- The add-in's design enables users to schedule the add-in to access SharePoint sometime after the session ends.
    
Both scenarios require your add-in to cache the refresh token, and the second scenario requires a server-side cache that is durable across sessions. Your caching options are the same as those for the [access token](#CacheAccessToken) and, in the Context Token flow, you can use [the cache key in the context token](#CacheKey). (In the Context Token flow, you usually just cache the context token. It contains the refresh token and other information that you need to get a new access token. In the [Authorization Code flow](authorization-code-oauth-flow-for-sharepoint-add-ins.md), there is no context token, so you cache the refresh token itself.)

If you are caching the refresh token in a storage that persists across a specific user's sessions with your add-in, be sure to replace it with the newest refresh token. In both the cloud-hosted and Authorization Code flows, the user gets a new refresh token each time he or she launches the add-in.

If the refresh token is expired, a request to ACS for a new access token results in a **401 Unauthorized** error. Your add-in should respond to this error by getting a new refresh token and using it to get a new access token. (Because the refresh token is encrypted, your code cannot check its expiration before using it.) 

In the Context Token flow, your add-in gets a new refresh token by [getting a new context token](#GetNewContextToken). In the Authorization Code flow, your add-in gets a new refresh token by restarting the flow. Specifically, your code should respond to the error by redirecting the user to the SharePoint OAuthAuthorize.aspx page as explained in [Understand the OAuth flow for add-ins that request permissions on the fly](authorization-code-oauth-flow-for-sharepoint-add-ins.md#Flow).
 

<a name="Authcodes"> </a> 

## Authorization codes

In the Authorization Code flow, the authorization process begins with an authorization code that ACS issues, at the request of SharePoint, and which SharePoint then passes to the remote application as a query parameter. The authorization code is unique to each pair of user and remote application. (When this article was written, ACS-issued authorization codes for SharePoint had a life span of 5 minutes, but that could change.) 

The logic in your application must get the authorization code from the query parameter and use it in a request to ACS for an access token. If you are using managed code, sample code for creating the token is in the TokenHelper.cs (and .vb) file. Sample code for reading the query parameter is in [Get sample code-behind for a page that accesses SharePoint](authorization-code-oauth-flow-for-sharepoint-add-ins.md#Default). ACS invalidates the authorization code immediately after issuing the access token, so it can only be used once, and there is no point in caching it.
 

<a name="JWTtimes"> </a> 

## JWT time values

The `nbf` and `exp` claims are in the format specified by the [JWT specification](https://tools.ietf.org/html/rfc7519). They are written as the number of seconds since January 1, 1970. In C#, you can translate these values with the following code, where `jWTTimeStamp` is the value from the token, such as `1335822895`.

```csharp
DateTime exp = new DateTime(1970,1,1).AddSeconds(jWTTimeStamp);

```

<a name="Troubleshooting"> </a>

## Troubleshooting token handling

The free [Fiddler tool](http://www.telerik.com/fiddler) can be used to capture the HTTP Requests sent by the remote component of your add-in to SharePoint. There is a [free extension to the tool](https://github.com/andrewconnell/SPOAuthFiddlerExt) that automatically decodes the tokens in the requests.
 
## See also

- [SharePoint code sample: Hello World remote add-in using CSOM](https://code.msdn.microsoft.com/SharePoint-2013-Hello-0fd15fbf)
- [SharePoint Add-ins sample pack](https://code.msdn.microsoft.com/office/Apps-for-SharePoint-sample-64c80184)
- [Creating SharePoint Add-ins that use low-trust authorization](creating-sharepoint-add-ins-that-use-low-trust-authorization.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
