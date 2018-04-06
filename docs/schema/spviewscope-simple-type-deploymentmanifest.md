---
title: "SPViewScope Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e636451e-751c-4783-96c5-043cd1e53c04
description: "Last modified: March 09, 2015"
---

# SPViewScope Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013  
  
Provides values for specifying the recursive scope of a specified view into a document library.

## Definition

```XML
<xs:simpleType name="SPViewScope">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Default" />
                <xs:enumeration value="Recursive" />
                <xs:enumeration value="RecursiveAll" />
                <xs:enumeration value="FilesOnly" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Default** <br/> |Shows only the files and subfolders of a specific folder.  <br/> |
|**Recursive** <br/> |Shows all files of all folders.  <br/> |
|**RecursiveAll** <br/> |Shows all files and alll subfolders of all folders.  <br/> |
|**FilesOnly** <br/> |Shows only the files of a specific folder.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

