---
title: "Properties Element (DeploymentManifest - SPFile)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 57ce0f76-68ed-44d3-b6b8-8947650fcf8b
description: "Last modified: March 09, 2015"
---

# Properties Element (DeploymentManifest - SPFile)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of properties on an instannce of a Windows SharePoint Services 3.0 file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Properties" type="Dictionary" minOccurs="0" />
USAGE
<File>
        <Properties
                <Property />
        />
</File>

```

## Type

 **Dictionary**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)
   
## See also



[SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

