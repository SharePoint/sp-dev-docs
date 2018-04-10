---
title: OrderBy element (Query)
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
ms.assetid: 7a659d08-9060-41d1-9a1c-e5a61376f3ba
description: In CAML, determines the sort order for a query. The OrderBy element contains a group of FieldRef elements. 
---

# OrderBy element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Determines the sort order for a query. The **OrderBy** element contains a group of [FieldRef](fieldref-element-query.md) elements. 
  
```XML
<OrderBy  Override = "TRUE" | "FALSE"  UseIndexForOrderBy = "TRUE" | "FALSE">
  <FieldRef
    Ascending = "TRUE" | "FALSE"
    Name = "Text" />
    ...
</OrderBy>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Override** <br/> |Optional **Boolean**.  <br/> |
|**UseIndexForOrderBy** <br/> |Optional **Boolean**.  <br/> |
   
### Child elements

- [FieldRef](fieldref-element-query.md)
   
### Parent elements

- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
- [Query](query-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

The order in which the fields appear is the order in which the fields are sorted. The value of the **Ascending** attribute in the [FieldRef](fieldref-element-list.md) element determines whether to sort in ascending order. 
  
## Example

The following example sorts the fields first in ascending order by the Newcomers field, next in descending order by Years, and finally in ascending order by Location.
  
```XML
<OrderBy>
  <FieldRef Name="Newcomers"/>
  <FieldRef Name="Years" Ascending="FALSE"/>
  <FieldRef Name="Location"/>
</OrderBy>
```

<br/>

