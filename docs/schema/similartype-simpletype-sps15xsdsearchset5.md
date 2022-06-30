---
title: "SimilarType simpleType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 2ca0d24e-1c22-3115-a8a8-4bb3cde0f2a1
description: Learn more about SimilarType simpleType (SPS15XSDSearchSet5).
---

# SimilarType simpleType (SPS15XSDSearchSet5)

**Applies to:** SharePoint Server 2013

## Type information

|Information|Location|
|:-----|:-----|
|**Base type**  |xs:string  |
|**Namespace**  |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  |
|**Schema file**  |schema_Microsoft.Office.Server.Search.Query.xsd  |

## Definition

```XML
<xs:simpleType name="SimilarType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="None" />
        <xs:enumeration value="Find" />
        <xs:enumeration value="Refine" />
        <xs:enumeration value="Exclude" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|None  <br/> ||
|Find  <br/> ||
|Refine  <br/> ||
|Exclude  <br/> ||
