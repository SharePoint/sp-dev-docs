---
title: SharePoint site design - PnP PowerShell cmdlets
description: Use PnP PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 03/09/2021
ms.localizationpriority: high
---

# SharePoint site design: PnP PowerShell cmdlets

Use PnP PowerShell cmdlets to create, retrieve, update, and remove site designs and site scripts to new and existing modern site collections.

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

## Getting started

To run the PnP PowerShell cmdlets, you'll need to do the following:

1. Download and install the PnP PowerShell Module by running:

```PowerShell
Install-Module PnP.PowerShell
```

2. Connect to the SharePoint Online Admin Center of your tenant:

```PowerShell
Connect-PnPOnline -Url https://tenant-admin.sharepoint.com -Interactive
```

To verify your setup and connection, try using the `Get-PnPSiteScript` cmdlet to read the current list of site scripts. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design cmdlets

The following cmdlets are available for managing site designs and site scripts from PnP PowerShell:

- [Add-PnPSiteDesign](/powershell/module/sharepoint-pnp/Add-PnPSiteDesign)
- [Add-PnPSiteDesignTask](/powershell/module/sharepoint-pnp/Add-PnPSiteDesignTask)
- [Add-PnPSiteScript](/powershell/module/sharepoint-pnp/Add-PnPSiteScript)
- [Add-PnPSiteScriptPackage](/powershell/module/sharepoint-pnp/Add-PnPSiteScriptPackage)
- [Get-PnPSiteDesign](/powershell/module/sharepoint-pnp/Get-PnPSiteDesign)
- [Get-PnPSiteDesignRights](/powershell/module/sharepoint-pnp/Get-PnPSiteDesignRights)
- [Get-PnPSiteDesignRun](/powershell/module/sharepoint-pnp/Get-PnPSiteDesignRun)
- [Get-PnPSiteDesignRunStatus](/powershell/module/sharepoint-pnp/Get-PnPSiteDesignRunStatus)
- [Get-PnPSiteDesignTask](/powershell/module/sharepoint-pnp/Get-PnPSiteDesignTask)
- [Get-PnPSiteScript](/powershell/module/sharepoint-pnp/Get-PnPSiteScript)
- [Get-PnPSiteScriptFromList](/powershell/module/sharepoint-pnp/Get-PnPSiteScriptFromList)
- [Get-PnPSiteScriptFromWeb](/powershell/module/sharepoint-pnp/Get-PnPSiteScriptFromWeb)
- [Grant-PnPSiteDesignRights](/powershell/module/sharepoint-pnp/Grant-PnPSiteDesignRights)
- [Invoke-PnPSiteDesign](/powershell/module/sharepoint-pnp/Invoke-PnPSiteDesign)
- [Remove-PnPSiteDesign](/powershell/module/sharepoint-pnp/Remove-PnPSiteDesign)
- [Remove-PnPSiteDesignTask](/powershell/module/sharepoint-pnp/Remove-PnPSiteDesignTask)
- [Remove-PnPSiteScript](/powershell/module/sharepoint-pnp/Remove-PnPSiteScript)
- [Revoke-PnPSiteDesignRights](/powershell/module/sharepoint-pnp/Revoke-PnPSiteDesignRights)
- [Set-PnPSiteDesign](/powershell/module/sharepoint-pnp/Set-PnPSiteDesign)
- [Set-PnPSiteScript](/powershell/module/sharepoint-pnp/Set-PnPSiteScript)
- [Set-PnPSiteScriptPackage ](/powershell/module/sharepoint-pnp/Set-PnPSiteScriptPackage)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - SharePoint Online Management Shell PowerShell commands](site-design-powershell.md)
- [SharePoint site design - CLI for Microsoft 365 commands](site-design-o365cli.md)
