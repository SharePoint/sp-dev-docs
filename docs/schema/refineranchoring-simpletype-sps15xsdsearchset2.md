---
title: "RefinerAnchoring simpleType (SPS15XSDSearchSet2)"


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 45d7c1b5-39dd-f86b-0a07-b2187d0de04a
description: "Last modified: March 09, 2015"
---

# RefinerAnchoring simpleType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="RefinerAnchoring">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Auto" />
        <xs:enumeration value="None" />
        <xs:enumeration value="Complete" />
        <xs:enumeration value="Prefix" />
        <xs:enumeration value="Suffix" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Auto  <br/> ||
|None  <br/> ||
|Complete  <br/> ||
|Prefix  <br/> ||
|Suffix  <br/> ||
   

