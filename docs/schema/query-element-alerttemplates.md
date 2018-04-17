---
title: "Query element (AlertTemplates)"
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
description: Specifies a query for the alert template filter.
---

# Query element (AlertTemplates)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a query for the alert template filter. Define the query element inside the filter by using Collaborative Application Markup Language (CAML). For more information about CAML query schema, see [Query schema](query-schema.md). The **Query** element in the Alerts schema contains no **Where** element. 
  
```XML
<Query>
  <GroupBy>
    ...
    </GroupBy>
  <OrderBy>
    ...
    </OrderBy>
</Query>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

- [GroupBy](groupby-element-query.md) 
- [OrderBy](orderby-element-query.md) 
   
### Parent elements

- [FilterDefinition](filterdefinition-element-alerttemplates.md)
   
## Example

For an example of how this element is used, see [FilterDefinition element (AlertTemplates)](filterdefinition-element-alerttemplates.md).
  

