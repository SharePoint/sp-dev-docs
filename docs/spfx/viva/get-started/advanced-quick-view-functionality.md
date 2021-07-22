---
title: Advanced Quick View Functionality
description: "This tutorial builds off the tutorial 'Advanced Card View Functionality'."
ms.date: 07/19/2021
ms.prod: sharepoint
localization_priority: Priority
---
# Advanced Quick View Functionality

This tutorial builds off the following tutorial: [Advanced Card View Functionality](advanced-quick-view-functionality.md).

[!INCLUDE [spfx-release-beta](../../../../includes/snippets/spfx-release-beta.md)]

Start with the HelloWorld ACE from the previous tutorial, [Advanced Card View Functionality](advanced-quick-view-functionality.md). The HelloWorld ACE displays either the count of total steps or one individual step at a time. Using the Quick view, the ACE can show a list of all the steps. Additionally, the ACE can show more details about a particular step if it's selected.

## Step 1 - Show all items in Quick view

Locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**.

Update the code in the **QuickView.ts** file with the following changes:

```typescript
import { IListItem } from '../HelloWorldAdaptiveCardExtension';

..

export interface IQuickViewData {
  items: IListItem[];
}

..

public get data(): IQuickViewData {
  return {
    items: this.state.items
  };
}
```

Next, update the Quick view `template()` getter method to the following:

```typescript
public get template(): ISPFxAdaptiveCard {
  return {
    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
    type: 'AdaptiveCard',
    version: '1.2',
    body: [
      {
        type: 'Container',
        $data: '${items}', // Bind each item to a template in `items`
        selectAction: { // Action to handle an item click
          type: 'Action.Submit',
          data: {
            /*
             * Define `id` inside of `data` since each item will
             * have the same `selectAction` and the `selectAction.id`
             * property has to be unique between all items.
             */
            id: 'selectAction',
            newIndex: '${$index}',
          }
        },
        separator: true,
        items: [ // The template for an item in `items`
          {
            type: 'TextBlock',
            text: '${title}',
            color: 'dark',
            weight: 'Bolder',
            size: 'large',
            wrap: true,
            maxLines: 1,
            spacing: 'None'
          },
          {
            type: 'TextBlock',
            text: '${description}',
            color: 'dark',
            wrap: true,
            size: 'medium',
            maxLines: 1,
            spacing: 'None'
          }
        ]
      }
    ]
  };
}
```

Build and launch the ACE in the hosted workbench.

```console
gulp serve -l --nobrowser
```

Once the local webserver has loaded, navigate to the hosted workbench: `https://{tenant}.sharepoint.com/_layouts/15/workbench.aspx`

Open the Toolbox and select your ACE. Select the Card to open the Quick view:

:::image type="content" source="../../../images/viva-extensibility/lab3-ace-1.png" alt-text="Rendered quick view":::

Since the `onAction()` handler has not been changed to handle the item click, selecting on an item does nothing. You'll address this in the next step.

## Step 2 - Create a new quick view

Create a new file **DetailedQuickView.ts** in the following location: **./src/adaptiveCardExtensions/helloWorld/quickView**

Add the following code to the **DetailedQuickView.ts** file:

```typescript
import { BaseAdaptiveCardView, IActionArguments, ISPFxAdaptiveCard } from '@microsoft/sp-adaptive-card-extension-base';
import { IHelloWorldAdaptiveCardExtensionProps, IHelloWorldAdaptiveCardExtensionState } from '../HelloWorldAdaptiveCardExtension';

export interface IDetailedViewData {
  title: string;
  description: string;
  details: string;
}

export class DetailedView extends BaseAdaptiveCardView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  IDetailedViewData
> {
  public get data(): IDetailedViewData {
    const { description, title } = this.state.items[this.state.currentIndex];
    return {
      description,
      title,
      details: 'More details'
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return {
      $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
      type: 'AdaptiveCard',
      version: '1.2',
      body: [
        {
          type: 'ColumnSet',
          columns: [
            {
              type: 'Column',
              items: [
                {
                  type: 'TextBlock',
                  text: '${title}',
                  size: 'ExtraLarge'
                },
                {
                  type: 'TextBlock',
                  text: '${description}',
                  size: 'Medium'
                }
              ]
            },
            {
              type: 'Column',
              style: 'emphasis',
              items: [
                {
                  type: 'TextBlock',
                  text: '${details}',
                  weight: 'Lighter'
                }
              ]
            }
          ]
        },
        {
          type: 'ActionSet',
          actions: [
            {
              type: 'Action.Submit',
              title: 'Back',
              data: {
                id: 'back'
              }
            }
          ]
        }
      ]
    };
  }
}
```

### Register the new Quick view

Locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Modify the code in the **HelloWorldAdaptiveCardExtension.ts** file with the following changes:

```typescript
export const DETAILED_QUICK_VIEW_REGISTRY_ID: string = 'HelloWorld_DETAILED_QUICK_VIEW';

..

public onInit(): Promise<void> {
  // ...
  this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());
  this.quickViewNavigator.register(DETAILED_QUICK_VIEW_REGISTRY_ID, () => new DetailedView());
  // ...
}
```

## Step 3 - `ViewNavigator`

The `this.cardNavigator` and `this.quickViewNavigator` are instances of a **ViewNavigator**. The **ViewNavigator's** capabilities go beyond only registering new Views. The **ViewNavigator** is a state management API for the Card and Quick views. As Views are created, they are automatically pushed onto a View stack. ACEs can use the **ViewNavigator** to manipulate the stack.()

- `ViewNavigator.push()`: Pushes a new View to the top of the View stack.
- `ViewNavigator.replace()`: Replaces the top View with a new View.
- `ViewNavigator.pop()`: If there's more than one View, pops the top View from the View stack.

### Navigate between views

Locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**.

Update the code in the **QuickView.ts** file to handle when an item is selected from the Quick view:

```typescript
import { DETAILED_QUICK_VIEW_REGISTRY_ID } from '../HelloWorldAdaptiveCardExtension';

..

public onAction(action: IActionArguments): void {
  if (action.type === 'Submit') {
    const { id, newIndex } = action.data;
    if (id === 'selectAction') {
      this.quickViewNavigator.push(DETAILED_QUICK_VIEW_REGISTRY_ID, true);
      this.setState({ currentIndex: newIndex});
    }
  }
}
```

Locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/quickView/DetailedQuickView.ts**

Update the code in the **DetailedQuickView.ts** file to Handle when the Detailed Quick view's back button is selected:

```typescript
public onAction(action: IActionArguments): void {
  if (action.type === 'Submit') {
    const { id } = action.data;
    if (id === 'back') {
      this.quickViewNavigator.pop();
    }
  }
}
```

Reload the workbench, select on the Card to open the Quick view, and select on an item in the Quick view.

:::image type="content" source="../../../images/viva-extensibility/lab3-detailed.png" alt-text="Selecting an item in the quick view":::

Try selecting **Back** and selecting another item.

## Step 4 - `onRenderTypeChanged()`

When an ACE transitions from one **RenderType** to another, the `onRenderTypeChanged()` method is invoked with the previous **RenderType**; `this.renderType` is updated at this point. This can be useful for any bookkeeping between the transition.

### Maintain the Card state when opening the Quick view

Locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Update the code in the **HelloWorldAdaptiveCardExtension.ts** file to introduce a private member that keeps track the previous index during a **RenderType** change:

```typescript
import { RenderType } from '@microsoft/sp-adaptive-card-extension-base';
import { DetailedView } from './quickView/DetailedQuickView';

private _cardIndex: number;

..

protected onRenderTypeChanged(oldRenderType: RenderType): void {
  if (oldRenderType === 'QuickView') {
    // Reset to the Card state when the Quick view was opened.
    this.setState({ currentIndex: this._cardIndex });
  } else {
    // The Quick view is opened, save the current index.
    this._cardIndex = this.state.currentIndex;
  }
}
```

Reload the workbench. Try opening and closing the Quick view after clicking on different items. Notice the Card View will remain in the state it was opened.

## Conclusion

After this lab  you should be familiar with:

- Create and register Quick views
- Using the `ViewNavigator` for navigation
- Handle actions from the Quick view
- Use `onRenderTypeChanged()`
- Advanced Quick view manipulation
