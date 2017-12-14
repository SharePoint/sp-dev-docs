---
title: Provisioning "modern" team sites programmatically
description: Provision a team site from the UI or by using PnP CSOM Core or PnP PowerShell.
ms.date: 11/08/2017
---

# Provisioning "modern" team sites programmatically

"Modern" team sites were introduced in SharePoint Online in 2016, and the option to use them can be controlled at the tenant level. This article discusses the different options and considerations for provisioning "modern" team sites in SharePoint Online.

> [!IMPORTANT]
> We're not deprecating the "classic" experience; both "classic" and "modern" will coexist.

## Provisioning a "modern" team site from the user interface

There are numerous routes for a "modern" team site to get provisioned. You can start the provisioning directly from the SharePoint Online site, or alternatively provision an Office 365 group from other locations (for example, from Outlook), which then also triggers the provisioning of a "modern" team site. 

- If your administrator enabled "modern" team sites in your tenant, you can create "modern" team sites from the SharePoint home page.

- You can also create an Office 365 group from Office 365 Outlook, and when you access the site tab of that group, you land on a "modern" team site. 

### Control default provisioning flow

You can control the SharePoint site creation process from the SharePoint Online Admin settings. You can choose if the "modern" experience is available for your end users, or if you'd like to continue using the "classic" experience. For details, see [Manage site creation in SharePoint Online](https://support.office.com/en-US/article/Manage-site-creation-in-SharePoint-Online-e72844a3-0171-47c9-befb-e98b23e2dcf9).

*Figure 1. Site creation options from SharePoint Online*

![Site creation options from the SharePoint Online Admin UI](media/modern-experiences/site-creation-options-admin-ui.png)


## Provisioning a "modern" team site programmatically

"Modern" team sites are created programmatically by creating an [Office 365 group](https://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/group) using Microsoft Graph. When you create an Office 365 group, a "modern" team site is automatically provisioned for the group. The "modern" team site URI is based on the **mailNickname** parameter of the Office 365 group and has the following default structure. 

```
https://[tenant].sharepoint.com/sites/[mailNickname]]
``` 

> [!NOTE]
> A detailed description of group creation using Microsoft Graph is available from the [official documentation](https://graph.microsoft.io/en-us/docs/api-reference/v1.0/api/group_post_groups).

### Provision a "modern" team site using the PnP CSOM Core component

The PnP CSOM Core component, available as a [NuGet package](https://www.nuget.org/packages/SharePointPnPCoreOnline), has simplified methods for the "modern" group handling. 

```C#
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

### Provision a "modern" team site using PnP PowerShell

You can also create "modern" sites by using [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell/releases), which lets you easily authenticate with Microsoft Graph by using Azure Active Directory. The following script creates a "modern" team site and then returns the actual SharePoint site URL for further manipulation. After you have access to the URL of the created site, you can use CSOM (with the SharePoint PnP Core component) or SharePoint PnP PowerShell to automate other operations on the created site.

```PowerShell
# Connect to your SharePoint admin center, credentials will be asked
Connect-PnPOnline -Url https://contoso-admin.sharepoint.com

# Create a new modern team site
New-PnPSite -Type Team -Title "Awesome Group" -Description "Awesome Group" -Alias "awesome-group"
```



> [!NOTE]
> There is currently no support to provision "modern" team sites by using the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588).

## Additional considerations

### Subsites use "classic" templates

If you provision a subsite under the root site of a "modern" site collection, subsites will use "classic" templates. Currently, no "modern" subsite templates are available. You can transform a "classic" subsite to a "modern" team site by creating a "modern" page on the site and updating the welcome page to the newly created page.  

### Sites are not listed in the SharePoint Admin UI / Tenant API

"Modern" team sites are not visible in the SharePoint Admin UI. You can access the list of "modern" team sites from the Office 365 groups Admin user interface under the Office 365 Admin portal. The SharePoint Online Admin user interface only lists "classic" SharePoint sites. This same limitation does not apply to the tenant API; you can use this API to enumerate "modern" team sites together with "classic" team sites. To obtain a list of only "modern" team sites, you can use the Groups end point from the Microsoft Graph API.

## See also

- [Customizing the "modern" experiences in SharePoint Online](modern-experience-customizations.md)
- [What is a SharePoint team site?](https://support.office.com/en-US/article/What-is-a-SharePoint-team-site-75545757-36c3-46a7-beed-0aaa74f0401e?ui=en-US&rs=en-US&ad=US)
- [Create a team site in SharePoint Online](https://support.office.com/en-US/article/Create-a-team-site-in-SharePoint-Online-ef10c1e7-15f3-42a3-98aa-b5972711777d)
- [Manage site creation in SharePoint Online](https://support.office.com/en-us/article/Manage-site-creation-in-SharePoint-Online-e72844a3-0171-47c9-befb-e98b23e2dcf9?ui=en-US&rs=en-US&ad=US)
- [Manage your SharePoint team site settings](https://support.office.com/en-us/article/Manage-your-SharePoint-team-site-settings-8376034d-d0c7-446e-9178-6ab51c58df42?ui=en-US&rs=en-US&ad=US)
