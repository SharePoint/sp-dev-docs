---
title: "Member Element (DeploymentUserGroupMap)"
ms.author: nicg
author: nicg
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 83aef82b-1447-42c2-b88b-79144f98fbdd
description: "Last modified: March 09, 2015"
---

# Member Element (DeploymentUserGroupMap)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Represents a member of a deployment group ( **DeploymentGroup**) object.
  
```
DECLARATION
<xs:element 
    name="Member" 
    type="DeploymentGroupMember" 
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Group>
    <Member
        UserId="xs:string"
    />
</Group>

```

## Type

 **DeploymentGroupMember**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**UserId** <br/> |xx:string  <br/> |Optional. Identifier of the deployment group member.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[Group Element (DeploymentUserGroupMap)](group-element-deploymentusergroupmap.md)|
   
## See also

#### Concepts

[DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

