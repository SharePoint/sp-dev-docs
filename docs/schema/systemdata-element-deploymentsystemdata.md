---
title: "SystemData Element (DeploymentSystemData)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 79e46615-3108-4103-9553-1d57938333b1
description: "Last modified: March 09, 2015"
---

# SystemData Element (DeploymentSystemData)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a system data wrapper object ( **SPSystemData**) that contains the deployment system data object collections. This is the schema root element. 
  
```
DECLARATION
<xs:element 
    name="SystemData" 
    type="SPSystemData" 
/>
USAGE
<SystemData>
    <SchemaVersion />
    <ManifestFiles />
    <SystemObjects />
</SystemData>

```

## Type

 **SPSystemData**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[SchemaVersion Element (DeploymentSystemData)](schemaversion-element-deploymentsystemdata.md) <br/> |
|[ManifestFiles Element (DeploymentSystemData)](manifestfiles-element-deploymentsystemdata.md) <br/> |
|[SystemObjects Element (DeploymentSystemData)](systemobjects-element-deploymentsystemdata.md) <br/> |
   
## Parent Elements

||
|:-----|
|None |
   
## Remarks

The **SystemData** element is the schema root element and therefore has no parent element. 
  
## See also

#### Concepts

[DeploymentSystemData Schema](deploymentsystemdata-schema.md)

