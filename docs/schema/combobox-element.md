---
title: "ComboBox Element"
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
ms.assetid: 79d28a90-c4bc-47a1-847f-503f3af8fec7
description: "Last modified: March 09, 2015"
---

# ComboBox Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a combo box control.
  
```
<ComboBox
  AllowFreeForm="TRUE | FALSE"
  AltArrow="Text"
  Alt="Text"
  AutoComplete="TRUE | FALSE"
  AutoCompleteDelay="Integer"
  CacheMenuVersions="TRUE | FALSE"
  Command="Text"
  CommandMenuOpen="Text"
  CommandMenuClose="Text"
  CommandPreview="Text"
  CommandPreviewRevert="Text"
  ImeEnabled="TRUE | FALSE"
  InitialItem="Text"
  Id="Text"
  QueryCommand="Text"
  PopulateDynamically="TRUE | FALSE"
  PopulateQueryCommand="Text"
  PopulateOnlyOnce="TRUE | FALSE"
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
  Width="Integer"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AllowFreeForm** <br/> |Optional. **FALSE** to restrict input so that only items on the menu are submitted; otherwise, **TRUE**. The default is **FALSE**.  <br/> |
|**AltArrow** <br/> |Optional. Alternative text that is used for the drop-down arrow button.  <br/> |
|**Alt** <br/> |Optional. Alternative text that is used for the combo box.  <br/> |
|**AutoComplete** <br/> |Optional. **FALSE** to turn AutoComplete suggestions off. The default is **TRUE** (on).  <br/> |
|**AutoCompleteDelay** <br/> |Optional. The delay in milliseconds before AutoComplete fills the text box with a best-guess match. The default is 100.  <br/> |
|**CacheMenuVersions** <br/> |Optional. **TRUE** to store previously constructed versions of a dynamic menu. The default is **FALSE**.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](../../sharepoint-features-schemas/custom-action-definition-schema/commanduihandler-element.md) element.  <br/> |
|**CommandMenuOpen** <br/> |Optional. The name of the command to execute when the drop-down menu is opened.  <br/> |
|**CommandMenuClose** <br/> |Optional. The name of the command to execute when the drop-down menu is closed.  <br/> |
|**CommandPreview** <br/> |Optional. The name of the command to execute for previewing a selection.  <br/> |
|**CommandPreviewRevert** <br/> |Optional. The name of the command to execute to return to the state that existed before previewing a selection.  <br/> |
|**ImeEnabled** <br/> |Optional. **TRUE** to set the [Input Method Editor (IME)](http://msdn.microsoft.com/library/a595a28f-7a9d-4135-ad5c-d66ae45ec682.aspx) to the **active** state.  <br/> |
|**InitialItem** <br/> |Optional. The ID of the menu item to display in the text box when it is first rendered.  <br/> |
|**Id** <br/> |Required. A string that identifies the control, such as "Ribbon.EditingTools.CPEditTab.Font.Fonts".  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**PopulateDynamically** <br/> |Optional. **TRUE** to create the menu dynamically. The default is **FALSE**.  <br/> |
|**PopulateQueryCommand** <br/> |Optional. The name of the command to execute when creating a dynamic menu.  <br/> |
|**PopulateOnlyOnce** <br/> |Optional. **TRUE** to populate a dynamic menu only the first time that it is accessed. The default is **FALSE**.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
|**Width** <br/> |Optional. The width in pixels of the text box that is part of this combo box.  <br/> |
   
### Child elements

||
|:-----|
|[Menu](menu-element.md)|
   
### Parent elements

||
|:-----|
|[CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) <br/> |
|[Controls](controls-element-group.md) (Group)  <br/> |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   

