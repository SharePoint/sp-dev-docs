---
title: SharePoint Framework v1.12.1 release notes
description: Release notes for the SharePoint Framework v1.12.1 release
ms.date: 12/28/2021
ms.localizationpriority: high
---
# SharePoint Framework v1.12.1 release notes

This release introduces a new property & event in the Web Part API to detect the rendering width (and changes), improved support for Microsoft Teams solutions, and updates supported versions of Node.js.

**Released:** April 28, 2021

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.11.0 to v1.12.1

1. In the project's **package.json** file, identify all SPFx v1.11.0 packages. For each SPFx package:
    1. Uninstall the existing v1.11.0 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.11.0
        ```

    1. Install the refreshed v1.12 {version-release} package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.12.1 --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

- The **Sync to Teams** button in the Tenant App Catalog will use the Teams app manifest defined in the solution if present to create and publish a Teams app package to Microsoft Teams. If an app manifest file is not present, SharePoint will dynamically generate one.
  - *See [Deployment options for SharePoint Framework solutions for Microsoft Teams](deployment-spfx-teams-solutions.md) for more details.*
- A new API has been added to the SPFx web part class to determine the rendered width of a web part and optionally handle an event when it changes.
  - *See [Determine the rendered web part size](web-parts/basics/determine-web-part-width.md) for more details.*
- Expand [list notifications](subscribe-to-list-notifications.md) to work for both lists and document libraries.
- Preliminary support for Microsoft Teams meeting apps with the SharePoint Framework - full support is pending a fix for server side regression

## Changes in this release

- Add support for **Node.js v12.13.x & v14.15.x**
  - *See [Set up your SharePoint Framework development environment](set-up-your-development-environment.md) for details.*
  - **Gulp-CLI** is strongly recommended. Our prior guidance was to install Gulp v3 or v4 globally, but the guidance from the Gulp team is to only install Gulp CLI globally. By using the Gulp CLI, you can have projects that use Gulp v3 and others that use Gulp v4.
- For all projects:
  - Update the default version of TypeScript to **v3.7** (*via **@microsoft/rush-stack-compiler-3.7** v0.2.3*)
  - Update **Gulp** version used to **v4.0.2**
      > *see [Regarding Gulp versions & Node.js v12+](#gulp-versions--nodejs-v12) for details*
- For projects that use React:
  - Update the React NPM packages (**react** & **react-dom**) to **v16.9.0**.
  - Update the Office UI Fabric React NPM package / Microsoft Fluent UI (**office-ui-fabric-react**) to **v7.156.0**.
- The default location for resources used in deployments changed from `./temp/deploy` to `./releases/assets`. For projects created prior to SPFx v1.12.1, you should update the **./config/deploy-azure-storage.json** file property `workingDir` to the new location: `"workingDir": "./release/assets/"`. For more information, see [Deploy your SharePoint client-side web part to Azure CDN: Configure Azure Storage account details](web-parts/get-started/deploy-web-part-to-cdn.md#configure-azure-storage-account-details).

## Deprecations and removed items in this release

- **Gulp v3** is not supported (*neither globally nor locally installed*) when using Node.js v12+.
- **Local workbench is deprecated** - This is the last release that will include support for the local workbench.
- This is the last release that will include a single generator that works for on-prem and SharePoint Online.  You'll still be able to create projects for on-prem, just by using the older generator.
- The **gulp serve** task has been deprecated and renamed to **serve-deprecated**. To address this, the **gulpfile.js** in new SPFx v1.12.1 projects has been updated to add an alias **serve** for the renamed **serve-deprecated** task. However, if you're upgrading a project to SPFx v1.12.1, you need to edit your **gulpfile.js** file so the task **gulp serve** will continue to work.

    When upgrading SPFx projects to v1.12.1, add the following before the line `build.initialize(require('gulp'));`:

    ```javascript
    var getTasks = build.rig.getTasks;
    build.rig.getTasks = function () {
      var result = getTasks.call(build.rig);

      result.set('serve', result.get('serve-deprecated'));

      return result;
    };
    ```

### Gulp versions & Node.js v12+

Gulp v3 isn't supported with Node.js v12+ (*ref [gulpjs/gulp/#2324](https://github.com/gulpjs/gulp/issues/2324)*).

This is not a change with SPFx. Its mentioned here to bring attention to it as this SPFx release adds support for Node.js v12.
