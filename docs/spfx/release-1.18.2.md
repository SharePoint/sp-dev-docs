---
title: SharePoint Framework v1.18.2 release notes
description: Release notes for the SharePoint Framework v1.18.2 release
ms.date: 11/21/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.18.2 release notes

This is a _minor release_ that introduces a support for Yeoman generator v5, which is the latest and default version of the [Yeoman](https://yeoman.io/).

**Released:** November 21, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.18 to v1.18.2

In the project's **package.json** file, identify all SPFx packages. For each SPFx package:

1. Uninstall the existing packages:

    ```console
    npm uninstall @microsoft/{spfx-package-name}
    ```

1. Install the new v1.18.2 package:

    ```console
    npm install @microsoft/{spfx-package-name}@latest --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Adding support of Yeoman generator v5.x

Version 5 of the [Yeoman generator](https://www.npmjs.com/package/yo) was released on 14th of November. SharePoint Framework default packages did not however worked with this latest version and this issue was reported in the SPFx issue list with [#9328](https://github.com/SharePoint/sp-dev-docs/issues/9328).

There was a simple workaround to install specifically the version 4.3.1 version, but to make things easier, we wanted to provide an update to avoid any complexity on getting started with the SharePoint Framework development for Microsoft 365.

## Summary

Version 1.18.2 is a small release with a limited new capability to streamline the developer experience and ensure the support for latest and default version of the Yeoman generator. If you find any issues or have other feedback on the provided capabilities, report them at the [SPFx issue list](https://aka.ms/spfx/issues). Thank you for your input advance.
