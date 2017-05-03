---
title: How to Include mentions, tags, and links to sites and documents in posts in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 975da333-372b-4bf6-a3f4-7452db369f04
---


# How to: Include mentions, tags, and links to sites and documents in posts in SharePoint
Learn how to add  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) objects to microblog posts, which render as mentions, tags, or links in SharePoint social feeds.
In a social feed, the simplest form of post content contains only text, but you can also add links that render as mentions, tags, or links to websites, SharePoint sites, and documents. To do this, you add  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) objects to the [ContentItems](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.ContentItems.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that defines the post. Posts can contain multiple links.
  
    
    


> **Note:**
> To add embedded pictures, videos, or documents to a post's content, you add a  [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) object to the [SocialPostCreationData.Attachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.Attachment.aspx) property. For more information, see [How to: Embed images, videos, and documents in posts in SharePoint](how-to-embed-images-videos-and-documents-in-posts-in-sharepoint-server.md). 
  
    
    


The API described in this article is from the .NET client object model. However, if you're using another API, such as the JavaScript object model, the object names or corresponding API might be different. See  [Additional resources](#bk_addresources) for links to documentation for related APIs.
  
    
    


## Prerequisites for using the code examples to add links to a post in SharePoint
<a name="bk_preReqs"> </a>

The code examples in this article show how to add links to microblog posts. These examples are from console applications that use the following SharePoint assemblies:
  
    
    

- Microsoft.SharePoint.Client
    
  
- Microsoft.SharePoint.Client.Runtime
    
  
- Microsoft.SharePoint.Client.UserProfilies
    
  
For instructions about how to set up your development environment and create a console application, see  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md).
  
    
    

## Example: Include links to websites, SharePoint sites, and documents in a post in SharePoint
<a name="bkmk_addLinks"> </a>

The following code example publishes a post that contains links to a website, a SharePoint site, and a document. It shows how to:
  
    
    

- Create  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) objects that represent the links. Each instance sets the [SocialDataItemType](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItemType.aspx) field for the link type, the display text for the link, and the link URI.
    
  
- Add placeholders to the post text to indicate where the link's display text should appear.
    
  
- Add the link objects to the  [ContentItems](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.ContentItems.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that's used to create the post.
    
  

> **Note:**
> Currently, SharePoint handles links to websites, SharePoint sites, and documents in the same way, but as a best practice, choose the  [Site](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItemType.Site.aspx) type and the [Document](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItemType.Document.aspx) type for SharePoint sites and documents.
  
    
    

In the social feed, clicking a link to a website, SharePoint site, or document opens the item in a separate browser window.
  
    
    

> **Note:**
> Change the placeholder values for the URL variables before you run the code. 
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace IncludeLinksInPost
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the actual values.
            const string serverUrl = "http://serverName/siteName/";
            const string websiteLinkUrl = "http://bing.com";
            const string siteLinkUrl = "http://serverName/siteName/";
            const string docLinkUrl = "http://serverName/Shared%20Documents/docName.txt";

            // Define the link to a website that you want to include in the post.
            SocialDataItem websiteLink = new SocialDataItem
            {
                ItemType = SocialDataItemType.Link,
                Text = "link to a website",
                Uri = websiteLinkUrl
            };

            // Define the link to a SharePoint site that you want to include in the post.
            SocialDataItem siteLink = new SocialDataItem
            {
                ItemType = SocialDataItemType.Site,
                Text = "link to a SharePoint site",
                Uri = siteLinkUrl
            };

            // Define the link to a document that you want to include in the post.
            SocialDataItem docLink = new SocialDataItem
            {
                ItemType = SocialDataItemType.Document,
                Text = "link to a document",
                Uri = docLinkUrl
            };

            // Add the links to the post's creation data.
            // Put placeholders ({n}) where you want the links to appear in the post text,
            // and then add the links to the post's content items.
            SocialPostCreationData postCreationData = new SocialPostCreationData();
            postCreationData.ContentText = "Check out this {0}, {1}, and {2}.";
            postCreationData.ContentItems = new SocialDataItem[3] { 
                    websiteLink, 
                    siteLink, 
                    docLink 
                };
            try
            {

                // Get the context and the SocialFeedManager instance.
                ClientContext clientContext = new ClientContext(serverUrl);
                SocialFeedManager feedManager = new SocialFeedManager(clientContext);

                // Publish the post. This is a root post to the user's feed, so specify
                // null for the targetId parameter.
                feedManager.CreatePost(null, postCreationData);
                clientContext.ExecuteQuery();
                Console.Write("The post was published.");
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.Write("Error publishing the post: " + ex.Message);
                Console.ReadLine();
            }
        }
    }
}

```


## Example: Mention someone in a post in SharePoint
<a name="bkmk_addMention"> </a>

The following code example publishes a post that mentions a user. It shows how to:
  
    
    

- Create a  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) object to represent a mention, which is a link to a user. The [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) specifies the [SocialDataItemType.User](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItemType.User.aspx) field and the mentioned person's account name. You can set the account name by using either the person's login or email address.
    
  
- Add a placeholder to the post text to indicate where the mentioned person's display name should appear.
    
  
- Add the  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) to the [ContentItems](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.ContentItems.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that's used to create the post.
    
  
In the social feed, clicking a mention redirects to the mentioned person's **About** page.
  
    
    

> **Note:**
> Change the placeholder values for the **serverURL** and **accountName** variables before you run the code.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace IncludeMentionInPost
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the actual values.
            const string serverUrl = "http://serverName/siteName/";
            const string accountName = @"domain\\name or email address";

            // Define the mention link that you want to include in the post.
            SocialDataItem userMentionLink = new SocialDataItem
            {
                ItemType = SocialDataItemType.User,
                AccountName = accountName
            };

            // Add the mention to the post's creation data.
            // Put a placeholder ({0}) where you want the mention to appear in the post text,
            // and then add the mention to the post's content items.
            SocialPostCreationData postCreationData = new SocialPostCreationData();
            postCreationData.ContentText = "{0} does great work!";
            postCreationData.ContentItems = new SocialDataItem[1] { userMentionLink, };

            try
            {

                // Get the context and the SocialFeedManager instance.
                ClientContext clientContext = new ClientContext(serverUrl);
                SocialFeedManager feedManager = new SocialFeedManager(clientContext);

                // Publish the post. This is a root post to the user's feed, so specify
                // null for the targetId parameter.
                feedManager.CreatePost(null, postCreationData);
                clientContext.ExecuteQuery();
                Console.Write("The post was published.");
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.Write("Error publishing the post: " + ex.Message);
                Console.ReadLine();
            }
        }
    }
}

```


## Example: Include a tag in a post in SharePoint
<a name="bkmk_addTag"> </a>

The following code example publishes a post that includes a tag. It shows how to:
  
    
    

- Create a  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) object to represent the tag. The [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) specifies the [SocialDataItemType.Tag](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItemType.Tag.aspx) field and the tag name, which must include a **#** character.
    
  
- Add a placeholder to the post text to indicate where the tag should appear.
    
  
- Add the  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) to the [ContentItems](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.ContentItems.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that's used to create the post.
    
  
In the social feed, clicking a tag redirects to the tag's **About** page. If the tag doesn't already exist, the server creates it.
  
    
    

> **Note:**
> Change the placeholder values for the **serverURL** and **tagName** variables before you run the code.
  
    
    




```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace IncludeTagInPost
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the actual values.
            const string serverUrl = "http://serverName/siteName/";
            const string tagName = "#" + "tagName";

            // Define the link to a tag that you want to include in the post. If the tag is new, the
            // server adds it to the tags collection.
            SocialDataItem tagLink = new SocialDataItem
            {
                ItemType = SocialDataItemType.Tag,
                Text = tagName
            };

            // Add the tag to the post's creation data.
            // Put a placeholder ({0}) where you want the tag to appear in the post text,
            // and then add the tag to the post's content items.
            SocialPostCreationData postCreationData = new SocialPostCreationData();
            postCreationData.ContentText = "I like {0}.";
            postCreationData.ContentItems = new SocialDataItem[1] { tagLink };

            try
            {

                // Get the context and the SocialFeedManager instance.
                ClientContext clientContext = new ClientContext(serverUrl);
                SocialFeedManager feedManager = new SocialFeedManager(clientContext);

                // Publish the post. This is a root post to the user's feed, so specify
                // null for the targetId parameter.
                feedManager.CreatePost(null, postCreationData);
                clientContext.ExecuteQuery();
                Console.Write("The post was published.");
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.Write("Error publishing the post: " + ex.Message);
                Console.ReadLine();
            }
        }
    }
}

```


## Additional resources
<a name="bk_addresources"> </a>


-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
    
  
-  [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) and [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) in the client object models
    
  
-  [SocialPostCreationData](http://msdn.microsoft.com/library/f0e1fa3e-6fc9-48e0-5570-92091abfef33%28Office.15%29.aspx) and [SocialDataItem](http://msdn.microsoft.com/library/757e7b62-66a6-b03f-0ff0-769a42eb2b4a%28Office.15%29.aspx) in the JavaScript object model
    
  
-  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md)
    
  
-  [SPSocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialPostCreationData.aspx) and [SPSocialDataItem](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialDataItem.aspx) in the server object model
    
  

