---
title: Customize the theme of your SharePoint client-side web part using Office UI Fabric React
description: An article that describes how to customize the theme of your webpart utilizing Office UI Fabric React 6 and greater.
ms.date: 04/16/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Customize the theme of your SharePoint client-side web part using Office UI Fabric React

This article describes how to customize the theme of your SharePoint client-side web part which utilizes [Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react) components.
This article assumes you have already completed the previous [Office UI Fabric React integration tutorial](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/use-fabric-react-components).
Also discussed is the process of upgrading related dependencies to enable theme support available in Office UI Fabric React 6 and above.

## Install required dependencies

To utilize the custom theme support offered in Office UI Fabric React 6, the following dependencies are required:

1. [SharePoint Framework v1.8](https://github.com/SharePoint/sp-dev-docs/wiki/SharePoint-Framework-v1.8-release-notes) or greater
1. [office-ui-fabric-react](https://www.npmjs.com/package/office-ui-fabric-react), 6.x.y or greater
1. [@microsoft/rush-stack-compiler-2.9](https://www.npmjs.com/package/@microsoft/rush-stack-compiler-2.9) or greater

## Modify your existing web part

The following steps assume that you have a web part working with Office UI Fabric React as per the "[Use Office UI Fabric React components in your SharePoint client-side web part](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/use-fabric-react-components)" tutorial.

First, we need to upgrade our web part's version of Office UI Fabric React to a version greater or equal to 6 to utilize its theme capabilities.

To upgrade your web part project, follow these steps:

1. In the root of project, run `npm install --save office-ui-fabric-react@6` to install the latest `6.y.z` release and add it as a dependency.
1. Update the existing `rush-stack-compiler` dependency to a version greater than `2.7` to be compatible with `office-ui-fabric-react`'s type definitions.
1. Upgrade your SharePoint Framework to 1.8, if not already upgraded. 

With the above required dependencies installed, we can begin to theme our web part using Office UI Fabric React's offerings.

First, the web part will need to import and render a component from Office UI Fabric React, such as `PrimaryButton`.

```tsx
import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): JSX.Element {
    return (
      <PrimaryButton text="Hello World" />
    );
  }
}
```

With the `PrimaryButton` component rendering in our web part, we next need to wrap our component within the `Customizer` component from Office UI Fabric React.

For context, the `Customizer` component passes configurable settings such as the theme to components. Given those settings, the components adjust their styling accordingly.

```tsx
import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

import { Customizer, ICustomizerProps } from '@uifabric/utilities';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): JSX.Element {
    return (
      <Customizer>
        <PrimaryButton text="Hello World" />
      </Customizer>
    );
  }
}
```

Office UI Fabric React's `Customizer` component accepts props of type `ICustomizerProps`, of which `theme` is a member.

To populate our theme, we will need to either generate a theme manually or by using [Office UI Fabric React's Theme Generator](https://developer.microsoft.com/en-us/fabric#/styles/themegenerator).

After selecting a palette, Office UI Fabric React's Theme Generator will automatically produce the theme code to use in our web part, for example:

```tsx
const theme: ITheme = createTheme({
  palette: {
    themePrimary: "#6264a7",
    themeLighterAlt: "#f7f7fb",
    themeLighter: "#e1e1f1",
    themeLight: "#c8c9e4",
    themeTertiary: "#989ac9",
    themeSecondary: "#7173b0",
    themeDarkAlt: "#585a95",
    themeDark: "#4a4c7e",
    themeDarker: "#37385d",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#fff"
  },
  semanticColors: {
    bodyBackground: "#fff",
    bodyText: "#333"
  }
});
```

This code can then be used within our client-side web part by assigning it to `theme` under `ICustomizerProps`'s settings key:

```tsx
import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

import { Customizer, ICustomizerProps } from '@uifabric/utilities';

import { createTheme, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const theme: ITheme = createTheme({
  palette: {
    themePrimary: "#6264a7",
    themeLighterAlt: "#f7f7fb",
    themeLighter: "#e1e1f1",
    themeLight: "#c8c9e4",
    themeTertiary: "#989ac9",
    themeSecondary: "#7173b0",
    themeDarkAlt: "#585a95",
    themeDark: "#4a4c7e",
    themeDarker: "#37385d",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#fff"
  },
  semanticColors: {
    bodyBackground: "#fff",
    bodyText: "#333"
  }
});

const themeCustomizations: ICustomizerProps = {
  settings: {
    theme
  }
};

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): JSX.Element {
    return (
      <Customizer>
        <PrimaryButton text="Hello World" />
      </Customizer>
    );
  }
}
```

Finally, we will want to [Object.spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) the `ICustomizerProps` on the `Customizer` component:

```tsx
import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

import { Customizer, ICustomizerProps } from '@uifabric/utilities';

import { createTheme, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const theme: ITheme = createTheme({
  palette: {
    themePrimary: "#6264a7",
    themeLighterAlt: "#f7f7fb",
    themeLighter: "#e1e1f1",
    themeLight: "#c8c9e4",
    themeTertiary: "#989ac9",
    themeSecondary: "#7173b0",
    themeDarkAlt: "#585a95",
    themeDark: "#4a4c7e",
    themeDarker: "#37385d",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#c2c2c2",
    neutralSecondary: "#858585",
    neutralPrimaryAlt: "#4b4b4b",
    neutralPrimary: "#333",
    neutralDark: "#272727",
    black: "#1d1d1d",
    white: "#fff"
  },
  semanticColors: {
    bodyBackground: "#fff",
    bodyText: "#333"
  }
});

const themeCustomizations: ICustomizerProps = {
  settings: {
    theme
  }
};

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): JSX.Element {
    return (
      <Customizer {...themeCustomizations}>
        <PrimaryButton text="Hello World" />
      </Customizer>
    );
  }
}
```

With the above code applied to your web part, you should see the Office UI Fabric React components render with your selected theme.
Continue to add more components and adjust your theme to produce the client-side web part which best represents your brand.
