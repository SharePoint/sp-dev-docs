---
title: "Assemblies Element (Solution - Assemblies)"
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
ms.assetid: 96ff5f5f-8941-4c5f-bbc4-08b0831b23f9
description: "Last modified: March 09, 2015"
---

# Assemblies Element (Solution - Assemblies)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the assemblies to include in the solution.
  
```
<Assemblies>
  <Assembly
    DeploymentTarget = "GlobalAssemblyCache" | "WebApplication"
    Location = "Text">
    <SafeControls>
      ...
    </SafeControls>
  </Assembly>
  ...
</Assemblies>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[Assembly](assembly-element-solutionassemblies.md)|
   
### Parent elements

||
|:-----|
|[Solution](solution-element-solution.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

