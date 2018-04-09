---
title: "Expr2 Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: 81f23130-7926-4c38-aad8-12b404489498
description: "Last modified: March 09, 2015"
---

# Expr2 Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used as part of a comparison with the value contained in an [Expr1](expr1-element-view.md) element. The **Expr2** element contains the CAML expression that is evaluated to determine the course of action. The expressions can be any set of CAML elements that render text, or they can be other conditionals. 
  
```
<Expr2>
</Expr2>
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
|[BeginsWith](../../collaborative-application-markup-language-caml-schemas/query-schema/beginswith-element-query.md), [Column](column-element-view.md), [Contains](../../collaborative-application-markup-language-caml-schemas/query-schema/contains-element-query.md), [Eq](../../collaborative-application-markup-language-caml-schemas/query-schema/eq-element-query.md), [Field](field-element-view.md), [GetVar](getvar-element-view.md), [GroupBy](../../collaborative-application-markup-language-caml-schemas/query-schema/groupby-element-query.md), [ListProperty](listproperty-element-view.md), [LookupColumn](lookupcolumn-element-view.md), [OrderBy](../../collaborative-application-markup-language-caml-schemas/query-schema/orderby-element-query.md), [Where](../../collaborative-application-markup-language-caml-schemas/query-schema/where-element-query.md)|
   
### Parent elements

||
|:-----|
|[IfEqual](ifequal-element-view.md), [IfNeg](ifneg-element-view.md), [IfSubString](ifsubstring-element-view.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example evaluates two expressions, and if they are equal, it conveys a holiday greeting, but if not, it conveys a different message.
  
```XML
<IfEqual>
  <Expr1><Today/></Expr1>
  <Expr2>10/31/2000</Expr2>
  <Then>Happy Halloween!</Then>
  <Else>Just another day</Else>
</IfEqual>
```

## See also



[Expr Element (View)](expr-element-view.md)
  
[Expr1 Element (View)](expr1-element-view.md)

