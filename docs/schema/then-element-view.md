---
title: "Then Element (View)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 85d00ff9-fd0a-4fb1-8bd1-29ea84f0f470
description: "Last modified: March 09, 2015"
---

# Then Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains what is rendered in an [IfEqual](ifequal-element-view.md) or [IfNew](ifnew-element-view.md) element, based on whether the contents of the [Expr1](expr1-element-view.md) and [Expr2](expr2-element-view.md) elements are equal or new, respectively. 
  
```
<Then>
</Then>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|Numerous |
   
### Parent elements

||
|:-----|
|[IfEqual](ifequal-element-view.md), [IfHasRights](ifhasrights-element-view.md), [IfNew](ifnew-element-view.md), [IfSubString](ifsubstring-element-view.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example uses the **IfEqual** element to render either the [Then](then-element-view.md) element or the [Else](else-element-view.md) element, based on whether the contents of the [Expr1](expr1-element-view.md) and [Expr2](expr2-element-view.md) elements are equal. 
  
```XML
<IfEqual>
  <Expr1><Today/></Expr1>
  <Expr2>10/31/2000</Expr2>
  <Then>Happy Halloween!</Then>
  <Else>Just another day</Else>
</IfEqual>
```

## See also



[Else Element (View)](else-element-view.md)
  
[Expr1 Element (View)](expr1-element-view.md)
  
[Expr2 Element (View)](expr2-element-view.md)

