---
title: "Spinner element (Server Ribbon)"
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
ms.assetid: 96b49b4e-696e-4920-97ab-61353e35a561
description: Defines a spinner control.
---

# Spinner element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a spinner control.
  
```XML
<Spinner
  AccelerationInterval="Integer"
  AltDownArrow="Text"
  AltUpArrow="Text"
  Command="Text"
  DefaultUnit="Text"
  DefaultValue="Decimal"
  Id="Text"
  ImeEnabled="TRUE | FALSE"
  MultiplierInterval="Integer"
  QueryCommand="Text"
  Sequence="Integer"
  TemplateAlias="Text"
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
|**AccelerationInterval** <br/> |Optional. Specifies how much the value increases or decreases when you maintain focus on the up or down button.  <br/> |
|**AltDownArrow** <br/> |Optional. Alternative text that is used for the decrement arrow.  <br/> |
|**AltUpArrow** <br/> |Optional. Alternative text that is used for the increment arrow.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](commanduihandler-element.md) element.  <br/> |
|**DefaultUnit** <br/> |Optional. The name or abbreviation for the default [Unit](unit-element-spinner.md).  <br/> |
|**DefaultValue** <br/> |Optional. Specifies the initial numeric value that is displayed in the control.  <br/> |
|**Id** <br/> |Required. A string that identifies the control.  <br/> |
|**ImeEnabled** <br/> |Optional. **TRUE** to set the [Input Method Editor (IME)](http://msdn.microsoft.com/library/a595a28f-7a9d-4135-ad5c-d66ae45ec682.aspx) to the **active** state. The default is **FALSE**.  <br/> |
|**MultiplierInterval** <br/> |Optional. Specifies a factor by which to increase the speed of incrementing or decrementing the value when focus is maintained on the up or down arrow.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls in a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip displays the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
   
### Child elements

- [Unit](unit-element-spinner.md)
   
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md) 
- [Controls](controls-element-group.md) 
   
### Occurrences

- Minimum: 0
- Maximum: unbounded 
   

