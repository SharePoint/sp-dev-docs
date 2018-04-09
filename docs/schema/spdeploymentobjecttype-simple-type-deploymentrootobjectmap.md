---
title: "SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 484f7cea-b9f7-4545-9257-99509f87d1cc
description: "Last modified: March 09, 2015"
---

# SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Provides values for the **Type** attribute on the [RootObject Element (DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md). 

## Definition

```XML
<xs:simpleType name="SPDeploymentObjectType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Site" />
                <xs:enumeration value="Web" />
                <xs:enumeration value="Folder" />
                <xs:enumeration value="List" /> 
                <xs:enumeration value="ListItem" />
                <xs:enumeration value="File" />
        </xs:restriction>
</xs:simpleType>>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Site** <br/> |Specifies that the root object type is a SharePoint Foundation site (**SPSite**).  <br/> |
|**Web** <br/> |Specifies that the root object type is a SharePoint Foundation Web (**SPWeb**) site object.  <br/> |
|**Folder** <br/> |Specifies that the root object type is a SharePoint Foundation folder (**SPFolder**).  <br/> |
|**List** <br/> |Specifies that the root object type is a SharePoint Foundation list or document library (**SPList**).  <br/> |
|**ListItem** <br/> |Specifies that the root object type is a SharePoint Foundation list item (**SPListItem**).  <br/> |
|**File** <br/> |Specifies that the root object type is a SharePoint Foundation file (**SPFile**).  <br/> |
   
### Remarks

The **SPDeploymentObjectType** simple type value specifies the object type of the root object specified in the root object map. 
  
## See also

- [DeploymentRootObjectMap Schema](deploymentrootobjectmap-schema.md)
- [RootObject Element (DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md)

