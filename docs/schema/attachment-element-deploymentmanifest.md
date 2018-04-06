---
title: "Attachment Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5c78cfef-9a58-42ae-a7ca-a5f2e61668ac
description: "Last modified: March 09, 2015"
---

# Attachment Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 attachment object ( **SPAttachment**).

## Definition

```XML
DECLARATION
<xs:element name="Attachment" 
      type="SPAttachment" 
      minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<ListItem>
        <Attachments>
                <Attachment>
                        Name="xs:string"
                        DirName="xs:string"
                        Url="xs:string"
                        Id="Guid"
                        ParentWebId="Guid"
                        FileValue="xs:string"
                        MetaInfo="xs:string"
                        Author="xs:string"
                        ModifiedBy="xs:string"
                        TimeCreated="xs:dateTime"
                        TimeLastModified="xs:dateTime"
                        FailureMessage="xs:string"
                                <Properties />
                </Attachment>
        </Attachments>
</ListItem>
```

## Type

 **SPAttachement**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|Name  <br/> |xs:string  <br/> |Required. Attachment file name.  <br/> |
|DirName  <br/> |xs:string  <br/> |Optional. Url to the directory in which the attachment file is located.  <br/> |
|Url  <br/> |xs:string  <br/> |Optional. Web-relative URL to the attachment file (DirName plus file name).  <br/> |
|Id  <br/> |Guid  <br/> |Optional. Unique identifier of the attachment file.  <br/> |
|ParentWebId  <br/> |Guid  <br/> |Optional. Unique identifier of the parent Web.  <br/> |
|FileValue  <br/> |xs:string  <br/> |Required. Identifier of the attachment file as maintained by the export package.  <br/> |
|MetaInfo  <br/> |xs:string  <br/> |Optional. Property bag values for the attachment file.  <br/> |
|Author  <br/> |xs:string  <br/> |Optional. User who created or uploaded the attachment file.  <br/> |
|ModifiedBy  <br/> |xs:string  <br/> |Optional. Any user who modified the attachment file.  <br/> |
|TimeCreated  <br/> |xs:dateTime  <br/> |Optional. Time the attachment file was created or uploaded.  <br/> |
|TimeLastModified  <br/> |xs:dateTime  <br/> |Optional. Time the file was last modified.  <br/> |
|FailureMessage  <br/> |xs:string  <br/> |Optional. Export failure message.  <br/> |
   
## Child Elements

||
|:-----|
|[Properties Element (DeploymentManifest - SPAttachment)](properties-element-deploymentmanifestspattachment.md)|
   
## Parent Elements

||
|:-----|
|[Attachments Element (DeploymentManifest)](attachments-element-deploymentmanifest.md)|
   
## Remarks

Attachments are available for any list items that are not part of a document library.
  
## See also

#### Reference

 **SPAttachmentCollection**


[DeploymentManifest Schema](deploymentmanifest-schema.md)

