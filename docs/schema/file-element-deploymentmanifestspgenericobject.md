---
title: "File Element (DeploymentManifest - SPGenericObject)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 122cf3f0-fe96-453c-9708-10dda669d745
description: "Last modified: March 09, 2015"
---

# File Element (DeploymentManifest - SPGenericObject)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx) ) object. 
  
```
DECLARATION
<xs:element name="File" type="SPFile" />
USAGE
<SPObject>
        <File
                Name="xs:string"
                Id="Guid"
                Url="xs:string"
                ListItemIntId="xs:int"
                ParentWebId="Guid"
                ParentWebUrl="xs:string"
                ParentId="Guid"
                ListId="Guid"
                FileValue="xs:string"
                CheckinComment="xs:string"
                Version="xs:string"
                Author="xs:string"
                ModifiedBy="xs:string"
                TimeCreated="xs:dateTime"
                TimeLastModified="xs:dateTime"
                FailureMessage="xs:string"
                IsGhosted="xs:boolean"
                SetupPath="Guid"
                SetupPathUser="xs:string"
                SetupPathVersion="xs:byte"
            <Properties />
                        <Versions />
                        <WebParts />
                        <Personalizations />
                        <Links />
                        <EventReceivers />
        />
</SPObject>
```

## Type

[SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |xs:string  <br/> |Optional. Name of the file.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the file.  <br/> Optional on export; required by import.  <br/> |
|**Url** <br/> |xs:string  <br/> |The Web site-relative URL of the file.  <br/> Optional on export; required by import.  <br/> |
|**ListItemIntId** <br/> |xs:int  <br/> |Optional. Integer identifier specifying the list item relative to position in a document library.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of parent Web site.  <br/> Optional on export; required by import.  <br/> |
|**ParentWebUrl** <br/> |xs:string  <br/> |Optional. URL of the parent Web site.  <br/> |
|**ParentId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the parent folder for the file.  <br/> Optional on export; required by import.  <br/> |
|**ListId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list in which the file exists. **ListId** values must match values for the **Versions** attribute.  <br/> |
|**FileValue** <br/> |xs:string  <br/> |Specifies the location of the file on disk.  <br/> Optional on export; required by import for customized (unghosted) files and for document library items.  <br/> |
|**CheckinComment** <br/> |xs:string  <br/> |Optional. Comments provided when the file is checked in.  <br/> |
|**Versions** <br/> |xs:string  <br/> |Optional. Represents a collection of file version objects that specify file versions.  <br/> |
|**Author** <br/> |xs:string  <br/> |Optional. The user who created or uploaded the file.  <br/> |
|**ModifiedBy** <br/> |xs:string  <br/> |Optional. The user who last modified the file.  <br/> |
|**TimeCreated** <br/> |xs:dateTime  <br/> |Optional. Date-time value representing the time the file was created or uploaded.  <br/> |
|**TimeLastModified** <br/> |xs:dateTime  <br/> |Optional. Date-time value representing the tilme the file was last modified.  <br/> |
|**FailureMessage** <br/> |xs:string  <br/> |Optional. Message represented on failure at export or import.  <br/> |
|**IsGhosted** <br/> |xs:boolean  <br/> |Optional. Specifies whether the file exists on the front end (and not in the database), and therefore does not require a roundtrip to the database server.  <br/> |
|**SetupPath** <br/> |xs:string  <br/> |Path to the front-end file location in cases where the **IsGhosted** attribute is **true**.  <br/> Optional on export; required by import if **IsGhosted** attribute is **true**.  <br/> |
|**SetupPathUser** <br/> |xs:string  <br/> |Optional. Person who initially created the list in the document library.  <br/> |
|**SetupPathVersion** <br/> |xs:byte  <br/> |Optional. Specifies the Windows Microsoft SharePoint Foundation Services version. The value **2** specifies Windows SharePoint Services 2.0; the value **3** specifies Windows SharePoint Services 3.0.  <br/> |
   
### Child elements

||
|:-----|
|[EventReceivers Element (DeploymentManifest - SPFile)](eventreceivers-element-deploymentmanifestspfile.md) <br/> |
|[Links Element (DeploymentManifest - SPFile)](links-element-deploymentmanifestspfile.md) <br/> |
|[Personalizations Element (DeploymentManifest)](personalizations-element-deploymentmanifest.md) <br/> |
|[Properties Element (DeploymentManifest - SPFile)](properties-element-deploymentmanifestspfile.md) <br/> |
|[Versions Element (DeploymentManifest - SPFile)](versions-element-deploymentmanifestspfile.md) <br/> |
|[WebParts Element (DeploymentManifest)](webparts-element-deploymentmanifest.md) <br/> |
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also



[SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

