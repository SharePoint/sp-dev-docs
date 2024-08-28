---
title: SharePoint site theming - JSON schema
description: The new SharePoint site theming features use a JSON schema to store color settings and other information about each theme.
ms.date: 08/08/2024
ms.localizationpriority: high
---

# SharePoint site theming: JSON schema

The new [SharePoint site theming](sharepoint-site-theming-overview.md) features use a JSON schema to store color settings and other information about each theme. Theme settings are stored in a JSON object that contains the following keys:

- **name**: The name of the theme, which appears in the theme picker UI and is also used by administrators and developers to refer to the theme in PowerShell cmdlets or calls to the SharePoint REST API.
- **isInverted**: This value should be false for light themes and true for dark themes; it controls whether SharePoint uses dark or light theme colors to render text on colored backgrounds.
- **backgroundImageUri**: The URI of an optional background image for the theme (value can be blank if no background image).
- **palette**: The RGB color settings for the theme, stored as a nested JSON object with the following keys:
  - themePrimary
  - themeLighterAlt
  - themeLighter
  - themeLight
  - themeTertiary
  - themeSecondary
  - themeDarkAlt
  - themeDark
  - themeDarker
  - neutralLighterAlt
  - neutralLighter
  - neutralLight
  - neutralQuaternaryAlt
  - neutralQuaternary
  - neutralTertiaryAlt
  - neutralTertiary
  - neutralSecondaryAlt
  - neutralSecondary
  - neutralPrimaryAlt
  - neutralPrimary
  - neutralDark
  - black
  - white
  - primaryBackground
  - primaryText
  - bodyBackground
  - bodyText
  - disabledBackground
  - disabledText
  - error
  - accent

The colors in the `palette` element are specified as 6-digit or 3-digit hexadecimal RGB string values.

The following is an example of a JSON object that defines a theme.

```json
{
  "name": "Blue",
  "isInverted": true,
  "backgroundImageUri": "",
  "palette": {
    "themePrimary": "#00bcf2",
    "themeLighterAlt": "#00090c",
    "themeLighter": "#001318",
    "themeLight": "#002630",
    "themeTertiary": "#005066",
    "themeSecondary": "#00abda",
    "themeDarkAlt": "#0ecbff",
    "themeDark": "#44d6ff",
    "themeDarker": "#6cdfff",
    "neutralLighterAlt": "#2e3340",
    "neutralLighter": "#353a49",
    "neutralLight": "#404759",
    "neutralQuaternaryAlt": "#474e62",
    "neutralQuaternary": "#4c546a",
    "neutralTertiaryAlt": "#646e8a",
    "neutralTertiary": "#c8c8c8",
    "neutralSecondaryAlt": "#d0d0d0",
    "neutralSecondary": "#dadada",
    "neutralPrimaryAlt": "#eaeaea",
    "neutralPrimary": "#ffffff",
    "neutralDark": "#f4f4f4",
    "black": "#f8f8f8",
    "white": "#262a35",
    "primaryBackground": "#262a35",
    "primaryText": "#ffffff",
    "bodyBackground": "#ffffff",
    "bodyText": "#333333",
    "disabledBackground": "#f4f4f4",
    "disabledText": "#c8c8c8",
    "error": "#ff5f5f",
    "accent": "#ffb900"
  }
}
```

The SharePoint Framework includes eight built-in themes: six on light backgrounds, and two on dark backgrounds. You might find it useful to create a custom theme by starting from one of the built-in themes and adjusting it to suit your needs.

Another option is to use the [Theme Generator tool](https://aka.ms/themedesigner) to build a custom theme. It provides an interactive UI for selecting theme colors, and automatically generates the JSON, SASS, and PowerShell definitions for your custom theme.

> [!NOTE]
> The theme generator definitions do not currently include the following color slots and key/value pairs:
> 
> - "primaryBackground"
> - "primaryText"
> - "bodyBackground"
> - "bodyText"
> - "disabledBackground"
> - "disabledText"
> - "error"
> - "accent"
> 
> These can be manually added to your generated definition before uploading to the tenant.

![Theme Generator tool](../../images/theme-generator-tool.png)

The following is a summary of the built-in themes, including JSON definitions for the theme colors that you can use as a starting point for customization.

## Teal theme

The following table shows the color palette used by the Teal theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #014446     | black: #000000              |
| themeDark: #025c5f       | neutralDark: #212121        |
| themeDarkAlt: #026d70    | neutralPrimary: #333        |
| themePrimary: #03787c    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #13898d  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #49aeb1   | neutralLight: #eaeaea       |
| themeLight: #98d6d8      | neutralLighter: #f4f4f4     |
| themeLighter: #c5e9ea    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #f0f9fa | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Teal theme's color palette.

```powershell
{ 
  themeDarker: '#014446', 
  themeDark: '#025c5f', 
  themeDarkAlt: '#026d70', 
  themePrimary: '#03787c', 
  themeSecondary: '#13898d', 
  themeTertiary: '#49aeb1', 
  themeLight: '#98d6d8', 
  themeLighter: '#c5e9ea', 
  themeLighterAlt: '#f0f9fa', 
  black: '#000000', 
  neutralDark: '#212121', 
  neutralPrimary: '#333', 
  neutralPrimaryAlt: '#3c3c3c', 
  neutralSecondary: '#666666', 
  neutralTertiary: '#a6a6a6', 
  neutralTertiaryAlt: '#c8c8c8', 
  neutralLight: '#eaeaea', 
  neutralLighter: '#f4f4f4', 
  neutralLighterAlt: '#f8f8f8', 
  white: '#fff', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralSecondaryAlt: '#767676', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#4f6bed'
}
```

## Red theme

The following table shows the color palette used by the Red theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #751b1e     | black: #000000              |
| themeDark: #952226       | neutralDark: #212121        |
| themeDarkAlt: #c02b30    | neutralPrimary: #333        |
| themePrimary: #d13438    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #d6494d  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #ecaaac   | neutralLight: #eaeaea       |
| themeLight: #f6d6d8      | neutralLighter:#f4f4f4      |
| themeLighter: #faebeb    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #fdf5f5 | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Red theme's color palette.

```powershell
{ 
  themeDarker: '#751b1e', 
  themeDark: '#952226', 
  themeDarkAlt: '#c02b30', 
  themePrimary: '#d13438', 
  themeSecondary: '#d6494d', 
  themeTertiary: '#ecaaac', 
  themeLight: '#f6d6d8', 
  themeLighter: '#faebeb', 
  themeLighterAlt: '#fdf5f5', 
  black: '#000000', 
  neutralDark: '#212121', 
  neutralPrimary: '#333', 
  neutralPrimaryAlt: '#3c3c3c', 
   neutralSecondary: '#666666', 
  neutralTertiary: '#a6a6a6', 
  neutralTertiaryAlt: '#c8c8c8', 
  neutralLight: '#eaeaea', 
  neutralLighter: '#f4f4f4', 
  neutralLighterAlt: '#f8f8f8', 
  white: '#fff', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralSecondaryAlt: '#767676', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#ca5010'
}
```

## Orange theme

The following table shows the color palette used by the Orange theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #6f2d09     | black: #000000              |
| themeDark: #8d390b       | neutralDark: #212121        |
| themeDarkAlt: #b5490f    | neutralPrimary: #333        |
| themePrimary: #ca5010    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #e55c12  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #f6b28d   | neutralLight: #eaeaea       |
| themeLight: #fbdac9      | neutralLighter: #f4f4f4     |
| themeLighter: #fdede4    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #fef6f1 | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Orange theme's color palette.

```powershell
{ 
  themeDarker: '#6f2d09', 
  themeDark: '#8d390b', 
  themeDarkAlt: '#b5490f', 
  themePrimary: '#ca5010', 
  themeSecondary: '#e55c12', 
  themeTertiary: '#f6b28d', 
  themeLight: '#fbdac9', 
  themeLighter: '#fdede4', 
  themeLighterAlt: '#fef6f1', 
  black: '#000000', 
  neutralDark: '#212121', 
  neutralPrimary: '#333', 
  neutralPrimaryAlt: '#3c3c3c', 
  neutralSecondary: '#666666', 
  neutralTertiary: '#a6a6a6', 
  neutralTertiaryAlt: '#c8c8c8', 
  neutralLight: '#eaeaea', 
  neutralLighter: '#f4f4f4', 
  neutralLighterAlt: '#f8f8f8', 
  white: '#fff', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralSecondaryAlt: '#767676', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#986f0b'
}
```

## Green theme

The following table shows the color palette used by the Green theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #294903     | black: #000000              |
| themeDark: #386304       | neutralDark: #201f1e        |
| themeDarkAlt: #427505    | neutralPrimary: #323130     |
| themePrimary: #498205    | neutralPrimaryAlt: #3b3a39  |
|                          | neutralSecondary: #605e5c   |
|                          | neutralTertiary: #a19f9d    |
| themeSecondary: #5a9117  | neutralTertiaryAlt: #c8c6c4 |
| themeTertiary: #85b44c   | neutralLight: #edebe9       |
| themeLight: #bdda9b      | neutralLighter: #f3f2f1     |
| themeLighter: #dbebc7    | neutralLighterAlt: #faf9f8  |
| themeLighterAlt: #f6faf0 | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Green theme's color palette.

```powershell
{ 
  themePrimary: '#498205', 
  themeLighterAlt: '#f6faf0', 
  themeLighter: '#dbebc7', 
  themeLight: '#bdda9b', 
  themeTertiary: '#85b44c', 
  themeSecondary: '#5a9117', 
  themeDarkAlt: '#427505', 
  themeDark: '#386304', 
  themeDarker: '#294903', 
  neutralLighterAlt: '#faf9f8', 
  neutralLighter: '#f3f2f1', 
  neutralLight: '#edebe9', 
  neutralQuaternaryAlt: '#e1dfdd', 
  neutralQuaternary: '#d2d0ce', 
  neutralTertiaryAlt: '#c8c6c4', 
  neutralTertiary: '#a19f9d', 
  neutralSecondaryAlt: '#8a8886', 
  neutralSecondary: '#605e5c', 
  neutralPrimary: '#323130', 
  neutralPrimaryAlt: '#3b3a39', 
  neutralDark: '#201f1e', 
  black: '#000000', 
  white: '#fff', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#03787c'
}
```

## Blue theme

The following table shows the color palette used by the Blue theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #004578     | black: #000000              |
| themeDark: #005a9e       | neutralDark: #212121        |
| themeDarkAlt: #106ebe    | neutralPrimary: #333        |
| themePrimary: #0078d7    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #2b88d8  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #71afe5   | neutralLight: #eaeaea       |
| themeLight: #c7e0f4      | neutralLighter: #f4f4f4     |
| themeLighter: #deecf9    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #eff6fc | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Blue theme's color palette.

```powershell
{ 
  themePrimary: '#0078d7', 
  themeLighterAlt: '#eff6fc', 
  themeLighter: '#deecf9', 
  themeLight: '#c7e0f4', 
  themeTertiary: '#71afe5', 
  themeSecondary: '#2b88d8', 
  themeDarkAlt: '#106ebe', 
  themeDark: '#005a9e', 
  themeDarker: '#004578', 
  neutralLighterAlt: '#f8f8f8', 
  neutralLighter: '#f4f4f4', 
  neutralLight: '#eaeaea', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralTertiaryAlt: '#c8c8c8', 
  neutralTertiary: '#a6a6a6', 
  neutralSecondaryAlt: '#767676', 
  neutralSecondary: '#666666', 
  neutralPrimary: '#333', 
  neutralPrimaryAlt: '#3c3c3c', 
  neutralDark: '#212121', 
  black: '#000000', 
  white: '#fff', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#8764b8'
}
```

## Purple theme

The following table shows the color palette used by the Purple theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #27268a     | black: #000000              |
| themeDark: #3230b0       | neutralDark: #212121        |
| themeDarkAlt: #5250cf    | neutralPrimary: #333        |
| themePrimary: #6b69d6    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #7a78da  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #c1c0ee   | neutralLight: #eaeaea       |
| themeLight: #e1e1f7      | neutralLighter: #f4f4f4     |
| themeLighter: #f0f0fb    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #f8f7fd | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Purple theme's color palette.

```powershell
{ 
  themePrimary: '#6b69d6', 
  themeLighterAlt: '#f8f7fd', 
  themeLighter: '#f0f0fb', 
  themeLight: '#e1e1f7', 
  themeTertiary: '#c1c0ee', 
  themeSecondary: '#7a78da', 
  themeDarkAlt: '#5250cf', 
  themeDark: '#3230b0', 
  themeDarker: '#27268a', 
  neutralLighterAlt: '#f8f8f8', 
  neutralLighter: '#f4f4f4', 
  neutralLight: '#eaeaea', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralTertiaryAlt: '#c8c8c8', 
  neutralTertiary: '#a6a6a6', 
  neutralSecondaryAlt: '#767676', 
  neutralSecondary: '#666666', 
  neutralPrimary: '#333', 
  neutralPrimaryAlt: '#3c3c3c', 
  neutralDark: '#212121', 
  black: '#000000', 
  white: '#fff', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#038387'
}
```

## Gray theme

The following table shows the color palette used by the Gray theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #323130     | black: #000000              |
| themeDark: #403e3d       | neutralDark: #212121        |
| themeDarkAlt: #53504e    | neutralPrimary: #333        |
| themePrimary: #5d5a58    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #6d6a67  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #bbb9b8   | neutralLight: #eaeaea       |
| themeLight: #dfdedd      | neutralLighter: #f4f4f4     |
| themeLighter: #efeeee    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #f7f7f7 | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Gray theme's color palette.

```powershell
{ 
  themePrimary: '#5d5a58', 
  themeLighterAlt: '#f7f7f7', 
  themeLighter: '#efeeee', 
  themeLight: '#dfdedd', 
  themeTertiary: '#bbb9b8', 
  themeSecondary: '#6d6a67', 
  themeDarkAlt: '#53504e', 
  themeDark: '#403e3d', 
  themeDarker: '#323130', 
  neutralLighterAlt: '#f8f8f8', 
  neutralLighter: '#f4f4f4', 
  neutralLight: '#eaeaea', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralTertiaryAlt: '#c8c8c8', 
  neutralTertiary: '#a6a6a6', 
  neutralSecondaryAlt: '#767676', 
  neutralSecondary: '#666666', 
  neutralPrimary: '#333', 
  neutralPrimaryAlt: '#3c3c3c', 
  neutralDark: '#212121', 
  black: '#000000', 
  white: '#fff', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#0078d4'
}
```

## Periwinkle theme

The following table shows the color palette used by the Periwinkle theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #383966     | black: #000000              |
| themeDark: #3D3E78       | neutralDark: #201f1e        |
| themeDarkAlt: #444791    | neutralPrimary: #323130     |
| themePrimary: #5B5FC7    | neutralPrimaryAlt: #3b3a39  |
|                          | neutralSecondary: #605e5c   |
|                          | neutralTertiary: #a19f9d    |
| themeSecondary: #7579EB  | neutralTertiaryAlt: #c8c6c4 |
| themeTertiary: #7F85F5   | neutralLight: #edebe9       |
| themeLight: #AAB1FA      | neutralLighter: #f3f2f1     |
| themeLighter: #B6BCFA    | neutralLighterAlt: #faf9f8  |
| themeLighterAlt: #C5CBFA | white: #fff                 |

The following code shows how to define a dictionary in PowerShell for the Periwinkle theme's color palette.

```powershell
{ 
  themeDarker: '#383966', 
  themeDark: '#3D3E78', 
  themeDarkAlt: '#444791', 
  themePrimary: '#5B5FC7', 
  themeSecondary: '#7579EB', 
  themeTertiary: '#7F85F5', 
  themeLight: '#AAB1FA', 
  themeLighter: '#B6BCFA', 
  themeLighterAlt: '#C5CBFA', 
  black: '#000000', 
  neutralDark: '#201f1e', 
  neutralPrimary: '#323130', 
  neutralPrimaryAlt: '#3b3a39', 
  neutralSecondary: '#605e5c', 
  neutralTertiary: '#a19f9d', 
  neutralTertiaryAlt: '#c8c6c4', 
  neutralLight: '#edebe9', 
  neutralLighter: '#f3f2f1', 
  neutralLighterAlt: '#faf9f8', 
  white: '#fff', 
  neutralQuaternaryAlt: '#dadada', 
  neutralQuaternary: '#d0d0d0', 
  neutralSecondaryAlt: '#767676', 
  primaryBackground: '#fff', 
  primaryText: '#333',
  accent: '#5B5FC7'
}
```


## Dark Yellow theme

The following table shows the color palette used by the Dark Yellow theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #fff171     | black: #f8f8f8              |
| themeDark: #ffed4b       | neutralDark: #f4f4f4        |
| themeDarkAlt: #ffe817    | neutralPrimary: #ffffff     |
| themePrimary: #fce100    | neutralPrimaryAlt: #eaeaea  |
|                          | neutralSecondary: #dadada   |
|                          | neutralTertiary: #c8c8c8    |
| themeSecondary: #e3cc00  | neutralTertiaryAlt: #6d6d6d |
| themeTertiary: #6a5f00   | neutralLight: #3f3f3f       |
| themeLight: #322d00      | neutralLighter: #313131     |
| themeLighter: #191700    | neutralLighterAlt: #282828  |
| themeLighterAlt: #0d0b00 | white: #1f1f1f              |

The following code shows how to define a dictionary in PowerShell for the Dark Yellow theme's color palette.

```powershell
{ 
  themePrimary: '#fce100', 
  themeLighterAlt: '#0d0b00', 
  themeLighter: '#191700', 
  themeLight: '#322d00', 
  themeTertiary: '#6a5f00', 
  themeSecondary: '#e3cc00', 
  themeDarkAlt: '#ffe817', 
  themeDark: '#ffed4b', 
  themeDarker: '#fff171', 
  neutralLighterAlt: '#282828', 
  neutralLighter: '#313131', 
  neutralLight: '#3f3f3f', 
  neutralQuaternaryAlt: '#484848', 
  neutralQuaternary: '#4f4f4f', 
  neutralTertiaryAlt: '#6d6d6d', 
  neutralTertiary: '#c8c8c8', 
  neutralSecondaryAlt: '#d0d0d0', 
  neutralSecondary: '#dadada', 
  neutralPrimaryAlt: '#eaeaea', 
  neutralPrimary: '#ffffff', 
  neutralDark: '#f4f4f4', 
  black: '#f8f8f8', 
  white: '#1f1f1f', 
  primaryBackground: '#1f1f1f', 
  primaryText: '#ffffff', 
  error: '#ff5f5f',
  accent: '#ffc83d'
}
```

## Dark Blue theme

The following table shows the color palette used by the Dark Blue theme.

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #6cdfff     | black: #f8f8f8              |
| themeDark: #44d6ff       | neutralDark: #f4f4f4        |
| themeDarkAlt: #0ecbff    | neutralPrimary: #ffffff     |
| themePrimary: #00bcf2    | neutralPrimaryAlt: #eaeaea  |
|                          | neutralSecondary: #dadada   |
|                          | neutralTertiary: #c8c8c8    |
| themeSecondary: #00abda  | neutralTertiaryAlt: #646e8a |
| themeTertiary: #005066   | neutralLight: #404759       |
| themeLight: #002630      | neutralLighter: #353a49     |
| themeLighter: #001318    | neutralLighterAlt: #2e3340  |
| themeLighterAlt: #00090c | white: #262a35              |

The following code shows how to define a dictionary in PowerShell for the Dark Blue theme's color palette.

```powershell
{ 
  themePrimary: '#00bcf2', 
  themeLighterAlt: '#00090c', 
  themeLighter: '#001318', 
  themeLight: '#002630', 
  themeTertiary: '#005066', 
  themeSecondary: '#00abda', 
  themeDarkAlt: '#0ecbff', 
  themeDark: '#44d6ff', 
  themeDarker: '#6cdfff', 
  neutralLighterAlt: '#2e3340', 
  neutralLighter: '#353a49', 
  neutralLight: '#404759', 
  neutralQuaternaryAlt: '#474e62', 
  neutralQuaternary: '#4c546a', 
  neutralTertiaryAlt: '#646e8a', 
  neutralTertiary: '#c8c8c8', 
  neutralSecondaryAlt: '#d0d0d0', 
  neutralSecondary: '#dadada', 
  neutralPrimaryAlt: '#eaeaea', 
  neutralPrimary: '#ffffff', 
  neutralDark: '#f4f4f4', 
  black: '#f8f8f8', 
  white: '#262a35', 
  primaryBackground: '#262a35', 
  primaryText: '#ffffff',
  error: '#ff5f5f',
  accent: '#3a96dd'
}
```

## See also

- [SharePoint site theming overview](sharepoint-site-theming-overview.md)
- [SharePoint site theming: PowerShell cmdlets](sharepoint-site-theming-powershell.md)
- [SharePoint site theming: CSOM API](sharepoint-site-theming-csom.md)
- [SharePoint site theming: REST API](sharepoint-site-theming-rest-api.md)
