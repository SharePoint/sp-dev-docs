---
title: "TRUEFALSE Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4c2101cd-7071-4592-88c5-ed271f85f3ac
description: "Last modified: March 09, 2015"
---

# TRUEFALSE Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies Boolean values using specific typographical forms.

## Definition

```XML

<xs:simpleType name="TRUEFALSE">
   <xs:restriction base="xs:string">
      <xs:enumeration value="TRUE" />
      <xs:enumeration value="FALSE" />
      <xs:enumeration value="true" />
      <xs:enumeration value="false" />
   </xs:restriction>
</xs:simpleType>

```

## Type

xs:string
  
## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**TRUE** <br/> |Specifies Boolean **true** using all capital letters.  <br/> |
|**FALSE** <br/> |Specifies Boolean **false** using all capital letters.  <br/> |
|**true** <br/> |Specifies Boolean **true** using all lowercase letters.  <br/> |
|**false** <br/> |Specifies Boolean **false** using all lowercase letters.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

