---
title: "QueryTransformParentType simpleType (SPS15XSDSearchSet4)"
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 59305aac-635b-bcab-17d4-5ea82b108432
description: "Last modified: March 09, 2015"
---

# QueryTransformParentType simpleType (SPS15XSDSearchSet4)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
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
   

