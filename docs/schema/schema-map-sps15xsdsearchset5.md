---
title: "Schema map (SPS15XSDSearchSet5)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0e7abdce-c9fd-ab9a-e629-7e024994db1b
description: "This topic shows the schema definition for schema_Microsoft.Office.Server.Search.Query."
---

# Schema map (SPS15XSDSearchSet5)

This topic shows the schema definition for **schema_Microsoft.Office.Server.Search.Query**.
  
 **Last modified:** January 13, 2014 
  
 * **Applies to:** SharePoint Server 2013 * 
  
```XML
<xs:schema tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:simpleType name="QueryAuthenticationType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="NtAuthenticatedQuery" />
            <xs:enumeration value="PluggableAuthenticatedQuery" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="QueryAuthenticationType" type="tns:QueryAuthenticationType"></xs:element>
    <xs:simpleType name="KeywordInclusion">
        <xs:restriction base="xs:string">
            <xs:enumeration value="AllKeywords" />
            <xs:enumeration value="AnyKeyword" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="KeywordInclusion" type="tns:KeywordInclusion"></xs:element>
    <xs:simpleType name="AlertChangeType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Discovered" />
            <xs:enumeration value="Modified" />
            <xs:enumeration value="DiscoveredOrModified" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="AlertChangeType" type="tns:AlertChangeType"></xs:element>
    <xs:simpleType name="ResubmitFlag"></xs:simpleType>
    <xs:element name="ResubmitFlag" type="tns:ResubmitFlag"></xs:element>
    <xs:simpleType name="SimilarType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="None" />
            <xs:enumeration value="Find" />
            <xs:enumeration value="Refine" />
            <xs:enumeration value="Exclude" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="SimilarType" type="tns:SimilarType"></xs:element>
    <xs:simpleType name="SpellcheckMode">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Off" />
            <xs:enumeration value="Suggest" />
            <xs:enumeration value="On" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="SpellcheckMode" type="tns:SpellcheckMode"></xs:element>
    <xs:simpleType name="ResultType"></xs:simpleType>
    <xs:element name="ResultType" type="tns:ResultType"></xs:element>
    <xs:simpleType name="QueryHint"></xs:simpleType>
    <xs:element name="QueryHint" type="tns:QueryHint"></xs:element>
    <xs:simpleType name="SearchProvider">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Default" />
            <xs:enumeration value="SharepointSearch" />
            <xs:enumeration value="FASTSearch" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="SearchProvider" type="tns:SearchProvider"></xs:element>
    <xs:simpleType name="SortDirection">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Ascending" />
            <xs:enumeration value="Descending" />
            <xs:enumeration value="FQLFormula" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="SortDirection" type="tns:SortDirection"></xs:element>
    <xs:complexType name="ArrayOfReorderingRule">
        <xs:sequence>
            <xs:element name="ReorderingRule" type="tns:ReorderingRule" minOccurs="0" maxOccurs="unbounded"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="ArrayOfReorderingRule" type="tns:ArrayOfReorderingRule"></xs:element>
    <xs:complexType name="ReorderingRule">
        <xs:sequence>
            <xs:element name="Boost" type="xs:int" minOccurs="0"></xs:element>
            <xs:element name="MatchType" type="tns:ReorderingRuleMatchType" minOccurs="0"></xs:element>
            <xs:element name="MatchValue" type="xs:string" minOccurs="0"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="ReorderingRule" type="tns:ReorderingRule"></xs:element>
    <xs:simpleType name="ReorderingRuleMatchType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="ResultContainsKeyword" />
            <xs:enumeration value="TitleContainsKeyword" />
            <xs:enumeration value="TitleMatchesKeyword" />
            <xs:enumeration value="UrlStartsWith" />
            <xs:enumeration value="UrlExactlyMatches" />
            <xs:enumeration value="ContentTypeIs" />
            <xs:enumeration value="FileExtensionMatches" />
            <xs:enumeration value="ResultHasTag" />
            <xs:enumeration value="ManualCondition" />
        </xs:restriction>
    </xs:simpleType>
    <xs:element name="ReorderingRuleMatchType" type="tns:ReorderingRuleMatchType"></xs:element>
</xs:schema>

```


