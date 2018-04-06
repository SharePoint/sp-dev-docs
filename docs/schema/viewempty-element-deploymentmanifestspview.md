---
title: "ViewEmpty Element (DeploymentManifest - SPView)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a17a9ba3-8b6e-4e03-b84d-9456ec7f5e61
description: "Last modified: March 09, 2015"
---

# ViewEmpty Element (DeploymentManifest - SPView)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a parameter that determines what is displayed in a Windows SharePoint Services 3.0 view when a query returns no list data for the view.
  
```
DECLARATION
<xs:element name="ViewEmpty" minOccurs="0" maxOccurs="unbounded" />
USAGE
<View>
        <ViewEmpty />
</View>

```

## Type

xs:string
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[View Element (DeploymentManifest)](view-element-deploymentmanifest.md)
   
## See also



[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
  
[ViewEmpty](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewEmpty.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

