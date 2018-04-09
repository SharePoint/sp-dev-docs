---
title: "Properties Element (DeploymentManifest - SPAttachment)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 67a3c058-34d2-4b96-ae8d-b4faf6e194a9
description: "Last modified: March 09, 2015"
---

# Properties Element (DeploymentManifest - SPAttachment)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of properties on a Windows SharePoint Services 3.0 attachment. Use the Attachments property of the **SPListItem** class to retrieve a collection of attachements for a list item. 
  
```
DECLARATION
<xs:element name="Properties" type="Dictionary" minOccurs="0" />
USAGE
<Attachment>
        <Properties
                <Property />
        />
</Attachment>

```

## Type

 **Dictionary**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[Attachment Element (DeploymentManifest)](attachment-element-deploymentmanifest.md)
   
## See also



[DeploymentManifest Schema](deploymentmanifest-schema.md)

