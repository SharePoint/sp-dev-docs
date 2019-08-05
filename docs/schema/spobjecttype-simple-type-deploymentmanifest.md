---
title: "SPObjectType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 68fee905-0ee5-41c6-ad8a-f7193baf5dbb
description: "Last modified: March 09, 2015"
---

# SPObjectType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013  
  
Provides values for all top-level serialized SharePoint object types.

## Definition

```XML
<xs:simpleType name="SPObjectType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="SPSite" />
                <xs:enumeration value="SPWeb" />
                <xs:enumeration value="SPList" />
                <xs:enumeration value="SPDocumentLibrary" />
                <xs:enumeration value="SPPictureLibrary" />
                <xs:enumeration value="SPListItem" />
                <xs:enumeration value="SPFolder" />
                <xs:enumeration value="SPFile" />
                <xs:enumeration value="SPContentType" />
                <xs:enumeration value="SPWebTemplate" />
                <xs:enumeration value="SPModule" />
                <xs:enumeration value="SPDocumentTemplate" />
                <xs:enumeration value="SPListTemplate" />
                <xs:enumeration value="DeploymentWebStructure" />
                <xs:enumeration value="DeploymentUserX" />
                <xs:enumeration value="DeploymentGroupX" />
                <xs:enumeration value="DeploymentRoles" />
                <xs:enumeration value="DeploymentRoleX" />
                <xs:enumeration value="DeploymentRoleAssignments" />
                <xs:enumeration value="DeploymentRoleAssignmentX" />
                <xs:enumeration value="DeploymentFieldTemplate" />
                <xs:enumeration value="SPFeature" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**SPSite** <br/> |Specifies that a SharePoint object is of type **SPSite**.  <br/> |
|**SPWeb** <br/> |Specifies that a SharePoint object is of type **SPWeb**.  <br/> |
|**SPList** <br/> |Specifies that a SharePoint object is of type **SPList**.  <br/> |
|**SPDocumentLibrary** <br/> |Specifies that a SharePoint object is of type **SPDocumentLibrary**.  <br/> |
|**SPPictureLibrary** <br/> |Specifies that a SharePoint object is of type **SPPictureLibrary**.  <br/> |
|**SPListItem** <br/> |Specifies that a SharePoint object is of type **SPListItem**.  <br/> |
|**SPFolder** <br/> |Specifies that a SharePoint object is of type **SPFolder**.  <br/> |
|**SPFile** <br/> |Specifies that a SharePoint object is of type **SPFile**.  <br/> |
|**SPContentType** <br/> |Specifies that a SharePoint object is of type **SPContentType**.  <br/> |
|**SPWebTemplate** <br/> |Specifies that a SharePoint object is of type **SPWebTemplate**.  <br/> |
|**SPModule** <br/> |Specifies that a SharePoint object is of type **SPModule**.  <br/> |
|**SPDocumentTemplate** <br/> |Specifies that a SharePoint object is of type **SPDocumentTemplate**.  <br/> |
|**SPListTemplate** <br/> |Specifies that a SharePoint object is of type **SPListTemplate**.  <br/> |
|**DeploymentWebStructure** <br/> |Specifies that a SharePoint object is of type **DeploymentWebStructure**.  <br/> |
|**DeploymentUserX** <br/> |Specifies that a SharePoint object is of type **DeploymentUserX**.  <br/> |
|**DeploymentGroupX** <br/> |Specifies that a SharePoint object is of type **DeploymentGroupX**.  <br/> |
|**DeploymentRoles** <br/> |Specifies that a SharePoint object is of type **DeploymentRoles**.  <br/> |
|**DeploymentRoleX** <br/> |Specifies that a SharePoint object is of type **DeploymentRoleX**.  <br/> |
|**DeploymentRoleAssignments** <br/> |Specifies that a SharePoint object is of type **DeploymentRoleAssignments**.  <br/> |
|**DeploymentRoleAssignmentX** <br/> |Specifies that a SharePoint object is of type **DeploymentRoleAssignmentX**.  <br/> |
|**DeploymentFieldTemplate** <br/> |Specifies that a SharePoint object is of type **DeploymentFieldTemplate**.  <br/> |
|**SPFeature** <br/> |Specifies that a SharePoint object is of type **SPFeature**.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

