---
title: SharePoint Framework v1.15 preview release notes
description: Release notes for the SharePoint Framework v1.15 preview release
ms.date: 06/01/2022
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.15 preview release notes

There will be multiple public preview release using the @next tag in the NPMJS.org registry before final release candidates and a final public release.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- rc.1 **Released:** June 1, 2022
- beta.6 **Released:** April 19, 2022
- beta.1 **Released:**  March 8, 2022

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest preview release

Install the latest preview release of the SharePoint Framework (SPFx) by including the **@next** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.14 to v1.15

1. In the project's **package.json** file, identify all SPFx v1.14 packages. For each SPFx package:
    1. Uninstall the existing v1.14 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.14
        ```

    2. Install the new v1.15 preview package:

        ```console
        npm install @microsoft/{spfx-package-name}@next --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Form Customizer Extension

The Form Customizer Extension allows developers to customize new, edit and display forms of the lists and document libraries. 

> [!NOTE]
> The API to apply form customizers to a content type or list is still work in progress. 
> Developers can use local debugging and direct link to `SPListForm.aspx` page to test the customizers.
> Please, check `config\serve.json` file created during the provisioning for more details.
> You can see live demo of this process from following YouTube video - [Preview on upcoming list extensibility options with SPFx v1.15](https://www.youtube.com/watch?v=90DWB9hjo-k).

### Microsoft Graph JavaScript SDK v3 Support

The **MSGraphClientFactory** allows a developer to select the version of the Microsoft Graph JavaScript SDK to use.

> [!NOTE]
> Default behavior is to use v1 of the Microsoft Graph JavaScript SDK for backward compatibility.

```typescript
this.context.msGraphClientFactory.getClient('3');
```

### TypeScript v4 Support

SPFx solutions now support TypeScript v4.5

### ESLint Support

SPFx solutions now support ESLint 8.3.0 instead of deprecated TSLint.

### Updated Microsoft Teams JavaScript Client SDK

SPFx solutions now support Microsoft Teams JavaScript Client SDK v1.12.1.

### Updated Command Set Extension Template

The template was updated to use `listViewStateChanged` event instead of deprecated `onListViewUpdated` event.

### Changes to Scaffolding Options and Prompts

- new command line option: `--use-heft`. If specified, the solution will build the project using Heft.

## Deprecations

- Deprecated SPComponentLoader#getManifests due to runtime performance overhead.

## Fixed Issues

### February & March Timeframe

- [#7827](https://github.com/SharePoint/sp-dev-docs/issues/7827) - `deploy-azure-storage` command always creates container with Pubic Access Level of 'Private' instead of Blob
- [#7826](https://github.com/SharePoint/sp-dev-docs/issues/7826) - [SPFx 1.15.0-beta.1] package-solution fails when elements.xml file is referenced from external folder and sharepoint/assets doesn't exist
- [#6477](https://github.com/SharePoint/sp-dev-docs/issues/6477) - Subscribe to list notifications with transport error
- [#7845](https://github.com/SharePoint/sp-dev-docs/issues/7845) - `command.disabled` not always respected
- [#6807](https://github.com/SharePoint/sp-dev-docs/issues/6807) - SharePoint spfx webparts seem to be taking up all sessionStorage in the browser
- [#7684](https://github.com/SharePoint/sp-dev-docs/issues/7684) - SPFx app inside Microsoft Teams authentication error (sso-getAdalSsoToken-receive)
- [#7739](https://github.com/SharePoint/sp-dev-docs/issues/7739) - CommandSet Extensions don't work in Document Library when navigating from LHN link on site home page
- [#7794](https://github.com/SharePoint/sp-dev-docs/issues/7794) - `listViewStateChangedEvent` does not trigger for grouped list views
- [#7805](https://github.com/SharePoint/sp-dev-docs/issues/7805) - SPFx is loading library component old version for some users
- [#7795](https://github.com/SharePoint/sp-dev-docs/issues/7795) - `this.context.pageContext.list.serverRelativeUrl` doesn't refresh
- [#7680](https://github.com/SharePoint/sp-dev-docs/issues/7680) - Theme colors do not load (immediately) on SP listpage or site contents page
- [#6403](https://github.com/SharePoint/sp-dev-docs/issues/6403) - DynamicData.tryGetValue() should not fail if disposed
- [#5979](https://github.com/SharePoint/sp-dev-docs/issues/5979) - Problem popup when remove SPFx Teams Tab
- [#7679](https://github.com/SharePoint/sp-dev-docs/issues/7679) - Field customizer doesn't load consistently when searching
- [#7689](https://github.com/SharePoint/sp-dev-docs/issues/7689) - [SPFx-Heft-Plugins][SPFx 1.13.1] elementManifests path resolving differently on Windows and Linux when referencing external file path
- [#7771](https://github.com/SharePoint/sp-dev-docs/issues/7771) - SPFx v1.14.0: Image Helper API, exception in btoa, string contains characters outside of the Latin1 range
