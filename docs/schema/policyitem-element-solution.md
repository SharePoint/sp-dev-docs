---
title: "PolicyItem Element (Solution)"
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
ms.assetid: f28e6ce3-d10f-4157-bd01-2bed86ab8a87
description: "Last modified: March 09, 2015"
---

# PolicyItem Element (Solution)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies a code access security policy for a solution.
  
```
<PolicyItem>
  <PermissionSet
    class = "Text"
    Description = "Text"
    Name = "Text"
    version = "Text">
        ...
  </PermissionSet>
  <Assemblies>
    ...
    </Assemblies>
</PolicyItem>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Assemblies](assemblies-element-solutioncodeaccesssecurity.md), [PermissionSet](permissionset-element-solution.md)|
   
## Parent Elements

||
|:-----|
|[CodeAccessSecurity](codeaccesssecurity-element-solution.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

