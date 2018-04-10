---
title: And element (Query)
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
ms.assetid: d71502b2-7f7d-4bd9-9a94-70848d85b24a
description: In CAML, used within the Where element to group filters in a query for a view.
---

# And element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within the [Where](where-element-query.md) element to group filters in a query for a view. 
  
```XML
<And>
</And>
```

## Elements and attributes  

The following sections describe attributes, child elements, and parent elements.  

### Attributes

None
   
### Child elements

- [And](and-element-query.md)
- [BeginsWith](beginswith-element-query.md)
- [Contains](contains-element-query.md)
- [DateRangesOverlap](daterangesoverlap-element-query.md)
- [Eq](eq-element-query.md)
- [Geq](geq-element-query.md)
- [Gt](gt-element-query.md)
- [In](in-element-query.md)
- [Includes](includes-element-query.md)
- [IsNotNull](isnotnull-element-query.md)
- [IsNull](isnull-element-query.md)
- [Leq](leq-element-query.md)
- [Lt](lt-element-query.md)
- [Membership](membership-element-query.md)
- [Neq](neq-element-query.md)
- [NotIncludes](notincludes-element-query.md)
- [Or](or-element-query.md)
   
### Parent elements

- [And](and-element-query.md)
- [Or](or-element-query.md)
- [Where](where-element-query.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
### Remarks

This element can be nested inside other **And** and [Or](or-element-query.md) elements. The server supports unlimited complicated queries. However, any given **And** element can have only two conjuncts; that is, only two child elements. If you need to conjoin three or more conditions, you must nest the **And** elements, as demonstrated by the third example in the following section. 
  
## Example

The following example conveys criteria for a query on the ProductID field: (ProductID = J1539 AND ProductID = J9862) AND (ProductID = J0394 OR ProductID = J4589).
  
```XML
<And>
  <And>
    <Eq>
      <FieldRef Name="ProductID"/>
      <Value Type="Text">J1539</Value>
    </Eq>
    <Eq>
      <FieldRef Name="ProductID"/>
      <Value Type="Text">J9862</Value>
    </Eq>
  </And>
  <Or>
    <Eq>
      <FieldRef Name="ProductID"/>
      <Value Type="Text">J0394</Value>
    </Eq>
    <Eq>
      <FieldRef Name="ProductID"/>
      <Value Type="Text">J4589</Value>
    </Eq>
  </Or>
</And>
```

<br/>

The following example performs a query for cases in which values of the **Status** field do not equal Completed and values of the **Sent** field are **null**. The records returned are sorted in descending order according to values of the **Modified** field. 
  
```XML
<Query>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
  </OrderBy>
  <Where>
    <And>
      <Neq>
        <FieldRef Name="Status"></FieldRef>
        <Value Type="Text">Completed</Value>
      </Neq>
      <IsNull>
        <FieldRef Name="Sent"></FieldRef>
      </IsNull>
    </And>
  </Where>
</Query>
```

<br/>

The following example shows how to conjoin three conditions. Note that the first pair of conditions is within their own **And** element, which is itself a condition of an outer **And** element. 
  
```XML
<Where>
  <And>
    <And>
      <Eq><FieldRef Name="LastName" />
        <Value Type="Text">Bagel</Value>
      </Eq>
      <Eq><FieldRef Name="FirstName" />
        <Value Type="Text">Jean</Value>
      </Eq>
    </And>
    <Includes>
      <FieldRef Name="Title" /><Value Type="Text">President</Value>
    </Includes>
  </And>
</Where>

```

<br/>


