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

- [Add-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteDesign)
- [Add-PnPSiteDesignTask](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteDesignTask)
- [Add-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteScript)
- [Add-PnPSiteScriptPackage](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteScriptPackage)
- [Get-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesign)
- [Get-PnPSiteDesignRights](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignRights)
- [Get-PnPSiteDesignRun](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignRun)
- [Get-PnPSiteDesignRunStatus](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignRunStatus)
- [Get-PnPSiteDesignTask](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignTask)
- [Get-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteScript)
- [Get-PnPSiteScriptFromList](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteScriptFromList)
- [Get-PnPSiteScriptFromWeb](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteScriptFromWeb)
- [Grant-PnPSiteDesignRights](https://pnp.github.io/powershell/cmdlets/Grant-PnPSiteDesignRights)
- [Invoke-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Invoke-PnPSiteDesign)
- [Remove-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Remove-PnPSiteDesign)
- [Remove-PnPSiteDesignTask](https://pnp.github.io/powershell/cmdlets/Remove-PnPSiteDesignTask)
- [Remove-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Remove-PnPSiteScript)
- [Revoke-PnPSiteDesignRights](https://pnp.github.io/powershell/cmdlets/Revoke-PnPSiteDesignRights)
- [Set-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Set-PnPSiteDesign)
- [Set-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Set-PnPSiteScript)
- [Set-PnPSiteScriptPackage](https://pnp.github.io/powershell/cmdlets/Set-PnPSiteScriptPackage)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - SharePoint Online Management Shell PowerShell commands](site-design-powershell.md)
- [SharePoint site design - CLI for Microsoft 365 commands](site-design-o365cli.md)
