---
title: "ManagedDataType simpleType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b5080a9d-a72e-57ec-efd6-18f8ea0e184e
description: "Last modified: March 09, 2015"
---

# ManagedDataType simpleType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
   
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
   

