---
title: SharePoint Framework v1.3 release notes
description: Release notes for the SharePoint Framework v1.3 release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.3 release notes

This release contains the general availability of extensions.

**Released:** September 25, 2017

## Upgrading projects from v1.1 to v1.3

1. In the project's **package.json** file, identify all SPFx v1.1 packages. For each SPFx package:
    1. Uninstall the existing v1.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.1
        ```

    1. Install the refreshed v1.3 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.3.0 --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## New features and capabilities

### SharePoint Extensions (general availability)

- [Overview of SharePoint Framework Extensions](extensions/overview-extensions.md)