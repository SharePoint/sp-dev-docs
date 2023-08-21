---
title: DeploymentRequirements schema
description: The DeploymentRequirements schema provides validation for the Requirements.xml file exported to the content migration package.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f07210c3-2c1a-4c4d-b9b8-d9d30c57d8c8
---

# DeploymentRequirements schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentRequirements schema provides validation for the Requirements.xml file exported to the content migration package. The Requirements.xml file maintains a list of deployment requirements in the form of installation requirements on the migration target, such as Feature definitions, template versions, web part assemblies, language packs, and so forth.

## DeploymentRequirements schema elements and types

The following table lists elements in the DeploymentRequirements.xsd schema file.

<br/>


| Element | Description |
| --- | --- |
| [Requirement element (DeploymentRequirements)](requirement-element-deploymentrequirements.md) | Represents specific deployment export requirement objects (**SPRequirement**). |
| [Requirements element (DeploymentRequirements)](requirements-element-deploymentrequirements.md) | Represents a container of deployment export requirement objects. |
| [SPRequirementObjectType Simple Type (DeploymentRequirements)](sprequirementobjecttype-simple-type-deploymentrequirements.md) | Enumeration simple type that provides values for the **Type** attribute on the [Requirement element (DeploymentRequirements)](requirement-element-deploymentrequirements.md). The value specifies the object type of the deployment requirement specified with the content migration package. |

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)
