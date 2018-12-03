---
title: Transform classic pages to modern client-side pages using PowerShell
description: Explains how to transform classic wiki and web part pages into modern client side pages using the SharePoint PowerShell
ms.date: 11/19/2018
ms.prod: sharepoint
---

# Transforming to modern site pages using PowerShell

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [PnP Tools GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

The page transformation engine can also be used from PowerShell. This allows it to be integrated in a site modernization script that besides page transformation also does other things like installing solution, connecting the site to an Office 365 group and applying tenant branding. A good example of an all-up modernization script can be found [in the Office 365 Group connect article](modernize-connect-to-office365-group.md).

> [!IMPORTANT]
> To use PowerShell it's important to have all the needed binaries together in one folder. The easiest solution is to download the latest version and all dependencies from the shared [SharePointPnP.Modernization binary package](https://github.com/SharePoint/sp-dev-modernization/blob/master/Tools/SharePoint.Modernization/Scripts/PageTransformation/SharePointPnP.Modernization.v1.0.1811.2%20binaries.zip?raw=true). Another way to get this list of binaries is to use Visual Studio, add the [SharePointPnPModernizationOnline](https://www.nuget.org/packages/SharePointPnPModernizationOnline) package and build the solution. Once that's done you can find the needed binaries in the solution's bin folder.

Below script shows how to call the transformation engine using [PnP PowerShell](http://aka.ms/sppnp-powershell):

[!code-powershell[transformpages](../../PnP-Tools/Solutions/SharePoint.Modernization/Scripts/PageTransformation/TransformPageSample.ps1 "Transform pages to modern pages using PowerShell")]

## Options for the Invoke-PnPModernizationPageTransformation cmdlet

The **Invoke-PnPModernizationPageTransformation** cmdlet is the key cmdlet to modernize a given page. Below table lists the command line parameters that you can use to control the page transformation via this cmdlet.

Parameter | Default | Description
----------|---------|------------
Page (*) | | The page in the format of a ListItem that will need to be transformed
WebPartMappingFile (*) | |  Page transformation is driven by a mapping file. The earlier explained approaches to get the needed binaries will also give you the default web part mapping file (`webpartmapping.xml`) which you can reference and optionally tweak. to fit your page transformation needs (e.g. transforming to 3rd party custom web parts).
Overwrite | $false | When you configure `Overwrite = $true` then the page transformation framework will overwrite the target page if needed. By default the new page name has a prefix of Migrated_, which then implies that if Migrated_YourPage.aspx already exists (typically from a previous page transformation effort) it will be overwritten.
AddPageAcceptBanner | $false | Setting this option will make the page transformation framework put the configured PageAcceptBanner web part on top of the created modern page. Using this web part the users accessing the page can decide whether they want to keep or discard the created modern page. See the [Page Transformation UI](modernize-userinterface-site-pages-ui.md) article to learn more on how to install and configure the default page banner web part.
HandleWikiImagesAndVideos | $true | A wiki page can contain embedded video and text which is not possible in a modern text part. By default the wiki text will be split at each embedded image or video, a video or image web part will be added to the modern page and then the remainder of the original text. If you don't like this automatic fixing you can set this option to false which will result in each embedded image and video being replaced by a text placeholder combined with individual video and image web pars at the bottom of the page.
ReplaceHomePageWithDefaultHomePage | $false | The default behavior is to transform your site's home page to a modern page like any other regular page. If you set this option to true then a site's home page will be transformed to a 'default' out-of-the-box modern home page, so the one you would get with a newly created modern team site.
TargetPageTakesSourcePageName | $false | The default behavior is to give the created modern page a name that starts with the prefix Migrated_ and let the original page keep it's existing name. When this option is specified the newly created page gets the name of the original page and the original page is renamed with a prefix Previous_. Set this option if you're sure you want to move forward with the modern page as it will ensure that all links pointing the original page now result in the new modern page being loaded.

(*) Mandatory command line parameter

## FAQ

### Modern site pages don't work on the site I want to transform pages in

By default the modern site page capability is enabled on most sites but maybe it was turned off afterwards. If that's the case the [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner) will tell you which sites have turned of the modern page feature. To remediate this use below sample PnP PowerShell script:

```PowerShell
$minimumVersion = New-Object System.Version("2.24.1803.0")
if (-not (Get-InstalledModule -Name SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module SharePointPnPPowerShellOnline -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your web url>"

# Enable modern page feature
Enable-PnPFeature -Identity "B6917CB1-93A0-4B97-A84D-7CF49975D4EC" -Scope Web -Force
```

## See also

- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [Classic and modern web part experiences](https://support.office.com/en-us/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
