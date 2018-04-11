---
title: "Ribbon Element"


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
ms.assetid: 98ffbc4d-ec57-4dbd-8e3b-d16e17bc75dc
description: "Last modified: March 09, 2015"
---

# Ribbon Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains elements that define the Server ribbon user interface.
  
```
<Ribbon
  Id="Text"
  Image32by32GroupPopupDefault="Url"
  Image32by32GroupPopupDefaultClass="CSS Selector"
  Image32by32GroupPopupDefaultLeft="Negative Integer"
  Image32by32GroupPopupDefaultTop="Negative Integer"
  ImageDownArrow="Url"
  ImageDownArrowClass="CSS Selector"
  ImageDownArrowLeft="Negative Integer"
  ImageDownArrowTop="Negative Integer"
  ImageSideArrow="Url"
  ImageSideArrowClass="CSS Selector"
  ImageSideArrowLeft="Negative Integer"
  ImageSideArrowTop="Negative Integer"
  ImageUpArrow="Url"
  ImageUpArrowClass="CSS Selector"
  ImageUpArrowLeft="Negative Integer"
  ImageUpArrowTop="Negative Integer"
  RootEventCommand="Text"
  TabSwitchCommand="Text"
  ScaleCommand="Text"
  TextDirection="Text"
  ToolTipFooterText="Text"
  ToolTipFooterImage16by16="Url"
  ToolTipFooterImage16by16Class="CSS Selector"
  ToolTipFooterImage16by16Left="Negative Integer"
  ToolTipFooterImage16by16Top="Negative Integer"
  ToolTipDisabledCommandImage16by16="Url"
  ToolTipDisabledCommandImage16by16Class="CSS Selector"
  ToolTipDisabledCommandImage16by16Left="Negative Integer"
  ToolTipDisabledCommandImage16by16Top="Negative Integer"
  ToolTipDisabledCommandDescription="Text"
  ToolTipDisabledCommandTitle="Text"
  ToolTipDisabledCommandHelpKey="Text"
  ToolTipHelpCommand="Text"
  ToolTipSelectedItemTitlePrefix="Text"
  ShortcutKeyJumpToRibbon_Ctrl="Text"
  ShortcutKeyJumpToRibbon_Alt="Text"
  ShortcutKeyJumpToRibbon_Shift="Text"
  ShortcutKeyJumpToRibbon_AccessKey="Text"
  ShortcutKeyJumpToFirstControl_Ctrl="Text"
  ShortcutKeyJumpToFirstControl_Alt="Text"
  ShortcutKeyJumpToFirstControl_Shift="Text"
  ShortcutKeyJumpToFirstControl_AccessKey="Text"
  ATContextualTabText="Text"
  ATTabPositionText="Text"
  NavigationHelpText="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. A string that identifies the element, such as "Ribbon".  <br/> |
|**Image32by32GroupPopupDefault** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to use for the pop-up image, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**Image32by32GroupPopupDefaultClass** <br/> |Optional. The name of a CSS class selector to be applied to the pop-up image.  <br/> |
|**Image32by32GroupPopupDefaultLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32GroupPopupDefault** attribute points to an image file that contains the images for many icons. The value of the **Image32by32GroupPopupDefaultLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**Image32by32GroupPopupDefaultTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32GroupPopupDefault** attribute points to an image file that contains the images for many icons. The value of the **Image32by32GroupPopupDefaultTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageDownArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the down arrow, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**ImageDownArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the down arrow image.  <br/> |
|**ImageDownArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageDownArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageDownArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageDownArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageSideArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the side arrow.  <br/> |
|**ImageSideArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the side arrow image.  <br/> |
|**ImageSideArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageSideArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**RootEventCommand** <br/> |Optional. The name of the default command to invoke when a ribbon event occurs.  <br/> |
|**TabSwitchCommand** <br/> |Optional. The name of the command to invoke when the active ribbon tab is changed.  <br/> |
|**ScaleCommand** <br/> |Optional. The name of the command to invoke when the ribbon is scaled.  <br/> |
|**TextDirection** <br/> |Optional. A string that specifies the direction in which to draw text, such as "ltr".  <br/> |
|**ToolTipFooterText** <br/> |Optional. Text to use in the tooltip footer.  <br/> |
|**ToolTipFooterImage16by16** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the tooltip footer, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**ToolTipFooterImage16by16Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ToolTipFooterImage16by16Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ToolTipFooterImage16by16Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ToolTipDisabledCommandImage16by16** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use in the tooltip when the control is disabled.  <br/> |
|**ToolTipDisabledCommandImage16by16Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ToolTipDisabledCommandImage16by16Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ToolTipDisabledCommandImage16by16Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ToolTipDisabledCommandDescription** <br/> |Optional. Text of the tooltip when the control is disabled.  <br/> |
|**ToolTipDisabledCommandTitle** <br/> |Optional. Title of the tooltip when the control is disabled.  <br/> |
|**ToolTipDisabledCommandHelpKey** <br/> |Optional. Key that invokes Help when the control is disabled.  <br/> |
|**ToolTipHelpCommand** <br/> |Optional. The name of the command that invokes Help when the control is disabled.  <br/> |
|**ToolTipSelectedItemTitlePrefix** <br/> |Optional. Prefix for the title of the tooltip for the selected item.  <br/> |
|**ShortcutKeyJumpToRibbon_Ctrl** <br/> |Optional. Either "t" or "f", indicating whether the CTRL key should be pressed to set focus to the first ribbon tab.  <br/> |
|**ShortcutKeyJumpToRibbon_Alt** <br/> |Optional. Either "t" or "f", indicating whether the ALT key should be pressed to set focus to the first ribbon tab.  <br/> |
|**ShortcutKeyJumpToRibbon_Shift** <br/> |Optional. Either "t" or "f", indicating whether the SHIFT key should be pressed to set focus to the first ribbon tab.  <br/> |
|**ShortcutKeyJumpToRibbon_AccessKey** <br/> |Optional. A one-character string that specifies the key that should be pressed to set focus to the first ribbon tab.  <br/> |
|**ShortcutKeyJumpToFirstControl_Ctrl** <br/> |Optional. Either "t" or "f", indicating whether the CTRL key should be pressed to set focus on the first control.  <br/> |
|**ShortcutKeyJumpToFirstControl_Alt** <br/> |Optional. Either "t" or "f", indicating whether the ALT key should be pressed to set focus on the first control.  <br/> |
|**ShortcutKeyJumpToFirstControl_Shift** <br/> |Optional. Either "t" or "f", indicating whether the SHIFT key should be pressed to set focus on the first control.  <br/> |
|**ShortcutKeyJumpToFirstControl_AccessKey** <br/> |Optional. A one character string that specifies the key that should be pressed to set focus on the first control.  <br/> |
|**ATContextualTabText** <br/> |Optional. Hidden text to convey contextual tab information to screen readers, such as " {0} group. Tab {1} of {2}."  <br/> |
|**ATTabPositionText** <br/> |Optional. Hidden text to convey tab information to screen readers, such as "Tab {0} of {1}."  <br/> |
|**NavigationHelpText** <br/> |Optional. The text of a message that describes how to navigate the ribbon using the keyboard, which is displayed as hidden text for a screen reader.  <br/> |
   
### Child elements

||
|:-----|
|[Tabs](tabs-element.md) <br/> |
|[ContextualTabs](contextualtabs-element.md) <br/> |
   
### Parent elements

||
|:-----|
|[CommandUI](commandui-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## See also



[Customizing the Server Ribbon](http://msdn.microsoft.com/library/dedfad80-0f32-44cd-9080-1507be3288e7%28Office.15%29.aspx)

