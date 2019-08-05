---
title: Configure extension icon in SharePoint Framework (SPFx) Extensions
description: Options for configuring the icon for your commands in SharePoint Framework (SPFx) Extensions.
ms.date: 01/11/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Configure extension icon

Selecting an icon that illustrates the purpose of your custom command in SharePoint Framework makes it easier for users to find your command among other options visible in the toolbar or in the context menu. Specifying an icon for a command is optional. If you don't specify an icon, only the command title is displayed in the command bar.

SharePoint Framework supports building the following types of extensions:

- Application Customizer
- Field Customizer
- Command Set

The Command Set is the only type of SharePoint Framework Extension for which you can configure icons.

When deploying Command Sets, you can choose whether their commands should be visible on:

- The command bar (`location: ClientSideExtension.ListViewCommandSet.CommandBar`)

- The context menu (`location: ClientSideExtension.ListViewCommandSet.ContextMenu`)

- Both (`location: ClientSideExtension.ListViewCommandSet`)

Icons defined for the different commands are displayed only for commands displayed in the command bar.

SharePoint Framework offers you two ways to define the icon for your extension:

- Use an external icon image
- Use a base64-encoded image

## Use an external icon image

When building SharePoint Framework command sets, you can specify an icon for each command by providing an absolute URL pointing to the icon image in the extension manifest, in the **iconImageUrl** property.

```json
{
  "$schema": "https://dev.office.com/json-schemas/spfx/command-set-extension-manifest.schema.json",

  "id": "6cdfbff6-714f-4c26-a60c-0b18afe60837",
  "alias": "WeatherCommandSet",
  "componentType": "Extension",
  "extensionType": "ListViewCommandSet",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
  "requiresCustomScript": false,

  "items": {
    "WEATHER": {
      "title": { "default": "Weather" },
      "iconImageUrl": "https://localhost:4321/temp/sun.png",
      "type": "command"
    }
  }
}
```

<br/>

The command icon displayed in the command bar is 16x16 px. If your image is bigger, it is sized proportionally to match these dimensions.

![Custom image used as the command icon in the command bar](../../../images/extensionicon_commandbar_imagepng.png)

<br/>

While using custom images gives you flexibility to choose an icon for your command, it requires you to deploy them along with your other extension assets. Additionally, your image might lose quality when displayed in higher DPI or specific accessibility settings. To avoid quality loss, you can use vector-based SVG images, which are also supported by the SharePoint Framework.

## Use a base64-encoded image

When using a custom image, rather than specifying an absolute URL to the image file hosted together with other extension assets, you can have your image base64-encoded and use the base64 string instead of the URL.

A number of services are available online that you can use to base64-encode your image, such as [Convert your images to Base64](https://www.base64-image.de).

After encoding the image, copy the base64 string and use it as the value for the **iconImageUrl** property in the web part manifest.

```json
{
  "$schema": "https://dev.office.com/json-schemas/spfx/command-set-extension-manifest.schema.json",

  "id": "6cdfbff6-714f-4c26-a60c-0b18afe60837",
  "alias": "WeatherCommandSet",
  "componentType": "Extension",
  "extensionType": "ListViewCommandSet",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
  "requiresCustomScript": false,

  "items": {
    "WEATHER": {
      "title": { "default": "Weather" },
      "iconImageUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IB2cksfwAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAB/hUlEQVR42u29ebwkWVUn/j03Ipe31PZqr+ruqu7q6pXuZlcRRgUVBRnUn0rpMAJuTDeLog4u48bMiDoMtCA0MjAwOqil4oI6qCO2oIiDTQ...",
      "type": "command"
    }
  }
}
```

<br/>

Base64 encoding works for both bitmap images, such as PNG, as well as vector SVG images. The big benefit of using base64-encoded images is that you don't need to deploy the web part icon image separately.

![Base64 encoded image displayed as web part icon in the toolbox](../../../images/extensionicon_commandbar_base64.png)

## See also

- [Overview of SharePoint Framework Extensions](../overview-extensions.md)
