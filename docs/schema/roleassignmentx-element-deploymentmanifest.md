---
title: "RoleAssignmentX Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6fb13349-16fd-4fb6-b0d7-a469e276cb18
description: "Last modified: March 09, 2015"
---

# RoleAssignmentX Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a security role assignment in cases where incremental changes to the base object are being deployed.

## Definition

```XML
DECLARATION
<xs:element name="RoleAssignmentX" type="DeploymentRoleAssignmentX" />

USAGE
<SPObject>
        <RoleAssignmentX
                Operation="SecurityModificationType"
                OperationCode="xs:string"
                ScopeId="xs:string"
                RoleDefWebId="xs:string"
                RoleDefWebUrl="xs:string"
                ObjectId="xs:string"
                ObjectType="xs:string"
                ObjectUrl="xs:string"
                AnonymousPermMask="xs:string"
                RoleName="xs:string"
                RoleId="xs:string"
                GroupTitle="xs:string"
                UserLogin="xs:string"
        />
</SPObject>

```

## Type

**DeploymentRoleAssignmentX** (based on [SPRoleAssignment](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignment.aspx)) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Operation** <br/> |[SecurityModificationType Simple Type (DeploymentManifest)](securitymodificationtype-simple-type-deploymentmanifest.md) <br/> |Required. Enumeration type that specifies which security role modifications are allowed.  <br/> |
|**OperationCode** <br/> |xs:string  <br/> |Required.  <br/> |
|**ScopeId** <br/> |xs:string  <br/> |Required. Specifies whether the scope of the role is list level or Web level.  <br/> |
|**RoleDefWebId** <br/> |xs:string  <br/> |Required. Identifier of the Web whose role definition applies to the role.  <br/> |
|**RoleDefWebUrl** <br/> |xs:string  <br/> |Required. URL of the Web whose role definition applies to the role.  <br/> |
|**ObjectId** <br/> |xs:string  <br/> |Required. Identifier of the role assignment object.  <br/> |
|**ObjectType** <br/> |xs:string  <br/> |Required. Type of the role assignment object.  <br/> |
|**ObjectUrl** <br/> |xs:string  <br/> |Required. URL to the role assignment object.  <br/> |
|**AnonymousPermMask** <br/> |xs:string  <br/> |Optional. Permission mask for anonymous users.  <br/> |
|**RoleName** <br/> |xs:string  <br/> |Optional. Name of the security role associated with the assignment.  <br/> |
|**RoleId** <br/> |xs:string  <br/> |Optional. Identifier of the security role.  <br/> |
|**GroupTitle** <br/> |xs:string  <br/> |Optional. Display name of the security group that is associated with the role.  <br/> |
|**UserLogin** <br/> |xs:string  <br/> |Optional. Logon credential for users associated with the role.  <br/> |
   
### Child elements

None
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPRoleAssignment](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignment.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [RoleAssignment Element (DeploymentManifest)](roleassignment-element-deploymentmanifest.md)

