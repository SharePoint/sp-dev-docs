---
title: SharePoint Framework v1.17.12 release notes
description: Release notes for the SharePoint Framework v1.17.2 release
ms.date: 05/09/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.17.2 release notes

This is a _minor bump_ that fixes the issues around SharePoint Framework solution packaging, provides improved default scaffolding and few other minor adjustments, which were in the previous released [1.17 version](release-1.17.md) and [1.17.1 version](release-1.17.1.md).

We are looking into release more frequent smaller release to be available also in future to address new findings or to address any other known issues which have been fixed.

> [!TIP]
> It's safe to keep on using SharePoint Framework 1.17 version, but we do recommend using always the latest version in the production, which in this case would be the 1.17.2, which has few minor improvements as listed below.

**Released:** May 8, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.17 to v1.17.1

1. In the project's **package.json** file, identify all SPFx v1.17 packages. For each SPFx package:
    1. Uninstall the existing v1.17 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.17
        ```

    1. Install the new v1.17.2 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

- [#8939](https://github.com/SharePoint/sp-dev-docs/issues/8939) - Error can't find stylesheet to import
- [#8945](https://github.com/SharePoint/sp-dev-docs/issues/8945) - New scaffolded projects contain phantom dependencies and do not compile with pnpm
- [#8887](https://github.com/SharePoint/sp-dev-docs/issues/8887) - SPFx 1.17 - Conflicting package dependencies
- [#8936](https://github.com/SharePoint/sp-dev-docs/issues/8936) - Default debugging type of 'edge' creates error
- [#8930](https://github.com/SharePoint/sp-dev-docs/issues/8930) - SPFx error during `gulp serve`
- `SPFX_SERVE_TENANT_DOMAIN` warning should not be shown for `gulp serve --nobrowser`
