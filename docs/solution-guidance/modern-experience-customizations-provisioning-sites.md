---
title: Provisioning "modern" team sites programmatically
ms.date: 11/03/2017
---
# Provisioning "modern" team sites programmatically
"Modern" team sites were introduced in SharePoint Online during the autumn of 2016 and the option to use them can be controlled at the tenant level. This article discusses the different options and considerations for provisioning "modern" team sites in SharePoint Online.

>**Important:** 
We're not deprecating the "classic" experience, both "classic" and "modern" will coexist.

_**Applies to:** SharePoint Online_

## Provisioning a "modern" team site from user interface
<a name="sectionSection0"> </a>

There are numerous routes for a "modern" team site to get provisioned. You can start the provisioning directly from the SharePoint Online side or alternatively provision a Office 365 group from other locations (e.g. from Outlook), which will then also trigger the provisioning of a "modern" team site. 
- If your administrator enabled "modern" team sites in your tenant then you can create "modern" team sites from the SharePoint home page
- You can also create an Office 365 group from Office 365 Outlook and when you access the 'site' tab of that group, you will land on a "modern" team site 

### How to control default provisioning flow
<a name="sectionSection01"> </a>

You can control the SharePoint site creation process from the SharePoint Online admin settings. You can choose if the "modern" experience is available for your end users or if you'd like to continue using the "classic" experience.

![Site Creation options from the SharePoint Online admin UI](media/modern-experiences/site-creation-options-admin-ui.png)

See the following Office Support article for details:
- Manage site creation in SharePoint Online: https://support.office.com/en-US/article/Manage-site-creation-in-SharePoint-Online-e72844a3-0171-47c9-befb-e98b23e2dcf9

## Provisioning a "modern" team site programmatically
<a name="sectionSection1"> </a>

"Modern" team sites are created programmatically by creating an [Office 365 group](https://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/group) using Microsoft Graph. When you create an Office 365 group a "modern" team site is automatically provisioned for the group. The "modern" team site URI will be based upon the mailNickname parameter of the Office 365 group and has the following default structure. 

```
https://[tenant].sharepoint.com/sites/[mailNickname]]
``` 

> **Note:**
> A detailed description of group creation using Microsoft Graph is available from the [official documentation](https://graph.microsoft.io/en-us/docs/api-reference/v1.0/api/group_post_groups).

### Provisioning a "modern" team site using the PnP CSOM core component
<a name="sectionSection2"> </a>

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

### Provisioning a "modern" team site using PnP PowerShell
<a name="sectionSection3"> </a>

You can also create "modern" sites using [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell/releases) which will let you easily authenticate with the Microsoft Graph using Azure Active Directory. The following script will create a "modern" team site and then return the actual SharePoint site URL for further manipulation. Once you have access to the URL of the created site, you can use CSOM (with the SharePoint PnP Core component) or SharePoint PnP-PowerShell to automate other operations on the created site.

```PowerShell
# Connect to Azure AD and get back an OAuth 2.0 Access Token
# This command will prompt the sign-in UI to authenticate
Connect-PnPMicrosoftGraph -Scopes "Group.ReadWrite.All","User.Read.All"

# Store the Access Token in a local variable
# This is not really needed for next steps, but is available
$accessToken = Get-PnPAccessToken

# Create a new Office 365 Unified Group, together with the corresponding Modern Site in SPO
$group = New-PnPUnifiedGroup -DisplayName "Awesome Group" -Description "Awesome Group" `
         -MailNickname "awesome-group" -Members "admin@contoso.onmicrosoft.com", "dan@contoso.onmicrosoft.com" `
         -IsPrivate -GroupLogoPath .\logo.jpg

# Connect to the modern site using PnP PowerShell SP cmdlets
# Since we are connecting now to SP side, credentials will be asked
Connect-PnPOnline $group.SiteUrl 

# Now we have access on the SharePoint site for any operations
$context = Get-PnPContext
$web = Get-PnPWeb
$context.Load($web, $web.WebTemplate)
Execute-PnPQuery
$web.WebTemplate + "#" + $web.Configuration
```
> **Note:** 
> There is currently no support to provision "modern" team sites using [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588).

## Additional Considerations
<a name="sectionSection4"> </a>

### Sub sites use "classic" templates
<a name="sectionSection5"> </a>

If you provision a sub site under the root site of a "modern" site collection, sub sites will use "classic" templates. There are currently no "modern" sub site templates available. You can transform a "classic" sub site to a "modern" team site by creating a "modern" page on the site and updating the welcome page to the newly created page.  

### Sites are not listed in the SharePoint Admin UI / Tenant API
<a name="sectionSection6"> </a>

"Modern" team sites are not visible in the SharePoint admin UI. You can access the list of "modern" team sites from the Office 365 Groups admin user interface under Office 365 admin portal. SharePoint Online admin user interface only list "classic" SharePoint sites. This same limitation does not apply to the tenant API: you can use this API to enumerate "modern" team sites together with "classic" team sites. To obtain a list of only "modern" team sites you can also use the Groups end point from Microsoft Graph API.


## Additional resources
<a name="bk_addresources"> </a>

- [What is a SharePoint team site?](https://support.office.com/en-US/article/What-is-a-SharePoint-team-site-75545757-36c3-46a7-beed-0aaa74f0401e?ui=en-US&rs=en-US&ad=US)
- [Create a team site in SharePoint Online](https://support.office.com/en-US/article/Create-a-team-site-in-SharePoint-Online-ef10c1e7-15f3-42a3-98aa-b5972711777d)
- [Manage site creation in SharePoint Online](https://support.office.com/en-us/article/Manage-site-creation-in-SharePoint-Online-e72844a3-0171-47c9-befb-e98b23e2dcf9?ui=en-US&rs=en-US&ad=US)
- [Manage your group connected team site settings](https://support.office.com/en-US/article/Manage-your-group-connected-team-site-settings-8376034d-d0c7-446e-9178-6ab51c58df42)
