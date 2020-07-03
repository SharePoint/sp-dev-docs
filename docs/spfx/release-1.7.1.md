---
title: SharePoint Framework v1.7.1 release notes
description: Release notes for the SharePoint Framework v1.7.1 release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.7.1 release notes

This release is primarily a bug fix release to address few regressions and missed bugs that were introduced in the 1.7 release. This didn't contain any critical issues, we rather wanted to fix few inconveniences with the latest release.

**Released:** December 18, 2018

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

> [!TIP]
> The [Office 365 CLI](http://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/office365-cli/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## Changes in this release

- Update title of user data property title in dynamic data
- Add workaround for Yarn's **@types/react** resolution issue
- Don't show/provision beta components in the non-beta install.
- Update debugger **launch.json** config.
- Add a dependency on TypeScript to meet the peer dependency requirements of **tslint-microsoft-contrib**.
