---
title: "SafeControls element (Solution)"
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
ms.assetid: a156a8fb-4a31-4e84-a132-859cedf5fb5e
description: Specifies the safe controls of an assembly that are included in a solution.
---

# SafeControls element (Solution)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the safe controls of an assembly that are included in a solution.
  
```XML
<SafeControls>
  <SafeControl
    Assembly = "Text"
    Namespace = "Text"
    Safe = "TRUE" | "FALSE"
    TypeName = "Text"/>
  ...
</SafeControls>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [SafeControl](safecontrol-element-solution.md)
   
### Parent elements

- [Assembly](assembly-element-solutionassemblies.md)
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

