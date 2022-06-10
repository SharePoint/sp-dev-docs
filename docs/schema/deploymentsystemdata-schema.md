---
title: DeploymentSystemData schema
description: The DeploymentSystemData schema provides validation for the SystemData.xml file exported into the content migration package.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 5b098a6e-37ea-4155-b234-1649edd2495a
---

# DeploymentSystemData schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentSystemData schema provides validation for the SystemData.xml file exported into the content migration package. The SystemData file collects a variety of low-level system data. It records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests), and it also supports schema versioning. Additionally, it holds a list of system files that are required by SharePoint Foundation.

## DeploymentSystemData schema elements and types

The following table lists elements in the schema file DeploymentSystemData.xsd file.

<br/>

  
| Element | Description |
| --- | --- |
| [ManifestFile element (DeploymentSystemData)](manifestfile-element-deploymentsystemdata.md) | Represents system data files exported to the content migration package and listed on the deployment manifest. |
| [ManifestFiles element (DeploymentSystemData)](manifestfiles-element-deploymentsystemdata.md) | Represents a collection of system data files exported to the content migration package. |
| [SchemaVersion element (DeploymentSystemData)](schemaversion-element-deploymentsystemdata.md) | Represents an object (**SPSchemaVersion**) that lists versioning data for the content migration manifest schema. |
| [SystemObject element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md) | Represents a SharePoint Foundation system object instance (**SPSystemObject**) exported to the content migration package. |
| [SystemObjects element (DeploymentSystemData)](systemobjects-element-deploymentsystemdata.md) | Represents a collection of SharePoint Foundation system object (**SPSystemObject**) instances. |
| [SystemData element (DeploymentSystemData)](systemdata-element-deploymentsystemdata.md) | Represents a system data wrapper object (**SPSystemData**) that contains the deployment system data object collections. This is the schema root element. |
| [SPDeploymentObjectType Simple Type (DeploymentSystemData)](spdeploymentobjecttype-simple-type-deploymentsystemdata.md) | Enumeration simple type that provides values for the **Type** attribute on the [SystemObject element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md). The value specifies the system object type. |
| [Guid Simple Type (DeploymentSystemData)](guid-simple-type-deploymentsystemdata.md) | Supports the use of a unique identifier (GUID) as a **Guid** attribute field value in the [SystemObject element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md) of the DeploymentLRootObjectMap schema. |

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








