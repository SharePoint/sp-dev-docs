---
title: "SPModerationStatusType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4f48e808-aa9d-4ea5-8c3e-94024f9f1590
description: "Last modified: March 09, 2015"
---

# SPModerationStatusType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies the document status for a list item in a Windows SharePoint Services 3.0 list or document library version collection.

## Definition

```XML
<xs:simpleType name="SPModerationStatusType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Approved" />
                <xs:enumeration value="Denied" />
                <xs:enumeration value="Pending" />
                <xs:enumeration value="Draft" />
                <xs:enumeration value="Scheduled" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Approved** <br/> |Indicates that a specified list item is approved. The last major version of the item is displayed in the public views of the list or document library.  <br/> |
|**Denied** <br/> |Indicates that a specified list item is denied. The last major version of the item is not displayed in the public views of the list or document library.  <br/> |
|**Pending** <br/> |Indicates that a specified list item is pending. The decision about displaying the item in public views of the list or document library is pending.  <br/> |
|**Draft** <br/> |Indicates that a specified list item is a draft. The item minor version is being edited and is not ready for approval.  <br/> |
|**Scheduled** <br/> |Indicates that a specified list item is scheduled. The decision about displaying the item in public views of list or document library is pending and will be processed by a timer service.  <br/> |
   
## Remarks

This type is relevant only if the list has the **Moderation** property enabled. 
  
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)

