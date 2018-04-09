---
title: "DocumentLibrary Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6d7d5cf2-a428-42c6-b403-353efa9e18b8
description: "Last modified: March 09, 2015"
---

# DocumentLibrary Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 document library object ([SPDocumentLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPDocumentLibrary.aspx) ). 

## Definition

```XML
DECLARATION
<xs:element name="DocumentLibrary" type="SPDocumentLibrary" />

USAGE
<SPObject>
   <DocumentLibrary
      DocumentTemplateUrl="xs:string"
      EmailInsertsFolder="xs:string"
      IsCatalog="xs:boolean"
   />
</SPObject>

```

## Type

**SPDocumentLibrary**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**DocumentTemplateUrl**  <br/> |xs:string  <br/> |Optional. URL to the location of the template on which the document library is based.  <br/> |
|**EmailInsertsFolder**  <br/> |xs:string  <br/> |Optional. The path for the public folder that contains the e-mail items inserted in the document library.  <br/> |
|**IsCatalog**  <br/> |xs:boolean  <br/> |Optional. Indicates whether the document library is a gallery, such as for site templates, list templates, Web Parts, or master pages.  <br/> |
   
### Child elements

None
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
### Remarks

The **SPDocumentLibrary** type extends the [SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx) type. For more information, see [List Element (DeploymentManifest)](list-element-deploymentmanifest.md).
  
## See also

- [SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx)
- [SPDocumentLibrary](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPDocumentLibrary.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [List Element (DeploymentManifest)](list-element-deploymentmanifest.md)

