---
title: Migrate Adaptive Card Extensions to SharePoint Framework 1.18
description: SharePoint Framework 1.18 introduces new base classes and modified approach for building Adaptive Card Extensions (ACEs) for Microsoft Viva Connections. This article explains how to migrate your existing ACEs to the new approach.
ms.date: 06/20/2023
ms.localizationpriority: high
---

# Migrate Adaptive Card Extensions to SharePoint Framework 1.18
SharePoint Framework 1.18 introduces new base classes and modified approach for building Adaptive Card Extensions (ACEs) for Microsoft Viva Connections.
The changes allow to switch from "templates"-based to more granular "components"-based card views. It allows to provide more flexibility to developers as well as increase amount of supported card views variants, or [permutations](./permutations).
This article explains how to migrate your existing ACEs to the new approach.

> [!NOTE]
> All the changes described in this article are backward compatible. You can continue using your existing ACEs without any changes. However, we recommend to migrate your ACEs to the new approach to take advantage of the new features and capabilities.

## Migrate Quick Views to new base class
With SPFx 1.18 we deprecate `BaseAdaptiveCardView` class and introduce `BaseAdaptiveCardQuickView` as a new base class for all quick views.
The new base class provides the same functionality as the old one, so the migration is pretty straightforward.
Update the definition of your quick view class to inherit from the new base class:

```ts
import { BaseAdaptiveCardQuickView } from '@microsoft/sp-adaptive-card-extension-base';
// ...
export class QuickView extends BaseAdaptiveCardQuickView<
  ISlashNAdaptiveCardExtensionProps,
  ISlashNAdaptiveCardExtensionState,
  IQuickViewData
> {
  // ...
```

## Migrate Card Views to new base class and configuration model
With SPFx 1.18 we introduce new base class and configuration model for card views. Instead of having a separate base class for each card view "template" we introduce a new single base class `BaseComponentsCardView<TProperties = {}, TState = {}, TParameters extends ComponentsCardViewParameters = ITextCardViewParameters>`.
With the new model instead of specifying `cardButtons` and `data` you must override `cardViewParameters` getter to provide both look and data for the card view.

As part of the `cardViewParameters` property, you can specify the following:
- **image**: Image parameters for the card view.
- **cardBar**: Card bar component for the card view (title and icon).
- **header**: Header components for the card view.
- **body**: Body components for the card view.
- **footer**: Footer components for the card view.

We also provide helper function to simplify the creation of the predefined views:
``ts
function BasicCardView(configuration: IBasicTextCardViewConfiguration): ITextCardViewParameters;
function PrimaryTextCardView(configuration: IPrimaryTextCardViewConfiguration): ITextCardViewParameters;
function ImageCardView(configuration: IImageCardViewConfiguration): ITextCardViewParameters;
``

These helpers can be also used to easily migrate your existing card views to the new model.

So, the migration steps are:
1. Update the definition of your card view class to inherit from the new base class:

```ts
import { BaseComponentsCardView } from '@microsoft/sp-adaptive-card-extension-base';
// ...
export class CardView extends BaseComponentsCardView<
  ISlashNAdaptiveCardExtensionProps,
  ISlashNAdaptiveCardExtensionState,
  ITextCardViewParameters
  > {
    // ...
  }
```

1. Override `cardViewParameters` getter to provide both look and data for the card view. You can use one of the helper functions to simplify the migration:


```ts
import { BaseComponentsCardView, BasicCardView } from '@microsoft/sp-adaptive-card-extension-base';

// ...
  public get cardViewParameters(): ITextCardViewParameters {
    return BasicCardView({
      // ...
    });
  }
```
1. Remove `cardButtons` and `data` properties from your card view class.

## Examples
Below are the examples of `cardViewParameters` getters for the default scaffolded Basic, Primary Text and Image Card Views.

### Basic Card View
`cardButtons` and `data` properties for the scaffolded Basic Card View look like this:
```ts
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IBasicCardParameters {
    return {
      primaryText: strings.PrimaryText,
      title: this.properties.title
    };
  }
```

The same configuration using `cardViewParameters`:
```ts
  public get cardViewParameters(): ITextCardViewParameters {
    return BasicCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      header: {
        componentName: 'text',
        text: strings.PrimaryText
      },
      footer: {
        componentName: 'cardButton',
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    });
  }
```

### Primary Text Card View
`cardButtons` and `data` properties for the scaffolded Primary Text Card View look like this:
```ts
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IPrimaryTextCardParameters {
    return {
      primaryText: strings.PrimaryText,
      description: strings.Description,
      title: this.properties.title
    };
  }
```

The same configuration using `cardViewParameters`:
```ts
  public get cardViewParameters(): ITextCardViewParameters {
    return PrimaryTextCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      header: {
        componentName: 'text',
        text: strings.PrimaryText
      },
      body: {
        componentName: 'text',
        text: strings.Description
      },
      footer: {
        componentName: 'cardButton',
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    });
  }
```

### Image Card View
`cardButtons` and `data` properties for the scaffolded Image Card View look like this:
```ts
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IImageCardParameters {
    return {
      primaryText: strings.PrimaryText,
      imageUrl: require('../assets/MicrosoftLogo.png'),
      title: this.properties.title
    };
  }
```

The same configuration using `cardViewParameters`:
```ts
  public get cardViewParameters(): ITextCardViewParameters {
    return ImageCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      image: {
        url: require('../assets/MicrosoftLogo.png')
      },
      header: {
        componentName: 'text',
        text: strings.PrimaryText
      },
      footer: {
        componentName: 'cardButton',
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    });
  }
```