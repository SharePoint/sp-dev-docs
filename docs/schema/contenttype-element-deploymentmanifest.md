---
title: "ContentType Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fd752d9d-2a30-4f6a-a0af-f1982fa2ee07
description: "Last modified: March 09, 2015"
---

# ContentType Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an object that specifies the content type for a Windows SharePoint Services 3.0 object.

## Definition

```XML
DECLARATION
<xs:element 
        name="ContentType" 
        type="SPContentType" 
/>
USAGE
<SPObject>
        <ContentType
                ID="Guid"
                Name="xs:string"
                Scope="xs:string"
                ParentWebId="Guid"
                ListId="Guid"
                Description="xs:string"
                Group="xs:string"
                PushDownChanges="xs:boolean"
                RequireClientRenderingOnNew="xs:string"
        />
</SPObject>

```

## Type

[SPContentType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPContentType.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**ID** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the content type.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Name of the content type.  <br/> |
|**Scope** <br/> |xs:string  <br/> |Specifies whether the content type is Web-level or list-level. If Web-level, then scope includes all lists.  <br/> Optional on export; required on import if the scope is set to list level.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the parent Web site.  <br/> Optional on export; required on import if the scope is set to Web level.  <br/> |
|**ListId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the content type list. This attribute is relevent only if the **Scope** attribute is list-level.  <br/> Optional on export; required on import.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Description of the content type.  <br/> |
|**Group** <br/> |xs:string  <br/> |Optional.  <br/> |
|**PushDownChanges** <br/> |xs:boolean  <br/> |Optional.  <br/> |
|**RequireClinetRenderingOnNew** <br/> |xs:string  <br/> |Optional.  <br/> |
   
### Child elements

None
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPContentType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPContentType.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [ContentTypes Element (DeploymentManifest)](contenttypes-element-deploymentmanifest.md)

