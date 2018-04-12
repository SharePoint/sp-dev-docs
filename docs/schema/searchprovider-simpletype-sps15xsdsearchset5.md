---
title: "SearchProvider simpleType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9394f987-331f-6817-560e-6cb6118dd564
description: "Last modified: March 09, 2015"
---

# SearchProvider simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
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
   

