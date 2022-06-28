---
title: "Guid Simple Type (DeploymentSystemData)"
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 45ea2502-bbc8-4c04-9823-be6b6e1ef562
description: Guid Simple Type (DeploymentSystemData) supports the use of a unique identifier (GUID) as a Guid attribute field value in the SystemObject Element (DeploymentSystemData).
---

# Guid Simple Type (DeploymentSystemData)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Supports the use of a unique identifier (GUID) as a **Guid** attribute field value in the [SystemObject Element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md) of the DeploymentLRootObjectMap Schema.

## Definition

```XML
<xs:simpleType name="Guid">
    <xs:restriction base="xs:string"></xs:restriction>
</xs:simpleType>

```

## See also

- [DeploymentSystemData Schema](deploymentsystemdata-schema.md)
- [SystemObject Element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md)
