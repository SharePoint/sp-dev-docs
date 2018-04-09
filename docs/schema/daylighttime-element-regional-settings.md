---
title: "DaylightTime Element (Regional Settings)"


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
ms.assetid: 0163934a-04be-4467-a276-9ef8bbb95a72
description: "Last modified: March 09, 2015"
---

# DaylightTime Element (Regional Settings)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG) to contain the date and time on which daylight saving time begins for a time zone.
  
```
<DaylightTime>
  <Bias>
    </Bias>
  <Date>
  ...
  </Date>
</DaylightTime>
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
|[Bias](bias-element-regional-settings.md), [Date](date-element-regional-settings.md)|
   
### Parent elements

||
|:-----|
|[History](history-element-regional-settings.md), [TimeZone](timezone-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example from the file TIMEZONE.XML uses the **DaylightTime** element to specify the date and time on which daylight time begins for a time zone. 
  
```XML
<DaylightTime>
   <Bias>-60</Bias>
   <Date>
      <Month>3</Month>
      <Day>1</Day>
      <Hour>2</Hour>
   </Date>
</DaylightTime>
```


