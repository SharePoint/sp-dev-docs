---
title: Build your first SharePoint Adaptive Card Extension
description: Adaptive Card Extensions (ACEs) are a new SharePoint Framework component type, which enable developers to build rich, native extensions to Viva Connections' Dashboards and SharePoint Pages. In this tutorial, you'll build and explore your first ACE.
ms.date: 10/25/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# Build your first SharePoint Adaptive Card Extension

Adaptive Card Extensions (ACEs) are a new SharePoint Framework component type, which enables developers to build rich, native extensions to Viva Connections' Dashboards and SharePoint Pages. Since Adaptive Card Extensions use Microsoft's Adaptive Card Framework to generate UI with its declarative JSON schema, you only need to focus on your component's business logic and let the SharePoint Framework (SPFx) handle making your component look good and work across all platforms.

> [!IMPORTANT]
> This tutorial assumes you have installed the SPFx v1.13. For more information on installing the SPFx v1.13, see [SharePoint Framework v1.13 release notes](../../release-1.13.md).

## Scaffold an Adaptive Card Extension project

Create a new project directory for your project and change your current folder to that directory.

Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (*select the default option for all prompts omitted below*):

- **Do you want to allow tenant admin the choice of deploying the solution to all sites immediately without running any feature deployment or adding apps in sites?** Yes
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Primary Text Template
- **What is your Adaptive Card Extension name?** HelloWorld
- **What is your Adaptive Card Extension description?** Hello World description

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This process might take few minutes.

### Update your project's hosted workbench URL

When you use the gulp task **serve**, by default it will launch a browser with the specified hosted workbench URL specified in your project. The default URL for the hosted workbench in a new project points to an invalid URL.

- Locate and open the file **./config/serve.json** in your project.
- Locate the property `initialPage`:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json",
      "port": 4321,
      "https": true,
      "initialPage": "https://enter-your-SharePoint-site/_layouts/workbench.aspx"
    }
    ```

- Change the `enter-your-SharePoint-site` domain to the URL of your SharePoint tenant and site you want to use for testing. For example: `https://contoso.sharepoint.com/sites/devsite/_layouts/workbench.aspx`.

> [!TIP]
> You can also start the local web server without launching a browser by including the `nobrowser` argument to the **gulp serve** command. For example, you may not want to modify the **serve.json** file in all your projects and instead, use a bookmark to launch your hosted workbench.
>
> ```console
> gulp serve --nobrowser
> ```

## Serve the ACE in the workbench

Before digging into the code, run the scaffolded output and see what an Adaptive Card Extension looks like.

The inner development loop with ACEs is similar to SPFx Web Parts. We can serve locally and run the code on the workbench.

```console
gulp serve
```

Once local webserver is running, navigate to the hosted Workbench: `https://{tenant}.sharepoint.com/_layouts/15/workbench.aspx`

Open the **Web Part Toolbox** and select your ACE:

:::image type="content" source="../../../images/viva-extensibility/lab1-toolbox.png" alt-text="Select the ACE from the toolbox":::

### Explore the Card View

ACEs can render in two distinct ways. The first way an ACE can render is called the **Card view**.

When rendered on a Dashboard or a Page, ACEs will always start in this view.

:::image type="content" source="../../../images/viva-extensibility/lab1-hw-ace.png" alt-text="ACE rendered in Card View":::

### Explore the Quick View

The second way an ACE can render is called the **Quick View**. When you interact with an ACE, ACEs can launch a larger, customized experience.

> [!NOTE]
> ACE interaction is disabled while in **Edit** mode. The Workbench or Page must be in *Preview* or *Read* mode to interact with the ACE.

Switch the Workbench to **Preview** mode.

:::image type="content" source="../../../images/viva-extensibility/lab1-preview.png" alt-text="Set the workbench to preview mode":::

Select the **Quick View** button on the ACE:

:::image type="content" source="../../../images/viva-extensibility/lab1-hw-ql.png" alt-text="Select the Quick View button on the ACE":::

## Examine the scaffolded code

### Explore the base class

Locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

```typescript
export default class HelloWorldAdaptiveCardExtension
  extends BaseAdaptiveCardExtension<IHelloWorldAdaptiveCardExtensionProps,IHelloWorldAdaptiveCardExtensionState> {
  // ...
}
```

All ACEs must extend from the `BaseAdaptiveCardExtension` class. You can optionally implement two generics:

- **TProperties**: Similar to Web Parts, this is the set of persisted properties of the component (*property bag*).
- **TState**: Unique to ACEs and can *optionally* define the set of renderable data.

### Rendering the ACE

```typescript
protected renderCard(): string | undefined {
  return CARD_VIEW_REGISTRY_ID;
}
```

The `renderCard()` method is `virtual` that returns a string identifier to a registered View; more on View registration later. This method is invoked during the **initial** render of the Card view.

If `renderCard()` isn't overridden, then a default Card view will be rendered.

Comment out the `renderCard()` method and see what happens:

```typescript
/*
protected renderCard(): string | undefined {
  return CARD_VIEW_REGISTRY_ID;
}
*/
```

:::image type="content" source="../../../images/viva-extensibility/lab1-default.png" alt-text="Results of commenting the renderCard() method":::

Uncomment the `renderCard()` method to go back to the original state.

The default Card view will render using the following properties from the manifest:

- Icon: `iconProperty`
- Title: `title`
- Card text: `description`

> [!NOTE]
> Unlike with the Card view, there is no default Quick View.

### Register a view for the ACE

For a View to be used, it must be registered with its respective **ViewNavigator**. Two **ViewNavigator**s are exposed on the ACE: `cardNavigator` and `quickViewNavigator`:

```typescript
this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());
```

> [!NOTE]
> You must register a view before it can be used. You can do this within the class' constructor or `onInit()` method.

### Card Views

Locate and open the file: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.

Card views must extend from these base classes:

- `BaseBasicCardView`

    :::image type="content" source="../../../images/viva-extensibility/lab1-basic-ace.png" alt-text="BaseBasicCardView":::

- `BaseImageCardView`

    :::image type="content" source="../../../images/viva-extensibility/lab1-image-ace.png" alt-text="BaseImageCardView":::

- `BasePrimaryTextCardView`

    :::image type="content" source="../../../images/viva-extensibility/lab1-primary-ace.png" alt-text="BasePrimaryTextCardView":::

Each of these Views will render differently and have different constraints on what data can be provided to the template.

> [!NOTE]
> The card views for Adaptive Card templates are fixed and cannot be changed.

Additionally, there are two generics for the `properties` and `state` objects shared between the view and the ACE.

- **TProperties**: The View's properties interface, the same interface used by persisted properties of the ACE (*property bag*).
- **TState**: Unique to ACEs and can *optionally* define the set of renderable data.

> [!NOTE]
> SPFx will automatically propagate changes to the ACE's state to each View.

The `data` getter is the only method that must be implemented by a Card view. The return type is unique to the parent class of the View.

The `cardButtons` property determines how many buttons appear on the Card and what action to do when clicked.

If `cardButtons` isn't implemented, then no buttons will appear on the Card.

> [!NOTE]
> Whereas the initial Card view is specified in the ACE's `renderCard()` method, the initial Quick View is specified as part of a button's action `parameters`. This allows two buttons to potentially open different views.

Add a second button by adding another object to the array returned by the `cardButtons()` method:

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
    },
    {
      title: 'Bing',
      action: {
        type: 'ExternalLink',
        parameters: {
          target: 'https://www.bing.com'
        }
      }
    }
  ];
}
```

Initially, there won't be any change in the Card. This is because the **Medium** Card size for
**BasePrimaryTextCardView** only shows one button. SPFx will select the first element in the tuple.

1. Change the Card size by going to the Property Pane and selecting **Large**.

    :::image type="content" source="../../../images/viva-extensibility/lab1-size.png" alt-text="Select the card size":::

    :::image type="content" source="../../../images/viva-extensibility/lab1-large.png" alt-text="Rendered large ACE card":::

1. Now, when you select the **Bing** button, Bing will open in a new browser tab.

The `onCardSelection()` method determines what will happen if the Card is clicked. If the `onCardSelection()` method isn't implemented, then nothing will happen when the Card is clicked.

1. Change the Card selection to open the **Quick** view by modifying the `onCardSelection()` method:

    ```typescript
    public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
      return {
        type: 'QuickView',
        parameters: {
          view: QUICK_VIEW_REGISTRY_ID
        }
      };
    }
    ```

1. Now, when you select the Card, it will open the Quick View.

### ACE Quick Views

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**.

Quick Views must extend the **BaseAdaptiveCardView** base class. There are three optional generics that can be defined:

- **TData**: The type returned from the `data()` getter method.
- **TProperties**: Similar to the Card view, this is the same interface used by persisted properties of the ACE (*property bag*).
- **TState** Similar to the Card view, this is the set of stateful data the View needs to render. **TState** must share properties with the ACE's state interface.

A Quick View has more control over the Adaptive Card template schema than a Card view. The
`template()` getter must return valid Adaptive Card template JSON. SPFx ACEs support Adaptive Card
templating. The properties on the object returned from the `data` getter will automatically be mapped
to the bound template slot.

For example, `${description}` is bound to `this.properties.description`.

```typescript
// QuickView.ts
public get data(): IQuickViewData {
  return {
    // ...
    description: this.properties.description
  };
}
```

```json
// QuickViewTemplate.json.ts
{
  "type": "TextBlock",
  "text": "${description}",
  "wrap": true
}
```

> [!NOTE]
> You must use the Adaptive Card binding syntax that uses `$` and `{}` brackets.

Let's change this:

1. Remove the `description` property from the Quick View data, and add two buttons.
1. Update the `IQuickViewData` interface as shown in the following code:

    ```typescript
    export interface IQuickViewData {
      title: string;
      subTitle: string;
    }
    ```

1. Update the `data()` method as shown in the following code:

    ```typescript
    public get data(): IQuickViewData {
      return {
        subTitle: this.state.subTitle,
        title: strings.Title
      };
    }
    ```

1. Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.
1. Update the `IHelloWorldAdaptiveCardExtensionState` interface and `onInit()` method as follows:

    ```typescript
    export interface IHelloWorldAdaptiveCardExtensionState {
      subTitle: string;
    }

    ..

    public onInit(): Promise<void> {
      this.state = {
        subTitle: 'No button clicked'
      };
      // ...
    }
    ```

next, remove the reference to `this.properties.description` from the Card view:

1. Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.
1. Remove the `description` property in the returned object:

    ```typescript
    public get data(): IPrimaryTextCardParameters {
      return {
        primaryText: strings.PrimaryText
      };
    }
    ```

In its `template()` getter, the Quick View of the ACE you generated returns the object from a JSON file. Let's now modify that template:

1. Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/quickView/template/QuickViewTemplate.json**.
1. Replace the contents of this file with the following JSON:

    ```json
    {
      "schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.2",
      "body": [
        {
          "type": "TextBlock",
          "weight": "Bolder",
          "text": "${title}"
        },
        {
          "type": "TextBlock",
          "text": "${subTitle}",
          "wrap": true
        },
        {
          "type": "ActionSet",
          "actions": [
            {
              "type": "Action.Submit",
              "title": "Button One",
              "style": "positive",
              "data": {
                "id": "button1",
                "message": "Clicked Button One"
              }
            },
            {
              "type": "Action.Submit",
              "title": "Button Two",
              "data": {
                "id": "button2",
                "message": "Clicked Button Two"
              }
            }
          ]
        }
      ]
    }
    ```

Test your changes by refreshing the hosted workbench in the browser. It should pickup the changes you've applied to the project if **gulp serve** is still running:

:::image type="content" source="../../../images/viva-extensibility/lab1-new-ql.png" alt-text="Updated ACE Quick View":::

> [!TIP]
> Learn more about Adaptive Cards at https://adaptivecards.io. This site also includes an Adaptive Cards Designer that lets you preview the rendering and structure of adaptive cards as you create them.

At this point, you've modified your ACE to include two new buttons in the Quick View card. The next step is to implement what happens when these buttons are selected. This is done using *action handlers*.

### Action handlers

Actions are handled by the views where they're defined.

The Quick View has two buttons, but the view is currently not handling the **Submit** action. The `onAction()` method is invoked whenever an Adaptive Card Action is executed, for instance when the **Action.Submit** action is initiated.

Locate and open the file **QuickView.ts** and override the `onAction()` to handle the two button selections as shown in the following code:

```typescript
import { ISPFxAdaptiveCard, BaseAdaptiveCardView, IActionArguments } from '@microsoft/sp-adaptive-card-extension-base';

..

public onAction(action: IActionArguments): void {
  if (action.type === 'Submit') {
    const { id, message } = action.data;
    switch (id) {
      case 'button1':
      case 'button2':
        this.setState({
          subTitle: message
        });
        break;
    }
  }
}
```

Test your changes by refreshing the hosted workbench in the browser. It should pickup the changes you've applied to the project if **gulp serve** is still running.

Selecting either button will now set the state's `subTitle` to the `data.message` value, causing a re-render (*more on this later*). The Quick View's Adaptive Card will now display this message, since its template binds to `subTitle`.

### Property Pane

Similar to web parts, ACE's can have configurable properties that are set by users with appropriate permissions. These enable you to customize each implementation of your ACE. This is done using the property pane.

ACEs can be configured just like Web Parts. The API signatures are identical for the following methods, found in the **HelloWorldAdaptiveCardExtension.ts** file:

- `getPropertyPaneConfiguration()`
- `onPropertyPaneFieldChanged()`

The default scaffolding for ACEs uses a new API that aims to minimize the bundle size when the component isn't in **Edit** mode. The `loadPropertyPaneResources()` method utilizes Webpack's chunking feature to separate the Property Pane specific code into its own JS file, which can then be loaded on demand.

In addition to returning the Property Pane configuration, the **HelloWorldPropertyPane** class is used to encapsulate all your **Edit** mode logic.

### Properties

Other than the **Card size** field, the scaffolded ACE has three (3) configurable fields, which are defined in `getPropertyPaneConfiguration()` method & defined in the **IHelloWorldAdaptiveCardExtension** interface:

- `title`
- `iconProperty`
- `description`

Card views are designed to automatically work across all card sizes. Aside from specifying a default card size, ACEs cannot control this property.

The `title` and `iconProperty` properties, defined in the ACE file (ie: **HelloWorldAdaptiveCardExtension.ts**) are used in the ACE's `title()` and `iconProperty()` getters, respectively, to configure the card's title and icon:

The `title` value is used in the title of the Property Pane and the title displayed on the Card.

```typescript
public get title(): string {
  return this.properties.title;
}
```

The `iconProperty` value is the URL of the icon used by Card views.

```typescript
protected get iconProperty(): string {
  return this.properties.iconProperty || require('./assets/sharepointlogo.png');
}
```

### State

The `state` property must be initialized before calling the `setState()` method, and it can only be initialized once.

```typescript
public onInit(): Promise<void> {
  this.state = {
    subTitle: 'No button clicked'
  };
  // ...
}
```

Unlike with `properties`, `state` isn't persisted past the current session and should only be used for ephemeral View state.

> [!NOTE]
> The scaffolded ACE maintains a `description` property in the `state` object. This is obsolete, since the ACE and all its views can simply reference the `description` stored in `properties`.

### Re-rendering

Re-rendering happens when a property is updated in the PropertyPane or if `setState()` is called.

When you update the Property Pane's **Description Field** value, it will update the description on the Card. Let's see how to do this:

1. Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.
1. As a trivial example, update the `subTitle` value when the `description` is updated during the `onPropertyPaneFieldChanged` event. Add the following code to the ACE **HelloWorldAdaptiveCardExtension** class:

    ```typescript
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
      if (propertyPath === 'description') {
        this.setState({
          subTitle: newValue
        });
      }
    }
    ```

Passing a `Partial<TState>` object to `setState()` method will update all Views with the new values. Updating the **Description Field** in the Property Pane will now update the `subTitle` displayed on the Quick View.

If no value or identical values are passed, a re-render will still occur.

The `setState()` method isn't just limited to the Property Pane. It can be used in response to receiving new data or as a result of some user action.

## Conclusion

After this tutorial you should be familiar with:

- Scaffolding an Adaptive Card Extension
- Registering Views
- Changing the Card view and Quick View
- Basic action handling
- Changing the Property Pane
- Defer loading the Property Pane
- How to use `state`
- Difference between `properties` and `state`
