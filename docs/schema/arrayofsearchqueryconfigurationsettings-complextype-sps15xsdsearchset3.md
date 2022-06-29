---
title: "ArrayOfSearchQueryConfigurationSettings complexType (SPS15XSDSearchSet3)"
description: Discusses the definition, elements and attributes for ArrayOfSearchQueryConfigurationSettings complexType (SPS15XSDSearchSet3).
manager: arnek
ms.date: 06/14/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 02d78e54-b260-d2ca-757c-6a3ebb7ae120
---

# ArrayOfSearchQueryConfigurationSettings complexType (SPS15XSDSearchSet3)

## Type information

|Information|Location|
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Portability.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |

## Definition

```XML
<xs:complexType name="ArrayOfSearchQueryConfigurationSettings">
    <xs:sequence>
        <xs:element name="SearchQueryConfigurationSettings" type="tns:SearchQueryConfigurationSettings" minOccurs="0" maxOccurs="unbounded"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[SearchQueryConfigurationSettings](searchqueryconfigurationsettings-element-arrayofsearchqueryconfigurationsettings.md) <br/> |tns:SearchQueryConfigurationSettings  <br/> ||

### Attributes

None.
