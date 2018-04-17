---
title: "PermissionSet element (Solution)"
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
ms.assetid: 797ed1b9-93b5-4e64-9cd7-197c759886c7
description: Specifies the permissions for a solution's code access security policy.
---

# PermissionSet element (Solution)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the permissions for a solution's code access security policy.
  
```XML
<PermissionSet
  class = "Text"
  Description = "Text"
  Name = "Text"
  version = "Text">
  <IPermission/>
</PermissionSet>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**class** <br/> |Required **Text**. The name of the class associated with the permission set.  <br/> |
|**Description** <br/> |Optional **Text**. A description of the permission set.  <br/> |
|**Name** <br/> |Optional **Text**. The name of the permission set.  <br/> |
|**version** <br/> |Required **Text**. The version of the permission set.  <br/> |
   
### Child elements

- [IPermission](ipermission-element-solution.md)
   
### Parent elements

- [PolicyItem](policyitem-element-solution.md)
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

