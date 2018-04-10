---
title: "Leq Element (Query)"
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
ms.assetid: 15c8af55-adc8-4978-a8fd-080c407f665f
description: "Last modified: March 09, 2015"
---

# Leq Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Arithmetic operator that means "less than or equal to." The **Leq** element is used in view queries similarly to the [Eq](eq-element-query.md) and [Geq](geq-element-query.md) elements. 
  
```
<Leq>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Leq>
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

The following example queries for cases where the Expires field value either equals an empty string or is less than or equal to the current date.
  
```XML
<Query> 
  <Where> 
    <Or> 
      <IsNull> 
        <FieldRef Name="Expires" />  
      </IsNull> 
      <Leq> 
        <FieldRef Name="Expires" />  
        <Value Type="DateTime"> 
          <Today />  
        </Value> 
      </Leq> 
    </Or> 
  </Where> 
  <OrderBy> 
    <FieldRef Name="Modified" Ascending="FALSE" />  
  </OrderBy> 
</Query>
```

## See also



[Geq Element (Query)](geq-element-query.md)
  
[Eq Element (Query)](eq-element-query.md)
  
[Gt Element (Query)](gt-element-query.md)
  
[Lt Element (Query)](lt-element-query.md)
  
[Neq Element (Query)](neq-element-query.md)

