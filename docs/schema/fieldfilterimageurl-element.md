---
title: "FieldFilterImageURL element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cbafc593-010d-4278-af89-e38295da9a67
description: Returns the URL to the icon that is used to indicate filtering on a list.
---

# FieldFilterImageURL element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the URL to the icon that is used to indicate filtering on a list.
  
```XML
<FieldFilterImageURL>
</FieldFilterImageURL>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
### Remarks

This element is used in the [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) file in the HeaderPattern sections. 
  
## Example

The following excerpt uses the **FieldFilterImageURL** element to assemble the `<IMG>` tag for displaying the filter image. 
  
```XML
<HTML><![CDATA[ <IMG SRC=" ]]></HTML>
<FieldFilterImageURL />
<HTML><![CDATA[ " BORDER=0 ALT= ]]></HTML>
<HTML>"Filter"</HTML>
<HTML><![CDATA[ > ]]></HTML>
```

## See also

- [FieldSortImageURL element](fieldsortimageurl-element.md)
- [FieldSortParams element (View)](fieldsortparams-element-view.md)

