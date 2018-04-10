---
title: Lt element (Query)
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
description: In CAML, arithmetic operator that means "less than" and is used in queries in views. Used similarly to the Eq and Gt elements.
---

# Lt element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Arithmetic operator that means "less than" and is used in queries in views. This element is used similarly to the [Eq](eq-element-query.md) and [Gt](gt-element-query.md) elements. 
  
```XML
<Lt>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Lt>
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

- [Eq element (Query)](eq-element-query.md)  
- [Geq element (Query)](geq-element-query.md)  
- [Gt element (Query)](gt-element-query.md)  
- [Neq element (Query)](neq-element-query.md)

