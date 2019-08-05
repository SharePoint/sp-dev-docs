---
title: Expr element (View)
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
ms.assetid: 1c48aeb1-18dc-4f5f-8156-96ac1b821e77
description: Contains a CAML expression that is evaluated to determine the course of action for a Switch or FieldSwitch statement. 
---

# Expr element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a CAML expression that is evaluated to determine the course of action for a [Switch](switch-element-view.md) or [FieldSwitch](fieldswitch-element-view.md) statement. The expressions can be any set of CAML elements that render text, or they can be other conditionals. 
  
```XML
<Expr>
</Expr>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

Numerous 
   
### Parent elements

- [FieldSwitch](fieldswitch-element-view.md)
- [Switch](switch-element-view.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
## Example

The following example checks the value of a **UserID** field and returns "User Zero" if the value is 0 (zero). Otherwise, it sets a default value: "Not User Zero". 
  
```XML
<Switch>
  <Expr><UserID/></Expr>
  <Case Value="0">User Zero</Case>
  <Default>Not User Zero</Default>
</Switch>
```

## See also

- [Expr1 element (View)](expr1-element-view.md)  
- [Expr2 element (View)](expr2-element-view.md)

