---
title: "SsoAuthData complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 06/13/2022
description: Describes SsoAuthData complexType (SPS15XSDSearchSet2) and provides information on elements and attributes.
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: ebef7127-0d1a-1fcd-c95b-362390c259e9
---

# SsoAuthData complexType (SPS15XSDSearchSet2)

 
  
## Type information

|Information|Location|
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:AuthenticationData  <br/> |
   
## Definition

```XML
<xs:complexType name="SsoAuthData">
    <xs:complexContent>
        <xs:extension base="tns:AuthenticationData">
            <xs:sequence>
                <xs:element name="_SsoAppId" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="_nameValuePairs" type="q5:ArrayOfKeyValueOfstringstring" minOccurs="0"></xs:element>
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
|[_nameValuePairs](_namevaluepairs-element-ssoauthdata-complextypesps15xsdsearchset2.md) <br/> |q5:ArrayOfKeyValueOfstringstring  <br/> ||
|[_SsoAppId](_ssoappid-element-ssoauthdata-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
   
### Attributes

None.
  

