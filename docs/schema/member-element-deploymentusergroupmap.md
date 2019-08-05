---
title: "Member Element (DeploymentUserGroupMap)"
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

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a member of a deployment group (**DeploymentGroup**) object.

## Definition

```XML
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
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**UserId** <br/> |xx:string  <br/> |Optional. Identifier of the deployment group member.  <br/> |
   
### Child elements

None
   
### Parent elements

[Group Element (DeploymentUserGroupMap)](group-element-deploymentusergroupmap.md)
   
## See also

- [DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

