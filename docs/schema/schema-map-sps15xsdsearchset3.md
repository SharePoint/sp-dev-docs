---
title: "Schema map (SPS15XSDSearchSet3)"
manager: arnek
ms.date: 11/16/2014
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0b1ecfc3-a648-be87-6198-148a3946ebdd
description: Shows the schema definition for schema_Microsoft.Office.Server.Search.Portability.
---

# Schema map (SPS15XSDSearchSet3)

**Applies to:** SharePoint Server 2013

This topic shows the schema definition for **schema_Microsoft.Office.Server.Search.Portability**.
  
```XML
<xs:schema ser="http://schemas.microsoft.com/2003/10/Serialization/" tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:complexType name="SearchConfigurationSettings">
        <xs:sequence>
            <xs:element name="SearchQueryConfigurationSettings" type="tns:ArrayOfSearchQueryConfigurationSettings" minOccurs="0"></xs:element>
            <xs:element name="SearchRankingModelConfigurationSettings" type="tns:SearchRankingModelConfigurationSettings" minOccurs="0"></xs:element>
            <xs:element name="SearchSchemaConfigurationSettings" type="tns:SearchSchemaConfigurationSettings" minOccurs="0"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="SearchConfigurationSettings" type="tns:SearchConfigurationSettings"></xs:element>
    <xs:complexType name="ArrayOfSearchQueryConfigurationSettings">
        <xs:sequence>
            <xs:element name="SearchQueryConfigurationSettings" type="tns:SearchQueryConfigurationSettings" minOccurs="0" maxOccurs="unbounded"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="ArrayOfSearchQueryConfigurationSettings" type="tns:ArrayOfSearchQueryConfigurationSettings"></xs:element>
    <xs:complexType name="SearchQueryConfigurationSettings">
        <xs:sequence>
            <xs:element name="BestBets" type="q1:ArrayOfBestBet" minOccurs="0"></xs:element>
            <xs:element name="DefaultSourceId" type="ser:guid" minOccurs="0"></xs:element>
            <xs:element name="DefaultSourceIdSet" type="xs:boolean" minOccurs="0"></xs:element>
            <xs:element name="DeployToParent" type="xs:boolean" minOccurs="0"></xs:element>
            <xs:element name="DisableInheritanceOnImport" type="xs:boolean" minOccurs="0"></xs:element>
            <xs:element name="QueryRuleGroups" type="q2:ArrayOfQueryRuleGroup" minOccurs="0"></xs:element>
            <xs:element name="QueryRules" type="q3:ArrayOfQueryRule" minOccurs="0"></xs:element>
            <xs:element name="ResultTypes" type="q4:ArrayOfResultItemType" minOccurs="0"></xs:element>
            <xs:element name="Sources" type="q5:ArrayOfSource" minOccurs="0"></xs:element>
            <xs:element name="UserSegments" type="q6:ArrayOfUserSegment" minOccurs="0"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="SearchQueryConfigurationSettings" type="tns:SearchQueryConfigurationSettings"></xs:element>
    <xs:complexType name="SearchRankingModelConfigurationSettings">
        <xs:sequence>
            <xs:element name="RankingModels" type="q7:ArrayOfstring" minOccurs="0"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="SearchRankingModelConfigurationSettings" type="tns:SearchRankingModelConfigurationSettings"></xs:element>
    <xs:complexType name="SearchSchemaConfigurationSettings">
        <xs:sequence>
            <xs:element name="Aliases" type="q8:AliasInfoCollection" minOccurs="0"></xs:element>
            <xs:element name="CategoriesAndCrawledProperties" type="q9:ArrayOfKeyValueOfguidCrawledPropertyInfoCollectionaSYUqUE_P" minOccurs="0"></xs:element>
            <xs:element name="CrawledProperties" type="q10:CrawledPropertyInfoCollection" minOccurs="0"></xs:element>
            <xs:element name="ManagedProperties" type="q11:ManagedPropertyInfoCollection" minOccurs="0"></xs:element>
            <xs:element name="Mappings" type="q12:MappingInfoCollection" minOccurs="0"></xs:element>
            <xs:element name="Overrides" type="q13:OverrideInfoCollection" minOccurs="0"></xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:element name="SearchSchemaConfigurationSettings" type="tns:SearchSchemaConfigurationSettings"></xs:element>
</xs:schema>

```


