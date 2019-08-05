---
title: "GalleryButton element (Gallery) (Server Ribbon)"
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
ms.assetid: aff7ea4c-6599-4770-bedb-e61e2158291f
description: Defines a gallery button.
---

# GalleryButton element (Gallery) (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a gallery button.
  
```XML
<GalleryButton
  Alt="Text"
  Command="Text"
  CommandPreview="Text"
  CommandRevert="Text"
  CommandType="General | OptionSelect | IgnoredByMenu"
  CommandValueId="Text"
  ElementDimensions="Size16by16 | Size32by32 | Size48by48 | Size72by96 | Size96by72 | Size96by96 | Size128by128 | Size190by30 | Size190by40 | Size190by50 | Size190by60"
  Id="Text"
  Image="Url"
  ImageClass="CSS Selector"
  ImageLeft="Negative Integer"
  ImageTop="Negative Integer"
  InnerHTML="HTML"
  MenuItemId="Text"
  QueryCommand="Text"
  Sequence="Text"
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
|**Alt** <br/> |Optional. Alternative text that is used for the control.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is selected. If the control is in a [CommandUIDefinition](commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](commanduihandler-element.md) element.  <br/> |
|**CommandPreview** <br/> |Optional. The name of the command to execute for previewing a selection.  <br/> |
|**CommandRevert** <br/> |Optional. The name of the command to execute to return to the state that existed before previewing a selection.  <br/> |
|**CommandType** <br/> | Optional. An enumeration value that specifies the type of command.  <br/> **General**. Not a specific type of command.  <br/> **OptionSelection**. A command that is generated when a user selects one option in an option group.  <br/> **IgnoredByMenu**. A command that is used for controls that should not close the menu when they are selected.  <br/> |
|**CommandValueId** <br/> |Optional. A string that is sent with the command event when the button is selected.  <br/> |
|**ElementDimensions** <br/> | Required. An enumeration value that specifies the dimensions of the rectangle in which the button is rendered. Dimensions are in pixels and are in the format "width by height".  <br/> **Size16by16** <br/> **Size32by32** <br/> **Size48by48** <br/> **Size72by96** <br/> **Size96by72** <br/> **Size96by96** <br/> **Size128by128** <br/> **Size190by30** <br/> **Size190by40** <br/> **Size190by50** <br/> **Size190by60** <br/> |
|**Id** <br/> |Required. A string that identifies the element, such as "buttonStaticStyle1".  <br/> |
|**Image** <br/> |Optional. A server-relative URL to a file that contains an image to be used as an icon.  <br/> If an **Image** attribute is not defined, an **InnerHTML** attribute must be defined.  <br/> |
|**ImageClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image** attribute points to an image file that contains images for several icons.  <br/> |
|**ImageTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image** attribute points to an image file that contains images for several icons.  <br/> |
|**InnerHTML** <br/> |Optional. HTML markup that illustrates the choice that the button represents.  <br/> If the **InnerHTML** attribute is not defined, the **Image** attribute must be defined.  <br/> |
|**MenuItemId** <br/> |Optional. A string that identifies the menu item where the button is located.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is Alt+J, the value for this attribute is "Alt+J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(Alt+J)".  <br/> |
   
### Child elements

None
  
### Parent elements

- [Gallery](gallery-element.md)
   
### Occurrences

- Minimum: 1
- Maximum: unbounded 
   

