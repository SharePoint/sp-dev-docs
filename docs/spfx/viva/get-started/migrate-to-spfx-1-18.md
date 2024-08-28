---
title: Migrate Adaptive Card Extensions to SharePoint Framework v1.18
description: SharePoint Framework v1.18 introduces new base classes and modified approach for building Adaptive Card Extensions (ACEs) for Microsoft Viva Connections. This article explains how to migrate your existing ACEs to the new approach.
ms.date: 09/12/2023
ms.localizationpriority: high
---

# Migrate Adaptive Card Extensions to SharePoint Framework v1.18

SharePoint Framework (SPFx) v1.18 introduces new base classes and a modified approach for building Adaptive Card Extensions (ACEs) for Microsoft Viva Connections.

The changes allow us to switch from "templates"-based to more granular "components"-based Card Views. It enables more flexibility for developers and increases the number of supported Card Views variants, or [permutations](../design/designing-card.md).

This article explains how to migrate your existing ACEs to the new approach.

> [!NOTE]
> All the changes described in this article are backward compatible. You can continue using your existing ACEs without any changes. However, we recommend migrating your ACEs to the new approach to take advantage of the new features and capabilities.

## Migrate Quick Views to the new base class

With SPFx 1.18, we deprecate the `BaseAdaptiveCardView` class and introduce `BaseAdaptiveCardQuickView` as a new base class for all Quick Views.

The new base class provides the same functionality as the old one, so the migration is straightforward.
Update the definition of your Quick View class to inherit from the new base class:

```typescript
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

With SPFx v1.18, we introduce a new base class and configuration model for Card Views. Instead of having a separate base class for each Card View "template", we provide a new single base class `BaseComponentsCardView<TProperties = {}, TState = {}, TParameters extends ComponentsCardViewParameters = ITextCardViewParameters>`.

Instead of specifying `cardButtons` and `data`, you must override the `cardViewParameters` getter to provide both look and data for the Card View.

As part of the `cardViewParameters` property, you can specify the as follows:

- **image**: Image parameters for the Card View.
- **cardBar**: Card bar component for the Card View (title and icon).
- **header**: Header components for the Card View.
- **body**: Body components for the Card View.
- **footer**: Footer components for the Card View.

We also provide helper functions to simplify the creation of the predefined views:

```typescript
function BasicCardView(configuration: IBasicTextCardViewConfiguration): ITextCardViewParameters;
function PrimaryTextCardView(configuration: IPrimaryTextCardViewConfiguration): ITextCardViewParameters;
function ImageCardView(configuration: IImageCardViewConfiguration): ITextCardViewParameters;
```

These helpers can also be used to migrate your existing Card Views to the new model easily.

So, the migration steps are:

- Update the definition of your Card View class to inherit from the new base class:

    ```typescript
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

- Override the `cardViewParameters` getter to provide both look and data for the Card View. You can use one of the helper functions to simplify the migration:

    ```typescript
    import { BaseComponentsCardView, BasicCardView } from '@microsoft/sp-adaptive-card-extension-base';

    // ...
      public get cardViewParameters(): ITextCardViewParameters {
        return BasicCardView({
          // ...
        });
      }
    ```

- Remove the `cardButtons` and `data` properties from your Card View class.

## Examples

Here are examples of `cardViewParameters` getters for the default scaffolded Basic, Primary Text, and Image Card Views.

### Basic Card View

`cardButtons` and `data` properties for the scaffolded Basic Card View look like this:

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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
