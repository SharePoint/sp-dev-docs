---
title: "Users Element (DeploymentUserGroupMap)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 354acbee-d410-4d48-9375-16e44ca4388b
description: "Last modified: March 09, 2015"
---

# Users Element (DeploymentUserGroupMap)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a collection of deployment user ( **DeploymentUser**) object instances.
  
```
DECLARATION
<xs:element 
    name="Users" 
    type="DeploymentUsers"
    minOccurs="0" maxOccurs="1" 
/>
USAGE
<UserGroupMap>
    <Users>
        <User />
    </Users>
</UserGroupMap>

```

## Type

 **DeploymentUsers**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[User Element (DeploymentUserGroupMap)](user-element-deploymentusergroupmap.md)|
   
## Parent Elements

||
|:-----|
|[UserGroupMap Element (DeploymentUserGroupMap)](usergroupmap-element-deploymentusergroupmap.md)|
   
## See also

#### Concepts

[DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

