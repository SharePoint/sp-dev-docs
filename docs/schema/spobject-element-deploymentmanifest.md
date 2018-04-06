---
title: "SPObject Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1bdc823e-d556-4273-a091-92d41d9d9ace
description: "Last modified: March 09, 2015"
---

# SPObject Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a top-level Windows SharePoint Services 3.0 object ( **SPGenericObject**).
  
```
DECLARATION
<xs:element name="SPObject" 
        type="SPGenericObject" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<SPObjects>
        <SPObject
                ObjectType="SPObjectType"
                Id="Guid"
                ParentId="Guid"
                Name="xs:string"
                IsDeleted="xs:boolean"
                ParentWebId="Guid"
                ParentWebUrl="xs:string"
                ContentTypeId="xs:string"
                Url="xs:string"
        />
</SPObjects>

```

## Type

 **SPGenericObject** ( [Object](https://msdn.microsoft.com/library/System.Object.aspx) ) 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**ObjectType** <br/> |[SPObjectType Simple Type (DeploymentManifest)](spobjecttype-simple-type-deploymentmanifest.md) <br/> |Optional. Enumeration that provides values to specify the Windows SharePoint Services 3.0 top-level object type.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the Windows SharePoint Services 3.0 object.  <br/> |
|**ParentId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the parent deployment object.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Name of the object.  <br/> |
|**IsDeleted** <br/> |xs:boolean  <br/> |Optional. Specifies whether the object has been deleted.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the parent Web site.  <br/> |
|**ParentWebUrl** <br/> |xs:string  <br/> |Optional. URL to the parent Web site.  <br/> |
|**ContenTypeId** <br/> |xs:string  <br/> |Optional. Specifies the object content type.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. URL to the object.  <br/> |
   
## Child Elements

||
|:-----|
|[Site Element (DeploymentManifest)](site-element-deploymentmanifest.md) <br/> |
|[Web Element (DeploymentManifest)](web-element-deploymentmanifest.md) <br/> |
|[WebTemplate Element (DeploymentManifest)](webtemplate-element-deploymentmanifest.md) <br/> |
|[List Element (DeploymentManifest)](list-element-deploymentmanifest.md) <br/> |
|[DocumentLibrary Element (DeploymentManifest)](documentlibrary-element-deploymentmanifest.md) <br/> |
|[PictureLibrary Element (DeploymentManifest)](picturelibrary-element-deploymentmanifest.md) <br/> |
|[ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md) <br/> |
|[Module Element (DeploymentManifest)](module-element-deploymentmanifest.md) <br/> |
|[DocumentTemplate Element (DeploymentManifest)](documenttemplate-element-deploymentmanifest.md) <br/> |
|[ListTemplate Element (DeploymentManifest)](listtemplate-element-deploymentmanifest.md) <br/> |
|[Folder Element (DeploymentManifest)](folder-element-deploymentmanifest.md) <br/> |
|[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md) <br/> |
|[ContentType Element (DeploymentManifest)](contenttype-element-deploymentmanifest.md) <br/> |
|[FieldTemplate Element (DeploymentManifest)](fieldtemplate-element-deploymentmanifest.md) <br/> |
|[WebStructure Element (DeploymentManifest)](webstructure-element-deploymentmanifest.md) <br/> |
|[UserX Element (DeploymentManifest)](userx-element-deploymentmanifest.md) <br/> |
|[GroupX Element (DeploymentManifest)](groupx-element-deploymentmanifest.md) <br/> |
|[Roles Element (DeploymentManifest)](roles-element-deploymentmanifest.md) <br/> |
|[RoleX Element (DeploymentManifest)](rolex-element-deploymentmanifest.md) <br/> |
|[RoleAssignments Element (DeploymentManifest)](roleassignments-element-deploymentmanifest.md) <br/> |
|[Feature Element (DeploymentManifest)](feature-element-deploymentmanifest.md) <br/> |
   
## Parent Elements

||
|:-----|
|[SPObjects Element (DeploymentManifest)](spobjects-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPDeploymentObject](https://msdn.microsoft.com/library/Microsoft.SharePoint.Deployment.SPDeploymentObject.aspx)
  
[Object](https://msdn.microsoft.com/library/System.Object.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

