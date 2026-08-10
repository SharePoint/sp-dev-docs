---
title: What's new for developers in social and collaboration features in SharePoint
description: Learn about new and changed social and collaboration features for My Site and Community Site development scenarios in SharePoint.
ms.date: 04/24/2017
ms.assetid: 65365b1d-cde5-47cd-8b04-1b76be0e3490
ms.localizationpriority: medium
---
# What's new for developers in social and collaboration features in SharePoint

Learn about new and changed social and collaboration features for My Site and Community Site development scenarios in SharePoint.
Social and collaboration features in SharePoint make it easy for users to communicate and to stay engaged and informed. The improved social feed on personal sites and team sites helps users to keep up to date with the people and content that they care about. The new Community Site feature provides a rich community experience that lets users easily find and share information and find people who have similar interests.

For more information about programming with social and collaboration features, see [Social and collaboration features in SharePoint](social-and-collaboration-features-in-sharepoint.md).

## New and changed My Site features in SharePoint

The My Site Social API, which includes user profiles and social data, contains many new and changed features. New functionality for My Sites and team sites provides an interactive, conversational experience within feeds that makes it easier for users to stay connected to the people and content that matter to them.

The **Newsfeed** page on SharePoint displays several of these improvements, including a text box that enables users to quickly publish microblog posts and an interactive, conversational feed of posts and updates from the people and content that the user is following.

### New Social namespace provides APIs for social feeds and following people and content

The **Social** namespace contains the primary API for working with feeds and microblog posts and for following people and content. For more information, see [Microsoft.SharePoint.Client.Social](/previous-versions/office/sharepoint-csom/jj164417(v=office.15)) for the .NET client object model, [SP.Social](/previous-versions/office/sharepoint-visio/jj628683(v=office.15)) for the JavaScript object model, and [Microsoft.Office.Server.Social](/previous-versions/office/sharepoint-server/jj264549(v=office.15)) for the server object model.

> [!NOTE]
> The API in the [Microsoft.Office.Server.ActivityFeed](/previous-versions/office/sharepoint-server/ee584594(v=office.15)) namespace is deprecated. For more information, see [Deprecated and removed My Site Social API and features](#deprecated-and-removed-my-site-social-api-and-features)

### New client APIs for social feeds, following people and content, and user properties in SharePoint

SharePoint includes new client APIs that you can use to work with social feeds, follow people and content, and retrieve user properties in online, on-premises, and mobile development. When possible, you should use client APIs for SharePoint development instead of using the server object model or web services. Client APIs include managed client object models, a JavaScript object model, and a Representational State Transfer (REST) service. If you're developing a SharePoint Add-in, you must use a client API.

Not all server-side functionality in the Microsoft.Office.Server.UserProfiles assembly is available from client APIs. For example, there's no client-side access to the API in the [Microsoft.Office.Server.Audience](/previous-versions/office/sharepoint-server/ms559937(v=office.15)) namespace, the [Microsoft.Office.Server.ReputationModel](/previous-versions/office/sharepoint-server/jj884389(v=office.15)) namespace, or the [Microsoft.Office.Server.SocialData](/previous-versions/office/sharepoint-server/ee579636(v=office.15)) namespace. To see which APIs are available, see the [Microsoft.SharePoint.Client.Social](/previous-versions/office/sharepoint-csom/jj164417(v=office.15)) namespace and the [Microsoft.SharePoint.Client.UserProfiles](/previous-versions/office/sharepoint-csom/jj163481(v=office.15)) namespace.

For information about how to access the My Site Social client APIs, see [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md). For more information about the API sets in SharePoint and when to use them, see [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md).

### Use the ProfileLoader.CreatePersonalSiteEnqueueBulk method to provision personal sites and OneDrive for Business for multiple users (My Site Host administrators on SharePoint Online only)

My Site Host administrators can use the `ProfileLoader.CreatePersonalSiteEnqueueBulk` method to programmatically provision personal sites for multiple users on SharePoint Online, which include features such as OneDrive for Business and the Sites page.

The following code example uses the .NET client object model in a console application. Before you run the example, add references to **Microsoft.SharePoint.Client.dll**, **Microsoft.SharePoint.Client.Runtime.dll** and **Microsoft.SharePoint.Client.UserProfiles.dll**, and change the placeholder values for the `userName`, `passwordStr`, and `serverUrl` variables. The `serverUrl` variable must be the URL of the SharePoint Online Administration Center.

> [!NOTE]
> To get the required client DLLs, download the [SharePoint Online Client Components SDK](https://www.microsoft.com/download/details.aspx?id=42038).

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.UserProfiles;

namespace CreatePersonalSiteBulkConsole
{
  class Program
  {
    static void Main(string[] args)
    {
      string userName = "administrator@contoso.onmicrosoft.com";
      string passwordStr = "password";
      string serverUrl = "https://contoso-admin.sharepoint.com/";

      using (var clientContext = new ClientContext(serverUrl))
      {
        SecureString password = new SecureString();
        Array.ForEach(passwordStr.ToCharArray(), c => password.AppendChar(c));

        var credentials = new SharePointOnlineCredentials(userName, password);

        clientContext.Credentials = credentials;

        var web = clientContext.Web;
        clientContext.Load(web);
        clientContext.ExecuteQuery();
        ProfileLoader loader = ProfileLoader.GetProfileLoader(clientContext);

        if (loader == null)
        {
          throw new InvalidOperationException("Failed to get ProfileLoader");
        }

        string[] userEmails = { "usera@contoso.onmicrosoft.com", "userb@contoso.onmicrosoft.com" };
        loader.CreatePersonalSiteEnqueueBulk(userEmails);
        loader.Context.ExecuteQuery();
      }
    }
  }
}
```

To use the `CreatePersonalSiteEnqueueBulk` method with Windows PowerShell, first change the placeholder values (the URL of the SharePoint Online Administration Center and user names) in the following commands, and then run the commands in the SharePoint Management Shell.

```powershell
$webUrl = "https://yoursharepointadmin.sharepoint.com"
$ctx = New-Object Microsoft.SharePoint.Client.ClientContext($webUrl)

$web = $ctx.Web
$username = "admin@myadmin.sharepoint.com"
$password = read-host -AsSecureString

$ctx.Credentials = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($username,$password)

$ctx.Load($web)
$ctx.ExecuteQuery()

[System.Reflection.Assembly]::LoadWithPartialName("Microsoft.SharePoint.Client.UserProfiles")

$loader =[Microsoft.SharePoint.Client.UserProfiles.ProfileLoader]::GetProfileLoader($ctx)

#To get profile
$profile = $loader.GetUserProfile()
$ctx.Load($profile)
$ctx.ExecuteQuery()
$profile
#To enqueue profile
$loader.CreatePersonalSiteEnqueueBulk(@("user1@domain.com"))
$loader.Context.ExecuteQuery()
```

### New objects for users and user properties in SharePoint

SharePoint includes new objects that represent users and user properties:

- The [SocialActor](/previous-versions/office/sharepoint-csom/jj164459(v=office.15)) object represents users (and other entities) for feed and following activities.
- The [PersonProperties](/previous-versions/office/sharepoint-csom/jj164752(v=office.15)) object contains general user properties and user profile properties.

> [!NOTE]
> Server object model versions are the [SPSocialActor](/previous-versions/office/sharepoint-server/jj275459(v=office.15)) object and the [PersonProperties](/previous-versions/office/sharepoint-server/jj274629(v=office.15)) object.

SharePoint also includes a new client-side [UserProfile](/previous-versions/office/sharepoint-csom/jj164616(v=office.15)) object that provides methods you can use to create a personal site for the current user. However, it doesn't contain all the user properties that the server-side [UserProfile](/previous-versions/office/sharepoint-server/ms566874(v=office.15)) object contains. To access all user properties from client-side code, use the [PeopleManager.GetMyProperties](/previous-versions/office/sharepoint-csom/jj164086(v=office.15)) method or [PeopleManager.GetPropertiesFor](/previous-versions/office/sharepoint-csom/jj163877(v=office.15)) method (user profile properties are stored in the [PersonProperties.UserProfileProperties](/previous-versions/office/sharepoint-csom/jj163311(v=office.15)) property) or use the [PeopleManager.GetUserProfilePropertiesFor](/previous-versions/office/sharepoint-csom/jj164532(v=office.15)) method or [PeopleManager.GetUserProfilePropertyFor](/previous-versions/office/sharepoint-csom/jj164288(v=office.15)) method.

### New client-side people picker control

The client-side People Picker control is an HTML and JavaScript control that provides cross-browser support for selecting people, groups, and claims. You can configure the picker with the same settings as the server-side version of the control, including control-specific properties (like allowing multiple users or users and groups) and web application-level configuration settings (like Active Directory Domain Services parameters or targeting particular forests). For more information, see [Use the client-side People Picker control in SharePoint-hosted SharePoint Add-ins](/sharepoint/dev/sp-add-ins/use-the-client-side-people-picker-control-in-sharepoint-hosted-sharepoint-add-in).

### Deprecated and removed My Site Social API and features

The following My Site Social API and features are deprecated in SharePoint:

- The API in the [Microsoft.Office.Server.ActivityFeed](/previous-versions/office/sharepoint-server/ee584594(v=office.15)) namespace is deprecated. The **Social** namespace provides the API for programmatically working with social feeds in SharePoint. For backward compatibility, **ActivityEvent** items from SharePoint 2010 are displayed in SharePoint feeds as events that can't be replied to. (Legacy event migration must be enabled in Central Administration.)
- The My Site RSS feed (ActivityFeed.aspx) is replaced with new APIs in the REST service, the client object model, and the JavaScript object model. To migrate custom SharePoint 2010 code that uses this API (preferably a client API), replace all requests to ActivityFeed.aspx with calls to the new API and handle feed data that is returned in JavaScript Object Notation (JSON) format.
- The **Recent Activities** web part is replaced with a new **Newsfeed** web part that supports multithreaded conversations and dynamic feed retrieval.

    > [!NOTE]
    > We don't support customizations of the Newsfeed web part or other feed web parts (such as the Site Feed web part on team sites). If you do customize these web parts, for example by using JavaScript overrides, be aware that your customizations may break in updates to SharePoint.

- The **Social Comments** web part is deprecated.
- The following activity events no longer automatically inform the feed: profile update, upcoming birthday, upcoming workplace anniversary, new membership, and change of manager. However, you can create custom event receivers for these activities. No new social events have been added.
- The following fields in the [Privacy](/previous-versions/office/sharepoint-server/ms518310(v=office.15)) enumeration are deprecated: `Contacts`, `Organization`, and `Manager`. SharePoint offers only **Private** ( **Only Me**) and **Public** ( **Everyone**) privacy settings. Existing privacy settings are retained until they're changed by the user. To migrate custom SharePoint 2010 code that uses this API, replace all references to the deprecated privacy fields.
- The **Following People** API that is accessed from the **SocialFollowingManager** replaces the **Colleagues** functionality from SharePoint Server 2010. The **Colleagues** page is replaced with the **People I'm following** page. The **Groups** feature that enabled users to organize colleagues into groups is no longer available.
- Organization profiles are obsolete in SharePoint, and the following types are deprecated: `OrganizationProfile`, `OrganizationProfileManager`, `OrganizationMembershipType`, `OrganizationNotFoundException`, `OrganizationProfileChange`, `OrganizationProfileChangeQuery`, `OrganizationProfileMembershipChange`, and `OrganizationProfileValueCollection`.
- The **My Links** feature is deprecated in SharePoint.

## New Community Site feature in SharePoint

The new Community Site feature includes a new site template and improved discussion experience. Features such as reputation, categories, featured discussions, a question-post type, and best replies let community members easily find popular discussions, relevant information, and people with similar interests. Members build reputation as they participate in communities.

The Community Site feature doesn't expose a specific API for development. To extend Community Site features, you use SharePoint site and list APIs directly. For example, you can use SharePoint APIs to customize the site and list templates, create custom activities from communities for the social feed, integrate reputation information into search results, customize the reputation model, or create workflows to moderate discussions.

The following list contains information for developing with Community Site features:

- Community Sites use the **Community** site template ( [ID](/previous-versions/office/sharepoint-server/ee544844(v=office.15)) = **62**). The site template isn't available for public websites. The template type of the discussion board list is [DiscussionBoard](/previous-versions/office/sharepoint-server/ee541191(v=office.15)) (value = **108**).
- Activating the **Community Site** feature activates the **CommunityEventReceiver** event receiver.
- To customize the client-side rendered list view, you must use JavaScript overrides to replace the view. List views can't be extended through the SharePoint API. For more information, see [Customize a list view in SharePoint Add-ins using client-side rendering](/sharepoint/dev/sp-add-ins/customize-a-list-view-in-sharepoint-add-ins-using-client-side-rendering).
- Community Sites use asynchronous events to update objects. If asynchronous events run in the background, you may encounter *Save* conflicts when you attempt to update lists or list items, and your handle to the object may become stale.

    As a workaround, handle exceptions that are returned by **Update** calls, refresh the instance before you retry the call, and loop for multiple retries, as shown in the following code example.

```csharp
int retries = 1;
while (retries <= 10)
{
  try
  {
    spListItem.IconOverlay = urlString;
    spListItem.Update();
    break;
  }
  catch (SPException saveConflict)
  {
    spListItem = web.Lists.GetItemById(spListItem.ID);
    retries++;
    if (retries > 10) throw;
    System.Threading.Thread.Sleep(1000);
  }
}
```

## See also

- [Social and collaboration features in SharePoint](social-and-collaboration-features-in-sharepoint.md)
- [Get started developing with social features in SharePoint](get-started-developing-with-social-features-in-sharepoint.md)
