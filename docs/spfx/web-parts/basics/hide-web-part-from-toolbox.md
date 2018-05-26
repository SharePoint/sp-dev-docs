---
title: Hide a web part from the toolbox
description: How to hide a web part from showing up in the web part toolbox on a modern page
ms.date: 05/23/2018
ms.prod: sharepoint
---

# Hide a web parts from the toolbox

For scenarios where you automatically instantiate a custom web part on a modern page, you might want the web part not to be manually available for end-users. This could for example be a status web part on a home page.

## Configure hiding the web part from the toolbox

By default a SharePoint Framework client-side web part will be displayed in the web part toolbox when a user edit a page. To allow hiding the web part from the toolbox you add set the `hiddenFromToolbox` property to `true` in the web part manifest.

```json
{
  "$schema": "https://dev.office.com/json-schemas/spfx/client-side-web-part-manifest.schema.json",
  "id": "34f6d7f2-262f-460a-8b65-152d784127cb",
  "alias": "HelloWorldWebPart",
  "componentType": "WebPart",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
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

With the `hiddenFromToolbox` setting enabled, when you edit a page, the web part will not be listed in the toolbox.