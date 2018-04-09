---
title: "AlertChangeType simpleType (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3f7286b9-dab0-3629-5734-308ba2b430cc
description: "Last modified: March 09, 2015"
---

# AlertChangeType simpleType (SPS15XSDSearchSet5)

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
<xs:simpleType name="AlertChangeType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Discovered" />
        <xs:enumeration value="Modified" />
        <xs:enumeration value="DiscoveredOrModified" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Discovered  <br/> |1  <br/> |
|Modified  <br/> |2  <br/> |
|DiscoveredOrModified  <br/> |3  <br/> |
   

