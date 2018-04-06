---
title: "EventReceivers Element (DeploymentManifest - SPListItem)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9f2b86b2-1d19-43c5-ba59-108f4eef91f3
description: "Last modified: March 09, 2015"
---

# EventReceivers Element (DeploymentManifest - SPListItem)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a SharePoint event receiver object container, or collection ([SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx) ), for implementing event handling on SharePoint list item ( [SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx) ) objects. 
  
```
DECLARATION
<xs:element name="EventReceivers"
       type="SPEventReceiverDefinitionCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<ListItem>
        <EventReceivers>
                <EventReceiver />
        </EventReceivers>
</ListItem>

```

## Type

 **SPEventReceiverDefinitionCollection**
  
## Attributes

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
|[ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)
   
## Remarks

This element is one of four **EventReceivers** elements; each derives from a different element hierarchy, as follows: 
  
- [EventReceivers Element (DeploymentManifest - SPFile)](eventreceivers-element-deploymentmanifestspfile.md)
    
- [EventReceivers Element (DeploymentManifest - SPList)](eventreceivers-element-deploymentmanifestsplist.md)
    
- [EventReceivers Element (DeploymentManifest - SPListItem)](eventreceivers-element-deploymentmanifestsplistitem.md)
    
- [EventReceivers Element (DeploymentManifest - SPWeb)](eventreceivers-element-deploymentmanifestspweb.md)
    
## See also



[SPEventReceiverDefinitionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinitionCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

