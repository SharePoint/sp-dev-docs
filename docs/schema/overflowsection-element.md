---
title: "OverflowSection Element"
ms.author: ricardol
author: ricardol
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
ms.assetid: c5e266a6-6664-41a2-acf3-c0d338fa5f41
description: "Last modified: March 09, 2015"
---

# OverflowSection Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines a section that can be created dynamically with a variable number of controls.
  
```
<OverflowSection
  DisplayMode="Small | Medium | Large | Menu | Menu16 | Menu32"
  DividerAfter="TRUE | FALSE"
  DividerBefore="TRUE | FALSE"
  TemplateAlias="Text"
  Type="OneRow | TwoRow | ThreeRow"
/>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**DisplayMode** <br/> | Optional. An enumeration value that determines how a control is rendered.  <br/> **Small**. Renders as a small icon without label text.  <br/> **Medium**. Renders as a 16-by-16-pixel icon with label text.  <br/> **Large**. Renders as a 32-by-32-pixel icon with label text.  <br/> **Menu**. Renders as a text-only menu item.  <br/> **Menu16**. Renders as a menu item with a 16-by-16-pixel icon.  <br/> **Menu32**. Renders as a menu item with a 32-by-32-pixel icon.  <br/> |
|**DividerAfter** <br/> |Optional. **TRUE** to render a divider at the end of the section.  <br/> |
|**DividerBefore** <br/> |Optional. **TRUE** to render a divider at the start of the section.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that a control can reference in its own **TemplateAlias** attribute. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**Type** <br/> | Optional. An enumeration value that specifies the type of section.  <br/> **OneRow**. The section renders with one row of controls.  <br/> **TwoRow**. The section renders with two rows of controls.  <br/> **ThreeRow**. The section renders with three rows of controls.  <br/> |
   
## Child Elements

None
  
## Parent Elements

||
|:-----|
|[Layout](layout-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   

