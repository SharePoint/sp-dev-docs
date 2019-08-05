---
title: "InsertTable element (Server Ribbon)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 4b663d81-e819-42d1-a06e-6c8493b6b94e
description: Defines a menu control for inserting a table that contains a variable number of cells.
---

# InsertTable element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a menu control for inserting a table that contains a variable number of cells.
  
```XML
<InsertTable
  Alt="Text"
  Command="Text"
  CommandType="General | OptionSelection | IgnoredByMenu"
  CommandPreview="Text"
  CommandRevert="Text"
  Id="Text"
  MenuSectionInitialTitle="Text"
  MenuSectionTitle="Text"
  Sequence="Integer"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Alt** <br/> |Optional. Alternative text for the control.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is selected. If the control is in a [CommandUIDefinition](commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](commanduihandler-element.md) element.  <br/> |
|**CommandType** <br/> | Optional. An enumeration value that specifies the type of command.  <br/> **General**. Not a specific type of command.  <br/> **OptionSelection**. A command that is generated when a user selects one option in an option group.  <br/> **IgnoredByMenu**. A command that is used for controls that should not close the menu when they are selected.  <br/> |
|**CommandPreview** <br/> |Optional. The name of the command to execute to preview a selection.  <br/> |
|**CommandRevert** <br/> |Optional. The name of the command to execute to return to the state that existed before previewing a selection.  <br/> |
|**Id** <br/> |Required. A string that identifies the control.  <br/> |
|**MenuSectionInitialTitle** <br/> |Optional. The title of the menu section before table cells are selected, such as "Insert Table".  <br/> |
|**MenuSectionTitle** <br/> |Optional. The title of the menu section when table cells are selected. This could be a format string such as "Insert a {0} by {1} Table".  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
   
### Child elements

None
  
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md) 
- [Controls](controls-element-menusection.md) (MenuSection)  
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   

