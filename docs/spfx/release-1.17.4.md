---
title: SharePoint Framework v1.17.4 release notes
description: Release notes for the SharePoint Framework v1.17.4 release
ms.date: 06/21/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.17.4 release notes

This release is a _minor bump_ that has minor updates on the default project settings and package dependencies.

We're looking into release more frequent smaller release to be available also in future to address new findings or to address any other known issues, which have been fixed.

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.17 version, but we do recommend always using the latest version in the production, which in this case would be the 1.17.4, which has few minor improvements as listed in this document.

**Released:** June 21, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.17 to v1.17.4

1. In the project's **package.json** file, identify all SPFx v1.17 packages. For each SPFx package:
    1. Uninstall the existing v1.17 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.17
        ```

    1. Install the new v1.17.4 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Enable Strict Null Check for the generated solutions

Starting from this release, the generated solutions will have the strict null check enabled by default. This will help to avoid the runtime error caused by the null value. If you want to disable it, you can set the `strictNullChecks` to `false` in the `tsconfig.json` file.

## Fixed Issues

Here's a list of specific changes around SharePoint Framework since the previous public release.

- Updating `lodash` dependency to version `4.17.21`
