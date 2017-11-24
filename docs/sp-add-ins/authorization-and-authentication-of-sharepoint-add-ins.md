---
title: Authorization and authentication of SharePoint Add-ins
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Authorization and authentication of SharePoint Add-ins
Get an overview of authentication and authorization in SharePoint, which is used to authorize requests by a SharePoint Add-in to access SharePoint resources.
 

 

## Add-in authentication in SharePoint
<a name="AuthN"> </a>

When a  *user*  signs in to SharePoint, the user's security token is validated. The token is issued by an identity provider. SharePoint supports several kinds of user authentication. For more information, see [Authentication, authorization, and security in SharePoint](http://msdn.microsoft.com/library/8734790c-eb75-4d78-9604-7cc23b33b693%28Office.15%29.aspx).
 

 
SharePoint Add-ins are also security principals that need to be authenticated and authorized. Add-ins can be authenticated and authorized in several different ways. For more information, see  [Three authorization systems for SharePoint Add-ins](three-authorization-systems-for-sharepoint-add-ins.md). 
 

 

## Authorization policies: user-only policy, user+add-in policy, or add-in-only policy
<a name="AuthZ"> </a>

The authorization process verifies that an authenticated subject (an add-in or a user or both) has permission to perform certain operations or to access specific resources (for example, a list or a SharePoint document folder).
 

 
SharePoint users three types of authorization policies. The user-only policy requires only that the call to SharePoint include an authenticated user identity. Theadd-in-only policy requires only that the call include only an authenticated add-in identity. The user+add-in policy requires that the call include both kinds of authenticated identities. When a user accesses SharePoint resources through the SharePoint UI, instead of through an add-in, SharePoint uses the user-only policy. However, for calls from a SharePoint Add-in, SharePoint always uses either the add-in-only or the user+add-in policy. The SharePoint Add-in determines which policy is used by the type of access token that it includes in its request to SharePoint. If a user+add-in request is made, SharePoint will require that both the add-in and the user have permission to the resource the add-in is accessing. In the case of an add-in-only request, SharePoint requires that the add-in have permission to the resource, but it does not matter whether the user does or not. (a SharePoint Add-in can make add-in-only requests only if it has been given permission to do so in advance; typically, when it is installed.)
 

 
For more information about authorization policies and how they work, see  [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint.md).
 

 

## Add-in permissions and add-in permission request scopes
<a name="Permissions"> </a>

The developer of a SharePoint Add-in must specify, through the add-in manifest file, the permissions an add-in needs to SharePoint resources outside the add-in web. (The add-in automatically has full control permission to the entire add-in web.) When the add-in is designed to be launched from within SharePoint, the add-in installation infrastructure prompts the user who installs the add-in to grant or deny the needed permissions. Once the permissions have been granted, users of the website can use the add-in without having to re-grant it permissions. However, when the add-in is designed to be launched outside of SharePoint; that is, it is not installed on SharePoint, then SharePoint will prompt the user who is executing the add-in to grant the needed permissions each time the add-in is run. Add-ins on mobile devices and Office Add-ins are examples of add-ins that can access SharePoint, but are not installed on it.
 

 
Only a website owner can install a SharePoint Add-in on a SharePoint website (unless a custom role has been created that has add-in installation rights). A user can grant an add-in only those permissions that the user himself or herself has. So a user cannot install an add-in that needs permissions the user doesn't have. Similarly, a user cannot run and externally launched add-in that needs permissions that the user does not have. However, when a SharePoint Add-in is installed on SharePoint, it can ask for permission to make add-in-only calls. An add-in that has that permission can access SharePoint in ways that the user running the add-in does not have permission to do.
 

 
Add-ins can also have permissions revoked or granted by SharePoint Online tenant administrators or SharePoint farm administrators.
 

 
In the add-in manifest file, a SharePoint Add-in specifies the permissions that it needs to function correctly. The permission requests specify both the rights that an add-in needs and the scope at which they need the rights. Scopes indicate where in the SharePoint hierarchy a permission request applies. SharePoint supports four different content scopes: tenancy, site collection, website, and list. There are also special scopes for performing search queries, accessing taxonomy data, social features, Microsoft Business Connectivity Services (BCS) features, and Project Server 2013 features. For more information, see  [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md).
 

 

## When is OAuth used?
<a name="FileName_uniquekeyword4"> </a>

You may have already heard that OAuth 2.0 plays an important role in the authentication and authorization of SharePoint Add-ins. It does, but it is not necessarily a part of the authorization story for every SharePoint Add-in. If you plan to build a SharePoint Add-in that runs in an remote web application and communicates back to SharePoint using server-side code, you will need to use OAuth. If the remote web application is off premise, then you would use  [the low-trust authorization system](creating-sharepoint-add-ins-that-use-low-trust-authorization.md) in which Azure ACS is the access token issuer. If it is on premise, then you would typically use [the high-trust system](creating-sharepoint-add-ins-that-use-high-trust-authorization.md) in which the add-in itself and a digital certificate are the access token issuers.
 

 
You would not use OAuth to make a call from JavaScript on a page in the add-in web itself or from a remote webpage using  [the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md). For more information on the cross-domain library, see  [Creating SharePoint Add-ins that use the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md).
 

 

## Additional resources
<a name="Filename_AdditionalResources"> </a>


-  [Three authorization systems for SharePoint Add-ins](three-authorization-systems-for-sharepoint-add-ins.md)
    
 
-  [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md)
    
 
-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 
