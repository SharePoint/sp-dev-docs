---
title: "Guid Simple Type (DeploymentLookupListMap)"
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f7feaa49-5b51-45ae-be05-24a2c46c0b0b
description: Guid Simple Type (DeploymentLookupListMap) supports the use of a globally unique identifier (GUID) as a Guid attribute field value.
---

# Guid Simple Type (DeploymentLookupListMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Supports the use of a globally unique identifier (GUID) as a **Guid** attribute field value in the [LookupItem Element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md) and other elements of the DeploymentLookupListMap Schema.

## Definition

```XML
<xs:simpleType name="Guid">
    <xs:restriction base="xs:string"></xs:restriction>
</xs:simpleType>

```

## See also

- [DeploymentLookupListMap Schema](deploymentlookuplistmap-schema.md)
- [LookupItem Element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md)
