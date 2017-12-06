---
title: Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: e8c21960-6ea0-43c0-821e-2db2a0ecec90
---


# Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint

Learn how to create and delete microblog posts and retrieve social feeds by using the SharePoint JavaScript object model.

## What are social feeds in SharePoint?
<a name="bk_intro"> </a>

In SharePoint, a social feed is a collection of threads that represent conversations, single microblog posts, or notifications. Threads contain a root post and a collection of reply posts. In the JavaScript object model, feeds are represented by  [SocialFeed](http://msdn.microsoft.com/library/356c5475-2fd6-a655-c271-5d7f21af45e2%28Office.15%29.aspx) objects, threads are represented by [SocialThread](http://msdn.microsoft.com/library/46aa4beb-d708-f20e-471e-626c8a7efab7%28Office.15%29.aspx) objects, and post and replies are represented by [SocialPost](http://msdn.microsoft.com/library/a761ce71-d3d7-420a-1e06-962674124dfa%28Office.15%29.aspx) objects. To perform core feed-related tasks, you use the [SocialFeedManager](http://msdn.microsoft.com/library/651fdf0f-841d-88f9-1e07-fcb3ad8c9410%28Office.15%29.aspx) object. In this article, we'll show you how to create an application page that uses the JavaScript object model to work with social feeds.
  
    
    
For more information about working with  [SocialFeedManager](http://msdn.microsoft.com/library/651fdf0f-841d-88f9-1e07-fcb3ad8c9410%28Office.15%29.aspx) or for information about using other APIs to work with social feeds, see [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md).
  
    
    

## Prerequisites for setting up your development environment to work with social feeds in the SharePoint JavaScript object model
<a name="bkmk_SetUpDevEnv"> </a>

To create an application page that uses the JavaScript object model to work with social feeds, you'll need:
  
    
    

- SharePoint with My Site configured as public, with personal sites created for the current user and a target user, with the current user following the target user, and with a few posts written by the target user
    
  
- Visual Studio 2012 or Visual Studio 2013 with Office Developer Tools for Visual Studio 2013
    
  
- **Full Control** access permissions to the User Profile service application and permissions to deploy a farm solution for the logged-on user
    
  
- Sufficient permissions for the application pool account to access the content database of the My Sites web application
    
  

## Create an application page that works with social feeds by using the SharePoint JavaScript object model
<a name="bk_CreateApp"> </a>


1. Open Visual Studio and choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. In the **Templates** list, expand **Office SharePoint**, choose the **SharePoint Solutions** category, and then choose the **SharePoint Project** template.
    
  
4. Name the project SocialFeedJSOM, and then choose the **OK** button.
    
  
5. In the **SharePoint Customization Wizard** dialog box, choose **Deploy as a farm solution**, and then choose the **Finish** button.
    
  
6. In **Solution Explorer**, open the shortcut menu for the SocialFeedJSOM project, and then add a SharePoint "Layouts" mapped folder.
    
  
7. In the **Layouts** folder, open the shortcut menu for theSocialFeedJSOM folder, and then add a new SharePoint application page namedSocialFeed.aspx.
    
  > Note: The code examples in this article define custom code in the page markup but do not use the code-behind class that Visual Studio creates for the page. 

8. Open the shortcut menu for the SocialFeed.aspx page, and then choose **Set as Startup Item**.
    
  
9. In the markup for the SocialFeed.aspx page, define controls inside the "Main" **asp:Content** tags, as shown in the following code.
    
```HTML
<table width="100%" id="tblPosts"></table><br/>
<button id="btnDelete" type="button"></button><br />
<span id="spanMessage" style="color: #FF0000;"></span>
```

  > Note: These controls may not be used in every scenario. For example, the "Publish posts and replies" scenario only uses the **span** control.

10. After the closing **span** tag, add **SharePoint:ScriptLink** controls, a **SharePoint:FormDigest** control, and **script** tags, as shown in the following code. The **SharePoint:ScriptLink** tags reference the class library files that define the JavaScript object model that you can use for My Site Social development. The **SharePoint:FormDigest** tag generates a message digest for security validation when required by operations that update server content.
    
```HTML
<SharePoint:ScriptLink ID="ScriptLink1" name="SP.js" runat="server" ondemand="false" localizable="false" loadafterui="true" />
<SharePoint:ScriptLink ID="ScriptLink2" name="SP.UserProfiles.js" runat="server" ondemand="false" localizable="false" loadafterui="true" />
<SharePoint:FormDigest id="FormDigest" runat="server"/>
<script type="text/javascript">
    // Replace this comment with the code for your scenario.
</script>
```

11. To add the logic to work with feeds, replace the comment between the **script** tags with the code example from one of the following scenarios:
    
  -  [Publish posts and replies to the social feed](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md#bkmk_PubPosts)
  -  [Retrieve social feeds](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md#bkmk_GetFeeds)
  -  [Delete posts and replies from the social feed](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md#bkmk_DeletePosts)
    
  
12. To test the application page, on the menu bar, choose **Debug**, **Start Debugging**. If you are prompted to modify the web.config file, choose the **OK** button.
    
  If the response calls the failure callback method, set a breakpoint in the method and add a watch on the **args** object or check the ULS logs and the event viewer for more information.
    
  

## Code example: Publish posts and replies to the social feed by using the SharePoint JavaScript object model
<a name="bkmk_PubPosts"> </a>

The following code example publishes a post and a reply. It shows how to:
  
    
    

- Define post content. This example includes a link in the post.
    
  
- Publish a post to the current user's feed by using the **createPost** method and passing **null** as the _targetId_ parameter.
    
  
- Reply to a post by using the **createPost** method and passing the thread identifier as the _targetId_ parameter.
    
> [!NOTE]
> Paste the following code between the **script** tags that you added in the [Create the application page](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md#bk_CreateApp) procedure.
  
    
    


```javascript
// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.
SP.SOD.executeOrDelayUntilScriptLoaded(PublishPost, 'SP.UserProfiles.js');

// Declare global variables.
var clientContext;
var feedManager;
var resultThread;

function PublishPost() {

    // Initialize the current client context and the SocialFeedManager instance.
    clientContext = SP.ClientContext.get_current();
    feedManager = new SP.Social.SocialFeedManager(clientContext);

    // Create a link to include in the post.
    var linkDataItem = new SP.Social.SocialDataItem();
    linkDataItem.set_itemType(SP.Social.SocialDataItemType.link);
    linkDataItem.set_text('link');
    linkDataItem.set_uri('http://bing.com');
    var socialDataItems = [ linkDataItem ];

    // Create the post content.
    var postCreationData = new SP.Social.SocialPostCreationData();
    postCreationData.set_contentText('The text for the post, which contains a {0}.');
    postCreationData.set_contentItems(socialDataItems);

    // Publish the post. Pass null for the "targetId" parameter because this is a root post.
    resultThread = feedManager.createPost(null, postCreationData);
    clientContext.executeQueryAsync(PublishReply, PostFailed);
    }
function PublishReply(sender, args) {

    // Create the reply content.
    var postCreationData = new SP.Social.SocialPostCreationData();
    postCreationData.set_contentText('The text for the reply.');

    // Publish the reply.
    resultThread = feedManager.createPost(resultThread.get_id(), postCreationData);
    clientContext.executeQueryAsync(PostSucceeded, PostFailed);
}
function PostSucceeded(sender, args) {
    $get("spanMessage").innerText = 'The post and reply were published.';
}
function PostFailed(sender, args) {
    $get("spanMessage").innerText = 'Request failed: ' + args.get_message();
}
```


## Code example: Retrieve social feeds by using the SharePoint JavaScript object model
<a name="bkmk_GetFeeds"> </a>

The following code example retrieves feeds for the current user and a target user. It shows how to:
  
    
    

- Get the **Personal**, **News**, and **Timeline** feed types for the current user by using the **getFeed** method.
    
  
- Get the **Personal** feed type for a target user by using the **getFeedFor** method.
    
  
- Iterate through the feeds to find all non-reference threads and to get information about threads and posts. Reference threads represent notifications that contain information about another thread. For example, if a user mentions someone in a post, the server generates a **MentionReference**-type thread that contains the link to the original post and other metadata about the post.
    
  
For more information about feed types, see  [Overview of feed types in the My Site Social API](work-with-social-feeds-in-sharepoint.md#bkmk_FeedTypes). For more information about reference threads, see  [Reference threads and digest threads in SharePoint social feeds](reference-threads-and-digest-threads-in-sharepoint-server-social-feeds.md).
  
> [!NOTE]
> Paste the following code between the **script** tags that you added in the [Create the application page](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md#bk_CreateApp) procedure. Then, change the placeholder value for the **targetUser** variable before you run the code.
  
    
    




```cs
// Replace the placeholder value with the account name of the target user.
var targetUser = 'domainName\\\\userName';

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.
SP.SOD.executeOrDelayUntilScriptLoaded(GetFeeds, 'SP.UserProfiles.js');

// Declare global variables.
var clientContext;
var feedManager;
var personalFeed;
var newsFeed;
var timelineFeed;
var targetUserFeed;

function GetFeeds() {

    // Initialize the current client context and the SocialFeedManager instance.
    clientContext = SP.ClientContext.get_current();
    feedManager = new SP.Social.SocialFeedManager(clientContext);

    // Set parameters for the feed content that you want to retrieve.
    var feedOptions = new SP.Social.SocialFeedOptions();
    feedOptions.set_maxThreadCount(10); // default is 20

    // Get all feed types for current user and get the Personal feed
    // for the target user.
    personalFeed = feedManager.getFeed(SP.Social.SocialFeedType.personal, feedOptions);
    newsFeed = feedManager.getFeed(SP.Social.SocialFeedType.news, feedOptions);
    targetUserFeed = feedManager.getFeedFor(targetUser, feedOptions);

    // Change the sort order to optimize the Timeline feed results.
    feedOptions.set_sortOrder(SP.Social.SocialFeedSortOrder.byCreatedTime); 
    timelineFeed = feedManager.getFeed(SP.Social.SocialFeedType.timeline, feedOptions);

    clientContext.load(feedManager);
    clientContext.executeQueryAsync(CallIterateFunctionForFeeds, RequestFailed);
}
function CallIterateFunctionForFeeds() {
    IterateThroughFeed(personalFeed, "Personal", true);
    IterateThroughFeed(newsFeed, "News", true);
    IterateThroughFeed(timelineFeed, "Timeline", true); 
    IterateThroughFeed(targetUserFeed, "Personal", false);
}
function IterateThroughFeed(feed, feedType, isCurrentUser) {
    tblPosts.insertRow().insertCell();
    var feedHeaderRow = tblPosts.insertRow();
    var feedOwner = feedManager.get_owner().get_name();

    // Iterate through the array of threads in the feed.
    var threads = feed.get_threads();
    for (var i = 0; i < threads.length ; i++) {
        var thread = threads[i];
        var actors = thread.get_actors();

        if (i == 0) {

            // Get the name of the target user for the feed header row. Users are 
            // owners of all threads in their Personal feed.
            if (!isCurrentUser) {
                feedOwner = actors[thread.get_ownerIndex()].get_name();
            }
            feedHeaderRow.insertCell().innerText = feedType.toUpperCase() + ' FEED FOR '
                + feedOwner.toUpperCase();
        }

        // Use only Normal-type threads and ignore reference-type threads. (SocialThreadType.Normal = 0)
        if (thread.get_threadType() == 0) {

            // Get the root post's author, content, and number of replies.
            var post = thread.get_rootPost();
            var authorName = actors[post.get_authorIndex()].get_name();
            var postContent = post.get_text();
            var totalReplies = thread.get_totalReplyCount();

            var postRow = tblPosts.insertRow();
            postRow.insertCell().innerText = authorName + ' posted \\"' + postContent
                + '\\" (' + totalReplies + ' replies)';

            // If there are any replies, iterate through the array and
            // get the author and content. 
            // If a thread contains more than two replies, the server
            // returns a thread digest that contains only the two most
            // recent replies. To get all replies, call the 
            // SocialFeedManager.getFullThread method.
            if (totalReplies > 0) {
                var replies = thread.get_replies();

                for (var j = 0; j < replies.length; j++) {
                    var replyRow = tblPosts.insertRow();

                    var reply = replies[j];
                    replyRow.insertCell().innerText = '  - ' + actors[reply.get_authorIndex()].get_name()
                        + ' replied \\"' + reply.get_text() + '\\"';
                }
            }
        }
    }
}
function RequestFailed(sender, args) {
    $get("spanMessage").innerText = 'Request failed: ' + args.get_message();
}
```


## Code example: Delete posts and replies from the social feed by using the SharePoint JavaScript object model
<a name="bkmk_DeletePosts"> </a>

The following code example deletes a post or a reply. It shows how to:
  
    
    

- Get the **News** feed type for the current user by using the **getFeed** method.
    
  
- Iterate through the posts and replies in the feed to get the **id** property that you use to delete the post or reply.
    
  
- Delete a root post or reply by using the **deletePost** method (deleting a root post deletes the whole thread).
    
> [!NOTE]
> Paste the following code between the **script** tags that you added in the [Create the application page](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md#bk_CreateApp) procedure. This example assumes that the current user's newsfeed contains at least one post.
  
    
    


```cs
// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.
SP.SOD.executeOrDelayUntilScriptLoaded(GetFeeds, 'SP.UserProfiles.js');

// Declare global variables.
var clientContext;
var feedManager;
var feed;
var postOrReplyToDelete;

function GetFeeds() {

    // Initialize the current client context and the SocialFeedManager instance.
    clientContext = SP.ClientContext.get_current();
    feedManager = new SP.Social.SocialFeedManager(clientContext);

    // Set parameters for the feed content that you want to retrieve.
    var feedOptions = new SP.Social.SocialFeedOptions();
    feedOptions.set_maxThreadCount(10); // default is 20

    // Get all the News feed type for current user.
    feed = feedManager.getFeed(SP.Social.SocialFeedType.news, feedOptions);
    clientContext.executeQueryAsync(IterateThroughFeed, RequestFailed);
}
function IterateThroughFeed() {

    // Iterate through the array of threads in the feed.
    var threads = feed.get_threads();
    for (var i = 0; i < threads.length ; i++) {
        var thread = threads[i];
        var actors = thread.get_actors();

        // Get the root post's author, content, and number of replies.
        var post = thread.get_rootPost();

        var authorName = actors[post.get_authorIndex()].get_name();
        var postContent = post.get_text();
        var totalReplies = thread.get_totalReplyCount();

        var postRow = tblPosts.insertRow();
        postRow.insertCell().innerText = authorName + ' posted \\"' + postContent
            + '\\" (' + totalReplies + ' replies)';
        postOrReplyToDelete = post.get_id();

        // If there are any replies, iterate through the array and
        // get the author and content.
            // If a thread contains more than two replies, the server
            // returns a thread digest that contains only the two most
            // recent replies. To get all replies, call the 
            // SocialFeedManager.getFullThread method.
        if (totalReplies > 0) {
            var replies = thread.get_replies();
            for (var j = 0; j < replies.length; j++) {
                var replyRow = tblPosts.insertRow();

                var reply = replies[j];
                replyRow.insertCell().innerText = '  - ' + actors[reply.get_authorIndex()].get_name()
                    + ' replied \\"' + reply.get_text() + '\\"';
                postOrReplyToDelete = reply.get_id();
            }
        }

        // Initialize button properties.
        $get("btnDelete").onclick = function () { DeletePostOrReply(); };
        $get("btnDelete").innerText = 'Click to delete the last post or reply';
    }
}

// Delete the last post or reply listed on the page.
function DeletePostOrReply() {
    feedManager.deletePost(postOrReplyToDelete);
    clientContext.executeQueryAsync(DeleteSucceeded, RequestFailed);
}
function DeleteSucceeded(sender, args) {
    $get("spanMessage").innerText = 'The post or reply was deleted. Refresh the page to see your changes.';
}
function RequestFailed(sender, args) {
    $get("spanMessage").innerText = 'Request failed: ' + args.get_message();
}
```


## See also
<a name="bk_addResources"> </a>


-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
    
  
-  [SP.Social namespace (sp.userprofiles)](http://msdn.microsoft.com/library/43d47f01-c085-0e77-bd01-48bcb7d5bb35%28Office.15%29.aspx)
    
  
-  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md)
    
  
-  [How to: Learn to read and write to the social feed by using the REST service in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-rest-service-in-s.md)
    
  
-  [Reference threads and digest threads in SharePoint social feeds](reference-threads-and-digest-threads-in-sharepoint-server-social-feeds.md)
    
  

