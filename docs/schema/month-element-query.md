---
title: "Month Element (Query)"
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
ms.assetid: ff0c7293-6426-4a70-9267-ee504baebc9e
description: "Last modified: March 09, 2015"
---

# Month Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in the [DateRangesOverlap](daterangesoverlap-element-query.md) element to retrieve from a calendar all instances of a recurring event that occur within a month. 
  
```
<DateRangesOverlap>  <FieldRef Name= "EventDate" />  <FieldRef Name= "EndDate" />  <FieldRef Name= "RecurrenceID" />  <Value Type=\"DateTime\">    <Month />  </Value></DateRangesOverlap>
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
|None |
   
### Parent elements

||
|:-----|
|[Value](value-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## See also



[Now Element (Query)](now-element-query.md)
  
[Today Element (Query)](today-element-query.md)

