---
title: "AccountAuthCredentials complexType (SPS15XSDSearchSet2)"
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fb7d56a6-5985-2379-7183-6bee6fcd3f90
description: "Last modified: March 09, 2015"
---

# AccountAuthCredentials complexType (SPS15XSDSearchSet2)

## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:AuthenticationData  <br/> |
   
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
|[_UserName](_username-element-accountauthcredentials-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[Password](password-element-accountauthcredentials-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
   
### Attributes

None.
  

