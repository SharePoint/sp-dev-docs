---
title: Eq element (Query)
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: f464f504-2b8e-48e1-bd40-5b5a60c56082
description: In CAML, arithmetic operator that means "equal to" and is used within a query. 
---

# Eq element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Arithmetic operator that means "equal to" and is used within a query. 
  
```XML
<Eq>
</Eq>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [FieldRef](fieldref-element-query.md)
- [Value](value-element-query.md)
- [XML](xml-element.md)
   
### Parent elements

- [And](and-element-query.md)
- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
- [Or](or-element-query.md)
- [Where](where-element-query.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
## Example

If the Status column equals Completed or is empty, the query in the following example returns rows from the Modified column in descending order.
  
```XML
<Query>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
  </OrderBy>
  <Where>
    <Or>
      <Eq>
        <FieldRef Name="Status"></FieldRef>
        <Value Type="Text">Completed</Value>
      </Eq>
      <IsNull>
        <FieldRef Name="Status"></FieldRef>
      </IsNull>
    </Or>
  </Where>
</Query>
```

## See also

- [Geq element (Query)](geq-element-query.md)  
- [Gt element (Query)](gt-element-query.md)  
- [Lt element (Query)](lt-element-query.md) 
- [Neq element (Query)](neq-element-query.md)

