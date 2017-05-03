---
title: Work with social feeds in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 39f2163e-15cc-43bc-b131-041d5afdcd90
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
  
    
    

> **Note:**
> The Silverlight and mobile client object models are not explicitly mentioned in Table 1 or Table 2 because they provide the same core functionality as the .NET client object model and use the same signatures. The Silverlight client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Silverlight.dll, and the mobile client object model is defined in Microsoft.SharePoint.Client.UserProfiles.Phone.dll. 
  
    
    


**Table 1. SharePoint APIs used for working with social feeds programmatically**

|**API**|**Key objects**|
|:-----|:-----|
|.NET client object model  <br/> See:  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md)|Manager object:            [SocialFeedManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.aspx) <br/> Primary namespace:            [Microsoft.SharePoint.Client.Social](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.aspx) <br/> Other key objects:            [SocialFeed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeed.aspx) , [SocialThread](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialThread.aspx) , [SocialPost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPost.aspx) , [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) , [SocialFeedOptions](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedOptions.aspx) , [SocialActor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActor.aspx) <br/> Class library:           Microsoft.SharePoint.Client.UserProfiles.dll|
|JavaScript object model  <br/> See  [How to: Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md)|Manager object:            [SocialFeedManager](http://msdn.microsoft.com/library/651fdf0f-841d-88f9-1e07-fcb3ad8c9410%28Office.15%29.aspx) <br/> Primary namespace:            [SP.Social](http://msdn.microsoft.com/library/43d47f01-c085-0e77-bd01-48bcb7d5bb35%28Office.15%29.aspx) <br/> Other key objects:            [SocialFeed](http://msdn.microsoft.com/library/356c5475-2fd6-a655-c271-5d7f21af45e2%28Office.15%29.aspx),  [SocialThread](http://msdn.microsoft.com/library/46aa4beb-d708-f20e-471e-626c8a7efab7%28Office.15%29.aspx),  [SocialPost](http://msdn.microsoft.com/library/a761ce71-d3d7-420a-1e06-962674124dfa%28Office.15%29.aspx),  [SocialPostCreationData](http://msdn.microsoft.com/library/f0e1fa3e-6fc9-48e0-5570-92091abfef33%28Office.15%29.aspx),  [SocialFeedOptions](http://msdn.microsoft.com/library/65caf283-6e7a-50dc-ef8e-a4e12bd237ac%28Office.15%29.aspx),  [SocialActor](http://msdn.microsoft.com/library/4e369fd5-b9b0-9804-957e-b3e39c559cd4%28Office.15%29.aspx) <br/> Class library:           SP.UserProfiles.js|
|REST service  <br/> See  [How to: Learn to read and write to the social feed by using the REST service in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-rest-service-in-s.md)|Manager resource:            [social.feed](social-feed-rest-api-reference-for-sharepoint.md) (SocialRestFeedManager) <br/> Primary namespace (OData):           **SP.Social** <br/> Other key resources:           SocialFeed,  [SocialRestFeed](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestFeed), SocialThread,  [SocialRestThread](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestThread), SocialPost, SocialPostCreationData,  [SocialRestPostCreationData](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestPostCreationData),  [SocialFeedOptions](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialFeedOptions), SocialActor,  [SociaRestActor](social-feed-rest-api-reference-for-sharepoint.md#bk_SocialRestActor) <br/> Access point:            `<siteUri>/_api/social.feed`|
|Server object model <br/>Note: Code that uses the server object model to access feed data and runs remotely must use an  [SPServiceContextScope](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPServiceContextScope.aspx) object.|Manager object:            [SPSocialFeedManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.aspx) <br/> Primary namespace:            [Microsoft.Office.Server.Social](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.aspx) <br/> Other key objects:            [SPSocialFeed](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeed.aspx) , [SPSocialThread](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialThread.aspx) , [SPSocialPost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialPost.aspx) , [SPSocialFeedOptions](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedOptions.aspx) , [SPSocialActor](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialActor.aspx) <br/> Class library:           Microsoft.Office.Server.UserProfiles.dll|
   
If you're using the server object model to access feed content and your code isn't running in a SharePoint instance (in other words, if your extension is not installed in the LAYOUTS folder on the application server), use an  [SPServiceContextScope](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPServiceContextScope.aspx) object in your code. The following code example shows one way to incorporate the [SPServiceContextScope](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPServiceContextScope.aspx) object into your code.
  
    
    



```cs

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
|Create an instance of the manager object in the context of the current user|CSOM:  [SocialFeedManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.aspx) <br/> JSOM:  [SocialFeedManager](http://msdn.microsoft.com/library/f7cf172f-970b-6b71-9eb4-b9a8bb7a0001%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed`](social-feed-rest-api-reference-for-sharepoint.md) <br/> SSOM:  [SPSocialFeedManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.aspx)|
|Create an instance of the manager object in the context of a particular user|CSOM: not implemented  <br/> JSOM: not implemented  <br/> REST: not implemented  <br/> SSOM:  [SPSocialFeedManager](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.aspx)|
|Get the user for the current context|CSOM:  [Owner](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.Owner.aspx) <br/> JSOM:  [owner](http://msdn.microsoft.com/library/0307264e-d733-77f0-edae-f5468e58d0b7%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my`](social-feed-rest-api-reference-for-sharepoint.md#bk_my) <br/> SSOM:  [Owner](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.Owner.aspx)|
|Get the feed for the current user  <br/> (specify the feed type)|CSOM:  [GetFeed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeed.aspx) <br/> JSOM:  [getFeed](http://msdn.microsoft.com/library/cddaccd8-28da-6798-d8cb-4e9351efddf3%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my/Feed`](social-feed-rest-api-reference-for-sharepoint.md#bk_myFeed) (personal feed), [`<siteUri>/_api/social.feed/my/News`](social-feed-rest-api-reference-for-sharepoint.md#bk_myNews),  [`<siteUri>/_api/social.feed/my/TimelineFeed`](social-feed-rest-api-reference-for-sharepoint.md#bk_myTimelineFeed), or  [`<siteUri>/_api/social.feed/my/Likes`](social-feed-rest-api-reference-for-sharepoint.md#bk_myLikes) <br/> SSOM:  [GetFeed](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetFeed.aspx)|
|Get the personal feed for a particular user|CSOM:  [GetFeedFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeedFor.aspx) <br/> JSOM:  [getFeedFor](http://msdn.microsoft.com/library/074ed255-9393-448d-1f7e-720fdeb05f48%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed/actor(item='domain\\user')/Feed`](social-feed-rest-api-reference-for-sharepoint.md#bk_actorFeed) <br/> SSOM:  [GetFeedFor](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetFeedFor.aspx)|
|Get the site feed for a team site  <br/> (specify the URL of the site feed as the actor (example: http://<siteCollection>/<teamSite>/newsfeed.aspx))|CSOM:  [GetFeedFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeedFor.aspx) <br/> JSOM:  [getFeedFor](http://msdn.microsoft.com/library/074ed255-9393-448d-1f7e-720fdeb05f48%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed/actor(item=@v)/Feed?@v='http://<siteCollection>/<teamSite>/newsfeed.aspx'`](social-feed-rest-api-reference-for-sharepoint.md#bk_actorFeed) <br/> SSOM:  [GetFeedFor](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetFeedFor.aspx)|
|Publish a root post to the current user's feed  <br/> (specify **null** for the target)|CSOM:  [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) <br/> JSOM:  [createPost](http://msdn.microsoft.com/library/e9ad06a1-831d-8ed0-c76e-8b049f14216f%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.feed/my/Feed/Post`](social-feed-rest-api-reference-for-sharepoint.md#bk_myFeedPost) and pass the _restCreationData_ parameter in the request body <br/> SSOM:  [CreatePost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.CreatePost.aspx)|
|Publish a post to a site feed  <br/> (specify the URL of the site feed as the target (example: http://<siteCollection>/teamSite>/newsfeed.aspx))|CSOM:  [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) <br/> JSOM:  [createPost](http://msdn.microsoft.com/library/e9ad06a1-831d-8ed0-c76e-8b049f14216f%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.feed/actor(item=@av)/feed/post/?@av='<teamSiteUri>/newsfeed.aspx'`](social-feed-rest-api-reference-for-sharepoint.md#bk_actorFeedPost) and pass the _restCreationData_ parameter in the request body (specify **null** for the _ID_ parameter) <br/> SSOM:  [CreatePost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.CreatePost.aspx)|
|Publish a reply to a post  <br/> (specify the ID of the target thread)|CSOM:  [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) <br/> JSOM:  [createPost](http://msdn.microsoft.com/library/e9ad06a1-831d-8ed0-c76e-8b049f14216f%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Reply`](social-feed-rest-api-reference-for-sharepoint.md#bk_postReply) and pass the _restCreationData_ parameter in the request body <br/> SSOM:  [CreatePost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.CreatePost.aspx)|
|Delete a post, reply, or thread in the current user's feed (deleting a root post deletes the whole thread)|CSOM:  [DeletePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.DeletePost.aspx) <br/> JSOM:  [deletePost](http://msdn.microsoft.com/library/06e03f87-c97d-8634-a02b-f7812eb7beeb%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Delete`](social-feed-rest-api-reference-for-sharepoint.md#bk_postDelete) and pass the _ID_ parameter in the request body <br/> SSOM:  [DeletePost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.DeletePost.aspx)|
|Get a thread (a root post and all its replies) from the user's feed|CSOM:  [GetFullThread](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFullThread.aspx) <br/> JSOM:  [getFullThread](http://msdn.microsoft.com/library/6bb384f3-9474-581f-e18d-e8c4f44c3cdf%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post`](social-feed-rest-api-reference-for-sharepoint.md#bk_post) and pass the _ID_ parameter in the request body <br/> SSOM:  [GetFullThread](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetFullThread.aspx)|
|Have the user like (unlike) a post or reply|CSOM:  [LikePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.LikePost.aspx) ( [UnlikePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.UnlikePost.aspx) ) <br/> JSOM:  [likePost](http://msdn.microsoft.com/library/f401a584-1712-50af-ee08-2999a16388d6%28Office.15%29.aspx) ( [unlikePost](http://msdn.microsoft.com/library/c778bd7d-91e5-15dc-eeb8-b571957e8338%28Office.15%29.aspx))  <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Like`](social-feed-rest-api-reference-for-sharepoint.md#bk_postLike) ( [`<siteUri>/_api/social.feed/Post/Unlike`](social-feed-rest-api-reference-for-sharepoint.md#bk_postUnlike)) and pass the  _ID_ parameter in the request body <br/> SSOM:  [LikePost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.LikePost.aspx) ( [UnlikePost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.UnlikePost.aspx) )|
|Get all likers for a post|CSOM:  [GetAllLikers](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetAllLikers.aspx) <br/> JSOM:  [getAllLikers](http://msdn.microsoft.com/library/76286fdc-002f-2b13-dc26-53097eb2e3a2%28Office.15%29.aspx) <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Likers`](social-feed-rest-api-reference-for-sharepoint.md#bk_postLikers) and pass the _ID_ parameter in the request body <br/> SSOM:  [GetAllLikers](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetAllLikers.aspx)|
|Get the posts that mention a user|CSOM:  [GetMentions](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetMentions.aspx) <br/> JSOM:  [getMentions](http://msdn.microsoft.com/library/78f064c3-5b96-373e-e7f0-8603aedc5ded%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my/MentionFeed`](social-feed-rest-api-reference-for-sharepoint.md#bk_myMentionFeed) <br/> SSOM:  [GetMentions](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetMentions.aspx)|
|Get the number of unread mentions for the current user|CSOM:  [GetUnreadMentionCount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetUnreadMentionCount.aspx) <br/> JSOM:  [getUnreadMentionCount](http://msdn.microsoft.com/library/18dde16a-f78f-f65e-0644-4eb737b1ae00%28Office.15%29.aspx) <br/> REST: **GET** [`<siteUri>/_api/social.feed/my/UnreadMentionCount`](social-feed-rest-api-reference-for-sharepoint.md#bk_myUnreadMentionCount) <br/> SSOM:  [GetUnreadMentionCount](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.GetUnreadMentionCount.aspx)|
|Lock (unlock) a thread in the current user's feed|CSOM:  [LockThread](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.LockThread.aspx) ( [UnlockThread](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.UnlockThread.aspx) ) <br/> JSOM:  [lockThread](http://msdn.microsoft.com/library/cc696bb7-e7fd-7a57-5db5-736c3733589e%28Office.15%29.aspx) ( [unlockThread](http://msdn.microsoft.com/library/ee9288d6-ace0-1ec2-ea7c-0ee300b6e1ea%28Office.15%29.aspx))  <br/> REST: **POST** [`<siteUri>/_api/social.feed/Post/Lock`](social-feed-rest-api-reference-for-sharepoint.md#bk_postLock) ( [`<siteUri>/_api/social.feed/Post/Unlock`](social-feed-rest-api-reference-for-sharepoint.md#bk_postUnlock)) and pass the  _ID_ parameter in the request body <br/> SSOM:  [LockThread](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.LockThread.aspx) ( [UnlockThread](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialFeedManager.UnlockThread.aspx) )|
   

> **Note:**
> The  _domain\\user_ placeholder value in the REST example should be replaced with the account name of an actual user. To see how to pass a REST parameter in a request body, see the [examples](social-feed-rest-api-reference-for-sharepoint.md#bk_exampleRequests) in the Social feed REST API reference.
  
    
    

SharePoint does not provide an API to customize the layout or rendering of microblog posts directly. SharePoint only provides the data and allows cross-platform and cross-device client applications to define layouts that are appropriate for their form factors and needs. In SharePoint development, you can use JavaScript overrides in client-side rendering, as described in  [Customize a list view in SharePoint Add-ins using client-side rendering](http://msdn.microsoft.com/library/8d5cabb2-70d0-46a0-bfe0-9e21f8d67d86%28Office.15%29.aspx).
  
    
    

## Overview of feed types in the My Site Social API
<a name="bkmk_FeedTypes"> </a>

Feed types represent slices of feed data. When you retrieve a feed for the current user, you can specify one of the following feed types:
  
    
    

- **Personal** contains the posts and updates that are generated from a user. On My Site, this feed is shown on a user's **About me** page.
    
  
- **News** contains the posts and updates that are generated from the current user and from the people and the content that the user is following. When you retrieve the **News** feed type, use the **ByModifiedTime** sort order option to get the most recent (cached) activities from the people who the user is following. On My Site, this feed is shown on a user's **Newsfeed** page.
    
  
- **Timeline** contains the posts and updates that are generated from the current user and from the people and the content that the user is following. **Timeline** is particularly useful when you want feed data from a specific time range or when you want to sort with the **ByCreatedTime** option (which includes the largest sampling of people).
    
  
- **Likes** contains reference threads with a **PostReference** property that represents a post that the current user has flagged with the **Like** attribute.
    
  
- **Everyone** contains the threads from the current user's whole organization.
    
  
The server, client, and JavaScript object models provide the **GetFeed** method that you can use to retrieve any feed type for the current user and the **GetFeedFor** method that you can use to retrieve the **Personal** feed type (only) for a specified user. Both methods take a **SocialFeedOptions** object as a parameter, which you use to specify the time-based sort order, date range, and maximum number of threads to return.
  
    
    

> **Note:**
> The REST service provides separate resources to retrieve each feed type, as shown in Table 2. 
  
    
    

If a thread contains more than two replies, the server returns a digest of the thread that contains only the two most recent replies. (Thread digests have the **IsDigest** thread attribute applied.) If you want to get all the replies in a thread, call the **GetFullThread** method from the feed manager object and pass in the thread identifier.
  
    
    

## Additional resources
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
    
  
-  [Microsoft.SharePoint.Client.Social](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.aspx) (client object model)
    
  
-  [SP.Social namespace](http://msdn.microsoft.com/library/43d47f01-c085-0e77-bd01-48bcb7d5bb35%28Office.15%29.aspx) (JavaScript object model)
    
  
-  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md)
    
  
-  [Microsoft.Office.Server.Social](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.aspx) (server object model)
    
  
