---
title: "ContentTypes Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a24de782-ce49-43f7-ac73-dd844548eba8
description: "Last modified: March 09, 2015"
---

# ContentTypes Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a container, or collection, of Windows SharePoint Services 3.0 content type specifications for list items.
  
```
DECLARATION
<xs:element name="ContentTypes" type="SPContentTypeCollection" minOccurs="0" maxOccurs="1" />
USAGE
<List>
   <ContentTypes />
</List>
```

## Type

[SPContentTypeCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPContentTypeCollection.aspx)
  
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
|[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)|
   
## Remarks

The collections represented by the **ContentTypes** element are of object instances represented by the [ContentType Element (DeploymentManifest)](contenttype-element-deploymentmanifest.md) element. 
  
## See also

#### Reference

[SPContentType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPContentType.aspx)
  
[SPContentTypeCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPContentTypeCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)
#### Other resources

[ContentType Element (DeploymentManifest)](contenttype-element-deploymentmanifest.md)

