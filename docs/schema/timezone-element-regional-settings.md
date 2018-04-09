---
title: "TimeZone Element (Regional Settings)"
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
ms.assetid: c98179df-d7b5-4baf-b8e5-179310220d2d
description: "Last modified: March 09, 2015"
---

# TimeZone Element (Regional Settings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines a time zone for regional settings in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG). or specifies a time zone in RGNLSTNG.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033\XML).
  
```
<TimeZone
  Hidden = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  ID = "Integer"
    Name = "Text">
  <StandardTime>
  ...
    </StandardTime>
  <DaylightTime>
  ...
    </DaylightTime>
  <History>
  ...
    </History>
</TimeZone>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Hidden** <br/> |Optional **Boolean**.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**ID** <br/> |Required **Integer**. Specifies the ID for the time zone.  <br/> |
|**Name** <br/> |Required **Text**. Specifies the name of the time zone.  <br/> |
   
## Child Elements

||
|:-----|
|[Bias](bias-element-regional-settings.md), [DaylightTime](daylighttime-element-regional-settings.md), [History](history-element-regional-settings.md), [StandardTime](standardtime-element-regional-settings.md)|
   
## Parent Elements

||
|:-----|
|[TimeZones](timezones-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

Outside the context of RGNLSTNG.XML or TIMEZONE.XML, use an empty **TimeZone** element to return the current time zone. 
  
## Example

The following example from the file TIMEZONE.XML defines a time zone.
  
```XML
<TimeZone ID="13" Name="(GMT-08:00) Pacific Time (US and Canada); 
      Tijuana" Hidden="FALSE">
   <Bias>480</Bias>
   <StandardTime>
      <Bias>0</Bias>
      <Date>
         <Month>10</Month>
         <Day>5</Day>
         <Hour>2</Hour>
      </Date>
   </StandardTime>
   <DaylightTime>
      <Bias>-60</Bias>
      <Date>
         <Month>4</Month>
         <Day>1</Day>
         <Hour>2</Hour>
      </Date>
   </DaylightTime>
</TimeZone>
```


