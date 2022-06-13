---
title: "SpellcheckMode simpleType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 06/13/2022
description: Describes SpellcheckMode simpleType (SPS15XSDSearchSet5) and includes information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 9184db70-e548-9918-03af-30e47585dc1e
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
   

