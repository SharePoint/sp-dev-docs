---
title: "LocaleInfo Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d6ce2770-f2a8-472a-aa67-90da4c8ac238
description: "Last modified: March 09, 2015"
---

# LocaleInfo Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Transfers server locale information to the client in order to display and edit dates and numbers properly.
  
```
<LocaleInfo
  LCTYPE="Integer">
</LocaleInfo>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**LCTYPE** <br/> | Required **Integer**. Specifies an ID from the Win32 Application Programming Interface (API). Can be one of the following values.  <br/> **14** Character(s) used as the decimal separator. The maximum number of characters allowed for this string is four.  <br/> **15** Character(s) used to separate groups of digits to the left of the decimal. The maximum number of characters allowed for this string is four.  <br/> **16** Sizes for each group of digits to the left of the decimal. An explicit size is needed for each group, and sizes are separated by semicolons. If the last value is zero, the preceding value is repeated. For example, to group thousands, specify 3;0. Indic locales group the first 1,000 and then group by hundreds — for example, 12,34,56,789, which is represented by 3;2;0.  <br/> **29** Character(s) for the date separator. The maximum number of characters allowed for this string is four.  <br/> **30** Character(s) for the time separator. The maximum number of characters allowed for this string is four.  <br/> **33** Short date format-ordering specifier. The maximum number of characters allowed for this string is two. The specifier can be one of the following values: 0 (Month-Day-Year), 1 (Day-Month-Year), or 2 (Year-Month-Day).  <br/> **35** Time format specifier. The maximum number of characters allowed for this string is two. The specifier can be either 0 (A.M./P.M. 12-hour format) or 1 (24-hour format).  <br/> **40** String for the A.M. designator. The maximum number of characters allowed for this string is nine.  <br/> **41** String for the P.M. designator. The maximum number of characters allowed for this string is nine.  <br/> **81** String value for the negative sign. The maximum number of characters allowed for this string is five.  <br/> **4101** Specifies whether the time marker string (A.M. or P.M.) precedes or follows the time string. Possible values include 0 (use as suffix) and 1 (use as prefix).  <br/> **4108** Specifies the first day in a week. The maximum number of characters allowed for this string is two. Since this denotes which of the seven days begins a week, the only valid values are from 0 to 6 (0 equals Monday).  <br/> **4112** Negative number mode, that is, the format for a negative number. The maximum number of characters allowed for this string is two. The mode can be one of the following values: 0:(1.1), 1:-1.1, 2:- 1.1, 3:1.1-, or 4:1.1-.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example constructs a SCRIPT block in which the date separator is set according to the client's locale.
  
```XML
<HTML><![CDATA[ <SCRIPT>  ]]></HTML>
<HTML><![CDATA[  frm.dopt.chDateSep =   ]]></HTML>
<ScriptQuote>
   <LocaleInfo LCTYPE="29" />
</ScriptQuote>
<HTML><![CDATA[ ;</SCRIPT>  ]]></HTML>
```


