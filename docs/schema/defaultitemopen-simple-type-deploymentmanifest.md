---
title: "DefaultItemOpen Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f8487ce9-1aef-4380-ad96-6f841f5c926e
description: "Last modified: March 09, 2015"
---

# DefaultItemOpen Simple Type (DeploymentManifest)
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies the default environment for a SharePoint item upon opening.

## Definition

```XML
<xs:simpleType name="DefaultItemOpen">
   <xs:restriction base="xs:string">
      <xs:enumeration value="Browser" />
      <xs:enumeration value="PreferClient" />
   </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Browser** <br/> |Open the item in a Web browser window.  <br/> |
|**PreferClient** <br/> |Opens the item in a client application window if a client is available; otherwise, the item opens in a Web browser window.  <br/> |
   
## See also

- [DefaultItemOpen](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.DefaultItemOpen.aspx)
- [DefaultItemOpen](https://msdn.microsoft.com/library/Microsoft.SharePoint.DefaultItemOpen.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

