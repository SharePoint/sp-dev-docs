---
title: "Filters element (AlertTemplates)"
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
description: Filters enable you to create new triggers for an event such as "the priority of a task has changed."
---

# Filters element (AlertTemplates)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Filters enable you to create new triggers for an event such as *the priority of a task has changed*. To modify existing filters or create additional filters, modify the [Filter Definition](filterdefinition-element-alerttemplates.md) element of the appropriate template. Define the [Query](query-element-alerttemplates.md) element inside the filter by using [Collaborative Application Markup Language (CAML)](collaborative-application-markup-language-caml-schemas.md).
  
```XML
<Filters>
  <FilterDefinition>
    ...
  </FilterDefinition>  [<FilterDefinition>
    ...
  </FilterDefinition>]
</Filters>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [FilterDefinition](filterdefinition-element-alerttemplates.md)
   
### Parent elements

- [AlertTemplate](alerttemplate-element-alerttemplates.md)
   
## Example

For an example of how this element is used, see [FilterDefinition element (AlertTemplates)](filterdefinition-element-alerttemplates.md).
  

