---
title: "Or Element (Query)"
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
ms.assetid: a2e4f3fc-12b5-4fe3-a1ca-9a5c118479d3
description: "Last modified: March 09, 2015"
---

# Or Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within the [Where](where-element-query.md) element to group filters in a query. 
  
```
<Or>
</Or>
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
|[And](and-element-query.md), [BeginsWith](beginswith-element-query.md), [Contains](contains-element-query.md), [DateRangesOverlap](daterangesoverlap-element-query.md), [Eq](eq-element-query.md), [Geq](geq-element-query.md), [Gt](gt-element-query.md), [In](in-element-query.md), [Includes](includes-element-query.md), [IsNotNull](isnotnull-element-query.md), [IsNull](isnull-element-query.md), [Leq](leq-element-query.md), [Lt](lt-element-query.md), [Membership](membership-element-query.md), [Neq](neq-element-query.md), [NotIncludes](notincludes-element-query.md), [Or](or-element-query.md)|
   
### Parent elements

||
|:-----|
|[And](and-element-query.md), [Or](or-element-query.md), [Where](where-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

This element can be nested inside other **Or** and [And](and-element-query.md) elements. The server supports unlimited complicated queries. However, any given **Or** element can have only two disjuncts; that is, only two child elements. If you need to disjoin three or more conditions, you must nest the **Or** elements, as demonstrated by the second example in the following section. 
  
## Example

The following example performs a query for cases in which values of the Status field either do not equal Completed or are **null**. The results are sorted in descending order according to the Modified field.
  
```
<Query>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
  </OrderBy>
  <Where>
    <Or>
      <Neq>
        <FieldRef Name="Status"></FieldRef>
        <Value Type="Text"></Value>
      </Neq>
      <IsNull>
        <FieldRef Name="Status"></FieldRef>
      </IsNull>
    </Or>
  </Where>
</Query>
```

The following example shows how to disjoin three conditions. Note that the first pair of conditions are within their own **Or** element, which is itself a condition of an outer **Or** element. 
  
```
<Where>
  <Or>
    <Or>
      <Eq><FieldRef Name="LastName" />
        <Value Type="Text">Bagel</Value>
      </Eq>
      <Eq><FieldRef Name="LastName" />
        <Value Type="Text">Smith</Value>
      </Eq>
    </Or>
    <Includes>
      <FieldRef Name="Title" /><Value Type="Text">President</Value>
    </Includes>
  </Or>
</Where>

```


