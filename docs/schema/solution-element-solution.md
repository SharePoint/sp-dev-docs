---
title: "Solution Element (Solution)"
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
ms.assetid: 96aade0e-7840-4f9c-a4f8-4d7169d5128a

description: "Last modified: March 09, 2015"
---

# Solution Element (Solution)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Top-level element for a solution manifest file.
  
```
<Solution 
  Description = string 
  DeploymentServerType = "ApplicationServer" | "WebFrontEnd"
  ResetWebServer = "TRUE" | "FALSE" 
  ResetWebServerModeOnUpgrade = "Recycle" | "StartStop" 
  SharePointProductVersion = string
  SolutionId = string 
  Title = string>
</Solution>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Description** <br/> |Optional **string**. Specifies a description for the solution.  <br/> |
|**DeploymentServerType** <br/> | Optional **string**. Determines whether the solution is deployed to a front-end Web server or to an application server. Possible values include:  <br/> **ApplicationServer** <br/> **WebFrontEnd** <br/> |
|**ResetWebServer** <br/> |Optional **Boolean**. **TRUE** to specify that the Web server will be reset.  <br/> |
|**ResetWebServerModeOnUpgrade** <br/> |Optional **string**. Specifies the type of reset the Web server will perform on solution upgrade. The values are as follows:  <br/> |||
|:-----|:-----|
|Value  <br/> |Action  <br/> |
|Recycle  <br/> |Recycles the application pool.  <br/> |
|StartStop  <br/> |Stops and starts the server.  <br/> |
   
|
|**SharePointProductVersion** <br/> |Optional **string**. Specifies the version of Microsoft SharePoint Foundation.  <br/> |
|**SolutionId** <br/> |Optional **string**. Contains the GUID for the solution.  <br/> |
|**Title** <br/> |Optional **string**. Specifies the title of the solution.  <br/> |
   
## Child Elements

||
|:-----|
|[ActivationDependencies Element (Solution)](activationdependencies-element-solution.md), [ApplicationResourceFiles](applicationresourcefiles-element-solution.md), [Assemblies](assemblies-element-solutionassemblies.md), [CodeAccessSecurity](codeaccesssecurity-element-solution.md), [DwpFiles](dwpfiles-element-solution.md), [FeatureManifests](featuremanifests-element-solution.md), [Resources](resources-element-solution.md), [SiteDefinitionManifests](sitedefinitionmanifests-element-solution.md), [RootFiles](rootfiles-element-solution.md), [TemplateFiles](templatefiles-element-solution.md)|
   
## Parent Elements

||
|:-----|
|None |
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

