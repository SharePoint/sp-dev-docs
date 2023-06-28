---
title: SharePoint Framework v1.18 preview release notes
description: Release notes for the SharePoint Framework v1.18 preview release
ms.date: 06/28/2023
ms.localizationpriority: high
---
# SharePoint Framework v1.18 preview release notes

This release

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

beta.1 **Released**: June 28, 2023

[!INCLUDE [spfx-release-notes-common](../../includes/snippets/spfx-release-notes-common.md)]

## Install the preview latest version

Install the latest preview release of the SharePoint Framework (SPFx) by using the **@next** tag

```console
npm install @microsoft/generator-sharepoint@next --global
```

## Upgrading projects from v1.17 to v1.18

In the project's **package.json** file, identify all SPFx v1.17.x packages. For each SPFx package:

1. Uninstall the existing v1.17.x package:

    ```console
    npm uninstall @microsoft/{spfx-package-name}@1.17.x
    ```

1. Install the new v1.18 package:

    ```console
    npm install @microsoft/{spfx-package-name}@next --save --save-exact
    ```

[!INCLUDE [spfx-release-upgrade-tip](../../includes/snippets/spfx-release-upgrade-tip.md)]

## New features and capabilities

Related updated documentation for the 1.18 preview release

* [Designing Viva Connections custom cards for your dashboard](./viva//design//designing-card.md)
* [Migrate Adaptive Card Extensions to SharePoint Framework 1.18](./viva/get-started/migrate-to-spfx-1-18.md)
* [Tutorial - Create a People Search Adaptive Card Extension](./viva/get-started//build-people-search-adaptive-card-extension.md)

New samples showcasing the new Viva Connections features

* [Start a Chat Text Box input Adaptive Card Extention](https://github.com/pnp/sp-dev-fx-aces/tree/main/samples/InputCard-Start-Chat)
* [Prompt Survey Adaptive Card Extension](https://github.com/pnp/sp-dev-fx-aces/tree/main/samples/InputCard-Prompt-Survey)
* [People Search Adaptive Card Extension](https://github.com/pnp/sp-dev-fx-aces/tree/main/samples/InputCard-PeopleSearch)

Video in YouTube showcasing the new template options for Viva Connections

* [Introducing new Microsoft Viva Connection card layouts in the SharePoint Framework 1.18](https://www.youtube.com/watch?v=S5KCV3ZiAAI)

### Support for Execute Action in Adaptive Card Extensions

Developers can use `Execute` action for both card view and quick view actions.

### BaseComponentsCardView as a new default card view for Adaptive Card Extensions

We introduce new default class for Adaptive Card Extensions card views. With these new class developers can specify a set of components that is rendered in a card view.

For more information on the new designs, see [Designing Viva Connections custom cards for your dashboard](./viva/design/designing-card.md).

```typescript
export abstract class BaseComponentsCardView<TProperties = {}, TState = {}, TParameters extends ComponentsCardViewParameters = ITextCardViewParameters> extends BaseCardView<TProperties, TState> {
    abstract get cardViewParameters(): TParameters;
}
```

Example usage:

```typescript
export class CardView extends BaseComponentsCardView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  ComponentsCardViewParameters
  > {
  public get cardViewParameters(): ComponentsCardViewParameters {

    return BasicCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title,
        icon: {
          url: this.properties.iconProperty
        }
      },
      header: {
        componentName: 'text',
        text: 'Hello world!'
      },
      footer: {
        componentName: 'cardButton',
        title: 'Quick View',
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID,
          },
        },
      },
    });
  }
}
```

### Adaptive Card Extensions flexible card views

With this release, we introduce more flexible way to configure card views for Adaptive Card Extensions. Developers can now "mix and match" components in a card view configuration based on allowed set of [variations](./viva/design/designing-card.md).

Use new **Generic Card Template (preview)** in the generator to get started. Migration guide for existing projects is available [here](./viva/get-started/migrate-to-spfx-1-18.md).

### Ability to use text input in Adaptive Card Extensions' card views

Developers can now use text input component in a body or footer of a card view. For more information on the layout options, see [Designing Viva Connections custom cards for your dashboard](./viva/design/designing-card.md).

> [!NOTE]
> The text input component is fully supported in the browser and in Teams desktop. Full support for Viva Connections mobile will be enabled later.

![Text Input in body](../images/118-release-notes/ace-text-input-body.png)

![Text Input in footer](../images/118-release-notes/ace-text-input-footer.png)

### New Search Card Template for Adaptive Card Extensions

We introduce a new search card view for Adaptive Card Extensions that is intended to be used for search scenarios. Use new **Search Card Template (preview)** in the generator to get started.

> [!NOTE]
> The text input component is fully supported in the browser and in Teams desktop. Full support for Viva Connections mobile will be enabled later.

![Search Card View](../images/118-release-notes/ace-search-box.png)

### Fluent UI React v8 support

Starting this version React templates use Fluent UI React v8 instead of v7.

## Deprecations

- `BaseAdaptiveCardView` - use `BaseAdaptiveCardQuickView` instead
- `template` property in `BaseTemplateCardView` and its descendants

## Fixed Issues

This release didn't include fixes on any reported issues within the [SPFx issue list](https://github.com/SharePoint/sp-dev-docs/issues).

## Feedback and issues

We are interested on your feedback around the release. Please do let us know any findings or other feedback using the [SPFx issue list](https://github.com/SharePoint/sp-dev-docs/issues).

Happy coding! Sharing is caring! 🧡