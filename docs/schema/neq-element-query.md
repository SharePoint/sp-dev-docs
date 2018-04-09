---
title: "Neq Element (Query)"
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
ms.assetid: 3fea64f4-fb3b-4f5f-95dc-29ec03e32acf
description: "Last modified: March 09, 2015"
---

# Neq Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Arithmetic operator that means "not equal to" and is used in queries.
  
```
<Neq>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Neq>
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
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example queries the Status field for cases where the value does not equal Completed or is **null**, returning the results according to a descending sort on the Modified field. The **Where** element contains an **Or** element to group the filters. 
  
```XML
<Query>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
  </OrderBy>
  <Where>
    <Or>
      <Neq>
        <FieldRef Name="Status"></FieldRef>
        <Value Type="Text">Completed</Value>
      </Neq>
      <IsNull>
        <FieldRef Name="Status"></FieldRef>
      </IsNull>
     </Or>
   </Where>
</Query>
```

## See also



[Eq Element (Query)](eq-element-query.md)
  
[Geq Element (Query)](geq-element-query.md)
  
[Gt Element (Query)](gt-element-query.md)
  
[Lt Element (Query)](lt-element-query.md)

