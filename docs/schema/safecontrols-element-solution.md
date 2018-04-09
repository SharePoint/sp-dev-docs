---
title: "SafeControls Element (Solution)"
ms.author: rickki
author: rickki
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
description: "Last modified: March 09, 2015"
---

# SafeControls Element (Solution)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies the safe controls of an assembly that are included in a solution.
  
```
<SafeControls>
  <SafeControl
    Assembly = "Text"
    Namespace = "Text"
    Safe = "TRUE" | "FALSE"
    TypeName = "Text"/>
  ...
</SafeControls>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[SafeControl](safecontrol-element-solution.md)|
   
## Parent Elements

||
|:-----|
|[Assembly](assembly-element-solutionassemblies.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

