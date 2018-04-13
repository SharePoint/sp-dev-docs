---
title: QAT element (Server Ribbon)
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
ms.assetid: 795f4be2-9dd2-4da0-88bb-2b0bc33a6133
description: Defines a quick-access toolbar.
---

# QAT element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a quick-access toolbar.
  
```XML
<QAT
  Id="Text"
  ImageDownArrow="Url"
  ImageDownArrowClass="CSS Class Selector"
  ImageDownArrowLeft="Negative Integer"
  ImageDownArrowTop="Negative Integer"
  ImageSideArrow="Url"
  ImageSideArrowClass="CSS Class Selector"
  ImageSideArrowLeft="Negative Integer"
  ImageSideArrowTop="Negative Integer"
  ImageUpArrow="Url"
  ImageUpArrowClass="CSS Class Selector"
  ImageUpArrowLeft="Negative Integer"
  ImageUpArrowTop="Negative Integer"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. A string that identifies the element.  <br/> |
|**ImageDownArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the down arrow, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**ImageDownArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the down arrow image.  <br/> |
|**ImageDownArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageDownArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageDownArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageDownArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageDownArrowTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageSideArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the side arrow.  <br/> |
|**ImageSideArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the side arrow image.  <br/> |
|**ImageSideArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageSideArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageSideArrowLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageSideArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageSideArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageSideArrowTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageUpArrow** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to use for the up arrow, such as "/_layouts/images/arwup.gif".  <br/> |
|**ImageUpArrowClass** <br/> |Optional. The name of a CSS class selector to be applied to the up arrow image.  <br/> |
|**ImageUpArrowLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ImageUpArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageUpArrowLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
|**ImageUpArrowTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ImageUpArrow** attribute points to an image file that contains the images for many icons. The value of the **ImageUpArrowTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag when the page is created.  <br/> |
   
### Child elements

- [Controls](controls-element-group.md)
   
### Parent elements

- [CommandUI](commandui-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   

