---
title: "Date element (Regional Settings)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Regional Settings schema
api_type:
- schema
ms.assetid: 693febc5-5e66-402c-a4e1-6dde9a9674e9
description: Used in TIMEZONE.XML to contain the date and time on which standard time or daylight saving time begins for a time zone.
---

# Date element (Regional Settings)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG) to contain the date and time on which standard time or daylight saving time begins for a time zone.
  
```XML
<Date>
  <Day>
  </Day>
  <DayOfWeek>
  </DayOfWeek>
  <Hour>
    </Hour>
  <Month>
    </Month>
</Date>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Day](day-element-regional-settings.md)
- [DayOfWeek](dayofweek-element-regional-settings.md)
- [Hour](hour-element-regional-settings.md)
- [Month](month-element-regional-settings.md)
   
### Parent elements

- [DaylightTime](daylighttime-element-regional-settings.md)
- [StandardTime](standardtime-element-regional-settings.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

For an example that shows how to use the **Date** element, see [StandardTime element (Regional Settings)](standardtime-element-regional-settings.md). 
  

