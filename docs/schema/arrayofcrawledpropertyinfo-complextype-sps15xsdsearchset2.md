---
title: "ArrayOfCrawledPropertyInfo complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4bfce85b-e7ad-a3db-b1ec-3af5ae7ef606
description: "Last modified: March 09, 2015"
---

# ArrayOfCrawledPropertyInfo complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="ArrayOfCrawledPropertyInfo">
    <xs:sequence>
        <xs:element name="CrawledPropertyInfo" type="tns:CrawledPropertyInfo" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[CrawledPropertyInfo](crawledpropertyinfo-element-arrayofcrawledpropertyinfo-complextypesps15xsdsearch.md) <br/> |tns:CrawledPropertyInfo  <br/> ||
   
### Attributes

None.
  

