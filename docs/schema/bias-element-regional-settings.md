---
title: "Bias Element (Regional Settings)"


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
ms.assetid: 3d8233bf-1ea9-4d0b-8c78-7acc9bc90f09
description: "Last modified: March 09, 2015"
---

# Bias Element (Regional Settings)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the bias, in minutes, that a time zone differs from Coordinated Universal Time (UTC), or the bias, in minutes, that standard time or daylight saving time for a time zone differs from UTC. Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG).
  
```
<Bias>
</Bias>
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
|[DaylightTime](daylighttime-element-regional-settings.md), [History](history-element-regional-settings.md), [StandardTime](standardtime-element-regional-settings.md), [TimeZone](timezone-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example from the file TIMEZONE.XML uses the **Bias** element to define a time zone. 
  
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


