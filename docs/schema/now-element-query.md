---
title: "Now Element (Query)"
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
ms.assetid: dcc172ed-cb4b-4cb9-9add-931332be5ee1
description: "Last modified: March 09, 2015"
---

# Now Element (Query)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns the current date and time.
  
```
<Now>
</Now>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
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

#### Reference

[TodayISO Element](../../collaborative-application-markup-language-caml-schemas/general-schema/todayiso-element.md)
#### Other resources

[Month Element (Regional Settings)](../../collaborative-application-markup-language-caml-schemas/regional-settings-schema/month-element-regional-settings.md)
  
[Today Element (Query)](today-element-query.md)

