---
title: "MappingInfo complexType (SPS15XSDSearchSet2)"
description: "Describes the definition, element, and attribute information for the MappingInfo complexType (SPS15XSDSearchSet2)."
manager: arnek
ms.date: 06/13/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 9f76cdfb-9587-98cc-768f-bc22433c088f
---

# MappingInfo complexType (SPS15XSDSearchSet2)



## Type information

|Information|Location|
|:-----|:-----|
|**Namespace**|http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration|
|**Schema file**|schema_Microsoft.Office.Server.Search.Administration.xsd|
|**Extension base**|tns:BaseInfo|

## Definition

```XML
<xs:complexType name="MappingInfo">
    <xs:complexContent>
        <xs:extension base="tns:BaseInfo">
            <xs:sequence>
                <xs:element name="CrawledPropertyName" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="CrawledPropset" type="ser:guid" minOccurs="0"></xs:element>
                <xs:element name="ManagedPid" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="MappingOrder" type="xs:int" minOccurs="0"></xs:element>
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
|[CrawledPropertyName](crawledpropertyname-element-mappinginfo-complextypesps15xsdsearchset2.md)|xs:string||
|[CrawledPropset](crawledpropset-element-mappinginfo-complextypesps15xsdsearchset2.md)|ser:guid||
|[ManagedPid](managedpid-element-mappinginfo-complextypesps15xsdsearchset2.md)|xs:int||
|[MappingOrder](mappingorder-element-mappinginfo-complextypesps15xsdsearchset2.md)|xs:int||
|[SchemaId](schemaid-element-mappinginfo-complextypesps15xsdsearchset2.md)|xs:int||

### Attributes

None.
