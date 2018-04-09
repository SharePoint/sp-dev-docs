---
title: "ManifestFile Element (DeploymentSystemData)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 37164e6f-d94d-451c-80c1-5558bd4889ca
description: "Last modified: March 09, 2015"
---

# ManifestFile Element (DeploymentSystemData)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a system data file (SystemData.xml) exported to the content migration package.
  
```
DECLARATION
<xs:element 
    name="ManifestFile" 
    type="SPManifestFile" 
    minOccurs="1" maxOccurs="unbounded" 
/>
USAGE
<ManifestFiles>
    <ManifestFile
        Name="xs:string"
    />
</ManifestFiles>

```

## Type

 **SPManifestFile**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |xs:string  <br/> |Optional. Name of the SystemData.xml file.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[ManifestFiles Element (DeploymentSystemData)](manifestfiles-element-deploymentsystemdata.md)|
   
## See also

#### Concepts

[DeploymentSystemData Schema](deploymentsystemdata-schema.md)

