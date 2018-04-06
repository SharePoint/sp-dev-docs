---
title: "SPEventReceiverType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7a666a1a-62fb-4371-aa88-a89018982fee
description: "Last modified: March 09, 2015"
---

# SPEventReceiverType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies the available event receivers.

## Definition

```XML
<xs:simpleType name="SPEventReceiverType" >
        <xs:restriction base="xs:string">
            <xs:enumeration value="ItemAdding" />
            <xs:enumeration value="ItemUpdating" />
            <xs:enumeration value="ItemDeleting" />
            <xs:enumeration value="ItemCheckingIn" />
            <xs:enumeration value="ItemCheckingOut" />
            <xs:enumeration value="ItemUncheckingOut" />
            <xs:enumeration value="ItemAttachmentAdding" />
            <xs:enumeration value="ItemAttachmentDeleting" />
            <xs:enumeration value="ItemFileMoving" />
            <xs:enumeration value="FieldAdding" />
            <xs:enumeration value="FieldUpdating" />
            <xs:enumeration value="FieldDeleting" />
            <xs:enumeration value="SiteDeleting" />
            <xs:enumeration value="WebDeleting" />
            <xs:enumeration value="WebMoving" />
            <xs:enumeration value="ItemAdded" />
            <xs:enumeration value="ItemUpdated" />
            <xs:enumeration value="ItemDeleted" />
            <xs:enumeration value="ItemCheckedIn" />
            <xs:enumeration value="ItemCheckedOut" />
            <xs:enumeration value="ItemUncheckedOut" />
            <xs:enumeration value="ItemAttachmentAdded" />
            <xs:enumeration value="ItemAttachmentDeleted" />
            <xs:enumeration value="ItemFileMoved" />
            <xs:enumeration value="ItemFileTransformed" />
            <xs:enumeration value="FieldAdded" />
            <xs:enumeration value="FieldUpdated" />
            <xs:enumeration value="FieldDeleted" />
            <xs:enumeration value="SiteDeleted" />
            <xs:enumeration value="WebDeleted" />
            <xs:enumeration value="WebMoved" />
            <xs:enumeration value="EmailReceived" />
            <xs:enumeration value="ContextEvent" />
            <xs:enumeration value="InvalidReceiver" />
        </xs:restriction>
    </xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|ContextEvent  <br/> |Indicates a list received a context event.  <br/> |
|EmailReceived  <br/> |Indicates a list received an email message.  <br/> |
|FieldAdded  <br/> |Indicates a field was added.  <br/> |
|FieldAdding  <br/> |Indicates a field is being added.  <br/> |
|FieldDeleted  <br/> |Indicates a field was removed.  <br/> |
|FieldDeleting  <br/> |Indicates a field is being removed.  <br/> |
|FieldUpdated  <br/> |Indicates a field was updated.  <br/> |
|FieldUpdating  <br/> |Indicates a field is being updated.  <br/> |
|InvalidReceiver  <br/> |Indicates the event receiver is not valid.  <br/> |
|ItemAdded  <br/> |Indicates an item was added.  <br/> |
|ItemAdding  <br/> |Indicates an item is being added.  <br/> |
|ItemAttachmentAdded  <br/> |Indicates an attachment was added to the item.  <br/> |
|ItemAttachmentAdding  <br/> |Indicates an attachment is being added to the item.  <br/> |
|ItemAttachmentDeleted  <br/> |Indicates an attachment was removed from the item.  <br/> |
|ItemAttachmentDeleting  <br/> |Indicates an attachment is being removed from the item.  <br/> |
|ItemCheckedIn  <br/> |Indicates an item was checked in.  <br/> |
|ItemCheckedOut  <br/> |Indicates an item was checked out.  <br/> |
|ItemCheckingIn  <br/> |Indicates an item is being checked in.  <br/> |
|ItemCheckingOut  <br/> |Indicates an item is being checked out.  <br/> |
|ItemDeleted  <br/> |Indicates an item was deleted  <br/> |
|ItemDeleting  <br/> |Indicates an item is being deleted.  <br/> |
|ItemFileMoved  <br/> |Indicates a file was moved.  <br/> |
|ItemFileMoving  <br/> |Indicates a file is being moved.  <br/> |
|ItemFileTransformed  <br/> |Indicates a file was converted.  <br/> |
|ItemUncheckedOut  <br/> |Indicates an item is not checked out.  <br/> |
|ItemUncheckingOut  <br/> |Indicates that Undo Checkout is occuring on an item.  <br/> |
|ItemUpdated  <br/> |Indicates an item was updated.  <br/> |
|ItemUpdating  <br/> |Indicates an item is being updated.  <br/> |
|SiteDeleted  <br/> |Indicates a site collection was deleted.  <br/> |
|SiteDeleting  <br/> |Indicates a site collection is being deleted.  <br/> |
|WebDeleted  <br/> |Indicates a site was deleted.  <br/> |
|WebDeleting  <br/> |Indicates a site is being deleted.  <br/> |
|WebMoved  <br/> |Indicates a site was moved.  <br/> |
|WebMoving  <br/> |Indicates a site is being moved.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

