---
title: SharePoint Framework v1.15.2 release notes
description: Release notes for the SharePoint Framework v1.15.2 release
ms.date: 06/27/2022
ms.localizationpriority: high
---
# SharePoint Framework v1.15.2 release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams and SharePoint.

**Released:** August 2, 2022

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest released version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
```

## Upgrading projects from v1.15.0 to v1.15.2

In the project's **package.json** file, identify all SPFx v1.15.0 packages. For each SPFx package:

1. Uninstall the existing v1.15 package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.15.0
    ```

1. Install the new v1.15.2 package:

    ```console
    npm install @microsoft/{spfx-package-name}@latest --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Enable Service Principal Registration at Permission Scope Approval Time

When a SPFx solution requires access to APIs, we allow administrators to pre-approve those permission scopes for the whole tenant in the "API Access" page in Tenant Admin.

Previously it was assumed and required that API to be already present in the tenant (either via an app principal or Service Principal in case of multi-tenant APIs) and, if that's not the case, there was an error during the permissions scope approval.

Now developers are able to specify **optional** attributes `appId` and `replyUrl` in `webApiPermissionRequests` section of `package-solution.json`.

When these attributes are present, administrators are presented standard Azure AD app registration consent as part of the API approval process.

For more information on this feature, see: [Requesting permissions to Azure AD applications in another tenant](use-aadhttpclient.md#requesting-permissions-to-azure-ad-applications-in-another-tenant).

### New Action types for media - General Availability

Media upload action type is now generally available.

* [Media upload in Adaptive Card Extension](viva/get-started/actions/media-upload/MediaUploadDocumentation.md)
* [Tutorial - Create an Adaptive Card Extension with the select media action](viva/get-started/actions/media-upload/MediaUploadTutorial.md)
* [Explore Media Upload capability via property pane of card-designer card in Adaptive Card Extension](viva/get-started/actions/media-upload/MediaUploadPropertyPane.md)

```typescript
ISPFxAdaptiveCard.actions?: (
    | ISubmitAction
    | IOpenUrlAction
    | IShowCardAction
    | IGetLocationAction
    | IShowLocationAction
    | ISelectMediaAction // Raise a file picker or native media picker
)[];
```

The location actions can be configured as shown below:

```json
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

The SelectMedia action can be configured as shown below:

```json
  actions: [
    {
      type: 'VivaAction.SelectMedia',
      id: 'Select File',
      parameters: {mediaType: MediaType.Image, allowMultipleCapture: true, maxSizePerFile : 200000, supportedFileFormats: ['jpg']},
      title: 'Select File'
    }
  ]
```

The action will be rendered as below:

![Select file button](../images/release-notes/114/file-action.jpg)

The Select Media Action can be used to select Images from your native device. In the browser it uses the file picker to help access relevant files:

![Select file panel](../images/release-notes/114/media-panel.jpg)

### Updates to ESLint rules

Based on the received feedback from the ecosystem, we "relaxed" applied ESLint rules to removed forced opinionated coding styles practices. These rules are now also added directly to the `eslintrc.js` file for simpler further modifications in environment level.

### Defer loading Adaptive Card Extension Quick View

When an ACE is loaded on a page we load both the card view and Quick View. However, we don't need load the Quick View until it is interacted with. By defer loading a Quick View, we will gain performance when loading an ACE.

Below is an example to defer load Quick View.

Remove importing Quick View files in your class that extends `BaseAdaptiveCardExtension`.

```typescript
this.quickViewNavigator.register(
  QuickViewID,
  () => import(
    './Path-To-Your-QuickView-File'
  ).then((component) => new component.QuickView())
);
```

`this.quickViewNavigator.register` callback argument now allows to return a `Promise<TView>` or `TView` directly: `() => TView | Promise<TView>`

## Fixed Issues

### June-July Timeframe

- [#7947](https://github.com/SharePoint/sp-dev-docs/issues/7947) - Extensions are loaded on the page even if the app has been deleted from the tenant
- [#8191](https://github.com/SharePoint/sp-dev-docs/issues/8191) - SPFX Teams app blank screen when you open it for second time
- [#8279](https://github.com/SharePoint/sp-dev-docs/issues/8279) - New icons in production environments
- [#8301](https://github.com/SharePoint/sp-dev-docs/issues/8301) - Error When Revisiting Custom Teams ?app=portals App
- [#8199](https://github.com/SharePoint/sp-dev-docs/issues/8199) - `dataVersion` defined in manifest is not respected when adding a WebPart in a page
- [#8272](https://github.com/SharePoint/sp-dev-docs/issues/8272) - SPFx 1.15 - Getting error when use form customiser to view existing list item in Classic mode
- [#8266](https://github.com/SharePoint/sp-dev-docs/issues/8266) - SPFx 1.15 - Form Customiser does not work in View History
- [#8251](https://github.com/SharePoint/sp-dev-docs/issues/8251) - `onDispose` not getting called and webparts persisting between single app pages
- [#5438](https://github.com/SharePoint/sp-dev-docs/issues/5438) - Applying Field Customizer Leads to Empty Cells in Teams Files Tab
- [#8263](https://github.com/SharePoint/sp-dev-docs/issues/8263) - SPFx v1.15 - gulp clean doesn't remove the 'releases' folder
- [#8260](https://github.com/SharePoint/sp-dev-docs/issues/8260) - SPFx v1.15 - Please suppress unnecessary ESLint no-async-await rule
- [#8268](https://github.com/SharePoint/sp-dev-docs/issues/8268) - 1.15 asset files not found in subdirectories
- [#8236](https://github.com/SharePoint/sp-dev-docs/issues/8236) - SPFx 1.15 - ESLint - version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree
- [#7999](https://github.com/SharePoint/sp-dev-docs/issues/7999) - Vulnerability alerts introduced by node-fetch package
- [#8314](https://github.com/SharePoint/sp-dev-docs/issues/8314) - SPFx v1.15 Form customizer React template contains incorrect reference
- [#8309](https://github.com/SharePoint/sp-dev-docs/issues/8309) - Update serve.json's schema to include `serveConfigurations` for IntelliSense
