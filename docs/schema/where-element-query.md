---
title: Where element (Query)
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
ms.assetid: afca9360-75fe-4e05-bbd1-149f2eb3b7a7
description: In CAML, used within the context of a query to specify a filter.
---

# Where element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within the context of a query to specify a filter.
  
```XML
<Where>
</Where>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [And](and-element-query.md)
- [BeginsWith](beginswith-element-query.md)
- [Contains](contains-element-query.md)
- [DateRangesOverlap](daterangesoverlap-element-query.md)
- [Eq](eq-element-query.md)
- [Geq](geq-element-query.md)
- [Gt](gt-element-query.md)
- [In](in-element-query.md)
- [Includes](includes-element-query.md)
- [IsNotNull](isnotnull-element-query.md)
- [IsNull](isnull-element-query.md)
- [Leq](leq-element-query.md)
- [Lt](lt-element-query.md)
- [Membership](membership-element-query.md)
- [Neq](neq-element-query.md)
- [NotIncludes](notincludes-element-query.md)
- [Or](or-element-query.md)
   
### Parent elements

- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
- [Query](query-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

The **Where** clause translates into the SQL **SELECT** statement. The format of the **Where** clause is a structured XML tree with a mixture of comparison operators, simple arithmetic operators, field (column) references, constant values, and predefined Collaborative Application Markup Language (CAML) constants. 
  
Fields referenced in a **Where** element do not have to be fields of the primary list that is being queried. If a foreign list is being joined, fields from the foreign list can be itemized in a [ProjectedFields](projectedfields-element-view.md) element and can then be referenced in the **Where** element. 
  
## Example

In the following example, the **Where** element uses the [Geq](geq-element-query.md) element as the filter in the query, returning cases where the date and time value in the **Expires** field is greater than today's date and time. 
  
```XML
<Query>
  <Where>
    <Geq>
      <FieldRef Name="Expires"/>
      <Value Type="DateTime">
        <Today/>
      </Value>
    </Geq>
  </Where>
  <OrderBy>
    <FieldRef Name="Modified"/>
  </OrderBy>
</Query>
```

<br/>

