---
title: "KeywordInclusion simpleType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8f29b9aa-9de2-ea26-7bf9-e3287b37c0ab
description: "Last modified: March 09, 2015"
---

# KeywordInclusion simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="KeywordInclusion">
    <xs:restriction base="xs:string">
        <xs:enumeration value="AllKeywords" />
        <xs:enumeration value="AnyKeyword" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|AllKeywords  <br/> ||
|AnyKeyword  <br/> ||
   

