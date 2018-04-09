---
title: "FederationAuthType simpleType (SPS15XSDSearchSet2)"
ms.author: kpalaraj
author: kpalaraj
manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 16c3b9eb-d3b8-919e-be2c-99a492e290fe
description: "Last modified: March 09, 2015"
---

# FederationAuthType simpleType (SPS15XSDSearchSet2)

 **Last modified:** March 09, 2015 
  
## Type information

|||
|:-----|:-----|
|**Base type** <br/> |xs:string  <br/> |
|**Namespace** <br/> |http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration  <br/> |
|**Schema file** <br/> |schema_Microsoft.Office.Server.Search.Administration.xsd  <br/> |
   
## Definition

```XML
<xs:simpleType name="FederationAuthType">
    <xs:restriction base="xs:string">
        <xs:enumeration value="Anonymous" />
        <xs:enumeration value="LocalNTAuth" />
        <xs:enumeration value="SingleAccountBasicAuth" />
        <xs:enumeration value="SingleAccountFormsAuthentication" />
        <xs:enumeration value="SingleAccountCookie" />
        <xs:enumeration value="ApplicationPoolIdentity" />
        <xs:enumeration value="Kerberos" />
        <xs:enumeration value="PerUserFormsAuthentication" />
        <xs:enumeration value="PerUserCookie" />
        <xs:enumeration value="SSO" />
        <xs:enumeration value="SingleAccountNTLM" />
        <xs:enumeration value="PerUserNTLM" />
        <xs:enumeration value="SingleAccountDigest" />
        <xs:enumeration value="PerUserDigest" />
        <xs:enumeration value="PerUserBasicAuth" />
        <xs:enumeration value="Custom" />
        <xs:enumeration value="PerUserCustom" />
    </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|Anonymous  <br/> ||
|LocalNTAuth  <br/> ||
|SingleAccountBasicAuth  <br/> ||
|SingleAccountFormsAuthentication  <br/> ||
|SingleAccountCookie  <br/> ||
|ApplicationPoolIdentity  <br/> ||
|Kerberos  <br/> |7  <br/> |
|PerUserFormsAuthentication  <br/> |8  <br/> |
|PerUserCookie  <br/> |9  <br/> |
|SSO  <br/> |10  <br/> |
|SingleAccountNTLM  <br/> |11  <br/> |
|PerUserNTLM  <br/> |12  <br/> |
|SingleAccountDigest  <br/> |13  <br/> |
|PerUserDigest  <br/> |14  <br/> |
|PerUserBasicAuth  <br/> |15  <br/> |
|Custom  <br/> |16  <br/> |
|PerUserCustom  <br/> |17  <br/> |
   

