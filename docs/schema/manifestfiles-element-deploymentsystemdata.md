---
title: "ManifestFiles Element (DeploymentSystemData)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b0386913-8ac3-4a6e-a021-e73c9b1b12a7
description: "Last modified: March 09, 2015"
---

# ManifestFiles Element (DeploymentSystemData)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a collection of system data (SystemData.xml) files exported to the content migration package.
  
```
DECLARATION
<xs:element 
    name="ManifestFiles" 
    type="SPManifestFiles" 
    minOccurs="1" maxOccurs="1" 
/>
USAGE
<SystemData>
    <ManifestFiles>
        <ManifestFile />
    </ManifestFiles>
</SystemData>

```

## Type

 **SPManifestFiles**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[ManifestFile Element (DeploymentSystemData)](manifestfile-element-deploymentsystemdata.md)|
   
## Parent Elements

||
|:-----|
|[SystemData Element (DeploymentSystemData)](systemdata-element-deploymentsystemdata.md)|
   
## See also

#### Concepts

[DeploymentSystemData Schema](deploymentsystemdata-schema.md)

