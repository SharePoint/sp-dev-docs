---
title: SharePoint Framework v1.16 release notes
description: Release notes for the SharePoint Framework v1.16 release
ms.date: 4/19/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.16 release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams, Outlook, Office and SharePoint.

**Released:** November 15, 2022

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the latest version

Install the latest release of the SharePoint Framework (SPFx) by including the **@latest** tag:

```console
npm install @microsoft/generator-sharepoint@latest --global
``` 

## Upgrading projects from v1.15.2 to v1.16

1. In the project's **package.json** file, identify all SPFx v1.15.2 packages. For each SPFx package:
    1. Uninstall the existing v1.15.2 package:

        ```console
        npm uninstall @microsoft/{spfx-package-name}@1.15.2
        ```

    2. Install the new v1.16 package:

        ```console
        npm install @microsoft/{spfx-package-name}@latest --save --save-exact
        ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

### Publish Teams solutions build with SPFx to Outlook and Office

As this SPFx version supports the Teams JavaScript SDK v2, you can now start building experiences also for Outlook and for Office.com (Microsoft 365 app) with SharePoint Framework (SPFx). This will enable the same solution to be exposed within Microsoft, Outlook, Office.com and in SharePoint without specific code changes.

You can use the Teams JavaScript SDK v2 to detect the host of the solution as shown on the following code. If the `this.context.sdks.microsoftTeams` is empty, then code is executed in the SharePoint.

```typescript
// if running in Microsoft Teams, Outlook, or Office...
if (!!this.context.sdks.microsoftTeams) {
  const teamsContext = await this.context.sdks.microsoftTeams.teamsJs.app.getContext();
  switch (teamsContext.app.host.name.toLowerCase()) {
    case 'teams':
      // RUNNING IN MICROSOFT TEAMS
    case 'office':
      // RUNNING IN OFFICE / OFFICE.COM
    case 'outlook':
      // RUNNING IN OUTLOOK
    default:
      throw new Error('Unknown host');
  }
} else {
  // RUNNING IN SHAREPOINT
}
```

See more details around these options from following article

* [Extend Outlook and Office with the SharePoint Framework](office/overview.md)

> [!Important]
> Using the Teams SDK v2 within the SharePoint Framework solutions is generally available starting from the 1.16 version, enabling usage of the Teams SDK v2 immediately.
> Support for publishing Teams apps (including SPFx solutions) within the Outlook and in Office.com (Microsoft 365 app) is however still in preview and is planned to be generally available for both mobile and desktop experiences within the first half of calendar year 2023.

### Teams JavaScript SDK v2 support

This version supports the teams-js v2. `this.context.sdks.microsoftTeams.teamsJs` will return version 2 of the SDK. `this.context.sdks.microsoftTeams.context` will still return v1 context for backward compatibility.

> [!NOTE]
> teams-js v2 is backward compatible with teams-js v1. We will continue to support v1 for existing solutions.

> [!TIP]
> Teams JavaScript SDK v2 enables new scenarios for developers. See following announcement for additional details on the Teams JS SDK v2 capabilities - [Microsoft Teams JS SDK v2 is now generally available](https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-js-sdk-v2-is-now-generally-available/)

### teams-js v2 typings support

Starting with this version the `context.sdks.microsoftTeams.teamJs` property in the web part has type of teams-js SDK v2. This enables usage of the new features of the teams-js SDK v2, including new hosts: Outlook and Office 365 app (previously called office.com).

> [!NOTE]
> `context.sdks.microsoftTeams.context` property is marked as deprecated. It returns v1 context instead v2. Use `context.sdks.microsoftTeams.teamJs.app.getContext` instead.

### React 17 support

SPFx now supports React 17 by default (scaffolded as part of the solution).

### Ability to set dataVersion in web part's manifest

Set a data version for this preconfigured entry. This is optional and can be used in cases where the SPPKG is updated independently from code (e.g. hosted on a CDN). Web Parts can read this value for backwards compatibility with out of date default properties.

### General availability of Search Query extensions

Search Query extensions moved to the General Availability status with this version and can be used in the production.

* [Modifying Microsoft Search experience using SharePoint Framework extensions](building-search-extensions.md)

### Ability to use tasks and middleware in Microsoft Graph v3

Starting this version, developers can install `@microsoft/microsoft-graph-client` to reference tasks or middlewares from the SDK, for example, `LargeFileUploadTask`. SPFx will automatically externalize the dependency and load it from the CDN.

> [!NOTE]
> See [Ability to check supported versions](#ability-to-check-supported-versions-of-ms-graph-and-teams-sdk) to check what version of MS Graph SDK to install.

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

### Remove NodeJS v12 and v14 support

Node.js v12 & v14 are no longer supported. SPFx v1.16 requires Node.js v16.

> [!NOTE]
> Node.js v18 support is scheduled for the first half of the 2023 calendar year.

## Preview Features and Capabilities

Following features are still in preview status as part of the 1.16 release and should not be used in production. We are looking into releasing them officially as part of the upcoming 1.17 release.

### Web part Top Actions

Top Actions allow developers to add custom actions to web part's command bar. The feature is similar to property pane controls, but based on cleaner UI approach.

> [!NOTE]
> Top Actions is released as a preview version as part of the 1.16 release.

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

See more details on the code level guidance from the following article

* [Adding support for Top Actions](web-parts/guidance/getting-started-with-top-actions.md)


## Deprecations

- Deprecated @microsoft/office-ui-fabric-react-bundle package. Use @fluentui/react instead.
- Deprecated context.sdks.microsoftTeams.context. Use context.sdks.microsoftTeams.teamJs.app.getContext instead.

## Fixed Issues

Here's a list of specific issues fixed around SharePoint Framework since the previous public release.

### August-November Timeframe

- [#8146](https://github.com/SharePoint/sp-dev-docs/issues/8146) - SPFX Application Customizer breaks Anonymous Links for PDF Files
- [#8266](https://github.com/SharePoint/sp-dev-docs/issues/8266) - SPFx 1.15 - Form Customiser does not work in View History
- [#8272](https://github.com/SharePoint/sp-dev-docs/issues/8272) - SPFx 1.15 - Getting error when use form customier to view existing list item in Classic mode
- [#8279](https://github.com/SharePoint/sp-dev-docs/issues/8279) - New icons in production environments
- [#8301](https://github.com/SharePoint/sp-dev-docs/issues/8301) - Error When Revisiting Custom Teams ?app=portals App
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
