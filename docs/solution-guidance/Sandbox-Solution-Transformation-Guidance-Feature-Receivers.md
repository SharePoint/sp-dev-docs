---
title: Sandbox solution transformation guidance - Feature receivers
description: Learn about the options and strategies of converting existing functionality to the SharePoint Add-in model or alternative solutions.
ms.date: 5/7/2018
---

# Sandbox solution transformation guidance - Feature receivers 

Feature receivers are typically used to apply different kinds of configurations or settings to SharePoint sites when the feature is activated or when the site is created (if the feature is associated to a site template or web template). Feature receivers have been deployed by using sandbox solutions in SharePoint Online; however, because code-based customizations can no longer be used, you must use an alternative design. 

The approach you take to handle feature receivers in SharePoint is slightly different in the SharePoint Add-in model than it was with Full Trust Code or in coded-sandbox solutions. You must redesign the solution in a way that uses remote APIs (CSOM/REST) to apply the needed configurations to your sites. 

> [!NOTE] 
> [Code-based sandbox solutions were deprecated](https://blogs.msdn.microsoft.com/sharepointdev/2014/01/14/deprecation-of-custom-code-in-sandboxed-solutions/) in 2014, and SharePoint Online has started the process to completely remove this capability. Code-based sandbox solutions are also deprecated in SharePoint 2013 and in SharePoint 2016.

## Options for replacing feature receivers

|Approach|Design considerations and more information|
|:-----|:-----|
|PowerShell-based customization|<ul><li>Uses PowerShell scripts to provision new site collections (and potentially subsites) where needed customizations are applied by using remote APIs. Typically this is done by using CSOM/REST directly in the PowerShell scripts or by using PnP PowerShell commands, which provides an easy way to modify sites and content remotely.</li><li>Works well if your site provisioning model is based on administrative actions.</li><li>Requires script to be executed that applies needed customizations to created sites.</li><li>Can be combined with site creation process, if performed as an administrative operation.</li><li>Does not require a hosting infrastructure.</li><li>Cannot be combined automatically as part of the subsite creation process.</li></ul><ul><li>[PnP provisioning engine (GitHub)](https://github.com/SharePoint/PnP-PowerShell)</li><li>[PnP PowerShell - Getting started with latest updates](http://dev.office.com/blogs/pnp-powershell-getting-started-with-latest-updates)</li></ul>|
|Code-based customization|<ul><li>Applies the needed customizations by using managed code with remote APIs. This means that you either apply them as part of the administrative operation when the site is created, or you apply them to SharePoint, which hooks in your code to be part of the UI elements.</li><li>Can require a hosting infrastructure if combined with end-user operations.</li><li>Can use managed code that is executed anywhere by using CSOM/REST APIs for the needed operations.</li><li>Can be used to integrate to SharePoint by overriding subsite creation link.</li><li>Can automate site collection and subsite provisioning by using remote APIs.</li><ul><li>[Remote provisioning pattern for sub site creation](https://channel9.msdn.com/blogs/OfficeDevPnP/Using-remote-provisioning-pattern-for-sub-site-creation)</li><li>[PnP CSOM Core Component (GitHub)](https://github.com/SharePoint/PnP-sites-core)</li></ul>|

> [!NOTE] 
> If you want to provide an automatic way to apply needed remote code as part of the subsite creation logic, you must override the subsite link by using user custom actions. This option is only available for sites that use the classic model for libraries and lists. 

## Applying needed customizations to sites

### Using PowerShell

Following is a simple script that uses PnP PowerShell to upload a theme color file from a computer to SharePoint Online and then activate the file on the SharePoint site. 

This sample uses [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell), which provides more than 150 additional PowerShell cmdlets targeted for site configuration and asset management. 

```powershell 
Connect-SPOnline –Url https://yoursite.sharepoint.com/ –Credentials (Get-Credential)
Add-SPOFile -Path c:\temp\company.spcolor -Folder /_catalogs/theme/15/
Set-SPOTheme -ColorPaletteUrl /_catalogs/theme/15/company.spcolor
```

### Using code

Following is a simple code sample that uses SharePoint Online CSOM to activate a custom theme by first uploading the assets to a SharePoint site and then activating the custom theme. 

This sample uses the [PnP CSOM Core Component](https://github.com/SharePoint/PnP-sites-core), which extends the native out-of-the-box operations by introducing an additional set of extension methods for common operations. You can perform similar operations by using native CSOM, but the code would be significantly more complex.

```csharp

// Upload assets to theme folder.
clientContext.Site.RootWeb.UploadThemeFile(
        HostingEnvironment.MapPath(string.Format("~/{0}", "Resources/Themes/SPC/SPCTheme.spcolor")));
clientContext.Site.RootWeb.UploadThemeFile(
        HostingEnvironment.MapPath(string.Format("~/{0}", "Resources/Themes/SPC/SPCbg.jpg")));

Web web = clientContext.Web;
// Loading RootWeb.ServerRelativeUrl property.
clientContext.Load(clientContext.Site, w => w.RootWeb.ServerRelativeUrl); 
clientContext.ExecuteQuery();
// Let's first upload the contoso theme to host web, if it does not exist there.
web.CreateComposedLookByUrl("Contoso",
                clientContext.Site.RootWeb.ServerRelativeUrl + "/_catalogs/theme/15/SPCTheme.spcolor",
                null,
                clientContext.Site.RootWeb.ServerRelativeUrl + "/_catalogs/theme/15/SPCbg.jpg",
                string.Empty);

// Setting the Contoos theme to host web.
web.SetComposedLookByUrl("Green");

```

> [!TIP] 
> When you use code-based approaches, we recommend using the [PnP provisioning engine](https://dev.office.com/blogs/sharepoint-pnp-remote-provisioning-engine-august-2016) for template management, which dramatically simplifies the development effort. 

## Removing sandbox solution containing feature receiver code from your site

If your sandbox solution contains feature receivers logic for feature deactivation, and it's important that they are executed, before code-based support is completely removed, you should ensure that these features are deactivated before the code-based support is disabled from SharePoint Online. 

You can uninstall sandbox solutions from SharePoint Online after the code-based support is disabled, but your faeture receiver code would not be executed even though features are getting moved from the site. 

When you deactivate your existing sandbox solution from your sites, any assets or files deployed by using declarative options are not removed. However, the features in the sandbox solution are automatically deactivated and the event receiver is removed.


## See also

- [PnP PowerShell script-based customizations](https://github.com/SharePoint/PnP-PowerShell/blob/master/README.md)
- [PnP CSOM Core training for code-based options](https://blogs.msdn.microsoft.com/vesku/2016/04/12/office-dev-pnp-core-componenttraining-package/)
- [Transform sandbox solutions to the SharePoint Add-in model](sandbox-solution-transformation-guidance.md)