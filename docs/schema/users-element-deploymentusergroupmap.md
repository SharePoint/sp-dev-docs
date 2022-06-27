---
title: "Users Element (DeploymentUserGroupMap)"
manager: soliver
ms.date: 06/14/2022
description: Describes Users Element (DeploymentUserGroupMap) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 354acbee-d410-4d48-9375-16e44ca4388b
---

# Users Element (DeploymentUserGroupMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of deployment user (**DeploymentUser**) object instances.

## Definition

```XML
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
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[User Element (DeploymentUserGroupMap)](user-element-deploymentusergroupmap.md)
   
### Parent elements

[UserGroupMap Element (DeploymentUserGroupMap)](usergroupmap-element-deploymentusergroupmap.md)
   
## See also

- [DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

