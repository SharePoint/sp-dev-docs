---
title: "RoleAssignment Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7a305e0f-5605-4083-bf6a-71e50c601ec9
description: "Last modified: March 09, 2015"
---

# RoleAssignment Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a deployment role assignment (**DeploymentRoleAssignment**) object.

## Definition

```XML
DECLARATION
<xs:element name="RoleAssignment" type="DeploymentRoleAssignment" minOccurs="0" maxOccurs="unbounded" />

USAGE
<RoleAssignments>
        <RoleAssignment
                        <Assignment />
                ScopeId="xs:string"
                RoleDefWebId="xs:string"
                RoleDefWebUrl="xs:string"
                ObjectId="xs:string"
                ObjectType="xs:string"
                ObjectUrl="xs:string"
                AnonymousPermMask="xs:string"
        />
</RoleAssignments>

```

## Type

**DeploymentRoleAssignment** (based on [SPRoleAssignment](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignment.aspx)) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**ScopeId** <br/> |xs:string  <br/> |Required. Specifies whether the scope of the role is list level or Web level.  <br/> |
|**RoleDefWebId** <br/> |xs:string  <br/> |Required. Identifier of the Web site whose role definition applies to the role.  <br/> |
|**RoleDefWebUrl** <br/> |xs:string  <br/> |Required. URL of the Web site whose role definition applies to the role.  <br/> |
|**ObjectId** <br/> |xs:string  <br/> |Required. Identifier of the role assignment object.  <br/> |
|**ObjectType** <br/> |xs:string  <br/> |Required. Type of the role assignment object.  <br/> |
|**ObjectUrl** <br/> |xs:string  <br/> |Required. URL to the role assignment object.  <br/> |
|**AnonymousPermMask** <br/> |xs:string  <br/> |Optional. Permission mask for anonymous users.  <br/> |
   
### Child elements

[Assignment Element (DeploymentManifest)](assignment-element-deploymentmanifest.md)
   
### Parent elements

[RoleAssignments Element (DeploymentManifest)](roleassignments-element-deploymentmanifest.md)
   
## See also

- [SPRoleAssignment](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignment.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

