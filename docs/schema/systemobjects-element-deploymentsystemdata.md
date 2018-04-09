---
title: "SystemObjects Element (DeploymentSystemData)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7100c23d-ec75-489d-8549-8ea765820489
description: "Last modified: March 09, 2015"
---

# SystemObjects Element (DeploymentSystemData)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a collection of SharePoint Foundation system object ( **SPSystemObject**) instances.
  
```
DECLARATION
<xs:element 
    name="SystemObjects" 
    type="SPSystemObjects" 
    minOccurs="1" maxOccurs="1" 
/>
USAGE
<SystemData>
    <SystemObjects>
        <SystemObject />
    </SystemObjects>
</SystemData>

```

## Type

 **SPSystemObject**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[SystemObject Element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md)|
   
## Parent Elements

||
|:-----|
|[SystemData Element (DeploymentSystemData)](systemdata-element-deploymentsystemdata.md)|
   
## See also

#### Concepts

[DeploymentSystemData Schema](deploymentsystemdata-schema.md)

