---
title: "Controls Element (Group)"


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
ms.assetid: d3635d99-fb58-4327-864f-6e59b222833d
description: "Last modified: March 09, 2015"
---

# Controls Element (Group)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains elements that define controls.
  
```
<Controls
     Id="Text"
     ToolTipImage32by32="Url"
     ToolTipImage32by32Class="CSS Class Selector"
     ToolTipImage32by32Left="Negative Integer"
     ToolTipImage32by32Top="Negative Integer"
     ToolTipTitle="Text"
     ToolTipDescription="Text"
     ToolTipHelpKeyWord="Text"
     ToolTipShortcutKey="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. Identifies the control. The value can be a string representation of a GUID or a unique term such as "Ribbon.Library.Share.NewRibbonCheckBox".  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, then the value for this attribute is "ALT + J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
   
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
|[Group](group-element-ribbon.md)|
   
### Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: 1  <br/> |
   

