---
title: "DraftVisibilityType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1bd5d4fe-5ab7-4098-a9de-cd4a8d1adc21
description: "Last modified: March 09, 2015"
---

# DraftVisibilityType Simple Type (DeploymentManifest)
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the type of user who can view a draft document.

## Definition

```XML
<xs:simpleType name="DraftVisibilityType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Reader" />
                <xs:enumeration value="Author" />
                <xs:enumeration value="Approver" />
        </xs:restriction>
</xs:simpleType>
```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Reader** <br/> |Specifies reader, author, or approver can view the item.  <br/> |
|**Author** <br/> |Specifies author can view the item.  <br/> |
|**Approver** <br/> |Specifies approver can view the item.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

