---
title: "Gallery Element"
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
ms.assetid: fb7004bc-2baa-4110-ae30-03e6b349b5e9
description: "Last modified: March 09, 2015"
---

# Gallery Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a gallery.
  
```
<Gallery
  Command="Text"
  CommandPreview="Text"
  CommandRevert="Text"
  ElementDimensions="Size16by16 | Size32by32 | Size48by48 | Size72by96 | Size96by72 | Size96by96 | Size128by128 | Size190by30 | Size190by40 | Size190by50 | Size190by60"
  Id="Text"
  QueryCommand="Text"
  Sequence="Integer"
  Width="Integer"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](../../sharepoint-features-schemas/custom-action-definition-schema/commanduihandler-element.md) element.  <br/> |
|**CommandPreview** <br/> |Optional. The name of the command to execute for previewing a selection.  <br/> |
|**CommandRevert** <br/> |Optional. The name of the command to execute to return to the state that existed before previewing a selection.  <br/> |
|**ElementDimensions** <br/> | Required. An enumeration value that specifies the dimensions of rectangular child elements. Dimensions are in pixels and are in the format "width by height".  <br/> **Size16by16** <br/> **Size32by32** <br/> **Size48by48** <br/> **Size72by96** <br/> **Size96by72** <br/> **Size96by96** <br/> **Size128by128** <br/> **Size190by30** <br/> **Size190by40** <br/> **Size190by50** <br/> **Size190by60** <br/> |
|**Id** <br/> |Required. A string that identifies the element, such as "GadgetsGallery".  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**Width** <br/> |Required. The width of the gallery in pixels.  <br/> |
   
### Child elements

||
|:-----|
|[GalleryButton](gallerybutton-element-gallery.md)|
   
### Parent elements

||
|:-----|
|[CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) <br/> |
|[MenuSection](menusection-element.md) <br/> |
   
### Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: 1  <br/> |
   
### Remarks

A gallery is a graphically rich list box. The items in a gallery are usually mutually exclusive choices, and the result of a choice is visually previewed either by an image or by a rendered HTML fragment. 
  

