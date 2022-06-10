---
title: DeploymentUserGroupMap schema
description: The DeploymentUserGroupMap schema provides validation for the UserGroup.xml file exported into the content migration package.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 903d18c8-eb4e-46a4-8350-480e5906eebf
---

# DeploymentUserGroupMap schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentUserGroupMap schema provides validation for the UserGroup.xml file exported into the content migration package. The UserGroup.xml file maintains a list of users and user security groups with respect to access security and permissions.

## DeploymentUserGroupMap schema elements

The following table lists elements in the DeploymentUserGroupMap.xsd schema file.

<br/>

  
| Element | Description |
| --- | --- |
| [Group element (DeploymentUserGroupMap)](group-element-deploymentusergroupmap.md) | Represents a deployment group object instance (**DeploymentGroup**) exported to the content migration package. |
| [Groups element (DeploymentUserGroupMap)](groups-element-deploymentusergroupmap.md) | Represents a container object that holds deployment group (**DeploymentGroup**) object instances. |
| [User element (DeploymentUserGroupMap)](user-element-deploymentusergroupmap.md) | Represent a deployment user object instance (**DeploymentUser**) for export to the content migration package. |
| [Users element (DeploymentUserGroupMap)](users-element-deploymentusergroupmap.md) | Represents a container object that holds deployment user object instances (**DeploymentUser**). |
| [Member element (DeploymentUserGroupMap)](member-element-deploymentusergroupmap.md) | Represents a member of a Microsoft SharePoint Foundation deployment group object (**DeploymentGroup**). |
| [UserGroupMap element (DeploymentUserGroupMap)](usergroupmap-element-deploymentusergroupmap.md) | Represents an object (**DeploymentUserGroupMap**) that holds mappings for the Microsoft SharePoint Foundation deployment users and deployment groups that are exported to the content migration package. |

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)







