---
title: "Versions Element (DeploymentManifest - SPFile)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b2d307aa-414e-4988-9a2a-5a85083c3100
description: "Last modified: March 09, 2015"
---

# Versions Element (DeploymentManifest - SPFile)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of file version collection ([SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx) ) objects specifying the versions of the file. 
  
```
DECLARATION
<xs:element name="Versions" type="SPFileVersionCollection" minOccurs="0" maxOccurs="1" />
USAGE
<SPObject>
        <File>
                <Versions>
                        <File />
                </Versions>
        </File>
</SPObject>

```

## Type

[SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[File Element (DeploymentManifest - SPFileVersionCollection)](file-element-deploymentmanifestspfileversioncollection.md)|
   
## Parent Elements

||
|:-----|
|[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)|
   
## See also

#### Reference

[SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

