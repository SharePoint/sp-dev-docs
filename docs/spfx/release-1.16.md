---
title: SharePoint Framework v1.16 preview release notes
description: Release notes for the SharePoint Framework v1.16 preview release
ms.date: 10/26/2022
ms.localizationpriority: high
---
# SharePoint Framework v1.16 release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams and SharePoint.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- beta.2 **Released:** October 26, 2022
- beta.1 **Released:** August 30, 2022

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest preview version

Install the preview release of the SharePoint Framework (SPFx) by including the **@next** tag:

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.15.2 to v1.16 preview

1. In the project's **package.json** file, identify all SPFx v1.15.2 packages. For each SPFx package:
    1. Uninstall the existing v1.15.2 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.15.2
        ```

    2. Install the new v1.16 preview package:

        ```console
        npm install @microsoft/{spfx-package-name}@next --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### teams-js v2 typings support

Starting with this version the `context.sdks.microsoftTeams.teamJs` property in the web part has type of teams-js SDK v2. This enables usage of the new features of the teams-js SDK v2, including new hosts: Outlook and Office 365 app (previously called office.com).

> [!NOTE]
> `context.sdks.microsoftTeams.context` property is marked as deprecated. It returns v1 context instead v2. Use `context.sdks.microsoftTeams.teamJs.app.getContext` instead.

### React 17 support

SPFx now supports React 17 by default (scaffolded as part of the solution).

### Ability to set dataVersion in web part's manifest

Set a data version for this preconfigured entry. This is optional and can be used in cases where the SPPKG is updated independently from code (e.g. hosted on a CDN). Web Parts can read this value for backwards compatibility with out of date default properties.

### Ability to use tasks and middleware in Microsoft Graph v3

Starting this version, developers can install `@microsoft/microsoft-graph-client` to reference tasks or middlewares from the SDK, for example, `LargeFileUploadTask`. SPFx will automatically externalize the dependency and load it from the CDN.

> [!NOTE]
> See [Ability to check supported versions](#sdk-versions) to check what version of MS Graph SDK to install.

`MSGraphClientFactory` now allows to pass `Options` parameter when initializing the client. It also contains new method `getClientWithMiddleware` to initialize the client with middleware.
Developers can also get the MS Graph client instance using `MSGraphClientV3.client` property. This instance can be used to call MS Graph tasks like large file upload.

### EULA folder has been removed from the modules

The EULA folder has been removed from the modules. The license information is now available [here](https://aka.ms/spfx/license). This change decreased the size of all SPFx modules loaded during scaffolding.

### Ability to check supported versions of MS Graph and Teams SDK

`.yo-rc.json` file now contains `sdksVersions` property. This property contains the list of supported versions of MS Graph and Teams SDK.

### quietDeps parameter for SASS

Now developers are able to set `quietDeps` property in `config\sass.json` to silent deprecation warnings from the dependencies.

### Ability to render ACE asynchronously

Similarly to web parts, the ACE developer can specify if the card extension is rendered asynchronously.

```typescript
/* BaseAdaptiveCardExtension */
protected get isRenderAsync(): boolean {
  return false;
}

public renderCompleted(didUpdate: boolean): void { /* ... */ }
```

### Adaptive Card Extension Image Card View to have `alt` text for Accessibility

Adding a new optional property `imageAltText` for `IImageCardParameters` will add `alt` text attribute to the image html element.

### Web part Top Actions

Top Actions allow developers to add custom actions to web part's command bar. The feature is similar to property pane controls, but based on cleaner UI approach.

![Top Actions](../images/webpart-top-actions.png)

To add top actions, developers can use the `getTopActionsConfiguration` method.

```typescript
BaseWebPart.getTopActionsConfiguration(): ITopActions | undefined;
```

`ITopActions` interface defines the top actions configuration.

```typescript
export type ActionConfiguration = IPropertyPaneField<any>;

export interface ITopActions {
  readonly topActions: ActionConfiguration[];
  onExecute(actionName: string, newValue: any): void;
}
```

> [!NOTE]
> Although type of Top Action Configuration is `IPropertyPaneField<any>` we currently support buttons and choice groups only.
> It means you can use either `PropertyPaneChoiceGroup(...)` and `PropertyPaneButton(...)`, or specify your own configurations that will resolve to `IPropertyPaneField<IPropertyPaneChoiceGroupProps>` and `IPropertyPaneField<IPropertyPaneButtonProps>`


### New Form Customizer context properties

#### List item fields' values

Form Customizer's context for Edit and Display forms now contains the list item fields' values in standard `odata` format.

```typescript
IFormCustomizerContext.item?: IListItem;
```

#### List form JSON formatting configuration

Form Customizer's context provides information about applied list form JSON Formatting. Use `contentType` property to access the configuration.

```typescript
IFormCustomizerContext.contentType.ClientFormCustomFormatter: string | undefined;
```

### Teams JavaScript SDK v2 support

We're rolling our support for teams-js v2. `this.context.sdks.microsoftTeams.teamsJs` will return v2 as soon as service code is rolled out to the tenant. `this.context.sdks.microsoftTeams.context` will still return v1 context for backward compatibility.

> [!NOTE]
> teams-js v2 is backward compatible with teams-js v1. We will continue to support v1 for existing solutions.
> We will add support for teams-js v2 context in later beta releases.

> [!TIP]
> Teams JavaScript SDK v2 enables new scenarios for developers. See following announcement for additional details on the Teams JS SDK v2 capabilities - [Microsoft Teams JS SDK v2 is now generally available](https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-js-sdk-v2-is-now-generally-available/)

### Remove NodeJS 12 and 14 support

Starting with 1.16.0-beta.1, we're removing support for NodeJS 12 and 14. We'll continue to support NodeJS 16.

## Deprecations

None for now.

## Fixed Issues

### September-October Timeframe

- [#8372](https://github.com/SharePoint/sp-dev-docs/issues/8372) - Applying permissions on Form Customizer
- [#8379](https://github.com/SharePoint/sp-dev-docs/issues/8379) - SPFx `ListViewCommandSet` - `this.context.listView.selectedRows` is wrong in grouped lists
- [#8467](https://github.com/SharePoint/sp-dev-docs/issues/8467) - Buttons (`onClick` events) in `BaseDialog` no longer working - ListView Command Set
- [#8483](https://github.com/SharePoint/sp-dev-docs/issues/8483) - Multi-paged Webpart Property Panes - Pagination doesn't work as expected, stopping users from accessing pages
- [#8484](https://github.com/SharePoint/sp-dev-docs/issues/8484) - Web part property pane breaks when using React and office-ui-fabric-react in property pane field label
- [#8482](https://github.com/SharePoint/sp-dev-docs/issues/8482) - React version mismatch causing SPFX list extensions to fail in O365
- [#8487](https://github.com/SharePoint/sp-dev-docs/issues/8487) - SharePoint React 17 Upgrade causing "Invalid Hook call" error in SPFx Webpart
- [#7324](https://github.com/SharePoint/sp-dev-docs/issues/7324) - SPFx license does not permit commercial use
- [#8331](https://github.com/SharePoint/sp-dev-docs/issues/8331) - Mechanism to version the preconfiguredEntries in the manifest
- [#8510](https://github.com/SharePoint/sp-dev-docs/issues/8510) - SPFx sudden Minified React error #321
- [#8496](https://github.com/SharePoint/sp-dev-docs/issues/8496) - React version mismatch causes property pane not displaying

### August Timeframe

- [#8146](https://github.com/SharePoint/sp-dev-docs/issues/8146) - SPFX Application Customizer breaks Anonymous Links for PDF Files
- [#8266](https://github.com/SharePoint/sp-dev-docs/issues/8266) - SPFx 1.15 - Form Customiser does not work in View History
- [#8272](https://github.com/SharePoint/sp-dev-docs/issues/8272) - SPFx 1.15 - Getting error when use form customier to view existing list item in Classic mode
- [#8279](https://github.com/SharePoint/sp-dev-docs/issues/8279) - New icons in production environments
- [#8301](https://github.com/SharePoint/sp-dev-docs/issues/8301) - Error When Revisiting Custom Teams ?app=portals App