---
title: "Filters Element (AlertTemplates)"
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
ms.assetid: 9ddc11ad-dcb2-423d-a69f-09545611eada
description: "Last modified: March 09, 2015"
---

# Filters Element (AlertTemplates)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Filters enable you to create new triggers for an event such as "the priority of a task has changed". To modify existing filters or create additional filters, modify the [Filter Definition](filterdefinition-element-alerttemplates.md) element of the appropriate template. Define the [Query](query-element-alerttemplates.md) element inside the filter by using [Collaborative Application Markup Language (CAML)](../../collaborative-application-markup-language-caml-schemas/collaborative-application-markup-language-caml-schemas.md).
  
```
<Filters>
  <FilterDefinition>
    ...
  </FilterDefinition>  [<FilterDefinition>
    ...
  </FilterDefinition>]
</Filters>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[FilterDefinition](filterdefinition-element-alerttemplates.md)|
   
## Parent Elements

||
|:-----|
|[AlertTemplate](alerttemplate-element-alerttemplates.md)|
   
## Example

For an example of how this element is used, see [FilterDefinition Element (AlertTemplates)](filterdefinition-element-alerttemplates.md).
  

