---
title: PowerShell cmdlets for SharePoint hub sites
description: Use PowerShell cmdlets to create and manage SharePoint hub sites.
ms.date: 01/08/2018
---

# PowerShell cmdlets for SharePoint hub sites

Use PowerShell cmdlets to create and manage SharePoint hub sites.

## Getting started

To run the PowerShell cmdlets, you'll need to do the following:

1. Download and install the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you already have a previous version of the shell installed, uninstall it first and then install the latest version.
1. Follow the instructions at [Connect to SharePoint Online PowerShell](https://technet.microsoft.com/en-us/library/fp161372.aspx) to connect to your SharePoint tenant.

To verify your setup, try using the **Get-SPOHubSite** cmdlet to read the current list of hub sites. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Hub site cmdlets

The following cmdlets are available for managing hub sites from PowerShell:

|cmdlet|Description|
|------|-----------|
|[Add-SPOHubSiteAssociation](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/add-spohubsiteassociation)|Adds a new association between a site and a hub site.|
|[Remove-SPOHubSiteAssociation](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/remove-spohubsiteassociation)|Removes an association between a site and a hub site.|
|[Get-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/get-spohubsite)|Lists hub sites or hub site information.|
|[Grant-SPOHubSiteRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/grant-spohubsiterights)|Grants rights to users or security groups to access the hub site.|
|[Register-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/register-spohubsite)|Enables the hub site feature on a site to make it a hub site.|
|[Revoke-SPOHubSiteRights](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/revoke-spohubsiterights)|Revokes rights for specified principals to a hub.|
|[Set-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/set-spohubsite)|Sets the hub site information such as name, logo, and description.|
|[Unregister-SPOHubSite](https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/unregister-spohubsite)|Disables the hub site feature on a site.|
