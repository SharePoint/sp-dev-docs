---
title: "ListItem Element (DeploymentManifest - SPListItemVersionCollection)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b47189ad-7165-40df-8b8b-cee73bd6841d
description: "Last modified: March 09, 2015"
---

# ListItem Element (DeploymentManifest - SPListItemVersionCollection)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a SharePoint list item ([SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="ListItem" 
        type="SPListItem" 
        minOccurs="1" maxOccurs="unbounded" 
/>
USAGE
<Versions>
    <ListItem
           Name="xs:string"
           DirName="xs:string"
           FileUrl="xs:string"
           Version="xs:string"
           Id="Guid"
           IntId="xs:int"
           DocId="Guid"
           Author="xs:string"
           ModifiedBy="xs:string"
           TimeCreated="xs:dateTime"
           TimeLastModified="xs:dateTime"
           ParentWebId="Guid"
           ParentListId="Guid"
           ParentFolderId="Guid"
           ModerationStatus="SPModerationStatusType"
           ModerationComment="xs:string"
           ContentTypeId="xs:string"
           ThreadIndex="xs:string"
           DocType="ListItemDocType"
           UserLoginName="xs:string"
           GroupName="xs:string"
           FailureMessage="xs:string"
       <Fields />
       <Versions />
       <Attachments />
       <Links />
       <EventReceivers />
    />
</Versions

```

## Type

[SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Author** <br/> |xs:string  <br/> |Optional. The user who created the list item.  <br/> |
|**ContentTypeId** <br/> |xs:string  <br/> |Optional.The content type associated with the item.  <br/> |
|**DirName** <br/> |xs:string  <br/> |Optional. Name of the directory in which the item is stored.  <br/> |
|**DocId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list item file.  <br/> |
|**DocType** <br/> |[ListItemDocType Simple Type (DeploymentManifest)](listitemdoctype-simple-type-deploymentmanifest.md) <br/> |Optional. Document type of the specified list item.  <br/> |
|**FailureMessage** <br/> |xs:string  <br/> |Optional. Message provided on export or import failure.  <br/> |
|**FileUrl** <br/> |xs:string  <br/> |Optional. URL to the document item file.  <br/> |
|**GroupName** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Integer value that identifies the list item.  <br/> |
|**IntId** <br/> |xs:int  <br/> |Optional.  <br/> |
|**ModerationComment** <br/> |xs:string  <br/> |Optional. Represents Content Approval comments about the list tiem.  <br/> |
|**ModerationStatus** <br/> |[SPModerationStatusType Simple Type (DeploymentManifest)](spmoderationstatustype-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies the moderation status of the list item (Approved, Denied, Pending, Draft, Scheduled).  <br/> |
|**ModifiedBy** <br/> |xs:string  <br/> |Optional. Name of the user who last modified the file.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Name of the person who created the file.  <br/> |
|**ParentFolderId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list item's parent folder in the database.  <br/> |
|**ParentListId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list item's parent list.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the list item's parent website.  <br/> |
|**ThreadIndex** <br/> |xs:string  <br/> |Optional.  <br/> |
|**TimeCreated** <br/> |xs:dateTime  <br/> |Optional. Time and date that the file was created.  <br/> |
|**TimeLastModified** <br/> |xs:dateTime  <br/> |Optional. Time and date that the file was last modified.  <br/> |
|**UserLoginName** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Version** <br/> |xs:string  <br/> |Optional. Represents the version of the list item.  <br/> |
   
### Child elements

- [Attachments Element (DeploymentManifest)](attachments-element-deploymentmanifest.md) 
- [EventReceivers Element (DeploymentManifest - SPListItem)](eventreceivers-element-deploymentmanifestsplistitem.md) 
- [Fields Element (DeploymentManifest - SPList)](fields-element-deploymentmanifestsplist.md) 
- [Links Element (DeploymentManifest - SPListItem)](links-element-deploymentmanifestsplistitem.md) 
- [Versions Element (DeploymentManifest - SPListItem)](versions-element-deploymentmanifestsplistitem.md)
   
### Parent elements

- [Versions Element (DeploymentManifest - SPListItem)](versions-element-deploymentmanifestsplistitem.md)
   
## Remarks

This element has a recursive structure, as shown in the following code example.
  
```XML
<SPObject>
    <ListItem>
        <Versions>
            <ListItem>
                <Versions />
            </ListItem>
        </Versions>
    </ListItem>
</SPObject>
```

## See also

- [SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

