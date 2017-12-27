---
title: Authorization and authentication of SharePoint Add-ins
description: Authentication and authorization in SharePoint is used to authorize requests by a SharePoint Add-in to access SharePoint resources.
ms.date: 12/26/2017
ms.prod: sharepoint
---


# Authorization and authentication of SharePoint Add-ins

When a *user* signs in to SharePoint, the user's security token is validated. The token is issued by an identity provider. SharePoint supports several kinds of user authentication. For more information, see [Authentication, authorization, and security in SharePoint](../general-development/authentication-authorization-and-security-in-sharepoint.md).

SharePoint Add-ins are also security principals that need to be authenticated and authorized. Add-ins can be authenticated and authorized in several different ways. For more information, see [Three authorization systems for SharePoint Add-ins](three-authorization-systems-for-sharepoint-add-ins.md). 

<a name="AuthZ"> </a>

## Authorization policies: user-only, add-in-only, or user+add-in 

The authorization process verifies that an authenticated subject (a user or an add-in or both) has permission to perform certain operations or to access specific resources (for example, a list or a SharePoint document folder).

SharePoint uses three types of authorization policies: 

- The **user-only policy** requires only that the call to SharePoint include an authenticated user identity.

- The **add-in-only policy** requires only that the call include an authenticated add-in identity. 

- The **user+add-in policy** requires that the call include both kinds of authenticated identities. 

When a user accesses SharePoint resources through the SharePoint UI instead of through an add-in, SharePoint uses the user-only policy. However, for calls from a SharePoint Add-in, SharePoint uses either the add-in-only policy or the user+add-in policy. 

The SharePoint Add-in determines which policy is used by the type of access token that it includes in its request to SharePoint. If a user+add-in request is made, SharePoint requires that both the add-in and the user have permission to the resource that the add-in is accessing. In the case of an add-in-only request, SharePoint requires that the add-in have permission to the resource, but it does not matter if the user does. (A SharePoint Add-in can make add-in-only requests only if it has been given permission to do so in advance; typically, when it is installed.)

For more information about authorization policies and how they work, see [Add-in authorization policy types in SharePoint](add-in-authorization-policy-types-in-sharepoint.md).

<a name="Permissions"> </a>

## Add-in permissions and add-in permission request scopes

The developer of a SharePoint Add-in must specify, through the add-in manifest file, the permissions an add-in needs to SharePoint resources outside the add-in web. (The add-in automatically has full control permission to the entire add-in web.) When the add-in is designed to be launched from within SharePoint, the add-in installation infrastructure prompts the user who installs the add-in to grant or deny the needed permissions. After the permissions have been granted, users of the website can use the add-in without having to re-grant it permissions. 

However, when the add-in is designed to be launched outside of SharePoint, that is, it is not installed on SharePoint, SharePoint prompts the user who is executing the add-in to grant the needed permissions each time the add-in is run. Add-ins on mobile devices and Office Add-ins are examples of add-ins that can access SharePoint, but are not installed on it.

Only a website owner can install a SharePoint Add-in on a SharePoint website (unless a custom role has been created that has add-in installation rights). A user can grant an add-in only those permissions that the user himself or herself has. So a user cannot install an add-in that needs permissions the user doesn't have. 

Similarly, a user cannot run an externally launched add-in that needs permissions that the user does not have. However, when a SharePoint Add-in is installed on SharePoint, it can ask for permission to make add-in-only calls. An add-in that has that permission can access SharePoint in ways that the user running the add-in does not have permission to do.

Add-ins can also have permissions revoked or granted by SharePoint Online tenant administrators or SharePoint farm administrators.

In the add-in manifest file, a SharePoint Add-in specifies the permissions that it needs to function correctly. The permission requests specify both the rights that an add-in needs and the scope at which they need the rights. Scopes indicate where in the SharePoint hierarchy a permission request applies. 

SharePoint supports four different content scopes: tenancy, site collection, website, and list. There are also special scopes for performing search queries, accessing taxonomy data, social features, Microsoft Business Connectivity Services (BCS) features, and Project Server 2013 features. 

For more information, see [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md).

<a name="OAuth"> </a>

## When is OAuth used?

You may have already heard that OAuth 2.0 plays an important role in the authentication and authorization of SharePoint Add-ins. It does, but it is not necessarily a part of the authorization story for every SharePoint Add-in. 

If you plan to build a SharePoint Add-in that runs in a remote web application and communicates back to SharePoint by using server-side code, you need to use OAuth. 

If the remote web application is off-premises, you would use [the low-trust authorization system](creating-sharepoint-add-ins-that-use-low-trust-authorization.md), in which Azure ACS is the access token issuer. 

If it is on-premises, you would typically use [the high-trust system](creating-sharepoint-add-ins-that-use-high-trust-authorization.md), in which the add-in itself and a digital certificate are the access token issuers.

You would not use OAuth to make a call from JavaScript on a page in the add-in web itself or from a remote webpage by using [the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md). For more information about the cross-domain library, see [Creating SharePoint Add-ins that use the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md).
 

## See also
<a name="Filename_AdditionalResources"> </a>

- [Register SharePoint Add-ins](register-sharepoint-add-ins.md)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md) 
- [SharePoint Add-ins](sharepoint-add-ins.md)
    
 
