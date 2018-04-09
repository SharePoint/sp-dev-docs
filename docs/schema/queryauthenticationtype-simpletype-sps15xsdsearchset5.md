---
title: "QueryAuthenticationType simpleType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9a7a4dd1-a39e-1873-2b39-7570365739c5
description: "Last modified: March 09, 2015"
---

# QueryAuthenticationType simpleType (SPS15XSDSearchSet5)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint Server 2013 * 
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
   
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
   

