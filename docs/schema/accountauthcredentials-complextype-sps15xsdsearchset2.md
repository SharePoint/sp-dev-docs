---
title: "AccountAuthCredentials complexType (SPS15XSDSearchSet2)"
description: Discusses the definition, elements and attributes for AccountAuthCredentials complexType (SPS15XSDSearchSet2).
manager: arnek
ms.date: 06/13/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: fb7d56a6-5985-2379-7183-6bee6fcd3f90
---

# AccountAuthCredentials complexType (SPS15XSDSearchSet2)

## Type information

|Information|Location|
|:-----|:-----|
|**Namespace**  |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration   |
|**Schema file**  |schema_Microsoft.Office.Server.Search.Administration.xsd   |
|**Extension base**  |tns:AuthenticationData   |

## Definition

```XML
<xs:complexType name="AccountAuthCredentials">
    <xs:complexContent>
        <xs:extension base="tns:AuthenticationData">
            <xs:sequence>
                <xs:element name="Password" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="_UserName" type="xs:string" minOccurs="0"></xs:element>
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
|[_UserName](_username-element-accountauthcredentials-complextypesps15xsdsearchset2.md)  |xs:string   ||
|[Password](password-element-accountauthcredentials-complextypesps15xsdsearchset2.md)  |xs:string   ||

### Attributes

None.
