---
title: "SchemaSecurity element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 879efff7-9ac3-4653-b9e8-cf5b4e31e2b2
description: Contains the Schema security setting for a list.
---

# SchemaSecurity element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the Schema security setting for a list.
  
```XML
<SchemaSecurity>
</SchemaSecurity>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [Security](security-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

The **SchemaSecurity** element can contain the following values: 
  
- **1** — Anyone can modify the schema (add and delete columns, etc.).
  
- **2** — Only the list owner can modify the schema.

For an example that shows how to use the **SchemaSecurity** element, see [Security element](security-element.md).
  
## See also

- [ReadSecurity element](readsecurity-element.md) 
- [WriteSecurity element](writesecurity-element.md)

