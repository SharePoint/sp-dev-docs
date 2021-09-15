---
title: SharePoint site theming - PowerShell cmdlets
description: SharePoint tenant administrators can use PowerShell cmdlets to create, retrieve, and remove site themes. Developers can use the SharePoint REST API to handle theme management tasks.
ms.date: 03/22/2018
ms.localizationpriority: high
---

# SharePoint site theming: PowerShell cmdlets

SharePoint tenant administrators can use PowerShell cmdlets to create, retrieve, and remove site themes. 

Developers can use the SharePoint [REST API](sharepoint-site-theming-rest-api.md) to handle theme management tasks.

For information about how themes are defined and stored, see [JSON schema reference](sharepoint-site-theming-json-schema.md).

## Getting started

To run the PowerShell cmdlets for theme management, you must do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.

2. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the [Get-SPOHideDefaultThemes](/powershell/module/sharepoint-online/Get-SPOHideDefaultThemes) cmdlet to read the SPOHideDefaultThemes setting. If the cmdlet runs and returns False with no errors, as shown in the following example, you're ready to proceed.

## Site theme cmdlets

The following cmdlets are available for managing site themes from PowerShell:

* [Add-SPOTheme](/powershell/module/sharepoint-online/Add-SPOTheme) &ndash; Creates a new custom theme, or overwrites an existing theme to modify its settings.
* [Get-SPOTheme](/powershell/module/sharepoint-online/Get-SPOTheme) &ndash; Retrieves settings for an existing theme.
* [Remove-SPOTheme](/powershell/module/sharepoint-online/Remove-SPOTheme) &ndash; Removes a theme from the theme gallery.
* [Set-SPOHideDefaultThemes](/powershell/module/sharepoint-online/Set-SPOHideDefaultThemes) &ndash; Specifies whether the default themes should be available.
* [Get-SPOHideDefaultThemes](/powershell/module/sharepoint-online/Get-SPOHideDefaultThemes) &ndash; Queries the current SPOHideDefaultThemes setting.


## See also

* [SharePoint site theming overview](sharepoint-site-theming-overview.md)
* [SharePoint site theming: CSOM](sharepoint-site-theming-csom.md)



