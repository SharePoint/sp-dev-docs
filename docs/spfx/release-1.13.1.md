---
title: SharePoint Framework v1.13.1 release notes
description: Release notes for the SharePoint Framework v1.13.1 release
ms.date: 11/24/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.13.1 release notes

This is a bug fix release to address few specific regressions, which were introduced in the v1.13 release. These regressions were only impacting isolated scenarios, but in general we do recommend using always the latest available version.

**Released:** November 23, 2021

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.13 to v1.13.1

1. In the project's **package.json** file, identify all SPFx v1.13 packages. For each SPFx package:
    1. Uninstall the existing v1.13 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.13
        ```

    1. Install the refreshed v1.13.1 {version-release} package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.13.1 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Changes in this release

- 1.13.0 for "Create a subfolder with solution name" does not work
  - [#7429](https://github.com/SharePoint/sp-dev-docs/issues/7429)
- Cannot use custom dialogs with SPFx v 1.13
  - [#7431](https://github.com/SharePoint/sp-dev-docs/issues/7431)
- Generator Creates an Unusual Folder Structure when Running with CLI Arguments
  - [#7466](https://github.com/SharePoint/sp-dev-docs/issues/7466)
- `deploy-azure-storage` command no longer creates container that does not exist yet
  - [#7472](https://github.com/SharePoint/sp-dev-docs/issues/7472)
