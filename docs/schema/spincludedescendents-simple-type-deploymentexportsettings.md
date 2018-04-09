---
title: "SPIncludeDescendents Simple Type (DeploymentExportSettings)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0b56c258-c512-419a-ac7b-4593ba543b30
description: "Last modified: March 09, 2015"
---

# SPIncludeDescendents Simple Type (DeploymentExportSettings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Provides values for the **IncludeDescendants** attribute on the [DeploymentObject Element (DeploymentExportSettings)](deploymentobject-element-deploymentexportsettings.md). 
  
```
<xs:simpleType name="SPIncludeDescendants">
        <xs:restriction base="xs:string">
                <xs:enumeration value="None" />
                <xs:enumeration value="Content" />
                <xs:enumeration value="All" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration Values

|**Value**|**Description**|
|:-----|:-----|
|**None** <br/> |Specifies that no descendants are included in the content migration package.  <br/> |
|**Content** <br/> |Specifies that only content-type descendants are included in the content migration package.  <br/> |
|**All** <br/> |Specifies that both content and content-type descendants are included in the content migration package.  <br/> |
   
## Remarks

The SPIncludeDescendents simple type values specify whether to include export object descendants (and if so, which ones) in the content migration package.
  
## See also

#### Reference

 **SPIncludeDescendants**
#### Concepts

[DeploymentExportSettings Schema](deploymentexportsettings-schema.md)
#### Other resources

[DeploymentObject Element (DeploymentExportSettings)](deploymentobject-element-deploymentexportsettings.md)

