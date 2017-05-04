---
title: Authentication, authorization, and security in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 8734790c-eb75-4d78-9604-7cc23b33b693
---


# Authentication, authorization, and security in SharePoint

## What's new in SharePoint for authentication, authorization, and security
<a name="SP15_AuthenticationAuthorizationSecurity_WhatsNew"> </a>

The following are some of the enhancements added to SharePoint: 
  
    
    

- User sign-in
    
  - SharePoint continues to offer support for both claims and classic authentication modes. Claims authentication is the default authentication option in SharePoint. Classic-mode authentication is deprecated and can be managed only by using Windows PowerShell. A lot of features in SharePoint require claims-mode. 
    
  
  - The **MigrateUsers** method from SharePoint 2010 is now deprecated, it's no longer the correct way to migrate accounts. To migrate accounts, use the new Windows PowerShell cmdlet called `Convert-SPWebApplication`. For more information see  [Migrate from classic-mode to claims-based authentication in SharePoint](http://technet.microsoft.com/en-us/library/gg251985.aspx).
    
  
  - Requirement to register claims providers is eliminated. However, you do have to pre-configure claims type. You can choose the characters for the claim type and there is no enforcement on the ordering of claim types.
    
  
  - SharePoint tracks **FedAuth** cookies in the new distributed cache service using Windows Server AppFabric Caching.
    
  
  - Significantly more logging is provided to help troubleshoot authentication issues. 
    
  
- Services and app authentication
    
  - In SharePoint, you now have the ability to create apps for SharePoint. A SharePoint Add-in has its own identity and is associated with a security principal, called an app principal. Like users and groups, an app principal has certain permissions and rights. 
    
  
  - In SharePoint, the server-to-server security token service (STS) provides access tokens for server-to-server authentication. The server-to-server STS enables temporary access tokens to access other application services, such as Exchange Server 2013 and Microsoft Lync 2013, and apps for SharePoint.
    
  

## Authentication and authorization
<a name="SP15_AuthenticationAuthorizationSecurity_AuthenticationAndAuthorization"> </a>

SharePoint supports security for user access at the website, list, list or library folder, and item levels. Security management is role-based at all levels, providing coherent security management across the SharePoint platform with a consistent role-based user interface and object model for assigning permissions on objects. As a result, list-level, folder-level, or item-level security implements the same user model as website-level security, making it easier to manage user rights and group rights throughout a website. SharePoint also supports unique permissions on the folders and items contained within lists and document libraries.
  
    
    

> **Note:**
> For information about authorization related to SharePoint Add-ins, see  [Authorization and authentication of SharePoint Add-ins](http://msdn.microsoft.com/library/bde5647a-fff1-4b51-b67b-2139de79ce4a%28Office.15%29.aspx). 
  
    
    

Authorization refers to the process by which SharePoint provides security for websites, lists, folders, or items by determining which users can perform specific actions on a given object. The authorization process assumes that the user has already been authenticated, which refers to the process by which SharePoint identifies the current user. SharePoint does not implement its own system for authentication or identity management, but instead relies on external systems, whether Windows authentication or non-Windows authentication.
  
    
    
SharePoint supports the following types of authentication:
  
    
    

- **Windows:** All Internet Information Services (IIS) and Windows authentication integration options, including Basic, Digest, Certificates, Windows NT LAN Manager (NTLM), and Kerberos are supported. Windows authentication allows IIS to perform the authentication for SharePoint.
    
    For information about signing in to SharePoint by using Windows claims mode, see  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint).
    
    > **Important:**
      >  For information about suspending impersonation, see [Avoid suspending impersonation of the calling user](http://msdn.microsoft.com/en-us/library/ff407852.aspx). 
- **ASP.NET Forms:** A non-Windows identity management system that uses the pluggable ASP.NET forms-based authentication system is supported. This mode enables SharePoint to work with a variety of identity management systems, including externally defined groups or roles such as Lightweight Directory Access Protocol (LDAP) and light-weight database identity management systems. Forms authentication allows ASP.NET to perform the authentication for SharePoint, often involving a redirect to a log-on page. In SharePoint, ASP.NET forms are supported only under claims authentication. A forms provider must be registered within a web application that is configured for claims.
    
    For information about signing in to SharePoint by using ASP.NET membership and role passive sign-in, see  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint).
    
  

> **Note:**
> SharePoint does not support working with a case-sensitive membership provider. It uses case-insensitive SQL storage for all users in the database, regardless of the membership provider. 
  
    
    


## Claims-based identity and authentication
<a name="SP15_AuthenticationAuthorizationSecurity_ClaimsBasedIdentity"> </a>

Claims-based identity is an identity model in SharePoint that includes features such as authentication across users of Windows-based systems and systems that are not Windows-based, multiple authentication types, stronger real-time authentication, a wider set of principal types, and delegation of user identity between applications.
  
    
    
When a user signs in to SharePoint, the user's token is validated and then used to sign in to SharePoint. The user's token is a security token issued by a claims provider. The following are supported sign-in or access modes:
  
    
    

- Windows claims-mode sign-in (default)
    
  
- SAML passive sign-in mode
    
  
- ASP.NET membership and role passive sign-in
    
  
- Windows classic-mode sign-in (deprecated in this release)
    
  

> **Note:**
> For more information about signing into SharePoint and the different sign-in modes, see  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint). 
  
    
    

When you build claims-aware applications, the user presents an identity to your application as a set of claims. One claim could be the user's name, another might be an email address. The idea here is that an external identity system is configured to give your application all the information that it needs about the user with each request, along with cryptographic assurance that the identity data received by your application comes from a trusted source.
  
    
    
Under this model, single sign-on is much easier to achieve, and your application is no longer responsible for the following:
  
    
    

- Authenticating users
    
  
- Storing user accounts and passwords
    
  
- Calling to enterprise directories to look up user identity details
    
  
- Integrating with identity systems from other platforms or companies
    
  
Under this model, your application makes identity-related decisions based on claims supplied by the user. This could be anything from simple application personalization with the user's first name, to authorizing the user to access higher-value features and resources in your application.
  
    
    

> **Note:**
> For more information about claims-based identity and claims providers, see  [Claims-based identity and concepts in SharePoint](claims-based-identity-and-concepts-in-sharepoint) and [Claims provider in SharePoint](claims-provider-in-sharepoint). 
  
    
    


## Forms-based authentication
<a name="SP15_AuthenticationAuthorizationSecurity_FormsBasedAuthentication"> </a>

Forms-based authentication provides custom identity management in SharePoint by implementing a membership provider, which defines interfaces for identifying and authenticating individual users, and a role manager, which defines interfaces for grouping individual users into logical groups or roles. In SharePoint, a membership provider must implement the required  [System.Web.Security.Membership.ValidateUser](http://msdn.microsoft.com/library/33f4af0b-75c0-4504-b90f-05e742e44a88.aspx) method. Given a user name, the role provider system returns a list of roles to which the user belongs.
  
    
    
The membership provider is responsible for validating the credential information by using the  [System.Web.Security.Membership.ValidateUser](http://msdn.microsoft.com/library/33f4af0b-75c0-4504-b90f-05e742e44a88.aspx) method (required now in SharePoint). But, the actual user token is created by the security token service (STS). The STS creates the user token from the user name validated by the membership provider and from the set of group memberships associated with the user name that are provided by the membership provider.
  
    
    

> **Note:**
> For more information about STS, see  [Claims-based identity and concepts in SharePoint](claims-based-identity-and-concepts-in-sharepoint). 
  
    
    

The role manager is optional. If a custom authentication system does not support groups, a role manager is not necessary. SharePoint supports one membership provider and one role manager per URL zone ( [SPUrlZone](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPUrlZone.aspx) ). The ASP.NET forms roles have no inherent rights associated with them. Instead, SharePoint assigns rights to the forms roles through its policies and authorization. In SharePoint, the forms-based authentication is integrated with the claims-based identity model. If you need additional augmentation to bypass the limit of having one role provider per URL zone, you can rely on claims providers.
  
    
    

> **Note:**
> For more information about claims-based identity and claims providers, see  [Claims-based identity and concepts in SharePoint](claims-based-identity-and-concepts-in-sharepoint) and [Claims provider in SharePoint](claims-provider-in-sharepoint). 
  
    
    

In ASP.NET membership and role passive sign-in, the sign-in happens by redirecting the client to a web page where the ASP.NET log-in controls are hosted. After the identity object that represents a user identity is created, SharePoint converts it to a  [ClaimsIdentity](https://msdn.microsoft.com/library/Microsoft.IdentityModel.Claims.ClaimsIdentity.aspx) object (which represents a claims-based representation of a user).
  
    
    

> **Note:**
> For more information about signing into SharePoint, see  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint). 
  
    
    

SharePoint consumes the standard ASP.NET role provider interface to gather group information about the current user. For authentication purposes, roles and groups are the same thing: a way of grouping users into logical sets for authorization. Each ASP.NET role is treated as a domain group by SharePoint. 
  
    
    
For information about the pluggable authentication framework provided by ASP.NET, see ASP.NET developer documentation.
  
    
    

> **Note:**
> For more information about forms-based authentication, see  [Forms authentication in SharePoint products and technologies (Part 1): Introduction](http://msdn.microsoft.com/library/e5efd4d7-b369-49f0-a6f7-431d21daff20%28Office.15%29.aspx). 
  
    
    


## Additional resources
<a name="SP15_AuthenticationAuthorizationSecurity_AdditionalResources"> </a>


-  [Authorization, users, groups, and the object model in SharePoint](authorization-users-groups-and-the-object-model-in-sharepoint)
    
  
-  [Role, inheritance, elevation of privilege, and password changes in SharePoint](role-inheritance-elevation-of-privilege-and-password-changes-in-sharepoint)
    
  
-  [Claims-based identity in SharePoint](claims-based-identity-in-sharepoint)
    
  
-  [Claims-based identity and concepts in SharePoint](claims-based-identity-and-concepts-in-sharepoint)
    
  
-  [Configuration, administration, and resources in SharePoint](configuration-administration-and-resources-in-sharepoint)
    
  

