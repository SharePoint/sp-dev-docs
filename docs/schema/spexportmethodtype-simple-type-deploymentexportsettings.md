---
title: "SPExportMethodType Simple Type (DeploymentExportSettings)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cf806690-29b1-4aea-b1ef-b4cc3550ad8f
description: "Last modified: March 09, 2015"
---

# SPExportMethodType Simple Type (DeploymentExportSettings)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Provides values for the **ExportMethod** attribute on the [ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md). 

## Definition

```XML
<xs:simpleType name="SPExportMethodType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="ExportAll" />
                <xs:enumeration value="ExportChanges" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**ExportAll** <br/> |Specifies that all export objects should be exported to the content migration package.  <br/> |
|**ExportChanges** <br/> |Specifies that only export objects that have changed since the last version of the content migration package should be exported.  <br/> |
   
### Remarks

The **SPExportMethodType** simple type value specifies whether the export operation is full (all objects) or incremental (only those that have changed since the last version of the migration package). 
  
## See also

- [DeploymentExportSettings Schema](deploymentexportsettings-schema.md)
- [ExportSettings Element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md)

