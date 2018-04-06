---
title: "RowLimitExceeded Element (DeploymentManifest - SPView)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5b148f83-0a2c-4f00-9f6f-2de20f830ab7
description: "Last modified: March 09, 2015"
---

# RowLimitExceeded Element (DeploymentManifest - SPView)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents the means for displaying overflow data when a row limit on a specified instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx) ) object is exceeded. 
  
```
DECLARATION
<xs:element name="RowLimitExceeded" minOccurs="0" maxOccurs="unbounded" />
USAGE
<View>
        <RowLimitExceeded />
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



[RowLimitExceeded](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.RowLimitExceeded.aspx)
  
[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

