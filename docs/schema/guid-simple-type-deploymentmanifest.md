---
title: "Guid Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bcb1a129-684f-4ef8-a7fe-263c554a5203
description: "Last modified: July 15, 2011"
---

# Guid Simple Type (DeploymentManifest)
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Supports the use of globally unique identifiers (GUIDs) as attribute field values in elements and types of the DeploymentManifest Schema. The attribute provides a GUID of the specified item.

## Definition

```XML
      <xs:simpleType name="Guid">
            <xs:restriction base="xs:string">
            </xs:restriction>
      </xs:simpleType>
```

## See also

- [Guid](http://msdn2.microsoft.com/EN-US/library/cey1zx63)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

