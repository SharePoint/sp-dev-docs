---
title: "SPDictionaryEntryAccess Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ce710a54-2e61-419c-81c4-66fde5557cf7
description: "Last modified: March 09, 2015"
---

# SPDictionaryEntryAccess Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Indicates the type of access granted to the specified field value.

## Definition

```XML
<xs:simpleType name="SPDictionaryEntryAccess">
   <xs:restriction base="xs:string">
      <xs:enumeration value="ReadOnly" />
      <xs:enumeration value="ReadWrite" />
   </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**ReadOnly** <br/> |Specifies a read-only field value.  <br/> |
|**ReadWrite** <br/> |Specifies a writeable field value.  <br/> |
   
## Remarks

This enumeration functions as a system-level flag to specify whether the field value is rendered in the Web UI.
  
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

