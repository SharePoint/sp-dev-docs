---
title: "Assembly Element (Solution - Assemblies)"


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
ms.assetid: 884c4be6-ee24-4e4e-9407-f0901ce381ee
description: "Last modified: March 09, 2015"
---

# Assembly Element (Solution - Assemblies)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies an assembly to include in the solution.
  
```
<Assembly
  DeploymentTarget = "GlobalAssemblyCache" | "WebApplication"
  Location = "Text">
  <BindingRedirects>
    ...
  </BindingRedirects>
  <SafeControls>
    ...
  </SafeControls>
  <ClassResources>
    ...
  </ClassResources>
</Assembly>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**DeploymentTarget** <br/> | Optional **Text**. The preferred target of deployment of the assembly. The assembly is copied to the target specified by the **DeploymentTarget** attribute (for a Web application) or the global assembly cache (for a server farm).  <br/>  Possible values:  <br/> **GlobalAssemblyCache** If the assembly is a farm feature, it is copied to the global assembly cache.  <br/> **WebApplication** If the assembly is a Web application feature, it is copied to the virtual server bin directory.  <br/> |
|**Location** <br/> |Required **Text**. The relative file path of the assembly.  <br/> |
   
### Child elements

||
|:-----|
|[BindingRedirects Element (Solution)](bindingredirects-element-solution.md), [ClassResources](classresources-element-solution.md), [SafeControls](safecontrols-element-solution.md)|
   
### Parent elements

||
|:-----|
|[Assemblies](assemblies-element-solutionassemblies.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

