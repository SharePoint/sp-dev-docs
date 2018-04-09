---
title: "RegionalSettings Element (Regional Settings)"
ms.author: ricardol
author: ricardol
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
ms.assetid: d0d3ccfc-881f-4c50-8811-dd875b9555c9
description: "Last modified: March 09, 2015"
---

# RegionalSettings Element (Regional Settings)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the regional settings for currency, language, locale, and time zone that are used in the deployment of Microsoft SharePoint Foundation. Used in TIMEZONE.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\CONFIG). and RGNLSTNG.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033\XML).
  
```
<RegionalSettings>
</RegionalSettings>
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
|[Currencies](currencies-element-regional-settings.md), [Languages](languages-element-regional-settings.md), [Locales](locales-element-regional-settings.md), [TimeZones](timezones-element-regional-settings.md)|
   
### Parent elements

||
|:-----|
|None |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example outlines the structure of the file TIMEZONE.XML.
  
```XML
<RegionalSettings>
  <TimeZones>
  ...
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
      <TimeZone ID="14" Name="(GMT-09:00) Alaska" Hidden="FALSE">
        <Bias>540</Bias>
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
      ...
  </TimeZones>
</RegionalSettings>
```


