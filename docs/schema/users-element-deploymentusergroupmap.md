---
title: "Users Element (DeploymentUserGroupMap)"


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

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
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
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[User Element (DeploymentUserGroupMap)](user-element-deploymentusergroupmap.md)|
   
### Parent elements

||
|:-----|
|[UserGroupMap Element (DeploymentUserGroupMap)](usergroupmap-element-deploymentusergroupmap.md)|
   
## See also



[DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

