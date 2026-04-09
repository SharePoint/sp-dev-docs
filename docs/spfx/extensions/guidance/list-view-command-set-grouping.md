---
title: Grouping support with ListView Command Set extension
description: Use the group element in a ListView Command Set manifest to build a two-level hierarchy of commands in the SPFx list and library toolbar.
ms.date: 03/19/2026
author: VesaJuvonen
ms.author: vesaj
ms.topic: concept-article
ms.service: sharepoint
ms.localizationpriority: medium
---

# Grouping support with ListView Command Set extension

Starting from the [SharePoint Framework v1.23](../../release-1.23.md), [ListView Command Sets](../get-started/building-simple-cmdset-with-dialog-api.md) also support grouping. You can use `group` element and cross item associations in the ListView Command Set manifest to build a hierarchy of commands that are then grouped in the list and library toolbar and context menu.

[!INCLUDE [spfx-prerelease-related](../../../../includes/snippets/spfx-prerelease-related.md)]

![ListView Command Set showing two-level grouping in the list toolbar](../../../images/123-release/list-view-cmdset-grouping.png)

Notice that you can only have two levels of grouping as shown in the picture and in the following sample.

Here's an example extension manifest that uses `group` element and type to define the associations and grouping between the commands.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/command-set-extension-manifest.schema.json",

  "id": "5be38d1c-597f-436e-9d1b-c019b3a1a9ed",
  "alias": "GroupingCommandSet",
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
    "GROUP_1": {
      "title": { "default": "Group One" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1920 640q27 0 45 19t19 45v1152q0 26-19 45t-45 19H128q-26 0-45-19t-19-45V384q0-26 19-45t45-19h768l256 320h768z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "group"
    },
    "GROUP_2": {
      "title": { "default": "Group Two" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1152 0l896 896-896 1152L0 896 896 0h256zm0 128H960L128 896l1024 1024 832-1024L1152 128zm-128 640q0 53-37 90t-91 38-90-38-38-90 38-91 90-37 91 37 37 91z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "group"
    },
    "GROUP_2_1": {
      "title": { "default": "Sub group in Group Two" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M128 384h768l256 256h640l-256-256H896L640 128H128Q75 128 37 165T0 256v1408q0 53 37 91t91 38h1664q53 0 91-38t37-91V640H832L576 384H128zm1664 384v896H256l256-896h1280z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "group",
      "group": "GROUP_2"
    },
    "COMMAND_1": {
      "title": { "default": "Command One" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1024 0q141 0 272 37t240 104 207 160 160 208 103 239 38 272q0 141-37 272t-104 240-160 207-208 160-239 103-272 38q-141 0-272-37t-240-104-207-160-160-208-103-239-38-272q0-141 37-272t104-240 160-207 208-160T752 37t272-37zm128 576H896v384H512v256h384v384h256v-384h384V960h-384V576z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "command",
      "group": "GROUP_1"
    },
    "COMMAND_2": {
      "title": { "default": "Command Two" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1664 192l192 192-192 192-192-192 192-192zm-128 320l192 192-960 960H576v-192l960-960zm-960 1088v128H128V128h768v128H256v1344h320z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "command",
      "group": "GROUP_2"
    },
    "COMMAND_3": {
      "title": { "default": "Command Three" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M768 256h512v-128H768v128zm-256 0V64q0-27 19-45t45-19h768q27 0 45 19t19 45v192h384v128H128V256h384zM256 512h1536v1408q0 53-37 91t-91 37H384q-53 0-91-37t-37-91V512zm128 128v1280q0 27 19 45t45 19h1152q27 0 45-19t19-45V640H384zm256 256h128v896H640V896zm384 0h128v896h-128V896zm384 0h128v896h-128V896z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "command",
      "group": "GROUP_2_1"
    },
    "COMMAND_4": {
      "title": { "default": "Command Four" },
      "iconImageUrl": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'%3E%3Cpath d='M1408 0l640 640-640 640V896q-159 13-289 78t-230 166-168 228-104 275q-4 20-8 40t-7 40q-59-167-88-345t-12-357q22-239 127-447t279-362T1408 128V0z' fill='%23333333'%3E%3C/path%3E%3C/svg%3E",
      "type": "command",
      "group": "GROUP_2_1"
    }
  }
}
```

## See also

- [Build your first ListView Command Set extension](../get-started/building-simple-cmdset-with-dialog-api.md)
- [Migrate from UI extensions to ListView Command Sets](../../../sp-add-ins-modernize/from-ui-extensions-to-listview-command-sets.md)
- [Overview of SharePoint Framework Extensions](../overview-extensions.md)
