---
title: Else element (View)
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
ms.assetid: c8f24def-d371-4490-9d3a-6913a3d6f9a6
description: The instructions within this element are executed if the expressions contained in the IfEqual element are not TRUE.
---

# Else element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The instructions within this element are executed if the expressions contained in the [IfEqual](ifequal-element-view.md) element are not **TRUE**.
  
```XML
<Else>
</Else>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

Numerous 
   
### Parent elements

- [IfEqual](ifequal-element-view.md)
- [IfHasRights](ifhasrights-element-view.md)
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
- [Expr1 element (View)](expr1-element-view.md)  
- [Expr2 element (View)](expr2-element-view.md)
- [Then element (View)](then-element-view.md)

