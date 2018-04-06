---
title: "SPEventHostType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 77928f8c-f509-40b9-8820-ac663487dd6f
description: "Last modified: March 09, 2015"
---

# SPEventHostType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies the object type for event hosts.

## Definition

```XML
<xs:simpleType name="SPEventHostType" >
   <xs:restriction base="xs:string">
      <xs:enumeration value="Site" />
      <xs:enumeration value="Web" />
      <xs:enumeration value="List" />
      <xs:enumeration value="ListItem" />
      <xs:enumeration value="ContentType" />
      <xs:enumeration value="Feature" />
   </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Site** <br/> |SharePoint Site object ( **SPSite**).  <br/> |
|**Web** <br/> |SharePoint Web object ( **SPWeb**).  <br/> |
|**List** <br/> |SharePoint List object ( **SPList**).  <br/> |
|**ListItem** <br/> |SharePoint ListItem object ( **SPListItem**).  <br/> |
|**ContentType** <br/> |SharePoint ContentType object ( **SPContentType**).  <br/> |
|**Feature** <br/> |SharePoint Feature object ( **SPFeature**).  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

