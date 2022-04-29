---
title: SharePoint Framework v1.3 release notes
description: Release notes for the SharePoint Framework v1.3 release
ms.date: 09/08/2021
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---
# SharePoint Framework v1.3 release notes

This release contains the general availability of extensions.

**Released:** September 25, 2017

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.1 to v1.3

1. In the project's **package.json** file, identify all SPFx v1.1 packages. For each SPFx package:
    1. Uninstall the existing v1.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.1
        ```

    1. Install the refreshed v1.3 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.3.0 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### SharePoint Extensions (general availability)

- [Overview of SharePoint Framework Extensions](extensions/overview-extensions.md)
