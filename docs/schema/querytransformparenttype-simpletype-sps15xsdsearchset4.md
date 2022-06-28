---
title: "QueryTransformParentType simpleType (SPS15XSDSearchSet4)"
manager: arnek
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 59305aac-635b-bcab-17d4-5ea82b108432
description: "Describes the QueryTransformParentType simpleType (SPS15XSDSearchSet4). Applies to SharePoint Server 2013."
---

# QueryTransformParentType simpleType (SPS15XSDSearchSet4)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|Info type|Value|
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.Rules.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="QueryTransformParentType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Action" />
        <xs:enumeration value="UserDefined" />
        <xs:enumeration value="Source" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Action  <br/> ||
|UserDefined  <br/> ||
|Source  <br/> ||
   

