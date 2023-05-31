---
title: SharePoint Framework v1.17.3 release notes
description: Release notes for the SharePoint Framework v1.17.3 release
ms.date: 05/09/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.17.2 release notes

This release is a _minor bump_ that fixes the issues around SharePoint Framework solution packaging as listed further down in this document.

We're looking into release more frequent smaller release to be available also in future to address new findings or to address any other known issues, which have been fixed.

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.17 version, but we do recommend using always the latest version in the production, which in this case would be the 1.17.3, which has few minor improvements as listed in this document.

**Released:** May 31, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.17 to v1.17.3

1. In the project's **package.json** file, identify all SPFx v1.17 packages. For each SPFx package:
    1. Uninstall the existing v1.17 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.17
        ```

    1. Install the new v1.17.3 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

- `@fluentui/react` package is referenced both as `dependecy` and `devDependency` in the generated `package.json` file for React Web Part
- [#8966](https://github.com/SharePoint/sp-dev-docs/issues/8966) - Web part missing,Vanishes 1.17/1.17.1/1.17.2
- [#8953](https://github.com/SharePoint/sp-dev-docs/issues/8953) - Lint error occurred with "@typescript-eslint/no-extra-semi"
