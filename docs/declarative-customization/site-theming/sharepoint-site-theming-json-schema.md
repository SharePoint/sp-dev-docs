---
title: SharePoint site theming - JSON schema
description: The new SharePoint site theming features use a JSON schema to store color settings and other information about each theme.
ms.date: 01/21/2026
ms.localizationpriority: high
---

# SharePoint site theming: JSON schema

The new [SharePoint site theming](sharepoint-site-theming-overview.md) features use a JSON schema to define color settings and other information about each theme. Each theme includes the following keys:

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
