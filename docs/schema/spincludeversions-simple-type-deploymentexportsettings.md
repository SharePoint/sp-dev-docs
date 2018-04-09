---
title: "SPIncludeVersions Simple Type (DeploymentExportSettings)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ee0fc690-0494-4f2b-8f52-b34457e07a7e
description: "Last modified: March 09, 2015"
---

# SPIncludeVersions Simple Type (DeploymentExportSettings)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Provides values for the **IncludeVersions** attribute on the [ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md). 
  
```
<xs:simpleType name="SPIncludeVersions">
        <xs:restriction base="xs:string">
                <xs:enumeration value="LastMajor" />
                <xs:enumeration value="CurrentVersion" />
                <xs:enumeration value="LastMajorAndMinor" />
                <xs:enumeration value="All" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**LastMajor** <br/> |Specifies the last major version of the export object.  <br/> |
|**CurrentVersion** <br/> |Specifies the current version of the export object.  <br/> |
|**LastMajorAndMinor** <br/> |Specifies the version of the export object using both major and minor version numbers.  <br/> |
|**All** <br/> |Specifies that all available versions of the export object will be included.  <br/> |
   
### Remarks

The value of the SPIncludeVersions simple type specifies which export object version to include in the content migration package.
  
## See also



 **SPIncludeVersions**


[DeploymentExportSettings Schema](deploymentexportsettings-schema.md)


[ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md)

