---
title: Read and write to the social feed by using the .NET client object model in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 3c15ede5-8a59-47e6-a0b2-c17ec6bf4ae1
---


# Read and write to the social feed by using the .NET client object model in SharePoint

Create a console application that reads and writes to the social feed by using the SharePoint .NET client object model.

## Prerequisites for creating a console application that reads and writes to the social feed by using the SharePoint .NET client object model
<a name="bkmk_Prereqs"> </a>

The console application that you'll create retrieves a target user's feed and prints the root post from each thread in a numbered list. Then, it publishes a simple text reply to the selected thread. The same method ( [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) ) is used to publish both posts and replies to the feed.
  
    
    
To create the console application, you'll need the following:
  
    
    

- SharePoint with My Site configured, with personal sites created for the current user and a target user, and with a few posts written by the target user
    
  
- Visual Studio 2012
    
  
- **Full Control** access permissions to the User Profile service application for the logged-on user
    
> [!NOTE]
> If you're not developing on the computer that is running SharePoint, get the  [SharePoint Client Components](http://www.microsoft.com/en-us/download/details.aspx?id=35585) download that contains SharePoint client assemblies.
  
    
    


### Core concepts to know about working with SharePoint social feeds
<a name="bkmk_CoreConcepts"> </a>

Table 1 contains links to articles that describe core concepts you should know before you get started.
  
    
    

**Table 1. Core concepts for working with SharePoint social feeds**


|**Article title**|**Description**|
|:-----|:-----|
| [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md) <br/> |Find out how to get started programming with social feeds and microblog posts, following people and content (documents, sites, and tags.md), and working with user profiles.  <br/> |
| [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md) <br/> |Learn about common programming tasks for working with social feeds and the API that you use to perform the tasks.  <br/> |
   

## Create the console application in Visual Studio 2012 and add references to client assemblies
<a name="bkmk_CreateApp"> </a>


1. On your development computer, open Visual Studio 2012.
    
  
2. On the menu bar, choose **File**, **New**, **Project**.
    
  
3. In the **New Project** dialog box, choose **.NET Framework 4.5** from the drop-down list at the top of the dialog box.
    
  
4. From the **Templates** list, choose **Windows**, and then choose the **Console Application** template.
    
  
5. Name the project ReadWriteMySite, and then choose the **OK** button.
    
  
6. Add references to the client assemblies, as follows:
    
   a. In **Solution Explorer**, open the shortcut menu for the **ReadWriteMySite** project, and then choose **Add Reference**.
  
   b. In the **Reference Manager** dialog box, choose the following assemblies:
    
     - **Microsoft.SharePoint.Client**
    
     - **Microsoft.SharePoint.Client.Runtime**
    
     - **Microsoft.SharePoint.Client.UserProfiles**  

   If you are developing on the computer that is running SharePoint, the assemblies are in the **Extensions** category. Otherwise, browse to the location that has the client assemblies you downloaded (see [SharePoint Client Components](http://www.microsoft.com/downloads/details.aspx?FamilyID=66da4a3e-e3b0-45d9-9e84-a84946fbf239)).
    
  
7. In the Program.cs file, add the following **using** statements.
    
```cs
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;
```


## Retrieve the social feed for a target user by using the SharePoint .NET client object model
<a name="bkmk_RetrieveFeed"> </a>


1. Declare variables for the server URL and target user's account credentials.
    
    ```cs
    const string serverUrl = "http://serverName/";
    const string targetUser = "domainName\\userName";
    ```

    > [!NOTE]
    > Remember to replace the  `http://serverName/` and `domainName\\userName` placeholder values before you run the code.
   
2. In the **Main** method, initialize the SharePoint client context.
    
    ```cs
    ClientContext clientContext = new ClientContext(serverUrl);
    ```

3. Create the  [SocialFeedManager](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.aspx) instance.
    
    ```cs
    SocialFeedManager feedManager = new SocialFeedManager(clientContext);
    ```

4. Specify the parameters for the feed content that you want to retrieve.
    
    ```cs
    SocialFeedOptions feedOptions = new SocialFeedOptions();
    feedOptions.MaxThreadCount = 10;
    ```

    The default options return the first 20 threads in the feed, sorted by last modified date.
  
5. Get the target user's feed.
    
    ```cs 
    ClientResult<SocialFeed> feed = feedManager.GetFeedFor(targetUser, feedOptions);
    clientContext.ExecuteQuery();
    ```

    [GetFeedFor](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetFeedFor.aspx) returns a **ClientResult<T>** object that stores the collection of threads in its [Value](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.ClientResult`1.Value.aspx) property.
    
  

## Iterate through and read from the social feed by using the SharePoint .NET client object model
<a name="bkmk_ReadFeed"> </a>

The following code iterates through the threads in the feed. It checks whether each thread has the  [CanReply](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialThreadAttributes.CanReply.aspx) attribute and then gets the thread identifier and the text of the root post. The code also creates a dictionary to store the thread identifier (which is used to reply to a thread) and writes the text of the root post to the console.

```cs
Dictionary<int, string> idDictionary = new Dictionary<int, string>();
for (int i = 0; i < feed.Value.Threads.Length; i++)
{
    SocialThread thread = feed.Value.Threads[i];
    string postText = thread.RootPost.Text;
    if (thread.Attributes.HasFlag(SocialThreadAttributes.CanReply))
    {
        idDictionary.Add(i, thread.Id);
        Console.WriteLine("\\t" + (i + 1) + ". " + postText);
    }
}
```


## Post a reply to the social feed by using the SharePoint .NET client object model
<a name="bkmk_WriteFeed"> </a>


1. (UI-related only) Get the thread to reply to and prompt for the user's reply.
    
```cs
Console.Write("Which post number do you want to reply to?  ");
string threadToReplyTo = "";
int threadNumber = int.Parse(Console.ReadLine()) - 1;
idDictionary.TryGetValue(threadNumber, out threadToReplyTo);
Console.Write("Type your reply:  ");
```

2. Define the reply. The following code gets the reply's text from the console application.
    
```cs
SocialPostCreationData postCreationData = new SocialPostCreationData();
postCreationData.ContentText = Console.ReadLine();
```

3. Publish the reply. The  _threadToReplyTo_ parameter represents of the thread's [Id](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialThread.Id.aspx) property.
    
```cs
feedManager.CreatePost(threadToReplyTo, postCreationData);
clientContext.ExecuteQuery();
```

    > [!NOTE]
    > The  [CreatePost](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.CreatePost.aspx) method is also used to publish a root post to the current user's feed by passing **null** for the first parameter.

4. (UI-related only) Exit the program.
    
    ```cs
    Console.WriteLine("Your reply was published.");
    Console.ReadKey(false);
    ```

5. To test the console application, on the menu bar, choose **Debug**, **Start Debugging**.
    
  

## Code example: Retrieve a feed and reply to a post by using the SharePoint .NET client object model
<a name="bkmk_CodeExample"> </a>

The following example is the complete code from the Program.cs file.
  
```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace ReadWriteMySite
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the target server running SharePoint and the
            // target thread owner.
            const string serverUrl = "http://serverName/";
            const string targetUser = "domainName\\userName";

            // Connect to the client context.
            ClientContext clientContext = new ClientContext(serverUrl);

            // Get the SocialFeedManager instance.
            SocialFeedManager feedManager = new SocialFeedManager(clientContext);

            // Specify the parameters for the feed content that you want to retrieve.
            SocialFeedOptions feedOptions = new SocialFeedOptions();
            feedOptions.MaxThreadCount = 10;

            // Get the target owner's feed (posts and activities) and then run the request on the server.
            ClientResult<SocialFeed> feed = feedManager.GetFeedFor(targetUser, feedOptions);
            clientContext.ExecuteQuery();

            // Create a dictionary to store the Id property of each thread. This code example stores
            // the ID so a user can select a thread to reply to from the console application.
            Dictionary<int, string> idDictionary = new Dictionary<int, string>();
            for (int i = 0; i < feed.Value.Threads.Length; i++)
            {
                SocialThread thread = feed.Value.Threads[i];

                // Keep only the threads that can be replied to.
                if (thread.Attributes.HasFlag(SocialThreadAttributes.CanReply))
                {
                    idDictionary.Add(i, thread.Id);

                    // Write out the text of the post.
                    Console.WriteLine("\\t" + (i + 1) + ". " + thread.RootPost.Text);
                }
            }
            Console.Write("Which post number do you want to reply to?  ");

            string threadToReplyTo = "";
            int threadNumber = int.Parse(Console.ReadLine()) - 1;
            idDictionary.TryGetValue(threadNumber, out threadToReplyTo);

            Console.Write("Type your reply:  ");

            // Define properties for the reply.
            SocialPostCreationData postCreationData = new SocialPostCreationData();
            postCreationData.ContentText = Console.ReadLine();
            
            // Post the reply and make the changes on the server.
            feedManager.CreatePost(threadToReplyTo, postCreationData);
            clientContext.ExecuteQuery();

            Console.WriteLine("Your reply was published.");
            Console.ReadKey(false);

            // TODO: Add error handling and input validation.
        }
    }
}
```


## Next steps
<a name="SP15ReadWriteSocial_nextsteps"> </a>

To learn how to do more read tasks and write tasks with the social feed by using the .NET client object model, see the following:
  
    
    

-  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md)
    
  

## See also
<a name="SP15ReadWriteSocial_addlresources"> </a>


-  [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md)
    
  
-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
    
  

