---
title: SharePoint site theming - PowerShell cmdlets
description: SharePoint tenant administrators can use PowerShell cmdlets to create, retrieve, and remove site themes. Developers can use the SharePoint REST API to handle theme management tasks.
ms.date: 03/22/2018
localization_priority: Priority
---

# SharePoint site theming: PowerShell cmdlets

SharePoint tenant administrators can use PowerShell cmdlets to create, retrieve, and remove site themes. 

Developers can use the SharePoint [REST API](sharepoint-site-theming-rest-api.md) to handle theme management tasks.

For information about how themes are defined and stored, see [JSON schema reference](sharepoint-site-theming-json-schema.md).

## Getting started

To run the PowerShell cmdlets for theme management, you must do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.

2. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/en-us/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the [Get-SPOHideDefaultThemes](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOHideDefaultThemes?view=sharepoint-ps) cmdlet to read the SPOHideDefaultThemes setting. If the cmdlet runs and returns False with no errors, as shown in the following example, you're ready to proceed.

## Site theme cmdlets

The following cmdlets are available for managing site themes from PowerShell:

* [Add-SPOTheme](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Add-SPOTheme?view=sharepoint-ps) &ndash; Creates a new custom theme, or overwrites an existing theme to modify its settings.
* [Get-SPOTheme](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOTheme?view=sharepoint-ps) &ndash; Retrieves settings for an existing theme.
* [Remove-SPOTheme](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Remove-SPOTheme?view=sharepoint-ps) &ndash; Removes a theme from the theme gallery.
* [Set-SPOHideDefaultThemes](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Set-SPOHideDefaultThemes?view=sharepoint-ps) &ndash; Specifies whether the default themes should be available.
* [Get-SPOHideDefaultThemes](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOHideDefaultThemes?view=sharepoint-ps) &ndash; Queries the current SPOHideDefaultThemes setting.


## See also

* [SharePoint site theming overview](sharepoint-site-theming-overview.md)
* [SharePoint site theming: CSOM](sharepoint-site-theming-csom.md)



