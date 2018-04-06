---
title: "Site Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cc6c37c3-c1b4-414b-a3b4-8bf5bcffe607
description: "Last modified: March 09, 2015"
---

# Site Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 site ([SPSite](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Site" type="SPSite" />
USAGE
<SPObject>
        <Site
                Id="Guid"
        />
</SPObject

```

## Type

 **SPSite**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Global unique identifier of the Windows SharePoint Services 3.0 site object.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also



[SPSite](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

