---
title: DeploymentRootObjectMap schema
description: The DeploymentRootObjectMap schema provides validation for the RootObjectMap.xml file exported into the content migration package.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: b754baf8-6db5-4f40-a1b3-67fb925d0319
---

# DeploymentRootObjectMap schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentRootObjectMap schema provides validation for the RootObjectMap.xml file exported into the content migration package. The RootObjectMap.xml file maintains a list of mappings of secondary, or dependent objects, to the root objects that are exported to the migration package. This allows the import phase of the migration operation to correctly place the dependent objects in mappings relative to the locations of the root objects.

## DeploymentRootObjectMap schema elements and types

The following table lists elements in the DeploymentRootObjectMap.xsd schema file.

<br/>

  
| Element | Description |
| --- | --- |
| [RootObject element (DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md) | Represents an instance of a root object in a root object map exported to the content migration package. |
| [RootObjects element (DeploymentRootObjectMap)](rootobjects-element-deploymentrootobjectmap.md) | Represents a container of listed root object (**SPRootObject**) instances. |
| [SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)](spdeploymentobjecttype-simple-type-deploymentrootobjectmap.md) | Enumeration simple type that provides values for the **Type** attribute on the [RootObject element (DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md). The value specifies the object type of the root object specified in the root object map. |
| [Guid Simple Type (DeploymentRootObjectMap))](guid-simple-type-deploymentrootobjectmap.md) | Supports the use of a unique identifier (GUID) as a **Guid** attribute field value in the [RootObject element (DeploymentRootObjectMap)](rootobject-element-deploymentrootobjectmap.md) of the DeploymentLRootObjectMap schema. |

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)







