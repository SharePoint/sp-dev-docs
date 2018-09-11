---
title: "ToggleButton element (Server Ribbon)"
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
ms.assetid: 596d39c6-ee39-41d4-92d6-c99942a6438f
description: Defines a button that is used to switch states.
---

# ToggleButton element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a button that is used to switch states.
  
```XML
<ToggleButton
  Alt="Text"
  Command="Text "
  CommandValueId="Text"
  Description="Text"
  Id="Text"
  LabelCss="CSS Class Selector"
  LabelText="Text"
  Image32by32="Url"
  Image32by32Class="CSS Class Selector"
  Image32by32Left="Negative Integer"
  Image32by32Top="Negative Integer"
  Image16by16="Url"
  Image16by16Class="CSS Class Selector"
  Image16by16Left="Negative Integer"
  Image16by16Top="Negative Integer"
  MenuItemId="Text"
  QueryCommand="Text"
  Sequence="Integer"
  TemplateAlias="Text"
  ToolTipImage32by32="Url"
  ToolTipImage32by32Class="CSS Selector"
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
|**Alt** <br/> |Optional. Alternative text that is used for the control.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is selected. If the control is in a [CommandUIDefinition](commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](commanduihandler-element.md) element.  <br/> |
|**CommandValueId** <br/> |Optional. A string that is sent with the command event when the button is selected.  <br/> |
|**Description** <br/> |Optional. A string that describes the button.  <br/> |
|**Id** <br/> |Required. A string that identifies the control, such as "Ribbon.Library.ViewFormat.Standard".  <br/> |
|**LabelCss** <br/> |Optional. The name of a CSS class selector to be applied to the control's label.  <br/> |
|**LabelText** <br/> |Optional. Text to label the control.  <br/> |
|**Image32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**Image32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**Image32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32** attribute points to an image file that contains images for many icons.  <br/> The value of the **Image32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag. For example, setting the **Image32by32Left** attribute to " -160" and the **Image32by32Top** attribute to " -448" results in an inline style that is similar to the one in the following HTML markup:  <br/> ```HTML<img src="/_layouts/1033/images/formatmap32x32.png" style="position: absolute;left: -160px;top: -448px;" />```|
|**Image32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32** attribute points to an image file that contains the images for many icons. The value of the **Image32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Image16by16** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**Image16by16Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**Image16by16Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons. The value of the **Image16by16Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Image16by16Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons. The value of the **Image16by16Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**MenuItemId** <br/> |Optional. A string that identifies the menu item where the button is located.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that displays in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is Alt+J, the value for this attribute is "Alt+J". The tooltip displays the text for the shortcut key in parentheses after the tooltip title: "(Alt+J)".  <br/> |
   
### Child elements

None
  
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md) 
- [Controls](controls-element-group.md) (Group)
   
### Occurrences

- Minimum: 0
- Maximum: unbounded  
   

