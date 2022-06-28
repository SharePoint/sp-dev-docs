---
title: "ReorderingRule complexType (SPS15XSDSearchSet5)"
manager: arnek
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 57993a33-3551-dded-7e63-1a412e3e70ae
description: "Describes the ReorderingRule complexType (SPS15XSDSearchSet5). Applies to SharePoint Server 2013."
---

# ReorderingRule complexType (SPS15XSDSearchSet5)



 **Applies to:** SharePoint Server 2013

## Type information

|Information|Value|
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Query.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |

## Definition

```XML
<xs:complexType name="ReorderingRule">
    <xs:sequence>
        <xs:element name="Boost" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="MatchType" type="tns:ReorderingRuleMatchType" minOccurs="0"></xs:element>
        <xs:element name="MatchValue" type="xs:string" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[Boost](boost-element-reorderingrule-complextypesps15xsdsearchset5.md) <br/> |xs:int  <br/> ||
|[MatchType](matchtype-element-reorderingrule-complextypesps15xsdsearchset5.md) <br/> |tns:ReorderingRuleMatchType  <br/> ||
|[MatchValue](matchvalue-element-reorderingrule-complextypesps15xsdsearchset5.md) <br/> |xs:string  <br/> ||

### Attributes

None.
