---
title: Create an Adaptive Card Extension with the focus feature
description: Step by step guide on how to create an Adaptive Card Extension with the focus feature.
ms.date: 02/19/2026
ms.localizationpriority: high
---
# Create an Adaptive Card Extension with focus feature

## Scaffold an Adaptive Card Extension project

Create a new project directory for your project and change your current folder to that directory.

Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (select the default option for all prompts omitted below):

- **What is your solution name?** focus-feature
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Generic Card Template
- **What is your Adaptive Card Extension name?** HelloWorld

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This process might take few minutes.

Before moving forward, update the `title` and `description` fields of your ACE to give it a personal touch.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/adaptive-card-extension-manifest.schema.json",
  "id": "2c2fb587-a351-40f9-83f7-0840e3ee857f",
  "alias": "HelloWorldAdaptiveCardExtension",
  "componentType": "AdaptiveCardExtension",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
  "requiresCustomScript": false,
  "supportedHosts": ["Dashboard"],
  "preconfiguredEntries": [{
    "groupId": "bd067b1e-3ad5-4d5d-a5fe-505f07d7f59c", // Dashboard
    "group": { "default": "Dashboard" },
    "title": { "default": "Focus feature advanced I" },
    "description": { "default": "Focus feature advanced I" },
    "iconImageUrl": "https://res.cdn.office.net/files/fabric-cdn-prod_20230308.001/assets/brand-icons/product-monoline/svg/vivaconnections_32x1.svg",
    "properties": {
      "title": "Focus feature advanced I"
    },
    "cardSize": "Large"
  }]
}
```

Next, run **heft start** from the command line in the root of the project to start the build and debugging process. In the hosted workbench, you'll see the **FocusFeature** card:

![See the FocusFeature card icon in the webpart toolbox](./img/focusFeatureTutorialACE.png)

## Add focus feature to your Adaptive Card Extension Quick View

At this point, we have out of the box Adaptive Card Extension code. Now it's time to flare things up with focusing on elements in the Quick View.

In the Quick View, we'll introduce buttons for two actions:

- Move to the next Quick View
- Move to the previous Quick View

We'll first define the template of the Quick View. For this, locate and open the following file in your project: **./src/adaptiveCardExtensions/helloWorld/quickView/template/QuickViewTemplate.json**

Replace the content of this file as below:

```json
{
  "schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "weight": "Bolder",
      "text": "${title}",
      "id": "quick-view-title"
    },
    {
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "items": [
            {
              "type": "TextBlock",
              "weight": "Bolder",
              "text": "${subTitle}",
              "id": "quick-view-sub-title",
              "wrap": true
            }
          ]
        }
      ]
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Forward skip update",
          "data": {
            "id": "forward-skip"
          }
        },
        {
          "type": "Action.Submit",
          "title": "Forward",
          "data": {
            "id": "forward"
          }
        },
        {
          "type": "Action.Submit",
          "title": "Back",
          "data": {
            "id": "back"
          }
        }
      ]
    }
  ]
}
```

Next let's implement the logic that will allow us to navigate to the next Quick View. We'll use the QuickViewNavigator to manipulate the view stack.

Open the file **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts** and replace the content with the following:

```typescript
import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView, IActionArguments } from '@microsoft/sp-adaptive-card-extension-base';
import {
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID_2
} from '../HelloWorldAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
}

export class QuickView extends BaseAdaptiveCardQuickView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: 'Quick view',
      title: 'Adaptive Card Extension'
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }

  public onAction(action: IActionArguments): void {
    if (action.type === 'Submit') {
      const { id } = action.data;
      if (id === 'back') {
        this.quickViewNavigator.pop();
      } else if (id === 'forward-skip') {
        this.quickViewNavigator.push(QUICK_VIEW_REGISTRY_ID_2, true);
      } else {
        this.quickViewNavigator.push(QUICK_VIEW_REGISTRY_ID_2, false);
      }
    }
  }
}
```

Create a new template file for the second Quick View: **./src/adaptiveCardExtensions/helloWorld/quickView/template/QuickViewTemplate2.json**

```json
{
  "schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "weight": "Bolder",
      "text": "${title}",
      "id": "quick-view-title"
    },
    {
      "type": "TextBlock",
      "text": "${subTitle}",
      "id": "quick-view-sub-title",
      "wrap": true
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Forward skip update",
          "data": {
            "id": "forward-skip"
          }
        },
        {
          "type": "Action.Submit",
          "title": "Forward",
          "data": {
            "id": "forward"
          }
        },
        {
          "type": "Action.Submit",
          "title": "Back",
          "data": {
            "id": "back"
          }
        }
      ]
    }
  ]
}
```

Create a new file for the second Quick View: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView2.ts**

Add the following content:

```typescript
import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView, IActionArguments } from '@microsoft/sp-adaptive-card-extension-base';
import {
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID_3
} from '../HelloWorldAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
}

export class QuickView2 extends BaseAdaptiveCardQuickView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: 'SECOND QUICK VIEW',
      title: 'SECOND QUICK VIEW'
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate2.json');
  }

  public onAction(action: IActionArguments): void {
    if (action.type === 'Submit') {
      const { id } = action.data;
      if (id === 'back') {
        this.quickViewNavigator.pop();
      } else if (id === 'forward-skip') {
        this.quickViewNavigator.push(QUICK_VIEW_REGISTRY_ID_3, true);
      } else {
        this.quickViewNavigator.push(QUICK_VIEW_REGISTRY_ID_3, false);
      }
    }
  }
}
```

Create a new template file for the third Quick View: **./src/adaptiveCardExtensions/helloWorld/quickView/template/QuickViewTemplate3.json**

```json
{
  "schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {
      "type": "TextBlock",
      "weight": "Bolder",
      "text": "${title}",
      "id": "quick-view-title"
    },
    {
      "type": "TextBlock",
      "text": "${subTitle}",
      "id": "quick-view-sub-title",
      "wrap": true
    },
    {
      "type": "ActionSet",
      "actions": [
        {
          "type": "Action.Submit",
          "title": "Back",
          "data": {
            "id": "back"
          }
        }
      ]
    }
  ]
}
```

Create a new file for the third Quick View: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView3.ts**

Add the following content:

```typescript
import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView, IActionArguments } from '@microsoft/sp-adaptive-card-extension-base';
import {
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState
} from '../HelloWorldAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
}

export class QuickView3 extends BaseAdaptiveCardQuickView<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: 'THIRD QUICK VIEW',
      title: 'THIRD QUICK VIEW'
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate3.json');
  }

  public onAction(action: IActionArguments): void {
    if (action.type === 'Submit') {
      const { id } = action.data;
      if (id === 'back') {
        this.quickViewNavigator.pop();
      }
    }
  }
}
```

### Register all Quick Views in the main ACE file

Now we need to register all three Quick Views in the main Adaptive Card Extension file. Open **./src/adaptiveCardExtensions/helloWorld/HelloWorldAdaptiveCardExtension.ts** and update it as follows:

```typescript
import type { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { QuickView2 } from './quickView/QuickView2';
import { QuickView3 } from './quickView/QuickView3';
import { HelloWorldPropertyPane } from './HelloWorldPropertyPane';

export interface IHelloWorldAdaptiveCardExtensionProps {
  title: string;
}

export interface IHelloWorldAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'HelloWorld_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'HelloWorld_QUICK_VIEW';
export const QUICK_VIEW_REGISTRY_ID_2: string = 'HelloWorld_QUICK_VIEW_2';
export const QUICK_VIEW_REGISTRY_ID_3: string = 'HelloWorld_QUICK_VIEW_3';
```

After adding these changes, your Quick Views will look like:

![Card appearance after introducing changes in the first quick-view](./img/focusFeatureFirstView.png)

Second Quick View as

![Card appearance after introducing changes in the second quick-view](./img/focusFeatureSecondView.png)

Third Quick View as

![Card appearance after introducing changes in the third quick-view](./img/focusFeatureThirdView.png)

### Implement the focusParameters function

So far we've modified our Quick Views to have a simple title, subtitle, and respective buttons to navigate to other Quick Views. Now we can finally implement the `focusParameters` function, which gives the ability to the third-party developer to decide what they wish to set focus on in the Quick View.

For this, open each respective QuickView file (**./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**) and import the `IFocusParameters` interface, as follows:

```typescript
import { IFocusParameters } from '@microsoft/sp-adaptive-card-extension-base';
```

Finally, introduce the following `focusParameters()` function in the QuickView class so that we set focus on an element. Each QuickView should look as follows:

```typescript
public get focusParameters(): IFocusParameters {
  return {
    focusTarget: 'quick-view-sub-title',
    ariaLive: 'polite'
  }
}
```

At this point, you can run **heft start** again and see how all the changes you made so far came together.

This is it! Congratulations on successfully creating your Adaptive Card Extension with the focus feature.

![Aria Polite added](./img/focusFeatureTutorialQuickViewAriaSet.PNG)

## Notes with screen readers

When loading your card for the first time, you'll notice that the contents of the first Quick View are read in their entirety. This is the default behavior when a screen reader sees a dialog as it treats it as navigation. Subsequent loads of the Quick View stack won't run into this. As you navigate back and forth through Quick Views, you'll notice that the element target is focused and will be the only thing to be read.

## See Also

- [Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections](/training/modules/sharepoint-spfx-adaptive-card-extension-card-types)
