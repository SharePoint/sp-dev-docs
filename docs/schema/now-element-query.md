---
title: Now element (Query)
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
ms.assetid: dcc172ed-cb4b-4cb9-9add-931332be5ee1
description: In CAML, returns the current date and time.
---

# Now element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the current date and time.
  
```XML
<Now>
</Now>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
## Example

The following example queries for cases where a recurring event overlaps with the current date and time.
  
```XML
<Query>
   <Where>
      <DateRangesOverlap>
         <FieldRef Name="EventDate" />
         <FieldRef Name="EndDate" />
         <FieldRef Name="RecurrenceID" />
         <Value Type="DateTime">
            <Now />
         </Value>
      </DateRangesOverlap>
   </Where>
</Query>
```

## See also

- [TodayISO element](todayiso-element.md)
- [Month element (Regional Settings)](month-element-regional-settings.md) 
- [Today element (Query)](today-element-query.md)

