---
title: "Schema map (SPS15XSDSearchSet4)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a992fb73-66c2-44d4-9df8-45fcb0cc5970
description: "This topic shows the schema definition for schema_Microsoft.Office.Server.Search.Query.Rules."
---

# Schema map (SPS15XSDSearchSet4)

This topic shows the schema definition for **schema_Microsoft.Office.Server.Search.Query.Rules**.
  
 **Last modified:** January 13, 2014 
  
 * **Applies to:** SharePoint Server 2013 * 
  
```XML
<xs:schema tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:simpleType name="LicenseType"></xs:simpleType>
    <xs:element name="LicenseType" type="tns:LicenseType"></xs:element>
    <xs:simpleType name="QueryActionEnableOnClickThroughOptions"></xs:simpleType>
    <xs:element name="QueryActionEnableOnClickThroughOptions" type="tns:QueryActionEnableOnClickThroughOptions"></xs:element>
    <xs:simpleType name="QueryTransformParentType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Action" />
            <xs:enumeration value="UserDefined" />
            <xs:enumeration value="Source" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="QueryTransformParentType" type="tns:QueryTransformParentType"></xs:element>
    <xs:simpleType name="MatchingOptions"></xs:simpleType>
    <xs:element name="MatchingOptions" type="tns:MatchingOptions"></xs:element>
    <xs:simpleType name="BoundVariableOrigin">
        <xs:restriction base="xs:string">
            <xs:enumeration value="FullQuery" />
            <xs:enumeration value="MatchedTerms" />
            <xs:enumeration value="Remainder" />
            <xs:enumeration value="CaptureGroup" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="BoundVariableOrigin" type="tns:BoundVariableOrigin"></xs:element>
    <xs:simpleType name="GroupProcessingDirective">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Stop" />
            <xs:enumeration value="Continue" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="GroupProcessingDirective" type="tns:GroupProcessingDirective"></xs:element>
</xs:schema>

```


