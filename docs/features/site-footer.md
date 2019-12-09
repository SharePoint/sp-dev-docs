---
title: Overview of the SharePoint Site footer
description: SharePoint Site footers can be used to show a logo or set of links/labels in a modern SharePoint site. They can be configured using the UI settings or by using APIs.
ms.date: 1/22/2019
localization_priority: Priority
---

# SharePoint Site Footer

Footers are a common branding / navigation control in websites and portals. SharePoint Communication sites will have an out-of-the box footer control, which can be controlled either using UI elements or by using APIs. This control supports following elements

- 8 links or labels
- Footer logo 
- Footer name

> [!IMPORTANT]
> Footer will be enabled by default for all new communication sites after the feature is rolled out. Along with this update, the content bar (also referred to as the “social bar”) - which contains the Like, Comment, View and Save for Later icons - will be docked permanently on top of the Comments section on all modern pages and news posts. 

## Sample footer 

Following picture demonstrates a footer with a logo, footer name and labels and links.

![Image showing a site footer with a logo](../images/Footer-logo-label.png)

## Controlling footer rendering using code or PowerShell

You can control the footer existence with a `FooterEnabled` property in the `Web` object. Following PowerShell scripts shows how this can be done using [PnP PowerShell cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps):

```ps

Connect-PnPOnline -Url "<SiteURL>" –Credentials (Get-Credential) 
$web = Get-PnPWeb 
$web.FooterEnabled = $false 
$web.Update() 
Invoke-PnPQuery  

```

> [!NOTE]
> Above PowerShell scripts assumes that you have already installed PnP PowerShell cmdlets for your environment and you are not using multi-factor authentication. You can install PnP PowerShell cmdlets to your computer by opening PowerShell console in administrative mode and executing following command: `Install-Module SharePointPnPPowerShellOnline`. If you are using multi-factor authentication, you can enable MFA login by updating the `Connect-PnPOnline` line as follows: `Connect-PnPOnline -Url "<SiteURL>" -UseWebLogin`.

## Controlling footer using the user interface

Site owner can control the footer visibility using the **Change the look** functionality of the site, which exposes the different user interface configuration options.

> [!NOTE]
> These options will be visible in the sites when the feature(s) are rolled out and released.

![Change the look configuration options](../images/footer-change-the-look.png)

Footer configuration has multiple different options, which can be configured based on the site objectives.

![Footer UI configuration options](../images/Footer-CTL-Configutation.png)

## See also

- [Change the look of your SharePoint site](https://support.office.com/article/change-the-look-of-your-sharepoint-site-06bbadc3-6b04-4a60-9d14-894f6a170818)
