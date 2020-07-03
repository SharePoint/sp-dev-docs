---
title: SharePoint Framework vTODO: {version-release} release notes
description: Release notes for the SharePoint Framework vTODO: {version-release} release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework vTODO: {version-release} release notes

TODO:

**Released:** TODO: {release-date}

## Upgrading projects from vTODO: {version-previous} to vTODO: {version-release}

1. In the project's **package.json** file, identify all SPFx vTODO: {version-previous} packages. For each SPFx package:
    1. Uninstall the existing vTODO: {version-previous} package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@TODO: {version-previous}
        ```

    1. Install the refreshed vTODO: {version-release} package:

        ```console
        npm install @microsoft/{spfx-package-name}@TODO: {version-release}.0 --save --save-exact
        ```

> [!TIP]
> The [Office 365 CLI](http://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/office365-cli/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## New features and capabilities

TODO: 

## Changes in this release

TODO: 

## Deprecations and removed items in this release

TODO: 
