---
title: "Groups Element (DeploymentUserGroupMap)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 598d99ac-00a3-4730-9aaf-28008694a986
description: "Last modified: March 09, 2015"
---

# Groups Element (DeploymentUserGroupMap)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of deployment group ( **DeploymentGroup**) object instances.
  
```
DECLARATION
<xs:element 
    name="Groups" 
    type="DeploymentGroups" 
    minOccurs="0" maxOccurs="1" 
/>
USAGE
<UserGroupMap>
    <Groups>
        <Group />
    </Group>
</UserGroupMap>

```

## Type

 **DeploymentGroups**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Group Element (DeploymentUserGroupMap)](group-element-deploymentusergroupmap.md)|
   
### Parent elements

||
|:-----|
|[UserGroupMap Element (DeploymentUserGroupMap)](usergroupmap-element-deploymentusergroupmap.md)|
   
## See also



[DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)

