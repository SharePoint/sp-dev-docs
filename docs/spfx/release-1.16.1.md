---
title: SharePoint Framework v1.16.1 release notes
description: Release notes for the SharePoint Framework v1.16.1 release
ms.date: 11/30/2022
ms.localizationpriority: high
---
# SharePoint Framework v1.16.1 release notes

This is a _minor bump_ that fixes the issues around SharePoint Framework solution packaging, provides improved default scaffolding and few other minor regressions which were in the previously [released 1.16 version](release-1.16.md).

**Released:** November 30, 2022

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.16 to v1.16.1

1. In the project's **package.json** file, identify all SPFx v1.16 packages. For each SPFx package:
    1. Uninstall the existing v1.16 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.16
        ```

    1. Install the new v1.16 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Promoting `config/sass.json` file

Starting with this version, there will be a `config/sass.json` file in all  scaffolded solutions. Developers can use this file to customize or adjust the SASS task used by SPFx build routing to process SASS files. This file is not required and can be removed if not needed.

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

- [#8599](https://github.com/SharePoint/sp-dev-docs/issues/8599) - SPFx 1.16.0 webpart final package size is almost 4x larger compared to 1.15.2
- [#8549](https://github.com/SharePoint/sp-dev-docs/issues/8549) - webpart in viva connection unexpected link behaviour issue
- [#8550](https://github.com/SharePoint/sp-dev-docs/issues/8550) - SPFx application customizer no longer works on modern Site Contents page
- [#8489](https://github.com/SharePoint/sp-dev-docs/issues/8489) - SPFx Web Part Dependencies not loaded correctly any more (relative-path.invalid Network Error)
- [#8458](https://github.com/SharePoint/sp-dev-docs/issues/8458) - SharePointFullPage loses expand button for users without edit permissions
