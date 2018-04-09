---
title: "ExportObjects Element (DeploymentExportSettings)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 11f1a4ad-5254-421f-8e7a-049d1f4dc0ef
description: "Last modified: March 09, 2015"
---

# ExportObjects Element (DeploymentExportSettings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a collection of deployment export object instances for inclusion in the content migration package.
  
```
DECLARATION
<xs:element name="ExportObjects" 
   type="SPExportObjectCollection" 
   minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<ExportSettings>
   <ExportObjects>
      <DeploymentObject />
   </ExportObjects>
</ExportSettings>

```

## Type

[SPExportObjectCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportObjectCollection.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[DeploymentObject Element (DeploymentExportSettings)](deploymentobject-element-deploymentexportsettings.md)|
   
## Parent Elements

||
|:-----|
|[ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md)|
   
## See also

#### Reference

[SPExportObjectCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPExportObjectCollection.aspx)
#### Concepts

[DeploymentExportSettings Schema](deploymentexportsettings-schema.md)

