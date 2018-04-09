---
title: "SpellcheckMode simpleType (SPS15XSDSearchSet5)"


manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9184db70-e548-9918-03af-30e47585dc1e
description: "Last modified: March 09, 2015"
---

# SpellcheckMode simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="SpellcheckMode">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Off" />
        <xs:enumeration value="Suggest" />
        <xs:enumeration value="On" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Off  <br/> |1  <br/> |
|Suggest  <br/> |2  <br/> |
|On  <br/> |4  <br/> |
   

