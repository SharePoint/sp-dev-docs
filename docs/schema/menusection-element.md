---
title: "MenuSection element (Server Ribbon)"
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
ms.assetid: 358a7aff-0801-4e87-8943-631469c63dd5
description: Defines a section of a menu.
---

# MenuSection element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a section of a menu.
  
```XML
<MenuSection
  Id="Text"
  Title="Text"
  Scrollable="TRUE | FALSE"
  Sequence="Integer"
  MaxHeight="Integer"
  DisplayMode="Menu | Menu16 | Menu32"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. A string that identifies the element.  <br/> |
|**Title** <br/> |Optional. A string to be displayed as the title of the menu section.  <br/> |
|**Scrollable** <br/> |Optional. **TRUE** to make this section of the menu scrollable.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**MaxHeight** <br/> |Optional. Specifies the maximum height of the section in pixels.  <br/> |
|**DisplayMode** <br/> | Optional. An enumeration value that determines how controls in this section of the menu are rendered.  <br/> **Menu**. Renders as a text-only menu item.  <br/> **Menu16**. Renders as a menu item with a 16-by-16-pixel icon.  <br/> **Menu32**. Renders as a menu item with a 32-by-32-pixel icon.  <br/> |
   
### Child elements

- [Controls](controls-element-menusection.md) 
- [Gallery](gallery-element.md) 
   
> [!NOTE]
> A **MenuSection** element must contain either a **Controls** element or a **Gallery** element. 
  
### Parent elements

- [Menu](menu-element.md)
   
### Occurrences

- Minimum: 1
- Maximum: unbounded 
   

