---
title: "RefinerType simpleType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 06/10/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 78485bdb-6003-aae8-6c0a-1fa911aab6bb
description: "Describes the RefinerType simpleType (SPS15XSDSearchSet2)."
---

# RefinerType simpleType (SPS15XSDSearchSet2)



## Type information

|Info type|Value|
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |

## Definition

```XML
<xs:simpleType name="RefinerType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Deep" />
        <xs:enumeration value="Latent" />
        <xs:enumeration value="Shallow" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Deep  <br/> ||
|Latent  <br/> ||
|Shallow  <br/> ||
