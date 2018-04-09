---
title: "Escape Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3269e06e-bc2d-4f96-8c33-867e15a2d40b
description: "Last modified: March 09, 2015"
---

# Escape Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
In vCard support, escapes certain characters in strings. The **Escape** element can be used to replace every occurrence of a character in the string. 
  
```
<Escape
  EscapeChar = "Text"
  EscapeChars = "Text">
</Escape>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**EscapeChar** <br/> |Required **String**. The character used to escape a particular character in the string.  <br/> |
|**EscapeChars** <br/> |Required **String**. The character in the string that is to be escaped.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example evaluates to "abc\xyz".
  
```XML
<Escape EscapeChar="\" EscapeChars="x">abcxyz</Escape>
```


