---
title: Create an Adaptive Card Extension with the focus feature
description: Step by step guide on how to create an Adaptive Card Extension with the focus feature.
ms.date: 03/15/2023
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

- **What is your solution name?** focus-feature-tutorial
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Primary Text Template
- **What is your Adaptive Card Extension name?** FocusFeature

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This process might take few minutes.

## Update your project's hosted workbench URL

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

At this point, if you do `gulp serve`, then you'll see the `FocusFeature` card:

![See the FocusFeature card icon in the webpart toolbox](./focusFeatureTutorialACE.png)

## Add focus feature to your Adaptive Card Extension Quick View

At this point, we have out of the box Adaptive Card Extension code. Now it's time to flare things up with focusing on elements in the Quick view.

In the Quick View, we will introduce buttons for twp actions:

- Move to the next quick view
- Move to the previous quick view

We will first define the template of the Quick View. For this, locate and open the following file in your project: **./src/adaptiveCardExtensions/focusFeature/quickView/template/QuickViewTemplate.json**

Replace the content of this file with the following:

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
      "wrap": true,
      "id": "textBlockB"
    },
    {
      "type": "ActionSet",
      "actions": [
       {
        "title": "Previous view",
        "type": "Action.Submit",
        "data": {
         "id": "previous"
        }    
       },
       {
        "title": "Next view",
        "type": "Action.Submit",
        "data": {
         "id": "next"
        } 
       }
      ]
		}
	]
}
```

Add a `subTitle` property to the following file in your project: **./src/adaptiveCardExtensions/focusFeature/FocusFeatureAdaptiveCardExtension.manifest.json**

```json
"properties": {
	"title": "FocusFeature",
	"subTitle": "FocusTarget"
}
```

Add a `subTitle` property to the IFocusFeatureAdaptiveCardExtensionProps in the following file: **./src/adaptiveCardExtensions/focusFeature/FocusFeatureAdaptiveCardExtension.ts**

```typescript
export interface IFocusFeatureAdaptiveCardExtensionProps {
  title: string;
  subTitle: string;
}
```

After adding these changes, your Quick View would look like:

![Card appearance after introducing changes in the quick-view](./img/focusFeatureTutorialQuickView.PNG)

### Implement the focusParameters function

So far we have modified our quick view to have a simple title and subtitle. Now we can finally implement the `focusParameters` function, which gives the ability to the Third Party Developer to decide what they wish to set focus on in the quick view.

For this, open the QuickView.ts file (**./src/adaptiveCardExtensions/focusFeature/quickView/QuickView.ts**) and import the `IFocusParameters` interface, as follows:

```typescript
import { IFocusParameters } from '@microsoft/sp-adaptive-card-extension-base';
```

Finally, introduce the following `focusParameters` function in the QuickView class so that we set focus on an element:

```typescript
public get focusParameters(): IFocusParameters {
	return {
		focusTarget: "textBlockB",
		ariaLive: 'polite'
	}
}
```

At this point, you can run **gulp serve** again and see how all the changes you made so far came together.

![Aria Polite added](./img/focusFeatureTutorialQuickViewAriaSet.PNG)

You might have noticed, if you run `document.activeElement` in the console, the element with the current focus is the close button. Why is this?