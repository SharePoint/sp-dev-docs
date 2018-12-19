---
title: "SPBaseType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a8fbc636-ac36-4046-b3ab-d604d38ccaaf
description: "Last modified: March 09, 2015"
---

# SPBaseType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the base type for a SharePoint list item.

## Definition

```XML
<xs:simpleType name="SPBaseType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="UnspecifiedBaseType" />
                <xs:enumeration value="GenericList" />
                <xs:enumeration value="DocumentLibrary" />
                <xs:enumeration value="Unused" />
                <xs:enumeration value="DiscussionBoard" />
                <xs:enumeration value="Survey" />
                <xs:enumeration value="Issue" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**UnspecifiedBaseType** <br/> |Indicates the type is unknown or unspecified.  <br/> |
|**GenericList** <br/> |Indicates the type is a generic list. Most lists are of this type.  <br/> |
|**DocumentLibrary** <br/> |Indicates the type is a document library.  <br/> |
|**Unused** <br/> |The type is unused.  <br/> |
|**DiscussionBoard** <br/> |Indicates the type is provided for backward compatibility with lists derived from the **DiscussionBoard** base type, but is no longer supported. The current version of SharePoint Foundation uses the **GenericList** base type to support a discussion board template.  <br/> |
|**Survey** <br/> |Indicates the type is a survey list.  <br/> |
|**Issue** <br/> |Indicates the type is an issue-tracking list.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

