---
title: "ScriptQuote Element (View)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: ff197349-375c-4bb7-b1c5-2cd54832e4cb
description: "Last modified: March 09, 2015"
---

# ScriptQuote Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Encodes a string to fit within JavaScript code. This element is used to render text from the server that must be interpreted as a quoted string.
  
```
<ScriptQuote
  NotAddingQuote = "TRUE" | "FALSE">
</ScriptQuote>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**NotAddingQuote** <br/> |Optional **Boolean**. **TRUE** to eliminate quotation marks for enclosing a string. The default value is **FALSE**.  <br/> |
   
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
   
### Remarks

The **ScriptQuote** element performs the following conversions on its body text: 
  
- converts " to \"
    
- converts \ to \\
    
- converts CR to \r\CR (where CR is character code 13)
    
For example, the code  `<ScriptQuote>This is a test</ScriptQuote>` returns "This is a test" because **NotAddingQuote** is not set to **TRUE**. The code  `<ScriptQuote NotAddingQuote="TRUE">This is a test</ScriptQuote>`, however, returns This is a test, without quotation marks, because **NotAddingQuote** is set to **TRUE**. Note that in the second case, the string is not surrounded by quotation marks.
  

