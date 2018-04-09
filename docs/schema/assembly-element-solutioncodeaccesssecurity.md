---
title: "Assembly Element (Solution - CodeAccessSecurity)"
ms.

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
ms.assetid: 12325238-b3d7-44cf-a9ae-5dee6644d73f
description: "Last modified: March 09, 2015"
---

# Assembly Element (Solution - CodeAccessSecurity)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies an assembly in a solution's code access security policy.
  
```
<Assembly
  Name = "Text"
  PublicKeyBlob = "Text"
  Version = "Text">
</Assembly>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Optional **Text**. The name of the assembly.  <br/> |
|**PublicKeyBlob** <br/> |Optional **Text**. The assembly's public key, in binary format.  <br/> |
|**Version** <br/> |Optional **Text**. The version of the assembly.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Assemblies](assemblies-element-solutioncodeaccesssecurity.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

