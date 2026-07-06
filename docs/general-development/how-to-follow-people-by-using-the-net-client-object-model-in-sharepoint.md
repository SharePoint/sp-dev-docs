---
title: Follow people by using the .NET client object model in SharePoint
description: Learn how to work with Following People features by using the SharePoint .NET client object model.
ms.date: 04/24/2017
ms.assetid: 0fdb7ca5-d408-4256-b52b-886c4bc3b5b8
ms.localizationpriority: medium
---

# Follow people by using the .NET client object model in SharePoint

Learn how to work with Following People features by using the SharePoint .NET client object model.

> [!NOTE]
> The classic SharePoint social features (Newsfeed and Following People) are deprecated and not supported in modern SharePoint Online experiences. Microsoft recommends using modern Microsoft 365 services such as Viva Engage for social and community scenarios. The APIs in this article apply primarily to SharePoint Server on-premises environments.

## Why use Following People features in SharePoint?

In SharePoint, when a user follows people, the posts and activities of the followed people show up in the user's newsfeed. By using Following People features to focus on the people who users care about, you can improve the relevance of your app or solution. In the .NET client object model, people that you follow are represented by [SocialActor](/previous-versions/office/sharepoint-csom/jj164459(v=office.15)) objects. To perform core Following People tasks in the .NET client object model, you use the [SocialFollowingManager](/previous-versions/office/sharepoint-csom/jj163489(v=office.15)) object. This article shows how to use the .NET client object model to work with Following People features.

> [!NOTE]
> We focus on [SocialFollowingManager](/previous-versions/office/sharepoint-csom/jj163489(v=office.15)) because it consolidates the core functionality for following people and content. However, the [PeopleManager](/previous-versions/office/sharepoint-server/jj264673(v=office.15)) object contains additional functionality for following people, such as the [AmIFollowedBy(String)](/previous-versions/office/sharepoint-csom/jj163440(v=office.15)) method and methods that obtain the following status of other users.

## Prerequisites for setting up your development environment to work with Following People features by using the SharePoint .NET client object model

To create a console application that uses the .NET client object model to work with Following People features, you'll need the following:

- SharePoint with My Site configured, and with user profiles and personal sites created for the current user and a target user
- Visual Studio
- **Full Control** access permissions to the User Profile service application for the logged-on user

> [!NOTE]
> If you're not developing on the computer that's running SharePoint, get the [SharePoint Client Components](https://www.microsoft.com/download/details.aspx?id=35585) download that contains SharePoint client assemblies.

## Create a console application in Visual Studio

1. Open Visual Studio, and choose **File**, **New**, **Project**.
1. In the **New Project** dialog box, choose **.NET Framework 4.5 or later** from the drop-down list at the top of the dialog box.
1. In the **Templates** list, choose **Windows**, and then choose the **Console Application** template.
1. Name the project **FollowPeopleCSOM**, and then choose the **OK** button.
1. Add references to the following assemblies:
  - **Microsoft.SharePoint.Client**
  - **Microsoft.SharePoint.ClientRuntime**
  - **Microsoft.SharePoint.Client.UserProfiles**
1. Replace the contents of the **Program** class with the code example from one of the following scenarios:
  - [Start and stop following people](#code-example-start-or-stop-following-people-by-using-the-sharepoint-net-client-object-model)
  - [Get followers and followed people](#code-example-get-followers-and-followed-people-by-using-the-sharepoint-net-client-object-model)
1. To test the console application, on the menu bar, choose **Debug**, **Start Debugging**.

## Code example: Start or stop following people by using the SharePoint .NET client object model

The following code example makes the current user start following or stop following a target user. It shows how to:

- Check whether the current user is following a target user by using the [IsFollowed](/previous-versions/office/sharepoint-csom/jj163393(v=office.15)) method.
- Get the count of people who the current user is following by using the [GetFollowedCount](/previous-versions/office/sharepoint-csom/jj164386(v=office.15)) method.
- Start following the target user by using the [Follow](/previous-versions/office/sharepoint-csom/jj163482(v=office.15)) method.
- Stop following the target user by using the [StopFollowing](/previous-versions/office/sharepoint-csom/jj163940(v=office.15)) method.

This code example uses the [SocialFollowResult](/previous-versions/office/sharepoint-csom/jj163965(v=office.15)) object that is returned by the [Follow](/previous-versions/office/sharepoint-csom/jj163482(v=office.15)) method to determine whether to start or stop following the target user.

> [!NOTE]
> Change the placeholder values for the `serverUrl` and `targetUser` variables before you run the code.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace FollowPeopleCSOM
{
  class Program
  {
    static ClientContext clientContext;
    static SocialFollowingManager followingManager;
    static void Main(string[] args)
    {
      // Replace the following placeholder values with the target
      // server URL and target user.
      const string serverUrl = "http://serverName";
      const string targetUser = "domainName\\\\userName";

      // Get the client context.
      clientContext = new ClientContext(serverUrl);

      // Get the SocialFeedManager instance.
      followingManager = new SocialFollowingManager(clientContext);

      // Create a SocialActorInfo object to represent the target user.
      SocialActorInfo actorInfo = new SocialActorInfo();
      actorInfo.AccountName = targetUser;

      // Find out whether the current user is following the target user.
      ClientResult<bool> isFollowed = followingManager.IsFollowed(actorInfo);

      // Get the information from the server.
      clientContext.ExecuteQuery();

      Console.WriteLine("Was the current user following the target user? {0}\\n", isFollowed.Value);
      Console.Write("Initial count: ");

      // Get the current count of followed people.
      WriteFollowedCount();

      // Try to follow the target user. If the result is OK, then
      // the request succeeded.
      ClientResult<SocialFollowResult> result = followingManager.Follow(actorInfo);
      clientContext.ExecuteQuery();

      // If the result is AlreadyFollowing, then stop following
      // the target user.
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

      // Get the updated count of followed people.
      Console.Write("Updated count: ");
      WriteFollowedCount();
      Console.ReadKey();
    }

    // Get the count of the people who the current user is following.
    static void WriteFollowedCount()
    {
      ClientResult<int> followedCount = followingManager.GetFollowedCount(SocialActorTypes.Users);
      clientContext.ExecuteQuery();
      Console.WriteLine("The current user is following {0} people.", followedCount.Value);
    }
  }
}
```

## Code example: Get followers and followed people by using the SharePoint .NET client object model

The following code example gets the people who the current user is following, gets the people who are followed by the current user, and gets information about the current user's Following People status. It shows how to:

- Check whether the current user is following a target user by using the [IsFollowed](/previous-versions/office/sharepoint-csom/jj163393(v=office.15)) method.
- Get the count of people who the current user is following by using the [GetFollowedCount](/previous-versions/office/sharepoint-csom/jj164386(v=office.15)) method.
- Get the people who the current user is following by using the [GetFollowed](/previous-versions/office/sharepoint-csom/jj163811(v=office.15)) method.
- Get the people who are following the current user by using the [GetFollowers](/previous-versions/office/sharepoint-csom/jj164167(v=office.15)) method.
- Iterate through the groups of people and get each person's display name, personal URI, and picture URI.

> [!NOTE]
> Change the placeholder values for the `serverUrl` and `targetUser` variables before you run the code.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.Social;

namespace FollowPeopleCSOM
{
  class Program
  {
    static void Main(string[] args)
    {

      // Replace the following placeholder values with the target
      // server URL and target user.
      const string serverUrl = "http://serverName";
      const string targetUser = "domainName\\\\userName";

      // Get the client context.
      ClientContext clientContext = new ClientContext(serverUrl);

      // Get the SocialFeedManager instance.
      SocialFollowingManager followingManager = new SocialFollowingManager(clientContext);

      // Create a SocialActorInfo object to represent the target user.
      SocialActorInfo actorInfo = new SocialActorInfo();
      actorInfo.AccountName = targetUser;

      // Find out whether the current user is following the target user.
      ClientResult<bool> isFollowed = followingManager.IsFollowed(actorInfo);

      // Get the count of people who the current user is following.
      ClientResult<int> followedCount = followingManager.GetFollowedCount(SocialActorTypes.Users);

      // Get the people who the current user is following.
      ClientResult<SocialActor[]> followedResult = followingManager.GetFollowed(SocialActorTypes.Users);

      // Get the people who are following the current user.
      ClientResult<SocialActor[]> followersResult = followingManager.GetFollowers();

      // Get the information from the server.
      clientContext.ExecuteQuery();

      // Write the results to the console window.
      Console.WriteLine("Is the current user following the target user? {0}\\n", isFollowed.Value);
      Console.WriteLine("People who the current user is following: ({0} count)", followedCount.Value);
      IterateThroughPeople(followedResult.Value);
      Console.WriteLine("\\nPeople who are following the current user:");
      IterateThroughPeople(followersResult.Value);
      Console.ReadKey();
    }

    // Iterate through the people and get each person's display
    // name, personal URI, and picture URI.
    static void IterateThroughPeople(SocialActor[] actors)
    {
      foreach (SocialActor actor in actors)
      {
        Console.WriteLine("  - {0}", actor.Name);
        Console.WriteLine("\\tPersonal URI: {0}", actor.PersonalSiteUri);
        Console.WriteLine("\\tPicture URI: {0}", actor.ImageUri);
      }
    }
  }
}
```

## See also

- [Follow people in SharePoint](follow-people-in-sharepoint.md)
- [How to: Follow people by using the JavaScript object model in SharePoint](how-to-follow-people-by-using-the-javascript-object-model-in-sharepoint.md)
- [How to: Follow documents and sites by using the .NET client object model in SharePoint](how-to-follow-documents-and-sites-by-using-the-net-client-object-model-in-sharep.md)
