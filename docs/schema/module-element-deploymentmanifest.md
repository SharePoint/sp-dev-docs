---
title: "Module Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6c4ef8ae-88fa-4055-aaa3-9089ed609d40
description: "Last modified: March 09, 2015"
---

# Module Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a SharePoint module ([SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx)) object, providing a collection of files and views that are used in a site template. 

## Definition

```XML
DECLARATION
<xs:element name="Module" type="SPModule" />

USAGE
<SPObject>
   <Module
      <Properties />
         Enabled="xs:boolean"
         Name="xs:string"
         ParentWeb="xs:string"
         Url="xs:string"
   />
</SPObject>

```

## Type

[SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Enabled** <br/> |xs:boolean  <br/> |Optional. Specifies whether the module is enabled for the site. <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Represents the name of the module.  <br/> |
|**ParentWeb** <br/> |xs:string  <br/> |Optional. Specifies the parent website.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. Specifies the server-relative URL for the module.  <br/> |
   
### Child elements

[Properties Element (DeploymentManifest - SPModule)](properties-element-deploymentmanifestspmodule.md)
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

