---
title: "ManagedDataType simpleType (SPS15XSDSearchSet2)"
description: Outlines information, a definition, and enumeration values for the ManagedDataType simpleType in Sharepoint.
manager: arnek
ms.date: 06/09/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: b5080a9d-a72e-57ec-efd6-18f8ea0e184e
---

# ManagedDataType simpleType (SPS15XSDSearchSet2)



## Type information
|Name|Value|
|:-----|:-----|
|**Base type** |xs:string  |
|**Namespace** |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration |
|**Schema file** |schema_Microsoft.Office.Server.Search.Administration.xsd  |

## Definition

```XML
<xs:simpleType name="ManagedDataType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Unsupported" />
        <xs:enumeration value="Text" />
        <xs:enumeration value="Integer" />
        <xs:enumeration value="Decimal" />
        <xs:enumeration value="DateTime" />
        <xs:enumeration value="YesNo" />
        <xs:enumeration value="Binary" />
        <xs:enumeration value="Double" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Unsupported  <br/> ||
|Text  <br/> ||
|Integer  <br/> ||
|Decimal  <br/> ||
|DateTime  <br/> ||
|YesNo  <br/> ||
|Binary  <br/> ||
|Double  <br/> ||
