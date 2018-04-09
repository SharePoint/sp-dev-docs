---
title: "TextBox Element"
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
ms.assetid: 49f7085a-7b2f-44eb-b7eb-39c55a102136
description: "Last modified: March 09, 2015"
---

# TextBox Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines a text box control.
  
```
<TextBox
  Command="Text"
  Id="Text"
  ImeEnabled="TRUE | FALSE"
  MaxLength="Integer"
  QueryCommand="Text"
  Sequence="Integer"
  ShowAsLabel=" TRUE | FALSE "
  TemplateAlias="Text"
  ToolTipImage32by32="Url"
  ToolTipImage32by32Class="CSS Class Selector"
  ToolTipImage32by32Left="Negative Integer"
  ToolTipImage32by32Top="Negative Integer"
  ToolTipTitle="Text"
  ToolTipDescription="Text"
  ToolTipHelpKeyWord="Text"
  ToolTipShortcutKey="Text"
  Width="Integer"
/>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](../../sharepoint-features-schemas/custom-action-definition-schema/commanduihandler-element.md) element.  <br/> |
|**Id** <br/> |Required. A string that identifies the control, such as "Ribbon.Image.Image.Properties.AltText".  <br/> |
|**ImeEnabled** <br/> |Optional. Set to **TRUE** to set the Input Method Editor (IME) to the **active** state. The default value is **FALSE**.  <br/> |
|**MaxLength** <br/> |Optional. The maximum number of characters that a user can enter.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**ShowAsLabel** <br/> |Optional. Set to **TRUE** to disable the text box so that it does not respond to user input and looks the same as a [Label](label-element.md) control. The default value is **FALSE**.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls in a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to use in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to apply to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip displays the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
|**Width** <br/> |Optional. The width of the text box in pixels.  <br/> |
   
## Child Elements

None
  
## Parent Elements

||
|:-----|
|[CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) <br/> |
|[Controls](controls-element-group.md) <br/> |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   

