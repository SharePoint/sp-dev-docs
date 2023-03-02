---
title: SharePoint Framework v1.17 preview release notes
description: Release notes for the SharePoint Framework v1.17 preview release
ms.date: 2/23/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.17 preview release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams, Outlook, Office and SharePoint.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- beta.1 **Released:** February 23, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest preview version

Install the latest preview release of the SharePoint Framework (SPFx) by including the **@next**
```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.16.1 to v1.17

1. In the project's **package.json** file, identify all SPFx v1.16.1 packages. For each SPFx package:
    1. Uninstall the existing v1.16.1 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.16.1
        ```

    2. Install the new v1.16 package:

        ```console
        npm install @microsoft/{spfx-package-name}@next --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Support for SharePoint Pages iframing in Teams applications

Developers can specify `supportsSelfFramingInTeams` flag in a web part's manifest if the scenario requires the web part to render SharePoint page in the iframe.

### Ability to specify claims parameter when requesting an AAD OAuth2 token

`AADTokenProvider.getToken` definition was updated to allow specifying claims parameter:

```typescript
  getToken(resourceEndpoint: string, options?: IGetTokenOptions): Promise<string>;
```

where `IGetTokenOptions`:

```typescript
interface IGetTokenOptions {
  useCachedToken?: boolean;
  claims?: string;
}
```

### Popup flow support in AadTokenProvider

`AadTokenProvider` now supports popup flow. Developers should handle `AadTokenProvider.popupEvent: SPEvent<PopupEventArgs>` event to implement the flow.
See `PopupEventArgs` definitions for more details.

### Support for aria-label in Property Pane's link control

`PropertyPaneLink` now supports `ariaLabel` property.

```typescript
interface IPropertyPaneLinkProps {
  // ...

  /**
   * Adds an aria label to the link for accessibility.
   */
  ariaLabel?: string;

  // ...
}
```

## Deprecations

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

### December-February Timeframe

- [#8623](https://github.com/SharePoint/sp-dev-docs/issues/8623) - 1.16.1 Issue: Cannot find manifest for f9e737b7-f0df-4597-ba8c-3060f82380db_1.16.1. Store had [1.16.0]. Service worker version: (none),DurableN1=true
- [#6091](https://github.com/SharePoint/sp-dev-docs/issues/6091) - Lazy loading of custom web parts in modern pages
- [#8559](https://github.com/SharePoint/sp-dev-docs/issues/8559) - ListView Command Set command is not displayed for a list that was placed on a modern page and only 1 item is select there
- [#8683](https://github.com/SharePoint/sp-dev-docs/issues/8683) - Permission Error with Form Customizer for new form
- [#8540](https://github.com/SharePoint/sp-dev-docs/issues/8540) - Web part property updates causes child component to remount and lose state
- [#8552](https://github.com/SharePoint/sp-dev-docs/issues/8552) - SPFx Field Customizer - onInit executes multiple times when navigating between folders in same document library
- [#8619](https://github.com/SharePoint/sp-dev-docs/issues/8619) - Vulnerability introduced by CVE-2022-37601 in loader-utils package
