---
title: Advanced Card View Functionality
description: "This tutorial builds off the tutorial 'Build your first SharePoint Adaptive Card Extension'."
ms.date: 07/22/2021
ms.prod: sharepoint
localization_priority: Priority
---
# Advanced Card View Functionality

This tutorial builds off the following tutorial: [Build your first SharePoint Adaptive Card Extension](build-first-sharepoint-adaptive-card-extension.md)

[!INCLUDE [spfx-release-beta](../../includes/snippets/spfx-release-beta.md)]

In this tutorial, you'll implement advanced card view functionality.

## Create a test list

Prepare this tutorial by creating a new list in a SharePoint site with some sample data:

1. Browse to your home site and create a new list named **Instruction List**.
1. Add a **Single line of text** column named **Description**.

    :::image type="content" source="../../../images/viva-extensibility/lab2-empty-list.png" alt-text="Empty SharePoint list":::

1. Add a few items to the list:
    - **Title**: Step 1, **Description**: Use ACEs
    - **Title**: Step 2, **Description**: ???
    - **Title**: Step 3, **Description**: SPFx 🚀 🌝
1. Get the list's ID:

    1. While viewing the list, select the *gear* icon in the suite bar to open the **Settings** menu. Then select the **List settings** menu item:

        :::image type="content" source="../../../images/viva-extensibility/lab2-list-settings.png" alt-text="List settings screen":::

    1. On the **List Settings** page, locate the list's ID in the URL:

        :::image type="content" source="../../../images/viva-extensibility/lab2-list-id.png" alt-text="List ID in the URL":::

    1. Save the list's ID so you can use it in the next step.

## Step 1: Add ACE functionality

Start with the HelloWorld ACE from the previous tutorial, [Build your first SharePoint Adaptive Card Extension](build-first-sharepoint-adaptive-card-extension.md). Make the following updates in preparation for Step 2.

### Change properties

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Update the interface used to define the type of the ACE's `properties` property:

```typescript
export interface IHelloWorldAdaptiveCardExtensionProps {
  title: string;
  description: string;
  iconProperty: string;
  listId: string;
}
```

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.manifest.json**.

Initialize the ACE with the ID of the List created in the previous step by setting the following `preConfiguredEntries`:

```json
  "preconfiguredEntries": [{
    // ...
    "properties": {
      "title": "HelloWorld",
      "description": "HelloWorld description",
      "iconProperty": "", // Default to sharepointlogo
      "listId": ""
    }
  }]
```

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldPropertyPane.ts**.

Update the Property Pane by adding the following field:

```typescript
PropertyPaneTextField('listId', {
  label: 'List ID'
})
```

### Change the ACE's state

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Add a new interface for the List data by adding the following code to the file:

```typescript
export interface IListItem {
  title: string;
  description: string;
}
```

Update the interface used to define the ACE's state to use the new **IListItem** interface:

```typescript
export interface IHelloWorldAdaptiveCardExtensionState {
  currentIndex: number;
  items: IListItem[];
}
```

Update the `state` initialization by updating the `onInit()` method in the ACE:

```typescript
public onInit(): Promise<void> {
  this.state = {
    currentIndex: 0,
    items: []
  };
  // ...
}
```

Temporarily remove where the `state` is referenced in the ACE and Views by updating the `onPropertyPaneFieldChanged()` method:

```typescript
// tslint:disable-next-line: no-any
protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
}
```

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**.

Update the `data()` and `onAction()` methods to the following:

```typescript
public get data(): IQuickViewData {
  return {
    subTitle: '',
    title: strings.Title
  };
}

public onAction(action: IActionArguments): void {
}
```

### Add dependency

Locate and open the following file in the project: **./package.json**. Take note of the beta version of the SPFx related beta packages used by the other packages listed as dependencies in the `dependencies` section of the **package.json** file.

Install the following NPM package in your project: **@microsoft/sp-http**.

> [!IMPORTANT]
> Make sure you install the same version this package that matches the beta version of the other packages in this project.
>
> For example, if the other SPFx packages listed are version **1.13.0-beta.11**, make sure you install the same version of the **@microsoft/sp-http** package by replacing the `N` in the following comment with `11`.

```console
npm install @microsoft/sp-http@1.13.0-beta.N
```

### Fetch the list data

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Request the list data using the SPFx **SPHttpClient** API. Add the following to the class that implements the ACE:

```typescript
import { SPHttpClient } from '@microsoft/sp-http';

..

private _fetchData(): Promise<void> {
  if (this.properties.listId) {
    return this.context.spHttpClient.get(
      `${this.context.pageContext.web.absoluteUrl}` +
        `/_api/web/lists/GetById(id='${this.properties.listId}')/items`,
      SPHttpClient.configurations.v1
    )
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.value.map(
        (item) => { return { title: item.Title, description: item.Description }; })
        )
      .then((items) => this.setState({ items }));
  }

  return Promise.resolve();
}
```

Update the ACE to request the list data during when it's initialized by updating the `onInit()` method:

```typescript
public onInit(): Promise<void> {
  // ...
  return this._fetchData();
}
```

Update the ACE to request the list data when the Property Pane is updated. Add the following method to the class that implements the ACE. This code will only request the data when the list's ID is changed in the Property Pane:

```typescript
protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
  if (propertyPath === 'listId' && newValue !== oldValue) {
    if (newValue) {
      this._fetchData();
    } else {
      this.setState({ items: [] });
    }
  }
}
```

## Step 2 - Card updates

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.

Update the `data()` getter to display data from the list:

```typescript
public get data(): IPrimaryTextCardParameters {
  const { title, description } = this.state.items[this.state.currentIndex];
  return {
    description,
    primaryText: title
  };
}
```

Now you can test the ACE. Build and launch the ACE in the hosted workbench.

```console
gulp serve -l --nobrowser
```

Once the local webserver has loaded, navigate to the hosted workbench: `https://{tenant}.sharepoint.com/_layouts/15/workbench.aspx`

> [!NOTE]
> Remove any old instance of the ACE from your workbench. ACE instances from [the previous tutorial](build-first-sharepoint-adaptive-card-extension.md) will show an error message since the ACE properties have been updated.

Open the Toolbox and select your ACE:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-1.png" alt-text="Select the ACE from the Toolbox":::

## Step 3 - Conditional card views

By default, Views are automatically responsive to the Card size. However, ACEs can optionally provide different Views for any given Card size.

Change the HelloWorld ACE to display the total count of List items in the **Medium** Card size, and display the List items in the **Large** Card size to maximize the use of available space.

### Medium card view

Create a new file **MediumCardView.ts** in the **./src/adaptiveCardExtensions/helloWorld/cardView** folder.

Add the following code to create a new **Medium** sized card view:

```typescript
import {
  BaseBasicCardView,
  IActionArguments,
  IBasicCardParameters,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import {
  IListItem, QUICK_VIEW_REGISTRY_ID,
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState
} from '../HelloWorldAdaptiveCardExtension';

// Extend from BaseBasicCardView
export class MediumCardView extends BaseBasicCardView<IHelloWorldAdaptiveCardExtensionProps, IHelloWorldAdaptiveCardExtensionState> {
  // Use the Card button to open the Quick View
  public get cardButtons(): [ICardButton] {
    return [
      {
        title: 'View All',
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  // Display the total number of steps
  public get data(): IBasicCardParameters {
    return {
      primaryText: `${this.state.items.length} Steps`
    };
  }
}
```

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Now, register the new View by making the following changes to your ACE:

```typescript
import { MediumCardView } from './cardView/MediumCardView';

..

const MEDIUM_VIEW_REGISTRY_ID: string = 'HelloWorld_MEDIUM_VIEW';

..

public onInit(): Promise<void> {
  // ...
  this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
  this.cardNavigator.register(MEDIUM_VIEW_REGISTRY_ID, () => new MediumCardView());
  // ...
}
```

Update the `renderCard()` method to return either the **Medium** Card View or the **Large** Card View based on the Card size:

```typescript
protected renderCard(): string | undefined {
  return this.cardSize === 'Medium' ? MEDIUM_VIEW_REGISTRY_ID : CARD_VIEW_REGISTRY_ID;
}
```

Reload the workbench.

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-2.png" alt-text="Updated ACE rendering different sizes of the ACE":::

> [!WARNING]
> There's a known bug where the `renderCard()` method is not being called again when the Card size is changed. We will fix this. The workaround is to change the Card size and refresh.

Change the Card size to **Large** and refresh the browser:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-3.png" alt-text="ACE card rendering the Large card":::

## Step 4 - Large Card interactivity

ACE Card views support user interaction. The buttons can invoke REST APIs or be used to interact with the Card in other ways. In this section, you'll change the Large Card view to iterate through the items in the SharePoint list.

### Add previous and next navigational buttons

Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.

The buttons on the Card view can be dynamic based on the current state of the ACE. Add the following code to your ACE's **CardView.ts** file:

```typescript
public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] {
  const buttons: ICardButton[] = [];

  // Hide the Previous button if at Step 1
  if (this.state.currentIndex > 0) {
    buttons.push({
      title: 'Previous',
      action: {
        type: 'Submit',
        parameters: {
          id: 'previous',
          op: -1 // Decrement the index
        }
      }
    });
  }

  // Hide the Next button if at the end
  if (this.state.currentIndex < this.state.items.length - 1) {
    buttons.push({
      title: 'Next',
      action: {
        type: 'Submit',
        parameters: {
          id: 'next',
          op: 1 // Increment the index
        }
      }
    });
  }

  return buttons as [ICardButton] | [ICardButton, ICardButton];
}
```

Next, update the `state` when a button is selected by implementing the following method:

```typescript
public onAction(action: IActionArguments): void {
  if (action.type === 'Submit') {
    const { id, op } = action.data;
    switch (id) {
      case 'previous':
      case 'next':
      this.setState({ currentIndex: this.state.currentIndex + op });
      break;
    }
  }
}
```

Test your changes by reloading the workbench in your browser.

The first instance of the card will show the first list item with a **Next** button:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-4.png" alt-text="First view of the card with the Next button":::

Select the **Next** button. The card will display the next item in the list and add a **Previous**  button:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-5.png" alt-text="Card displaying a SharePoint list item that's neither the first or last item in the list":::

Select the **Next** button until you get to the last item in the list. The card will display the item in the list and only display the**Previous**  button:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-6.png" alt-text="Card displaying the last item in the list with only a Previous button":::

## Conclusion

After this lab you should be familiar with:

- Changing the default `properties` of an ACE
- Changing the ACE `properties`/`state` interfaces
- Creating and registering Card views
- Conditionally rendering Card view elements
- Advanced Card view manipulation
