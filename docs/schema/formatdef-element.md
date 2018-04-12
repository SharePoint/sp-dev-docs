---
title: "FormatDef element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a2a0a9b3-461b-4901-85e4-88f578748470
description: Specifies column and row formatting used in a Datasheet view.
---

# FormatDef element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies column and row formatting used in a Datasheet view.
  
```XML
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

None
   
### Parent elements

- [Format](format-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
### Remarks

For an example that uses the **FormatDef** element, see [Format element](format-element.md). 
  

