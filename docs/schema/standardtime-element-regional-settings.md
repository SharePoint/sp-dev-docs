---
title: "StandardTime Element (Regional Settings)"
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
ms.assetid: b025e10a-2fa1-4965-91b0-b87e7b959b02
description: "Last modified: March 09, 2015"
---

# StandardTime Element (Regional Settings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG) to contain both the bias in minutes that standard time for a time zone differs from Coordinated Universal Time (UTC), and the date on which standard time begins.
  
```
<StandardTime>
  <Bias>
  </Bias>
  <Date>
  ...
  </Date>
</StandardTime>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Bias](bias-element-regional-settings.md), [Date](date-element-regional-settings.md)|
   
## Parent Elements

||
|:-----|
|[History](history-element-regional-settings.md), [TimeZone](timezone-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example from the file TIMEZONE.XML uses the **StandardTime** element to specify the date and time on which standard time begins for a time zone. 
  
```XML
<StandardTime>
   <Bias>0</Bias>
   <Date>
      <Month>9</Month>
      <Day>4</Day>
      <Hour>2</Hour>
      <DayOfWeek>2</DayOfWeek>
   </Date>
</StandardTime>
```


