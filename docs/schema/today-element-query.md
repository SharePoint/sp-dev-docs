---
title: Today element (Query)
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
ms.assetid: cf7173aa-0aed-4324-9fbc-04da0dd343d4
description: In CAML, renders the current date in the format that is relative to the server's local time zone. 
---

# Today element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the current date in the format that is relative to the server's local time zone. For servers in the United States, the format is MM/DD/YYYY (for example, 1/21/2001).
  
```XML
<Today  Offset = "Integer">
</Today>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Offset** <br/> |Optional **Integer**. Adds or subtracts the number of days that are specified by the positive or negative integer value.  <br/> |
   
### Child elements

None
   
### Parent elements

- [Value](value-element-query.md)
   
### Occurrences

- Minimum: 0 
- Maximum: Unbounded 
   
## Example

The following example queries for cases where the due date is today.
  
```XML
<Query>
   <Where>
      <Eq>
         <FieldRef Name="DueDate" />
         <Value Type="DateTime">
            <Today />
         </Value>
      </Eq>
   </Where>
   <OrderBy>
      <FieldRef Name="ID" />
   </OrderBy>
</Query>
```

## See also

- [TodayISO element](todayiso-element.md)
- [Month element (Regional Settings)](month-element-regional-settings.md) 
- [Now element (Query)](now-element-query.md)