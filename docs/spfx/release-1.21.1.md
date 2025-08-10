---
title: SharePoint Framework v1.21.1 release notes
description: Release notes for the SharePoint Framework v1.21.1 release
ms.date: 05/03/2025
ms.localizationpriority: high
---
# SharePoint Framework v1.21.1 release notes

This is a _minor bump_ that fixes the issues around SharePoint Framework solution packaging, provides a fix on a regression related on the CSS handling with the previous [released 1.21 version](release-1.21.md).

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.21 version (if you don't have CSS issues with it), but we do recommend using always the latest version in the production, which in this case would be the 1.21.1, which has fixes on the reported GitHub issues as listed below.

**Released:** May 3, 2025

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.21 to v1.21.1

In the project's **package.json** file, identify all SPFx v1.21 packages. For each SPFx package:

1. Uninstall the existing v1.21 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.21
    ```

1. Install the new v1.21.1 package:

    ```console
    npm install @microsoft/{spfx-package-name}@latest --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

- [#10205](https://github.com/SharePoint/sp-dev-docs/issues/10205) - SPFx 1.21 - SCSS/CSS Module hashes being applied twice, styling not working
- [#10207](https://github.com/SharePoint/sp-dev-docs/issues/10207) - SPFx - Styles not being applied in newest version of SPFx 1.21

Also following issue has been fixed and the server side update is currently rolling in production. This means that the fix will be applied on server side without changes on the client side packages.

- [#10053](https://github.com/SharePoint/sp-dev-docs/issues/10053) - Web Part Missing in Toolbox After Running Gulp Serve
