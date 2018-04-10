---
title: IsNull element (Query)
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
ms.assetid: e2c22c5a-5119-4494-8fd6-fa1d8815956f
description: In CAML, used within a query to return items that are empty (Null).
---

# IsNull element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within a query to return items that are empty (**Null**).
  
```XML
<IsNull>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</IsNull>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [FieldRef](fieldref-element-query.md)
- [Value](value-element-query.md)
- [XML](xml-element.md)
   
### Parent elements

- [And](and-element-query.md)
- [Or](or-element-query.md)
- [Where](where-element-query.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
## Example

The following query returns cases where the field base type is 1, the ID column equals the Project column, and the Template column is empty. Results are returned in ascending order by Title and then by ID.
  
```XML
<Query>
  <Where>
    <And>
      <And>
        <Eq>
          <FieldRef Name="BaseType"></FieldRef>
          <Value Type="Integer">1</Value>
        </Eq>
        <Eq>
          <FieldRef Name="Project"></FieldRef>
          <Value Type="Integer">
            <ProjectProperty Select="ID"></ProjectProperty>
          </Value>
        </Eq>
      </And>
      <IsNull>
        <FieldRef Name="Template"></FieldRef>
      </IsNull>
    </And>
  </Where>
  <OrderBy>
    <FieldRef Name="Title"></FieldRef>
    <FieldRef Name="ID"></FieldRef>
  </OrderBy>
</Query>
```

## See also

- [IsNotNull element (Query)](isnotnull-element-query.md)
- [Where element (Query)](where-element-query.md)

