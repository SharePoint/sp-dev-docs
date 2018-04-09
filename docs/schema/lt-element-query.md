---
title: "Lt Element (Query)"
ms.

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
ms.assetid: f3646281-4de5-4152-867a-7d7824fcb61d
description: "Last modified: March 09, 2015"
---

# Lt Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Arithmetic operator that means "less than" and is used in queries in views. This element is used similarly to the [Eq](eq-element-query.md) and [Gt](gt-element-query.md) elements. 
  
```
<Lt>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Lt>
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
   
### Remarks

Remember that Collaborative Application Markup Language (CAML) is case-sensitive; note the lowercase "t" in the **Lt** element name. 
  
## Example

The following example queries for cases where the Deadline field value either equals an empty string or is less than the current date.
  
```XML
<Query>
  <Where>
    <Or>
      <IsNull>
        <FieldRef Name="Deadline" />
      </IsNull>
      <Lt>
        <FieldRef Name="Deadline" />
        <Value Type="DateTime">
          <Today />
        </Value>
      </Lt>
    </Or>
  </Where>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE" />
  </OrderBy>
</Query>
```

## See also



[Eq Element (Query)](eq-element-query.md)
  
[Geq Element (Query)](geq-element-query.md)
  
[Gt Element (Query)](gt-element-query.md)
  
[Neq Element (Query)](neq-element-query.md)

