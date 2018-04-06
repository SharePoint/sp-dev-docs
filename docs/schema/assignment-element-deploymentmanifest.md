---
title: "Assignment Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b0cabb42-a2ed-488f-a736-0a5bf121a703
description: "Last modified: March 09, 2015"
---

# Assignment Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a Windows SharePoint Services 3.0 deployment assignment object instance ( **DeploymentAssignment**).
  
```
DELCARATION SYNTAX
<xs:element name="Assignment" 
        type="DeploymentAssignment" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE SYNTAX
<RoleAssignment>
        <Assignment
                RoleId="xs:string"
                PrincipalId="xs:string"
        />
</RoleAssignment

```

## Type

 **DeploymentAssignment**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**RoleID** <br/> |xs:string  <br/> |Identifier of the role associated with a specified assignment.  <br/> |
|**PrincipalID** <br/> |xs:string  <br/> |An integer value representing either a user ID ([ID](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPUser.ID.aspx) ), or a group ID ( [ID](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPGroup.ID.aspx) ).  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[RoleAssignment Element (DeploymentManifest)](roleassignment-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPRole](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRole.aspx)
  
[SPRoleAssignment](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignment.aspx)
  
[SPRoleDefinition](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleDefinition.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

