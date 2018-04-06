---
title: "Folder Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 79010d5f-246c-45bd-a11c-18dc09e84455
description: "Last modified: March 09, 2015"
---

# Folder Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 folder ([SPFolder](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFolder.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Folder" type="SPFolder" />
USAGE
<SPObject>
        <Folder
                Id="Guid"
                Name="xs:string"
                Url="xs:string"
                ParentFolderId="Guid"
                ParentWebId="Guid"
                ParentWebUrl="xs:string"
                ContainingDocumentLibrary="Guid"
                WelcomePageUrl="xs:string"
                WelcomePageParameters="xs:string"
                ListItemIntId="xs:int"
                Author="xs:string"
                ModifiedBy="xs:string"
                TimeCreated="xs:dateTime"
                TimeLastModified="xs:dateTime"
                        <Properties />
        />
</SPObject>

```

## Type

[SPFolder](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFolder.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the folder.  <br/> Optional on export; required by import.  <br/> |
|**Name** <br/> |xs:string  <br/> |Name of the folder.  <br/> Optional on export; required by import.  <br/> |
|**Url** <br/> |xs:string  <br/> |URL path to the folder.  <br/> Optional on export; required by import.  <br/> |
|**ParentFolderId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the folder's parent folder.  <br/> Optional on export; required by import.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the folder's parent Web site, where appropriate.  <br/> Optional on export; required by import.  <br/> |
|**ParentWebUrl** <br/> |xs:string  <br/> |Optional. URL to the parent Web site.  <br/> |
|**ContainingDocumentLibrary** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the document library the folder is part of, if it belongs to a document library.  <br/> |
|**WelcomePageUrl** <br/> |xs:string  <br/> |Optional. URL to the site's Welcome page.  <br/> |
|**WelcomePageParameters** <br/> |xs:string  <br/> |Optional. URL parameters available for augmenting the Welcome page URL.  <br/> |
|**ListItemIntId** <br/> |xs:int  <br/> |Optional. Integer value that specifies the position relative to the list.  <br/> |
|**Author** <br/> |xs:string  <br/> |Optional. User who created the folder.  <br/> |
|**ModifiedBy** <br/> |xs:string  <br/> |Optional. User who last modified the folder.  <br/> |
|**TimeCreated** <br/> |xs:dateTime  <br/> |Optional. Date/time value specifying the time the folder was created.  <br/> |
|**TimeLastModified** <br/> |xs:dateTime  <br/> |Optional. Date-time value specifying the time the folder was last modified.  <br/> |
   
## Child Elements

||
|:-----|
|[Properties Element (DeploymentManifest - SPFolder)](properties-element-deploymentmanifestspfolder.md)|
   
## Parent Elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPFolder](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFolder.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

