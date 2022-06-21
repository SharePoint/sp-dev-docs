---
title: SharePoint Framework v1.15 release notes
description: Release notes for the SharePoint Framework v1.15 release
ms.date: 06/21/2022
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.15 release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams and SharePoint.

**Released:** June 21, 2022

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest released version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.14 to v1.15

1. In the project's **package.json** file, identify all SPFx v1.14 packages. For each SPFx package:
    1. Uninstall the existing v1.14 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.14
        ```

    2. Install the new v1.15 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Form Customizer Extension

The Form Customizer Extension allows developers to customize new, edit and display forms of the lists and document libraries.

* [Tutorial on creating your first form customizer](extensions/get-started/building-form-customizer.md)

> [!NOTE]
> You can see live demo of this feature from the following YouTube video - [Getting started on building custom list form components with SPFx v1.15](https://www.youtube.com/watch?v=LF5eQHBx10o).


### Node.js v16 Support

SharePoint Framework solutions now support Node.js v16 as the default Node.js version.


### Microsoft Graph JavaScript SDK v3 Support

The **MSGraphClientFactory** allows a developer to select the version of the Microsoft Graph JavaScript SDK to use.

> [!NOTE]
> Starting with SPFx 1.15 only v3 of the Microsoft Graph JavaScript SDK is supported. v1 support is removed for all new and updated solutions. Please update your code accordingly to get the right version.

```typescript
this.context.msGraphClientFactory.getClient('3');
```

### TypeScript v4 Support

SharePoint Framework solutions now support TypeScript v4.5

### ESLint Support

SPFx solutions now support [ESLint](https://github.com/typescript-eslint/typescript-eslint) 8.x instead of the deprecated [TSLint](https://github.com/palantir/tslint).

### Updated Microsoft Teams JavaScript Client SDK

SharePoint Framework solutions now support [Microsoft Teams JavaScript Client SDK v1.12.1](https://github.com/OfficeDev/microsoft-teams-library-js).

### Updated Command Set Extension Template

The template was updated to use `listViewStateChanged` event instead of deprecated `onListViewUpdated` event.

### Changes to Scaffolding Options and Prompts

- new command line option: `--use-heft`. If specified, the solution will build the project using [Heft](https://rushstack.io/pages/heft/overview/).

### Image Helper API - General Availability

The **ImageHelper** static class (in **\@microsoft\/sp-image-helper**) has been added to allow SPFx developers runtime access to:

- Urls of auto-generated thumbnail images of pages and documents stored in SharePoint
- More optimized Urls to images stored in SharePoint

The helper method `ImageHelper.convertToImageUrl()` takes a Url to an asset on SharePoint, a width, and an optional height and will perform client-side operations to try to create an optimized Url.

The resulting Url will point to an image that is close to the requested size. The resulting Url will also include using other SharePoint media and graph services. If available for the requested asset, public or private CDN locations to serve the resized images and thumbnails.

### New Action types for geolocation

The support matrix for geolocation actions looks like:

Action       | Viva Connection Desktop | Viva Connections Mobile | Browser
------------- | ------------- | ------------- | -------------
Get Location  | Not Supported | Supported | Supported
Show Location | Not Supported | Supported | Supported

```typescript
    ISPFxAdaptiveCard.actions?: (
        | ISubmitAction
        | IOpenUrlAction
        | IShowCardAction
        | IGetLocationAction // Get a location
        | IShowLocationAction // Show a location on a map
    )[];
```

The location actions can be configured as shown below:

```typescript
  actions: [
    {
      type: 'VivaAction.GetLocation',
      id: 'Get Location',
      parameters: {chooseLocationOnMap: true}
    }
    {
      type: 'VivaAction.ShowLocation',
      id: 'Show Location',
      parameters: parameters: {locationCoordinates: {latitude: 40, longitude: 40}}
    }
  ]
```

## Deprecations

- Deprecated SPComponentLoader#getManifests due to runtime performance overhead.
- Removed API from `@microsoft/sp-http` - `MSGraphClientFactory.getClient()`

## Fixed Issues

### February-May Timeframe

- [#7680](https://github.com/SharePoint/sp-dev-docs/issues/7680) - Theme colors do not load (immediately) on SP listpage or site contents page
- [#6403](https://github.com/SharePoint/sp-dev-docs/issues/6403) - DynamicData.tryGetValue() should not fail if disposed
- [#5979](https://github.com/SharePoint/sp-dev-docs/issues/5979) - Problem popup when remove SPFx Teams Tab
- [#7679](https://github.com/SharePoint/sp-dev-docs/issues/7679) - Field customizer doesn't load consistently when searching
- [#7689](https://github.com/SharePoint/sp-dev-docs/issues/7689) - [SPFx-Heft-Plugins][SPFx 1.13.1] elementManifests path resolving differently on Windows and Linux when referencing external file path
- [#7771](https://github.com/SharePoint/sp-dev-docs/issues/7771) - SPFx v1.14.0: Image Helper API, exception in btoa, string contains characters outside of the Latin1 range
- [#7684](https://github.com/SharePoint/sp-dev-docs/issues/7684) - SPFx app inside Microsoft Teams authentication error (sso-getAdalSsoToken-receive)
- [#7739](https://github.com/SharePoint/sp-dev-docs/issues/7739) - CommandSet Extensions don't work in Document Library when navigating from LHN link on site home page
- [#7794](https://github.com/SharePoint/sp-dev-docs/issues/7794) - `listViewStateChangedEvent` does not trigger for grouped list views
- [#7805](https://github.com/SharePoint/sp-dev-docs/issues/7805) - SPFx is loading library component old version for some users
- [#7795](https://github.com/SharePoint/sp-dev-docs/issues/7795) - `this.context.pageContext.list.serverRelativeUrl` doesn't refresh
- [#7827](https://github.com/SharePoint/sp-dev-docs/issues/7827) - `deploy-azure-storage` command always creates container with Pubic Access Level of 'Private' instead of Blob
- [#7826](https://github.com/SharePoint/sp-dev-docs/issues/7826) - [SPFx 1.15.0-beta.1] package-solution fails when elements.xml file is referenced from external folder and sharepoint/assets doesn't exist
- [#6477](https://github.com/SharePoint/sp-dev-docs/issues/6477) - Subscribe to list notifications with transport error
- [#7845](https://github.com/SharePoint/sp-dev-docs/issues/7845) - `command.disabled` not always respected
- [#6807](https://github.com/SharePoint/sp-dev-docs/issues/6807) - SharePoint spfx webparts seem to be taking up all sessionStorage in the browser
- [#7950](https://github.com/SharePoint/sp-dev-docs/issues/7950) - `globalDependecies` in `config.json` don't work
- [#7949](https://github.com/SharePoint/sp-dev-docs/issues/7949) - `command.disabled` still not working
- [#7974](https://github.com/SharePoint/sp-dev-docs/issues/7974) - Property `folderInfo` is undefined if folder is loaded directly
