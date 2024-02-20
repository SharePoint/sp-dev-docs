---
title: SharePoint Framework v1.5.1 release notes
description: Release notes for the SharePoint Framework v1.5.1 release
ms.date: 06/13/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.5.1 release notes

This is mainly a bug fix release to address few regressions, which were introduced in the v1.5 release.

**Released:** June 26, 2018

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.5 to v1.5.1

In the project's **package.json** file, identify all SPFx v1.5 packages. For each SPFx package:

1. Uninstall the existing v1.5 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.5
    ```

1. Install the refreshed v1.5.1 package:

    ```console
    npm install @microsoft/{spfx-package-name}@1.5.1 --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## Changes in this release

- Fixed the issue in the yeoman generator that blocked you from creating different types of components in your package.
- Changed the visibility of some SPFx APIs to move them to Beta (and will now appear in the typings when you use the **--plusbeta** versions of the packages.  The APIs added to the **--plusbeta** packages are:
  - `TimeZone` information off of the Site and User context objects
    - [#1953](https://github.com/SharePoint/sp-dev-docs/issues/1953)
  - `DigestCache` and `IDigestCache`  is available
    - [#2017](https://github.com/SharePoint/sp-dev-docs/issues/2027)
  - The `AadHttpClient` constructor is available
    - [#1964](https://github.com/SharePoint/sp-dev-docs/issues/1964)
    - [#2001](https://github.com/SharePoint/sp-dev-docs/issues/2001)
    - [#2093](https://github.com/SharePoint/sp-dev-docs/issues/2093)
