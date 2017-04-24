---
title: Follow people in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 0fa2e235-63d0-41b1-9eed-4aeb2f59a14d
---



# Follow people in SharePoint 2013
Learn about common programming tasks for following people in SharePoint Server 2013.
## APIs for following people in SharePoint Server 2013
<a name="bkmk_APIversions"> </a>

When a user follows people in SharePoint Server 2013, microblog posts that the people publish and notifications about their activities show up in the user's newsfeed. The features related to following people can be seen on the **Newsfeed** and **People I'm following** pages.
  
    
    
SharePoint Server 2013 provides the following APIs that you can use to programmatically follow people:
  
    
    

- Client object models for managed code
    
  - .NET client object model
    
  
  - Silverlight client object model
    
  
  - Mobile client object model
    
  
- JavaScript object model
    
  
- Representational State Transfer (REST) service
    
  
- Server object model
    
  
As a best practice in SharePoint 2013 development, use client APIs when you can. Client APIs include the client object models, a JavaScript object model, and a REST service. For more information about the APIs in SharePoint 2013 and when to use them, see  [Choose the right API set in SharePoint 2013](choose-the-right-api-set-in-sharepoint.md).
  
    
    
Each API includes a manager object that you use to perform core tasks for following people.
  
    
    

> [!NOTE]
> The same APIs are used to follow content. See  [Follow content in SharePoint 2013](follow-content-in-sharepoint.md) for an overview of Following Content tasks.
  
    
    

Table 1 shows the manager and other key objects (or REST resources) in the APIs and the class library (or access point) where you can find them.
  
    
    

> [!NOTE]
> The Silverlight and mobile client object models are not explicitly included in Table 1 or Table 2 because they provide the same core functionality as the .NET client object model and use the same signatures. The Silverlight client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Silverlight.dll, and the mobile client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Phone.dll. 
  
    
    


**Table 1. SharePoint 2013 APIs used for following people programmatically**

|**API**|**Key objects**|
|:-----|:-----|
|.NET client object model  <br/> See:  [How to: Follow people by using the .NET client object model in SharePoint 2013](how-to-follow-people-by-using-the-net-client-object-model-in-sharepoint.md)|Manager object:            [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) <br/> Primary namespace:            [Microsoft.SharePoint.Client.Social](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.aspx) <br/> Other key objects:            [SocialActor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActor.aspx) , [SocialActorInfo](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorInfo.aspx) , [SocialActorType](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorType.aspx) , [SocialActorTypes](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorTypes.aspx) <br/> Class library:           Microsoft.SharePoint.Client.UserProfiles.dll |
|JavaScript object model  <br/> See:  [How to: Follow people by using the JavaScript object model in SharePoint 2013](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md)|Manager object:            [SocialFollowingManager](http://msdn.microsoft.com/library/9ee1c0c0-b864-f0c3-f0cb-4dd4f1870dfa%28Office.15%29.aspx) <br/> Primary namespace:           **SP.Social** <br/> Other key objects:            [SocialActor](http://msdn.microsoft.com/library/4e369fd5-b9b0-9804-957e-b3e39c559cd4%28Office.15%29.aspx),  [SocialActorInfo](http://msdn.microsoft.com/library/d940db32-1561-c868-bb66-0612e2031f17%28Office.15%29.aspx),  [SocialActorType](http://msdn.microsoft.com/library/fbde74da-f292-dc87-0b7e-81bc5b7a880c%28Office.15%29.aspx),  [SocialActorTypes](http://msdn.microsoft.com/library/a460c3e6-ed88-117d-6755-4c5803a154a0%28Office.15%29.aspx) <br/> Class library:           SP.UserProfiles.js |
|REST service  <br/> See:  [Following people and content REST API reference for SharePoint 2013](following-people-and-content-rest-api-reference-for-sharepoint.md)|Manager resource:            [social.following](following-people-and-content-rest-api-reference-for-sharepoint.md) <br/> Endpoint URI:            `<siteUri>/_api/social.following` <br/> Primary namespace (OData):           **sp.social.SocialRestFollowingManager** <br/> Other key resources:           **SocialActor**, **SocialActorInfo**, **SocialActorType**, **SocialActorTypes**|
|Server object model |Manager object:            [SPSocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.aspx) <br/> Primary namespace:            [Microsoft.Office.Server.Social](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.aspx) <br/> Other key objects:            [SPSocialActor](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActor.aspx) , [SPSocialActorInfo](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActorInfo.aspx) , [SPSocialActorType](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActorType.aspx) , [SPSocialActorTypes](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActorTypes.aspx) <br/> Class library:           Microsoft.Office.Server.UserProfiles.dll |
   

## Common programming tasks for following people in SharePoint Server 2013
<a name="bkmk_CommonTasks"> </a>

Table 2 shows common programming tasks for following people and the members that you use to perform them. Members are from the .NET client object model (CSOM), JavaScript object model (JSOM), REST service, and server object model (SSOM).
  
    
    

> [!NOTE]
> The same APIs are used to follow content. See  [Follow content in SharePoint 2013](follow-content-in-sharepoint.md) for an overview of Following Content tasks.
  
    
    

The **SocialFollowingManager** object consolidates the core Following People and Following Content functionality for the current user. However, the **PeopleManager** object (see Table 3) provides some functionality that **SocialFollowingManager** does not provide, including methods to obtain the Following People status of other users.
  
    
    

**Table 2. API for common tasks for following people by using the SocialFollowingManager object**


|**Task**|**Members**|
|:-----|:-----|
|Create an instance of a manager object in the context of the current user |CSOM:  [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) <br/> JSOM: **SocialFollowingManager** <br/> REST:  `<siteUri>/_api/social.following` <br/> SSOM:  [SPSocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.aspx)|
|Create an instance of a manager object in the context of a particular user |CSOM: not implemented  <br/> JSOM: not implemented  <br/> REST: not implemented  <br/> SSOM:  [SPSocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.aspx) (overloaded)|
|Have the current user start following (stop following) someone |CSOM:  [Follow](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.Follow.aspx) ( [StopFollowing](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.StopFollowing.aspx) ) <br/> JSOM:  [follow](http://msdn.microsoft.com/library/40d14320-27ba-2941-b0e2-be3b5a407c89%28Office.15%29.aspx) ( [stopFollowing](http://msdn.microsoft.com/library/65b0e9be-dc5e-09fb-c57f-7a933de09a4c%28Office.15%29.aspx))  <br/> REST: **POST** [`<siteUri>/_api/social.following/Follow`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_Follow) ([`<siteUri>/_api/social.following/StopFollowing`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_StopFollowing)) and pass the  _actor_ parameter in the request body <br/> SSOM:  [Follow](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.Follow.aspx) ( [StopFollowing](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.StopFollowing.aspx) )|
|Find out whether the current user is following a particular user |CSOM:  [IsFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.IsFollowed.aspx) <br/> JSOM:  [isFollowed](http://msdn.microsoft.com/library/2c1f62e6-fb75-ad4d-c081-36408b418c21%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.following/my/IsFollowed`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_IsFollowed) and pass the _actor_ parameter in the request body <br/> SSOM:  [IsFollowed](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.IsFollowed.aspx)|
|Get the people who are following the current user |CSOM:  [GetFollowers](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowers.aspx) <br/> JSOM:  [getFollowers](http://msdn.microsoft.com/library/ae4a944b-c043-05fb-c74b-101d2ce4a813%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/Followers`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_Followers)<br/> SSOM:  [GetFollowers](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.GetFollowers.aspx)|
|Get the people who the current user is following |CSOM:  [GetFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowed.aspx) <br/> JSOM:  [getFollowed](http://msdn.microsoft.com/library/432a7cec-6add-fdb1-a79f-a93414ee8cd3%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/Followed(types=1)`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_Followed)<br/> SSOM:  [GetFollowed](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.GetFollowed.aspx)|
|Get the count of people who the current user is following |CSOM:  [GetFollowedCount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowedCount.aspx) <br/> JSOM:  [getFollowedCount](http://msdn.microsoft.com/library/97b53b4f-481a-cf41-1854-8f3ff860b2bb%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/FollowedCount(types=1)`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_FollowedCount)<br/> SSOM:  [GetFollowedCount](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.GetFollowedCount.aspx)|
|Get the people who the current user might want to follow |CSOM:  [GetSuggestions](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetSuggestions.aspx) <br/> JSOM:  [getSuggestions](http://msdn.microsoft.com/library/95fd9c48-6974-ec08-d3e9-00c2c76f4f79%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.following/my/Suggestions`](following-people-and-content-rest-api-reference-for-sharepoint.md#bk_Suggestions)<br/> SSOM:  [GetSuggestions](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFollowingManager.GetSuggestions.aspx)|
   
Table 3 shows the **PeopleManager** members that you can use for additional Following People functionality.
  
    
    

**Table 3. API for common tasks for following people by using the PeopleManager object**


|**Task**|**Members**|
|:-----|:-----|
|Find out whether the **People I'm Following** list for the current user is public|CSOM:  [IsMyPeopleListPublic](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.IsMyPeopleListPublic.aspx) <br/> JSOM:  [isMyPeopleListPublic](http://msdn.microsoft.com/library/2ffc73a5-24ce-1ed4-d850-a6fea4c773bb%28Office.15%29.aspx) <br/> REST:  [IsMyPeopleListPublic](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx#bk_PeopleManagerProperties)<br/>Example: **GET** `<siteUri>/_api/SP.UserProfiles.PeopleManager/IsMyPeopleListPublic` <br/> SSOM:  [IsMyPeopleListPublic](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PeopleManager.IsMyPeopleListPublic.aspx)|
|Find out whether someone is following the current user |CSOM:  [AmIFollowedBy](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.AmIFollowedBy.aspx) <br/> JSOM:  [amIFollowedBy](http://msdn.microsoft.com/library/3641c469-0063-054d-355d-e56697cb08ae%28Office.15%29.aspx) <br/> REST:  [AmIFollowedBy](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx#bk_PeopleManagerAmIFollowedBy)<br/>Example: **GET** `<siteUri>/_api/SP.UserProfiles.PeopleManager/AmIFollowedBy(accountName=@v)?@v='domain\\user'` <br/> SSOM:  [AmIFollowedBy](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PeopleManager.AmIFollowedBy.aspx)|
|Get the people who a particular user is following |CSOM:  [GetPeopleFollowedBy](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetPeopleFollowedBy.aspx) <br/> JSOM:  [getPeopleFollowedBy](http://msdn.microsoft.com/library/e781c0fa-b14a-40ef-976b-b1c6c82beb89%28Office.15%29.aspx) <br/> REST:  [GetPeopleFollowedBy](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx#bk_PeopleManagerGetPeopleFollowedBy)<br/>Example: **GET** `<siteUri>/_api/SP.UserProfiles.PeopleManager/GetPeopleFollowedBy(accountName=@v)?@v='domain\\user'` <br/> SSOM:  [GetPeopleFollowedBy](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PeopleManager.GetPeopleFollowedBy.aspx)|
|Get the people who are following a particular user |CSOM:  [GetFollowersFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetFollowersFor.aspx) <br/> JSOM:  [getFollowersFor](http://msdn.microsoft.com/library/51ef3b75-42b2-4efb-4441-e088dc7d168e%28Office.15%29.aspx) <br/> REST:  [GetFollowersFor](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx#bk_PeopleManagerGetFollowersFor)<br/>Example: **GET** `<siteUri>/_api/SP.UserProfiles.PeopleManager/GetFollowersFor(accountName=@v)?@v='domain\\user'` <br/> SSOM:  [GetFollowersFor](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PeopleManager.GetFollowersFor.aspx)|
|Find out whether a particular user is following another user |CSOM:  [IsFollowing](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.IsFollowing.aspx) <br/> JSOM:  [isFollowing](http://msdn.microsoft.com/library/6a5ce6cb-c710-9e19-0cb9-7fae9e013ec8%28Office.15%29.aspx) <br/> REST:  [IsFollowing](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx#bk_PeopleManagerIsFollowing) (static)<br/>Example: **GET** `<siteUri>/_api/SP_UserProfiles_PeopleManager_IsFollowing(possibleFollowerAccountName=@v,possibleFolloweeAccountName=@y)?@v='domain\\user'&amp;@y='domain\\user'` <br/> SSOM:  [IsFollowing](https://msdn.microsoft.com/library/Microsoft.Office.Server.UserProfiles.PeopleManager.IsFollowing.aspx)|
   

## How People Suggestions works on SharePoint Online
<a name="bk_PeopleSuggestions"> </a>

Results for People Suggestions are based on established Following People activity. Suggestions are offered when a user is following someone who has a mutual following with someone else who the user is not already following.
  
    
    
Following-related information is indexed during search crawls. After a crawl is complete, search analytics must then analyze the crawled Following information and output user suggestions. By default, search analytics runs once per day.
  
    
    
When a user opens the **People I'm following** page, the [PeopleManager.GetMySuggestions()](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetMySuggestions.aspx) method is called. [GetMySuggestions](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.UserProfiles.PeopleManager.GetMySuggestions.aspx) searches for new suggestions for the current user, updates the user's suggestions in the database, and presents the suggestions on the page.
  
    
    

## Additional resources
<a name="bk_addResources"> </a>


-  [Social and collaboration features in SharePoint 2013](social-and-collaboration-features-in-sharepoint.md)
    
  
-  [Get started developing with social features in SharePoint 2013](get-started-developing-with-social-features-in-sharepoint.md)
    
  
-  [Follow content in SharePoint 2013](follow-content-in-sharepoint.md)
    
  
-  [User profiles REST API reference](http://msdn.microsoft.com/library/10757ed1-6e86-474f-89e0-6dec6aa66a2b%28Office.15%29.aspx)
    
  
-  [How to: Follow people by using the .NET client object model in SharePoint 2013](how-to-follow-people-by-using-the-net-client-object-model-in-sharepoint.md)
    
  
-  [How to: Follow people by using the JavaScript object model in SharePoint 2013](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md)
    
  
-  [Following people and content REST API reference for SharePoint 2013](following-people-and-content-rest-api-reference-for-sharepoint.md)
    
  
