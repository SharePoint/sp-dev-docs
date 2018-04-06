---
title: "Views Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2d9bc3a6-ed02-400b-9243-1e51de45b409
description: "Last modified: March 09, 2015"
---

# Views Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Windows SharePoint Services 3.0 view object instances.
  
```
DECLARATION
<xs:element name="Views" type="SPViewCollection" minOccurs="0" maxOccurs="1" />
USAGE
<List>
        <Views>
                <View />
        </Views>
</List>

```

## Type

[SPViewCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPViewCollection.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[View Element (DeploymentManifest)](view-element-deploymentmanifest.md)|
   
## Parent Elements

||
|:-----|
|[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPViewCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPViewCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

