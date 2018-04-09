---
title: "GroupBy Element (Query)"
ms.author: rickki
author: rickki
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
description: "Last modified: March 09, 2015"
---

# GroupBy Element (Query)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains a Group By section for grouping the data returned through a query in a list view.
  
```
<GroupBy
  Collapse = "TRUE" | "FALSE">
  <FieldRef Name = "Field_Name"/>
</GroupBy>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Collapse  <br/> |Optional **Boolean**. **TRUE** for the Group By section in the list view to be collapsed by default.  <br/> |
   
## Child Elements

||
|:-----|
|[FieldRef](fieldref-element-query.md)|
   
## Parent Elements

||
|:-----|
|[Expr1](../../collaborative-application-markup-language-caml-schemas/view-schema/expr1-element-view.md), [Expr2](../../collaborative-application-markup-language-caml-schemas/view-schema/expr2-element-view.md), [Query](../../collaborative-application-markup-language-caml-schemas/list-schema/query-element-list.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

