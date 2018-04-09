---
title: "Jewel Element"
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
ms.assetid: 20fae442-aca1-4bbc-b89c-139afab7dead
description: "Last modified: March 09, 2015"
---

# Jewel Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the Microsoft Office button.
  
```
<Jewel
  Alt="Text"
  CacheMenuVersions="TRUE | FALSE"
  Command="Text"
  CommandMenuClose="Text"
  CommandMenuOpen="Text"
  Height="Integer"
  Id="Text"
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
  Image="Url"
  ImageClass="CSS Selector"
  ImageLeft="Negative Integer"
  ImageTop="Negative Integer"
  ImageHover="Url"
  ImageHoverClass="CSS Selector"
  ImageHoverLeft="Negative Integer"
  ImageHoverTop="Negative Integer"
  ImageDown="Url"
  ImageDownClass="CSS Selector"
  ImageDownLeft="Negative Integer"
  ImageDownTop="Negative Integer"
  ImageLeftSide="Url"
  ImageLeftSideClass="CSS Selector"
  ImageLeftSideLeft="Negative Integer"
  ImageLeftSideTop="Negative Integer"
  ImageLeftSideWidth="Integer"
  ImageLeftSideHover="Url"
  ImageLeftSideHoverClass="CSS Selector"
  ImageLeftSideHoverLeft="Negative Integer"
  ImageLeftSideHoverTop="Negative Integer"
  ImageLeftSideDown="Url"
  ImageLeftSideDownClass="CSS Selector"
  ImageLeftSideDownLeft="Negative Integer"
  ImageLeftSideDownTop="Negative Integer"
  ImageRightSide="Url"
  ImageRightSideClass="CSS Selector"
  ImageRightSideLeft="Negative Integer"
  ImageRightSideTop="Negative Integer"
  ImageRightSideWidth="Integer"
  ImageRightSideHover="Url"
  ImageRightSideHoverClass="CSS Selector"
  ImageRightSideHoverLeft="Negative Integer"
  ImageRightSideHoverTop="Negative Integer"
  ImageRightSideDown="Url"
  ImageRightSideDownClass="CSS Selector"
  ImageRightSideDownLeft="Negative Integer"
  ImageRightSideDownTop="Negative Integer"
  LabelCss="CSS Selector"
  LabelText="Text"
  PopulateDynamically="TRUE | FALSE"
  PopulateQueryCommand="Text"
  PopulateOnlyOnce="TRUE | FALSE"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Alt** <br/> |Optional. Alternative text that is used for the control.  <br/> |
|**CacheMenuVersions** <br/> |Optional. **TRUE** to store previously constructed versions of a dynamic menu. The default is **FALSE**.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked.  <br/> |
|**CommandMenuClose** <br/> |Optional. The name of the command to execute when the drop-down menu is closed.  <br/> |
|**CommandMenuOpen** <br/> |Optional. The name of the command to execute when the drop-down menu is opened.  <br/> |
|**Height** <br/> |Optional. The height of the control in pixels.  <br/> |
|**Id** <br/> |Required. A string that identifies the element.  <br/> |
|**ImageDownArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the down arrow, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**ImageDownArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the down arrow image.  <br/> |
|**ImageDownArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageDownArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageDownArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageDownArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageSideArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the side arrow.  <br/> |
|**ImageSideArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the side arrow image.  <br/> |
|**ImageSideArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageSideArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageUpArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the up arrow, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**ImageUpArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the up arrow image.  <br/> |
|**ImageUpArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageUpArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**Image** <br/> |Optional. A server-relative URL to a file that contains the center image.  <br/> |
|**ImageClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageHover** <br/> |Optional. A server-relative URL to a file that contains the image to replace the center image when the mouse pointer hovers over it.  <br/> |
|**ImageHoverClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageHoverLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageHoverTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageDown** <br/> |Optional. A server-relative URL to a file that contains the image to replace the center image when the toolbar is expanded.  <br/> |
|**ImageDownClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageDownLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageDownTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageLeftSide** <br/> |Optional. A server-relative URL to a file that contains the image for the left side of the jewel.  <br/> |
|**ImageLeftSideClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageLeftSideLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageLeftSideTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageLeftSideWidth** <br/> |Optional. The width of the image in pixels.  <br/> |
|**ImageLeftSideHover** <br/> |Optional. A server-relative URL to a file that contains the image to replace the left image when the mouse pointer hovers over it.  <br/> |
|**ImageLeftSideHoverClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageLeftSideHoverLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageLeftSideHoverTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageLeftSideDown** <br/> |Optional. A server-relative URL to a file that contains the image to replace the left image when the toolbar is expanded.  <br/> |
|**ImageLeftSideDownClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageLeftSideDownLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageLeftSideDownTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageRightSide** <br/> |Optional. A server-relative URL to a file that contains the image for the right side of the jewel.  <br/> |
|**ImageRightSideClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageRightSideLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageRightSideTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageRightSideWidth** <br/> |Optional. The width of the image in pixels.  <br/> |
|**ImageRightSideHover** <br/> |Optional. A server-relative URL to a file that contains the image to replace the right image when the mouse pointer hovers over it.  <br/> |
|**ImageRightSideHoverClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageRightSideHoverLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageRightSideHoverTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**ImageRightSideDown** <br/> |Optional. A server-relative URL to a file that contains the image to replace the right image when the toolbar is expanded.  <br/> |
|**ImageRightSideDownClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ImageRightSideDownLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image.  <br/> |
|**ImageRightSideDownTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image.  <br/> |
|**LabelCss** <br/> |Optional. The name of a CSS class selector to be applied to the label.  <br/> |
|**LabelText** <br/> |Optional. The text of the label.  <br/> |
|**PopulateDynamically** <br/> |Optional. **TRUE** to create the menu dynamically. The default is **FALSE**.  <br/> |
|**PopulateOnlyOnce** <br/> |Optional. **TRUE** to populate a dynamic menu only the first time that it is accessed.  <br/> |
   
### Child elements

||
|:-----|
|[Menu](menu-element.md)|
   
### Parent elements

||
|:-----|
|[CommandUI](commandui-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

