---
title: Includes element (Query)
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
ms.assetid: cb5e5d85-4c7d-4391-af21-210648b1c719
description: In CAML, if the specified field is a Lookup field that allows multiple values, specifies that the Value element is included in the list item for the field that is specified by the FieldRef element. 
---

# Includes element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
If the specified field is a Lookup field that allows multiple values, specifies that the [Value](values-element-query.md) element is included in the list item for the field that is specified by the [FieldRef](fieldref-element-query.md) element. 
  
```XML
<Includes>
  <FieldRef    Name = "Field_Name"/>
  <Value    Type = "Field_Type"/>
  <XML />
</Includes>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [FieldRef](fieldref-element-query.md)
- [Values](values-element-query.md)
- [XML](xml-element.md)
   
### Parent elements

- [And](and-element-query.md)
- [Or](or-element-query.md)
- [Where](where-element-query.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   

