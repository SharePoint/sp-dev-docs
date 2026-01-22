---
title: SharePoint site theming - JSON schema
description: The new SharePoint site theming features use a JSON schema to store color settings and other information about each theme.
ms.date: 01/21/2026
ms.localizationpriority: high
---

# SharePoint site theming: JSON schema

The new [SharePoint site theming](sharepoint-site-theming-overview.md) features use a JSON schema to store color settings and other information about each theme. Only the new theme format supports the secondaryColor and displayMode fields.  Theme settings are stored in a JSON object that contains the following keys:

- **isInverted**: This value should be false for light themes and true for dark themes; it controls whether SharePoint uses dark or light theme colors to render text on colored backgrounds.
- **backgroundImageUri**: The URI of an optional background image for the theme (value can be blank if no background image).
- **palette**: A nested JSON object that stores the RGB color values for the theme.
When using the new theme format, the values of `themePrimary` and `backgroundColor` are used as the first color pair in the palette. The `backgroundColor` setting is only used in the new theme format. The palette object includes the following keys:
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
  - backgroundColor

The colors in the `palette` element are specified as 6-digit or 3-digit hexadecimal RGB string values.

  Another option is to use the [Theme Generator tool](https://aka.ms/themedesigner) to build a custom theme palette. It provides an interactive UI for selecting theme colors, and automatically generates the JSON, SASS, and PowerShell definitions for your custom theme.

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
> - "backgroundColor"
> 
> These can be manually added to your generated definition before uploading to the tenant.

![Theme Generator tool](../../images/theme-generator-tool.png)
- **secondaryColors**: An optional section available only in the new theme format of the SharePoint site theme schema. It defines additional accent and background color pairs that complement the main theme palette. The first color pair comes from the palette. Currently, only the light theme is supported. 
Here is an example of secondaryColors, it is the set of combination of themePrimary and backgroundColor. The colors in the `secondaryColors` element are specified as 6-digit or 3-digit hexadecimal RGB string values.

```json
  "secondaryColors": {
    "light": [
      { "themePrimary": "#FFFFFF", "backgroundColor": "#03787C" },
      { "themePrimary": "#E3FFFD", "backgroundColor": "#03787C" },
      { "themePrimary": "#03787C", "backgroundColor": "#E3FFFD" },
      { "themePrimary": "#FFF9E3", "backgroundColor": "#03787C" },
      { "themePrimary": "#03787C", "backgroundColor": "#FFF9E3" },
      { "themePrimary": "#03787C", "backgroundColor": "#F5F5F5" },
      { "themePrimary": "#242424", "backgroundColor": "#F5F5F5" },
      { "themePrimary": "#155473", "backgroundColor": "#FFFFFF" },
      { "themePrimary": "#FFFFFF", "backgroundColor": "#155473" },
      { "themePrimary": "#155473", "backgroundColor": "#E3FFFD" },
      { "themePrimary": "#E3FFFD", "backgroundColor": "#155473" },
      { "themePrimary": "#FFF9E3", "backgroundColor": "#155473" },
      { "themePrimary": "#155473", "backgroundColor": "#FFF9E3" }
    ],
    "dark": []
  }
```

- **displayMode**: The visual mode that the theme palette corresponds to. Currently, only `light` mode is supported.
- **themeSchemaVersion**: The theme schema version. Use `2.0.0` for the latest theme format. Use `1.0.0` for legacy theme format.
- **version**: The theme version. Use `2.0.0` for the latest theme format. Use `1.0.0` for legacy theme format.

The following is an example of a JSON object that defines a theme in new theme format.

```json
{
  "isInverted": true,
  "palette": {    
    "themeDarker": "#014446",
    "themeDark": "#025C5F",
    "themeDarkAlt": "#026D70",
    "themePrimary": "#03787C",
    "themeSecondary": "#13898D",
    "themeTertiary": "#49AEB1",
    "themeLight": "#98D6D8",
    "themeLighter": "#C5E9EA",
    "themeLighterAlt": "#F0F9FA",
    "neutralDark": "#201F1E",
    "neutralPrimary": "#323130",
    "neutralPrimaryAlt": "#3B3A39",
    "neutralSecondary": "#605E5C",
    "neutralTertiary": "#A19F9D",
    "neutralTertiaryAlt": "#C8C8C8",
    "neutralLight": "#EAEAEA",
    "neutralLighter": "#F4F4F4",
    "neutralLighterAlt": "#F8F8F8",
    "neutralQuaternaryAlt": "#DADADA",
    "neutralQuaternary": "#D0D0D0",
    "black": "#000000",
    "white": "#FFFFFF",
    "backgroundColor": "#FFFFFF"
  },
  "secondaryColors": {
    "light": [
      { "themePrimary": "#FFFFFF", "backgroundColor": "#03787C" },
      { "themePrimary": "#E3FFFD", "backgroundColor": "#03787C" },
      { "themePrimary": "#03787C", "backgroundColor": "#E3FFFD" },
      { "themePrimary": "#FFF9E3", "backgroundColor": "#03787C" },
      { "themePrimary": "#03787C", "backgroundColor": "#FFF9E3" },
      { "themePrimary": "#03787C", "backgroundColor": "#F5F5F5" },
      { "themePrimary": "#242424", "backgroundColor": "#F5F5F5" },
      { "themePrimary": "#155473", "backgroundColor": "#FFFFFF" },
      { "themePrimary": "#FFFFFF", "backgroundColor": "#155473" },
      { "themePrimary": "#155473", "backgroundColor": "#E3FFFD" },
      { "themePrimary": "#E3FFFD", "backgroundColor": "#155473" },
      { "themePrimary": "#FFF9E3", "backgroundColor": "#155473" },
      { "themePrimary": "#155473", "backgroundColor": "#FFF9E3" }
    ],
    "dark": []
  },
  "displayMode": "light",
  "themeSchemaVersion": "2.0.0",
  "version": "2.0.0"
}
```


The following is an example of a JSON object that defines a theme in legacy theme format.

```json
{
  "isInverted": true,
  "palette": {    
    "themeDarker": "#014446",
    "themeDark": "#025C5F",
    "themeDarkAlt": "#026D70",
    "themePrimary": "#03787C",
    "themeSecondary": "#13898D",
    "themeTertiary": "#49AEB1",
    "themeLight": "#98D6D8",
    "themeLighter": "#C5E9EA",
    "themeLighterAlt": "#F0F9FA",
    "neutralDark": "#201F1E",
    "neutralPrimary": "#323130",
    "neutralPrimaryAlt": "#3B3A39",
    "neutralSecondary": "#605E5C",
    "neutralTertiary": "#A19F9D",
    "neutralTertiaryAlt": "#C8C8C8",
    "neutralLight": "#EAEAEA",
    "neutralLighter": "#F4F4F4",
    "neutralLighterAlt": "#F8F8F8",
    "neutralQuaternaryAlt": "#DADADA",
    "neutralQuaternary": "#D0D0D0",
    "black": "#000000",
    "white": "#FFFFFF"
  },
  "themeSchemaVersion": "1.0.0",
  "version": "1.0.0"
}
```


Besides the theme store schema, we also offer a simplified format for creating themes.
SharePoint Framework provides ten built‑in themes—eight for light backgrounds, and two for dark backgrounds. If you want to build a custom theme, a good starting point is to pick one of these built‑in themes and adjust the values as needed. You can then use the [Add‑SPOTheme](/powershell/module/microsoft.online.sharepoint.powershell/add-spotheme) PowerShell cmdlet to create your custom theme with this simplified structure.

## Teal theme

Use the following PowerShell hashtable to define the color pairs for the Teal theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#03787C"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#03787C" }
    @{ "accentColor" = "#E3FFFD"; "backgroundColor" = "#03787C" }
    @{ "accentColor" = "#03787C"; "backgroundColor" = "#E3FFFD" }
    @{ "accentColor" = "#FFF9E3"; "backgroundColor" = "#03787C" }
    @{ "accentColor" = "#03787C"; "backgroundColor" = "#FFF9E3" }
    @{ "accentColor" = "#03787C"; "backgroundColor" = "#F5F5F5" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#F5F5F5" }
    @{ "accentColor" = "#155473"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#155473" }
    @{ "accentColor" = "#155473"; "backgroundColor" = "#E3FFFD" }
    @{ "accentColor" = "#E3FFFD"; "backgroundColor" = "#155473" }
    @{ "accentColor" = "#FFF9E3"; "backgroundColor" = "#155473" }
    @{ "accentColor" = "#155473"; "backgroundColor" = "#FFF9E3" }
  )
}
```

## Blue theme

Use the following PowerShell hashtable to define the color pairs for the Blue theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#010B2F"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#010B2F" }
    @{ "accentColor" = "#010B2F"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#010B2F" }
    @{ "accentColor" = "#010B2F"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#010B2F" }
  )
}
```

## Orange theme

Use the following PowerShell hashtable to define the color pairs for the Orange theme.

```powershell

$colorPairs = @{
  light = @(
    @{ "accentColor" = "#A74411"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#A74411" }
    @{ "accentColor" = "#A74411"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#A74411" }
    @{ "accentColor" = "#A74411"; "backgroundColor" = "#FFECB6" }
    @{ "accentColor" = "#FFECB6"; "backgroundColor" = "#A74411" }
    @{ "accentColor" = "#FF9557"; "backgroundColor" = "#242424" }
    @{ "accentColor" = "#A74411"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
  )
}

```

## Red theme

Use the following PowerShell hashtable to define the color pairs for the Red theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#AD3A39"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#AD3A39" }
    @{ "accentColor" = "#AD3A39"; "backgroundColor" = "#FFE0E2" }
    @{ "accentColor" = "#FFE0E2"; "backgroundColor" = "#AD3A39" }
    @{ "accentColor" = "#AD3A39"; "backgroundColor" = "#FFECB6" }
    @{ "accentColor" = "#FFECB6"; "backgroundColor" = "#AD3A39" }
    @{ "accentColor" = "#AD3A39"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#590408"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#590408" }
    @{ "accentColor" = "#590408"; "backgroundColor" = "#FFE0E2" }
    @{ "accentColor" = "#FFE0E2"; "backgroundColor" = "#590408" }
    @{ "accentColor" = "#590408"; "backgroundColor" = "#FFECB6" }
    @{ "accentColor" = "#FFECB6"; "backgroundColor" = "#590408" }
  )
}
```

## Purple theme

Use the following PowerShell hashtable to define the color pairs for the Purple theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#72559B"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#72559B" }
    @{ "accentColor" = "#72559B"; "backgroundColor" = "#EEE2FF" }
    @{ "accentColor" = "#EEE2FF"; "backgroundColor" = "#72559B" }
    @{ "accentColor" = "#72559B"; "backgroundColor" = "#FFECB6" }
    @{ "accentColor" = "#FFECB6"; "backgroundColor" = "#72559B" }
    @{ "accentColor" = "#72559B"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#382D6F"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#382D6F" }
    @{ "accentColor" = "#382D6F"; "backgroundColor" = "#EEE2FF" }
    @{ "accentColor" = "#EEE2FF"; "backgroundColor" = "#382D6F" }
    @{ "accentColor" = "#382D6F"; "backgroundColor" = "#FFECB6" }
    @{ "accentColor" = "#FFECB6"; "backgroundColor" = "#382D6F" }
  )
}
```

## Green theme

Use the following PowerShell hashtable to define the color pairs for the Green theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#437509"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#437509" }
    @{ "accentColor" = "#437509"; "backgroundColor" = "#C2FFFC" }
    @{ "accentColor" = "#C2FFFC"; "backgroundColor" = "#437509" }
    @{ "accentColor" = "#437509"; "backgroundColor" = "#CCFF4D" }
    @{ "accentColor" = "#CCFF4D"; "backgroundColor" = "#437509" }
    @{ "accentColor" = "#437509"; "backgroundColor" = "#F5F5F5" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#F5F5F5" }
    @{ "accentColor" = "#2C5A43"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#2C5A43" }
    @{ "accentColor" = "#2C5A43"; "backgroundColor" = "#C2FFFC" }
    @{ "accentColor" = "#C2FFFC"; "backgroundColor" = "#2C5A43" }
    @{ "accentColor" = "#2C5A43"; "backgroundColor" = "#CCFF4D" }
    @{ "accentColor" = "#CCFF4D"; "backgroundColor" = "#2C5A43" }
  )
}
```

## Periwinkle theme

Use the following PowerShell hashtable to define the color pairs for the Periwinkle theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#5B5D9B"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#5B5D9B" }
    @{ "accentColor" = "#5B5D9B"; "backgroundColor" = "#DEE2FC" }
    @{ "accentColor" = "#DEE2FC"; "backgroundColor" = "#5B5D9B" }
    @{ "accentColor" = "#5B5D9B"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#5B5D9B" }
    @{ "accentColor" = "#5B5D9B"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#382D6F"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#382D6F" }
    @{ "accentColor" = "#382D6F"; "backgroundColor" = "#DEE2FC" }
    @{ "accentColor" = "#DEE2FC"; "backgroundColor" = "#382D6F" }
    @{ "accentColor" = "#382D6F"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#382D6F" }
  )
}
```

## Cobalt theme

Use the following PowerShell hashtable to define the color pairs for the Cobalt theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#355DCD"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#355DCD" }
    @{ "accentColor" = "#355DCD"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#355DCD" }
    @{ "accentColor" = "#355DCD"; "backgroundColor" = "#B0F4FF" }
    @{ "accentColor" = "#B0F4FF"; "backgroundColor" = "#355DCD" }
    @{ "accentColor" = "#355DCD"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#1A1F50"; "backgroundColor" = "#FFFFFF" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#1A1F50" }
    @{ "accentColor" = "#1A1F50"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#1A1F50" }
    @{ "accentColor" = "#1A1F50"; "backgroundColor" = "#B0F4FF" }
    @{ "accentColor" = "#B0F4FF"; "backgroundColor" = "#1A1F50" }
  )
}
```


## Dark Teal theme

Use the following PowerShell hashtable to define the color pairs for the Dark Teal theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#51AEB2"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#03787C" }
    @{ "accentColor" = "#E3FFFD"; "backgroundColor" = "#03787C" }
    @{ "accentColor" = "#03787C"; "backgroundColor" = "#E3FFFD" }
    @{ "accentColor" = "#FFF9E3"; "backgroundColor" = "#03787C" }
    @{ "accentColor" = "#03787C"; "backgroundColor" = "#FFF9E3" }
    @{ "accentColor" = "#FFF9E3"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#F5F5F5"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#E3FFFD"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#155473" }
    @{ "accentColor" = "#155473"; "backgroundColor" = "#E3FFFD" }
    @{ "accentColor" = "#E3FFFD"; "backgroundColor" = "#155473" }
    @{ "accentColor" = "#FFF9E3"; "backgroundColor" = "#155473" }
    @{ "accentColor" = "#155473"; "backgroundColor" = "#FFF9E3" }
  )
}
```

## Dark Blue theme

Use the following PowerShell hashtable to define the color pairs for the Dark Blue theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "accentColor" = "#529FF1"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#F5F5F5"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#292929" }
    @{ "accentColor" = "#FFFFFF"; "backgroundColor" = "#010B2F" }
    @{ "accentColor" = "#010B2F"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#010B2F" }
    @{ "accentColor" = "#010B2F"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#010B2F" }
  )
}
```

## See also

- [SharePoint site theming overview](sharepoint-site-theming-overview.md)
- [SharePoint site theming: PowerShell cmdlets](sharepoint-site-theming-powershell.md)
- [SharePoint site theming: CSOM API](sharepoint-site-theming-csom.md)
- [SharePoint site theming: REST API](sharepoint-site-theming-rest-api.md)
