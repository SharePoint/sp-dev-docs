---
title: "SafeControl element (Solution)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Solution Schema
api_type:
- schema
ms.assetid: 26d20282-3df9-4f57-a9c9-d32dcfe91ce0
description: Adds or removes a control assembly from the safe controls list for a solution.
---

# SafeControl element (Solution)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Adds or removes a control assembly from the safe controls list for a solution. 
  
```XML
<SafeControl
  Assembly = "Text"
  Namespace = "Text"
  Safe = "TRUE" | "FALSE"
  SafeAgainstScript = "TRUE" | "FALSE"
  TypeName = "Text">
</SafeControl>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Assembly** <br/> |Optional **Text**. The name of the control assembly.  <br/> |
|**Namespace** <br/> |Optional **Text**. The namespace associated with the assembly.  <br/> |
|**Safe** <br/> |Optional **Boolean**. **TRUE** to add the control to the safe controls list; **FALSE** to remove it.  <br/> |
|**SafeAgainstScript** <br/> |Optional **Boolean**. **TRUE** to allow property editing by a Contributor; **FALSE** to disable property editing for Contributors.  <br/> |
|**TypeName** <br/> |Optional **Text**. The control type.  <br/> |
   
### Child elements

None
   
### Parent elements

- [SafeControls](safecontrols-element-solution.md)
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

