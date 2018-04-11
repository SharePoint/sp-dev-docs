---
title: "OverflowArea Element"


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
ms.assetid: 170a5483-873b-4b45-8d4f-b7943216cfdf
description: "Last modified: March 09, 2015"
---

# OverflowArea Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines an area where multiple controls can render as a list.
  
```
<OverflowArea
  DisplayMode="Small | Medium | Large | Menu | Menu16 | Menu32"
  TemplateAlias="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**DisplayMode** <br/> | Optional. An enumeration value that determines how a control is rendered.  <br/> **Small**. Renders as a small icon without label text.  <br/> **Medium**. Renders as a 16-by-16-pixel icon with label text.  <br/> **Large**. Renders as a 32-by-32-pixel icon with label text.  <br/> **Menu**. Renders as a text-only menu item.  <br/> **Menu16**. Renders as a menu item with a 16-by-16-pixel icon.  <br/> **Menu32**. Renders as a menu item with a 32-by-32-pixel icon.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that a control can reference in its own **TemplateAlias** attribute. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
   
### Child elements

None
  
### Parent elements

||
|:-----|
|[Row](row-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   

