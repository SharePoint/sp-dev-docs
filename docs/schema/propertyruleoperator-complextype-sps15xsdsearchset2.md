---
title: "PropertyRuleOperator complexType (SPS15XSDSearchSet2)"
description: "Describes the definition, type, element, and attribute information for the PropertyRuleOperator complexType (SPS15XSDSearchSet2)."
manager: arnek
ms.date: 06/10/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: c5f383ac-7e8e-a38e-4ccf-f509965f4789
---

# PropertyRuleOperator complexType (SPS15XSDSearchSet2)



## Type information

|Information|Location|
|:-----|:-----|
|**Namespace**|http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration|
|**Schema file**|schema_Microsoft.Office.Server.Search.Administration.xsd|
|**Extension base**|None|

## Definition

```XML
<xs:complexType name="PropertyRuleOperator">
    <xs:sequence>
        <xs:element name="DescriptionLSID" type="q3:LocStringId" minOccurs="0"></xs:element>
        <xs:element name="IsFunction" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="IsQuoted" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="JoinedByOr" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="Name" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="NameLSID" type="q4:LocStringId" minOccurs="0"></xs:element>
        <xs:element name="Representation" type="xs:string" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[DescriptionLSID](descriptionlsid-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |q3:LocStringId  <br/> ||
|[IsFunction](isfunction-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[IsQuoted](isquoted-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[JoinedByOr](joinedbyor-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |xs:boolean  <br/> ||
|[Name](name-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[NameLSID](namelsid-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |q4:LocStringId  <br/> ||
|[Representation](representation-element-propertyruleoperator-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||

### Attributes

None.
