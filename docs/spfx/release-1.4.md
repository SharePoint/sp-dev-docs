---
title: SharePoint Framework v1.4 release notes
description: Release notes for the SharePoint Framework v1.4 release
ms.date: 07/03/2020
ms.prod: sharepoint
localization_priority: Priority
---
# SharePoint Framework v1.4 release notes

**Released:** December 7, 2017

## Upgrading projects from v1.3 to v1.4

1. In the project's **package.json** file, identify all SPFx v1.3 packages. For each SPFx package:
    1. Uninstall the existing v1.3 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.3
        ```

    1. Install the refreshed v1.4 package:

        ```console
        npm install @microsoft/{spfx-package-name}@1.4.0 --save --save-exact
        ```

> [!TIP]
> The [CLI for Microsoft 365](https://aka.ms/o365cli) provides an easy step-by-step guidance to [upgrade](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/) your solutions to latest SharePoint Framework version.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## New features and capabilities

### @microsoft/sp-tslint-rules

- Introduce a new **no-require-ensure** rule to facilitate deprecating **require.ensure()** in favor of the `import` keyword

### @microsoft/sp-build-web

- Enable build assets to be incorporated into the **\*.sppkg** file and hosted by SharePoint

### @microsoft/sp-build-core-tasks

- Add `asyncComponents` option to **config.json**. This setting can be used to avoid imports that would cause a library to be accidentally loaded synchronously instead of asynchronously
- Introduce the ability to specify a relative path to an icon in a web part or extension manifest

### @microsoft/generator-sharepoint

- Add missing tilde to libraries when generating client-side extension projects
- Enable **skipLibCheck** to work around the inconsistent declarations of "WeakMap" in lodash and es2015.collection
- Add **launch.json** and **extensions.json** to the generator SharePoint solution

### @microsoft/sp-http

- Promote **SPHttpClientBatch** from @alpha to @beta
- Initial beta release of **SPHttpHeader** enum and `SPHttpClientResponse.correlationId` property

### @microsoft/sp-loader

- Disallow loading of components built using SPFx preview releases prior to 1.0

### @microsoft/sp-module-interfaces

- Add `preloadListItemProperties` to the `preloadOptions` section of the client-side application manifest
- Add a "tags" property to the web part manifest
- Introduce the ability to specify a relative path to an icon in a web part or extension manifest
- Enable the `preloadComponents` field to be used with other client-side component manifest types 

### @microsoft/sp-webpart-base

- Add `shouldNotPersist` to `IWebPartPropertyMetadata` to allow marking web part properties that shouldn't persist on the server

### @microsoft/sp-lodash-subset

- Add `escaperegex()` function
- Use **lodash-cli** to significantly reduce the bundle size for **\@microsoft/sp-lodash-subset**
- Add `find()` function

## Changes in this release

- Replace **\@types/es6-collections** with the typescript compiler's built-in es2015.collection library
- Remove beta tags from some APIs that are now officially supported

### @microsoft/generator-sharepoint

- Update the generator work with older versions of the **config.json** file, because automatically upgrading it interfered with older branches such as on-premises
- Include missing **ajv** dependency in the generated **package.json**
- Remove outdated JSON schema settings
- Fix an issue with parsing on-premises configuration files
- Fix an issue where we appended "WebPart" to the class name twice when creating a web part with no template
- Remove a heuristic that was removing parts of the component name, because customers found this confusing
- Fix an issue where localization files for extensions were overwritten
- Fix an issue with data bindings for the Knockout web part template
- Add a suppression for the "CSS class `ms-Grid` isn't camelCase" warning caused by Fabric
- Update the Yeoman generator to use **\@microsoft/sp-office-ui-fabric-core** instead of directly referencing **office-ui-fabric**
- Update generator's React type declarations to use a newer **React-DOM**, and remove the deprecated **React-addons** packages

### @microsoft/loader-cased-file

- Update dependencies and fix a few issues that were causing warnings

### @microsoft/sp-office-ui-fabric-core

- Remove the Z-index support from **\@microsoft/sp-office-ui-fabric-core**

### @microsoft/sp-client-preview

- Replace **\@types/es6-collections** with the TypeScript compiler's built-in es2015.collection library

### @microsoft/sp-build-core-tasks

- Fix an issue where the **--locale** parameter isn't respected
- Add batching to **dev-deploy** and **upload-cdn**
- Fix a minor issue with icon URL generation where icon URLs would be missing the CDN prefix
- Update webpack loaders to get rid of the deprecation warning

### @microsoft/sp-webpart-base

- Fix an issue where the property pane didn't refresh properly
- Fix an issue with ariaLabel functionality in property pane button
- Fix an Internet Explorer compatibility issue when a checkbox has a long title
- Remove @beta designation for `WebPartContext`

## Deprecations and removed items in this release

### @microsoft/sp-build-core-tasks

- Deprecate the UNIT_TEST webpack macro, because this practice made it too easy to accidentally include test code in a production bundle

### @microsoft/sp-core-library

- Deprecated `IServiceCollection` and `UrlQueryParameterCollection`

### @microsoft/sp-webpart-base

- Deprecate `IWebPartContext`
