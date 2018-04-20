---
title: Sandbox solution transformation guidance - Feature receivers
ms.date: 11/03/2017
---
# Sandbox solution transformation guidance - Feature receivers 
Transform or convert your code-based sandbox solutions to the SharePoint add-in model. Learn about the options and strategies of converting existing functionality to SharePoint add-in model or alternative solutions.

_**Applies to:** Add-ins for SharePoint | SharePoint 2013 | SharePoint 2016 | SharePoint Online_


## Summary
Feature receivers are typically used to apply different kind of configurations or settings to SharePoint sites when feature is activated or when site is created (if feature associated to site template / web template). Feature receivers have been deployed using Sandbox solutions in the SharePoint Online, but since code-based customizations cannot no logner be used, alternative design will need to be taken. 

The approach you take to handle feature receivers in SharePoint is slightly different in the SharePoint add-in model than it was with Full Trust Code or in coded-sandbox solutions. You will need to re-design the solution in away that you use remote APIs (CSOM/REST) to apply the needed configurations to your sites, which previously existed in the feature receiver(s). 


## Options for replacing Feature Receivers
<a name="sectionSection2"> </a>

|**Approach**|**Additional Information**|
|:-----|:-----|
|PowerShell based customizations|<p>You use PowerShell scripts to provision new site collections (and potentially sub sites) where needed customizations are applied using remote APIs. Typically this is done by using CSOM/REST directly in the PowerShell scripts or by using PnP PowerShell commands, which provides easy way to modify sites and content remotely.</p><p><lu><li>[PnP provisioning engine](https://github.com/SharePoint/PnP-PowerShell)</li><li>[PnP PowerShell - Getting started with latest updates](http://dev.office.com/blogs/pnp-powershell-getting-started-with-latest-updates)</li></lu></p>|
|Code based customizations|<p>You can apply the needed customizations also using managed code with remote APIs. This means that you will either apply them as part of the administrative operation when the site is created or you apply customizations to SharePoint, which will hook in your code to be part of the UI elements, like by overiding the sub site creation logic, so that you can associate customizations as part of the provisioning logic.</p><p><lu><li>[Remote provisioning pattern for sub site creation](https://channel9.msdn.com/blogs/OfficeDevPnP/Using-remote-provisioning-pattern-for-sub-site-creation)</li><li>[PnP CSOM Core Component](https://github.com/SharePoint/PnP-sites-core)</li></lu></p>|

## Design Considerations
### PowerShell based provisioning
This model works great if your site provisioning model is based on administrative actions.
- Does require script to be executed which applies needed customizations to created sites
- Can be combined to site creation process, if performed by as administrative operation
- Does not require hosting infrastructure
- No way to combine automatically as part of the sub site creation process

### Code based provisioning
- Can require hosting infrastructure, if combined with end user operations
- You can use managed code which is executed anywhere using CSOM/REST APIs for the needed operations
- Can be used to integrate to SharePoint by overriding sub site creation link
- You can automate site collection and subsite provisioning using remote APIs

> If you want to provide automatic way to apply needed remote code as part of the sub site creation logic, you'll need to override sub site link using user custom actions. This option is only availale in sites, which are using classic mode around libraries and lists. 


## Reference approaches
### Applying needed customizations to sites using PowerShell
Here's a simple script which is using PnP PowerShell to upload a theme color file from computer to SharePoint Online and activates that in SharePoint site. 

> This sample is using [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell), which provides more than 150 additional PowerShell cmdlets targeted for site configuration and asset management. 

```postscript 

Connect-SPOnline –Url https://yoursite.sharepoint.com/ –Credentials (Get-Credential)
Add-SPOFile -Path c:\temp\company.spcolor -Folder /_catalogs/theme/15/
Set-SPOTheme -ColorPaletteUrl /_catalogs/theme/15/company.spcolor

```

### Applying needed customizations to sites using code
Here's a simple code piece which uses SharePoint Online CSOM to activate custom theme by first uploading the assets to SharePoint site and then activating custom theme. 

> This sample is using [PnP CSOM Core Component](https://github.com/SharePoint/PnP-sites-core), which extends the native out of the box operations by introducing additional set of extension methods for common operations. You can perform similar operations also by using native CSOM, but code would be significantly more complex.

```csharp

// Upload assets to theme folder
clientContext.Site.RootWeb.UploadThemeFile(
        HostingEnvironment.MapPath(string.Format("~/{0}", "Resources/Themes/SPC/SPCTheme.spcolor")));
clientContext.Site.RootWeb.UploadThemeFile(
        HostingEnvironment.MapPath(string.Format("~/{0}", "Resources/Themes/SPC/SPCbg.jpg")));

Web web = clientContext.Web;
// loading RootWeb.ServerRelativeUrl property;
clientContext.Load(clientContext.Site, w => w.RootWeb.ServerRelativeUrl); 
clientContext.ExecuteQuery();
// Let's first upload the contoso theme to host web, if it does not exist there
web.CreateComposedLookByUrl("Contoso",
                clientContext.Site.RootWeb.ServerRelativeUrl + "/_catalogs/theme/15/SPCTheme.spcolor",
                null,
                clientContext.Site.RootWeb.ServerRelativeUrl + "/_catalogs/theme/15/SPCbg.jpg",
                string.Empty);

// Setting the Contoos theme to host web
web.SetComposedLookByUrl("Green");

```

When you are using code based approaches, we recommend using [PnP provisioning engine](http://dev.office.com/blogs/sharepoint-pnp-remote-provisioning-engine-august-2016) for the template management, which will dramatically simplify the development efforts. 

## Removing sandbox solution containing feature receiver code from your site
<a name="sectionSection3"> </a>
If your sandbox solution contains feature receivers logic for feature deactivation and it's important that those are being executed, before code-based support is completely removed, you should ensure that these kind of features are deactivated before the code-based support is disabled from SharePoint Online. You can uninstall sandbox solutions from SharePoint Online after the code-based support is disabled, but your faeture receiver code would not be executed even though features are getting moved from the site. 

When you deactivate your existing sandbox solution from your sites, any assets or files deployed using declarative options will not be removed however, the feature will automatically be deactivated. Execution of the code in the feature receiver, is dependent on the timing when the sandbox solution is deactivated. 


## See also
<a name="bk_addresources"> </a>
-  [Removing Code-Based Sandbox Solutions in SharePoint Online](http://dev.office.com/blogs/removing-code-based-sandbox-solutions-in-sharepoint-online)
-  [Sandbox solution transformation guidance](https://msdn.microsoft.com/en-us/pnp_articles/sandbox-solution-transformation-guidance)
-  [PnP PowerShell](https://github.com/SharePoint/PnP-PowerShell/blob/master/README.md) - Script based customizations
-  [PnP CSOM Core training](https://blogs.msdn.microsoft.com/vesku/2016/04/12/office-dev-pnp-core-componenttraining-package/) - For code based options
