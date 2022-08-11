---
title: "AliasInfo complexType (SPS15XSDSearchSet2)"
description: Discusses the definition, elements and attributes for AliasInfo complexType (SPS15XSDSearchSet2).
manager: arnek
ms.date: 06/14/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 96483d28-b4c0-8241-9773-c74963047fc9
---

# AliasInfo complexType (SPS15XSDSearchSet2)

## Type information

|Information|Location|
|:-----|:-----|
|**Namespace**  |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration   |
|**Schema file**  |schema_Microsoft.Office.Server.Search.Administration.xsd   |
|**Extension base**  |tns:BaseInfo   |

## Definition

```XML
<xs:complexType name="AliasInfo">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfo">
            <xs:sequence>
                <xs:element name="ManagedPid" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="SchemaId" type="xs:int" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:extension>
    </xs:complexContent>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[ManagedPid](managedpid-element-aliasinfo-complextypesps15xsdsearchset2.md)  |xs:int   ||
|[SchemaId](schemaid-element-aliasinfo-complextypesps15xsdsearchset2.md)  |xs:int   ||

### Attributes

None.
