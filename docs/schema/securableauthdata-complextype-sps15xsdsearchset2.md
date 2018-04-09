---
title: "SecurableAuthData complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1bfe838d-25de-6977-64d2-75c3b7dffd08
description: "Last modified: March 09, 2015"
---

# SecurableAuthData complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:AuthenticationData  <br/> |
   
## Definition

```XML
<xs:complexType name="SecurableAuthData">
    <xs:complexContent>
        <xs:extension base="tns:AuthenticationData">
            <xs:sequence>
                <xs:element name="_NameValuePairs" type="q7:ArrayOfKeyValueOfstringstring" minOccurs="0"></xs:element>
                <xs:element name="_SecurableNameValuePairs" type="q8:ArrayOfKeyValueOfstringSecureStringX9wx7DhE" minOccurs="0"></xs:element>
                <xs:element name="SerializableSecurableNameValuePairs" type="q9:ArrayOfKeyValueOfstringstring" minOccurs="0"></xs:element>
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
|[_NameValuePairs](_namevaluepairs-element-securableauthdata-complextypesps15xsdsearchset2.md) <br/> |q7:ArrayOfKeyValueOfstringstring  <br/> ||
|[_SecurableNameValuePairs](_securablenamevaluepairs-element-securableauthdata-complextypesps15xsdsearchset2.md) <br/> |q8:ArrayOfKeyValueOfstringSecureStringX9wx7DhE  <br/> ||
|[SerializableSecurableNameValuePairs](serializablesecurablenamevaluepairs-element-securableauthdata-complextypesps15xs.md) <br/> |q9:ArrayOfKeyValueOfstringstring  <br/> ||
   
### Attributes

None.
  

