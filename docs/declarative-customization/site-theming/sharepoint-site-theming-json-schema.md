---
title: SharePoint site theming - JSON schema
description: The new SharePoint site theming features use a JSON schema to store color settings and other information about each theme.
ms.date: 01/21/2026
ms.localizationpriority: high
---

# SharePoint site theming: JSON schema

The new [SharePoint site theming](sharepoint-site-theming-overview.md) features use a JSON schema to store color settings and other information about each theme. Theme settings are stored in a JSON object that contains the following keys:

- **name**: The name of the theme, which appears in the theme picker UI and is also used by administrators and developers to refer to the theme in PowerShell cmdlets or calls to the SharePoint REST API.
- **colorPairs**: Color pairs are the foundation of your theme, enabling multiple brand colors to reflect your organization’s brand identity and personality. Each theme supports up to 16 color pairs, with each pair consisting of an accent color and a background color. To ensure readability, the text color is automatically set to black or white based on the contrast ratio of the background color.
The colors in the colorPairs element are specified as 6-digit or 3-digit hexadecimal RGB string values.
The following is an example of a JSON object that defines a colorPairs.

```json
{
  "light": [
    { "accentColor": "#03787C", "backgroundColor": "#FFFFFF" },
    { "accentColor": "#FFFFFF", "backgroundColor": "#03787C" },
    { "accentColor": "#E3FFFD", "backgroundColor": "#03787C" },
    { "accentColor": "#03787C", "backgroundColor": "#E3FFFD" },
    { "accentColor": "#FFF9E3", "backgroundColor": "#03787C" },
    { "accentColor": "#03787C", "backgroundColor": "#FFF9E3" },
    { "accentColor": "#03787C", "backgroundColor": "#F5F5F5" },
    { "accentColor": "#242424", "backgroundColor": "#F5F5F5" },
    { "accentColor": "#155473", "backgroundColor": "#FFFFFF" },
    { "accentColor": "#FFFFFF", "backgroundColor": "#155473" },
    { "accentColor": "#155473", "backgroundColor": "#E3FFFD" },
    { "accentColor": "#E3FFFD", "backgroundColor": "#155473" },
    { "accentColor": "#FFF9E3", "backgroundColor": "#155473" },
    { "accentColor": "#155473", "backgroundColor": "#FFF9E3" }
  ]
}
```


The SharePoint Framework includes ten built-in themes: eight on light backgrounds, and two on dark backgrounds. You might find it useful to create a custom theme by starting from one of the built-in themes and adjusting it to suit your needs.

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
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#ffffff" }
    @{ "accentColor" = "#ffffff"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#D7EEFF" }
    @{ "accentColor" = "#D7EEFF"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#B6FEC3" }
    @{ "accentColor" = "#B6FEC3"; "backgroundColor" = "#1267B5" }
    @{ "accentColor" = "#1267B5"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "accentColor" = "#010B2F"; "backgroundColor" = "#ffffff" }
    @{ "accentColor" = "#ffffff"; "backgroundColor" = "#010B2F" }
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
    @{ "themePrimary" = "#A74411"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#A74411" }
    @{ "themePrimary" = "#A74411"; "backgroundColor" = "#D7EEFF" }
    @{ "themePrimary" = "#D7EEFF"; "backgroundColor" = "#A74411" }
    @{ "themePrimary" = "#A74411"; "backgroundColor" = "#FFECB6" }
    @{ "themePrimary" = "#FFECB6"; "backgroundColor" = "#A74411" }
    @{ "themePrimary" = "#FF9557"; "backgroundColor" = "#242424" }
    @{ "themePrimary" = "#A74411"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#242424"; "backgroundColor" = "#EBEBEB" }
  )
}

```

## Red theme

Use the following PowerShell hashtable to define the color pairs for the Red theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#AD3A39"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#AD3A39" }
    @{ "themePrimary" = "#AD3A39"; "backgroundColor" = "#FFE0E2" }
    @{ "themePrimary" = "#FFE0E2"; "backgroundColor" = "#AD3A39" }
    @{ "themePrimary" = "#AD3A39"; "backgroundColor" = "#FFECB6" }
    @{ "themePrimary" = "#FFECB6"; "backgroundColor" = "#AD3A39" }
    @{ "themePrimary" = "#AD3A39"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#590408"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#590408" }
    @{ "themePrimary" = "#590408"; "backgroundColor" = "#FFE0E2" }
    @{ "themePrimary" = "#FFE0E2"; "backgroundColor" = "#590408" }
    @{ "themePrimary" = "#590408"; "backgroundColor" = "#FFECB6" }
    @{ "themePrimary" = "#FFECB6"; "backgroundColor" = "#590408" }
  )
}
```

## Purple theme

Use the following PowerShell hashtable to define the color pairs for the Purple theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#72559B"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#72559B" }
    @{ "themePrimary" = "#72559B"; "backgroundColor" = "#EEE2FF" }
    @{ "themePrimary" = "#EEE2FF"; "backgroundColor" = "#72559B" }
    @{ "themePrimary" = "#72559B"; "backgroundColor" = "#FFECB6" }
    @{ "themePrimary" = "#FFECB6"; "backgroundColor" = "#72559B" }
    @{ "themePrimary" = "#72559B"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#382D6F"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#382D6F" }
    @{ "themePrimary" = "#382D6F"; "backgroundColor" = "#EEE2FF" }
    @{ "themePrimary" = "#EEE2FF"; "backgroundColor" = "#382D6F" }
    @{ "themePrimary" = "#382D6F"; "backgroundColor" = "#FFECB6" }
    @{ "themePrimary" = "#FFECB6"; "backgroundColor" = "#382D6F" }
  )
}
```

## Green theme

Use the following PowerShell hashtable to define the color pairs for the Green theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#437509"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#437509" }
    @{ "themePrimary" = "#437509"; "backgroundColor" = "#C2FFFC" }
    @{ "themePrimary" = "#C2FFFC"; "backgroundColor" = "#437509" }
    @{ "themePrimary" = "#437509"; "backgroundColor" = "#CCFF4D" }
    @{ "themePrimary" = "#CCFF4D"; "backgroundColor" = "#437509" }
    @{ "themePrimary" = "#437509"; "backgroundColor" = "#F5F5F5" }
    @{ "themePrimary" = "#242424"; "backgroundColor" = "#F5F5F5" }
    @{ "themePrimary" = "#2C5A43"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#2C5A43" }
    @{ "themePrimary" = "#2C5A43"; "backgroundColor" = "#C2FFFC" }
    @{ "themePrimary" = "#C2FFFC"; "backgroundColor" = "#2C5A43" }
    @{ "themePrimary" = "#2C5A43"; "backgroundColor" = "#CCFF4D" }
    @{ "themePrimary" = "#CCFF4D"; "backgroundColor" = "#2C5A43" }
  )
}
```

## Periwinkle theme

Use the following PowerShell hashtable to define the color pairs for the Periwinkle theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#5B5D9B"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#5B5D9B" }
    @{ "themePrimary" = "#5B5D9B"; "backgroundColor" = "#DEE2FC" }
    @{ "themePrimary" = "#DEE2FC"; "backgroundColor" = "#5B5D9B" }
    @{ "themePrimary" = "#5B5D9B"; "backgroundColor" = "#B6FEC3" }
    @{ "themePrimary" = "#B6FEC3"; "backgroundColor" = "#5B5D9B" }
    @{ "themePrimary" = "#5B5D9B"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#382D6F"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#382D6F" }
    @{ "themePrimary" = "#382D6F"; "backgroundColor" = "#DEE2FC" }
    @{ "themePrimary" = "#DEE2FC"; "backgroundColor" = "#382D6F" }
    @{ "themePrimary" = "#382D6F"; "backgroundColor" = "#B6FEC3" }
    @{ "themePrimary" = "#B6FEC3"; "backgroundColor" = "#382D6F" }
  )
}
```

## Cobalt theme

Use the following PowerShell hashtable to define the color pairs for the Cobalt theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#355DCD"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#355DCD" }
    @{ "themePrimary" = "#355DCD"; "backgroundColor" = "#D7EEFF" }
    @{ "themePrimary" = "#D7EEFF"; "backgroundColor" = "#355DCD" }
    @{ "themePrimary" = "#355DCD"; "backgroundColor" = "#B0F4FF" }
    @{ "themePrimary" = "#B0F4FF"; "backgroundColor" = "#355DCD" }
    @{ "themePrimary" = "#355DCD"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#242424"; "backgroundColor" = "#EBEBEB" }
    @{ "themePrimary" = "#1A1F50"; "backgroundColor" = "#ffffff" }
    @{ "themePrimary" = "#ffffff"; "backgroundColor" = "#1A1F50" }
    @{ "themePrimary" = "#1A1F50"; "backgroundColor" = "#D7EEFF" }
    @{ "themePrimary" = "#D7EEFF"; "backgroundColor" = "#1A1F50" }
    @{ "themePrimary" = "#1A1F50"; "backgroundColor" = "#B0F4FF" }
    @{ "themePrimary" = "#B0F4FF"; "backgroundColor" = "#1A1F50" }
  )
}
```


## Dark Teal theme

Use the following PowerShell hashtable to define the color pairs for the Dark Teal theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#51AEB2"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#FFFFFF"; "backgroundColor" = "#03787C" }
    @{ "themePrimary" = "#E3FFFD"; "backgroundColor" = "#03787C" }
    @{ "themePrimary" = "#03787C"; "backgroundColor" = "#E3FFFD" }
    @{ "themePrimary" = "#FFF9E3"; "backgroundColor" = "#03787C" }
    @{ "themePrimary" = "#03787C"; "backgroundColor" = "#FFF9E3" }
    @{ "themePrimary" = "#FFF9E3"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#F5F5F5"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#E3FFFD"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#FFFFFF"; "backgroundColor" = "#155473" }
    @{ "themePrimary" = "#155473"; "backgroundColor" = "#E3FFFD" }
    @{ "themePrimary" = "#E3FFFD"; "backgroundColor" = "#155473" }
    @{ "themePrimary" = "#FFF9E3"; "backgroundColor" = "#155473" }
    @{ "themePrimary" = "#155473"; "backgroundColor" = "#FFF9E3" }
  )
}
```

## Dark Blue theme

Use the following PowerShell hashtable to define the color pairs for the Dark Blue theme.

```powershell
$colorPairs = @{
  light = @(
    @{ "themePrimary" = "#529FF1"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#FFFFFF"; "backgroundColor" = "#1267B5" }
    @{ "themePrimary" = "#1267B5"; "backgroundColor" = "#D7EEFF" }
    @{ "themePrimary" = "#D7EEFF"; "backgroundColor" = "#1267B5" }
    @{ "themePrimary" = "#1267B5"; "backgroundColor" = "#B6FEC3" }
    @{ "themePrimary" = "#B6FEC3"; "backgroundColor" = "#1267B5" }
    @{ "themePrimary" = "#B6FEC3"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#F5F5F5"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#D7EEFF"; "backgroundColor" = "#292929" }
    @{ "themePrimary" = "#FFFFFF"; "backgroundColor" = "#010B2F" }
    @{ "themePrimary" = "#010B2F"; "backgroundColor" = "#D7EEFF" }
    @{ "themePrimary" = "#D7EEFF"; "backgroundColor" = "#010B2F" }
    @{ "themePrimary" = "#010B2F"; "backgroundColor" = "#B6FEC3" }
    @{ "themePrimary" = "#B6FEC3"; "backgroundColor" = "#010B2F" }
  )
}
```

## See also

- [SharePoint site theming overview](sharepoint-site-theming-overview.md)
- [SharePoint site theming: PowerShell cmdlets](sharepoint-site-theming-powershell.md)
- [SharePoint site theming: CSOM API](sharepoint-site-theming-csom.md)
- [SharePoint site theming: REST API](sharepoint-site-theming-rest-api.md)
