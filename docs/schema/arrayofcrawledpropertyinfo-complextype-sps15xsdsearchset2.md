---
title: "ArrayOfCrawledPropertyInfo complexType (SPS15XSDSearchSet2)"
description: Discusses the definition, elements and attributes for ArrayOfCrawledPropertyInfo complexType (SPS15XSDSearchSet2).
manager: arnek
ms.date: 06/14/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 4bfce85b-e7ad-a3db-b1ec-3af5ae7ef606
---

# ArrayOfCrawledPropertyInfo complexType (SPS15XSDSearchSet2)

## Type information

|Information|Location|
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
|[CrawledPropertyInfo](crawledpropertyinfo-element-arrayofcrawledpropertyinfo-complextypesps15xsdsearch.md)  |tns:CrawledPropertyInfo   ||

### Attributes

None.
