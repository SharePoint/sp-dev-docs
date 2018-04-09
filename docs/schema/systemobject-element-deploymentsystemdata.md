---
title: "SystemObject Element (DeploymentSystemData)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 45f77771-640b-432f-afd0-65d3f43332df
description: "Last modified: March 09, 2015"
---

# SystemObject Element (DeploymentSystemData)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a SharePoint Foundation system object instance ( **SPSystemObject**) exported to the content migration package.
  
```
DECLARATION
<xs:element 
    name="SystemObject" 
    type="SPSystemObject" 
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<SystemObjects>
    <SystemObject
        Id="Guid"
        Type="SPDeploymentObjectType"
        Url="xs:string"
    />
</SystemObjects>

```

## Type

 **SPSystemObject**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|Id  <br/> |[Guid Simple Type (DeploymentSystemData)](guid-simple-type-deploymentsystemdata.md) <br/> |Optional. Unique identifier of the system object.  <br/> |
|Type  <br/> |[SPDeploymentObjectType Simple Type (DeploymentSystemData)](spdeploymentobjecttype-simple-type-deploymentsystemdata.md) <br/> |Optional. Specification of the object type: **Site**, **Web**, **Folder**, **List**, **ListItem**, or **File**.  <br/> |
|Url  <br/> |xs:string  <br/> |Optional. URL to the system object.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[SystemObjects Element (DeploymentSystemData)](systemobjects-element-deploymentsystemdata.md)|
   
## See also

#### Concepts

[DeploymentSystemData Schema](deploymentsystemdata-schema.md)

