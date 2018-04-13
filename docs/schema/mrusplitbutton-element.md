---
title: "MRUSplitButton element (Server Ribbon)"
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
ms.assetid: 0a18a665-aaa1-4c18-840a-967cca5be803
description: Defines a control that combines a button and a drop-down menu to display a list of the most-recently used items.
---

# MRUSplitButton element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a control that combines a button and a drop-down menu to display a list of the most-recently used items.
  
```XML
<MRUSplitButton
  Alt="Text"
  CacheMenuVersions="TRUE | FALSE"
  Command="Text"
  CommandMenuOpen="Text"
  CommandMenuClose="Text"
  CommandPreview="Text"
  CommandPreviewRevert="Text"
  Id="Text"
  InitialItem="Text"
  MenuAlt="Text"
  MenuCommand="Text"
  PopulateDynamically=" TRUE | FALSE "
  PopulateQueryCommand="Text"
  PopulateOnlyOnce=" TRUE | FALSE "
  Sequence="Integer"
  QueryCommand="Text"
  TemplateAlias="Text"
  ToolTipImage32by32="Url"
  ToolTipImage32by32Class="Text"
  ToolTipImage32by32Left="Negative Integer"
  ToolTipImage32by32Top="Negative Integer"
  ToolTipTitle="Text"
  ToolTipDescription="Text"
  ToolTipHelpKeyWord="Text"
  ToolTipSelectedItemTitle="Text"
  ToolTipShortcutKey="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Alt** <br/> |Optional. Alternative text that is used for the button.  <br/> |
|**CacheMenuVersions** <br/> |Optional. **TRUE** to store previously constructed versions of a dynamic menu. The default is **FALSE**.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](commanduihandler-element.md) element.  <br/> |
|**CommandMenuOpen** <br/> |Optional. The name of the command to execute when the drop-down menu is opened.  <br/> |
|**CommandMenuClose** <br/> |Optional. The name of the command to execute when the drop-down menu is closed.  <br/> |
|**CommandPreview** <br/> |Optional. The name of the command to execute for previewing a selection.  <br/> |
|**CommandPreviewRevert** <br/> |Optional. The name of the command to execute to return to the state that existed before previewing a selection.  <br/> |
|**Id** <br/> |Required. A string that identifies the control.  <br/> |
|**InitialItem** <br/> |Optional. The ID of the menu item to display in the control when it is first rendered.  <br/> |
|**MenuAlt** <br/> |Optional. Alternative text to represent the menu.  <br/> |
|**MenuCommand** <br/> |Optional. The name of the command to execute when the menu is clicked.  <br/> |
|**PopulateDynamically** <br/> |Optional. **TRUE** to create the menu dynamically. The default is **FALSE**.  <br/> |
|**PopulateQueryCommand** <br/> |Optional. The name of the command to execute when creating a dynamic menu.  <br/> |
|**PopulateOnlyOnce** <br/> |Optional. **TRUE** to populate a dynamic menu only the first time that it is accessed.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipSelectedItemTitle** <br/> |Optional. The title of the tooltip that appears for the selected item.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
   
### Child elements

- [Menu](menu-element.md)
   
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md)
- [Controls](controls-element-group.md) 
   
### Occurrences

- Minimum: 0  
- Maximum: unbounded  
   

