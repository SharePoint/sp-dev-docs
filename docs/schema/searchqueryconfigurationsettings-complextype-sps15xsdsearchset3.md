---
title: "SearchQueryConfigurationSettings complexType (SPS15XSDSearchSet3)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 66da239e-98dd-a812-4041-ffc248561236
description: "Last modified: March 09, 2015"
---

# SearchQueryConfigurationSettings complexType (SPS15XSDSearchSet3)

 
  
## Type information

|||
|:-----|:-----|
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Portability.xsd  <br/> |
|**Extension base** <br/> |None  <br/> |
   
## Definition

```XML
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

```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section. 
  
### Child elements

|**Element**|**Type**|**Description**|
|:-----|:-----|:-----|
|[BestBets](bestbets-element-searchqueryconfigurationsettings-complextypesps15xsdsearchset3.md) <br/> |q1:ArrayOfBestBet  <br/> ||
|[DefaultSourceId](defaultsourceid-element-searchqueryconfigurationsettings-complextypesps15xsdsear.md) <br/> |ser:guid  <br/> ||
|[DefaultSourceIdSet](defaultsourceidset-element-searchqueryconfigurationsettings-complextypesps15xsds.md) <br/> |xs:boolean  <br/> ||
|[DeployToParent](deploytoparent-element-searchqueryconfigurationsettings-complextypesps15xsdsearc.md) <br/> |xs:boolean  <br/> ||
|[DisableInheritanceOnImport](disableinheritanceonimport-element-searchqueryconfigurationsettings-complextypes.md) <br/> |xs:boolean  <br/> ||
|[QueryRuleGroups](queryrulegroups-element-searchqueryconfigurationsettings-complextypesps15xsdsear.md) <br/> |q2:ArrayOfQueryRuleGroup  <br/> ||
|[QueryRules](queryrules-element-searchqueryconfigurationsettings-complextypesps15xsdsearchset.md) <br/> |q3:ArrayOfQueryRule  <br/> ||
|[ResultTypes](resulttypes-element-searchqueryconfigurationsettings-complextypesps15xsdsearchse.md) <br/> |q4:ArrayOfResultItemType  <br/> ||
|[Sources](sources-element-searchqueryconfigurationsettings-complextypesps15xsdsearchset3.md) <br/> |q5:ArrayOfSource  <br/> ||
|[UserSegments](usersegments-element-searchqueryconfigurationsettings-complextypesps15xsdsearchs.md) <br/> |q6:ArrayOfUserSegment  <br/> ||
   
### Attributes

None.
  

