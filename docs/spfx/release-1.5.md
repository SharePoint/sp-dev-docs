---
title: SharePoint Framework v1.5 release notes
description: Release notes for the SharePoint Framework v1.5 release
ms.date: 02/10/2022
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---
# SharePoint Framework v1.5 release notes

Key changes are around the introduction of the new *plusbeta* model and many other improvements and additional capabilities.

**Released:** June 5, 2018

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Upgrading projects from v1.4.1 to v1.5

1. In the project's **package.json** file, identify all SPFx v1.4.1 packages. For each SPFx package:
    1. Uninstall the existing v1.4.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.4.1
        ```

    1. Install the refreshed v1.5 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.5.0 --save --save-exact
        ```

1. Install the following TypeScript type declaration packages:

    ```console
    npm install **\@types/webpack-env@1.13.1
    npm install **\@types/es6-promise@0.0.33
    ```

1. Add the following entries to the `types` array in the **tsconfig.json** file:

    ```json
    {
      // omitted for brevity
      "types": [
        // omitted for brevity
        "webpack-env",
        "es6-promise"
      ]
      // omitted for brevity
    }
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Ship vs. Beta APIs are now separate packages

Starting with the v1.5.0 release, the packages will only contain the final public APIs in the **\*.d.ts** files. All beta APIs are removed, and you'll need to explicitly choose the packages that contain the beta APIs in them. To use these beta APIs, you need to use the **1.5.0-plusbeta** versions of the packages. There's only one version of **\@microsoft/generator-sharepoint**, and it can create both beta and not beta solutions.

You can create solutions that use the beta APIs in one of two ways. You can run the yeoman generator and add a **--plusbeta** flag in the command line, and it will create a **package.json** file with the **-plusbeta** versions already, or you can update the references in **package.json** to use the **-plusbeta** version.

This is different than your typical approach, due to the fact that while there are occasionally entire packages that are in beta, it's also common for some beta APIs to be in existing ship packages. It's also not necessarily true that it's a beta version of the next release, as a feature may stay in the preview for more than one release.

- [Try SharePoint Framework preview capabilities](try-preview-capabilities.md)

### Dynamic Data (developer preview)

The main bulk of this release is the developer preview of dynamic data. You can think of this as a modern take on the **Web Part Connections** feature in the classic pages.

The end goal of the feature will be to allow developers and users to have properties be more dynamic, and can be bound to properties in other web parts (say a user card that is driven by the currently selected document in a document library web part), page state (the user card displays the author) or even page context (the user card displays the current user).

This dev preview is mostly focused on the underlying data model. No first party web parts are currently exposing properties. We have a sample page context object and a rough (developer focused) property pane control where you can type in the path to the dynamic property that you want to bind a web part property to.

We're still working on the end-user experience but wanted developers to try this out in the meantime. You can find tutorials and examples from following locations:

- [Connect SharePoint Framework components using dynamic data](dynamic-data.md)
- [Dynamic Data sample in React](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-events-dynamicdata)

### Support for additional package managers (Yarn & PNPM)

The Yeoman generator and build tools now support PNPM and Yarn package managers, and **npm**.

To use this, **--package-manager** command-line option in the generator, and you can specify **npm**, **pnpm, or **yarn**.

For example:

```console
yo @microsoft/sharepoint --package-manager pnpm
```

- [Yeoman generator for the SharePoint Framework](yeoman-generator-for-spfx-intro.md)

### Support for customized Yeoman Generators

We've reworked the generator to follow best practices. This should allow you to leverage our generator for your own custom generators. We'll start new open-source initiative on this under the SharePoint Dev community (PnP) to offer new supported platforms like Angular Elements and Vue.js.

## Changes in this release

Many of the updates to the framework don't actually require an update to the npm packages. For example, we've removed the authentication popup in the initial release of the Web API developer preview code, but the change rolls out to the framework hosted on the service, so no changes are required for developers.

There have been some updates that explicitly require updates to packages:

- Added AAD information to the PageContext (aadInfo)
- Fixed issues around sp-dialog and other packages not working correctly in the workbench
- Added 10 additional tslint rules from tslint-microsoft-config to detect common security vulnerabilities
- Fixed an issue in package-solution where warnings were causing the build to incorrectly fail
