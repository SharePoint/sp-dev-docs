---
title: "IfNeg element (View)"
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
ms.assetid: 34b025da-e8d2-4bf8-933e-6b6e18997a26
description: Contains two Collaborative Application Markup Language (CAML) expressions and allows for conditional rendering based on whether the first expression contains a negative value.
---

# IfNeg element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains two Collaborative Application Markup Language (CAML) expressions and allows for conditional rendering based on whether the first expression contains a negative value. The first expression is rendered if it contains a negative value, but if not, the second expression is rendered.
  
```XML
<IfNeg>
   <Expr1></Expr1>
   <Expr2></Expr2>   
</IfNeg>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0  
- Maximum: Unbounded  

<br/> 
   

