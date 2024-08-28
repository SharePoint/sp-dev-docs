---
title: SharePoint Framework v1.17 release notes
description: Release notes for the SharePoint Framework v1.17 release
ms.date: 05/09/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.17 release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams, Outlook, Office, and SharePoint.

**Released:** April 4, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest**

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.16.1 to v1.17

In the project's **package.json** file, identify all SPFx v1.16.1 packages. For each SPFx package:

1. Uninstall the existing v1.16.1 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.16.1
    ```

1. Install the new v1.17 package:

    ```console
    npm install @microsoft/{spfx-package-name}@latest --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

- Updates and improvements on building Microsoft 365 wide experiences with **Microsoft Teams apps build with SharePoint Framework** – This model enables you to build auto-hosted apps in Microsoft 365, which are extended across Microsoft Teams, Outlook and Office 365 app (office.com). Any Microsoft Teams app build with SharePoint Framework is automatically now compliant with the requirements to get the app exposed across Microsoft 365.
- Updates and improvements on the **Microsoft Viva extensibility build with SharePoint Framework**.
- General availability of the **top actions for custom web parts in SharePoint**.
- **Authentication improvements** with popup flow support for API authentication.
- **Accessibility improvements** for the web part areas.
- **Development time improvements** with central configuration of developer tenant details.
- **Microsoft Teams JS SDK** version update to version **2.9.1** to support new APIs, such as Live Share SDK.
- *“Sync to Teams”* functionality in SharePoint app catalog update to use **Teams Manifest v1.16** for the automatically created Microsoft Teams solution package – making all SPFx components exposed across the Microsoft 365 also with automatically generated packaging
- Viva Connections **Adaptive Cards Extensions** update to support **Adaptive Cards schema v1.5.** - enabling tables and other new features for ACEs

### Microsoft Teams JS SDK v2.9.1 support

[Microsoft Teams JS SDK](/javascript/api/overview/msteams-client) was bumped to v2.9.1 to support new API, such as **LiveShare**.

### Support for Adaptive Cards schema v1.5 in Adaptive Cards Extensions

Adaptive Cards Extensions now support Adaptive Cards schema v1.5. For more information about the supported features in v1.5, see [Adaptive Cards schema v1.5](https://adaptivecards.io/explorer/AdaptiveCard.html) for more details.

### Support for Microsoft Teams Manifest v1.16 in Sync to Teams

*"Sync to Teams"* operation in SharePoint App Catalog now supports Teams Manifest v1.16. Any SPFx solution that is synchronized from app catalog to Microsoft Teams is available automatically across Microsoft 365 (Microsoft Teams, Outlook, Microsoft 365 app).

### Ability to use SPFX_SERVE_TENANT_DOMAIN OS environment variable for serve configurations

Developers can use the `SPFX_SERVE_TENANT_DOMAIN` OS environment variable to specify the tenant domain (or site URL) for serve configurations across different SPFx solutions. If a URL in the serve configuration (for example, `pageUrl` for Field Customizer) contains the `{tenantDomain}` placeholder, it will be automatically replaced with the variable's value.

### Top Actions-specific types

In previous versions, web part Top Actions' configuration was based on proxied property pane types. It led to some issues and confusion as not all the properties worked or were supported.

This version includes specific Top Actions-specific types to avoid confusion and make the configuration more clear.

See more details from documentation

- [Adding support for Top Actions for web parts](web-parts/guidance/getting-started-with-top-actions.md)

### onBeforeAction handler for Adaptive Card Extensions

The `onBeforeAction` handler is added to `BaseAdaptiveCardExtension` class to allow developers to run custom code before the action is executed.

```typescript
  /** @virtual */
  onBeforeAction(action: IOnBeforeActionArguments): void;
```

> [!NOTE]
> This method is not intended to be used to cancel the action or to change the flow. We do not recommend changing the state or the action argument.

### Ability to specify initial focus element in an Adaptive Card Extension Quick View

New `focusParameters` virtual property allows to set focus when the view is rendered for accessibility purposes. If not overridden, the focus element defaulted to the first actionable element of the Quick View.

```typescript
  /** @virtual */
  get focusParameters(): IFocusParameters | undefined;
```

See more details from documentation

- [Focus feature in Adaptive Card Extension](viva/features/focus-feature/FocusFeatureDocumentation.md)
- [Create an Adaptive Card Extension with the focus feature](viva/features/focus-feature/FocusFeatureTutorial.md)

### Support for SharePoint Pages 'iframing' in Teams applications

Developers can specify `supportsSelfFramingInTeams` flag in a web part's manifest if the scenario requires the web part to render SharePoint page in an `<iframe>`.

### Ability to specify claims parameter when requesting an Azure Active Directory OAuth2 token

`AADTokenProvider.getToken` definition was updated to allow specifying claims parameter:

```typescript
getToken(resourceEndpoint: string, options?: IGetTokenOptions): Promise<string>;
```

Where `IGetTokenOptions`:

```typescript
interface IGetTokenOptions {
  useCachedToken?: boolean;
  claims?: string;
}
```

### Popup flow support in AadTokenProvider

`AadTokenProvider` now supports popup flow. Developers should handle `AadTokenProvider.popupEvent: SPEvent<PopupEventArgs>` event to implement the flow.

For more details, see `PopupEventArgs` definitions in the API reference documentation.

For more information on implementing the popup flow, see [Working with the AADTokenProvider](use-aadtokenprovider.md).

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

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

### February-March Timeframe

- [#8705](https://github.com/SharePoint/sp-dev-docs/issues/8705) - Live Share SDK doesn't work in SPFx web part

### December-February Time Frame

- [#8623](https://github.com/SharePoint/sp-dev-docs/issues/8623) - 1.16.1 Issue: Cannot find manifest for f9e737b7-f0df-4597-ba8c-3060f82380db_1.16.1. Store had [1.16.0]. Service worker version: (none),DurableN1=true
- [#6091](https://github.com/SharePoint/sp-dev-docs/issues/6091) - Lazy loading of custom web parts in modern pages
- [#8559](https://github.com/SharePoint/sp-dev-docs/issues/8559) - ListView Command Set command is not displayed for a list that was placed on a modern page and only 1 item is select there
- [#8683](https://github.com/SharePoint/sp-dev-docs/issues/8683) - Permission Error with Form Customizer for new form
- [#8540](https://github.com/SharePoint/sp-dev-docs/issues/8540) - Web part property updates causes child component to remount and lose state
- [#8552](https://github.com/SharePoint/sp-dev-docs/issues/8552) - SPFx Field Customizer - onInit executes multiple times when navigating between folders in same document library
- [#8619](https://github.com/SharePoint/sp-dev-docs/issues/8619) - Vulnerability introduced by CVE-2022-37601 in loader-utils package
