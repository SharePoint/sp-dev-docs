---
title: Build your first SharePoint Adaptive Card Extension
description: Adaptive Card Extensions (ACEs) are a new SharePoint Framework component type, which enable developers to build rich, native extensions to Viva Connections' Dashboards and SharePoint Pages. In this tutorial, you'll build and explore your first ACE.
ms.date: 08/05/2021
ms.prod: sharepoint
localization_priority: Priority
---
# Build your first SharePoint Adaptive Card Extension

Adaptive Card Extensions (ACEs) are a new SharePoint Framework component type, which enables developers to build rich, native extensions to Viva Connections' Dashboards and SharePoint Pages. Since Adaptive Card Extensions use Microsoft's Adaptive Card Framework to generate UI with its declarative JSON schema, you only need to focus on your component's business logic and let the SharePoint Framework (SPFx) handle making your component look good and work across all platforms.

[!INCLUDE [spfx-release-beta](../../../../includes/snippets/spfx-release-beta.md)]

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your development environment](../../set-up-your-development-environment.md).

> [!IMPORTANT]
> This tutorial assumes you have installed the SPFx v1.13 beta version. For more information on installing the SPFx v1.13 beta, see [SharePoint Framework v1.13 release notes](../../release-1.13.md).

## Step 1 - Scaffold an Adaptive Card Extension project

Create a new HelloWorld ACE by running the Yeoman SharePoint Generator.

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (*select the default option for all prompts omitted below*):

- **Do you want to allow tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites?** Yes
- **Which type of client-side component to create?** Adaptive Card Extension
- **What is your Adaptive Card Extension name?** HelloWorld
- **What is your Adaptive Card Extension description?** Hello World description

When prompted by the generator for which ACE template to use, select **Primary Text Template** for this tutorial.

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This might take few minutes.

## Step 2 - Serve the ACE in the workbench

Before digging into the code, run the scaffolded output and see what an Adaptive Card Extension looks like. The inner development loop with ACEs is similar to SPFx Web Parts. We can serve locally and run the code on the workbench.

```console
gulp serve -l --nobrowser
```

The following arguments are used in the previous command:

- `-l`: skips tests and `tslint` to make the inner loop faster
- `--nobrowser`: skips trying to launch the `localhost` test page

Once local webserver is running, navigate to the hosted Workbench: `https://{tenant}.sharepoint.com/_layouts/15/workbench.aspx`

Open the Web Part Toolbox and select your ACE:

:::image type="content" source="../../../images/viva-extensibility/lab1-toolbox.png" alt-text="Select the ACE from the toolbox":::

### Explore the Card View

ACEs can render in two distinct ways. The first way an ACE can render is called the **Card view**.

When rendered on a Dashboard or a Page, ACEs will always start in this view.

:::image type="content" source="../../../images/viva-extensibility/lab1-hw-ace.png" alt-text="ACE rendered in Card View":::

### Explore the Quick View

The second way an ACE can render is called the **Quick view**. When you interact with an ACE, ACEs can launch a larger, customized experience.

> [!NOTE]
> ACE interaction is disabled while in **Edit** mode. The Workbench or Page must be in *Preview* or *Read* mode to interact with the ACE.

Switch the Workbench to **Preview** mode.

:::image type="content" source="../../../images/viva-extensibility/lab1-preview.png" alt-text="Set the workbench to preview mode":::

Select the **Quick View** button on the ACE:

:::image type="content" source="../../../images/viva-extensibility/lab1-hw-ql.png" alt-text="Select the Quick View button on the ACE":::

## Step 3 - Examine the scaffolded code

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

Let's undo this by uncommenting `renderCard()` method.

The default Card view, will render using the following properties from the manifest:

- Icon - `iconImageUrl`
- Title - `title`
- Card text - `description`

> [!NOTE]
> Unlike with the Card view, there is no default Quick view.

### Register a view for the ACE

For a View to be used, it must be registered with its respective `ViewNavigator`.

```typescript
declare class ViewNavigator<TView extends IAdaptiveCardExtensionView> {
  /**
   * Registers a new view.
   *
   * @remarks `initializer` must return an instance of a {@link BaseView}.
   *
   * @remarks `initializer` isn't called until `id` is pushed onto the view stack.
   *
   * @remarks A View with a given `id` is only initialized once, and the instance is reused if it is pushed more than once
   *
   * @param id - Unique identifier for the view.
   * @param initializer - Function that returns a new view, which is only called if no view with the `id` already exists.
   */
  register(id: string, initializer: () => TView): void;
}
```

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
- **TState**: The View's generic state interface, which must be the same as the ACE's state interface

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

Change the Card size by going to the Property Pane and selecting **Large**.

:::image type="content" source="../../../images/viva-extensibility/lab1-size.png" alt-text="Select the card size":::

:::image type="content" source="../../../images/viva-extensibility/lab1-large.png" alt-text="Rendered large ACE card":::

Selecting the **Bing** button will open Bing in a new tab.

The `onCardSelection()` method determines what will happen if the Card is clicked. If the `onCardSelection()` method isn't implemented, then nothing will happen when the Card is clicked.

Change the Card selection to open the **Quick** view by modifying the `onCardSelection()` method.

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

Selecting the Card will now open the Quick view.

### ACE Quick Views

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**.

Quick views must extend the **BaseAdaptiveCardView** base class. There are three optional generics that can be defined:

- **TData**: The type returned from the `data()` getter method.
- **TProperties**: Similar to the Card view, this is the same interface used by persisted properties of the ACE (*property bag*).
- **TState** Similar to the Card view, this is the set of stateful data the View needs to render. **TState** must share properties with the ACE's state interface.

A Quick View has more control over the Adaptive Card template schema than a Card view. The
`template()` getter must return valid Adaptive Card template JSON. SPFx ACEs support Adaptive Card
templating. The properties on the object returned from the `data` getter will automatically be mapped
to the bound template slot.

For example, `${description}` is bound to `this.state.description`.

```typescript
public get data(): IQuickViewData {
  return {
    // ...
    description: this.state.description
  };
}
```

```typescript
{
  type: 'TextBlock',
  text: '${description}',
  wrap: true
}
```

> [!NOTE]
> You must use the updated Adaptive Card binding syntax which uses `$` and `{}` brackets.

Remove the `description` property from the Quick view data, and add two buttons.

Update the `IQuickViewData` interface as shown in the following code:

```typescript
export interface IQuickViewData {
  title: string;
  subTitle: string;
}
```

Update the `data()` method as shown in the following code:

```typescript
public get data(): IQuickViewData {
  return {
    subTitle: this.state.subTitle,
    title: strings.Title
  };
}
```

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

Update the `IHelloWorldAdaptiveCardExtensionState` interface, `onInit()` method, and `onPropertyPaneFieldChanged()` event handler as follows:

```typescript
export interface IHelloWorldAdaptiveCardExtensionState {
  subTitle: string;
}
```

```typescript
public onInit(): Promise<void> {
  this.state = {
    subTitle: 'No button clicked'
  };
  // ...
}
```

```typescript
protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
}
```

Remove the reference to `this.state.description` from the Card view:

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/cardView/CardView.ts**.

```typescript
public get data(): IPrimaryTextCardParameters {
  return {
    primaryText: strings.PrimaryText,
    description: this.properties.description
  };
}
```

> [!NOTE]
> In its `template()` getter, the Quick view of the ACE you generated returns the object from a JSON file.

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/quickView/template/QuickViewTemplate.json**.

Replace the contents of this file with the following JSON:

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

:::image type="content" source="../../../images/viva-extensibility/lab1-new-ql.png" alt-text="Updated ACE Quick View":::

### Action handlers

Actions are handled by the views where they're defined.

The Quick view has two buttons, but the view is currently not handling the **Submit** action. The `onAction()` method is invoked whenever an Adaptive Card Action is executed, for instance when the **Action.Submit** action is initiated.

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
        })
        break;
    }
  }
}
```

Selecting either button will now set the state's `subTitle` to the `data.message` value, causing a re-render (*more on this later*). The Quick view's Adaptive Card will now display this message, since its template binds to `subTitle`.

### Property Pane

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

ACEs can be configured just like Web Parts. The API signatures are identical for:

- `getPropertyPaneConfiguration()`
- `onPropertyPaneFieldChanged()`

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/HelloWorldPropertyPane.ts**.

The default scaffolding for ACEs uses a new API that aims to minimize the bundle size when the component isn't in **Edit** mode. The `loadPropertyPaneResources()` method utilizes Webpack's chunking feature to separate the Property Pane specific code into its own JS file, which can then be loaded on demand.

In addition to returning the Property Pane configuration, the **HelloWorldPropertyPane** class is used to encapsulate all your **Edit** mode logic.

### Properties

Other than the **Card size** field, the scaffolded ACE has three configurable fields, which are defined in `getPropertyPaneConfiguration()` method:

- `title`
- `iconProperty`
- `description`

> [!NOTE]
> Card views are designed to automatically work across all card sizes. Aside from specifying a default card size, ACEs cannot control this property.

The `title` and `iconProperty` properties are used in the ACE's `title()` and `iconProperty()` getters, respectively, to configure the card's title and icon:

```typescript
public get title(): string {
  return this.properties.title;
}
```

> [!NOTE]
> The `title` value is used in the title of the Property Pane and the title displayed on the Card.

```typescript
protected get iconProperty(): string {
  return this.properties.iconProperty || require('./assets/sharepointlogo.png');
}
```

> [!NOTE]
> The `iconProperty` value is the URL of the icon used by Card views, by default.

### Re-rendering

Re-rendering happens when a property is updated in the PropertyPane or if `setState()` is called.

Update the Property Pane **Description Field** value. This will update the description of the Card.

Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts**.

As a trivial example, update the `subTitle` value when the `description` is updated during the `onPropertyPaneFieldChanged` event:

```typescript
protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
  if (propertyPath === 'description') {
    this.setState({
      subTitle: newValue
    });
  }
}
```

Passing a `Partial<TState>` object to `setState()` method will update all Views with the new values. Updating the **Description Field** in the Property Pane will now update the `subTitle` displayed on the Quick view.

> [!NOTE]
> If no value or identical values are passed, a re-render will still occur.

The `setState()` method isn't just limited to the Property Pane. It can be used in response to receiving new data or as a result of some user action.

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
> The scaffolded AdaptiveCardExtension maintains a `description` property in the `state` object. This is obsolete, since the AdaptiveCardExtension and all its views can simply reference the `description` stored in `properties`.

## Step 4 - Card designer

The Card designer is a first-party ACE, which can be used to prototype different static layouts or behaviors for your ACE. Add the "Card designer" from the toolbox and use the Property Pane to change its look and feel.

:::image type="content" source="../../../images/viva-extensibility/lab1-static-ace.png" alt-text="Static ACE preview":::

You can use the Adaptive Card templating engine to build complex UX scenarios. Get inspired with
samples at https://adaptivecards.io/samples/.

## Conclusion

After this tutorial you should be familiar with:

- Scaffolding an Adaptive Card Extension
- Registering Views
- Changing the Card view and Quick view
- Basic action handling
- Changing the Property Pane
- Defer loading the Property Pane
- How to use `state`
- Difference between `properties` and `state`
- Card designer
