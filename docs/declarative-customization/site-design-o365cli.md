---
title: SharePoint site design - CLI for Microsoft 365 commands
description: Use the CLI for Microsoft 365 to create, retrieve, and remove site designs and site scripts.
ms.date: 06/27/2024
ms.localizationpriority: high
---

# SharePoint site design: CLI for Microsoft 365 commands

Use the CLI for Microsoft 365 to create, retrieve, update, and remove site designs and site scripts to new and existing modern site collections from any platform.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## Getting started

To run the CLI for Microsoft 365 commands, you'll need to do the following:

1. Download and install [NodeJS LTS version](https://nodejs.org/en/)
1. Follow the instructions at [Installing the CLI](https://pnp.github.io/cli-microsoft365/user-guide/installing-cli/) to install the CLI for Microsoft 365 on your machine
1. Follow the instructions at [Logging in to Office 365](https://pnp.github.io/cli-microsoft365/user-guide/connecting-microsoft-365) to connect to your SharePoint tenant.

To verify your setup and connection, try using the [sitedesign list](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-list) command to read the current list of site designs. If the cmdlet runs and returns with no errors, you're ready to proceed.

## Site design commands

The following commands are available for managing site designs and site scripts from the CLI for Microsoft 365:

- [sitedesign add](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-add)
- [sitedesign apply](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-apply)
- [sitedesign get](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-get)
- [sitedesign list](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-list)
- [sitedesign remove](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-remove)
- [sitedesign set](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-set)
- [sitedesign rights grant](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-rights-grant)
- [sitedesign rights list](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-rights-list)
- [sitedesign rights revoke](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-rights-revoke)
- [sitedesign run list](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-run-list)
- [sitedesign run status get](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-run-status-get)
- [sitedesign task get](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-task-get)
- [sitedesign task list](https://pnp.github.io/cli-microsoft365/cmd/spo/sitedesign/sitedesign-task-list)
- [sitescript add](https://pnp.github.io/cli-microsoft365/cmd/spo/sitescript/sitescript-add)
- [sitescript get](https://pnp.github.io/cli-microsoft365/cmd/spo/sitescript/sitescript-get)
- [sitescript list](https://pnp.github.io/cli-microsoft365/cmd/spo/sitescript/sitescript-list)
- [sitescript remove](https://pnp.github.io/cli-microsoft365/cmd/spo/sitescript/sitescript-remove)
- [sitescript set](https://pnp.github.io/cli-microsoft365/cmd/spo/sitescript/sitescript-set)

## See also

- [JSON schema reference](site-design-json-schema.md)
- [REST API](site-design-rest-api.md)
- [Apply a scope to your site design](site-design-scoping.md)
- [SharePoint site design and site script overview](site-design-overview.md)
- [SharePoint site design - PowerShell cmdlets](site-design-powershell.md)
