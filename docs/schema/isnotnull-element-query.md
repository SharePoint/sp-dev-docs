---
title: "IsNotNull Element (Query)"
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
ms.assetid: 6daea2fc-d7f3-434d-bd97-bd9f9faef108
description: "Last modified: March 09, 2015"
---

# IsNotNull Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within a query to return items that are not empty (**Null**).
  
```
<IsNotNull>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</IsNotNull>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[FieldRef](fieldref-element-query.md), [Value](value-element-query.md), [XML](xml-element.md)|
   
### Parent elements

||
|:-----|
|[And](and-element-query.md), [Or](or-element-query.md), [Where](where-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following query returns cases where the field base type is 1, the ID field equals the Project column, and the Template column is not empty. Results are returned in ascending order by Title and then by ID.
  
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
      <IsNotNull>
        <FieldRef Name="Template"></FieldRef>
      </IsNotNull>
    </And>
  </Where>
  <OrderBy>
    <FieldRef Name="Title"></FieldRef>
    <FieldRef Name="ID"></FieldRef>
  </OrderBy>
</Query>
```

## See also



[IsNull Element (Query)](isnull-element-query.md)
  
[Where Element (Query)](where-element-query.md)

