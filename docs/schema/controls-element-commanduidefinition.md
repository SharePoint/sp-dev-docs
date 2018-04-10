---
title: "Controls Element (CommandUIDefinition)"
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
ms.assetid: 680c3002-c5c4-43f7-9cc2-368dd9172d92
description: "Last modified: March 09, 2015"
---

# Controls Element (CommandUIDefinition)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains elements that define controls. 
  
```
<Controls
     Id="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. Identifies the element. The value can be a string representation of a GUID or a unique term such as "Ribbon.Library.Share.NewRibbonCheckBox".  <br/> |
   
### Child elements

||
|:-----|
|[Button](button-element.md) <br/> |
|[CheckBox](checkbox-element.md) <br/> |
|[ComboBox](combobox-element.md) <br/> |
|[DropDown](dropdown-element.md) <br/> |
|[FlyoutAnchor](flyoutanchor-element.md) <br/> |
|[GalleryButton](gallerybutton-element-group.md) <br/> |
|[Label](label-element.md) <br/> |
|[MRUSplitButton](mrusplitbutton-element.md) <br/> |
|[Spinner](spinner-element.md) <br/> |
|[SplitButton](splitbutton-element.md) <br/> |
|[TextBox](textbox-element.md) <br/> |
|[ToggleButton](togglebutton-element.md) <br/> |
   
### Parent elements

||
|:-----|
|[CommandUIDefinition](commanduidefinition-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

