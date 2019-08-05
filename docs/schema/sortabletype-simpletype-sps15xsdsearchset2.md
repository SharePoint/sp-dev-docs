---
title: "SortableType simpleType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8bc6e087-8530-8a5e-144c-a7790e8d716a
description: "Last modified: March 09, 2015"
---

# SortableType simpleType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
   
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
   

