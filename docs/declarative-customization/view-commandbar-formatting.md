---
title: Command bar customization syntax reference
description: Command bar customization syntax reference
ms.date: 05/15/2025
ms.localizationpriority: high
---

# Command bar customization syntax reference

Command bar customization helps personalize a list to suit specific requirements. The JSON-based feature allows basic changes to the command bar, including modification of icon and/or text, hiding existing options, or repositioning commands.

## commandBarProps

Properties for Command bar customization. Valid in all types of layouts.

## commands

An array of JSON objects is used to specify the commands for customization.

## key

Mandatory property to uniquely identify a command in the Command bar. Valid keys include:

```javascript
'new'
'newFolder'
'newWordDocument'
'newExcelWorkbook'
'newPowerPointPresentation'
'newOneNoteNotebook'
'newFormsForExcel'
'newVisioDrawing'
'upload'
'uploadFile'
'uploadFolder'
'open'
'share'
'copyLink'
'download'
'rename'
'copyTo'
'moveTo'
'delete'
'edit'
'comment'
'editNewMenu'
'powerBI'
'powerBIVisualizeList'
'automate'
'automateCreateRule'
'automateManageRules'
'powerAutomate'
'powerAutomateCreateFlow'
'powerAutomateSeeFlows'
'powerAutomateConfigureFlows'
'aiBuilderCreate'
'aiBuilderGoto'
'aiBuilder'
'alertMe'
'newLink'
'integrate'
'manageAlert'
'powerApps'
'powerAppsCreateApp'
'powerAppsSeeAllApps'
'powerAppsCustomizeForms'
'viewDocumentUnderstandingModels'
'versionHistory'
'openInImmersiveReader'
'classifyAndExtract'
'checkOut'
'checkIn'
'undoCheckOut'
'properties'
'pinItem'
'exportExcel'
'exportCSV'
'export'
'editInGridView'
'exitGridView'
'sync'
'uploadTemplate'
'addTemplate'
'openInOfficeOnline'
'openInOfficeClient'
'addShortcut'
'pinToQuickAccess'
'unpinFromQuickAccess'
'manageForms'
'favoriteCommand'
'createCopilot'
```

## ⚠️ Recent updates to `commandBarCustomization` Keys

> Some keys in the commandBarCustomization schema have been updated. To ensure your custom formatter functions correctly, please update your existing JSON to reflect these new keys.
> 
> | Original Key | New Key |
> |--------------|-------------|
> | `new`        | `newComposite` (Document Library)|
> | `upload`     | `UploadCommand` |
> | `sync`       | `syncCommand` |
> | `addShortcut`| `addShortcutToOneDriveCommand` |
> | `pinToQuickAccess` | `PinToQuickAccessCommand` |
> | `pinItem` | `pinItemCommand` |
> | `properties` | `propertiesCommand` |
> | `versionHistory` | `versionHistoryCommand` (currently not working) |
>
> Additionally, the following new command keys are now available:
> - `stasherContextMenuCommand` (Add shortcut)
> - `stasherCommand.myFiles` (Add shortcut --> my Files)
> - `stasherCommand.otherLocations` (Add shortcut --> Other locations)
> - `PublishCommand`
> - `complianceDetails` (right click context menu --> More --> Compliance details)
> - `more` (right click context menu --> More)
> - `previewFileCommand` (right click context menu --> Preview)
>
> **Important**: Command bar customizations also affect the item context menu (right-click menu). If a command is hidden in the command bar, it will also be hidden in the context menu.
>
> Please note that the JSON schema at https://developer.microsoft.com/json-schemas/sp/v2/command-bar-formatting.schema.json has not yet been updated to reflect these new command keys.

## hide

An optional property that specifies the condition to hide a particular command. The value of this property can either be a boolean, string or an Expression object. `false` is the default behavior (meaning the command is visible). `true` means that the command will be hidden.

## text

An optional property that specifies the text to be displayed as the name of the command. The value of this property can either be a string or an Expression object. If the value is not provided, then the default name of the command will be shown.

## title

An optional property that specifies the tooltip text to be displayed in the command. The value of this property can either be a string or an Expression object. If the value is not provided, then the default tooltip of the command will be shown.

## iconName

An optional property that specifies the [Fluent UI](https://developer.microsoft.com/fluentui#/) icon to be displayed in the command. The value of this property can either be a string or an Expression object. If the value is not provided, then the default icon of the command will be shown.

## primary

An optional property that specifies the condition to apply primary button styling to a command. The value of this property can either be a boolean, string or an Expression object. `false` is the default behavior (meaning the default style will be applied). `true` means the primary button styling will be applied to the command only if the command is placed at the 0th position in the command bar.

The following example shows a sample Command bar formatting JSON to do the following:

- Hide the 'New' command.
- Update the text and icon of 'Edit in grid view' command and add primary button styling to it.
- Remove the icon from 'Share' command and update the tooltip text of it.

```JSON
{
  "commandBarProps" : {
    "commands": [
      {
        "key": "new",
        "hide": true
      },
      {
        "key": "editInGridView",
        "text": "Quick edit",
        "iconName": "EditTable",
        "primary": true
      },
      {
        "key": "share",
        "iconName": "",
        "title": "Share this List"
      }
    ]
  }
}
```

## position

An optional property that specifies the position where the command will be placed in the command bar. The value of this property can either be a number, a string, or an Expression object. If the value is not provided then the command will be placed in it's default position. This property follows zero-based indexing.

## sectionType

An optional property that specifies the section where the customized command will be placed in the command bar. The following strings are valid values for this property:

- Primary
- Overflow

The following example shows a sample Command bar formatting JSON to do the following:

- Puts the 'New' command at the third position in the primary section of the Command bar.
- Puts the 'Share' command in the second position in the overflow menu of the Command bar.
- Puts the 'Alert me' command at the fourth position in the primary section of the Command bar.

```JSON
{
  "commandBarProps" : {
    "commands": [
      {
        "key": "new",
        "position": 2
      },
       {
        "key": "share",
        "position": 1,
        "sectionType": "Overflow"
      },
      {
        "key": "alertMe",
        "position": 3,
        "sectionType": "Primary"
      }
    ]
  }
}
```

## selectionModes

An optional property that specifies the selection modes in which the command customization will be applied. If the value is not provided, then the customization will be applied in all the selection modes in which the command is available. The value of this property can be an array of strings where the following strings are allowed:

- NoSelection
- SingleSelection
- MultiSelection

The following example shows a sample Command bar formatting JSON to do the following:

- Update the text of 'Share' command if the selected item has 'NumberField' column value 3
- Update the text of 'Delete' command only if multiple items are selected.

```JSON
{
  "commandBarProps": {
    "commands": [
      {
        "key": "share",
        "selectionModes": [
          "SingleSelection"
        ],
        "text": "=if([$NumberField] == 3, 'Share item 3', 'Share')"
      },
      {
        "key": "delete",
         "selectionModes": [
          "MultiSelection"
        ],
        "text": "Delete multiple items"
      }
    ]
  }
}
```
