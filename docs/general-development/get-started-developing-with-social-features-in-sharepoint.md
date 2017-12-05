---
title: Get started developing with social features in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 8852ce36-8309-45a7-a141-2e10ac17a123
---



# Get started developing with social features in SharePoint
Get started programming with SharePoint social feeds and microblog posts, following people and content (documents, sites, and tags), and working with user profiles.

    
 [How can I use social features in apps and solutions?](get-started-developing-with-social-features-in-sharepoint.md#bk_HowToUseSocialFeatures)
  
    
    
 [Setting up the development environment](get-started-developing-with-social-features-in-sharepoint.md#DevEnvironment)
  
    
    
 [Development scenarios for social features](get-started-developing-with-social-features-in-sharepoint.md#DevScenarios)
  
    
    
 [How-tos for programming with social features](get-started-developing-with-social-features-in-sharepoint.md#bk_GetStarted)
  
    
    
 [APIs for programming with social features](get-started-developing-with-social-features-in-sharepoint.md#SocialApis)
  
    
    
 [App permission requests for accessing social features](get-started-developing-with-social-features-in-sharepoint.md#bkmk_AppPerms)
  
    
    
 [Additional resources](get-started-developing-with-social-features-in-sharepoint.md#bk_AddResources)
  
    
    


## How can I use social features in SharePoint apps and solutions?
<a name="bk_HowToUseSocialFeatures"> </a>

Social features in SharePoint apps and solutions can help people to connect, communicate, and collaborate with each other and find, track, and share important content and information. You can add new social features or extend the features that are already available in SharePoint. For example, you can create an app that lets you find and follow people who have a common interest, create a custom visualization of feed data, or publish custom activities to the feed.
  
    
    
The features described in this article align to the people, feeds, and following functionality that you find on personal sites and team sites. The forum experience and reputation model on Community Sites don't expose a specific API, so you use SharePoint site and list APIs directly to extend that functionality. For more information, see  [New Community Site feature](what-s-new-for-developers-in-social-and-collaboration-features-in-sharepoint-201.md#bkmk_Collab).
  
    
    
Before you start developing, you should know where your code will run, what SharePoint environment it will run on, and what functionality it will provide. These factors help you choose the kind of app to create and which API or APIs to use. See  [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md) and [SharePoint Add-ins compared with SharePoint solutions](sharepoint-add-ins-compared-with-sharepoint-solutions.md) for information that can help you decide.
  
    
    

### Setting up your development environment
<a name="DevEnvironment"> </a>

To get started developing with social features, you'll need:
  
    
    

- SharePoint or SharePoint Online
    
- Visual Studio 2012 or Visual Studio 2013, with Office Developer Tools for Visual Studio 2013 - or newer
  

  
For more guidance, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md) and [Configure social computing features in SharePoint](http://technet.microsoft.com/en-us/library/fp161267%28v=office.15%29.aspx).
  
    
    

### Development scenarios for social features in SharePoint
<a name="DevScenarios"> </a>

High-level development scenarios for social features include working with social feeds, following people and content (documents, sites, and tags), and working with user properties. Table 1 contains links to articles that describe the primary APIs that you use to access functionality for each scenario and common programming tasks.
  
    
    
The following articles describe the primary APIs and programming tasks for the particular development scenario:
  
    
    

-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
    
  
-  [Follow people in SharePoint](follow-people-in-sharepoint.md)
    
  
-  [Follow content in SharePoint](follow-content-in-sharepoint.md)
    
  
-  [Work with user profiles in SharePoint](work-with-user-profiles-in-sharepoint.md)
    
  

### How-tos for programming with social features in SharePoint
<a name="bk_GetStarted"> </a>

After you set up your development environment and choose your scenario, you can get started programming with social features. Table 1 contains links to articles that show how to do basic programming tasks with social features.
  
    
    

**Table 1. How-to articles for developing with social features**


|**Feature area**|**Description**|
|:-----|:-----|
| [How to: Learn to read and write to the social feed by using the .NET client object model in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-net-client-object.md)|Walk through detailed steps for creating an application that reads and writes to the social feed by using the .NET client object model.|
| [How to: Learn to read and write to the social feed by using the REST service in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-rest-service-in-s.md)|Walk through detailed steps for creating an application that reads and writes to the social feed by using the REST service.|
| [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md)|Learn how to create and delete and microblog posts and retrieve social feeds by using the .NET client object model.|
| [How to: Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md)|Learn how to create and delete and microblog posts and retrieve social feeds by using the JavaScript object model.|
| [How to: Include mentions, tags, and links to sites and documents in posts in SharePoint](how-to-include-mentions-tags-and-links-to-sites-and-documents-in-posts-in-sharep.md)|Learn how to add **SocialDataItem** objects to microblog posts, which render as mentions, tags, and links in social feeds.|
| [How to: Embed images, videos, and documents in posts in SharePoint](how-to-embed-images-videos-and-documents-in-posts-in-sharepoint-server.md)|Learn how to add **SocialAttachment** objects to microblog posts, which render as embedded pictures, videos, and documents in social feeds.|
| [How to: Follow people by using the .NET client object model in SharePoint](how-to-follow-people-by-using-the-net-client-object-model-in-sharepoint.md)|Learn how to work with Following People features by using the .NET client object model.|
| [How to: Follow people by using the JavaScript object model in SharePoint](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md)|Learn how to work with Following People features by using the JavaScript object model.|
| [How to: Follow documents and sites by using the .NET client object model in SharePoint](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep.md)|Learn how to work with Following Content features by using the .NET client object model.|
| [How to: Follow documents, sites, and tags by using the REST service in SharePoint](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2.md)|Learn how to work with Following Content features by using the REST service.|
| [How to: Retrieve user profile properties by using the .NET client object model in SharePoint](how-to-retrieve-user-profile-properties-by-using-the-net-client-object-model-in.md)|Learn how to retrieve user profile properties by using the .NET client object model.|
| [How to: Retrieve user profile properties by using the JavaScript object model in SharePoint](how-to-retrieve-user-profile-properties-by-using-the-javascript-object-model-in.md)|Learn how to retrieve user profile properties by using the JavaScript object model.|
| [How to: Work with user profiles and organization profiles by using the server object model in SharePoint](how-to-work-with-user-profiles-and-organization-profiles-by-using-the-server-obj.md)|Learn how to create, retrieve, and manage user profiles and properties by using the server object model.|
   

### APIs for programming with SharePoint social features
<a name="SocialApis"> </a>

Although apps and solutions access SharePoint differently, after you do access SharePoint you use the social APIs in basically the same way. Table 2 shows the APIs for programming with feed, following, and user profiles features in SharePoint and the paths to the source files on the server.
  
    
    

**Table 2. APIs for programming with social features**


|**API name**|**Source and path**|
|:-----|:-----|
| [.NET client object model](http://msdn.microsoft.com/library/9cc3f70c-78ac-4d2d-b46e-77522ee5d937%28Office.15%29.aspx)|Microsoft.SharePoint.Client.UserProfiles.dll<br/>in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\ISAPI|
|Silverlight client object model|Microsoft.SharePoint.Client.UserProfiles.Silverlight.dll<br/>in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS\\ClientBin|
|Mobile client object model|Microsoft.SharePoint.Client.UserProfiles.Phone.dll<br/>in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS\\ClientBin|
| [JavaScript object model](http://msdn.microsoft.com/library/95cb5427-8514-4e9a-8eee-7ed4b82ec01b%28Office.15%29.aspx)|SP.UserProfiles.js<br/>in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS|
|Representational State Transfer (REST) service| [`http://<site url>/_api/social.feed`](social-feed-rest-api-reference-for-sharepoint.md)<br/>[`http://<site url>/_api/social.following`](following-people-and-content-rest-api-reference-for-sharepoint.md)<br/>[`http://<site url>/_api/SP.UserProfiles.PeopleManager`](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx.md#bk_PeopleManager)|
| [Server object model](http://msdn.microsoft.com/library/87c5118c-ac0e-4bd9-a75f-7452a9eb0e41%28Office.15%29.aspx)|Microsoft.Office.Server.UserProfiles.dll<br/>in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\ISAPI|
   
> [!NOTE]
> Not all server-side functionality in the Microsoft.Office.Server.UserProfiles assembly is available from client APIs. To see which APIs are available, see the  [Microsoft.SharePoint.Client.Social](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.aspx) namespace and the [Microsoft.SharePoint.Client.UserProfiles](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.aspx) namespace.
  
    
    


## App permission requests for accessing social features in SharePoint Add-ins
<a name="bkmk_AppPerms"> </a>

An SharePoint Add-in must request the permissions that it needs to access SharePoint resources from the user who installs it. For example, an app that posts to the feed should request **Write** permission (at minimum) to the feed. You specify the permissions that your app need in the AppManifest.xml file in Visual Studio.
  
    
    
App permission requests are scoped to the SharePoint deployment landscape. Table 3 shows the scope names (with corresponding scope URIs) and the available rights for accessing social features. For more information, see  [Add-in permissions in SharePoint](http://msdn.microsoft.com/library/5f7a8440-3c09-4cf8-83ec-c236bfa2d6c4%28Office.15%29.aspx),  [Add-in authorization policy types in SharePoint](http://msdn.microsoft.com/library/124879c7-a746-4c10-96a7-da76ad5327f0%28Office.15%29.aspx), and  [Plan app permissions management in SharePoint](http://technet.microsoft.com/en-us/library/jj219576%28office.15%29.aspx).
  
    
    

**Table 3. App permission scopes and available rights for social features in SharePoint**


|**Scope name**|**Description**|**Available rights**|
|:-----|:-----|:-----|
|User Profiles<br/>`http://sharepoint/social/tenant`|The permission request scope used to access all user profiles. Only the profile picture can be changed; all other user profile properties are read-only for SharePoint Add-ins. Must be installed by a tenant administrator.|Read, Write, Manage, FullControl|
|Core<br/>`http://sharepoint/social/core`|The permission request scope used to access the user's followed content and shared metadata that is used by microblogging features. This scope applies only to personal sites that support following content. If the app installs on any other type of site, use the Tenant scope.|Read, Write, Manage, FullControl|
|News Feed<br/>`http://sharepoint/social/microfeed`|The permission request scope used to access the user's feed or the team feed. This scope applies to personal sites that support microblogging or to team sites where the **Site Feed** feature is activated. If the app installs on any other type of site, use the Tenant scope.|Read, Write, Manage, FullControl|
| `http://sharepoint/social/trimming`|This permission request scope used to determine whether to display security-trimmed content in the social feed to apps. If this high-trust permission is not granted, some content (such as activities about documents and sites that the app doesn't have permissions to) is trimmed from the feed data that's returned to the app, even if the user has sufficient permissions. This permission must be manually added to the app's manifest file.|Read, Write, Manage, FullControl|
   

### What you'll need to consider when requesting app permissions

You should be aware of the following considerations when you specify app permissions for social features:
  
    
    

- Apps that specify **FullControl** rights are not allowed for Office Store apps. Only **Read**, **Write**, and **Manage** rights are allowed for Office Store apps.
    
  
- You can specify permissions for feed and following features by using the Core, News Feed, and Tenant ( `http://sharepoint/content/tenant`) scopes. The Tenant scope represents the whole tenancy where an app is installed, including the Core and News Feed scopes. So if your app already specifies the rights that it needs at the Tenant scope, then you don't need to request permissions at the Core or News Feed scope.
    
  
- During development, use the Tenant scope if you get a "SocialListNotFound : The Social list does not exist in your personal site" or "File Not Found" message. If you want to use the Core or News Feed scope in your app, you can test the permissions by opening the app from the app catalog.
    
  
- The Core scope applies to personal sites that support following content. The News Feed scope applies to personal sites that support microblogging or to team sites where the **Site Feed** feature is activated. If the app will be installed on any other type of site, you must use the Tenant scope. See [Tenancies and deployment scopes for SharePoint Add-ins](http://msdn.microsoft.com/library/1ceb3142-a7a5-453e-920f-5f953a79401a%28Office.15%29.aspx).
    
  
- Apps that request rights for the User Profiles scope must be installed by a tenant administrator, and they cannot be installed in Office 365 Small Business Premium version of SharePoint Online.
    
  
- If licensing or feature activation requirements for social and microblogging features are not met, users get a message saying that they can't install the app.
    
  
- Apps that are launched outside of SharePoint can request permission on-the-fly (except **Full Control**). For more information, see  [Authorization Code OAuth flow for SharePoint Add-ins](http://msdn.microsoft.com/library/e89e91c7-ea39-49b9-af5a-7f047a7e2ab7%28Office.15%29.aspx).
    
  

## Additional resources
<a name="bk_AddResources"> </a>

 **Conceptual articles**
  
    
    

-  [Social and collaboration features in SharePoint](social-and-collaboration-features-in-sharepoint.md)
    
  
-  [What's new for developers in social and collaboration features in SharePoint](what-s-new-for-developers-in-social-and-collaboration-features-in-sharepoint-201.md)
    
  
-  [Plan for social computing and collaboration in SharePoint](http://technet.microsoft.com/en-us/library/ee662531%28v=office.15%29)
    
  
-  [Configure social computing features in SharePoint](http://technet.microsoft.com/en-us/library/fp161267%28v=office.15%29.aspx)
    
  
-  [Social computing terminology and concepts in SharePoint](http://technet.microsoft.com/en-us/library/jj219804%28v=office.15%29.aspx)
    
  
 **Reference documentation**
  
    
    

-  [Social client class library](http://msdn.microsoft.com/library/9cc3f70c-78ac-4d2d-b46e-77522ee5d937%28Office.15%29.aspx)
    
  
-  [SP.UserProfiles.js JavaScript Reference](http://msdn.microsoft.com/library/80cf5436-6aa2-6f11-a782-66a04f6e2fb0%28Office.15%29.aspx)
    
  
-  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md)
    
  
-  [Following people and content REST API reference for SharePoint](following-people-and-content-rest-api-reference-for-sharepoint.md)
    
  
-  [User profiles REST API reference](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx)
    
  
-  [SharePoint Social server class library](http://msdn.microsoft.com/library/87c5118c-ac0e-4bd9-a75f-7452a9eb0e41%28Office.15%29.aspx)
    
  
