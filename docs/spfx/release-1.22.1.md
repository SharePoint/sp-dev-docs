---
title: SharePoint Framework v1.22.1 release notes
description: Release notes for the SharePoint Framework v1.22.1 release
ms.date: 12/15/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.22.1 release notes

This is a _minor bump_ that fixes an issue where the a full screen error overlay was being displayed for runtime errors unrelated to third-party code.

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.22 version, but we do recommend using always the latest version in the production, which in this case would be the 1.22.1, which has fix on the reported GitHub issues as listed below.

**Released:** December 15, 2025

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.22 to v1.22.1

In the project's **package.json** file, identify all SPFx v1.22 packages. For each SPFx package:

1. Uninstall the existing v1.22 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.22
    ```

1. Install the new v1.22.1 package:

    ```console
    npm install @microsoft/{spfx-package-name}@latest --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

- [#10525](https://github.com/SharePoint/sp-dev-docs/issues/10525) - [SPFx 1.22.0] - Uncaught runtime errors
