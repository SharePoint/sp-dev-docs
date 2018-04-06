---
title: "Links Element (DeploymentManifest - SPFile)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 85bb7ee2-900c-492c-988b-92a3ba7bea87
description: "Last modified: March 09, 2015"
---

# Links Element (DeploymentManifest - SPFile)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Windows SharePoint Services 3.0 link object instances ([SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx) ) on a file ( [SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Links" type="SPLinkCollection" minOccurs="0" maxOccurs="1" />
USAGE
<File>
        <Links 
                <Link />
        />
</File>

```

## Type

[SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Link Element (DeploymentManifest)](link-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)
   
## See also



[SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

