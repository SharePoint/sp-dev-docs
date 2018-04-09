---
title: "History Element (Regional Settings)"
ms.author: NormSohl
author: NormSohl
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
ms.assetid: 95c9150b-70e1-4368-8758-2ab850689be8
description: "Last modified: March 09, 2015"
---

# History Element (Regional Settings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG) to preserve former time zone definitions, so that, after the new 2007 time zones take effect, time values for 2006 and earlier will still be calculated correctly.
  
```
<History
  Year = "Integer">
    <StandardTime>
      ...
    </StandardTime>
  <DaylightTime>
      ...
    </DaylightTime>
</History>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Year** <br/> |Required **Integer**. Specifies the final year for which to preserve a time zone definition.  <br/> |
   
## Child Elements

||
|:-----|
|[Bias](bias-element-regional-settings.md), [DaylightTime](daylighttime-element-regional-settings.md), [StandardTime](standardtime-element-regional-settings.md)|
   
## Parent Elements

||
|:-----|
|[TimeZone](timezone-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Remarks

The **History** element can apply to any time zone for any year indicated. 
  

