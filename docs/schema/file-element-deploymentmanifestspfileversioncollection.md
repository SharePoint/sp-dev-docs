---
title: "File Element (DeploymentManifest - SPFileVersionCollection)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5c90bc0c-03a4-48c3-80f9-e8f974edb8c6
description: "Last modified: March 09, 2015"
---

# File Element (DeploymentManifest - SPFileVersionCollection)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a versioned instance of a SharePoint Foundation 2010 file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx) ) object. 
  
```
DECLARATION
<xs:element name="File" 
        type="SPFile" 
        minOccurs="1" maxOccurs="unbounded" 
/>
USAGE
<Versions>
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
</Versions>
```

## Type

[SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |xs:string  <br/> |Optional. Name of the file.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the file.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. The Web site-relative URL of the file.  <br/> |
|**ListItemIntId** <br/> |xs:int  <br/> |Optional. Integer identifier specifying the list item relative to position in a document library.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of parent Web site.  <br/> |
|**ParentWebUrl** <br/> |xs:string  <br/> |Optional. URL of the parent Web site.  <br/> |
|**ParentId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the parent folder for the file.  <br/> |
|**ListId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list in which the file exists. **ListId** values must match values for the **Versions** attribute.  <br/> |
|**FileValue** <br/> |xs:string  <br/> |Optional. Specifies the location of the file on disk.  <br/> |
|**CheckinComment** <br/> |xs:string  <br/> |Optional. Comments provided on file checkin.  <br/> |
|**Versions** <br/> |xs:string  <br/> |Optional. Represents a collection of file version objects that specify file versions.  <br/> |
|**Author** <br/> |xs:string  <br/> |Optional. The user who created or uploaded the file.  <br/> |
|**ModifiedBy** <br/> |xs:string  <br/> |Optional. The user who last modified the file.  <br/> |
|**TimeCreated** <br/> |xs:dateTime  <br/> |Optional. Date-time value representing the time the file was created or uploaded.  <br/> |
|**TimeLastModified** <br/> |xs:dateTime  <br/> |Optional. Date-time value representing the time the file was last modified.  <br/> |
|**FailureMessage** <br/> |xs:string  <br/> |Optional. Message represented on failure at export or import.  <br/> |
|**IsGhosted** <br/> |xs:boolean  <br/> |Optional. Specifies whether the file exists on the front end (and not in the database), and therefore does not require a roundtrip to the database server.  <br/> |
|**SetupPath** <br/> |xs:string  <br/> |Optional. Path to the front-end file location in cases where the **IsGhosted** attribute is **true**.  <br/> |
|**SetupPathUser** <br/> |xs:string  <br/> |Optional. Person who initially created the list in the document library.  <br/> |
|**SetupPathVersion** <br/> |xs:byte  <br/> |Optional. Specifies Microsoft SharePoint Foundation version. The value **2** specifies Windows SharePoint Services 2.0; the value **3** specifies Windows SharePoint Services 3.0.  <br/> |
   
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
|[Versions Element (DeploymentManifest - SPFile)](versions-element-deploymentmanifestspfile.md)
   
## See also



[SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

