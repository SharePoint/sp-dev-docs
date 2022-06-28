---
title: "AuthenticationInformation complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 06/09/2022
ms.audience: ITPro
ms.topic: article
ms.localizationpriority: medium
ms.assetid: 54e7606c-7f3f-a2ec-89da-f59a1f3639ae
description: AuthenticationInformation complexType (SPS15XSDSearchSet2) is an XML type.
---

# AuthenticationInformation complexType (SPS15XSDSearchSet2)

## Type information

|Information|Location|
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |

## Definition

```XML
<xs:complexType name="AuthenticationInformation">
    <xs:sequence>
        <xs:element name="AuthenticationType" type="tns:FederationAuthType" minOccurs="0"></xs:element>
        <xs:element name="Data" type="tns:AuthenticationData" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[AuthenticationType](authenticationtype-element-authenticationinformation-complextypesps15xsdsearchse.md) <br/> |tns:FederationAuthType  <br/> ||
|[Data](data-element-authenticationinformation-complextypesps15xsdsearchset2.md) <br/> |tns:AuthenticationData  <br/> ||

### Attributes

None.
