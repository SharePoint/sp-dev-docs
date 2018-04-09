---
title: "RoleAssignments Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 14fccefa-96a8-4c07-bb55-87a27dbff332
description: "Last modified: March 09, 2015"
---

# RoleAssignments Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of deployment role assignment (**DeploymentRoleAssignments**) objects.
  
```
DECLARATION
<xs:element name="RoleAssignments" type="DeploymentRoleAssignments" />
USAGE
<SPObject>
        <RoleAssignments
                <RoleAssignment />
        />
</SPObject>

```

## Type

 **DeploymentRoleAssignments** (based on [SPRoleAssignmentCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignmentCollection.aspx) ) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[RoleAssignment Element (DeploymentManifest)](roleassignment-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also



[SPRoleAssignmentCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignmentCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

