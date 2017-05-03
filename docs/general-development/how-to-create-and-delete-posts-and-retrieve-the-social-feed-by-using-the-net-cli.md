---
title: How to Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint
ms.prod: SHAREPOINT
ms.assetid: c8d68632-1b55-454c-961a-f3ddad731bf6
---


# How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint
Learn how to create and delete microblog posts and retrieve social feeds by using the SharePoint .NET client object model.
## What are social feeds in SharePoint?
<a name="bk_intro"> </a>

In SharePoint, a social feed is a collection of threads that represent conversations, single microblog posts, or notifications. Threads contain a root post and a collection of reply posts, and they represent conversations, single microblog posts, or notifications. In the .NET client object model, feeds are represented by  [SocialFeed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeed.aspx) objects, threads are represented by [SocialThread](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialThread.aspx) objects, and posts and replies are represented by [SocialPost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPost.aspx) objects. To perform core feed-related tasks in the .NET client object model, you use the [SocialFeedManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.aspx) object. In this article, we'll show you how to create a console application that uses the .NET client object model to work with social feeds.
  
    
    
For more information about working with  [SocialFeedManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.aspx) or for information about using other APIs to work with social feeds, see [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md).
  
    
    

## Prerequisites for setting up your development environment to work with social feeds by using the SharePoint .NET client object model
<a name="bkmk_SetUpDevEnv"> </a>

To create a console application that uses the .NET client object model to work with social feeds, you'll need:
  
    
    

- SharePoint with My Site configured, with personal sites created for the current user and a target user, with the current user following the target user, and with a few posts written by the target user
    
  
- Visual Studio 2012
    
  
- **Full Control** access permissions to the User Profile service application for the logged-on user
    
  

> **Note:**
> If you are not developing on the computer that is running SharePoint, get the  [SharePoint Client Components](http://www.microsoft.com/en-us/download/details.aspx?id=35585) download that contains SharePoint client assemblies.
  
    
    


## Create a console application that works with social feeds by using the SharePoint .NET client object model
<a name="bk_createconsole"> </a>


1. Open Visual Studio and choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. In the **Templates** list, choose **Windows**, and then choose the **Console Application** template.
    
  
4. Name the project SocialFeedCSOM, and then choose the **OK** button.
    
  
5. Add references to the following assemblies:
    
   - **Microsoft.SharePoint.Client**
   - **Microsoft.SharePoint.ClientRuntime**
   - **Microsoft.SharePoint.Client.UserProfiles**
  
6. Replace the contents of the **Program** class with the code example from one of the following scenarios:
    
   -  [Publish posts and replies to the social feed](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md#bkmk_PubPosts) 
   -  [Retrieve social feeds](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md#bkmk_GetFeeds) 
   -  [Delete posts and replies from the social feed](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md#bkmk_DeletePosts)
    
7. To test the console application, on the menu bar, choose **Debug**, **Start Debugging**.
    
  

## Code example: Publish posts and replies to the social feed by using the SharePoint .NET client object model
<a name="bkmk_PubPosts"> </a>

The following code example publishes a post and a reply from the current user. It shows how to:
  
    
    

- Define post content. This example includes a link in the post.
    
  
- Publish a post to the current user's feed by using the  [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) method and passing **null** as the _targetId_ parameter.
    
  
- Get the **News** [feed type](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedType.aspx) for the current user by using the [GetFeed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeed.aspx) method.
    
  
- Iterate through the feed to find all threads that can be replied to and to get information about threads and posts.
    
  
- Reply to a post by using the  [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) method and passing the thread identifier as the _targetId_ parameter.
    
  

> **Note:**
> Change the placeholder value for the **serverUrl** variable before you run the code.
  
    
    


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace SocialFeedCSOM
{
    class Program
    {
        static void Main(string[] args)
        {
            // Replace the following placeholder value with the target server URL.
            const string serverUrl = "http://serverName/";

            Console.Write("Type your post text:  ");

            // Create a link to include in the post.
            SocialDataItem linkDataItem = new SocialDataItem();
            linkDataItem.ItemType = SocialDataItemType.Link;
            linkDataItem.Text = "link";
            linkDataItem.Uri = "http://bing.com";

            // Define properties for the post.
            SocialPostCreationData postCreationData = new SocialPostCreationData();
            postCreationData.ContentText = Console.ReadLine() + " Plus a {0}.";
            postCreationData.ContentItems = new SocialDataItem[1] { linkDataItem };

            // Get the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the SocialFeedManager instance.
            SocialFeedManager feedManager = new SocialFeedManager(clientContext);

            // Publish the post. This is a root post, so specify null for the
            // targetId parameter. 
            feedManager.CreatePost(null, postCreationData); 
            clientContext.ExecuteQuery();

            Console.WriteLine("\\nCurrent user's newsfeed:");

            // Set parameters for the feed content that you want to retrieve.
            SocialFeedOptions feedOptions = new SocialFeedOptions();

            // Get the target owner's feed and then run the request on the server.
            ClientResult<SocialFeed> feed = feedManager.GetFeed(SocialFeedType.News, feedOptions);
            clientContext.ExecuteQuery();

            // Create a dictionary to store the Id property of each thread. This 
            // code example stores the Id so you can select a thread to reply to.
            Dictionary<int, string> idDictionary = new Dictionary<int, string>();

            // Iterate through each thread in the feed.
            for (int i = 0; i < feed.Value.Threads.Length; i++)
            {
                SocialThread thread = feed.Value.Threads[i];

                // Keep only the threads that can be replied to.
                if (thread.Attributes.HasFlag(SocialThreadAttributes.CanReply))
                {
                    idDictionary.Add(i, thread.Id);

                    // Get properties from the root post and thread.
                    // If a thread contains more than two replies, the server returns
                    // a thread digest that contains only the two most recent replies.
                    // To get all replies, call SocialFeedManager.GetFullThread.
                    SocialPost rootPost = thread.RootPost;
                    SocialActor author = thread.Actors[rootPost.AuthorIndex];
                    Console.WriteLine(string.Format("{0}. {1} said \\"{2}\\" ({3} replies)",
                        (i + 1), author.Name, rootPost.Text, thread.TotalReplyCount));
                }
            }
            Console.Write("\\nWhich thread number do you want to reply to?  ");

            string threadToReplyTo = "";
            int threadNumber = int.Parse(Console.ReadLine()) - 1;
            idDictionary.TryGetValue(threadNumber, out threadToReplyTo);

            Console.Write("Type your reply:  ");

            // Define properties for the reply. This example reuses the 
            // SocialPostCreationData object that was used to create a post.
            postCreationData.ContentText = Console.ReadLine();

            // Publish the reply and make the changes on the server.
            ClientResult<SocialThread> result = feedManager.CreatePost(threadToReplyTo, postCreationData);
            clientContext.ExecuteQuery();

            Console.WriteLine("\\nThe reply was published. The thread now has {0} replies.", result.Value.TotalReplyCount);
            Console.ReadLine();
         }
    }
}
```


## Code example: Retrieve social feeds by using the SharePoint .NET client object model
<a name="bkmk_GetFeeds"> </a>

The following code example retrieves feeds for the current user and a target user. It shows how to:
  
    
    

- Get the **Personal**, **News**, and **Timeline**[feed types](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedType.aspx) for the current user by using the [GetFeed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeed.aspx) method.
    
  
- Get the **Personal** [feed type](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedType.Personal.aspx) for a target user by using the [GetFeedFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeedFor.aspx) method.
    
  
- Iterate through the feeds to find all non-reference threads and to get information about threads and posts. Reference threads represent notifications that contain information about another thread. For example, if a user mentions someone in a post, the server generates a **MentionReference**-type thread that contains the link to the original post and other metadata about the post.
    
  
For more information about feed types, see  [Overview of feed types](work-with-social-feeds-in-sharepoint.md#bkmk_FeedTypes). For more information about reference threads, see  [Reference threads and digest threads in SharePoint social feeds](reference-threads-and-digest-threads-in-sharepoint-server-social-feeds.md).
  
    
    

> **Note:**
> Change the placeholder values for the **serverUrl** and **targetUser** variables before you run the code.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace SocialFeedCSOM
{
    class Program
    {
        static string owner;
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the target
            // server URL and target thread owner.
            const string serverUrl = "http://serverName/";
            const string targetUser = "domainName\\\\userName";

            // Get the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the SocialFeedManager instance. 
            // Load the instance to get the Owner property.
            SocialFeedManager feedManager = new SocialFeedManager(clientContext);
            clientContext.Load(feedManager, f => f.Owner);

            // Set parameters for the feed content that you want to retrieve.
            SocialFeedOptions feedOptions = new SocialFeedOptions();
            feedOptions.MaxThreadCount = 10; // default is 20

            // Get all feed types for current user and get the Personal feed
            // for the target user.
            ClientResult<SocialFeed> personalFeed = feedManager.GetFeed(SocialFeedType.Personal, feedOptions);
            ClientResult<SocialFeed> newsFeed = feedManager.GetFeed(SocialFeedType.News, feedOptions);
            ClientResult<SocialFeed> targetUserFeed = feedManager.GetFeedFor(targetUser, feedOptions);

            // Change the sort order to optimize the Timeline feed results.
            feedOptions.SortOrder = SocialFeedSortOrder.ByCreatedTime;
            ClientResult<SocialFeed> timelineFeed = feedManager.GetFeed(SocialFeedType.Timeline, feedOptions);

            // Run the request on the server.
            clientContext.ExecuteQuery();

            // Get the name of the current user within this instance.
            owner = feedManager.Owner.Name;

            // Iterate through the feeds and write the content.
            IterateThroughFeed(personalFeed.Value, SocialFeedType.Personal, true);
            IterateThroughFeed(newsFeed.Value, SocialFeedType.News, true);
            IterateThroughFeed(timelineFeed.Value, SocialFeedType.Timeline, true);
            IterateThroughFeed(targetUserFeed.Value, SocialFeedType.Personal, false);

            Console.ReadKey(false);
        }

        // Iterate through the feed and write to the console window.
        static void IterateThroughFeed(SocialFeed feed, SocialFeedType feedType, bool isCurrentUserOwner)
        {
            SocialThread[] threads = feed.Threads;

            // If this is the target user's feed, get the user's name.
            // A user is the owner of all threads in his or her Personal feed.
            if (!isCurrentUserOwner)
            {
                SocialThread firstThread = threads[0];
                owner = firstThread.Actors[firstThread.OwnerIndex].Name;
            }
            Console.WriteLine(string.Format("\\n{0} feed type for {1}:", feedType.ToString(), owner));

            // Iterate through each thread in the feed.
            foreach (SocialThread thread in threads)
            {

                // Ignore reference thread types.
                if (thread.ThreadType == SocialThreadType.Normal)
                {

                    // Get properties from the root post and thread. 
                    // If a thread contains more than two replies, the server returns
                    // a thread digest that contains only the two most recent replies.
                    // To get all replies, call SocialFeedManager.GetFullThread.
                    SocialPost rootPost = thread.RootPost;
                    SocialActor author = thread.Actors[rootPost.AuthorIndex];
                    Console.WriteLine(string.Format("  - {0} posted \\"{1}\\" on {2}. This thread has {3} replies.",
                        author.Name, rootPost.Text, rootPost.CreatedTime.ToShortDateString(), thread.TotalReplyCount));
                }
            }
        }
    }
}
```


## Code example: Delete posts and replies from the social feed by using the SharePoint .NET client object model
<a name="bkmk_DeletePosts"> </a>

The following code example deletes a post or a reply from the current user's personal feed. It shows how to:
  
    
    

- Get the **Personal** [feed type](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedType.aspx) for the current user by using the [GetFeed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeed.aspx) method.
    
  
- Iterate through the threads in the feed to get information about the root post and replies.
    
  
- Delete a root post, reply, or thread by using the  [DeletePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.DeletePost.aspx) method (deleting a root post deletes the whole thread).
    
  

> **Note:**
> Change the placeholder value for the **serverUrl** variable before you run the code.
  
    
    


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace SocialFeedCSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder value with the target SharePoint server.
            const string serverUrl = "http://serverName/";

            // Get the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the SocialFeedManager instance.
            SocialFeedManager feedManager = new SocialFeedManager(clientContext);

            Console.WriteLine("\\nCurrent user's personal feed:");

            // Set the parameters for the feed content that you want to retrieve.
            SocialFeedOptions feedOptions = new SocialFeedOptions();

            // Get the target owner's feed (posts and activities) and
            // then run the request on the server.
            ClientResult<SocialFeed> feed = feedManager.GetFeed(SocialFeedType.Personal, feedOptions);
            clientContext.ExecuteQuery();

            // Create a dictionary to store the Id property of each post and
            // reply. This code example stores the Id so you can select a post
            // or a reply to delete.
            Dictionary<int, string> idDictionary = new Dictionary<int, string>();

            // Iterate through each thread in the feed.
            for (int i = 0; i < feed.Value.Threads.Length; i++)
            {
                SocialThread thread = feed.Value.Threads[i];
                SocialPost rootPost = thread.RootPost;

                // Only keep posts that can be deleted.
                if (rootPost.Attributes.HasFlag(SocialPostAttributes.CanDelete)) 
                {
                    idDictionary.Add(i, rootPost.Id);

                    Console.WriteLine(string.Format("{0}. \\"{1}\\" has {2} replies.",
                        (i + 1), rootPost.Text, thread.TotalReplyCount));

                    // Get the replies.
                    // If a thread contains more than two replies, the server returns
                    // a thread digest that contains only the two most recent replies.
                    // To get all replies, call SocialFeedManager.GetFullThread.
                    if (thread.TotalReplyCount > 0)
                    {
                        foreach (SocialPost reply in thread.Replies)
                        {

                            // Only keep replies that can be deleted.
                            if (reply.Attributes.HasFlag(SocialPostAttributes.CanDelete)) 
                            {
                                i++;
                                idDictionary.Add(i, reply.Id);

                                SocialActor author = thread.Actors[reply.AuthorIndex];
                                Console.WriteLine(string.Format("\\t{0}. {1} replied \\"{2}\\"",
                                    (i + 1), author.Name, reply.Text));
                            }
                        }
                    }
                }
            }
            Console.Write("\\nEnter the number of the post or reply to delete. "
                + "(If you choose a root post, the whole thread is deleted.)");
            string postToDelete = "";
            int postNumber = int.Parse(Console.ReadLine()) - 1;
            idDictionary.TryGetValue(postNumber, out postToDelete);

            // Delete the reply and make the changes on the server.
            ClientResult<SocialThread> result = feedManager.DeletePost(postToDelete);
            clientContext.ExecuteQuery();

            // DeletePost returns digest thread if the deleted post is not the
            // root post. If it is the root post, the whole thread is deleted
            // and DeletePost returns null.
            if (result.Value != null)
            {
                SocialThread threadResult = result.Value;
                Console.WriteLine("\\nThe reply was deleted. The thread now has {0} replies.", threadResult.TotalReplyCount);
            }
            else
            {
                Console.WriteLine("\\nThe post and thread were deleted.");
            }
            Console.ReadKey(false);
        }
    }
}
```


## Next steps
<a name="bkmk_DeletePosts"> </a>

 [How to: Include mentions, tags, and links to sites and documents in posts in SharePoint](how-to-include-mentions-tags-and-links-to-sites-and-documents-in-posts-in-sharep.md)
  
    
    

## Additional resources
<a name="bk_addResources"> </a>


-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
    
  
-  [How to: Create and delete posts and retrieve the social feed by using the JavaScript object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-javascr.md)
    
  
-  [How to: Learn to read and write to the social feed by using the REST service in SharePoint](how-to-learn-to-read-and-write-to-the-social-feed-by-using-the-rest-service-in-s.md)
    
  
-  [Reference threads and digest threads in SharePoint social feeds](reference-threads-and-digest-threads-in-sharepoint-server-social-feeds.md)
    
  

