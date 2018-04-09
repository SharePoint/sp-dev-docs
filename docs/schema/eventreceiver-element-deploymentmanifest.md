---
title: "EventReceiver Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f7dc71ad-48b8-4df9-aa93-46440207375a
description: "Last modified: March 09, 2015"
---

# EventReceiver Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a SharePoint event receiver object instance ([SPEventReceiverDefinition](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinition.aspx) ). Depending on the event receiver collection specified, the event receiver can listen for events on [SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx), [SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx), [SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx), or [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) objects. 

## Definition

```XML
DECLARATION
<xs:element name="EventReceiver" 
        type="SPEventReceiverDefinition" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<EventReceivers>
        <EventReceiver
                Id="Guid"
                Name="xs:string"
                WebId="Guid"
                HostId="Guid"
                HostType="SPEventHostType"
                Type="SPEventReceiverType"
                SequenceNumber="xs:int"
                Assembly="xs:string"
                Class="xs:string"
                Data="xs:string"
                Filter="xs:string"
                Credential="xs:int"
                ItemId="xs:int"
        />
</EventReceivers>

```

## Type

[SPEventReceiverDefinition](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinition.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|ID  <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier of the event receiver definition.  <br/> |
|Name  <br/> |xs:string  <br/> |Required. Name of the event receiver.  <br/> |
|WebId  <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier of the site in which the event receiver is registered.  <br/> |
|HostId  <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier of the object that is hosting the event.  <br/> |
|HostType  <br/> |[SPEventHostType Simple Type (DeploymentManifest)](speventhosttype-simple-type-deploymentmanifest.md) <br/> |Required. Type of object that is hosting the event. The host type must be an enumeration value defined in the **SPEventHostType**simple type.  <br/> |
|Type  <br/> |[SPEventReceiverType Simple Type (DeploymentManifest)](speventreceivertype-simple-type-deploymentmanifest.md) <br/> |Required. Type of event for the event receiver. The event receiver type must be an enumeration value defined in the **SPEventReceiverType** simple type.  <br/> |
|SequenceNumber  <br/> |xs:int  <br/> |Required. Integer representing the relative order in a sequence of events.  <br/> |
|Assembly  <br/> |xs:string  <br/> |Required. Strong name representing the assembly that is the event receiver.  <br/> |
|Class  <br/> |xs:string  <br/> |Required. The class that is the event receiver.  <br/> |
|Data  <br/> |xs:string  <br/> |Optional. Data that is associated with the event receiver.  <br/> |
|Filter  <br/> |xs:string  <br/> |Optional.  <br/> |
|Credential  <br/> |xs:int  <br/> |Optional.  <br/> |
|ItemId  <br/> |xs:int  <br/> |Optional.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[EventReceivers Element (DeploymentManifest - SPFile)](eventreceivers-element-deploymentmanifestspfile.md) <br/> |
|[EventReceivers Element (DeploymentManifest - SPList)](eventreceivers-element-deploymentmanifestsplist.md) <br/> |
|[EventReceivers Element (DeploymentManifest - SPListItem)](eventreceivers-element-deploymentmanifestsplistitem.md) <br/> |
|[EventReceivers Element (DeploymentManifest - SPWeb)](eventreceivers-element-deploymentmanifestspweb.md) <br/> |
   
## See also



[SPEventReceiverDefinition](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPEventReceiverDefinition.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

