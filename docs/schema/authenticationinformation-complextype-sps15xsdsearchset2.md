---
title: "AuthenticationInformation complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 54e7606c-7f3f-a2ec-89da-f59a1f3639ae
description: "Last modified: March 09, 2015"
---

# AuthenticationInformation complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
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
  

