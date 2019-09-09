---
title: Office 365 CLI commands for SharePoint hub sites
description: Use Office 365 CLI to create and manage SharePoint hub sites.
ms.date: 6/18/2019
localization_priority: Priority
---

# Office 365 CLI commands for SharePoint hub sites

Use the Office 365 CLI commands to create and manage SharePoint hub sites.

> [!NOTE]
> Office 365 CLI is an open-source tool with active community providing support for it. There is no SLA for the open-source tool support from Microsoft.

## Get started

To run the Office 365 CLI commands, you'll need to do the following:

1. Download and install [NodeJS LTS version](https://nodejs.org/en/)

2. Follow the instructions at [Installing the CLI](https://pnp.github.io/office365-cli/user-guide/installing-cli/) to install the Office 365 CLI on your machine

3. Follow the instructions at [Logging in to Office 365](https://pnp.github.io/office365-cli/user-guide/connecting-office-365/) to connect to your SharePoint tenant.

To verify your setup and connection, try using the [hubsite list](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-list/) command to list the current hub sites. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Hub site commands

The following commands are available for managing hub sites:

|Command|Description|
|------|-----------|
|[hubsite connect](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-connect)| Connects the specified site collection to the given hub site |
|[hubsite data get](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-data-get)| Get hub site data for the specified site |
|[hubsite disconnect](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-disconnect)| Disconnects the specifies site collection from its hub site |
|[hubsite get](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-get)| Gets information about the specified hub site |
|[hubsite list](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-list)| Lists hub sites in the current tenant |
|[hubsite register](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-register)| Registers the specified site collection as a hub site |
|[hubsite rights grant](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-rights-grant)| Grants permissions to join the hub site for one or more principals |
|[hubsite rights revoke](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-rights-revoke)| Revokes rights to join sites to the specified hub site for one or more principals |
|[hubsite set](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-set)| Updates properties of the specified hub site |
|[hubsite theme sync](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-theme-sync)| Applies any theme updates from the parent hub site. |
|[hubsite unregister](https://pnp.github.io/office365-cli/cmd/spo/hubsite/hubsite-unregister)| Unregisters the specifies site collection as a hub site |

## See also

- [SharePoint hub sites overview](hub-site-overview.md)
- [PowerShell cmdlets for SharePoint hub sites](hub-site-powershell.md)
