---
title: Hide a web part from the toolbox
description: How to hide a web part from showing up in the web part toolbox on a modern page
ms.date: 06/16/2020
ms.localizationpriority: high
---

# Hide a web part from the toolbox

For scenarios where you automatically instantiate a custom web part on a modern page, you might want the web part not to be manually available for end users. This could, for example,  be a status web part on a home page.

## Configure hiding the web part from the toolbox

By default a SharePoint Framework client-side web part will be displayed in the web part toolbox when a user edits a page. To allow hiding the web part from the toolbox, you add set the `hiddenFromToolbox` property to `true` in the web part manifest.

> [!NOTE]
> The component manifest is can be found in the following location in a project: **./src/webparts/{webpart-folder-name}/{webpart-name}.manifest.json**.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json",
  "id": "34f6d7f2-262f-460a-8b65-152d784127cb",
  "alias": "HelloWorldWebPart",
  "componentType": "WebPart",

  "version": "*",
  "manifestVersion": 2,

  "requiresCustomScript": false,
  "hiddenFromToolbox": true,

  "preconfiguredEntries": [{
    "groupId": "5c03119e-3074-46fd-976b-c60198311f70", // Other
    "group": { "default": "Other" },
    "title": { "default": "HelloWorld" },
    "description": { "default": "HelloWorld description" },
    "officeFabricIconFontName": "Page",
    "properties": {
      "description": "HelloWorld"
    }
  }]
}
```

With the `hiddenFromToolbox` setting enabled, when you edit a page, the web part won't be listed in the toolbox.
