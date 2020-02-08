---
title: PowerShell cmdlets for SharePoint hub sites
description: Use PowerShell cmdlets to create and manage SharePoint hub sites.
ms.date: 6/18/2019
localization_priority: Priority
---

# PowerShell cmdlets for SharePoint hub sites

Use PowerShell cmdlets to create and manage SharePoint hub sites.

## Get started

To run the PowerShell cmdlets:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first, and then install the latest version.

2. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the **Get-SPOHubSite** cmdlet to read the current list of hub sites. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Hub site cmdlets

The following PowerShell cmdlets are available for managing hub sites:

|cmdlet|Description|
|------|-----------|
|[Add-SPOHubSiteAssociation](https://docs.microsoft.com/powershell/module/sharepoint-online/add-spohubsiteassociation?view=sharepoint-ps)|Adds a new association between a site and a hub site.|
|[Remove-SPOHubSiteAssociation](https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spohubsiteassociation?view=sharepoint-ps)|Removes an association between a site and a hub site.|
|[Get-SPOHubSite](https://docs.microsoft.com/powershell/module/sharepoint-online/get-spohubsite?view=sharepoint-ps)|Lists hub sites or hub site information.|
|[Grant-SPOHubSiteRights](https://docs.microsoft.com/powershell/module/sharepoint-online/grant-spohubsiterights?view=sharepoint-ps)|Grants rights to users or security groups to access the hub site.|
|[Register-SPOHubSite](https://docs.microsoft.com/powershell/module/sharepoint-online/register-spohubsite?view=sharepoint-ps)|Enables the hub site feature on a site to make it a hub site.|
|[Revoke-SPOHubSiteRights](https://docs.microsoft.com/powershell/module/sharepoint-online/revoke-spohubsiterights?view=sharepoint-ps)|Revokes rights for specified principals to a hub site.|
|[Set-SPOHubSite](https://docs.microsoft.com/powershell/module/sharepoint-online/set-spohubsite?view=sharepoint-ps)|Sets the hub site information such as name, logo, and description.|
|[Unregister-SPOHubSite](https://docs.microsoft.com/powershell/module/sharepoint-online/unregister-spohubsite?view=sharepoint-ps)|Disables the hub site feature on a site.|

## See also

- [SharePoint hub sites overview](hub-site-overview.md)
- [Office 365 CLI commands for SharePoint hub sites](hub-site-o365cli.md)
