---
title: How to Follow documents and sites by using the .NET client object model in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 84366e01-4961-459d-8109-2f1d2d714353
---


# How to: Follow documents and sites by using the .NET client object model in SharePoint
Learn how to work with Following Content features by using the SharePoint .NET client object model.
## How do I use the .NET client object model to follow content?
<a name="bk_intro"> </a>

SharePoint users can follow documents, sites, and tags can follow documents, sites, and tags to get updates about the items in their newsfeeds and to quickly open followed documents and sites. You can use the .NET client object model in your app or solution to start following content, stop following content, and get followed content on behalf of the current user. This article shows you how to create a console application that uses the .NET client object model to work with Following Content features for documents and sites.
  
    
    
The following objects are the primary APIs for Following Content tasks:
  
    
    

-  [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) provides methods for managing a user's list of followed actors.
    
  
-  [SocialActor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActor.aspx) represents a document, site, or tag that the server returns in response to a client-side request.
    
  
-  [SocialActorInfo](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorInfo.aspx) specifies a document, site, or tag in client-side requests to the server.
    
  
-  [Microsoft.SharePoint.Client.Social.SocialActorType](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorType.aspx) and [Microsoft.SharePoint.Client.Social.SocialActorTypes](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialActorTypes.aspx) specify content types in client-side requests to the server.
    
  

> **Note:**
> You also use these APIs for Following People tasks, but the **GetSuggestions** and **GetFollowers** methods available from [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) only support following people, not content. For more information about how you can use [SocialFollowingManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.aspx) , see [Follow content in SharePoint](follow-content-in-sharepoint) and [Follow people in SharePoint](follow-people-in-sharepoint). For code examples that show how to follow people, see  [How to: Follow people by using the .NET client object model in SharePoint](how-to-follow-people-by-using-the-net-client-object-model-in-sharepoint). 
  
    
    


## Prerequisites for setting up your development environment to work with Following Content features by using the SharePoint .NET client object model
<a name="bkmk_SetUpDevEnv"> </a>

To create a console application that uses the .NET client object model to work with Following Content features for documents and sites, you'll need the following:
  
    
    

- SharePoint with My Site configured, with the My Site site created for the current user, and with a document uploaded to a SharePoint document library
    
  
- Visual Studio 2012
    
  
- **Full Control** access permissions to the User Profile service application for the logged-on user
    
  

> **Note:**
> If you are not developing on the computer that is running SharePoint, get the  [SharePoint Client Components](http://www.microsoft.com/en-us/download/details.aspx?id=35585) download that contains SharePoint client assemblies.
  
    
    


## Create a console application to work with Following Content features by using the SharePoint .NET client object model
<a name="bkmk_CreateConsoleApp"> </a>


1. In Visual Studio, choose **File**, **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
3. In the **Templates** list, choose **Windows**, and then choose the **Console Application** template.
    
  
4. Name the project FollowContentCSOM, and then choose the **OK** button.
    
  
5. Add references to the following assemblies:
    
  - **Microsoft.SharePoint.Client**   
  - **Microsoft.SharePoint.ClientRuntime**
  - **Microsoft.SharePoint.Client.UserProfiles**
    
6. Replace the contents of the **Program** class with the code example from one of the following scenarios:
    
  -  [Start and stop following content](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep#bkmk_FollowContent)  
  -  [Get followed content for the current user](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep#bkmk_GetFollowed)
    
7. To test the console application, on the menu bar, choose **Debug**, **Start Debugging**.
    
  

## Code example: Start and stop following content by using the SharePoint .NET client object model
<a name="bkmk_FollowContent"> </a>

The following code example makes the current user start following or stop following a target item. It shows how to:
  
    
    

- Check whether the current user is following a particular document or site by using the  [IsFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.IsFollowed.aspx) method.
    
  
- Start following a document or site by using the  [Follow](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.Follow.aspx) method.
    
  
- Stop following a document or site by using the  [StopFollowing](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.StopFollowing.aspx) method.
    
  
- Get the count of documents or sites that the current user is following by using the  [GetFollowedCount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowedCount.aspx) method.
    
  
This code example uses the  [SocialFollowResult](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowResult.aspx) object that is returned by the [Follow](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.Follow.aspx) method to determine whether to start or stop following the target item.
  
    
    

> **Note:**
> Change the placeholder values for the **serverUrl** and **contentUrl** variables before you run the code. To use a site instead of a document, use the variables that are commented out.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace FollowContentCSOM
{
    class Program
    {
        static ClientContext clientContext;
        static SocialFollowingManager followingManager;
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the URL of the target
            // server and target document (or site).
            const string serverUrl = "http://serverName";
            const string contentUrl = @"http://serverName/libraryName/fileName";
            const SocialActorType contentType = SocialActorType.Document;
            // Do not use a trailing '/' for a subsite.
            //const string contentUrl = @"http://serverName/subsiteName"; 
            //const SocialActorType contentType = SocialActorType.Site;

            // Get the client context.
            clientContext = new ClientContext(serverUrl);

            // Get the SocialFeedManager instance.
            followingManager = new SocialFollowingManager(clientContext);

            // Create a SocialActorInfo object to represent the target item.
            SocialActorInfo actorInfo = new SocialActorInfo();
            actorInfo.ContentUri = contentUrl;
            actorInfo.ActorType = contentType;

            // Find out whether the current user is following the target item.
            ClientResult<bool> isFollowed = followingManager.IsFollowed(actorInfo);

            // Get the information from the server.
            clientContext.ExecuteQuery();

            Console.WriteLine("Was the current user following the target {0}? {1}\\n",
                actorInfo.ActorType.ToString().ToLower(), isFollowed.Value);
            Console.Write("Initial count: ");

            // Get the current count of followed items.
            WriteFollowedCount(actorInfo.ActorType);

            // Try to follow the target item. If the result is OK, then
            // the request succeeded.
            ClientResult<SocialFollowResult> result = followingManager.Follow(actorInfo);
            clientContext.ExecuteQuery();

            // If the result is AlreadyFollowing, then stop following 
            // the target item.
            if (result.Value == SocialFollowResult.AlreadyFollowing)
            {
                followingManager.StopFollowing(actorInfo);
                clientContext.ExecuteQuery();
            }

            // Handle other SocialFollowResult return values.
            else if (result.Value == SocialFollowResult.LimitReached
                || result.Value == SocialFollowResult.InternalError)
            {
                Console.WriteLine(result.Value);
            }

            // Get the updated count of followed items.
            Console.Write("Updated count: ");
            WriteFollowedCount(actorInfo.ActorType);
            Console.ReadKey();
        }

        // Get the count of the items that the current user is following.
        static void WriteFollowedCount(SocialActorType type)
        {

            // Set the parameter for the GetFollowedCount method, and
            // handle the case where the item is a site. 
            SocialActorTypes types = SocialActorTypes.Documents;
            if (type != SocialActorType.Document)
            {
                types = SocialActorTypes.Sites;
            }

            ClientResult<int> followedCount = followingManager.GetFollowedCount(types);
            clientContext.ExecuteQuery();
            Console.WriteLine("{0} followed {1}", followedCount.Value, types.ToString().ToLower());
        }
    }
}
```


## Code example: Get followed content by using the SharePoint .NET client object model
<a name="bkmk_GetFollowed"> </a>

The following code example gets the documents and sites that the current user is following and gets information about the user's Following Content status. It shows how to:
  
    
    

- Check whether the current user is following the target document and site by using the  [IsFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.IsFollowed.aspx) method.
    
  
- Get the count of documents and sites that the current user is following by using the  [GetFollowedCount](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowedCount.aspx) method.
    
  
- Get the documents and sites that the current user is following by using the  [GetFollowed](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFollowingManager.GetFollowed.aspx) method.
    
  
- Iterate through the groups of content and get each item's name, content URI, and URI.
    
  

> **Note:**
> Change the placeholder value for the **serverUrl**, **docContentUrl**, and **siteContentUrl** variables before you run the code.
  
    
    


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace FollowContentCSOM
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the URLs of
            // the target server, document, and site.
            const string serverUrl = "http://serverName";
            const string docContentUrl = @"http://serverName/libraryName/fileName";
            const string siteContentUrl = @"http://serverName/subsiteName"; // do not use a trailing '/' for a subsite

            // Get the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the SocialFollowingManager instance.
            SocialFollowingManager followingManager = new SocialFollowingManager(clientContext);

            // Create SocialActorInfo objects to represent the target 
            // document and site.
            SocialActorInfo docActorInfo = new SocialActorInfo();
            docActorInfo.ContentUri = docContentUrl;
            docActorInfo.ActorType = SocialActorType.Document;
            SocialActorInfo siteActorInfo = new SocialActorInfo();
            siteActorInfo.ContentUri = siteContentUrl;
            siteActorInfo.ActorType = SocialActorType.Site;

            // Find out whether the current user is following the target
            // document and site.
            ClientResult<bool> isDocFollowed = followingManager.IsFollowed(docActorInfo);
            ClientResult<bool> isSiteFollowed = followingManager.IsFollowed(siteActorInfo);

            // Get the count of documents and sites that the current
            // user is following.
            ClientResult<int> followedDocCount = followingManager.GetFollowedCount(SocialActorTypes.Documents);
            ClientResult<int> followedSiteCount = followingManager.GetFollowedCount(SocialActorTypes.Sites);

            // Get the documents and the sites that the current user
            // is following.
            ClientResult<SocialActor[]> followedDocResult = followingManager.GetFollowed(SocialActorTypes.Documents);
            ClientResult<SocialActor[]> followedSiteResult = followingManager.GetFollowed(SocialActorTypes.Sites);

            // Get the information from the server.
            clientContext.ExecuteQuery();

            // Write the results to the console window.
            Console.WriteLine("Is the current user following the target document? {0}", isDocFollowed.Value);
            Console.WriteLine("Is the current user following the target site? {0}", isSiteFollowed.Value);
            if (followedDocCount.Value > 0)
            {
                IterateThroughContent(followedDocCount.Value, followedDocResult.Value);
            } if (followedSiteCount.Value > 0)
            {
                IterateThroughContent(followedSiteCount.Value, followedSiteResult.Value);
            }
            Console.ReadKey();
        }

        // Iterate through the items and get each item's display
        // name, content URI, and absolute URI.
        static void IterateThroughContent(int count, SocialActor[] actors)
        {
            SocialActorType actorType = actors[0].ActorType;
            Console.WriteLine("\\nThe current user is following {0} {1}s:", count, actorType.ToString().ToLower());
            foreach (SocialActor actor in actors)
            {
                Console.WriteLine("  - {0}", actor.Name);
                Console.WriteLine("\\tContent URI: {0}", actor.ContentUri);
                Console.WriteLine("\\tURI: {0}", actor.Uri);
            }
        }
    }
}
```


## Additional resources
<a name="bkmk_AddtionalResources"> </a>


-  [Follow content in SharePoint](follow-content-in-sharepoint)
    
  
-  [How to: Follow documents, sites, and tags by using the REST service in SharePoint](how-to-follow-documents-sites-and-tags-by-using-the-rest-service-in-sharepoint-2)
    
  
-  [How to: Follow people by using the .NET client object model in SharePoint](how-to-follow-people-by-using-the-net-client-object-model-in-sharepoint)
    
  

