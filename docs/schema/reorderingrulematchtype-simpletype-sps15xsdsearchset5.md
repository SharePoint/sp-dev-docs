---
title: "ReorderingRuleMatchType simpleType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 32aa6821-50eb-7809-25de-29bf1d98146c
description: "Last modified: March 09, 2015"
---

# ReorderingRuleMatchType simpleType (SPS15XSDSearchSet5)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="ReorderingRuleMatchType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="ResultContainsKeyword" />
        <xs:enumeration value="TitleContainsKeyword" />
        <xs:enumeration value="TitleMatchesKeyword" />
        <xs:enumeration value="UrlStartsWith" />
        <xs:enumeration value="UrlExactlyMatches" />
        <xs:enumeration value="ContentTypeIs" />
        <xs:enumeration value="FileExtensionMatches" />
        <xs:enumeration value="ResultHasTag" />
        <xs:enumeration value="ManualCondition" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|ResultContainsKeyword  <br/> ||
|TitleContainsKeyword  <br/> ||
|TitleMatchesKeyword  <br/> ||
|UrlStartsWith  <br/> ||
|UrlExactlyMatches  <br/> ||
|ContentTypeIs  <br/> ||
|FileExtensionMatches  <br/> ||
|ResultHasTag  <br/> ||
|ManualCondition  <br/> ||
   

