---
title: Provisioning "modern" team sites programmatically
description: Provision a team site from the UI or by using PnP CSOM Core or PnP PowerShell.
ms.date: 4/23/2018
---

# Provisioning "modern" team sites programmatically

"Modern" sites were introduced in SharePoint Online during the autumn of 2016 and the option to use them can be controlled at the tenant level. This article discusses the different options and considerations for provisioning "modern" sites in SharePoint Online. In particular, the article covers how to create both "modern" team sites, and "modern" communication sites.

> [!IMPORTANT]
> We're not deprecating the "classic" experience; both "classic" and "modern" will coexist.

## Comparing "modern" team sites and "modern" communication sites
Before digging into the details about how to provision "modern" sites, let's discuss a little bit about the two main flavors available: team sites, and communication sites.

A "modern" team site is a place where a group of people can work together, collaborate, share documents and messages. Every "modern" team site has a backing Office 365 group, in order to improve the overall collaboration experience. In fact, thanks to the Office 365 group, members of the team can benefit of services like Planner, a shared Calendar, a shared OneDrive for Business storage, custom Office 365 connectors, etc.
In a "modern" team site, typically the members can contribute to the content (read/write). Moreover, the Office 365 group backing a "modern" team site can be private or public, and by default it is public.

A "modern" communication site is a place where you can share news, showcase a story, broadcast a message. The idea of a communication site is to have few editors that create and maintain the content, and a wide audience that consumes that content. However, a communication site does not have a backing Office 365 group. Users can access the target communication site with the well-known set of permissions of any other SharePoint site, and by default every communication site is private.

Thus, if you have to create a site for team collaboration, most likely the "modern" team site is the right choice. On the contrary, if you want to communicate something to a broad set of people, probably the communication site is your best choice.

## Provisioning "modern" team sites


Now in this section you will learn how to provision a "modern" team site, and what are the available options to do that.

### Provisioning a "modern" team site from the user interface

There are numerous routes for a "modern" team site to get provisioned. You can start the provisioning directly from the SharePoint Online site, or alternatively provision an Office 365 group from other locations (for example, from Outlook), which then also triggers the provisioning of a "modern" team site. 

- If your administrator enabled "modern" team sites in your tenant, you can create "modern" team sites from the SharePoint home page.

- You can also create an Office 365 group from Office 365 Outlook, and when you access the site tab of that group, you land on a "modern" team site. 

### How to control default provisioning flow

You can control the SharePoint site creation process from the SharePoint Online admin settings. You can choose if the "modern" experience is available for your end users or if you'd like to continue using the "classic" experience.

![Site Creation options from the SharePoint Online admin UI](media/modern-experiences/site-creation-options-admin-ui.png)

See the following Office Support article for details:
- Manage site creation in SharePoint Online: https://support.office.com/en-US/article/Manage-site-creation-in-SharePoint-Online-e72844a3-0171-47c9-befb-e98b23e2dcf9

### Provisioning a "modern" team site programmatically via SharePoint Online REST API

"Modern" team sites can be created programmatically using a REST API provided by SharePoint Online, and used by the 'Create Site' UI of SharePoint Online, too.

#### Provisioning a "modern" team site using the PnP CSOM core component

In the SharePoint PnP Core component - since the October 2017 release (v. 2.19.1710.1) - there is a new extension method for the CSOM _ClientContext_ type. The extension method name is _CreateSiteAsync_ and allows you to create a "modern" team site in a matter of few seconds. In the following code snippet you can see how to use this technique.

```csharp
// Let's use the CreateSiteAsync extension method of PnP CSOM Core
// to create the "modern" team site

var targetTenantUrl = "https://[tenant].sharepoint.com/";

using (var context = new ClientContext(targetTenantUrl))
{
    context.Credentials = OfficeDevPnP.Core.Utilities.CredentialManager.GetSharePointOnlineCredential("[Name-of-Your-Credentials]");

    // Create new "modern" team site at the url
    // https://[tenant].sharepoint.com/sites/mymodernteamsite
    var teamContext = await context.CreateSiteAsync(
        new TeamSiteCollectionCreationInformation
        {
            Alias = "mymodernteamsite", // Mandatory
            DisplayName = "displayName", // Mandatory
            Description = "description", // Optional
            Classification = "classification", // Optional
            IsPublic = true, // Optional, default true
        });
    teamContext.Load(teamContext.Web, w => w.Url);
    teamContext.ExecuteQueryRetry();
    Console.WriteLine(teamContext.Web.Url);
}
```

> [!NOTE]
> You can find further details about the _Classification_ argument in the [official documentation](https://msdn.microsoft.com/en-us/pnp_articles/modern-experience-site-classification).

As you can see, the extension method creates a new "modern" team site and returns a new _ClientContext_ object directly connected to the newly created site.

#### Provisioning a "modern" team site using PnP PowerShell

You can also create "modern" sites using [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell/releases). The following script will create a "modern" team site and then return the actual SharePoint site URL for further manipulation. Once you have access to the URL of the created site, you can use CSOM (with the SharePoint PnP Core component) or SharePoint PnP-PowerShell to automate other operations on the created site.

```ps
# Connect to SharePoint Online
# This command will prompt the sign-in UI to authenticate
Connect-PnPOnline "https://[tenant].sharepoint.com/"

# Create the new "modern" team site
$teamSiteUrl = New-PnPSite -Type TeamSite -Title "displayName" -Alias "mymodernteamsite" -Description "description" -IsPublic -Classification "classification" 

# Connect to the modern site using PnP PowerShell SP cmdlets
# Since we are connecting now to SP side, credentials will be asked
Connect-PnPOnline $teamSiteUrl

# Now we have access on the SharePoint site for any operations
$context = Get-PnPContext
$web = Get-PnPWeb
$context.Load($web, $web.WebTemplate)
Execute-PnPQuery
$web.WebTemplate + "#" + $web.Configuration
```

### Provisioning an Office 365 group programmatically

"Modern" team sites can be created programmatically by creating an [Office 365 group](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/group) using the Microsoft Graph, too. In fact, when you create an Office 365 group a "modern" team site is automatically provisioned for the group. The "modern" team site URI will be based upon the _mailNickname_ parameter of the Office 365 group and has the following default structure. 

```
https://[tenant].sharepoint.com/sites/[mailNickname]
``` 

> [!NOTE]
> A detailed description of group creation using Microsoft Graph is available from the [official documentation](https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/api/group_post_groups).

#### Provisioning an Office 365 group using the PnP CSOM core component

The PnP CSOM Core component, available as a [NuGet package](https://www.nuget.org/packages/SharePointPnPCoreOnline), has simplified methods for the "modern" group handling. 

```csharp
/// <summary>
/// Let's use the UnifiedGroupsUtility class from PnP CSOM Core to simplify managed code operations for Office 365 groups
/// </summary>
/// <param name="accessToken">Azure AD Access token with Group.ReadWrite.All permission</param>
public static void ManipulateModernTeamSite(string accessToken)
{
    // Create new modern team site at the url https://[tenant].sharepoint.com/sites/mymodernteamsite
    Stream groupLogoStream = new FileStream("C:\\groupassets\\logo-original.png", 
                                            FileMode.Open, FileAccess.Read);
    var group = UnifiedGroupsUtility.CreateUnifiedGroup("displayName", "description", 
                            "mymodernteamsite", accessToken, groupLogo: groupLogoStream);
            
    // We received a group entity containing information about the group
    string url = group.SiteUrl;
    string groupId = group.GroupId;

    // Get group based on groupID
    var group2 = UnifiedGroupsUtility.GetUnifiedGroup(groupId, accessToken);
    // Get SharePoint site URL from group id
    var siteUrl = UnifiedGroupsUtility.GetUnifiedGroupSiteUrl(groupId, accessToken);

    // Get all groups in the tenant
    List<UnifiedGroupEntity> groups = UnifiedGroupsUtility.ListUnifiedGroups(accessToken);

    // Update description and group logo programatically
    groupLogoStream = new FileStream("C:\\groupassets\\logo-new.png", FileMode.Open, FileAccess.Read);
    UnifiedGroupsUtility.UpdateUnifiedGroup(groupId, accessToken, description: "Updated description", 
                                            groupLogo: groupLogoStream);

    // Delete group programatically
    UnifiedGroupsUtility.DeleteUnifiedGroup(groupId, accessToken);
}
```

#### Provisioning an Office 365 group using PnP PowerShell

You can also create an Office 365 group using [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell/releases), which will let you easily authenticate with the Microsoft Graph using Azure Active Directory. The following script will create an Office 365 group, together with a "modern" team site, and then return the actual SharePoint site URL for further manipulation. Once you have access to the URL of the created site, you can use CSOM (with the SharePoint PnP Core component) or SharePoint PnP-PowerShell to automate other operations on the created site.

```PowerShell
# Connect to your SharePoint admin center, credentials will be asked
Connect-PnPOnline -Url https://contoso-admin.sharepoint.com

# Create a new modern team site
New-PnPSite -Type Team -Title "Awesome Group" -Description "Awesome Group" -Alias "awesome-group"
```

> [!NOTE]
> There is currently no support to provision "modern" team sites using [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588).

## Provisioning "Modern" communication sites

In this section you will learn how to provision a "modern" communication site, and what are the available options to do that.

### Provisioning a "modern" communication site from user interface

To provision a "modern" communication site using the user interface - if your administrator enabled "modern" team sites in your tenant - you can start directly from the SharePoint Online home page. Click the 'Create Site' button, select to create a 'Communication Site', choose a design for your site,  provide a name and a description, and the site will be created in a matter of few seconds.
At the time of this writing the available designs for a communication site are:
* **Topic**: use this design if you have a lot of information to share such as news, events, and other content.
* **Showcase**: use this design to showcase a product, team, or event using photos or images.
* **Blank**: start with a blank site and make your design come to life quickly and easily.

### Provisioning a "modern" communication site programmatically

If you rather prefer, you can create a "modern" communication site programmatically using either CSOM and PnP, or PowerShell.

#### Provisioning a "modern" communication site using the PnP CSOM core component

The PnP CSOM Core component, available as a [NuGet package](https://www.nuget.org/packages/SharePointPnPCoreOnline), has simplified methods for the "modern" sites handling. 

```csharp
// Let's use the CreateSiteAsync extension method of PnP CSOM Core
// to create the "modern" team site

var targetTenantUrl = "https://[tenant].sharepoint.com/";

using (var context = new ClientContext(targetTenantUrl))
{
    context.Credentials = OfficeDevPnP.Core.Utilities.CredentialManager.GetSharePointOnlineCredential("[Name-of-Your-Credentials]");

    // Create new "modern" communication site at the url https://[tenant].sharepoint.com/sites/mymoderncommunicationsite
    var communicationContext = await context.CreateSiteAsync(new CommunicationSiteCollectionCreationInformation {
        Title = "title", // Mandatory
        Description = "description", // Mandatory
        Lcid = 1033, // Mandatory
        AllowFileSharingForGuestUsers = false, // Optional
        Classification = "classification", // Optional
        SiteDesign = CommunicationSiteDesign.Topic, // Mandatory
        Url = "https://[tenant].sharepoint.com/sites/mymoderncommunicationsite", // Mandatory
    });
    communicationContext.Load(communicationContext.Web, w => w.Url);
    communicationContext.ExecuteQueryRetry();
    Console.WriteLine(communicationContext.Web.Url);
}
```

As you can see, the extension method creates a new "modern" communication site and returns a new _ClientContext_ object directly connected to the newly created site.

#### Provisioning a "modern" communication site using PnP PowerShell

The following script will create a "modern" communication site and then return the actual SharePoint site URL for further manipulation, as like as it was in the previous example with "modern" team sites.

```ps
# Connect to SharePoint Online
# This command will prompt the sign-in UI to authenticate
Connect-PnPOnline "https://[tenant].sharepoint.com/"

# Create the new "modern" communication site
$communicationSiteUrl = New-PnPSite -Type CommunicationSite -Title "displayName" -Url "https://[tenant].sharepoint.com/sites/mymoderncommunicationsite" -Description "description" -Classification "classification" -SiteDesign Topic

# Connect to the modern site using PnP PowerShell SP cmdlets
# Since we are connecting now to SP side, credentials will be asked
Connect-PnPOnline $communicationSiteUrl

# Now we have access on the SharePoint site for any operations
$context = Get-PnPContext
$web = Get-PnPWeb
$context.Load($web, $web.Title)
Execute-PnPQuery
$web.Title
```

## Additional Considerations

### Sub sites use "classic" templates

If you provision a sub site under the root site of a "modern" site collection, sub sites will use "classic" templates. There are currently no "modern" sub site templates available. You can transform a "classic" sub site to a "modern" team site by creating a "modern" page on the site and updating the welcome page to the newly created page.  

If you don't want to allow users to create a "classic" sub site under a "modern" site collection, as an admin you can go to the SharePoint Admin Center, select the Settings page and configure the option for "Subsite Creation" to hide the "subsite" creation menu. You can see the "Subsite Creation" option in the following image.

![Subsite Creation options from the SharePoint Online admin UI](media/modern-experiences/subsite-creation-admin-setting.png)

### Sites are not listed in the classic SharePoint Admin UI / Tenant API

"Modern" team sites are not visible in the SharePoint admin UI. You can access the list of "modern" team sites from the Office 365 Groups admin user interface under Office 365 admin portal. SharePoint Online admin user interface only list "classic" SharePoint sites. This same limitation does not apply to the tenant API: you can use this API to enumerate "modern" team sites together with "classic" team sites. To obtain a list of only "modern" team sites you can also use the Groups endpoint from Microsoft Graph API.

There is also an upcoming new SharePoint Admin UI, which supports managing the new "modern" site collections, together with the "classic" ones.

## See also

- [Customizing the "modern" experiences in SharePoint Online](modern-experience-customizations.md)
- [What is a SharePoint team site?](https://support.office.com/en-US/article/What-is-a-SharePoint-team-site-75545757-36c3-46a7-beed-0aaa74f0401e?ui=en-US&rs=en-US&ad=US)
- [Create a team site in SharePoint Online](https://support.office.com/en-US/article/Create-a-team-site-in-SharePoint-Online-ef10c1e7-15f3-42a3-98aa-b5972711777d)
- [Manage site creation in SharePoint Online](https://support.office.com/en-us/article/Manage-site-creation-in-SharePoint-Online-e72844a3-0171-47c9-befb-e98b23e2dcf9?ui=en-US&rs=en-US&ad=US)
- [Manage your SharePoint team site settings](https://support.office.com/en-us/article/Manage-your-SharePoint-team-site-settings-8376034d-d0c7-446e-9178-6ab51c58df42?ui=en-US&rs=en-US&ad=US)
