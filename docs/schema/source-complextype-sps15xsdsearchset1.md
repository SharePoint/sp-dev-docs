---
title: "Source complexType (SPS15XSDSearchSet1)"
manager: arnek
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fce44c4e-eaab-e94b-bff7-c08795fb5cc1
description: "Last modified: March 09, 2015"
---

# Source complexType (SPS15XSDSearchSet1)

**Applies to:** SharePoint Server 2013
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration.Query  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.Query.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
<xs:complexType name="Source">
    <xs:sequence>
        <xs:element name="Active" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="AuthInfo" type="q1:AuthenticationInformation" minOccurs="0"></xs:element>
        <xs:element name="BuiltIn" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="ConnectionTimeout" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="ConnectionUrlTemplate" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="CreatedDate" type="xs:dateTime" minOccurs="0"></xs:element>
        <xs:element name="Description" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="HasPermissionToReadAuthInfo" type="xs:boolean" minOccurs="0"></xs:element>
        <xs:element name="Id" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="IndexOffset" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="LastModifiedDate" type="xs:dateTime" minOccurs="0"></xs:element>
        <xs:element name="MaximumResponseLength" type="xs:int" minOccurs="0"></xs:element>
        <xs:element name="Name" type="xs:string" minOccurs="0"></xs:element>
        <xs:element name="Owner" type="q2:SearchObjectOwner" minOccurs="0"></xs:element>
        <xs:element name="ProviderId" type="ser:guid" minOccurs="0"></xs:element>
        <xs:element name="QueryTransform" type="q3:QueryTransform" minOccurs="0"></xs:element>
    </xs:sequence>
</xs:complexType>

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[Active](active-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:boolean  <br/> ||
|[AuthInfo](authinfo-element-source-complextypesps15xsdsearchset1.md) <br/> |q1:AuthenticationInformation  <br/> ||
|[BuiltIn](builtin-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:boolean  <br/> ||
|[ConnectionTimeout](connectiontimeout-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:int  <br/> ||
|[ConnectionUrlTemplate](connectionurltemplate-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:string  <br/> ||
|[CreatedDate](createddate-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:dateTime  <br/> ||
|[Description](description-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:string  <br/> ||
|[HasPermissionToReadAuthInfo](haspermissiontoreadauthinfo-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:boolean  <br/> ||
|[Id](id-element-source-complextypesps15xsdsearchset1.md) <br/> |ser:guid  <br/> ||
|[IndexOffset](indexoffset-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:int  <br/> ||
|[LastModifiedDate](lastmodifieddate-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:dateTime  <br/> ||
|[MaximumResponseLength](maximumresponselength-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:int  <br/> ||
|[Name](name-element-source-complextypesps15xsdsearchset1.md) <br/> |xs:string  <br/> ||
|[Owner](owner-element-source-complextypesps15xsdsearchset1.md) <br/> |q2:SearchObjectOwner  <br/> ||
|[ProviderId](providerid-element-source-complextypesps15xsdsearchset1.md) <br/> |ser:guid  <br/> ||
|[QueryTransform](querytransform-element-source-complextypesps15xsdsearchset1.md) <br/> |q3:QueryTransform  <br/> ||
   
### Attributes

None.
  

