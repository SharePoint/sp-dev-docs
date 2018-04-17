---
title: Modernize site branding
description: Guidance on moving to modern customization experiences within SharePoint, including how to handle the custom master pages and alternate CSS configurations.
ms.date: 04/17/2018
ms.prod: sharepoint
---

# Modernize site branding

The SharePoint modern user interface handles branding differently from classic SharePoint; in particular, it simply ignores custom master pages or alternate CSS configurations (which are incompatible in the modern user interface). You can opt to leave these configurations in place in your modernized site so that it still applies to a page being shown in a classic user interface, but it's cleaner to switch back the OOB master pages and remove the alternate CSS configuration. 

Next to these master pages and alternate CSS settings, you could have used a classic custom theme. These classic custom themes work on both classic and modern pages, but the more future-proof model is the new tenant-controlled SharePoint theme, which obviously applies to both classic and modern pages.

## Detect sites that use master pages or alternate CSS

The recommended approach to find out which sites use a custom master page or use the alternate CSS option is to run the [SharePoint "Modern" user interface experience scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UIExperience.Scanner). This tool performs a deep analysis of all the sites in your tenant and create reports that give you details on sites that still have incompatible master pages or alternate CSS settings. Based on the scanner output, you can remediate these sites. 

Following is a PnP PowerShell script that shows how to revert back to the default configuration:

```powershell
$minimumVersion = New-Object System.Version("2.24.1803.0")
if (-not (Get-InstalledModule -Name SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module SharePointPnPPowerShellOnline -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your site url>"

# Set out-of-the-box master page
Set-PnPMasterPage -MasterPageSiteRelativeUrl _catalogs/masterpage/seattle.master -CustomMasterPageSiteRelativeUrl _catalogs/masterpage/seattle.master

# Remove the alternate CSS setting
$web = Get-PnPWeb -Includes AlternateCssUrl
$web.AlternateCssUrl = ""
$web.Context.ExecuteQuery()
```

## Use a tenant-controlled SharePoint theme

SharePoint offers a series of default themes out-of-the-box that you can use, but if you want to push your company branding, we recommend that you create your company theme and hide the out-of-the-box themes. After that configuration is complete, your users can only select from the company SharePoint themes that you've configured, and you can programmatically set such a theme as part of the modernization effort.

Following is a sample PnP PowerShell script showing how to add a company SharePoint theme:

```powershell
$minimumVersion = New-Object System.Version("2.24.1803.0")
if (-not (Get-InstalledModule -Name SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module SharePointPnPPowerShellOnline -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your tenant admin url>"

# Define your company theme colors
$themepalette = @{
      "themePrimary" = "#00ffff";
      "themeLighterAlt" = "#f3fcfc";
      "themeLighter" = "#daffff";
      "themeLight" = "#affefe";
      "themeTertiary" = "#76ffff";
      "themeSecondary" = "#39ffff";
      "themeDarkAlt" = "#00c4c4";
      "themeDark" = "#009090";
      "themeDarker" = "#005252";
      "neutralLighterAlt" = "#f8f8f8";
      "neutralLighter" = "#f4f4f4";
      "neutralLight" = "#eaeaea";
      "neutralQuaternaryAlt" = "#dadada";
      "neutralQuaternary" = "#d0d0d0";
      "neutralTertiaryAlt" = "#c8c8c8";
      "neutralTertiary" = "#a6a6a6";
      "neutralSecondaryAlt" = "#767676";
      "neutralSecondary" = "#666666";
      "neutralPrimary" = "#333";
      "neutralPrimaryAlt" = "#3c3c3c";
      "neutralDark" = "#212121";
      "black" = "#000000";
      "white" = "#fff";
      "primaryBackground" = "#fff";
      "primaryText" = "#333"
     }

# Add the company theme
Add-PnPTenantTheme -Identity "CustomCompanyTheme" -Palette $themepalette -IsInverted:$false
```

<br/>

To use your company SharePoint theme, you can use the following script:

```powershell
$minimumVersion = New-Object System.Version("2.24.1803.0")
if (-not (Get-InstalledModule -Name SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module SharePointPnPPowerShellOnline -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your site url>"

# Set the company theme
Set-PnPWebTheme -Theme "CustomCompanyTheme"
```

## See also

- [SharePoint site theming](../declarative-customization/site-theming/sharepoint-site-theming-overview.md)
- [Modernize your classic SharePoint sites](modernize-classic-sites.md)