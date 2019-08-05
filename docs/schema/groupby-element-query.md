---
title: GroupBy element (Query)
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
ms.assetid: b368a7bf-13dc-4752-8cfd-cb59cdf1295f
description: In CAML, contains a Group By section for grouping the data returned through a query in a list view.
---

# GroupBy element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a Group By section for grouping the data returned through a query in a list view.
  
```XML
<GroupBy
  Collapse = "TRUE" | "FALSE">
  <FieldRef Name = "Field_Name"/>
</GroupBy>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Collapse  <br/> |Optional **Boolean**. **TRUE** for the Group By section in the list view to be collapsed by default.  <br/> |
   
### Child elements

- [FieldRef](fieldref-element-query.md)
   
### Parent elements

- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
- [Query](query-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   

