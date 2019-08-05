---
title: Expr1 element (View)
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
ms.assetid: 6e9e8947-bdf2-4973-bc92-2ee00fc84cbf
description: Used within as part of a comparison with the value contained in an Expr2 element. 
---

# Expr1 element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within as part of a comparison with the value contained in an [Expr2](expr2-element-view.md) element. The **Expr1** element contains the CAML expression that is evaluated to determine the course of action. The expressions can be any set of CAML elements that render text, or they can be other conditionals. 
  
```XML
<Expr1>
</Expr1>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [BeginsWith](beginswith-element-query.md)
- [Column](column-element-view.md)
- [Contains](contains-element-query.md)
- [Eq](eq-element-query.md)
- [Field](field-element-view.md)
- [GetVar](getvar-element-view.md)
- [GroupBy](groupby-element-query.md)
- [ListProperty](listproperty-element-view.md)
- [LookupColumn](lookupcolumn-element-view.md)
- [OrderBy](orderby-element-query.md)
- [Where](where-element-query.md)
   
### Parent elements

- [IfEqual](ifequal-element-view.md)
- [IfNeg](ifneg-element-view.md)
- [IfSubString](ifsubstring-element-view.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
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

- [Expr element (View)](expr-element-view.md) 
- [Expr2 element (View)](expr2-element-view.md)

