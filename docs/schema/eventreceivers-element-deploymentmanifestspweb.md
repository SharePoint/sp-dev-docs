---
title: "EventReceivers Element (DeploymentManifest - SPWeb)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e513a1ac-6367-452f-b039-b1d404e6573e
description: "Last modified: March 09, 2015"
---

# EventReceivers Element (DeploymentManifest - SPWeb)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a SharePoint event receiver object container or collection ([SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx)) for implementing event handling on SharePoint Web ([SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx)) objects. 

## Definition

```XML
DECLARATION
<xs:element name="EventReceivers" 
        type="SPEventReceiverDefinitionCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<Web>
        <EventReceivers>
                <EventReceiver />
        </EventReceivers>
</Web>

```

## Type

[SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[EventReceiver Element (DeploymentManifest)](eventreceiver-element-deploymentmanifest.md)
   
### Parent elements

[Web Element (DeploymentManifest)](web-element-deploymentmanifest.md)
   
### Remarks

This element is one of four **EventReceivers** elements; each derives from a different element hierarchy, as follows:
  
- [EventReceivers Element (DeploymentManifest - SPFile)](eventreceivers-element-deploymentmanifestspfile.md)
    
- [EventReceivers Element (DeploymentManifest - SPList)](eventreceivers-element-deploymentmanifestsplist.md)
    
- [EventReceivers Element (DeploymentManifest - SPListItem)](eventreceivers-element-deploymentmanifestsplistitem.md)
    
- [EventReceivers Element (DeploymentManifest - SPWeb)](eventreceivers-element-deploymentmanifestspweb.md)
    
## See also

- [SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

