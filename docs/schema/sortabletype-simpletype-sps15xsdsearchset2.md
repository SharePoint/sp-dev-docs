---
title: "SortableType simpleType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 06/14/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 8bc6e087-8530-8a5e-144c-a7790e8d716a
description: Learn more about SortableType simpleType (SPS15XSDSearchSet2).
---

# SortableType simpleType (SPS15XSDSearchSet2)



## Type information

|Information|Location|
|:-----|:-----|
|**Base type**  |xs:string  |
|**Namespace** |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration   |
|**Schema file**  |schema_Microsoft.Office.Server.Search.Administration.xsd  |

## Definition

```XML
<xs:simpleType name="SortableType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Enabled" />
        <xs:enumeration value="Latent" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Enabled  <br/> ||
|Latent  <br/> ||
