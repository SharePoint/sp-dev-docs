---
title: SharePoint Framework v1.1 release notes
description: Release notes for the SharePoint Framework v1.1 release
ms.date: 09/08/2021
ms.localizationpriority: high
---
# SharePoint Framework v1.1 release notes

This release introduces the developer preview of extensions.

**Released:** June 6, 2017

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.0 to v1.1

1. In the project's **package.json** file, identify all SPFx v1.0 packages. For each SPFx package:
    1. Uninstall the existing v1.0 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.0
        ```

    1. Install the refreshed v1.1 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.1.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### SPFx Extensions (developer preview)

Welcome to the latest developer preview of SPFx. This time round we are tackling extending the modern SharePoint applications like the modern list/libraries and the modern team site pages.

- [Overview of SharePoint Framework Extensions](extensions/overview-extensions.md)

You can get the updated NPM packages now, but the solutions you build will only work on Developer Tenants - not site collections, but developer tenants.

This is the same process as the original developer preview drop of SPFx web parts. We expect to make some breaking changes before we hit GA, and want to ensure that solutions aren't rolled out to production tenants yet. Over the next while we will extend the preview to first release tenants (not users, but tenants) and then to all tenants.

### New packages

- **\@microsoft/sp-dialog**: An API to make it easy to create dialog boxes in your extensions (and web parts!).
- **\@microsoft/sp-listview-extensibility**: List-specific extensions around fields and command sets.
- **\@microsoft/sp-extension-base**: The system base classes for all extensions.
- **\@microsoft/sp-application-base**: The base classes required for the application customizer extension type.
