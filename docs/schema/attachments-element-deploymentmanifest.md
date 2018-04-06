---
title: "Attachments Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9634ffe7-daaf-4c0a-9195-516d913ee0a9
description: "Last modified: March 09, 2015"
---

# Attachments Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a container, or collection, of Windows SharePoint Services 3.0 **Attachment** object instances. 
  
```
DELCARATION
<xs:element name="Attachments" type="SPAttachmentCollection" minOccurs="0" maxOccurs="1" />
USAGE
<ListItem>
        <Attachments>
                <Attachement />
        </Attachements>
</ListItem>

```

## Type

 **SPAttachmentCollection**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[Attachment Element (DeploymentManifest)](attachment-element-deploymentmanifest.md)|
   
## Parent Elements

||
|:-----|
|[ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)|
   
## See also

#### Reference

 **SPAttachmentCollection**


[DeploymentManifest Schema](deploymentmanifest-schema.md)
#### Other resources

[Attachment Element (DeploymentManifest)](attachment-element-deploymentmanifest.md)

