---
title: "ActivationDependency Element (Solution)"
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
ms.assetid: b8ab216f-4363-44f3-b79e-eaa7262f44ee
description: "Last modified: March 09, 2015"
---

# ActivationDependency Element (Solution)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies the activation dependencies for a solution.
  
```
<ActivationDependency 
  SolutionId = string
  SolutionName = string 
  SolutionTitle = string 
  SolutionUrl = string />
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**SolutionId** <br/> |Required **string**. Specifies the solution ID of the dependency.  <br/> |
|**SolutionName** <br/> |Optional **string**. Specifies the name of the solution dependency.  <br/> |
|**SolutionTitle** <br/> |Optional **string**. Specifies the title of the solution dependency.  <br/> |
|**SolutionUrl** <br/> |Optional **string**. Specifies the URL of the solution dependency.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[ActivationDependencies Element (Solution)](activationdependencies-element-solution.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

