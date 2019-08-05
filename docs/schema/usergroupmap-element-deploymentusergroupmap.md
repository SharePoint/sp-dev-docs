---
title: "UserGroupMap Element (DeploymentUserGroupMap)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2bc07768-cecb-445d-a42a-d96ea56b5460
description: "Last modified: March 09, 2015"
---

# UserGroupMap Element (DeploymentUserGroupMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an object (**DeploymentUserGroupMap**) that holds mappings for the users and deployment groups that are exported to the content migration package.

## Definition

```XML
DECLARATION
<xs:element 
    name="UserGroupMap"
    type="DeploymentUserGroupMap" 
/>
USAGE
<UserGroupMap>
    <Users />
    <Groups />
</UserGroupMap>

```

## Type

**DeploymentUserGroupMap**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Users Element (DeploymentUserGroupMap)](users-element-deploymentusergroupmap.md) 
- [Groups Element (DeploymentUserGroupMap)](groups-element-deploymentusergroupmap.md) 
   
### Parent elements

None
   
### Remarks

The **UserGroupMap** element is the root element of the DeploymentUserGroupMap **Schema** and therefore has no parent element. 
  
## See also

- [DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

