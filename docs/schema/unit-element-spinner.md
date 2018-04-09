---
title: "Unit Element (Spinner)"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: e33fbd48-21f0-42bb-97de-3b2b632997de
description: "Last modified: March 09, 2015"
---

# Unit Element (Spinner)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines a unit for use within the spinner control.
  
```
<Unit
  Name="Text"
  MinimumValue="Decimal"
  MaximumValue="Decimal"
  DecimalDigits="Integer"
  Interval="Double"
/>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Optional. The name of the unit, such as inches, pixels, or percent.  <br/> |
|**MinimumValue** <br/> |Optional. The minimum acceptable value.  <br/> |
|**MaximumValue** <br/> |Optional. The maximum acceptable value.  <br/> |
|**DecimalDigits** <br/> |Optional. The number of decimal digits to display.  <br/> |
|**Interval** <br/> |Optional. The amount by which the value should be incremented or decremented.  <br/> |
   
## Child Elements

||
|:-----|
|[UnitAbbreviation](unitabbreviation-element.md)|
   
## Parent Elements

||
|:-----|
|[Spinner](spinner-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: unbounded  <br/> |
   
## Example

The following XML example defines a spinner control that contains several units.
  
```XML
<Spinner
   Id="Ribbon.Table.Layout.Properties.TableWidth"
   DefaultUnit="inch"
   DefaultValue="1.5"
   AltUpArrow="$Resources:core,cui_spnUpAlt;"
   AltDownArrow="$Resources:core,cui_spnDownAlt;"
   AccelerationInterval="125"
   MultiplierInterval="2000"
   Command="SetTableWidth"
   ImeEnabled="false"
   QueryCommand="QueryTableWidth"
   ToolTipTitle="$Resources:core,LabelTableWidth;"
   ToolTipDescription="$Resources:core,cui_stt_ButWidthHeightMenuTableWidthTooltip;"
   Sequence="30"
   TemplateAlias="o1"
>
  <Unit
      Name="inch"
      MinimumValue="0.1"
      MaximumValue="200"
      DecimalDigits="1"
      Interval="0.1"
  >
    <UnitAbbreviation Value="in" />
    <UnitAbbreviation Value="&amp;quot;"/>
  </Unit>
  <Unit
      Name="pixel"
      MinimumValue="1"
      MaximumValue="2000"
      DecimalDigits="0"
      Interval="5"
  >
    <UnitAbbreviation Value="px" />
  </Unit>
  <Unit
      Name="centimeter"
      MinimumValue="0.1"
      MaximumValue="500"
      DecimalDigits="1"
      Interval="0.5"
  >
    <UnitAbbreviation Value="cm" />
  </Unit>
  <Unit
      Name="percent"
      MinimumValue="1"
      MaximumValue="100"
      DecimalDigits="0"
      Interval="1"
  >
    <UnitAbbreviation Value="%" />
  </Unit>
</Spinner>
```


