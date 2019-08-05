---
title: Geq element (Query)
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
ms.assetid: bdb230db-2fc9-4355-971a-8fee6624669c
description: In CAML, arithmetic operator that means "greater than or equal to." This element can be used within a Where element in a query. 
---

# Geq element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Arithmetic operator that means "greater than or equal to." This element can be used within a [Where](where-element-query.md) element in a query. 
  
```XML
<Geq>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Geq>
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
   
### Remarks

Remember that Collaborative Application Markup Language (CAML) is case-sensitive; note the lowercase "eq" in the **Geq** element name. 
  
## Example

The following example queries for cases where the **Expires** field value either equals an empty string or is greater than or equal to the current date: 
  
```XML
<Query>
  <Where>
    <Or>
      <IsNull>
        <FieldRef Name="Expires" />
      </IsNull>
      <Geq>
        <FieldRef Name="Expires" />
        <Value Type="DateTime">
          <Today />
        </Value>
      </Geq>
    </Or>
  </Where>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE" />
  </OrderBy>
</Query>
```

## See also

- [Eq element (Query)](eq-element-query.md) 
- [Gt element (Query)](gt-element-query.md)  
- [Lt element (Query)](lt-element-query.md)
- [Neq element (Query)](neq-element-query.md)

