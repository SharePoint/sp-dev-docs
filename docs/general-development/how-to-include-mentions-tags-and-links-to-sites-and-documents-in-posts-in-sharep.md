---
title: Include mentions, tags, and links to sites and documents in posts in SharePoint
description: Learn how to add SocialDataItem objects to microblog posts, which render as mentions, tags, or links in SharePoint social feeds.
ms.date: 09/25/2017
ms.assetid: 975da333-372b-4bf6-a3f4-7452db369f04
ms.localizationpriority: medium
---

# Include mentions, tags, and links to sites and documents in posts in SharePoint

Learn how to add  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) objects to microblog posts, which render as mentions, tags, or links in SharePoint social feeds.

> [!IMPORTANT]
> The SharePoint social feed (microblogging) APIs, including `SocialDataItem` and related `SocialFeedManager` methods, are considered **legacy**. They are primarily intended for existing SharePoint Server solutions and are not recommended for new development. For modern scenarios, consider using Microsoft Graph or Viva Engage APIs where applicable.

> [!NOTE]
> This API is part of the SharePoint Client-Side Object Model (CSOM) and is designed for SharePoint Server environments where social feed features are enabled. Availability and behavior may differ in SharePoint Online.

In a social feed, the simplest form of post content contains only text, but you can also add links that render as mentions, tags, or links to websites, SharePoint sites, and documents. To do this, you add  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) objects to the [ContentItems](/previous-versions/office/sharepoint-csom/jj164726(v=office.15)) property of the [SocialPostCreationData](/previous-versions/office/sharepoint-csom/jj163520(v=office.15)) object that defines the post. Posts can contain multiple links.

> [!NOTE]
> To add embedded pictures, videos, or documents to a post's content, you add a  [SocialAttachment](/previous-versions/office/sharepoint-csom/jj163900(v=office.15)) object to the [SocialPostCreationData.Attachment](/previous-versions/office/sharepoint-csom/jj164583(v=office.15)) property. For more information, see [How to: Embed images, videos, and documents in posts in SharePoint](how-to-embed-images-videos-and-documents-in-posts-in-sharepoint-server.md).

The API described in this article is from the .NET client object model. However, if you're using another API, such as the JavaScript object model, the object names or corresponding API might be different. See  [Additional resources](#bk_addresources) for links to documentation for related APIs.

## Prerequisites for using the code examples to add links to a post in SharePoint
<a name="bk_preReqs"> </a>

The code examples in this article show how to add links to microblog posts. These examples are from console applications that use the following SharePoint assemblies:

- Microsoft.SharePoint.Client
- Microsoft.SharePoint.Client.Runtime
- Microsoft.SharePoint.Client.UserProfiles

For instructions about how to set up your development environment and create a console application, see  [How to: Create and delete posts and retrieve the social feed by using the .NET client object model in SharePoint](how-to-create-and-delete-posts-and-retrieve-the-social-feed-by-using-the-net-cli.md).

## Example: Include links to websites, SharePoint sites, and documents in a post in SharePoint
<a name="bkmk_addLinks"> </a>

The following code example publishes a post that contains links to a website, a SharePoint site, and a document. It shows how to:

- Create  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) objects that represent the links. Each instance sets the [SocialDataItemType](/previous-versions/office/sharepoint-csom/jj164610(v=office.15)) field for the link type, the display text for the link, and the link URI.
- Add placeholders to the post text to indicate where the link's display text should appear.
- Add the link objects to the  [ContentItems](/previous-versions/office/sharepoint-csom/jj164726(v=office.15)) property of the [SocialPostCreationData](/previous-versions/office/sharepoint-csom/jj163520(v=office.15)) object that's used to create the post.

> [!NOTE]
> Currently, SharePoint handles links to websites, SharePoint sites, and documents in the same way, but as a best practice, choose the  [Site](/previous-versions/office/sharepoint-csom/jj164610(v=office.15)) type and the [Document](/previous-versions/office/sharepoint-csom/jj164610(v=office.15)) type for SharePoint sites and documents.

In the social feed, clicking a link to a website, SharePoint site, or document opens the item in a separate browser window.

> [!NOTE]
> Change the placeholder values for the URL variables before you run the code.


```csharp

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

- Create a  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) object to represent a mention, which is a link to a user. The [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) specifies the [SocialDataItemType.User](/previous-versions/office/sharepoint-csom/jj164610(v=office.15)) field and the mentioned person's account name. You can set the account name by using either the person's login or email address.

- Add a placeholder to the post text to indicate where the mentioned person's display name should appear.

- Add the  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) to the [ContentItems](/previous-versions/office/sharepoint-csom/jj164726(v=office.15)) property of the [SocialPostCreationData](/previous-versions/office/sharepoint-csom/jj163520(v=office.15)) object that's used to create the post.

In the social feed, clicking a mention redirects to the mentioned person's **About** page.

> [!NOTE]
> Change the placeholder values for the **serverURL** and **accountName** variables before you run the code.


```csharp

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

- Create a  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) object to represent the tag. The [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) specifies the [SocialDataItemType.Tag](/previous-versions/office/sharepoint-csom/jj164610(v=office.15)) field and the tag name, which must include a **#** character.

- Add a placeholder to the post text to indicate where the tag should appear.

- Add the  [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) to the [ContentItems](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) property of the [SocialPostCreationData](/previous-versions/office/sharepoint-csom/jj163520(v=office.15)) object that's used to create the post.


In the social feed, clicking a tag redirects to the tag's **About** page. If the tag doesn't already exist, the server creates it.

> [!NOTE]
> Change the placeholder values for the **serverURL** and **tagName** variables before you run the code.


```csharp

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

## See also
<a name="bk_addresources"> </a>

-  [Work with social feeds in SharePoint](work-with-social-feeds-in-sharepoint.md)
-  [SocialPostCreationData](/previous-versions/office/sharepoint-csom/jj163520(v=office.15)) and [SocialDataItem](/previous-versions/office/sharepoint-csom/jj164135(v=office.15)) in the client object models
-  [SocialPostCreationData](/previous-versions/office/sharepoint-visio/jj667907(v=office.15)) and [SocialDataItem](/previous-versions/office/sharepoint-visio/jj679811(v=office.15)) in the JavaScript object model
-  [Social feed REST API reference for SharePoint](social-feed-rest-api-reference-for-sharepoint.md)
-  [SPSocialPostCreationData](/previous-versions/office/sharepoint-server/jj263897(v=office.15)) and [SPSocialDataItem](/previous-versions/office/sharepoint-server/jj263386(v=office.15)) in the server object model
