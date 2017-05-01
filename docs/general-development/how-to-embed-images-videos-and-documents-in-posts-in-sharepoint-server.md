---
title: How to Embed images, videos, and documents in posts in SharePoint Server 2013
ms.prod: SHAREPOINT
ms.assetid: 9927b9e7-daea-4261-80fa-4cc25f489e22
---


# How to: Embed images, videos, and documents in posts in SharePoint Server 2013
Learn how to add  [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) objects to microblog posts, which render as embedded pictures, videos, and documents in SharePoint Server 2013 social feeds.
In a social feed, the simplest form of post content contains only text, but you can also add embedded pictures, videos, and documents. To do this, you use the  [Attachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.Attachment.aspx) property on the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that defines the post. Posts can contain one attachment, which is represented by a [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) object.
  
    
    


> **Note:**
> To add a mention, tag, or link to a post's content, you add a  [SocialDataItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialDataItem.aspx) object to the [SocialPostCreationData.ContentItems](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.ContentItems.aspx) property. For more information, see [How to: Include mentions, tags, and links to sites and documents in posts in SharePoint Server 2013](how-to-include-mentions-tags-and-links-to-sites-and-documents-in-posts-in-sharep.md). 
  
    
    


The API described in this article is from the .NET client object model. If you're using another API, such as the JavaScript object model, the object names or corresponding API might be different. See  [Additional resources](#bk_addresources) for links to documentation for related APIs.
  
    
    


## Prerequisites for using the code examples to add attachments to a post
<a name="bk_preReqs"> </a>

The code examples in this article show how to add image, video, and document attachments to microblog posts. These examples are from a console application that uses the following SharePoint assemblies:
  
    
    

- Microsoft.SharePoint.Client
    
  
- Microsoft.SharePoint.Client.Runtime
    
  
- Microsoft.SharePoint.Client.UserProfilies
    
  
To use the examples in this article, you'll need to upload an image, a video, and a document. To use the video example, the video feature must be enabled on the server and the video file must be stored in an asset library. To use the document example in an on-premises environment, Office Online must be configured in the environment. For more information, see  [Plan digital asset libraries in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/ee414275.aspx) and [Configure SharePoint 2013 to use Office Online](http://technet.microsoft.com/en-us/library/ff431687.aspx).
  
    
    
For instructions about how to set up your development environment and create a console application, see  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint 2013](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md).
  
    
    

## Example: Embed an image in a post in SharePoint Server 2013
<a name="bkmk_addImage"> </a>

The following code example publishes a post that contains an embedded image. It shows how to:
  
    
    

- Create a  [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) object that represents the image. The [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) specifies the [SocialAttachmentKind.Image](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachmentKind.Image.aspx) field and the URI of the image file.
    
  
- Add the image object to the  [Attachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.Attachment.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that's used to create the post.
    
  
Change the placeholder values for the URL variables before you run the code.
  
    
    



```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace EmbedImageInPost
{
    class Program
    {
        static void Main(string[] args)
        {

            // Replace the following placeholder values with the actual values.
            const string serverUrl = "http://serverName/siteName/";
            const string imageUrl = "http://serverName/Shared%20Documents/imageName.jpg";

            // Define the image attachment that you want to embed in the post.
            SocialAttachment attachment = new SocialAttachment()
            {
                AttachmentKind = SocialAttachmentKind.Image,
                Uri = imageUrl
            };

            // Define properties for the post and add the attachment.
            SocialPostCreationData postCreationData = new SocialPostCreationData();
            postCreationData.ContentText = "Look at this!";
            postCreationData.Attachment = attachment;

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


## Embed a video in a post in SharePoint Server 2013
<a name="bkmk_addVideo"> </a>

The following code example publishes a post that contains an embedded video. It shows how to:
  
    
    

- Get the  [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) object that represents the video attachment by using the [SocialFeedManager.GetPreview](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetPreview.aspx) method.
    
  
- Add the video attachment to the  [Attachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.Attachment.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that's used to create the post.
    
  
This example requires the video features to be enabled on the server and the video file to be uploaded to an asset library. See the  [prerequisites for using the code examples](how-to-embed-images-videos-and-documents-in-posts-in-sharepoint-server.md#bk_preReqs) for more information.
  
    
    
Change the placeholder values for the URL variables before you run the code.
  
    
    



```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace EmbedVideoInPost
{
    class Program
    {
        static void Main(string[] args)
        {
            // Replace the following placeholder values with the actual values.
            const string serverUrl = "http://serverName/siteName/";
            const string videoUrl = "http://serverName/Asset%20Library/fileName?Web=1";

            try
            {

                // Get the context and the SocialFeedManager instance.
                ClientContext clientContext = new ClientContext(serverUrl);
                SocialFeedManager feedManager = new SocialFeedManager(clientContext);

                // Get the video attachment from the server.
                ClientResult<SocialAttachment> attachment = feedManager.GetPreview(videoUrl);
                clientContext.ExecuteQuery();

                // Define properties for the post and add the attachment.
                SocialPostCreationData postCreationData = new SocialPostCreationData();
                postCreationData.ContentText = "Look at this!";
                postCreationData.Attachment = attachment.Value;

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


## Example: Embed a document in a post in SharePoint Server 2013
<a name="bkmk_addDoc"> </a>

The following code example publishes a post that contains an embedded document. It shows how to:
  
    
    

- Get the  [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) object that represents the document attachment by using the [SocialFeedManager.GetPreview](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialFeedManager.GetPreview.aspx) method.
    
  
- Add the document attachment to the  [Attachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.Attachment.aspx) property of the [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) object that's used to create the post.
    
  
To use this example in an on-premises environment, your environment must be configured to use Office Online. See the  [prerequisites for using the code examples](how-to-embed-images-videos-and-documents-in-posts-in-sharepoint-server.md#bk_preReqs) for more information. Otherwise, you can post a link to the document as described in [How to: Include mentions, tags, and links to sites and documents in posts in SharePoint Server 2013](how-to-include-mentions-tags-and-links-to-sites-and-documents-in-posts-in-sharep.md).
  
    
    
Change the placeholder values for the URL variables before you run the code.
  
    
    



```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace EmbedDocumentInPost
{
    class Program
    {
        static void Main(string[] args)
        {
            // Replace the following placeholder values with the actual values.
            const string serverUrl = "http://serverName";
            const string documentUrl = "http://serverName/Shared%20Documents/fileName.docx";

            try
            {

                // Get the context and the SocialFeedManager instance.
                ClientContext clientContext = new ClientContext(serverUrl);
                SocialFeedManager feedManager = new SocialFeedManager(clientContext);

                // Get the document attachment from the server.
                ClientResult<SocialAttachment> attachment = feedManager.GetPreview(documentUrl);
                clientContext.ExecuteQuery();

                // Define properties for the post and add the attachment.
                SocialPostCreationData postCreationData = new SocialPostCreationData();
                postCreationData.ContentText = "Post with a document.";
                postCreationData.Attachment = attachment.Value;

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


-  [Work with social feeds in SharePoint 2013](work-with-social-feeds-in-sharepoint.md)
    
  
-  [How to: Include mentions, tags, and links to sites and documents in posts in SharePoint Server 2013](how-to-include-mentions-tags-and-links-to-sites-and-documents-in-posts-in-sharep.md)
    
  
-  [SocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialPostCreationData.aspx) and [SocialAttachment](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Social.SocialAttachment.aspx) in the client object models
    
  
-  [SocialPostCreationData](http://msdn.microsoft.com/library/f0e1fa3e-6fc9-48e0-5570-92091abfef33%28Office.15%29.aspx) and [SocialAttachment](http://msdn.microsoft.com/library/dfdee790-a1b0-19c8-0e92-5a6e058ba4db%28Office.15%29.aspx) in the JavaScript object model
    
  
-  [Social feed REST API reference for SharePoint 2013](social-feed-rest-api-reference-for-sharepoint.md)
    
  
-  [SPSocialPostCreationData](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialPostCreationData.aspx) and [SPSocialAttachment](https://msdn.microsoft.com/library/Microsoft.Office.Server.Social.SPSocialAttachment.aspx) in the server object model
    
  

