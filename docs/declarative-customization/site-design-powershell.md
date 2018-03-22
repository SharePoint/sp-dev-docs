---
title: SharePoint site design - PowerShell cmdlets
description: Use PowerShell cmdlets to create, retrieve, and remove site designs and site scripts.
ms.date: 03/22/2018
---

# SharePoint site design: PowerShell cmdlets

> [!NOTE]
> Site designs and site scripts have been released to production and are available for general use. 

Use PowerShell cmdlets to create, retrieve, update, and remove site designs and site scripts to new and existing modern site collections.

## Getting started

To run the PowerShell cmdlets, you'll need to do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.

2. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/en-us/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the [Get-SPOSiteScript](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOSiteScript?view=sharepoint-ps) cmdlet to read the current list of site scripts. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design cmdlets

The following cmdlets are available for managing site designs and site scripts from PowerShell:

- [Add-SPOSiteDesign](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Add-SPOSiteDesign?view=sharepoint-ps)
- [Add-SPOSiteScript](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Add-SPOSiteScript?view=sharepoint-ps)
- [Get-SPOSiteDesign](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOSiteDesign?view=sharepoint-ps)
- [Get-SPOSiteDesignRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOSiteDesignRights?view=sharepoint-ps)
- [Get-SPOSiteScript](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Get-SPOSiteScript?view=sharepoint-ps)
- [Grant-SPOSiteDesignRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Grant-SPOSiteDesignRights?view=sharepoint-ps)
- [Invoke-SPOSiteDesign](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Invoke-SPOSiteDesign?view=sharepoint-ps)
- [Remove-SPOSiteDesign](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Remove-SPOSiteDesign?view=sharepoint-ps)
- [Remove-SPOSiteScript](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Remove-SPOSiteScript?view=sharepoint-ps)
- [Revoke-SPOSiteDesignRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Revoke-SPOSiteDesignRights?view=sharepoint-ps)
- [Set-SPOSiteDesign](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Set-SPOSiteDesign?view=sharepoint-ps)
- [Set-SPOSiteScript](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/Set-SPOSiteScript?view=sharepoint-ps)



## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
