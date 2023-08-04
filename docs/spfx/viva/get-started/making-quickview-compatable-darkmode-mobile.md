---
title: Making your Quick View compatible with Dark Mode in Mobile
description: Making your Adaptive Card Quick View compatible for both dark and light mode by using different resources for both scenarios.
ms.date: 07/28/2023
ms.localizationpriority: high
---
# Making your Quick View compatible with Dark Mode in Mobile

> [!IMPORTANT]
> The following tutorial is targeted specifically for Quick View in Mobile for Viva Connections iOS and Android.

To adapt to the dark mode release in Viva Connections Mobile, which is scheduled for early Q4 of CY23, please make sure that your card contents look compatible with both light and dark mode. An API ([context.hostContext.theme](/javascript/api/sp-adaptive-card-extension-base/ihostcontext)) will be available in SPFx 1.18.0 package to get the information about the theme of the mobile app. This will help with using associated assets like images compliant to the theme. If you want to use two different sets of data while keeping the existing view style, please follow these steps: 

- Let’s create a basic card with an image in Quick View. Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/quickView/template/QuickViewTemplate.json**. 
- Replace the contents of this file with the following JSON: 

    ```json
    {
        "type": "AdaptiveCard",
        "body": [
            {
                "type": "TextBlock",
                "weight": "Bolder",
                "text": "${title}"	
            },
            {
                "type": "ColumnSet",
                "columns": [
                    {
                        "type": "Column",
                        "items": [
                            {
                                "type": "Image",
                                "url": "${imageUrl}"
                            },
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "text": "${subTitle}",
                                "wrap": true,
                                "horizontalAlignment": "Center"
                            }
                        ],
                        "width": "stretch"
                    }
                ]
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.3"
    }
    ```

- Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/quickView/QuickView.ts**. 
- Add a variable **imageUrl** to the existing interface **IQuickViewData** and add **imageUrl value** to **data()** function.

```typescript
import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import { ITestCardDmAdaptiveCardExtensionProps, ITestCardDmAdaptiveCardExtensionState } from '../TestCardDmAdaptiveCardExtension';
import * as strings from 'TestCardDmAdaptiveCardExtensionStrings';

export interface IQuickViewData {
  subTitle: string;
  title: string;
  imageUrl: string;
}

export class QuickView extends BaseAdaptiveCardView<
  ITestCardDmAdaptiveCardExtensionProps,
  ITestCardDmAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: strings.SubTitle,
      title: strings.Title,
      imageUrl: require('../assets/LightModeImage.png')
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}
```

- We will get a Quick View in mobile iOS like this:

:::image type="content" source="../../../images/viva-design/img_quickview_tutorial_light.png" alt-text="Screenshot that shows how a image in quickview viewed on mobile will appear in light mode.":::

- When we switch to dark mode, the image conflicts with the background.

:::image type="content" source="../../../images/viva-design/img_quickview_tutorial_dark.png" alt-text="Screenshot that shows how the same image in quickview viewed on mobile will appear in dark mode."::: 

- To avoid this issue, we can assign different images for light and dark theme in **QuickView.ts**. Replace the existing code in the **data()** function with this snippet:

```typescript
public get data(): IQuickViewData {
    const isDarkTheme = (this.context.hostContext.theme === 'dark') ? true : false;
    return {
      subTitle: strings.SubTitle,
      title: strings.Title,
      imageUrl: isDarkTheme ? require('../assets/DarkModeImage.png') : require('../assets/LightModeImage.png')
    }
}
```
- Now when we switch to dark mode, on opening the same Quick View we see for light and dark theme respectively.

:::image type="content" source="../../../images/viva-design/img_quickview_tutorial_light_and_dark.png" alt-text="Screenshot that shows how a card quickview viewed on mobile will appear in light mode and dark mode with different images assigned.":::

Similarly, we can customize our icons, images, and other elements of Quick View to support both light and dark theme.

> [!NOTE]
> Please note that the value for ‘this.context.hostContext.theme’ is undefined for web and Teams app as they do not support dark theme and is only available for Viva Connections Mobile iOS and Android.

