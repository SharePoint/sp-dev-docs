---
title: "Feature Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f5739e5c-be3b-4ce2-a540-7d98aeb03320
description: "Last modified: March 09, 2015"
---

# Feature Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 Feature ([SPFeature](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFeature.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Feature" type="SPFeature" />
USAGE
<SPObject>
  <Feature>
      Id="Guid"
      WebId="Guid"
      Properties="xs:string"
      FeatureDefinitionName="xs:string"
  </Feature>
</SPObject>

```

## Type

[SPFeature](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFeature.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the Feature object.  <br/> |
|**WebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the Web site to which the Feature is associated.  <br/> |
|**Properties** <br/> |xs:string  <br/> |Optional. Represents the collection of properties for the Feature.  <br/> |
|**FeatureDefinitionName** <br/> |xs:string  <br/> |Required. Name of the Feature definition.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also



[SPFeature](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFeature.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

