---
title: SharePoint site design - PowerShell cmdlets
description: Use PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 06/28/2022
ms.localizationpriority: high
---

# SharePoint site design: PowerShell cmdlets

Use PowerShell cmdlets to create, retrieve, update, and remove site designs and site scripts to new and existing modern site collections.

## Getting started

To run the PowerShell cmdlets, you'll need to do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.
1. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the [Get-SPOSiteScript](/powershell/module/sharepoint-online/Get-SPOSiteScript) cmdlet to read the current list of site scripts. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design cmdlets

The following cmdlets are available for managing site designs and site scripts from PowerShell:

- [Add-SPOSiteDesign](/powershell/module/sharepoint-online/Add-SPOSiteDesign)
- [Add-SPOSiteDesignTask](/powershell/module/sharepoint-online/Add-SPOSiteDesignTask)
- [Add-SPOSiteScript](/powershell/module/sharepoint-online/Add-SPOSiteScript)
- [Get-SPOSiteDesign](/powershell/module/sharepoint-online/Get-SPOSiteDesign)
- [Get-SPOSiteDesignRights](/powershell/module/sharepoint-online/Get-SPOSiteDesignRights)
- [Get-SPOSiteDesignRun](/powershell/module/sharepoint-online/Get-SPOSiteDesignRun)
- [Get-SPOSiteDesignRunStatus](/powershell/module/sharepoint-online/Get-SPOSiteDesignRunStatus)
- [Get-SPOSiteDesignTask](/powershell/module/sharepoint-online/Get-SPOSiteDesignTask)
- [Get-SPOSiteScript](/powershell/module/sharepoint-online/Get-SPOSiteScript)
- [Get-SPOSiteScriptFromWeb](/powershell/module/sharepoint-online/Get-SPOSiteScriptFromWeb)
- [Get-SPOSiteScriptFromList](/powershell/module/sharepoint-online/Get-SPOSiteScriptFromList)
- [Grant-SPOSiteDesignRights](/powershell/module/sharepoint-online/Grant-SPOSiteDesignRights)
- [Invoke-SPOSiteDesign](/powershell/module/sharepoint-online/Invoke-SPOSiteDesign)
- [Remove-SPOSiteDesign](/powershell/module/sharepoint-online/Remove-SPOSiteDesign)
- [Remove-SPOSiteDesignTask](/powershell/module/sharepoint-online/Remove-SPOSiteDesignTask)
- [Remove-SPOSiteScript](/powershell/module/sharepoint-online/Remove-SPOSiteScript)
- [Revoke-SPOSiteDesignRights](/powershell/module/sharepoint-online/Revoke-SPOSiteDesignRights)
- [Set-SPOSiteDesign](/powershell/module/sharepoint-online/Set-SPOSiteDesign)
- [Set-SPOSiteScript](/powershell/module/sharepoint-online/Set-SPOSiteScript)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - PnP PowerShell commands](site-design-pnppowershell.md)
- [SharePoint site design - CLI for Microsoft 365 commands](site-design-o365cli.md)
