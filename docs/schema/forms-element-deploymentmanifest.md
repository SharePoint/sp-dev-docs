---
title: "Forms Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 52b6a7ad-02b1-4e8f-8b30-73fc2b330848
description: "Last modified: March 09, 2015"
---

# Forms Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Windows SharePoint Services 3.0 form ([SPFormCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFormCollection.aspx) ) object instances. 
  
```
DECLARATION
<xs:element name="Forms" type="SPFormCollection" minOccurs="0" maxOccurs="1" />
USAGE
<List>
        <Forms>
                <Form />
        </Forms>
</List>

```

## Type

[SPFormCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFormCollection.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[Form Element (DeploymentManifest)](form-element-deploymentmanifest.md)|
   
## Parent Elements

||
|:-----|
|[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPFormCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFormCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

