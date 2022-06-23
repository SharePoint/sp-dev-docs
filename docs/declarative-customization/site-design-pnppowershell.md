---
title: SharePoint site design - PnP PowerShell cmdlets
description: Use PnP PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 06/07/2022
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

- [Add-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteDesign.html)
- [Add-PnPSiteDesignTask](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteDesignTask.html)
- [Add-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteScript.html)
- [Add-PnPSiteScriptPackage](https://pnp.github.io/powershell/cmdlets/Add-PnPSiteScriptPackage.html)
- [Get-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesign.html)
- [Get-PnPSiteDesignRights](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignRights.html)
- [Get-PnPSiteDesignRun](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignRun.html)
- [Get-PnPSiteDesignRunStatus](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignRunStatus.html)
- [Get-PnPSiteDesignTask](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteDesignTask.html)
- [Get-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteScript.html)
- [Get-PnPSiteScriptFromList](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteScriptFromList.html)
- [Get-PnPSiteScriptFromWeb](https://pnp.github.io/powershell/cmdlets/Get-PnPSiteScriptFromWeb.html)
- [Grant-PnPSiteDesignRights](https://pnp.github.io/powershell/cmdlets/Grant-PnPSiteDesignRights.html)
- [Invoke-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Invoke-PnPSiteDesign.html)
- [Remove-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Remove-PnPSiteDesign.html)
- [Remove-PnPSiteDesignTask](https://pnp.github.io/powershell/cmdlets/Remove-PnPSiteDesignTask.html)
- [Remove-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Remove-PnPSiteScript.html)
- [Revoke-PnPSiteDesignRights](https://pnp.github.io/powershell/cmdlets/Revoke-PnPSiteDesignRights.html)
- [Set-PnPSiteDesign](https://pnp.github.io/powershell/cmdlets/Set-PnPSiteDesign.html)
- [Set-PnPSiteScript](https://pnp.github.io/powershell/cmdlets/Set-PnPSiteScript.html)
- [Set-PnPSiteScriptPackage](https://pnp.github.io/powershell/cmdlets/Set-PnPSiteScriptPackage.html)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - SharePoint Online Management Shell PowerShell commands](site-design-powershell.md)
- [SharePoint site design - CLI for Microsoft 365 commands](site-design-o365cli.md)
