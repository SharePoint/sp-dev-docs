---
title: "SPIncludeSecurity Simple Type (DeploymentExportSettings)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e5fe8d3f-5010-41ad-a75e-dc40240dc870
description: "Last modified: March 09, 2015"
---

# SPIncludeSecurity Simple Type (DeploymentExportSettings)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Provides values for the **IncludeSecurity** attribute on the [ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md). 
  
```
<xs:simpleType name="SPIncludeSecurity">
    <xs:restriction base="xs:string">
        <xs:enumeration value="None" />
        <xs:enumeration value="WssOnly" />
        <xs:enumeration value="All" />
    </xs:restriction>
</xs:simpleType

```

## Enumeration Values

|**Value**|**Description**|
|:-----|:-----|
|**None** <br/> |Specifies that no user or group information is migrated. (Default)  <br/> |
|**WssOnly** <br/> |Applies only Windows SharePoint Services 3.0 security settings. Includes user memberships and role assignments such as default roles, for example, Web Designer or any custom roles that extend from the default roles. The access control list (ACL) for each object is migrated. No user information defined in the DAP or LDAP servers is included.  <br/> |
|**All** <br/> |Applies all available Windows SharePoint Services 3.0 security settings. Includes user memberships and role assignments such as default roles, for example, Web Designer or any custom roles that extend from the default roles. The ACL for each object is migrated. In addition, user information defined in the DAP or LDAP servers is included.  <br/> |
   
## Remarks

The values specify the user and group information that is included during an export operation.
  
## See also

#### Reference

 **SPIncludeSecurity**
#### Concepts

[DeploymentExportSettings Schema](deploymentexportsettings-schema.md)
#### Other resources

[ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md)

