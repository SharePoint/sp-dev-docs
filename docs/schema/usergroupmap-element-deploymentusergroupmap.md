---
title: "UserGroupMap Element (DeploymentUserGroupMap)"
ms.author: nicg
author: nicg
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

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents an object ( **DeploymentUserGroupMap**) that holds mappings for the users and deployment groups that are exported to the content migration package.
  
```
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
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[Users Element (DeploymentUserGroupMap)](users-element-deploymentusergroupmap.md) <br/> |
|[Groups Element (DeploymentUserGroupMap)](groups-element-deploymentusergroupmap.md) <br/> |
   
## Parent Elements

||
|:-----|
|None |
   
## Remarks

The **UserGroupMap** element is the root element of the DeploymentUserGroupMap **Schema** and therefore has no parent element. 
  
## See also

#### Concepts

[DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

