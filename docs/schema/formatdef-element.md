---
title: "FormatDef Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a2a0a9b3-461b-4901-85e4-88f578748470
description: "Last modified: March 09, 2015"
---

# FormatDef Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies column and row formatting used in a Datasheet view.
  
```
<Format>
  <FormatDef
    Type = "Text"
    Value = "Text">
  </FormatDef>
  ...
</Format>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** <br/> |Required **Text**. Specifies the property to which the formatting applies.  <br/> |
|**Value** <br/> |Required **Text**. Specifies the value to apply to a property for column or row formatting.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Format](http://msdn.microsoft.com/library/55dae1d8-d415-445c-8c6c-5d9a1b140b6%28Office.15%29.aspx)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

See [Format Element](format-element.md) for an example that uses the **FormatDef** element. 
  

