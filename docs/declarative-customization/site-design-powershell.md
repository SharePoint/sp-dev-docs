---
title: SharePoint site design - PowerShell cmdlets
description: Use PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 09/28/2020
localization_priority: Priority
---

# SharePoint site design: PowerShell cmdlets

Use PowerShell cmdlets to create, retrieve, update, and remove site designs and site scripts to new and existing modern site collections.

## Getting started

To run the PowerShell cmdlets, you'll need to do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.

2. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the [Get-SPOSiteScript](/powershell/module/sharepoint-online/Get-SPOSiteScript?view=sharepoint-ps) cmdlet to read the current list of site scripts. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design cmdlets

The following cmdlets are available for managing site designs and site scripts from PowerShell:

- [Add-SPOSiteDesign](/powershell/module/sharepoint-online/Add-SPOSiteDesign?view=sharepoint-ps)
- [Add-SPOSiteDesignTask](/powershell/module/sharepoint-online/Add-SPOSiteDesignTask?view=sharepoint-ps)
- [Add-SPOSiteScript](/powershell/module/sharepoint-online/Add-SPOSiteScript?view=sharepoint-ps)
- [Get-SPOSiteDesign](/powershell/module/sharepoint-online/Get-SPOSiteDesign?view=sharepoint-ps)
- [Get-SPOSiteDesignRights](/powershell/module/sharepoint-online/Get-SPOSiteDesignRights?view=sharepoint-ps)
- [Get-SPOSiteDesignRun](/powershell/module/sharepoint-online/Get-SPOSiteDesignRun?view=sharepoint-ps)
- [Get-SPOSiteDesignRunStatus](/powershell/module/sharepoint-online/Get-SPOSiteDesignRunStatus?view=sharepoint-ps)
- [Get-SPOSiteDesignTask](/powershell/module/sharepoint-online/Get-SPOSiteDesignTask?view=sharepoint-ps)
- [Get-SPOSiteScript](/powershell/module/sharepoint-online/Get-SPOSiteScript?view=sharepoint-ps)
- [Get-SPOSiteScriptFromWeb](/powershell/module/sharepoint-online/Get-SPOSiteScriptFromWeb?view=sharepoint-ps)
- [Get-SPOSiteScriptFromList](/powershell/module/sharepoint-online/Get-SPOSiteScriptFromList?view=sharepoint-ps)
- [Grant-SPOSiteDesignRights](/powershell/module/sharepoint-online/Grant-SPOSiteDesignRights?view=sharepoint-ps)
- [Invoke-SPOSiteDesign](/powershell/module/sharepoint-online/Invoke-SPOSiteDesign?view=sharepoint-ps)
- [Remove-SPOSiteDesign](/powershell/module/sharepoint-online/Remove-SPOSiteDesign?view=sharepoint-ps)
- [Remove-SPOSiteDesignTask](/powershell/module/sharepoint-online/Remove-SPOSiteDesignTask?view=sharepoint-ps)
- [Remove-SPOSiteScript](/powershell/module/sharepoint-online/Remove-SPOSiteScript?view=sharepoint-ps)
- [Revoke-SPOSiteDesignRights](/powershell/module/sharepoint-online/Revoke-SPOSiteDesignRights?view=sharepoint-ps)
- [Set-SPOSiteDesign](/powershell/module/sharepoint-online/Set-SPOSiteDesign?view=sharepoint-ps)
- [Set-SPOSiteScript](/powershell/module/sharepoint-online/Set-SPOSiteScript?view=sharepoint-ps)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - PnP PowerShell commands](site-design-pnppowershell.md)
- [SharePoint site design - CLI for Microsoft 365 commands](site-design-o365cli.md)
