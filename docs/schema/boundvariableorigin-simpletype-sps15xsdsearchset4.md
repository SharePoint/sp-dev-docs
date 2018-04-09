---
title: "BoundVariableOrigin simpleType (SPS15XSDSearchSet4)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ef2b82d9-950d-08ed-9ff9-4047a1759b6a
description: "Last modified: March 09, 2015"
---

# BoundVariableOrigin simpleType (SPS15XSDSearchSet4)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
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
   

