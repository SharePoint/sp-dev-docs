---
title: "Escape element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3269e06e-bc2d-4f96-8c33-867e15a2d40b
description: In vCard support, escapes certain characters in strings.
---

# Escape element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
In vCard support, escapes certain characters in strings. The **Escape** element can be used to replace every occurrence of a character in the string. 
  
```XML
<Escape
  EscapeChar = "Text"
  EscapeChars = "Text">
</Escape>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**EscapeChar** <br/> |Required **String**. The character used to escape a particular character in the string.  <br/> |
|**EscapeChars** <br/> |Required **String**. The character in the string that is to be escaped.  <br/> |
   
### Child elements

None
   
### Parent elements

- [Field](field-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
## Example

The following example evaluates to "abc\xyz".
  
```XML
<Escape EscapeChar="\" EscapeChars="x">abcxyz</Escape>
```


