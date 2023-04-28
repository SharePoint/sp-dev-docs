---
title: SharePoint Framework v1.10 release notes
description: Release notes for the SharePoint Framework v1.10 release
ms.date: 04/06/2022
ms.localizationpriority: high
---
# SharePoint Framework v1.10 release notes

New in this release, preview code for **Office Add-Ins** and a new Extension type **Search Extensions**. We also added support for personal apps in Microsoft Teams and Teams mobile support.

**Released:** January 7, 2020

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.9.1 to v1.10

In the project's **package.json** file, identify all SPFx v1.9.1 packages. For each SPFx package:

1. Uninstall the existing v1.9.1 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.9.1
    ```

1. Install the refreshed v1.10 package:

    ```console
    npm install @microsoft/{spfx-package-name}@1.10.0 --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

- Create Search Extensions (dev preview)
  - [Modifying Microsoft Search experience using SharePoint Framework extensions](building-search-extensions.md)
- Create Teams Personal Apps (GA)
  - [Docs: Building Microsoft Teams Tabs using SharePoint Framework](integrate-with-teams-introduction.md)
  - [Tutorial: Build Microsoft Teams tab using SharePoint Framework](web-parts/get-started/using-web-part-as-ms-teams-tab.md)
- Subscribing to list changes (GA)
  - [Subscribe to list notifications](subscribe-to-list-notifications.md)
- Pre-allocate space for your Application customizer top / bottom placeholder
  - [Pre-allocate space for SharePoint Framework extension placeholders](extensions/basics/preallocated-space-placeholders.md)

## Changes in this release

- The default compiler for new projects is now **TypeScript v3.3**
- We've migrated the SharePoint Online to **Office UI Fabric React 7**.  The next release of SPFx will include support for third-party components.  At the present time, you'll experience rendering issues if you try to use Office UI Fabric React and have a component that loads the legacy css (either because it was made with version < v1.8.2, or has the `UseLegacyCSS` flag set to true in the manifest).
- We continue to improve the admin experience around approving API requests in the SharePoint ONline tenant admin UIs.

## Deprecations and removed items in this release

- We're moving towards using **require.js** for the loader, rather than **system.js**. This is already the loader used for extensions running in the list app. There shouldn't be a change for you. The next version of SPFx will use the **require.js** loader for the local workbench. The online workbench will migrate to **require.js** over the next month or two, but we'll have a query string override to help diagnose any issues with new code.
- We'll be removing support for Node 8 in the next release. The goal is to also introduce support for Node 12 at that time.
- We're deprecating the Knockout-based web part template from the Yeoman generator due to low usage. It will be fully removed with the v1.11 release
- Accessing Microsoft Teams context using `this.context.microsoftTeams` property has been deprecated, you should be using `this.context.sdks.microsoftTeams` property instead.
