---
title: "SPObjects Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: af7fcfa9-22c1-4600-942f-b9a0419d0b65
description: "Last modified: March 09, 2015"
---

# SPObjects Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of top-level Windows SharePoint Services 3.0 objects.
  
```
DECLARATION
<xs:element name="SPObjects" type="SPGenericObjectCollection">
</xs:element>
USAGE
<SPObjects>
        <SPObject />
</SPObjects>

```

## Type

 **SPGenericObjectCollection**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## Parent Elements

||
|:-----|
|None |
   
## Remarks

The **SPObjects** element is the root element of the DeploymentManifest.xsd schema and therefore has no parent element. 
  
## See also



[DeploymentManifest Schema](deploymentmanifest-schema.md)

