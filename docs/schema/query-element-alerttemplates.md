---
title: "Query Element (AlertTemplates)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: 21185fee-8967-40be-bfa5-5dc7c905832c
description: "Last modified: March 09, 2015"
---

# Query Element (AlertTemplates)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies a query for the alert template filter. Define the query element inside the filter by using Collaborative Application Markup Language (CAML). For more information about CAML query schema, see [Query Schema](../../collaborative-application-markup-language-caml-schemas/query-schema/query-schema.md). The **Query** element in the Alerts schema contains no **Where** element. 
  
```
<Query>
  <GroupBy>
    ...
    </GroupBy>
  <OrderBy>
    ...
    </OrderBy>
</Query>
```

## Attributes

None
  
## Child Elements

||
|:-----|
|[GroupBy](../../collaborative-application-markup-language-caml-schemas/query-schema/groupby-element-query.md) <br/> |
|[OrderBy](../../collaborative-application-markup-language-caml-schemas/query-schema/orderby-element-query.md) <br/> |
   
## Parent Element

||
|:-----|
|[FilterDefinition](filterdefinition-element-alerttemplates.md)|
   
## Example

For an example of how this element is used, see [FilterDefinition Element (AlertTemplates)](filterdefinition-element-alerttemplates.md).
  

