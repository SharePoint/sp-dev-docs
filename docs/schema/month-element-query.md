---
title: "Month Element (Query)"
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
ms.assetid: ff0c7293-6426-4a70-9267-ee504baebc9e
description: "Last modified: March 09, 2015"
---

# Month Element (Query)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used in the [DateRangesOverlap](daterangesoverlap-element-query.md) element to retrieve from a calendar all instances of a recurring event that occur within a month. 
  
```
<DateRangesOverlap>  <FieldRef Name= "EventDate" />  <FieldRef Name= "EndDate" />  <FieldRef Name= "RecurrenceID" />  <Value Type=\"DateTime\">    <Month />  </Value></DateRangesOverlap>
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
|[Value](value-element-query.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## See also

#### Other resources

[Now Element (Query)](now-element-query.md)
  
[Today Element (Query)](today-element-query.md)

