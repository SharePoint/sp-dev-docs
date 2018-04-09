---
title: "PropertyRuleOperator complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c5f383ac-7e8e-a38e-4ccf-f509965f4789
description: "Last modified: March 09, 2015"
---

# PropertyRuleOperator complexType (SPS15XSDSearchSet2)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
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
  

