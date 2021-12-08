---
title: SharePoint Framework v1.14 release notes
description: Release notes for the SharePoint Framework v1.14 release
ms.date: 12/08/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# SharePoint Framework v1.14 release notes

We will be releasing multiple public preview release using the **@next** tag in the [NPMJS.org](https://www.npmjs.org) registry before final release candidates and a final public release.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- beta.4 **Released:** December 8, 2021

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest preview release

Install the latest preview release of the SharePoint Framework (SPFx) by including the **@next** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.13.1 to v1.14

1. In the project's **package.json** file, identify all SPFx v1.13.1 packages. For each SPFx package:
    1. Uninstall the existing v1.13.1 package:

        ```console
        npm uninstall @microsoft/generator-sharepoint@1.13.1
        ```

    2. Install the new v1.14 preview package:

        ```console
        npm install @microsoft/generator-sharepoint@next --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Adaptive Card Extensions card view caching

For improved performance, SharePoint Framework now supports local caching of your Adaptive Card Extension's card views. The cached card view will be immediately rendered when loading your Adaptive Card Extension. After Adaptive Card Extension loads, it can optionally update the card view.

```typescript
interface ICacheSettings {
/**
 * Whether cache is enabled. Default: true
 */
isEnabled: boolean;
/**
 * Expiry time in seconds. Default: 86400 seconds (24 hours)
 */
expiryTimeInSeconds: number;

/**
 * Returns the Card View used to generate the cached card.
 * By default, the currently rendered Card View will be used to cache the card.
 */
cachedCardView?: () => BaseCardView;
}
BaseAdaptiveCardExtension.getCacheSettings(): Partial<ICacheSettings>;
```

By default caching is enabled with default settings. An Adaptive Card Extension can customize its
cache settings by overriding `getCacheSettings` to return the settings it wants to override.

When the last known card view shouldn't be cached, you can provide a specific card view to be
cached and displayed on the next page load through `ICacheSettings.cachedCardView`. This card view
doesn't need to have been previously registered.

An Adaptive Card Extension can also locally cache its current state. By default no state is cached.

```typescript
BaseAdaptiveCardExtension.getCachedState(state: TState): Partial<TState>;
```

If `getCachedState` is overridden, then the cached values will be provided when the Adaptive Card
Extension is initialized on the next page load.

`onInit` has a new overload, which passes information about the cached card state. If the card wasn't
loaded from a cached card view, then `cachedLoadParameters` will be `undefined`.

```typescript
interface ICachedLoadParameters {
    state: TState;
}
BaseAdaptiveCardExtension.onInit(cachedLoadParameters?: ICachedLoadParameters): Promise<void>;
```

Initial state of the Adaptive Card Extension can be seeded from the cached state. The cached state can also be used to determine if any further logic needs to be executed.

State caching and the cache expiry time can be used to determine when
expensive remote calls need to be made by the Adaptive Card Extension.

Caching can help significantly improve the perceived performance for your Adaptive Card Extension.

### Web Part lifecycle method for theme changes

```typescript
BaseClientSideWebPart.onThemeChanged(theme: IReadonlyTheme | undefined): void;
```

When a theme is initialized or changed on a page, `onThemeChanged` will be invoked with the new theme.

> [!NOTE]
> `render` should not be invoked in `onThemeChanged`. Calling `render` can lead to unpredicted re-flow of the web part. `render` will automatically be invoked if needed.

### Detect if a component is loading from localhost

```typescript
BaseComponentContext.isServedFromLocalhost(): boolean;
```

Any SPFx component can now check if it's currently running from code served locally.

### Hide a Property Pane group name

```typescript
IPropertyPaneGroup.isGroupNameHidden?: boolean;
```

`isGroupNameHidden` can be used to skip the rendering of the Property Pane group name to avoid an empty group header being displayed.

The default value of `isGroupNameHidden` is false.

### Updated Web Part Templates

- No Framework, and React templates are updated with new end-user friendly UI for SharePoint and Microsoft Teams with theme detection, section background color support and more.
- New "Minimal" template is added: allows to start development with the minimal amount of code provisioned.

### Changes to Scaffolding Options and Prompts

- New prompt for solution description is added.
- "Tenant-wide deployment" prompt is removed. The property is set to `true` by default and can be changed manually or using `skip-feature-deployment` argument.

## Deprecations and removed items in this release

- Deprecated APIs from `@microsoft/sp-core-library`
  - `EnvironmentType.Local`
- Removed deprecated APIs from `@microsoft/sp-http`
  - `GraphHttpClient`
  - `GraphHttpClientConfiguration`
  - `GraphHttpClientResponse`
  - `IGraphHttpClientConfiguration`
  - `IGraphHttpClientConfigurations`
  - `IGraphHttpClientOptions`
- Removed preview APIs from `@microsoft/sp-webpart-base`
  - `ISDKs.office`
  - `IOffice`