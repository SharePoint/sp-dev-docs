---
title: Connect to an Office 365 Group
description: Connect SharePoint team sites to an Office 365 Group
ms.date: 04/17/2018
ms.prod: sharepoint
---

# Connect to an Office 365 Group

Being able to connect an Office 365 group to an existing SharePoint site is important if you want to modernize that site. Once connected to an Office 365 group your site can benefit from all other group connected services like Microsoft Teams, Planner etc. This also brings your "classic" site a step closer to being a like the current modern team site, which by default is connected to an Office 365 group. 

The process to connect an existing site to a new Office 365 group is called "groupify". You can "groupify" your site from the user interface, site per site which might be good for smaller environments. However (larger) customers often want to offer a consist experience to their users and therefore want to perform a bulk "groupify" of their sites. In the article you'll learn how to prepare for such a bulk "groupify" and how actually make it happen.

> [!IMPORTANT]
> The option to connect an Office 365 group to an existing site is **not** yet available and will be released during Q2 of calendar year 2018.

## What does "groupify" do to your site

When you "groupify" your site  a number of things will happen:

- A **new** Office 365 group will be created and that group will be connected to your site collection
- A **new** modern home page will be created in your site and set as the site's home page
- The group's Owners will now be the site collection administrators
- The group's Owners will be added to your site's Owners group
- The group's Members will be added to your site's Members group

Once connected to an Office 365 group the site behaves like a modern group connected team site, so granting people permission to the connected Office 365 group will now also grant them access to the SharePoint site, a Microsoft Team can be created on top of the site, Planner can be integrated,...

## Connecting an Office 365 group using the SharePoint user interface

A first approach to connect an Office 365 to your site is to use the option available in the user interface. By clicking on the **gear** icon in the navigation bar you can select the **Connect to new Office 365 Group** option which will launch a wizard walking you through the "groupify" process as shown in below screenshots.

**Site Actions** 

![Site Actions](media/modernize/groupifyusingui_1.png)

**Wizard**

![Wizard](media/modernize/groupifyusingui_3.png)

## Programmatically connecting an Office 365 group

Similar to the user interface modernization we recommend you to follow a three step process:

- Learn
- Analyze
- Modernize

### Step 1: Learn

Getting familiar with what "groupify" will do to your site is important and therefore it's recommended to do a manual "groupify" for some test sites using the user interface option. Important aspect to evaluate is whether you want to keep the newly created modern home page or not. As part of the modernization script you'll be able to create a tailored home page, but if the default created one does serve your need then that's the preferred option.

### Step 2: Analyze

The user interface option shown in previous chapter is not suitable if you want to "groupify" hundreds of site collections...at that point using an API to programmatically do this makes a lot of sense. But before doing that it's best to verify which sites are ready to be "groupified" as not all sites are suitable to be "groupified". 

To help you understand which sites are ready to be "groupified" you can use the [SharePoint Modernization Scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.Modernization) to analyze your environment. The mentioned link contains all the details needed to use the scanner and information about what get's outputted by the scanner, below you'll find the key things to verify before you "groupify" a site:

#### Check for "groupify" blockers

Certain configurations in a site can prevent it from successfully being "groupified":

- `IncompatibleWebTemplate`: Site is based on a web template that's not supported by "groupify"
- `PublishingFeatureEnabled`: Site has publishing features enabled
- `SiteHasOffice365Group`: Site was already connected to an Office 365 group

In the scanner sites with "groupify" blockers have the column `ReadyForGroupify` set to `False`.

#### Check for "groupify" warnings

Sites can have one more configurations that are not optimal when that site gets "groupified". In the scanner these are flagged as warnings as they're not necessarily causing issues after "groupify" but you should be aware of them and if needed take corrective steps before/after "groupifying" the site. In the scanner you can see the warnings in the column `GroupifyWarnings` as main column, but depending on the warning more details can be found in the columns `PermissionWarnings` and `ModernUIWarnings`. Before spending time on a site it's wise to evaluate whether the site is still business relevant: to help you with that decision the report does contain columns showing the recent/lifetime views and unique users for a site collection.

So what are the possible "groupify" warnings:

- `ModernUIIssues`: The default "groupify" process will give your site a new modern home page...if however your site is blocking modern UI or has customizations that are not compatible you might want to first ensure the site is ready for modern UI before "groupifying" it. The details of which modern UI issues were found by the scanner can be found in the column `ModernUIWarnings`
- `ADGroupWillNotBeExpanded`: When you "groupify" via the user interface you've an option to define the Office 365 group's owners and members, when you bulk "groupify" the sample script explained later on will do the same. However, since an Office 365 group can only contain persons as Owners or Members this means that if you today granted access to your SharePoint site using an Azure AD security group you can't add that Azure AD security group as Office 365 group owner or member. If you want to only rely on the permissions defined on the Office 365 group then you'll need to add all individual Azure AD group members as part of the "groupify" process...but often having identical access defined on both the SharePoint site and the Office 365 group is not needed, making this not a blocking issue
- `SiteHasSubSites`: In the modern team and communication sites the use of sub sites is de-emphasized...you can perfectly "groupify" a site collection with sub sites, but the scanner raises this as a warning for awareness
- `DefaultHomePageImpacted`: Since "groupify" by default creates and sets a new home page for the site this might impact your site's functionality if the site was based on web template different than the classic team site template. You might have a tailored home page and want to create a new tailored, modern, home page (see later on) which makes this a non-issue, but it's important to verify this

If you see `ModernUIIssues` you can get a better understanding of them via the `ModernUIWarnings` column:

- `ModernPageFeatureDisabled`: Since after "groupify" the site gets a modern home page its important that the modern homepage feature is enabled
- `ModernListsBlockedAtSiteLevel` and `ModernListsBlockedAtWebLevel`: Preventing modern user interface for lists and libraries is not blocking "groupify", but since "groupify" is typically part of a site modernization it makes no sense to prevent lists and libraries to use modern user interface on an Office 365 group connected site
- `MasterPageUsed` and `AlternateCSSUsed`: Custom master pages or alternate CSS is not used on modern pages...if your site depends on those you might want to verify as those custom master pages and CSS will not work on the modern home page the site will get
- `UserCustomActionUsed`: User custom actions that embed JavaScript is a commonly used pattern to customize sites, but this does not work for modern pages. If you have user custom actions then you can build alternatives using SharePoint Framework extensions and install those to your site (see later on).
- `PublishingFeatureEnabled`: The publishing features are not compatible with the modern page feature, which is an requirement due to the modern home page being set

The last _warnings_ column is `PermissionWarnings`:

- `SharingDisabledForSiteButGroupWillAllowExternalSharing`: The default configuration for Office 365 group connected sites is to allow sharing with externals...but you might have disabled sharing with externals for your site
- `SubSiteWithBrokenPermissionInheritance`: Previously we mentioned sub sites are not optimal, but not a blocker. If you have sub sites with unique permissions then these will not _inherit_ the permissions defined on the connected Office 365 group
- `PrivateGroupButEveryoneUsedOutsideOfAdminOwnerMemberGroups`: The scanner will propose to create the group either as private or public and it does this based on the existence of the **everyone** claims inside the SharePoint site's administrators, owners or members. You can however also have used the **everyone** claims outside of these groups, which is indicated by this warning

### Step 3: Modernize

The actual bulk "groupify" process consists out of 2 steps:

- Prepare and validate an input file that you'll use to drive the bulk "groupify" process
- Run the bulk "groupify" process

#### Create an input file for bulk "groupify" and validate it

After running the scanner and processing the results you have identified which sites are good to "groupify". Next step is preparing a CSV file to drive the bulk "groupify" process. The CSV file format is simple:

- **URL** column contains the URL to the site collection to "groupify"
- **Alias** contains the Office 365 group alias that you want to use. Note that this alias cannot contain spaces and it should not have been used before
- **IsPublic** indicates whether you want the site to be a public or private site
- **Classification** contains the site classification you want to set to the site after "groupify". This is needed as after being connected to a group this classification is maintained at Office 365 Group level

Here's a small sample:

```Text
Url,Alias,IsPublic,Classification
https://contoso.sharepoint.com/sites/hrteam,hrteam,false,Medium Impact
https://contoso.sharepoint.com/sites/engineering,engineeringteam,true,Low Impact
```

To help you verify this file before using it you can use below PowerShell script. This script will check for valid site URL's and aliases. Update this script with your tenant admin center URL and run it. The script will ask for the CSV file name and generates a report for you. During the validation script execution the following errors can popup:

- **[ERROR] AzureAD Naming policy : _PrefixSuffix_ does contain AD attributes that are resolved based on the user running the groupify**: In Azure AD you can define a [naming policy for Office 365 Groups](https://support.office.com/en-us/article/office-365-groups-naming-policy-6ceca4d3-cad1-4532-9f0f-d469dfbbb552?ui=en-US&rs=en-001&ad=US). If this policy contains user AD attributes then this might be an issue as bulk "groupify" handles all sites using the _current_ user
- **[ERROR] AzureAD Creation policy : _adminUPN_ is not part of group _CanCreateGroupsId_ which controls Office 365 Group creation**: If [Azure AD Group creation is restricted to certain accounts](https://support.office.com/en-us/article/manage-who-can-create-office-365-groups-4c46c8cb-17d0-44b5-9776-005fced8e618?ui=en-US&rs=en-001&ad=US) and the _current_ account is not amongst those then the Office 365 Group creation will fail
- **[ERROR] _siteUrl_ : Alias [_siteAlias_] contains a space, which not allowed**: The alias of an Office 365 Group cannot contain a space
- **[ERROR] _siteUrl_ : Classification [_siteClassification_] does not comply with available AzureAD classifications [_ClassificationListString_]**: The provided site classification is not defined as [one of the allowed site classifications for Office 365 Groups](https://support.office.com/en-us/article/Manage-Office-365-Groups-with-PowerShell-aeb669aa-1770-4537-9de2-a82ac11b0540)
- **[ERROR] _siteUrl_ : Alias [_siteAlias_] is in the AzureAD blocked word list [_CustomBlockedWordsListString_]**: If a [blocked words list is setup in Azure AD](https://support.office.com/en-us/article/office-365-groups-naming-policy-6ceca4d3-cad1-4532-9f0f-d469dfbbb552?ui=en-US&rs=en-001&ad=US) and the provided Office 365 Group name uses such a word then this error is generated
- **[ERROR] _siteUrl_ : Site is already connected a group**: A site can only be connected to a single Office 365 Group, so once connected the site can not be "groupified" anymore
- **[ERROR] _siteUrl_ : Alias [_siteAlias_] is already in use**: Each Office 365 Group needs a unique alias, an error is generated when the proposed alias was already used by another Office 365 Group
- **[ERROR] _siteUrl_ : Alias [_siteAlias_] was already marked as approved alias for another site in this file**: The proposed site alias was already defined for another site in earlier input lines of the bulk "groupify" CSV file
- **[ERROR] _siteUrl_ : Site does not exist or is not available (status = _site.Status_)**: The provided site URL does not represent a reachable site collection

> [!NOTE]
> Please update the `$tenantAdminUrl` variable in the script to contain your tenant admin center URL (e.g. https://contoso-admin.sharepoint.com).

[!code-powershell[validategroupifyinput](../../PnP-Tools/Solutions/SharePoint.Modernization/Scripts/Groupify/ValidateInput.ps1 "Validate groupify input file")]

During script execution a log file will be generated combined with an error file which contains a subset of the log file (only the errors).

#### Running bulk "groupify"

Now that we've an input file that's defining the sites that need to be "groupified" we can finally make it happen. The PowerShell script shared below is **sample** script that you can tweak to your needs as you might want to more/less things as part of "groupify". The shared sample version of the script implements the following steps:

- Add current tenant admin as site admin when needed: "groupify" requires a user account (so no app-only)
- Verify site template / publishing feature use and prevent groupify, aligns with the logic in the scanner
- Ensure no modern blocking features are enabled...if so fix it
- Ensure the modern page feature is enabled
- **Optional**: Deploy applications (e.g. application customizer)
- **Optional**: Add your own modern home page
- Call groupify API
- Define Site Admins and Site owners as group owners
- Define Site members as group members
- Remove added tenant admin and site owners from SharePoint admins
- Remove added tenant admin from the Office 365 group

Running the below PowerShell script requires you to update the tenant admin center URL and at run time provide credentials and the CSV input file.

> [!NOTE]
> This is a sample script that you need to address to your needs by updating/dropping the **optional** parts or by adding additional modernization tasks (like setting a SharePoint site theme). Please update the `$tenantAdminUrl` variable in the script to contain your tenant admin center URL (e.g. https://contoso-admin.sharepoint.com).


[!code-powershell[bulkgroupify](../../PnP-Tools/Solutions/SharePoint.Modernization/Scripts/Groupify/GroupifySite.ps1 "Bulk groupify sites")]

During script execution a log file will be generated combined with an error file which contains a subset of the log file (only the errors).