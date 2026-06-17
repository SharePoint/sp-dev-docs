---
title: Work with social feeds in SharePoint
description: Learn about common programming tasks for working with social feeds and microblog posts in SharePoint.
ms.date: 09/25/2017
ms.assetid: 39f2163e-15cc-43bc-b131-041d5afdcd90
ms.localizationpriority: medium
---


# Work with social feeds in SharePoint
Learn about common programming tasks for working with social feeds and microblog posts in SharePoint.
## APIs for working with social feeds in SharePoint
<a name="bkmk_APIversions"> </a>

In SharePoint on-premises farms, interactive social feeds are designed to encourage people to share information and to stay connected with people and content. You can see many of the feed features on the **Newsfeed** page on a user's personal site. Feeds contain collections of threads that represent microblog posts, conversations, status updates, and other notifications.
  
SharePoint provides the following APIs that you can use to programmatically work with social feeds:
 
- Client object models for managed code
  - .NET client object model
  - Silverlight client object model
  - Mobile client object model
- JavaScript object model 
- Representational State Transfer (REST) service
- Server object model
    
As a best practice in SharePoint development, use client APIs when you can. Client APIs include the client object models, the JavaScript object model, and the REST service. For more information about the APIs in SharePoint and when to use them, see  [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md).
    
    
Each API includes a manager object that you use to perform core feed-related tasks. Table 1 shows the manager and other key objects (or REST resources) in the APIs and the class library (or endpoint URI) where you can find them.
  
> [!NOTE] 
> The Silverlight and mobile client object models are not explicitly mentioned in Table 1 or Table 2 because they provide the same core functionality as the .NET client object model and use the same signatures. The Silverlight client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Silverlight.dll, and the mobile client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Phone.dll. 
  
**Table 1. SharePoint APIs used for working with social feeds programmatically**

|**API**|**Key objects**|
|:-----|:-----|
|.NET client object model  <br/> See:  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md)|Manager object:            [SocialFeedManager](/previous-versions/office/sharepoint-csom/jj163796(v=office.15)) <br/> Primary namespace:            [Microsoft.SharePoint.Client.Social](/previous-versions/office/sharepoint-csom/jj164417(v=office.15)) <br/> Other key objects:            [SocialFeed](/previous-versions/office/sharepoint-csom/jj164380(v=office.15)) , [SocialThread](/previous-versions/office/sharepoint-csom/jj164766(v=office.15)) , [SocialPost](/previous-versions/office/sharepoint-csom/jj163401(v=office.15)) , [SocialPostCreationData](/previous-versions/office/sharepoint-csom/jj163520(v=office.15)) , [SocialFeedOptions](/previous-versions/office/sharepoint-csom/jj164730(v=office.15)) , [SocialActor](/previous-versions/office/sharepoint-csom/jj164459(v=office.15)) <br/> Class library:           Microsoft.SharePoint.Client.UserProfiles.dll|
|JavaScript object model  <br/> See  [How to: Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md)|Manager object:            [SocialFeedManager](/previous-versions/office/sharepoint-visio/jj679709(v=office.15)) <br/> Primary namespace:            [SP.Social](/previous-versions/office/sharepoint-visio/jj628683(v=office.15)) <br/> Other key objects:            [SocialFeed](/previous-versions/office/sharepoint-visio/jj679727(v=office.15)),  [SocialThread](/previous-versions/office/sharepoint-visio/jj679762(v=office.15)),  [SocialPost](/previous-versions/office/sharepoint-visio/jj667849(v=office.15)),  [SocialPostCreationData](/previous-versions/office/sharepoint-visio/jj667907(v=office.15)),  [SocialFeedOptions](/previous-versions/office/sharepoint-visio/jj679710(v=office.15)),  [SocialActor](/previous-versions/office/sharepoint-visio/jj679768(v=office.15)) <br/> Class library:           SP.UserProfiles.js|
|REST service  <br/> See  [How to: Learn to read and write to the social feed by using the REST service in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-rest-service-in-s.md)|Manager resource:            [social.feed](social-feed-rest-api-reference-for-sharepoint.md) (SocialRestFeedManager) <br/> Primary namespace (OData):           **SP.Social** <br/> Other key resources:           SocialFeed,  [SocialRestFeed](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestFeed), SocialThread,  [SocialRestThread](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestThread), SocialPost, SocialPostCreationData,  [SocialRestPostCreationData](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestPostCreationData),  [SocialFeedOptions](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialFeedOptions), SocialActor,  [SociaRestActor](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestActor) <br/> Access point:            `<siteUri>/_api/social.feed`|
|Server object model <br/>Note: Code that uses the server object model to access feed data and runs remotely must use an  [SPServiceContextScope](/previous-versions/office/sharepoint-server/ee585864(v=office.15)) object.|Manager object:            [SPSocialFeedManager](/previous-versions/office/sharepoint-server/jj264599(v=office.15)) <br/> Primary namespace:            [Microsoft.Office.Server.Social](/previous-versions/office/sharepoint-server/jj264549(v=office.15)) <br/> Other key objects:            [SPSocialFeed](/previous-versions/office/sharepoint-server/jj263396(v=office.15)) , [SPSocialThread](/previous-versions/office/sharepoint-server/jj267122(v=office.15)) , [SPSocialPost](/previous-versions/office/sharepoint-server/jj275545(v=office.15)) , [SPSocialFeedOptions](/previous-versions/office/sharepoint-server/jj275763(v=office.15)) , [SPSocialActor](/previous-versions/office/sharepoint-server/jj275459(v=office.15)) <br/> Class library:           Microsoft.Office.Server.UserProfiles.dll|
   
If you're using the server object model to access feed content and your code isn't running in a SharePoint instance (in other words, if your extension is not installed in the LAYOUTS folder on the application server), use an  [SPServiceContextScope](/previous-versions/office/sharepoint-server/ee585864(v=office.15)) object in your code. The following code example shows one way to incorporate the [SPServiceContextScope](/previous-versions/office/sharepoint-server/ee585864(v=office.15)) object into your code.
  
   
```csharp

using (SPSite site = new SPSite(<siteURL>))
{
    using (new Microsoft.SharePoint.SPServiceContextScope(SPServiceContext.GetContext(site)))
    {
        // code
    }
}

```


## Common programming tasks for working with social feeds in SharePoint
<a name="bkmk_CommonTasks"> </a>

Table 2 shows common programming tasks for working with social feeds and the members that you use to perform them. Members are from the .NET client object model (CSOM), JavaScript object model (JSOM), REST service, and server object model (SSOM).
  

**Table 2. API for common programming tasks for working with social feeds in SharePoint**


|**Task**|**Members**|
|:-----|:-----|
|Create an instance of the manager object in the context of the current user|CSOM:  [SocialFeedManager](/previous-versions/office/sharepoint-csom/jj163796(v=office.15)) <br/> JSOM:  [SocialFeedManager](/previous-versions/office/sharepoint-visio/jj642991(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed`](social-feed-rest-api-reference-for-sharepoint.md) <br/> SSOM:  [SPSocialFeedManager](/previous-versions/office/sharepoint-visio/jj642991(v=office.15))|
|Create an instance of the manager object in the context of a particular user|CSOM: not implemented  <br/> JSOM: not implemented  <br/> REST: not implemented  <br/> SSOM:  [SPSocialFeedManager](/previous-versions/office/sharepoint-server/jj264599(v=office.15))|
|Get the user for the current context|CSOM:  [Owner](/previous-versions/office/sharepoint-csom/jj164750(v=office.15)) <br/> JSOM:  [owner](previous-versions/office/sharepoint-visio/jj712736(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my`](social-feed-rest-api-reference-for-sharepoint.md#bk_my) <br/> SSOM:  [Owner](/previous-versions/office/sharepoint-server/jj274634(v=office.15))|
|Get the feed for the current user  <br/> (specify the feed type)|CSOM:  [GetFeed](/previous-versions/office/sharepoint-csom/jj164137(v=office.15)) <br/> JSOM:  [getFeed](/previous-versions/office/sharepoint-visio/jj667877(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my/Feed`](social-feed-rest-api-reference-for-sharepoint.md#bk_myFeed) (personal feed.md), [`<siteUri>/_api/social.feed/my/News`](social-feed-rest-api-reference-for-sharepoint.md#bk_myNews),  [`<siteUri>/_api/social.feed/my/TimelineFeed`](social-feed-rest-api-reference-for-sharepoint.md#bk_myTimelineFeed), or  [`<siteUri>/_api/social.feed/my/Likes`](social-feed-rest-api-reference-for-sharepoint.md#bk_myLikes) <br/> SSOM:  [GetFeed](//previous-versions/office/sharepoint-server/jj265366(v=office.15))|
|Get the personal feed for a particular user|CSOM:  [GetFeedFor](/previous-versions/office/sharepoint-csom/jj164252(v=office.15)) <br/> JSOM:  [getFeedFor](/previous-versions/office/sharepoint-visio/jj712749(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed/actor(item='domain\\user')/Feed`](social-feed-rest-api-reference-for-sharepoint.md#bk_actorFeed) <br/> SSOM:  [GetFeedFor](/previous-versions/office/sharepoint-server/jj264479(v=office.15))|
|Get the site feed for a team site  <br/> (specify the URL of the site feed as the actor (example: http://\<siteCollection\>/\<teamSite\>/newsfeed.aspx))|CSOM:  [GetFeedFor](/previous-versions/office/sharepoint-csom/jj164252(v=office.15)) <br/> JSOM:  [getFeedFor](/previous-versions/office/sharepoint-visio/jj712749(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed/actor(item=@v)/Feed?@v='http://<siteCollection>/<teamSite>/newsfeed.aspx'`](social-feed-rest-api-reference-for-sharepoint.md#bk_actorFeed) <br/> SSOM:  [GetFeedFor](/previous-versions/office/sharepoint-server/jj264479(v=office.15))|
|Publish a root post to the current user's feed  <br/> (specify **null** for the target)|CSOM:  [CreatePost](/previous-versions/office/sharepoint-csom/jj164528(v=office.15)) <br/> JSOM:  [createPost](/previous-versions/office/sharepoint-visio/jj667802(v=office.15)) <br/> REST: **POST** [`<siteUri>/_api/social.feed/my/Feed/Post`](social-feed-rest-api-reference-for-sharepoint.md#bk_myFeedPost) and pass the _restCreationData_ parameter in the request body <br/> SSOM:  [CreatePost](/previous-versions/office/sharepoint-server/jj263426(v=office.15))|
|Publish a post to a site feed  <br/> (specify the URL of the site feed as the target (example: http://\<siteCollection\>/teamSite>/newsfeed.aspx))|CSOM:  [CreatePost](/previous-versions/office/sharepoint-csom/jj164528(v=office.15)) <br/> JSOM:  [createPost](/previous-versions/office/sharepoint-visio/jj667802(v=office.15)) <br/> REST: **POST** [`<siteUri>/_api/social.feed/actor(item=@av)/feed/post/?@av='<teamSiteUri>/newsfeed.aspx'`](social-feed-rest-api-reference-for-sharepoint.md#bk_actorFeedPost) and pass the _restCreationData_ parameter in the request body (specify **null** for the _ID_ parameter) <br/> SSOM:  [CreatePost](/previous-versions/office/sharepoint-server/jj263426(v=office.15))|
|Publish a reply to a post  <br/> (specify the ID of the target thread)|CSOM:  [CreatePost](/previous-versions/office/sharepoint-csom/jj164528(v=office.15)) <br/> JSOM:  [createPost](/previous-versions/office/sharepoint-visio/jj667802(v=office.15)) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Reply`](social-feed-rest-api-reference-for-sharepoint.md#bk_postReply) and pass the _restCreationData_ parameter in the request body <br/> SSOM:  [CreatePost](/previous-versions/office/sharepoint-server/jj263426(v=office.15))|
|Delete a post, reply, or thread in the current user's feed (deleting a root post deletes the whole thread)|CSOM:  [DeletePost](/previous-versions/office/sharepoint-csom/jj164772(v=office.15)) <br/> JSOM:  [deletePost](/previous-versions/office/sharepoint-visio/jj712743(v=office.15)) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Delete`](social-feed-rest-api-reference-for-sharepoint.md#bk_postDelete) and pass the _ID_ parameter in the request body <br/> SSOM:  [DeletePost](/previous-versions/office/sharepoint-server/jj263843(v=office.15))|
|Get a thread (a root post and all its replies) from the user's feed|CSOM:  [GetFullThread](/previous-versions/office/sharepoint-csom/jj163905(v=office.15)) <br/> JSOM:  [getFullThread](/previous-versions/office/sharepoint-visio/jj679723(v=office.15)) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post`](social-feed-rest-api-reference-for-sharepoint.md#bk_post) and pass the _ID_ parameter in the request body <br/> SSOM:  [GetFullThread](/previous-versions/office/sharepoint-server/jj267783(v=office.15))|
|Have the user like (unlike) a post or reply|CSOM:  [LikePost](/previous-versions/office/sharepoint-csom/jj164041(v=office.15)) ( [UnlikePost](/previous-versions/office/sharepoint-csom/jj164030(v=office.15)) ) <br/> JSOM:  [likePost](/previous-versions/office/sharepoint-visio/jj667821(v=office.15)) ( [unlikePost](/previous-versions/office/sharepoint-visio/jj667764(v=office.15)))  <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Like`](social-feed-rest-api-reference-for-sharepoint.md#bk_postLike) ( [`<siteUri>/_api/social.feed/Post/Unlike`](social-feed-rest-api-reference-for-sharepoint.md#bk_postUnlike)) and pass the  _ID_ parameter in the request body <br/> SSOM:  [LikePost](/previous-versions/office/sharepoint-server/jj264632(v=office.15)) ( [UnlikePost](/previous-versions/office/sharepoint-server/jj263809(v=office.15)) )|
|Get all likers for a post|CSOM:  [GetAllLikers](/previous-versions/office/sharepoint-csom/jj164473(v=office.15)) <br/> JSOM:  [getAllLikers](/previous-versions/office/sharepoint-visio/jj679813(v=office.15)) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Likers`](social-feed-rest-api-reference-for-sharepoint.md#bk_postLikers) and pass the _ID_ parameter in the request body <br/> SSOM:  [GetAllLikers](/previous-versions/office/sharepoint-server/jj264427(v=office.15))|
|Get the posts that mention a user|CSOM:  [GetMentions](/previous-versions/office/sharepoint-csom/jj164406(v=office.15)) <br/> JSOM:  [getMentions](/previous-versions/office/sharepoint-visio/jj679814(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my/MentionFeed`](social-feed-rest-api-reference-for-sharepoint.md#bk_myMentionFeed) <br/> SSOM:  [GetMentions](/previous-versions/office/sharepoint-server/jj265152(v=office.15))|
|Get the number of unread mentions for the current user|CSOM:  [GetUnreadMentionCount](/previous-versions/office/sharepoint-csom/jj164272(v=office.15)) <br/> JSOM:  [getUnreadMentionCount](/previous-versions/office/sharepoint-visio/jj679621(v=office.15)) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my/UnreadMentionCount`](social-feed-rest-api-reference-for-sharepoint.md#bk_myUnreadMentionCount) <br/> SSOM:  [GetUnreadMentionCount](/previous-versions/office/sharepoint-server/jj265154(v=office.15))|
|Lock (unlock) a thread in the current user's feed|CSOM:  [LockThread](/previous-versions/office/sharepoint-csom/jj163792(v=office.15)) ( [UnlockThread](/previous-versions/office/sharepoint-csom/jj163948(v=office.15)) ) <br/> JSOM:  [lockThread](/previous-versions/office/sharepoint-visio/jj667876(v=office.15)) ( [unlockThread](/previous-versions/office/sharepoint-visio/jj667811(v=office.15)))  <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Lock`](social-feed-rest-api-reference-for-sharepoint.md#bk_postLock) ( [`<siteUri>/_api/social.feed/Post/Unlock`](social-feed-rest-api-reference-for-sharepoint.md#bk_postUnlock)) and pass the  _ID_ parameter in the request body <br/> SSOM:  [LockThread](/previous-versions/office/sharepoint-server/jj264687(v=office.15)) ( [UnlockThread](/previous-versions/office/sharepoint-server/jj275503(v=office.15)) .md)|
   
> [!NOTE] 
> The  _domain\\user_ placeholder value in the REST example should be replaced with the account name of an actual user. To see how to pass a REST parameter in a request body, see the [examples](social-feed-rest-api-reference-for-sharepoint.md#bk_exampleRequests) in the Social feed REST API reference.

SharePoint does not provide an API to customize the layout or rendering of microblog posts directly. SharePoint only provides the data and allows cross-platform and cross-device client applications to define layouts that are appropriate for their form factors and needs. In SharePoint development, you can use JavaScript overrides in client-side rendering, as described in  [Customize a list view in SharePoint Add-ins using client-side rendering](/sharepoint/dev/sp-add-ins/customize-a-list-view-in-sharepoint-add-ins-using-client-side-rendering).
  

## Overview of feed types in the My Site Social API
<a name="bkmk_FeedTypes"> </a>

Feed types represent slices of feed data. When you retrieve a feed for the current user, you can specify one of the following feed types:

- **Personal** contains the posts and updates that are generated from a user. On My Site, this feed is shown on a user's **About me** page.
- **News** contains the posts and updates that are generated from the current user and from the people and the content that the user is following. When you retrieve the **News** feed type, use the **ByModifiedTime** sort order option to get the most recent (cached) activities from the people who the user is following. On My Site, this feed is shown on a user's **Newsfeed** page.
- **Timeline** contains the posts and updates that are generated from the current user and from the people and the content that the user is following. **Timeline** is particularly useful when you want feed data from a specific time range or when you want to sort with the **ByCreatedTime** option (which includes the largest sampling of people).
- **Likes** contains reference threads with a **PostReference** property that represents a post that the current user has flagged with the **Like** attribute.
- **Everyone** contains the threads from the current user's whole organization.
    
The server, client, and JavaScript object models provide the **GetFeed** method that you can use to retrieve any feed type for the current user and the **GetFeedFor** method that you can use to retrieve the **Personal** feed type (only) for a specified user. Both methods take a **SocialFeedOptions** object as a parameter, which you use to specify the time-based sort order, date range, and maximum number of threads to return.
  
> [!NOTE] 
> The REST service provides separate resources to retrieve each feed type, as shown in Table 2. 

If a thread contains more than two replies, the server returns a digest of the thread that contains only the two most recent replies. (Thread digests have the **IsDigest** thread attribute applied.) If you want to get all the replies in a thread, call the **GetFullThread** method from the feed manager object and pass in the thread identifier.


## See also
<a name="bkmk_AdditionalResources"> </a>

- **Conceptual and how-to articles** 
-  [Social and collaboration features in SharePoint](social-and-collaboration-features-in-sharepoint.md)
-  [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md) 
-  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md)  
-  [How to: Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md)
-  [How to: Learn to read and write to the social feed by using the REST service in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-rest-service-in-s.md)
-  [How to: Include mentions, tags, and links to sites and documents in posts in SharePoint](how-to-include-mentions-tags-and-links-to-sites-and-documents-in-posts-in-sharep.md)
-  [How to: Embed images, videos, and documents in posts in SharePoint](how-to-embed-images-videos-and-documents-in-posts-in-sharepoint-server.md)
-  [Reference threads and digest threads in SharePoint social feeds](reference-threads-and-digest-threads-in-sharepoint-server-social-feeds.md)

    
- **API reference documentation**
-  [Microsoft.SharePoint.Client.Social](/previous-versions/office/sharepoint-csom/jj164417(v=office.15)) (client object model)
-  [SP.Social namespace](/previous-versions/office/sharepoint-visio/jj628683(v=office.15)) (JavaScript object model)
-  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md) 
-  [Microsoft.Office.Server.Social](/previous-versions/office/sharepoint-server/jj264549(v=office.15)) (server object model)
