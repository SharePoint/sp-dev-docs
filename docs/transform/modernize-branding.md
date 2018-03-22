# Introduction

The SharePoint modern user interface does handle branding differently than classic SharePoint, more in particular it simply ignores custom master page or alternate CSS configurations. You can opt to leave these configurations in place in your modernized site so it still applies to a page being shown in a classic user interface, but it's cleaner to switch back the OOB master pages and remove the alternate CSS configuration. Next to these master pages and alternate CSS settings you could have used a classic custom theme. These classic custom themes do work on both classic as modern pages, but the more future proof model is the new tenant controlled SharePoint theme which obviously also applies to both classic as modern pages.

## Detecting sites using master pages or alternate CSS, which is incompatible the modern user interface

The recommended approach to find out which sites use a custom master page or use the alternate CSS option is running the [SharePoint "Modern" user interface experience scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UIExperience.Scanner). This tool will perform a deep analysis of all the sites in your tenant and create reports giving you details on sites still have incompatible master pages or alternate CSS settings. Based on the scanner output you can remediate these sites.

Below is a PnP PowerShell script that shows how to revert back to the default configuration:

```PowerShell
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

## Using a tenant controlled SharePoint theme

SharePoint offers a series of default themes out-of-the-box which you can use, but if you want to push your company branding it's recommended that you create your company theme and hide the out-of-the-box themes. Once that configuration is done your users can only select from the company SharePoint themes you've configured and you can programmatically set such a company SharePoint theme as part of the modernization effort.

Sample PnP PowerShell script showing how to add a company SharePoint theme

```PowerShell
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

To use your company SharePoint theme you can use the below script:

```PowerShell
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

## Learn more

You can find all the details in the [SharePoint site theming](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview) article.
