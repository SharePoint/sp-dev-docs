---
title: "GroupProcessingDirective simpleType (SPS15XSDSearchSet4)"


manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a54abbfa-db7a-1590-ca27-2f0241899fe9
description: "Last modified: March 09, 2015"
---

# GroupProcessingDirective simpleType (SPS15XSDSearchSet4)

 
  
 **Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.Rules.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="GroupProcessingDirective">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Stop" />
        <xs:enumeration value="Continue" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Stop  <br/> ||
|Continue  <br/> ||
   

