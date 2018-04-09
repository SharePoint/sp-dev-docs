---
title: "ArrayOfResultItemType complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2f15e573-c012-fbea-8fbb-1e5ae6c3a2b1
description: "Last modified: March 09, 2015"
---

# ArrayOfResultItemType complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ArrayOfResultItemType">
    <xs:sequence>
        <xs:element name="ResultItemType" type="tns:ResultItemType" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[ResultItemType](resultitemtype-element-arrayofresultitemtype-complextypesps15xsdsearchset2.md) <br/> |tns:ResultItemType  <br/> ||
   
### Attributes

None.
  

