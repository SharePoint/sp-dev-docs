---
title: SharePoint Framework v1.15 preview release notes
description: Release notes for the SharePoint Framework v1.15 preview release
ms.date: 3/3/2022
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.15 preview release notes

There will be multiple public preview release using the @next tag in the NPMJS.org registry before final release candidates and a final public release.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

**beta.1:** March 8, 2022

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
        npm uninstall @microsoft/generator-sharepoint@1.14
        ```

    2. Install the new v1.15 preview package:

        ```console
        npm install @microsoft/generator-sharepoint@next --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Microsoft Graph JavaScript SDK v3 Support

The **MSGraphClientFactory** allows a developer to select the version of the Microsoft Graph JavaScript SDK to use.

> [!NOTE]
> Default behavior is to use v1 of the Microsoft Graph JavaScript SDK for backward compatibility.

```typescript
this.context.msGraphClientFactory.getClient('3');
```

### Updated Command Set Extension Template

The template was updated to use `listViewStateChanged` event instead of deprecated `onListViewUpdated` event.

## Deprecations

- Deprecated SPComponentLoader#getManifests due to runtime performance overhead.

## Fixed Issues

### February Timeframe

- [#7680](https://github.com/SharePoint/sp-dev-docs/issues/7680) - Theme colors do not load (immediately) on SP listpage or site contents page
- [#6403](https://github.com/SharePoint/sp-dev-docs/issues/6403) - DynamicData.tryGetValue() should not fail if disposed
- [#5979](https://github.com/SharePoint/sp-dev-docs/issues/5979) - Problem popup when remove SPFx Teams Tab
- [#7679](https://github.com/SharePoint/sp-dev-docs/issues/7679) - Field customizer doesn't load consistently when searching
- [#7689](https://github.com/SharePoint/sp-dev-docs/issues/7689) - [SPFx-Heft-Plugins][SPFx 1.13.1] elementManifests path resolving differently on Windows and Linux when referencing external file path
- [#7771](https://github.com/SharePoint/sp-dev-docs/issues/7771) - SPFx v1.14.0: Image Helper API, exception in btoa, string contains characters outside of the Latin1 range
