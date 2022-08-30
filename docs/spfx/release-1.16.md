---
title: SharePoint Framework v1.16 preview release notes
description: Release notes for the SharePoint Framework v1.16 preview release
ms.date: 08/30/2022
ms.localizationpriority: high
---
# SharePoint Framework v1.16 release notes

This release introduces updates across the features around Microsoft Viva, Microsoft Teams and SharePoint.

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

- beta.0 **Released:** August 30, 2022

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

We're rolling our support for teams-js v2. `this.context.sdks.microsoftTeams.teamsJs` will return v2 as soon as service code is rolled out to the tenant. `this.context.sdks.microsoftTeams.context` will still retur v1 context for backward compatibility.

> [!NOTE]
> teams-js v2 is backward compatible with teams-js v1. We will continue to support v1 for existing solutions.
> We will add support for teams-js v2 context in later beta releases.

> [!TIP]
> Teams JavaScript SDK v2 enables new scenarios for developers. See following announcement for additional details on the Teams JS SDK v2 capabilities - [Microsoft Teams JS SDK v2 is now generally available](https://devblogs.microsoft.com/microsoft365dev/microsoft-teams-js-sdk-v2-is-now-generally-available/)

### Remove NodeJS 12 and 14 support

Starting with 1.16.0-beta.0, we're removing support for NodeJS 12 and 14. We will continue to support NodeJS 16.

## Deprecations

None for now.

## Fixed Issues

### August Timeframe

- [#8146](https://github.com/SharePoint/sp-dev-docs/issues/8146) - SPFX Application Customizer breaks Anonymous Links for PDF Files
- [#8266](https://github.com/SharePoint/sp-dev-docs/issues/8266) - SPFx 1.15 - Form Customiser does not work in View History
- [#8272](https://github.com/SharePoint/sp-dev-docs/issues/8272) - SPFx 1.15 - Getting error when use form customiser to view existing list item in Classic mode
- [#8279](https://github.com/SharePoint/sp-dev-docs/issues/8279) - New icons in production environments
- [#8301](https://github.com/SharePoint/sp-dev-docs/issues/8301) - Error When Revisiting Custom Teams ?app=portals App