---
title: "SortDirection simpleType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f2af8113-f7b9-9705-7434-285c87ccf072
description: "Last modified: March 09, 2015"
---

# SortDirection simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
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
   

