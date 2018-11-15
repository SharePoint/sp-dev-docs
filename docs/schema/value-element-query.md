---
title: Value element (Query)
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
ms.assetid: 47780c18-200a-40d8-8d75-2b51637ac827
description: In CAML, contains the value against which the value returned by the FieldRef element is compared. 
---

# Value element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the value against which the value returned by the [FieldRef](fieldref-element-query.md) element is compared. 
  
```XML
<Value
  Type = "Text"
  IncludeTimeValue = "TRUE" | "FALSE">
</Value>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** <br/> |Required **Text**. Specifies the data type for the value contained by this element.  <br/> |
|**IncludeTimeValue** <br/> |Optional **Boolean**. Specifies to build **DateTime** queries based on time as well as date. If you do not set this attribute, the time portion of queries that involve date and time are ignored.  <br/> |
   
### Child elements

- [ListProperty](listproperty-element-query.md)
- [Month](month-element-query.md)
- [Now](now-element-query.md)
- [Today](today-element-query.md)
- [UserID](userid-element-query.md)
- [XML](xml-element.md)
   
### Parent elements

- [BeginsWith](beginswith-element-query.md)
- [Contains](contains-element-query.md)
- [DateRangesOverlap](daterangesoverlap-element-query.md)
- [Eq](eq-element-query.md)
- [Geq](geq-element-query.md)
- [Gt](gt-element-query.md)
- [Includes](includes-element-query.md)
- [IsNotNull](isnotnull-element-query.md)
- [IsNull](isnull-element-query.md)
- [Leq](leq-element-query.md)
- [Lt](lt-element-query.md)
- [Neq](neq-element-query.md)
- [NotIncludes](notincludes-element-query.md)
- [Values](values-element-query.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
## Example

In the following example, the query returns cases where the **BaseType** field equals 1, and the **Project** field equals the ID of the current project property. Results are returned in ascending order, first by Title and then by ID. 
  
```XML
<Query>
  <Where>
    <And>
      <Eq>
        <FieldRef Name="BaseType" />
        <Value Type="Integer">1</Value>
      </Eq>
      <Eq>
        <FieldRef Name="Project" />
        <Value Type="Integer">
          <ProjectProperty Select="ID" />
        </Value>
      </Eq>
    </And>
  </Where>
  <OrderBy>
    <FieldRef Name="Title" />
    <FieldRef Name="ID" />
  </OrderBy>
</Query>
```

<br/>

