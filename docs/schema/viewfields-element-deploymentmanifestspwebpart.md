---
title: "ViewFields Element (DeploymentManifest - SPWebPart)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9b4599eb-f7cd-487b-8970-bc44000c8fde
description: "Last modified: March 09, 2015"
---

# ViewFields Element (DeploymentManifest - SPWebPart)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of fields that are included on a Windows SharePoint Services 3.0 Web Part view.
  
```
DECLARATION
<xs:element name="ViewFields" type="SPFieldLinkCollection" minOccurs="0" maxOccurs="1" />
USAGE
<WebPart>
        <ViewFields>
                <FieldRef />
        </ViewFields>
</WebPart>

```

## Type

[SPFieldLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLinkCollection.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[FieldRef Element (DeploymentManifest - SPFieldLinkCollection)](fieldref-element-deploymentmanifestspfieldlinkcollection.md)|
   
## Parent Elements

||
|:-----|
|[WebPart Element (DeploymentManifest)](webpart-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
  
[ViewFields](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewFields.aspx)
  
[SPFieldLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLinkCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

