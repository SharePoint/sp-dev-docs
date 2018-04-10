---
title: DateRangesOverlap element (Query)
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
ms.assetid: 26679fed-cd18-4b67-a307-0086b8c61486
description: In CAML, used in queries to compare the dates in a recurring event with a specified DateTime value to determine whether they overlap.
---

# DateRangesOverlap element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in queries to compare the dates in a recurring event with a specified **DateTime** value to determine whether they overlap. 
  
```XML
<DateRangesOverlap>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</DateRangesOverlap>
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
   
## Example

The following example compares the event date and end date of a recurring event with the current date and time.
  
```XML
<Query>
   <Where>
      <DateRangesOverlap>
         <FieldRef Name="EventDate"></FieldRef>
         <FieldRef Name="EndDate"></FieldRef>
         <FieldRef Name="RecurrenceID"></FieldRef>
         <Value Type="DateTime">
            <Now/>
         </Value>
      </DateRangesOverlap>
   </Where>
</Query>
```

<br/>

