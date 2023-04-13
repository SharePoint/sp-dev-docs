---
title: SharePoint Framework v1.17.1 release notes
description: Release notes for the SharePoint Framework v1.17.1 release
ms.date: 04/13/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.17.1 release notes

This is a _minor bump_ that fixes the issues around SharePoint Framework solution packaging, provides improved default scaffolding and few other minor adjustments, which were in the previous [released 1.17 version](release-1.17.md).

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.17 version, but we do recommend using always the latest version in the production, which in this case would be the 1.17.1, which has few minor improvements as listed below.

**Released:** April 12, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.17 to v1.17.1

1. In the project's **package.json** file, identify all SPFx v1.17 packages. For each SPFx package:
    1. Uninstall the existing v1.17 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.17
        ```

    1. Install the new v1.17.1 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

- `PopupEventArgs` is missing from the [public documentation](/javascript/api/sp-http-base/popupeventargs)
- [#8878](https://github.com/SharePoint/sp-dev-docs/issues/8878) - SPFx v1.17 - ACE - Default QuickView uses old Adaptive Card schema
