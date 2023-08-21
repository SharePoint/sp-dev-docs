---
title: "SortDirection simpleType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f2af8113-f7b9-9705-7434-285c87ccf072
description: Learn more about SortDirection simpleType (SPS15XSDSearchSet5).
---

# SortDirection simpleType (SPS15XSDSearchSet5)



 **Applies to:** SharePoint Server 2013

## Type information

|Information|Location|
|:-----|:-----|
|**Base type**  |xs:string   |
|**Namespace**  |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query   |
|**Schema file**  |schema_Microsoft.Office.Server.Search.Query.xsd   |

## Definition

```XML
<xs:simpleType name="SortDirection">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Ascending" />
        <xs:enumeration value="Descending" />
        <xs:enumeration value="FQLFormula" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Ascending  <br/> ||
|Descending  <br/> ||
|FQLFormula  <br/> ||
