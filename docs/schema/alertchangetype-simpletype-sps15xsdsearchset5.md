---
title: "AlertChangeType simpleType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 07/15/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 3f7286b9-dab0-3629-5734-308ba2b430cc
description: "Describes the AlertChangeType simpleType (SPS15XSDSearchSet5) type information, definition, and enumeration values."
---

# AlertChangeType simpleType (SPS15XSDSearchSet5)

**Applies to:** SharePoint Server 2013

## Type information

|| Value |
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |

## Definition

```XML
<xs:simpleType name="AlertChangeType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Discovered" />
        <xs:enumeration value="Modified" />
        <xs:enumeration value="DiscoveredOrModified" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----:|
|Discovered  <br/> |1  <br/> |
|Modified  <br/> |2  <br/> |
|DiscoveredOrModified  <br/> |3  <br/> |
