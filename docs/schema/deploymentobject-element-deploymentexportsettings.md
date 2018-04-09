---
title: "DeploymentObject Element (DeploymentExportSettings)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 128f7174-b2d1-4150-a966-c1abfc0e1bf8
description: "Last modified: March 09, 2015"
---

# DeploymentObject Element (DeploymentExportSettings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a deployment object or objects ([SPExportObject](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportObject.aspx) ) marked for export to the content migration package. 
  
```
DECLARATION
<xs:element
        name="DeploymentObject" type="SPExportObject"
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<DeploymentObject
        <!-- SPDeploymentObject -->
        <xs:attribute name="Id" type="Guid" />
        <xs:attribute name="Type" type="SPDeploymentObjectType" />
        <xs:attribute name="ParentId" type="Guid" />
        <!-- SPExportObject -->
        <xs:attribute name="Url" type="xs:string" />
        <xs:attribute name="ExcludeChildren" type="xs:boolean" />
        <xs:attribute name="IncludeDescendants" type="SPIncludeDescendants" />
        <xs:attribute name="ExportChangeToken" type="xs:string" />
/>

```

## Type

[SPExportObject](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportObject.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentExportSettings)](guid-simple-type-deploymentexportsettings.md) <br/> |Optional. Unique identifier of the export object.  <br/> |
|**Type** <br/> |[SPDeploymentObjectType Simple Type (DeploymentExportSettings)](spdeploymentobjecttype-simple-type-deploymentexportsettings.md) <br/> |Optional. Enumeration providing values to specify the object type.  <br/> |
|**ParentId** <br/> |[Guid Simple Type (DeploymentExportSettings)](guid-simple-type-deploymentexportsettings.md) <br/> |Optional. Unique identifier of the object's parent site.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. URL to the location of the export object.  <br/> |
|**ExcludeChildren** <br/> |xs:boolean  <br/> |Optional. Specifies whether to exclude child objects (descendants). The value is **true** if children are excluded. The default is **false**.  <br/> |
|**IncludeDescendants** <br/> |[SPIncludeDescendents Simple Type (DeploymentExportSettings)](spincludedescendents-simple-type-deploymentexportsettings.md) <br/> |Optional. Enumeration providing values to specify which descendents, if any, to include in the content migration package.  <br/> |
|**ExportChangeToken** <br/> |xs:string  <br/> |Optional. Specifies the change token to use when exporting incremental changes based on changes since the last export.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[ExportObjects Element (DeploymentExportSettings)](exportobjects-element-deploymentexportsettings.md)|
   
## See also

#### Reference

[SPExportObject](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportObject.aspx)
#### Concepts

[DeploymentExportSettings Schema](deploymentexportsettings-schema.md)

