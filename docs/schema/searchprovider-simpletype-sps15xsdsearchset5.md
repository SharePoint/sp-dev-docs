---
title: "SearchProvider simpleType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 9394f987-331f-6817-560e-6cb6118dd564
description: Learn more about SearchProvider simpleType (SPS15XSDSearchSet5).
---

# SearchProvider simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|Information|Location|
|:-----|:-----|
|**Base type**  |xs:string  |
|**Namespace**  |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  |
|**Schema file** |schema_Microsoft.Office.Server.Search.Query.xsd   |
   
## Definition

```XML
<xs:simpleType name="SearchProvider">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Default" />
        <xs:enumeration value="SharepointSearch" />
        <xs:enumeration value="FASTSearch" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Default  <br/> ||
|SharepointSearch  <br/> ||
|FASTSearch  <br/> ||
   

