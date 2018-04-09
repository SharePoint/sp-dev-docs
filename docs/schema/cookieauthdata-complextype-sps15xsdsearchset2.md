---
title: "CookieAuthData complexType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 94086319-9184-17d6-2db7-c5a462e0a792
description: "Last modified: March 09, 2015"
---

# CookieAuthData complexType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
|**Extension base** <br/> |tns:AuthenticationData  <br/> |
   
## Definition

```XML
<xs:complexType name="CookieAuthData">
    <xs:complexContent>
        <xs:extension base="tns:AuthenticationData">
            <xs:sequence>
                <xs:element name="_Cookies" type="q6:CookieCollection" minOccurs="0"></xs:element>
                <xs:element name="_ErrorPageUrl" type="xs:string" minOccurs="0"></xs:element>
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
|[_Cookies](_cookies-element-cookieauthdata-complextypesps15xsdsearchset2.md) <br/> |q6:CookieCollection  <br/> ||
|[_ErrorPageUrl](_errorpageurl-element-cookieauthdata-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
   
### Attributes

None.
  

