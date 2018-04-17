---
title: "Controls element (CommandUIDefinition) (Server Ribbon)"
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
description: Contains elements that define controls. 
---

# Controls element (CommandUIDefinition) (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains elements that define controls. 
  
```XML
<Controls
     Id="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. Identifies the element. The value can be a string representation of a GUID or a unique term such as `Ribbon.Library.Share.NewRibbonCheckBox`.  <br/> |
   
### Child elements

- [Button](button-element.md) 
- [CheckBox](checkbox-element.md) 
- [ComboBox](combobox-element.md) 
- [DropDown](dropdown-element.md) 
- [FlyoutAnchor](flyoutanchor-element.md) 
- [GalleryButton](gallerybutton-element-group.md) 
- [Label](label-element.md) 
- [MRUSplitButton](mrusplitbutton-element.md) 
- [Spinner](spinner-element.md) 
- [SplitButton](splitbutton-element.md) 
- [TextBox](textbox-element.md) 
- [ToggleButton](togglebutton-element.md) 
   
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   

