---
title: "FormsAuthCredentials complexType (SPS15XSDSearchSet2)"
description: "Describes the definition, type, element, and attribute information for FormsAuthCredentials complexType (SPS15XSDSearchSet2)."
manager: arnek
ms.date: 06/13/2022
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 5059c9ce-bd07-88e6-0227-bfc6e6759ef7
---

# FormsAuthCredentials complexType (SPS15XSDSearchSet2)

 
  
## Type information

| Information | Location |
|-------------|----------|
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| **Schema File** | schema_Microsoft.Office.Server.Search.Administration.xsd |
| **Extension Base** | tns:SecurableAuthData |
   
## Definition

```XML
<xs:complexType name="FormsAuthCredentials">
    <xs:complexContent>
        <xs:extension base="tns:SecurableAuthData">
            <xs:sequence>
                <xs:element name="_AuthSchemeName" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="_AuthSubmissionMethod" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="_AuthSubmissionPath" type="xs:string" minOccurs="0"></xs:element>
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
|[_AuthSchemeName](_authschemename-element-formsauthcredentials-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[_AuthSubmissionMethod](_authsubmissionmethod-element-formsauthcredentials-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[_AuthSubmissionPath](_authsubmissionpath-element-formsauthcredentials-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
|[_ErrorPageUrl](_errorpageurl-element-formsauthcredentials-complextypesps15xsdsearchset2.md) <br/> |xs:string  <br/> ||
   
### Attributes

None.
  

