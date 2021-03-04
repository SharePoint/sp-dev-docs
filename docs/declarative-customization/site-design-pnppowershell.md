---
title: SharePoint site design - PnP PowerShell cmdlets
description: Use PnP PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 02/19/2021
localization_priority: Priority
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

- [Add-PnPSiteDesign](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Add-PnPSiteDesign?view=sharepoint-ps)
- [Add-PnPSiteDesignTask](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Add-PnPSiteDesignTask?view=sharepoint-ps)
- [Add-PnPSiteScript](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Add-PnPSiteScript?view=sharepoint-ps)
- [Add-PnPSiteScriptPackage](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Add-PnPSiteScriptPackage?view=sharepoint-ps)
- [Get-PnPSiteDesign](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteDesign?view=sharepoint-ps)
- [Get-PnPSiteDesignRights](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteDesignRights?view=sharepoint-ps)
- [Get-PnPSiteDesignRun](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteDesignRun?view=sharepoint-ps)
- [Get-PnPSiteDesignRunStatus](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteDesignRunStatus?view=sharepoint-ps)
- [Get-PnPSiteDesignTask](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteDesignTask?view=sharepoint-ps)
- [Get-PnPSiteScript](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteScript?view=sharepoint-ps)
- [Get-PnPSiteScriptFromList](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteScriptFromList?view=sharepoint-ps)
- [Get-PnPSiteScriptFromWeb](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Get-PnPSiteScriptFromWeb?view=sharepoint-ps)
- [Grant-PnPSiteDesignRights](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Grant-PnPSiteDesignRights?view=sharepoint-ps)
- [Invoke-PnPSiteDesign](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Invoke-PnPSiteDesign?view=sharepoint-ps)
- [Remove-PnPSiteDesign](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Remove-PnPSiteDesign?view=sharepoint-ps)
- [Remove-PnPSiteDesignTask](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Remove-PnPSiteDesignTask?view=sharepoint-ps)
- [Remove-PnPSiteScript](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Remove-PnPSiteScript?view=sharepoint-ps)
- [Revoke-PnPSiteDesignRights](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Revoke-PnPSiteDesignRights?view=sharepoint-ps)
- [Set-PnPSiteDesign](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Set-PnPSiteDesign?view=sharepoint-ps)
- [Set-PnPSiteScript](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Set-PnPSiteScript?view=sharepoint-ps)
- [Set-PnPSiteScriptPackage](https://docs.microsoft.com/powershell/module/sharepoint-pnp/Set-PnPSiteScriptPackage?view=sharepoint-ps)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - SharePoint Online Management Shell PowerShell commands](site-design-powershell.md)
- [SharePoint site design - CLI for Microsoft 365 commands](site-design-o365cli.md)
