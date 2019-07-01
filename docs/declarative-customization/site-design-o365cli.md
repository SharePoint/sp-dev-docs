---
title: SharePoint site design - Office 365 CLI commands
description: Use the Office 365 CLI to create, retrieve, and remove site designs and site scripts.
ms.date: 10/23/2018
localization_priority: Priority
---

# SharePoint site design: Office 365 CLI commands

> [!NOTE]
> Site designs and site scripts have been released to production and are available for general use.

Use the Office 365 CLI to create, retrieve, update, and remove site designs and site scripts to new and existing modern site collections from any platform.

## Getting started

To run the Office 365 CLI commands, you'll need to do the following:

1. Download and install [NodeJS LTS version](https://nodejs.org/en/)

2. Follow the instructions at [Installing the CLI](https://pnp.github.io/office365-cli/user-guide/installing-cli/) to install the Office 365 CLI on your machine

3. Follow the instructions at [Logging in to Office 365](https://pnp.github.io/office365-cli/user-guide/connecting-office-365/) to connect to your SharePoint tenant.

To verify your setup and connection, try using the [sitedesign list](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-list) command to read the current list of site designs. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design commands

The following commands are available for managing site designs and site scripts from the Office 365 CLI:

- [sitedesign add](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-add)
- [sitedesign apply](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-apply)
- [sitedesign get](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-get)
- [sitedesign list](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-list)
- [sitedesign remove](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-remove)
- [sitedesign set](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-set)
- [sitedesign rights grant](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-rights-grant)
- [sitedesign rights list](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-rights-list)
- [sitedesign rights revoke](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-rights-revoke)
- [sitedesign run list](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-run-list)
- [sitedesign run status get](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-run-status-get)
- [sitedesign task get](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-task-get)
- [sitedesign task list](https:/pnp.github.io/office365-cli/cmd/spo/sitedesign/sitedesign-task-list)
- [sitescript add](https:/pnp.github.io/office365-cli/cmd/spo/sitescript/sitescript-add)
- [sitescript get](https:/pnp.github.io/office365-cli/cmd/spo/sitescript/sitescript-get)
- [sitescript list](https:/pnp.github.io/office365-cli/cmd/spo/sitescript/sitescript-list)
- [sitescript remove](https:/pnp.github.io/office365-cli/cmd/spo/sitescript/sitescript-remove)
- [sitescript set](https:/pnp.github.io/office365-cli/cmd/spo/sitescript/sitescript-set)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - PowerShell cmdlets](site-design-powershell.md)
