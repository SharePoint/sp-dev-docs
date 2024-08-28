---
title: Advanced Card View Functionality
description: "This tutorial builds off the tutorial 'Build your first SharePoint Adaptive Card Extension'."
ms.date: 09/12/2023
ms.localizationpriority: high
---
# Advanced Card View Functionality

This tutorial builds off the following tutorial: [Build your first SharePoint Adaptive Card Extension](build-first-sharepoint-adaptive-card-extension.md)

In this tutorial, you'll implement advanced Card View functionality. You'll build off the the previous tutorial and create a Card View that's powered by data in a SharePoint list.

[!INCLUDE [developer-preview-notice](../../../../includes/snippets/developer-preview-notice.md)]

## Create a test list

Prepare this tutorial by creating a new list in a SharePoint site with some sample data:

1. Browse to your site and create a new list named **Instruction List**.
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

## Add ACE functionality

Start with the HelloWorld ACE from the previous tutorial, [Build your first SharePoint Adaptive Card Extension](build-first-sharepoint-adaptive-card-extension.md). Make the following updates in preparation for Step 2.

### Change properties

Let's modify the properties for our ACE and set the list ID that contains the data our ACE will display:

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.
1. Update the interface used to define the type of the ACE's `properties` property:

    ```typescript
    export interface IHelloWorldAdaptiveCardExtensionProps {
      title: string;
      listId: string;
    }
    ```

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.manifest.json**.
1. Initialize the ACE with the ID of the List created in the previous step by setting the following `preConfiguredEntries`:

    ```json
      "preconfiguredEntries": [{
        // ...
        "properties": {
          "title": "HelloWorld",
          "listId": "" // TODO: enter list id
        }
      }]
    ```

    > [!IMPORTANT]
    > Make sure you enter the ID of the list you previously obtained into the `listId` property in the `preconfiguredEntries` code above.

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldPropertyPane.ts**.
1. Update the Property Pane by adding the following field:

    ```typescript
    PropertyPaneTextField('listId', {
      label: 'List ID'
    })
    ```

### Change the extension state

Next, let's update the state of the extension. When the state changes, it will trigger the ACE to rerender. These changes will add a collection of list items to the state as well as the current item displayed, as indicated by the `currentIndex` property you'll add.

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.
1. Add a new interface for the List data by adding the following code to the file:

    ```typescript
    export interface IListItem {
      title: string;
      description: string;
    }
    ```

1. Update the interface used to define the ACE's state to use the new **IListItem** interface:

    ```typescript
    export interface IHelloWorldAdaptiveCardExtensionState {
      currentIndex: number;
      items: IListItem[];
    }
    ```

1. Update the `state` initialization by updating the `onInit()` method in the ACE:

    ```typescript
    public onInit(): Promise<void> {
      this.state = {
        currentIndex: 0,
        items: []
      };
      // ...
    }
    ```

1. Temporarily remove where the `state` is referenced in the ACE and Views by updating the `onPropertyPaneFieldChanged()` method:

    ```typescript
    // tslint:disable-next-line: no-any
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    }
    ```

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**.
1. Update the `data()` and `onAction()` methods to the following:

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

Now that the state has been updated, we can now update our ACE to fetch data from the SharePoint list.

### Add dependency

The next step is to add support to the project and ACE to retrieve items from a SharePoint list. To do this, you'll use the SharePoint Framework (SPFx) API to call the SharePoint REST endpoint.

First, add a dependency to the SPFx package used to submit HTTP requests to REST endpoints:

1. Locate and open the following file in the project: **./package.json**. Take note of the beta version of the SPFx related beta packages used by the other packages listed as dependencies in the `dependencies` section of the **package.json** file.
1. Install the following NPM package in your project: **@microsoft/sp-http**:

    ```console
    npm install @microsoft/sp-http -SE
    ```

### Fetch the list data

Next, add support for calling the SharePoint REST API and adding the retrieved items to the ACE's state. When the state is updated, it will trigger the ACE to rerender.

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.
1. Request the list data using the SPFx **SpHttpClient** API. Add the following to the class that implements the ACE:

    ```typescript
    import { SPHttpClient } from '@microsoft/sp-http';

    ...

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

1. Update the ACE to request the list data during when it's initialized by updating the `onInit()` method.

    Replace the last line `return Promise.resolve();` to be `return this._fetchData();` as follows:

    ```typescript
    public onInit(): Promise<void> {
      // ...
      return this._fetchData();
    }
    ```

1. Update the ACE to request the list data when the Property Pane is updated. Add the following method to the class that implements the ACE. This code will only request the data when the list's ID is changed in the Property Pane:

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

## Card updates

With the ACE updated to fetch items from a SharePoint list, let's update the card to display this data.

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.
1. Update `cardViewParameters` getter to render Primary Text Card View instead of Basic Card View:

    ```typescript
      public get cardViewParameters(): ComponentsCardViewParameters {
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
          text: ''
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

1. Update the `cardViewParameters()` getter to display data from the list:

    ```typescript
    public get cardViewParameters(): ComponentsCardViewParameters {
      const { title, description } = this.state.items[this.state.currentIndex];
      return PrimaryTextCardView({
        // ...
        header: {
          componentName: 'text',
          text: title
        },
        body: {
          componentName: 'text',
          text: description
        },
        // ...
      });
    }
    ```

Now you can test the ACE. Build and launch the ACE in the hosted workbench:

```console
gulp serve
```

Once the local web server has loaded, navigate to the hosted workbench: `https://{tenant}.sharepoint.com/_layouts/15/workbench.aspx`

> [!NOTE]
> Remove any old instance of the ACE from your workbench. ACE instances from [the previous tutorial](build-first-sharepoint-adaptive-card-extension.md) will show an error message since the ACE properties have been updated.

Open the Toolbox and select your ACE:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-1.png" alt-text="Select the ACE from the Toolbox":::

## Conditional Card Views

By default, Views are automatically responsive to the Card size. However, ACEs can optionally provide different Views for any given Card size.

Change the HelloWorld ACE to display the total count of List items in the **Medium** Card size, and display the List items in the **Large** Card size to maximize the use of available space.

### Medium Card View

Let's create a medium Card View for our ACE:

1. Create a new file **./src/adaptiveCardExtensions/helloWorld/cardView/MediumCardView.ts** folder.
1. Add the following code to create a new **Medium** sized Card View:

    ```typescript
    import {
      BaseComponentsCardView,
      ComponentsCardViewParameters,
      BasicCardView
    } from '@microsoft/sp-adaptive-card-extension-base';
    import {
      IHelloWorldAdaptiveCardExtensionProps,
      IHelloWorldAdaptiveCardExtensionState,
      QUICK_VIEW_REGISTRY_ID,
    } from '../HelloWorldAdaptiveCardExtension';

    export class MediumCardView extends BaseComponentsCardView<
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
            text: `3 Steps`, // Display the total number of steps
          },
          footer: {
            componentName: 'cardButton',
            title: 'View All',
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

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.
1. Now, register the new View by making the following changes to your ACE:

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

1. Update the `renderCard()` method to return either the **Medium** Card View or the **Large** Card View based on the Card size:

    ```typescript
    protected renderCard(): string | undefined {
      return this.cardSize === 'Medium' ? MEDIUM_VIEW_REGISTRY_ID : CARD_VIEW_REGISTRY_ID;
    }
    ```

Test your changes by refreshing the workbench:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-2.png" alt-text="Updated ACE rendering different sizes of the ACE":::

Change the Card size to **Large** and refresh the browser:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-3.png" alt-text="ACE card rendering the Large card":::

## Large Card interactivity

ACE Card Views support user interaction. The buttons can invoke REST APIs or be used to interact with the Card in other ways. In this section, you'll change the Large Card View to iterate through the items in the SharePoint list.

1. Locate and open the following file in the project: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.
1. At the top of the file, add `IActionArguments`, `GenericCardViewFooterConfiguration` and `IAdaptiveCardExtensionCardButtonParameters`  as the references to import from the **@microsoft/sp-adaptive-card-extension-base** package:

    ```typescript
    import {
      // ...
      GenericCardViewFooterConfiguration,
      IActionArguments,
      IAdaptiveCardExtensionCardButtonParameters
    } from '@microsoft/sp-adaptive-card-extension-base';
    ```

1. The buttons on the Card View can be dynamic based on the current state of the ACE. Add the following code to your ACE's **CardView.ts** file:

    ```typescript
    public get cardViewParameters(): ComponentsCardViewParameters {
      const { title, description } = this.state.items[this.state.currentIndex];
      let footer: GenericCardViewFooterConfiguration = undefined;

      if (this.state.currentIndex > 0) {
        footer = {
          componentName: 'cardButton',
          title: 'Previous',
          action: {
            type: 'Submit',
            parameters: {
              id: 'previous',
              op: -1 // Decrement the current index
            }
          }
        };
      }
      if (this.state.currentIndex < this.state.items.length - 1) {
        const nextButton: IAdaptiveCardExtensionCardButtonParameters = {
          componentName: 'cardButton',
          title: 'Next',
          action: {
            type: 'Submit',
            parameters: {
              id: 'next',
              op: 1 // Increment the current index
            }
          }
        };

        if (footer) {
          footer = [footer as IAdaptiveCardExtensionCardButtonParameters, nextButton];
        }
        else {
          footer = nextButton;
        }
      }

      return PrimaryTextCardView({
        cardBar: {
          componentName: 'cardBar',
          title: this.properties.title,
          icon: {
            url: this.properties.iconProperty
          }
        },
        header: {
          componentName: 'text',
          text: title
        },
        body: {
          componentName: 'text',
          text: description
        },
        footer: footer
      });
    }
    ```

1. Next, update the `state` when a button is selected by implementing the following method:

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

Select the **Next** button until you get to the last item in the list. The card will display the item in the list and only display the **Previous**  button:

:::image type="content" source="../../../images/viva-extensibility/lab2-ace-6.png" alt-text="Card displaying the last item in the list with only a Previous button":::

## Caching Card View and ACE state

Starting in SPFx v1.14, ACEs have a client-side caching layer that can be configured to store:

1. The latest rendered card.
1. The state of the ACE.

### Rendering from cached Card View

If the latest rendered card is stored, the Dashboard renders this cached card before the ACE is initialized, improving perceived performance.

The settings for this cache can be configured by overriding the following method:

```typescript
protected getCacheSettings(): Partial<ICacheSettings> {
  return {
    isEnabled: true, // can be set to false to disable caching
    expiryTimeInSeconds: 86400, // controls how long until the cached card and state are stale
    cachedCardView: () => new CardView() // function that returns the custom Card View that will be used to generate the cached card
  };
}
```

### Rehydrating from cached ACE state

The subset of the ACE state that is cached can be configured by overriding the following method:

```typescript
protected getCachedState(state: TState): Partial<TState>;
```

The object returned by this method will be serialized and cached. By default, no state is cached. In the next call to `onInit`, the deserialized value will be passed to onInit as part of the `ICachedLoadParameters`

```typescript
public onInit(cachedLoadParameters?: ICachedLoadParameters): Promise<void>;
```

The value can then be used to rehydrate the state of the newly initialized ACE.

## Conclusion

After this lab you should be familiar with:

- Changing the default `properties` of an ACE
- Changing the ACE `properties`/`state` interfaces
- Creating and registering Card Views
- Conditionally rendering Card View elements
- Advanced Card View manipulation
- Caching Card View and ACE state

## See Also

- [Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections](/training/modules/sharepoint-spfx-adaptive-card-extension-card-types)
