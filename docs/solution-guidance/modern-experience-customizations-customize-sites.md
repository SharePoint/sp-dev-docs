---
title: Customizing "modern" team sites
description: Apply a custom theme to a "modern" team site in SharePoint Online. 
ms.date: 11/08/2017
---

# Customizing "modern" team sites

In 2016, the SharePoint Online team released "modern" collaboration sites. These "modern" team sites are integrated with Office 365 groups and bring a greatly improved end user experience. "Modern" team sites are responsive by design and are much faster to create and use from an end user perspective. Following are some of the key benefits in the "modern" team sites:

- Designed to scale for any device natively without customizations, a fully responsive experience
- Native news, quick links, and activity capabilities 
- Office 365 group integration 
- Significantly faster to create compared to "classic" team sites
- Modern lists and libraries with support for Microsoft Flow and PowerApps
- Modern page editing capabilities
- Updated site contents page with additional insights on site usage

This article concentrates on the available extensibility options within "modern" team sites:

- [New capabilities in SharePoint Online team sites including integration with Office 365 Groups](https://blogs.office.com/2016/08/31/new-capabilities-in-sharepoint-online-team-sites-including-integration-with-office-365-groups)
- [Create connected SharePoint Online team sites in seconds](https://blogs.office.com/2016/11/08/create-connected-sharepoint-online-team-sites-in-seconds)
- [Allow or prevent custom script](https://support.office.com/en-us/article/Allow-or-prevent-custom-script-1f2c515f-5d7e-448a-9fd7-835da935584f?ui=en-US&rs=en-US&ad=US)

> [!IMPORTANT]
> We're not deprecating the "classic" experience; both "classic" and "modern" will coexist.

<a name="supportedcustomizations"> </a>
## Supported customizations in "modern" team sites

"Modern" sites have a different level of customization options compared to "classic" team sites. Over time we'll introduce additional customization options, mainly focusing on extensibility and branding. The following list gives a quick overview of the supported capabilities for "modern" team sites:

- Apply a custom theme / change the logo
- Apply an out-of-the-box theme
- Custom site columns (fields) and content types
- Lists and libraries
- Site configurations, such as regional settings, languages, and auditing settings

> [!NOTE]
> By default, a "modern" team site has scripting capabilities turned off. You can still apply a custom theme, but you cannot introduce a custom theme to the theme gallery as an option for end users. If you want to add a theme to the theme gallery, you need to [enable scripting](https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f) on the site.

<a name="notsupported"> </a>
### What's not supported with "modern" team sites?

In numerous areas on the "modern" team sites, the typical customizations are not currently available. Further support will be available for some of these topics when they are ready to be released. Following is a list of currently unsupported customizations on "modern" team sites:

- Custom master pages; more extensive branding will be supported later using alternative options
- Changing "modern" site to use classic seattle.master or oslo.master
- Custom page layouts; we are looking to have support for multiple canvases in the future
- Enabling site or site collection scoped publishing features; technically, features can be currently activated, but this is not a supported configuration.
- User custom actions / custom JavaScript; there will be a more controlled way to embed JavaScript on the pages through the SharePoint Framework Extensions (currently in dev preview)
- "Modern" subsites; subsites created in "modern" team sites use the "classic" experience, but you can change the user experience to be similar to "modern" sites
- Control available subsite template options
- "Classic" publishing features (WCM)
- Activating community feature or creating community subsites under "modern" team site

Because "modern" team sites also have scripting capabilities disabled (it's a so called 'noscript' site), numerous areas cannot be customized. The impact of 'noscript' is the same for "modern" or "classic" sites. "Modern" sites have 'noscript' enabled by default, meaning that scripting capabilities are not available. However, it is possible and supported to disable 'noscript' settings in both "modern" and "classic" sites to further enable some capabilities. 

Following are some key areas to consider when you design your solutions related to the 'noscript' setting:

- Sandbox solutions are not supported
- Custom JavaScript cannot be enabled on the sites by using "classic" extensibility options (for example, via user custom actions)
- You cannot access sites using SharePoint Designer
- Some web parts are not available for end users
- Accessing or updating site property bag entries

> [!NOTE]
> You can find the full list of impacted capabilities from the Microsoft Support article [Allow or prevent custom script](https://support.office.com/en-us/article/Allow-or-prevent-custom-script-1f2c515f-5d7e-448a-9fd7-835da935584f?ui=en-US&rs=en-US&ad=US) under the "Features affected when custom script is blocked" section.

<a name="pnpprovisioningengine"> </a>
### Using PnP Provisioning Engine with "modern" team sites

You can use the [PnP provisioning engine](https://msdn.microsoft.com/en-us/pnp_articles/pnp-provisioning-engine-and-the-core-library) with "modern" team sites. The PnP provisioning engine automatically detects if a site is a "modern" team site and adjusts its behavior based on the supported capabilities. The process is exactly the same as using the PnP provisioning engine with "classic" sites where the scripting capabilities are not disabled.

The following elements are ignored when a remote template is applied to a "modern" team site or a site that has 'noscript' enabled:

- Site collection AuditLogTrimmingRetention configuration in the auditing settings
- Apply a custom theme from the template; current implementation has a dependency on storing a custom theme to the catalog, which is not supported
- Form settings for content types
- Adding custom user actions to site, web, or list level 
- Adding files with file types of ".asmx", ".ascx", ".aspx", ".htc", ".jar", ".master", ".swf", ".xap", ".xsf"
- Adding files to libraries with the following urls  `"_catalogs/theme"`, `"style library"`, `"_catalogs/lt"`, `"_catalogs/wp"` 
- Adding web parts to site pages
- Storing provisioning template information to the property bag of the provisioned site
- Adding or updating property bag entries to the site property bag
- "Classic" publishing settings and assets
- Site No Crawl settings
- Site master page settings

## Applying custom theme to "modern" team site

"Modern" team sites support custom themes even though you cannot upload a new gallery entry for end users. This can be achieved by uploading the needed assets to the site and then executing the **ApplyTheme** method. The following PowerShell script shows how to perform this for a "modern" team site.

```PowerShell

# Connect to a previously created Modern Site
$cred = Get-Credential
Connect-PnPOnline https://[tenant].sharepoint.com/sites/siteurl -Credentials $cred

# Apply a custom theme to a Modern Site

# First, upload the theme assets
Add-PnPFile -Path .\sppnp.spcolor -Folder SiteAssets
Add-PnPFile -Path .\sppnp-bg.png -Folder SiteAssets

# Second, apply the theme assets to the site
$web = Get-PnPWeb
$palette = $web.ServerRelativeUrl + "/SiteAssets/sppnp.spcolor"
$background = $web.ServerRelativeUrl + "/SiteAssets/sppnp-bg.png"

# We use OOTB CSOM operation for this
$web.ApplyTheme($palette, [NullString]::Value, $background, $true)
$web.Update()
# Set timeout as high as possible and execute
$web.Context.RequestTimeout = [System.Threading.Timeout]::Infinite
$web.Context.ExecuteQuery()

```

*Figure 1. Modern team site with custom theme*

!["Modern team site with custom theme"](media/modern-experiences/modern-site-with-custom-theme.png)

> [!NOTE]
> - You can use the [SharePoint Color Palette Tool](https://www.microsoft.com/en-us/download/details.aspx?id=38182) to create a custom theme file (.spcolor) with the custom color definition. In general, modern team sites try to preserve the feel of the theme by automatically converting classic site theming elements to the modern side. Preserved areas are background image and the following theme slots: ContentAccent1, PageBackground, and BackgroundOverlay.
> - You can change the logo of "modern" team site by using the Groups Graph API as shown by the SharePoint [PnP UpdateUnifiedGroup method](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Framework/Graph/UnifiedGroupsUtility.cs#L350).
> - Applying a custom theme to a modern team site can cause timeouts. The resolution for this is to turn off all available [user interface languages](https://support.office.com/en-us/article/Choose-the-languages-you-want-to-make-available-for-a-site-s-user-interface-16d3a83c-05ab-4b50-8fbb-ff576a3351e8) for the site before applying the theme, and turn them back on afterwards.

## Determine if a site is a "modern" team site

You can detect that a site is a "modern" team site by checking the 'Web.WebTemplate' value of the site. "Modern" team sites use the "GROUP" template. Because the supported capabilities are the same for a "classic" team site when the scripting is disabled, you should be checking both settings in your code to determine the right behavior or supported capabilities.

Because there's no direct property to check if the scripting is enabled or not, you can use permissions to determine the current status. When scripting is enabled, there's no AddAndCustomizePages permission in the base permissions of the site.

```C#
/// <summary>
/// Can be used to check if site has noscript enabled.
/// </summary>
/// <param name="web">site object to inspect</param>
/// <returns>True if no scripting is enabled, False if it's not</returns>
public static bool IsNoScriptSite(Web web)
{
    // Ensure that we have the needed properties - Notice that these are 
    // PnP CSOM extension capabilities
    web.EnsureProperties(w => w.WebTemplate, w => w.EffectiveBasePermissions);

    // Definition of no-script is not having the AddAndCustomizePages permission
    if (!web.EffectiveBasePermissions.Has(PermissionKind.AddAndCustomizePages))
    {
        return true;
    }

    // It's a site without noscript enabled
    return false;
}
```

## Additional considerations

We'll gradually introduce more customization options for "modern" team sites that will be aligned with the release of additional SharePoint Framework capabilities. Currently there is no exact schedule available, but we'll update the "modern" experience articles whenever new capabilities are released.

## Additional resources

- [Customizing the "modern" experiences in SharePoint Online](modern-experience-customizations.md)
- [PnP Remote Provisioning](https://msdn.microsoft.com/en-us/pnp_articles/pnp-remote-provisioning)

