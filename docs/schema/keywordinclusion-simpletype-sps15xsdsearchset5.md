---
title: "KeywordInclusion simpleType (SPS15XSDSearchSet5)"
description: Describes the KeywordInclusion simpleType (SPS15XSDSearchSet5) and provides the type information, a definition, and enumeration values in SharePoint.
manager: arnek
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 8f29b9aa-9de2-ea26-7bf9-e3287b37c0ab
---

# KeywordInclusion simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

| Resource | File |
|:-----|:-----|
| **Base type** |xs:string |
| **Namespace** |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  |
| **Schema file** |schema_Microsoft.Office.Server.Search.Query.xsd |
   
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
   

