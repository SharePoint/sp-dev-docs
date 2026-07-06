---
title: Making Quick View compatible with dark mode in mobile devices
description: Making Adaptive Card Extension Quick View compatible for both dark and light mode by using different resources for both scenarios.
ms.date: 08/28/2024
ms.localizationpriority: high
---
# Making Quick View compatible with dark mode in mobile devices

> [!IMPORTANT]
> The following tutorial is targeted specifically for Quick View in Mobile for Viva Connections iOS and Android.

An API ([`context.sdks.microsoftTeams.teamsJs.app.getContext()`](/javascript/api/sp-adaptive-card-extension-base/ipartialsdks)) is available staring with the SPFx 1.18.1 version, to get the information about the theme of the mobile app. This helps with using associated assets like images compliant to the theme. If you want to use two different sets of data while keeping the existing view style, follow these steps:

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

- Locate and open the following file: **./src/adaptiveCardExtensions/helloWorld/helloWorldAdaptiveCardExtension.ts**.
- Add a new state variable **theme** to the existing interface **IHelloWorldAdaptiveCardExtensionState**.Since the theme  API returns a promise, we need to use a state variable to determine the current theme.

```typescript
export interface IHelloWorldAdaptiveCardExtensionState {
  theme: string;
}
```

- For making the theme available to the card we are using API in the **onInit()** function.

```typescript

export default class helloWorldAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IHelloWorldAdaptiveCardExtensionProps,
  IHelloWorldAdaptiveCardExtensionState
> {
  // ...

  public onInit(): Promise<void> {
    this.state = {
      theme: "light"
    }

  this.context.sdks?.microsoftTeams?.teamsJs.app.getContext().then((context) => {
    this.setState({
      theme: context.app.appInfo.theme
    });
  });

    // registers the Card View to be shown in a dashboard
  this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    // registers the Quick View to open via QuickView action
  this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

  return Promise.resolve();
  }
  // ...
}
```

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

- Quick View in mobile iOS looks like this:

:::image type="content" source="../../../images/viva-design/img_quickview_tutorial_light.png" alt-text="Screenshot that shows how an image in Quick View viewed on mobile appears in light mode.":::

- When we switch to dark mode, the image conflicts with the background.

:::image type="content" source="../../../images/viva-design/img_quickview_tutorial_dark.png" alt-text="Screenshot that shows how the same image in Quick View viewed on mobile appears in dark mode.":::

- To avoid this issue, we can assign different images for light and dark theme in **QuickView.ts**. Replace the existing code in the **data()** function with this snippet:

```typescript
public get data(): IQuickViewData {
  // only two options are available for theme: 'dark' and 'default'
    const isDarkTheme = this.state.theme === 'dark' ? true : false;
    return {
      subTitle: strings.SubTitle,
      title: strings.Title,
      imageUrl: isDarkTheme ? require('../assets/DarkModeImage.png') : require('../assets/LightModeImage.png')
    }
}
```

- Now when we switch to dark mode, on opening the same Quick View we see for light and dark theme respectively.

:::image type="content" source="../../../images/viva-design/img_quickview_tutorial_light_and_dark.png" alt-text="Screenshot that shows how a card Quick View viewed on mobile appears in light mode and dark mode with different images assigned.":::

Similarly, we can customize our icons, images, and other elements of Quick View to support both light and dark theme.

> [!NOTE]
> Please note that the value for ‘this.context.sdks.microsoftTeams.teamsJs.app.getContext()’ is undefined for web and Teams app as they do not support dark theme and is only available for Viva Connections Mobile iOS and Android.
