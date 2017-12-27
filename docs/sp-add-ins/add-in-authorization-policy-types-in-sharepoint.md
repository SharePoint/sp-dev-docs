---
title: Add-in authorization policy types in SharePoint
description: Overview of add-in-only policy, user-only policy, and user+add-in policy, and guidelines for using the add-in-only policy.
ms.date: 12/26/2017
ms.prod: sharepoint
---


# Add-in authorization policy types in SharePoint

Before reading this article, you should first be familiar with the articles [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md) and [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md).
 

<a name="Overview"> </a>

## Overview of add-in authorization policy types

SharePoint provides three types of authorization policies:

- **Add-in-only policy**. When the add-in-only policy is used, SharePoint checks only the permissions of the add-in principal. Authorization checks succeed only if the current add-in has sufficient permissions to perform the action in question, regardless of the permissions of the current user (if any).
    
    An expense approval add-in is an example of an add-in that could be designed to use this policy. The add-in allows users who wouldn't otherwise be able to approve expenses to approve expenses below a certain amount. For an example, see the [scenario](#Scenario) in the next section.
    
    > [!NOTE] 
    > Certain APIs require a user context and can't be executed with an add-in-only policy. These include many APIs for interacting with Project Server 2013 and for performing search queries.

- **User-only policy**. When the user-only policy is used, SharePoint checks only the permissions for the user. SharePoint uses this policy when the user is accessing resources directly without using an add-in, such as when a user first opens a SharePoint website's home page or accesses SharePoint APIs from PowerShell.

- **User+add-in policy**. When the user+add-in policy is used, SharePoint checks the permissions of both the user and the add-in principal. Authorization checks succeed only if both the current user and the add-in have permissions to perform the action in question.
    
    For example, this policy is used when a SharePoint Add-in wants to get access to the user's resources on SharePoint. (The code in the remote components of the SharePoint Add-in have to be designed to make user+add-in calls to SharePoint.)
    
<a name="Scenario"> </a>

### Example scenario of an add-in that uses the add-in-only policy

Let's says a sales manager at Contoso, Adam, buys an expense submission add-in that uses the add-in-only policy. When Adam chooses to buy the add-in, Adam is prompted to allow the add-in to elevate user permissions; that is, to allow the add-in to make add-in-only calls to SharePoint. Adam grants the add-in the requested permissions. He then purchases enough licenses of the add-in for all the Contoso sales people, and he installs the add-in on the sales team's SharePoint website.
 
Soon the salespeople are submitting expense reports by using the new expense submission add-in. Salespeople usually cannot approve their own expense reports, but they can do this when using the add-in because Adam granted it the ability to automatically approve reports under $50. The add-in automatically assigns Adam a task to approve reports of $50 or more. 

This could be implemented by giving the SharePoint Add-in Write permission to a SharePoint list of approved expenses. But, among users, only human resources managers have Write permission to the list. The code in the add-in is designed to add the expense to the list by making an add-in-only call to SharePoint whenever the expense is less than $50. Because the user's permissions aren't checked, any user's submissions under $50 are automatically added to the approved expenses list, even if the user doesn't have Write permission to the list.
 
<a name="Approve"> </a>

## How add-ins get permission to use the add-in-only policy

To be able to make add-in-only calls to SharePoint, your add-in must request permission to use the add-in-only policy. This request is made in the add-in manifest. You do this by adding the **AllowAppOnlyPolicy** attribute to the **AppPermissionRequests** element and setting it to **true** as shown in the following markup:

```XML
    <AppPermissionRequests AllowAppOnlyPolicy="true">
        ...
    </AppPermissionRequests>
```

> [!NOTE] 
> SharePoint Add-ins used to be called "apps for SharePoint". To maintain backward compatibility, the app manifest schema was not changed, so the string "app" appears in many element and attribute names.
 

A user installing the add-in is prompted to approve this request. If the add-in asks for tenant-scoped permissions, only a tenant administrator can grant use of the add-in-only policy, so only a tenant administrator can install the add-in. 

If the add-in does not ask for any permissions scoped higher than site collection, a site collection administrator can install the add-in. For more information about permission scopes, see [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md).
 

<a name="AppOnlyCalls"> </a> 

## How add-ins make add-in-only calls

The difference between an add-in-only call to SharePoint and a user+add-in call is the type of access token that is included in the call. The following code shows how to obtain user+add-in and add-in-only access tokens in managed code. The detailed coding is done for you in the TokenHelper.cs (or .vb) file that the Office Developer Tools for Visual Studio automatically add to the project in Visual Studio.

```C#
    string contextTokenString = TokenHelper.GetContextTokenFromRequest(Request);
    if (contextTokenString != null)
    {
        //Get context token.
        SharePointContextToken contextToken =
            TokenHelper.ReadAndValidateContextToken(contextTokenString, Request.Url.Authority);
        Uri sharepointUrl = new Uri(Request.QueryString["SPHostUrl"]);

        //Get user+add-in access token.
        string accessToken =
            TokenHelper.GetAccessToken(contextToken, sharepointUrl.Authority).AccessToken;

        ClientContext clientContext =
            TokenHelper.GetClientContextWithAccessToken(sharepointUrl.ToString(), accessToken);

        //Do something. 
        ...
        
        //Get add-in-only access token.
        string addinOnlyAccessToken = 
                TokenHelper.GetAppOnlyAccessToken(contextToken.TargetPrincipalName, 
                                sharepointUrl.Authority, contextToken.Realm).AccessToken;
            //Do something.
            ...
    }
```


> [!NOTE] 
> Add-ins that do not make OAuth authenticated calls (for example, add-ins that are only JavaScript running in the add-in web) cannot use the add-in-only policy. They can request the permission, but they are not able to take advantage of it because doing so requires passing an add-in-only OAuth token. Only add-ins with web applications running outside of SharePoint can create and pass add-in-only tokens.

In general, a current user is required to be present for a call to be made. In the case of an add-in-only policy, SharePoint creates a SHAREPOINT\APP, similar to the existing SHAREPOINT\SYSTEM user. All add-in-only requests are made by SHAREPOINT\APP. There is no way to authenticate as SHAREPOINT\APP through user-based authentication.

<a name="GuidelinesFor"> </a>

### Get guidelines for using the add-in-only policy

Because add-in-only calls effectively elevate user privileges, you should be conservative in creating add-ins that ask for permission to make them. Calls should use the add-in-only policy only if:

- The add-in needs to elevate its permissions above the user for a specific call; for example, to approve an expense report under conditions evaluated by the add-in.

- The add-in is not acting on behalf of any user; for example, an add-in that performs nightly maintenance tasks on a SharePoint document library.

## See also
<a name="AR"> </a>

- [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md)
- [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)

    
 

