---
title: "ContextualGroup element (Server Ribbon)"
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
ms.assetid: 6d4fe8d8-90c4-49cb-bd6d-7062a0f45e0a
description: Defines a group of tabs that are presented when they are relevant. 
---

# ContextualGroup element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a group of tabs that are presented when they are relevant. 
  
```XML
<ContextualGroup
  Color="None | DarkBlue | LightBlue | Teal | Orange | Green | Magenta | Yellow | Purple"
  Command="Text"
  ContextualGroupId="Text"
  Id="Text"
  Sequence="Integer"
  Title="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Color** <br/> |Optional. An enumeration value that specifies a color scheme for the group.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the group is clicked.  <br/> |
|**ContextualGroupId** <br/> |Optional. A string that identifies the contextual group, such as "EditingTools".  <br/> |
|**Id** <br/> |Required. A string that identifies the element, such as "Ribbon.EditingTools".  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**Title** <br/> |Optional. The title that appears above the group of tabs when the tabs are visible.  <br/> |
   
### Child elements

- [Tab](tab-element.md)
   
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md) 
- [ContextualTabs](contextualtabs-element.md) 
   
### Occurrences

- Minimum: 0
- Maximum: unbounded  
   

