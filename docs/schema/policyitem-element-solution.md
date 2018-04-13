---
title: "PolicyItem element (Solution)"
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
description: Specifies a code access security policy for a solution.
---

# PolicyItem element (Solution)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a code access security policy for a solution.
  
```XML
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

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Assemblies](assemblies-element-solutioncodeaccesssecurity.md)
- [PermissionSet](permissionset-element-solution.md)
   
### Parent elements

- [CodeAccessSecurity](codeaccesssecurity-element-solution.md)
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

