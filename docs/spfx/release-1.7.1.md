---
title: SharePoint Framework v1.7.1 release notes
description: Release notes for the SharePoint Framework v1.7.1 release
ms.date: 09/08/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.7.1 release notes

This release is primarily a bug fix release to address few regressions and missed bugs that were introduced in the 1.7 release. This didn't contain any critical issues, we rather wanted to fix few inconveniences with the latest release.

**Released:** December 18, 2018

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.7 to v1.7.1

1. In the project's **package.json** file, identify all SPFx v1.7 packages. For each SPFx package:
    1. Uninstall the existing v1.7 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.7
        ```

    1. Install the refreshed v1.7.1 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.7.1.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Changes in this release

- Update title of user data property title in dynamic data
- Add workaround for Yarn's **\@types/react** resolution issue
- Don't show/provision beta components in the non-beta install.
- Update debugger **launch.json** config.
- Add a dependency on TypeScript to meet the peer dependency requirements of **tslint-microsoft-contrib**.
