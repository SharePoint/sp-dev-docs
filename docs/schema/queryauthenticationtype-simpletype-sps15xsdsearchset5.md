---
title: "QueryAuthenticationType simpleType (SPS15XSDSearchSet5)"
description: "Describes the definition, type information, and enumeration values for QueryAuthenticationType simpleType (SPS15XSDSearchSet5)."
manager: arnek
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 9a7a4dd1-a39e-1873-2b39-7570365739c5
---

# QueryAuthenticationType simpleType (SPS15XSDSearchSet5)



 **Applies to:** SharePoint Server 2013

## Type information

| Information | Location |
|:-----|:-----|
|**Base type**|xs:string|
|**Namespace**|http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query|
|**Schema file**|schema_Microsoft.Office.Server.Search.Query.xsd|

## Definition

```XML
<xs:simpleType name="QueryAuthenticationType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="NtAuthenticatedQuery" />
        <xs:enumeration value="PluggableAuthenticatedQuery" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|NtAuthenticatedQuery  <br/> ||
|PluggableAuthenticatedQuery  <br/> ||
