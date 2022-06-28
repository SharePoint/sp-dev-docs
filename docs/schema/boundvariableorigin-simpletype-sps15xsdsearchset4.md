---
title: "BoundVariableOrigin simpleType (SPS15XSDSearchSet4)"
manager: arnek
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: ef2b82d9-950d-08ed-9ff9-4047a1759b6a
description: Learn about BoundVariableOrigin simpleType (SPS15XSDSearchSet4).
---

# BoundVariableOrigin simpleType (SPS15XSDSearchSet4)

**Applies to:** SharePoint Server 2013

## Type information

|Information|Location|
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.Rules.xsd  <br/> |

## Definition

```XML
<xs:simpleType name="BoundVariableOrigin">
    <xs:restriction base="xs:string">
        <xs:enumeration value="FullQuery" />
        <xs:enumeration value="MatchedTerms" />
        <xs:enumeration value="Remainder" />
        <xs:enumeration value="CaptureGroup" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|FullQuery  <br/> |1  <br/> |
|MatchedTerms  <br/> |2  <br/> |
|Remainder  <br/> |3  <br/> |
|CaptureGroup  <br/> |4  <br/> |
