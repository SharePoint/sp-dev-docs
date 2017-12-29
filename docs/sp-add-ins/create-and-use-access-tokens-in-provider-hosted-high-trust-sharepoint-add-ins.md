---
title: Create and use access tokens in provider-hosted high-trust SharePoint Add-ins
description: The role of access tokens in high-trust SharePoint Add-ins and how your code creates and passes the access token.
ms.date: 12/29/2017
ms.prod: sharepoint
---


# Create and use access tokens in provider-hosted high-trust SharePoint Add-ins

> [!IMPORTANT] 
> This article is entirely about the use of access tokens in the high-trust authorization system, not the ACS system. For information about the user of security tokens in the ACS system, see [Handle security tokens in provider-hosted low-trust SharePoint Add-ins](handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md).
 
SharePoint Add-ins that use the [high-trust authorization system](creating-sharepoint-add-ins-that-use-high-trust-authorization.md) to gain access to SharePoint have to pass an access token (in [JSON Web Token](https://datatracker.ietf.org/doc/rfc7519/) format) to SharePoint with each create, read, update, or delete (CRUD) request. SharePoint validates the token and serves the request. 

This article provides information about how your code creates and passes the access token.
 
In the high-trust authorization system, **the remote component of your SharePoint Add-in creates the access token**. If the remote component is using managed code for its server-side code, most of the coding work for creating the tokens is done for you in the SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb) files that are included in Office Developer Tools for Visual Studio. 

Because the customer for a high-trust SharePoint Add-in has on-premises SharePoint, they are probably not averse to using ASP.NET, IIS, and Windows Server as the hosting stack for the remote component. You should consider using this stack because the two generated files save you a lot of coding and testing labor. 

If the remote component must use a non-.NET language, and both the remote component and the SharePoint farm are connected to the Internet, you should consider using [the low-trust authorization system](creating-sharepoint-add-ins-that-use-low-trust-authorization.md) instead of high-trust. In the Microsoft Azure Access Control Service (ACS) system, all the token construction is done by ACS, so you are also spared a lot of labor. 

The remainder of this article is mainly intended to provide guidance to developers creating SharePoint Add-ins with non-.NET remote components and using the high-trust authorization system. It can also provide some valuable information for debugging .NET-based SharePoint Add-ins that use the high-trust system.
 

<a name="AccessTokens"> </a>

## Handling access tokens

> [!NOTE] 
> Keep in mind when reading this article, particularly about tasks that your code must carry out, that if you are using managed code, the Microsoft Office Developer Tools for Visual Studio add to every SharePoint Add-in project two generated code files, SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb) that do most of these tasks for you. Your application's token handling code usually consists of just a few calls to the classes in these files. 

> The details in this topic are to help developers who are not using managed code (and to help those who are troubleshooting problems with tokens). Links to OAuth libraries for many languages and platforms are at [OAuth 2.0](https://oauth.net/code/) (scroll to **Client Libraries**). You can find more by searching [GitHub](https://github.com/) for "OAuth 2" and for "JSON web token" (without the quotation marks).
 

Your code needs to:

1. **Create an access token.** The subtasks for creating this token vary depending on whether the remote web application makes add-in-only calls to SharePoint, user+add-in calls, or both. (For more information, see [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint.md).) 
    
- If the add-in makes user+add-in calls, creating the access token includes the following subtasks:
    
    1. Create an actor token that identifies the SharePoint Add-in and tells SharePoint to delegate user authentication and authorization to your add-in, and encode it in base 64 encoding. Details about the claims and structure of the actor token are in Table 2. Details about encoding and signing the token are in [Encoding and signing tokens](#EncodeTokens).
            
    2. Sign the actor token with credentials from an X.509 certificate that a SharePoint farm administrator has configured SharePoint to trust.
            
    3. Include the actor token in the access token.
            
    4. Add other required claims to the access token. Details about the claims and structure of the token are in Table 1.
        
- If the add-in makes add-in-only calls, your code only needs to do the first two of these subtasks. The actor token serves as the access token.
        
- If the add-in makes some user+add-in calls and some add-in-only calls, it must create a simple actor token for the add-in-only calls and the larger, nested access token for the user+add-in calls. The same access token cannot be used for both.
     
2. **Include the access token in every HTTP request to SharePoint.** The token is added as an **Authorization** header to the request. The value of the header is the word "Bearer", followed by a space, followed by the base 64-encoded access token.    
 
3. Optionally, **cache the access token** for reuse on subsequent requests.
     
These tasks must be done with server-side code. If you are using managed code, sample code for some of these tasks is in the SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb) files that the Microsoft Office Developer Tools for Visual Studio generate.
 

<a name="CacheAccessToken"> </a> 

### Cache the access token

After a token is created, it can be reused in later calls to SharePoint until it expires. Depending on the remote component's architecture and hosting platform, there are several **ways to cache the access token** on the server:

- In session state
- In application state
- In [Windows Server AppFabric Caching](http://msdn.microsoft.com/library/8aef3f5d-2a77-46d9-b951-0768fedd31a1%28Office.15%29.aspx).
- In a database
- In a [memcached](http://www.memcached.org/) system
    
If the cache storage is shared by different user sessions, such as the application cache, be sure to use a cache key that is unique to the session. 

If the cache is shared by multiple applications, your code must also **relativize the cache key** for that variable as well. It is also possible that your add-in accesses different SharePoint farms. You need distinct access tokens for each of them, so in that scenario your cache key would need to relativize for the farm. 

Altogether you may need cache keys that are based on one or more of user ID, application ID, and SharePoint domain or realm. Consider using a cache key system similar to the one used by SharePoint Add-ins that use the low-trust authorization system. For more information, see [Understand the cache key](handle-security-tokens-in-provider-hosted-low-trust-sharepoint-add-ins.md#CacheKey). 

Essentially, you would concatenate one or more of these three IDs (and optionally hash the result into a shorter string) to serve as a cache key. 


### Handle expired access tokens

The access token has an expiration time that your code can set to any value you want. If your add-in constructs a new access token for every request, each token only has to live long enough to be validated by SharePoint, no more than a few seconds unless the customer's LAN is usually clogged. You could set the expiration to years in the future, but even in the "all on-premises" scenario for which high-trust add-ins are designed, there is some danger of access tokens being stolen. So you should consider setting the expiration to no more than a few hours. (If you are working with managed code, the sample token-creation code in the TokenHelper.cs [or .vb] file sets the expiration to 12 hours.)

If a user's session with your SharePoint Add-in lasts longer than the lifespan of the cached access token, the first request to SharePoint after the expiration of the token results in a **401 Unauthorized** error. Your code has to handle this response. Alternatively, it can test the expiration time of the access token before it is used. Your code should respond to an expired access token by creating a new access token and repeating the request that failed.
 

<a name="Structure"> </a> 

## Structure of access tokens

The following is an example of an access token generated by a high-trust SharePoint Add-in; specifically, this token was generated by the sample code in the TokenHelper.cs (or .vb) file that is part of the SharePoint Add-in project template created by the Office Developer Tools for Visual Studio. The token has been decoded and white space has been added for readability. The access tokens used in the high-trust system are compliant with the [MS-SPS2SAUTH: OAuth 2.0 Authentication Protocol: SharePoint Profile](https://msdn.microsoft.com/library/05f9759b-0fa4-45ff-bd4b-0d7d254e7010.aspx), which is also called the server-to-server or S2S protocol. This information is provided to help developers using managed code debug high-trust SharePoint Add-ins, and to provide some guidance to developers using other languages about how to construct the tokens.
 
This access token is generated if the add-in is making a call to SharePoint by using the user+add-in policy. If the add-in is using the add-in-only policy and it makes an add-in-only call to SharePoint, the actor token (which is a child token within the user+add-in access token and is described later), becomes the access token (and there is no parent token).
 
> [!NOTE] 
> Note that the high-trust access tokens that your code creates are different from those created by Azure ACS when the low-trust authorization system is being used: 
> - The `alg` claim in the header is "none", because the access token in a user+add-in call from a high-trust add-in is not signed. 
> - The add-in URL in the `aud` value in this example is an on-premises server, which is normal for the high-trust system. 
> - There is no `identityprovider` claim, but there is a `nii` (name identity issuer) with the same kind of values as the `identityprovider` claim access tokens used in the low-trust authorization system. (For information about this value when the identity provider is SAML-based, see Steve Peschka's blog posts [Security in SharePoint Add-ins - Part 8](https://samlman.wordpress.com/2015/03/02/security-in-sharepoint-apps-part-8/) and [Using SharePoint Add-ins with SAML and FBA Sites in SharePoint 2013](https://samlman.wordpress.com/2015/03/01/using-sharepoint-apps-with-saml-and-fba-sites-in-sharepoint-2013/).
> - There is no `actor` claim, but there is an `actortoken` claim that contains a base 64-encoded inner token with a 12-hour lifespan.
 
The header has two properties. The "typ" is the type of token. Code in the remote web application should always set this value to "JWT". The "alg" is the algorithm used to sign the token. Because the outer token in a user+add-in call from a high-trust add-in is not signed, set this value to "none". See Table 1 for information about the values in the body part of the high-trust access token.

```js
{"typ":"JWT", "alg":"none"} 
.
{
 "aud":"00000003-0000-0ff1-ce00-000000000000/MarketingServer@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2",
 "iss":"c3ab8885-458f-4864-8804-1608145e2ac4@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2",
 "nbf":"1403212820",
 "exp":"1403256020",
 "nameid":"s-1-5-21-2127521184-1604012920-1887927527-2963467",
 "nii":"urn:office:idp:activedirectory",
 "actortoken":"6sMZhbw … [remainder of long base 64 string omitted] … "
}

```

The following table provides some guidance for the properties your code should include in the access token and the values to set for them. If you are using managed code, the SharePointContext.cs (or .vb) and TokenHelper.cs (or .vb) files create the tokens for you. For example, your code makes a single call to the **SharePointContext.CreateUserClientContextForSPHost** method. It, in turn, calls methods in the **TokenHelper** class that construct the access token, which is then included in every call made to SharePoint by the SharePoint client context object that is returned by **SharePointContext.CreateUserClientContextForSPHost**.

**Table 1: App-issued access token claims**


|**Claim**|**Description**|**Corresponding value in the sample access token**|
|:-----|:-----|:-----|
| `aud`|Short for "audience", meaning the principal for which the token is intended.<br/><br/>The format is _audience principal ID_/_fully qualified SharePoint domain_@_SharePoint realm_.<br/><br/>The audience principal for a SharePoint Add-in is always `00000003-0000-0ff1-ce00-000000000000`.<br/><br/>Because high-trust SharePoint Add-ins are normally used in an entirely on-premises scenario, the fully qualified SharePoint domain name is often just a server name. The  _SharePoint realm_ is the GUID of the on-premises SharePoint farm that the access token is used to access, (or the GUID of the tenancy, if the farm has been configured for tenancies).<br/><br/>Find the SharePoint realm by running the PowerShell **Get-SPAuthenticationRealm** cmdlet on the SharePoint server, and then use it directly in your code or store it in a configuration file where your code can read it, such as the app.Settings section of a web.config file.<br/><br/>Alternatively, your code can dynamically discover the SharePoint realm at runtime by sending an authentication challenge to SharePoint. For an example of how this is done in managed code, see the `GetRealmFromTargetUrl` method in the TokenHelper.cs (or .vb) file.|`00000003-0000-0ff1-ce00-000000000000/MarketingSharePointServer@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2`|
| `iss`|Short for "issuer". It represents the principal that created the token.<br/><br/>The format is _Issuer GUID_@_SharePoint realm GUID_. In the high-trust system, the add-in itself is the issuer, so the client ID of the SharePoint Add-in is normally used for the issuer GUID.<br/><br/>*All letters in the issuer ID must be lowercase.* |`c3ab8885-458f-4864-8804-1608145e2ac4@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2`|
| `nbf`|Short for "not before". It represents the time at which the token *starts* being valid, in seconds since midnight, January 1, 1970. Your code should set this to the moment the token is created.|`1403212820`|
| `exp`|Short for "expiration". It represents the time the token expires, in seconds since midnight, January 1, 1970.|`1403256020`|
| `nameid`|A unique identifier for the user for whom the token is issued. The format varies depending on the identity provider. In this example, the provider is Active Directory.|`s-1-5-21-2127521184-1604012920-1887927527-2963467`|
| `nii`|Short for "name identifier issuer." The unique name of the identity provider as registered with the Internet Assigned Numbers Authority (IANA). For a high-trust SharePoint Add-in, it is typically an on-premises identity provider, such as Active Directory as in this example.|`urn:office:idp:activedirectory`|
| `actortoken`|A base 64-encoded JWT token that identifies the SharePoint Add-in and tells SharePoint to trust the add-in regardless of what user is running the add-in.|See below.|

The following shows the decoded **actortoken**. The small JavaScript Object Notation (JSON) header object at the top contains metadata about the token, including the type of token and the algorithm that is used to sign it. The **x5t** property of the header is a digest made from the thumbprint of the X.509 certificate that is officially the issuer of the token. To construct this value, your code does the following:

1. Obtain the byte array (not string) version of the thumbprint of the certificate. This is a SHA-1 digest of the certificate. (In managed code, this can be done with the [GetCertHash()](https://msdn.microsoft.com/EN-US/library/4f9acc3f) method. You need something equivalent in the language you are using.)

2. Encode the byte array with Base 64 URL encoding.

3. Set the value of the **x5t** property to the encoded digest.

Table 2 describes the claims your code must include in the body of the token and the values to set for them.

```js
{"typ":"JWT","alg":"RS256","x5t":"7MjK99QvkVdwz6UrKldx8AG7ydM"}
.
{
 "aud":"00000003-0000-0ff1-ce00-000000000000/MarketingServer@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2",
 "iss":"11111111-1111-1111-1111-111111111111@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2",
 "nbf":"1403212820",
 "exp":"1403256020",
 "nameid":"c3ab8885-458f-4864-8804-1608145e2ac4@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2",
 "trustedfordelegation":"true"
}

```


> [!NOTE] 
> If the high-trust add-in is using the add-in-only policy and it makes an add-in-only call to SharePoint, the token shown here is actually the access token. There is no outer token. Moreover, there is no `trustedfordelegation` claim because the user's permissions are irrelevant for an add-in-only call.

**Table 2: Certificate-issued actortoken claims**

|**Claim**|**Description**|**Corresponding value in the sample access token**|
|:-----|:-----|:-----|
| `aud`|Same as in the parent access token.|`00000003-0000-0ff1-ce00-000000000000/MarketingSharePointServer@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2`|
| `iss`|Same meaning as in the parent access token, but the issuer GUID is not the client ID of the web application. It is the GUID of the certificate.<br/><br/>Although code in the application constructs the actor token, the certificate is considered the issuer of the actor token.<br/><br/>Note that the issuer GUID in this example is an easy-to-remember GUID string that the farm administrator used when she registered the X.509 certificate as a trusted token issuer in SharePoint. This is common when the same certificate is used as the actor token issuer for all high-trust SharePoint Add-ins on the farm.<br/><br/>An administrator can also choose to have distinct certificates for each SharePoint Add-in. In that case, she would use different randomly generated GUIDs for the certificates.<br/><br/>*All letters in the issuer GUID must be lowercase.* |`11111111-1111-1111-1111-111111111111@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2`|
| `nbf`|Same meaning as in the parent access token.|Same value as the parent access token.|
| `exp`|Same meaning as in the parent access token.|Same value as the parent access token.|
| `nameid`|A unique identifier for the SharePoint Add-in because it is the "actor" in the high-trust system. The format is _client_ID_@_SharePoint_realm_. |`c3ab8885-458f-4864-8804-1608145e2ac4@52aa6841-b76b-4ed4-a3d7-a259fce1dfa2`|
| `trustedfordelegation`|A Boolean value that specifies whether SharePoint should trust the SharePoint Add-in to authenticate and authorize the user. This is normally true in the high-trust system. Do not include this claim in an add-in-only call in the high-trust system.|`true`|


<a name="EncodeTokens"> </a>

## Encoding and signing tokens

After your code has added all the properties and values to the header and body JSON objects, it has to encode them, combine them into a JSON Web Token (JWT), and sign it. The following are the steps.

1. Encode the header with Base 64 URL encoding.    
 
2. Encode the payload with Base 64 URL encoding.    
 
3. Concatenate the encoded body after the encoded header with a "." character in between them. This is the JWT.    
 
4. Create a SHA256 signature by using the JWT and the private key of the certificate.    
 
5. Encode the signature with Base 64 URL encoding.    
 
6. Append the signature to the end of the JWT, with a "." character between them.     
 
For an actor token that is used with an add-in-only call, the actor token serves as the access token. There is no outer token. For an access token that is used with a user+add-in call, the preceding steps are used to construct an actor token, which is then inserted into the body of an access token as the value of the **actortoken** property. The full access token is then encoded and constructed with the first three steps above, but it is not signed, so the remaining steps are not used for the outer token.
 

<a name="Trouble"> </a> 

## Troubleshooting access tokens

The free [Fiddler tool](http://www.telerik.com/fiddler) can be used to capture the HTTP Requests sent by the remote component of your add-in to SharePoint. There is a [free extension to the tool](https://github.com/andrewconnell/SPOAuthFiddlerExt) that automatically decodes the tokens in the requests.
 

## See also

- [Steve Peschka's Security in SharePoint Add-ins - Part 7](https://samlman.wordpress.com/2015/03/02/security-in-sharepoint-apps-part-7/)
- [Kirk Evan's High Trust SharePoint Add-ins on Non-Microsoft Platforms](https://blogs.msdn.microsoft.com/kaevans/2014/07/14/high-trust-sharepoint-apps-on-non-microsoft-platforms/)
- [OAuth 2.0](http://oauth.net/2/)
- [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint.md)
- [Creating SharePoint Add-ins that use high-trust authorization](creating-sharepoint-add-ins-that-use-high-trust-authorization.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
    
 
