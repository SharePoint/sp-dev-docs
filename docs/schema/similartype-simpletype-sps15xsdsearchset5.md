---
title: "SimilarType simpleType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2ca0d24e-1c22-3115-a8a8-4bb3cde0f2a1
description: "Last modified: March 09, 2015"
---

# SimilarType simpleType (SPS15XSDSearchSet5)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint Server 2013 * 
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
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
   

