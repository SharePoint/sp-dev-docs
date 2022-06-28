---
title: "SearchConfigurationSettings complexType (SPS15XSDSearchSet3)"
manager: arnek
ms.date: 06/14/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 7d59b1f0-7b6a-e9fe-ba69-b4d3cc55469b
description: Learn about SearchConfigurationSettings complexType (SPS15XSDSearchSet3).
---

# SearchConfigurationSettings complexType (SPS15XSDSearchSet3)



## Type information

|Information|Location|
|:-----|:-----|
|**Namespace** |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability  |
|**Schema file** |schema_Microsoft.Office.Server.Search.Portability.xsd  |
|**Extension base** |None |

## Definition

```XML
<xs:complexType name="SearchConfigurationSettings">
    <xs:sequence>
        <xs:element name="SearchQueryConfigurationSettings" type="tns:ArrayOfSearchQueryConfigurationSettings" minOccurs="0"></xs:element>
        <xs:element name="SearchRankingModelConfigurationSettings" type="tns:SearchRankingModelConfigurationSettings" minOccurs="0"></xs:element>
        <xs:element name="SearchSchemaConfigurationSettings" type="tns:SearchSchemaConfigurationSettings" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[SearchQueryConfigurationSettings](searchqueryconfigurationsettings-element-searchconfigurationsettings-complextype.md) <br/> |tns:ArrayOfSearchQueryConfigurationSettings  <br/> ||
|[SearchRankingModelConfigurationSettings](searchrankingmodelconfigurationsettings-element-searchconfigurationsettings-comp.md) <br/> |tns:SearchRankingModelConfigurationSettings  <br/> ||
|[SearchSchemaConfigurationSettings](searchschemaconfigurationsettings-element-searchconfigurationsettings-complextyp.md) <br/> |tns:SearchSchemaConfigurationSettings  <br/> ||

### Attributes

None.
