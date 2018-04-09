---
title: "EventReceivers Element (DeploymentManifest - SPFile)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f9e0096d-95b1-4cbc-852e-e5ea9f163d25
description: "Last modified: March 09, 2015"
---

# EventReceivers Element (DeploymentManifest - SPFile)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a Windows SharePoint Services 3.0 event receiver object container, or collection ([SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx) ), for implementing event handling on SharePoint file ( [SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx) ) objects. 
  
```
DECLARATION
<xs:element name="EventReceivers"
        type="SPEventReceiverDefinitionCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<File>
        <EventReceivers>
                <EventReceiver />
        </EventReceivers>
</File>

```

## Type

 **SPEventReceiverDefinitionCollection**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[EventReceiver Element (DeploymentManifest)](eventreceiver-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)
   
## Remarks

This element is one of four **EventReceivers** elements; each derives from a different element hierarchy, as follows: 
  
- [EventReceivers Element (DeploymentManifest - SPFile)](eventreceivers-element-deploymentmanifestspfile.md)
    
- [EventReceivers Element (DeploymentManifest - SPList)](eventreceivers-element-deploymentmanifestsplist.md)
    
- [EventReceivers Element (DeploymentManifest - SPListItem)](eventreceivers-element-deploymentmanifestsplistitem.md)
    
- [EventReceivers Element (DeploymentManifest - SPWeb)](eventreceivers-element-deploymentmanifestspweb.md)
    
## See also



[SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

