---
title: "View Body Element (DeploymentManifest - SPView)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f3451ad4-6504-488e-89f8-7a3f6fd62500
description: "Last modified: March 09, 2015"
---

# View Body Element (DeploymentManifest - SPView)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a parameter that enables a view of the body of an instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx) ) object. 
  
```
DECLARATION
<xs:element name="ViewBody" minOccurs="0" maxOccurs="unbounded" />
USAGE
<View>
        <ViewBody />
</View>

```

## Type

xs:string
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[View Element (DeploymentManifest)](view-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
  
[ViewBody](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewBody.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

