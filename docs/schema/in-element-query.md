---
title: In element (Query)
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
ms.assetid: 576fe054-c54b-4282-ac53-d94345845ddc
description: In CAML, specifies whether the value of a list item for the field specified by the FieldRef element is equal to one of the values specified by the Values element. 
---

# In element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies whether the value of a list item for the field specified by the [FieldRef](fieldref-element-query.md) element is equal to one of the values specified by the [Values](values-element-query.md) element. 
  
```XML
<In>
  <FieldRef Name = "Field_Name"/>
  <Values>    <Value Type = "Field_Type"/>
  </Values>  <XML />
</In>
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
   
### Remarks

The **In** element does not support the use of negation operators such as [Neq](neq-element-query.md) or [NotIncludes](notincludes-element-query.md).
  

