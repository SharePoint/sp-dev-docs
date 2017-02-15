---
title: Add-in permissions in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 5f7a8440-3c09-4cf8-83ec-c236bfa2d6c4
---



# Add-in permissions in SharePoint 2013
Learn about add-in permissions in SharePoint, including types of add-in permissions, permission request scopes, and managing permissions. This article also discusses the differences in add-in permission rights, user rights, and Office Store app rights.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

You should first be familiar with the topic  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md) before you read this article.
 

**Watch a video about add-in permissions.**

 

 
![Videos](images/mod_icon_video.png)
 

 

 

## Get an overview of add-in permissions in SharePoint
<a name="Perm_intro"> </a>

a SharePoint Add-in requests the permissions that it needs during installation from the user who is installing it. The developer of an add-in must request, through the add-in manifest file, the permissions that the particular add-in needs to be able to run. (Device and web apps that access SharePoint, but are not installed to SharePoint websites must be granted permissions at runtime by the user who is executing the add-in. For more information, see  [Get an overview of add-ins that request access permission from SharePoint on the fly](authorization-code-oauth-flow-for-sharepoint-add-ins.md#Overview).) Users can grant only the permissions that they have. The user must grant all the permissions that an add-in requests or not grant any permission. Selective grants are not possible. (For add-ins that request permissions on the fly, only a user with Manage permissions to the SharePoint resources that the add-in seeks to access can run the add-in, even if the add-in is asking only for lesser permissions, such as Read.)
 

 
The permissions that the add-in has been granted are also stored in the content database of the SharePoint farm or SharePoint Online tenancy. They are not stored with a secure token service, such as Microsoft Azure Access Control Service (ACS). When a user first grants an add-in permissions, SharePoint obtains information about the add-in from ACS. SharePoint then stores the basic information about the add-in in the add-in management service and the content database along with the add-in's permissions. For more information about ACS, see  [Creating SharePoint Add-ins that use low-trust authorization](creating-sharepoint-add-ins-that-use-low-trust-authorization.md).
 

 
If an object to which an add-in was granted permission is deleted, the corresponding grants are deleted also. When an object to which an add-in was granted permission is recycled, SharePoint does not modify the corresponding grant. This is so that if the object is restored from the Recycle Bin, the grant is still intact.
 

 
When an add-in is removed, all the permissions granted to that add-in at the scope from which it was removed are revoked. This is to ensure that the add-in can't use its credentials to continue accessing protected SharePoint resources remotely after a user removes the add-in from SharePoint.
 

 

## Understand the types of add-in permissions and permission scopes
<a name="Perm_types"> </a>

A SharePoint Add-in uses permission requests to specify the permissions that it needs to function correctly. The permission requests specify both the rights that an add-in needs and the scope at which it needs the rights. These permissions are requested as part of the add-in manifest.
 

 

 **Note**  The scopes described in this section apply to list content and library content only. For information about scopes for other features, see the  [Understand the types of add-in permissions and permission scopes](#Perm_types) section in this article.
 

Permission request scopes indicate the location in the SharePoint hierarchy where a permission request applies.
 

 

 **Note**  A SharePoint Add-in has its own identity and is a security principal, called an add-in principal. Like users and groups, an add-in principal has certain permissions or rights. The add-in principal has full control rights to the add-in web so it only needs to request permissions to SharePoint resources in the host web or other locations outside the add-in web. For more information about add-in web, see  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscape.md) and [Host webs, add-in webs, and SharePoint components in SharePoint 2013](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint-2013.md).
 

SharePoint supports four different permission scopes within the content database and tenancy, as shown in Table 1. Permission scopes are named with URIs, including a "http:" prefix, but they are not URLs and they contain no placeholders. The permission scopes in this table and this article are literal strings.
 

 

**Table 1. SharePoint add-in permission request scope URIs and descriptions**

|||
|:-----|:-----|
|**Scope URI**|**Description**|
|tenancyhttp://sharepoint/content/tenant|The tenancy where the add-in is installed. Includes all children of this scope.|
|site collectionhttp://sharepoint/content/sitecollection|The site collection where the add-in is installed. Includes all children of this scope.|
|websitehttp://sharepoint/content/sitecollection/web|The website where the add-in is installed. Includes all children of this scope.|
|listhttp://sharepoint/content/sitecollection/web/list|A single list in the website where the add-in is installed. When the user who installs the add-in is prompted to grant permissions, the dialog enables the user to select one list to which the add-in is granted permissions. If the add-in needs permission to more than one list, it must request permission to web scope. Also, since you, the developer, have no way to control which list the user chooses or to tell the user which one to choose, you must use web scope if there is a list to which your add-in  *must*  have permission. (But there is a way to narrow the user's choice to certain subsets of lists. See [Permission request scope with associated properties](#AssociatedProperties) below.)|
If an add-in is granted permission to one of the scopes, the permission applies to all children of the scope. For example, if an add-in is granted permission to a website, the add-in is also granted permission to each list that is contained in the website, and all list items that are in each list.
 

 
Because permission requests are made without information about the topology of the site collection where the add-in is installed, the scope is expressed as a type instead of as the URL of a specific instance. These scope types are expressed as URIs. Permissions to resources that are stored in the SharePoint content database are organized under the following URI:  `http://sharepoint/content`.
 

 

## Understand the differences between add-in permission rights and user rights
<a name="Perm_diff"> </a>

Permissions indicate the activities that an add-in is permitted to do within the requested scope. SharePoint supports four rights levels in the content database. For each scope, an add-in can have the following rights:
 

 

- Read
    
 
- Write
    
 
- Manage
    
 
- FullControl
    
 

 **Note**  For more information about what Read, Write, Manage, and FullControl rights include, see  [Plan add-in permissions management](http://technet.microsoft.com/en-us/library/jj219576%28office.15%29.aspx).
 


 **Note**  These rights correspond to the default user permission levels of SharePoint: Reader, Contributor, Designer, and Full Control. For more information about user permission levels, see  [User permissions and permission levels](http://technet.microsoft.com/en-us/library/cc288074.aspx).The add-ins rights names do not match SharePoint user roles rights names, to avoid confusion between user roles rights and add-in rights. Because customizing the permissions that are associated with SharePoint user roles does not affect add-in permission request levels, the add-in rights names do not match the corresponding SharePoint user roles, except Full Control, which can't be customized through the permissions management user interface.
 

In addition:
 

 

- For Search only, an add-in can have the Query right.
    
 
- For some Microsoft Project Server 2013 scopes, there is also the SubmitStatus right or the Elevate right. For most scopes for Project Server 2013, only Read and Write are available. For more information, see the  [Understand the types of add-in permissions and permission scopes](#Perm_types) section in this article.
    
 
- For taxonomy, only rights for Read and Write are available.
    
 

 **Note**  Office Store apps have some restrictions as to what type of rights an add-in can request. For more information, see the  [Understand the types of add-in permissions and permission scopes](#Perm_types) section in this article.
 

Unlike SharePoint user roles, these rights levels are not customizable. This is to ensure that when an add-in is granted a permission request, the add-in is guaranteed a predictable set of capabilities, and it does not have to account for the possibility of being granted less permission than it expects.
 

 
A user cannot grant an add-in permissions that the user himself or herself does not have. If a user attempts to install an add-in that requests more permissions than the user has, an error message displays to the user informing them that they don't have sufficient permissions to grant the add-in its request.
 

 
Permissions that are not known to SharePoint are ignored. This means that, if an add-in requests a permission that SharePoint does not recognize, the add-in can still be installed, but the user is not prompted to grant the permission, and the permission is not granted to the add-in.
 

 

## Learn about the available scopes and permissions, and about the restrictions on Office Store apps permissions
<a name="Perm_rightlist"> </a>

Different scopes have different sets of rights that are available for an add-in to request. This section describes the sets of rights that are available for each scope. Also, it highlights the restrictions for SharePoint Add-ins that are sold through the Office Store.
 

 

### Office Store apps' rights

Only Read, Write, and Manage rights are allowed for Office Store apps. If you try to submit an app to the Office Store that requires FullControl rights, your app is blocked from submission. Because the block is in the Office Store submission pipeline, apps that request more than Manage permissions can still be deployed through the add-in catalog.
 

 

### Permission request scopes for list content and library content
<a name="PermissionsForLists"> </a>

Table 2 shows the permission request scope for list and library content. It also lists the rights that can be specified for each scope URI.
 

 

 **Note**  The URIs used in Table 2 are literal values.
 


**Table 2. SharePoint add-in permission scope URIs and available rights**

|||
|:-----|:-----|
|**Scope URI**|**Available Rights**|
|http://sharepoint/content/sitecollection|Read, Write, Manage, FullControl|
|http://sharepoint/content/sitecollection/web|Read, Write, Manage, FullControl|
|http://sharepoint/content/sitecollection/web/list|Read, Write, Manage, FullControl|
|http://sharepoint/content/tenant|Read, Write, Manage, FullControl|
The following code shows how you use permission scopes and rights in the AppManifest.xml file. In the first example, an add-in is asking for Write access to the list scope.
 

 



```XML
<?xml version="1.0" encoding="utf-8" ?>
<App xmlns="http://schemas.microsoft.com/sharepoint/2012/app/manifest"
     ProductID="{4a07f3bd-803d-45f2-a710-b9e944c3396e}"
     Version="1.0.0.0"
     SharePointMinVersion="15.0.0.0"
     Name="MySampleAddIn"
>
  <Properties>
    <Title>My Sample Add-in</Title>
    <StartPage>~remoteAppUrl/Home.aspx?{StandardTokens}</StartPage>
  </Properties>

  <AppPrincipal>
    <RemoteWebApplication ClientId="1ee82b34-7c1b-471b-b27e-ff272accd564" />
  </AppPrincipal>

  <AppPermissionRequests>
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web/list" Right="Write"/>
  </AppPermissionRequests>
</App>
```

The following code shows an add-in that is asking for Read access to the web scope and Write access to the list scope.
 

 



```XML
<?xml version="1.0" encoding="utf-8" ?>
<App xmlns="http://schemas.microsoft.com/sharepoint/2012/app/manifest"
     ProductID="{4a07f3bd-803d-45f2-a710-b9e944c3396e}"
     Version="1.0.0.0"
     SharePointMinVersion="15.0.0.0"
     Name="MySampleAddIn"
>
  <Properties>
    <Title>My Sample Add-in</Title>
    <StartPage>~remoteAppUrl/Home.aspx?{StandardTokens}</StartPage>
  </Properties>

  <AppPrincipal>
    <RemoteWebApplication ClientId="6daebfdd-6516-4506-a7a9-168862921986" />
  </AppPrincipal>

  <AppPermissionRequests>
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="Read"/>
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web/list" Right="Write"/>
  </AppPermissionRequests>
</App>
```


### Permission request scopes for other SharePoint features
<a name="PermissionsForLists"> </a>

The permission request scope for other SharePoint features are listed in the following tables. 
 

 

 **Note**  The URIs used in the tables are literal values.
 

Table 3 shows the permission request scope for Business Connectivity Services (BCS) . It also lists the rights that can be specified for that scope URI.
 

 

**Table 3. BCS add-in permission request scope URIs and available rights**

|||
|:-----|:-----|
|**Scope URI**|**Available Rights**|
|http://sharepoint/bcs/connection|Read|

 **Note**  For more information about the BCS add-in permission request scope, see  [Business Connectivity Services in SharePoint 2013](http://msdn.microsoft.com/library/64b7d032-4b83-4e9e-bc08-f0a161af5457%28Office.15%29.aspx).
 


 

 
Table 4 shows the permission request scope for Search. It also lists the rights that can be specified for that scope URI.
 

 

**Table 4. Search add-in permission request scope URIs and available rights**

|||
|:-----|:-----|
|**Scope URI**|**Available Rights**|
|http://sharepoint/search|QueryAsUserIgnoreAppPrincipal|

 **Note**  For more information about the Search add-in permission request scope, see  [Search in SharePoint 2013](http://msdn.microsoft.com/library/59220f81-0e5e-4945-8056-cf0a116446cb%28Office.15%29.aspx).
 


 

 
Table 5 shows the permission request scope for Project Server 2013. It also lists the rights that can be specified for each scope URI.
 

 

 **Note**  An add-in that uses Project Server 2013 features and services should be tested in an environment that has the required Project Server features and services. The Project Server 2013 permission provider assembly that knows about Project Server 2013 permission scopes is not installed by default with SharePoint Server. For more information, see the Project Server 2013 developer documentation.
 


**Table 5. Project Server add-in permission request scope URIs and available rights**

|||
|:-----|:-----|
|**Scope**|**Available Rights**|
|http://sharepoint/projectserver|Manage|
|http://sharepoint/projectserver/projects|Read, Write|
|http://sharepoint/projectserver/projects/project|Read, Write|
|http://sharepoint/projectserver/enterpriseresources|Read, Write|
|http://sharepoint/projectserver/statusing|SubmitStatus|
|http://sharepoint/projectserver/reporting|Read|
|http://sharepoint/projectserver/workflow|Elevate|

 

 
Table 6 shows the permission request scope for social features. It also lists the rights that can be specified for each scope URI.
 

 

**Table 6. Social features add-in permission request scope URIs and available rights**

|||
|:-----|:-----|
|**Scope URI**|**Available Rights**|
|http://sharepoint/social/tenant|Read, Write, Manage, FullControl|
|http://sharepoint/social/core|Read, Write, Manage, FullControl|
|http://sharepoint/social/microfeed|Read, Write, Manage, FullControl|

 **Note**  For more information about social features add-in permission request scope, see  [Add-in permission requests for accessing social features](http://msdn.microsoft.com/library/8852ce36-8309-45a7-a141-2e10ac17a123%28Office.15%29.aspx#bkmk_AppPerms).
 


 

 
Table 7 shows the permission request scope for taxonomy. It also lists the rights that can be specified for that scope URI.
 

 

**Table 7. Taxonomy add-in permission request scope URIs and available rights**

|||
|:-----|:-----|
|**Scope URI**|**Available Rights**|
|http://sharepoint/taxonomy|Read, Write|

 **Note**  For more information about the taxonomy add-in permission request scope, see  [Add SharePoint 2013 capabilities](http://msdn.microsoft.com/library/11ecb65e-6dc5-4cf1-80ca-3c16418697b6%28Office.15%29.aspx).
 


### Permission request scope with associated properties
<a name="AssociatedProperties"> </a>

The list permission request scope has an additional optional property. The list scope can take a property with the name  **BaseTemplateId**, and an integer value corresponding with a list base template, as shown in the markup sample below. Without a base template ID, the user who installs the add-in has the choice of granting it permission to *one list*  from among all lists in the web. Specifying a base template ID limits the user's choice to the set of lists that match what is specified by the **BaseTemplateId** property.
 

 
The  **BaseTemplateId** property is a child element, not an attribute of the **AppPermissionRequest** element. The following code shows how to use the **BaseTemplateId** property.
 

 



```XML
<AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web/list" Right="Write">
  <Property Name="BaseTemplateId" Value="101"/>
</AppPermissionRequest>
```


**Table 7. Permission request scope with associated properties**

||||
|:-----|:-----|:-----|
|**Scope URI**|**Property**|**Type**|
|http://sharepoint/content/sitecollection/web/list|**BaseTemplateId**|Integer **Note**  For more information about  **BaseTemplateId** and the corresponding integer value for the list base template, see the **Type** attribute of the [List Element (List)](http://msdn.microsoft.com/library/b2b26fee-eb45-48ac-99f1-65f725da293f%28Office.15%29.aspx). |

## Manage and troubleshoot add-in permissions
<a name="Perm_manage"> </a>

SharePoint Add-ins that are installed to SharePoint are granted permissions when they are installed. Add-ins that are installed on other platforms but access SharePoint, are granted permissions at runtime, by the user who is running the add-in. Occasionally, the first kind of add-in may lose its permissions. Add-ins can be regranted its permissions with the following steps:
 

 

1. On the  **Site Contents** page of the website where the add-in seems to have lost permissions, click the **…** button on the add-in's tile. This will open a callout with either a **PERMISSIONS** link or another **…** button.
    
 
2. Click the  **PERMISSIONS** link if it is there and skip the next step, or click the **…** button.
    
 
3. Click the  **Permissions** link.
    
 
4. On the page that opens, click  **here** link in the last sentence. This will regrant the add-in its permissions and redirect the browser back to the **Site Contents** page.
    
 

 
![Regranting permissions to an app](images/RegrantPermissionsToAnApp.png)
 
When you are developing an add-in or troubleshooting an add-in, there may be occasions when you want to change, or regrant, the permissions of an add-in that has already been installed. You can do so with these steps:
 

 

 

1. Navigate to  `http://<SharePointWebSite>/_layouts/15/AppInv.aspx`, where  _<SharePointWebSite>_ is the URL of the website where the add-in is installed. Be careful not to add any query parameters on the URL. The form you need only appears on this page if the URL is exactly as shown.
    
 
2. Enter the add-in's ID, also called the client ID, in the  **Add-in Id** box and click **Lookup**. The other boxes on the form are then populated with information about the add-in.
    
 
3. Fill the  **Permission Request XML** box with permission requests exactly as you would enter them in an add-in manifest. For examples, see [Permission request scopes for list content and library content](#PermissionsForLists) above. For complete syntax information see [AppPermissionRequest Element](http://msdn.microsoft.com/library/4ad90fb0-33b2-aee5-69c2-5b97ca5334f8%28Office.15%29.aspx).
    
 
4. Click  **Create**. 
    
 
An add-in's permissions for a specific scope are revoked when it is removed from that scope.
 

 

## Learn why add-ins cannot be hidden from users
<a name="CannotBeHidden"> </a>

Any user with browse rights to a SharePoint website can launch any SharePoint Add-in installed on the site. Whether the user can do anything with the add-in will depend on the user's other permissions and what  [authorization policy type](add-in-authorization-policy-types-in-sharepoint-2013.md) is being used by the add-in. If the user tries to do something with the add-in that the user does not have permission to do, and the call to SharePoint is using the user+add-in policy, then the call will fail.
 

 

## Additional resources
<a name="Filename_AdditionalResources"> </a>


-  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
    
 
-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 
-  [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md)
    
 
-  [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
    
 
-  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md)
    
 
