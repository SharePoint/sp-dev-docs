---
title: "Eq Element (Query)"
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
ms.assetid: f464f504-2b8e-48e1-bd40-5b5a60c56082
description: "Last modified: March 09, 2015"
---

# Eq Element (Query)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Arithmetic operator that means "equal to" and is used within a query. 
  
```
<Eq>
</Eq>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[FieldRef](fieldref-element-query.md), [Value](value-element-query.md), [XML](xml-element.md)|
   
## Parent Elements

||
|:-----|
|[And](and-element-query.md), [Expr1](../../collaborative-application-markup-language-caml-schemas/view-schema/expr1-element-view.md), [Expr2](../../collaborative-application-markup-language-caml-schemas/view-schema/expr2-element-view.md), [Or](or-element-query.md), [Where](where-element-query.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

If the Status column equals Completed or is empty, the query in the following example returns rows from the Modified column in descending order.
  
```XML
<Query>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
  </OrderBy>
  <Where>
    <Or>
      <Eq>
        <FieldRef Name="Status"></FieldRef>
        <Value Type="Text">Completed</Value>
      </Eq>
      <IsNull>
        <FieldRef Name="Status"></FieldRef>
      </IsNull>
    </Or>
  </Where>
</Query>
```

## See also

#### Other resources

[Geq Element (Query)](geq-element-query.md)
  
[Gt Element (Query)](gt-element-query.md)
  
[Lt Element (Query)](lt-element-query.md)
  
[Neq Element (Query)](neq-element-query.md)

