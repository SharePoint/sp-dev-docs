---
title: "SPDictionaryEntryValueType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e0d2ac1f-b516-48f3-b291-ad32d1f2ab39
description: "Last modified: March 09, 2015"
---

# SPDictionaryEntryValueType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Indicates the data type of the specified field value.

## Definition

```XML
<xs:simpleType name="SPDictionaryEntryValueType">
   <xs:restriction base="xs:string">
      <xs:enumeration value="String" />
      <xs:enumeration value="Integer" />
      <xs:enumeration value="Time" />
      <xs:enumeration value="StringVector" />
      <xs:enumeration value="Boolean" />
      <xs:enumeration value="FileSystemTime" />
      <xs:enumeration value="IntVector" />
      <xs:enumeration value="Double" />
      <xs:enumeration value="LongText" />
      <xs:enumeration value="Empty" />
   </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**String** <br/> |**String** data type.  <br/> |
|**Integer** <br/> |**Integer** data type.  <br/> |
|**Time** <br/> |Date/time data type.  <br/> |
|**StringVector** <br/> |Treats as a **String** data type.  <br/> |
|**Boolean** <br/> |**Boolean** data type.  <br/> |
|**FileSystemTime** <br/> |Treats as a date/time data type.  <br/> |
|**IntVector** <br/> |Treats as an **Integer** data type.  <br/> |
|**Double** <br/> |Treats as a **Double** data type.  <br/> |
|**LongText** <br/> |Treats as a **String** data type.  <br/> |
|**Empty** <br/> |No value.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

