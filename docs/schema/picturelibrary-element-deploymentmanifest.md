---
title: "PictureLibrary Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 34d26579-a495-4442-8fff-834a36b6255d
description: "Last modified: March 09, 2015"
---

# PictureLibrary Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 picture library ([SPPictureLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPPictureLibrary.aspx) ) object. 
  
```
DECLARATION
<xs:element name="PictureLibrary" type="SPPictureLibrary" />
USAGE
<SPObject>
        <PictureLibrary
                ThumbnailSize="xs:int"
                WebImageHeight="xs:int"
                WebImageWidth="xs:int"
        />
</SPObject>

```

## Type

[SPPictureLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPPictureLibrary.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**ThumbnailSize** <br/> |xs:int  <br/> |Optional. Specifies the size, in pixels, of the height or width, whichever is greatest, to use for the thumnails in the picture library.  <br/> |
|**WebImageHeight** <br/> |xs:int  <br/> |Optional. Specifies the height, in pixels, used to display images in the picture library.  <br/> |
|**WebImageWidth** <br/> |xs:int  <br/> |Optional. Specifies the width, in pixels, used to display images in the picture library.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## Remarks

The base type [Microsoft.SharePoint.SPPictureLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPPictureLibrary.aspx) extends another base type, [Microsoft.SharePoint.SPDocumentLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPDocumentLibrary.aspx) . That type, in turn, extends the [Microsoft.SharePoint.SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx) type. 
  
For attributes of the **SPDocumentLibrary** type, see [DocumentLibrary Element (DeploymentManifest)](documentlibrary-element-deploymentmanifest.md). For attributes of the **SPList** type, see [List Element (DeploymentManifest)](list-element-deploymentmanifest.md).
  
## See also

#### Reference

[SPPictureLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPPictureLibrary.aspx)
  
[SPDocumentLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPDocumentLibrary.aspx)
  
[SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

