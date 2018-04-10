---
title: "Schema map (SPS15XSDSearchSet1)"
manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 59b3b404-6c3f-a87c-8b07-9660ec4967f5
description: "This topic shows the schema definition for schema_Microsoft.Office.Server.Search.Administration.Query."
---

# Schema map (SPS15XSDSearchSet1)

**Applies to:** SharePoint Server 2013

This topic shows the schema definition for **schema_Microsoft.Office.Server.Search.Administration.Query**.

```XML
<xs:schema ser="http://schemas.microsoft.com/2003/10/Serialization/" tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration.Query" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration.Query" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:complexType name="ArrayOfSource">
        <xs:sequence>
            <xs:element name="Source" type="tns:Source" minOccurs="0" maxOccurs="unbounded"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="ArrayOfSource" type="tns:ArrayOfSource"></xs:element>
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
    <xs:element name="Source" type="tns:Source"></xs:element>
</xs:schema>

```


