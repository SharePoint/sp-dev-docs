---
title: "RoleX Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 57e68176-fe88-40e2-bcb7-bee76b69eb71
description: "Last modified: March 09, 2015"
---

# RoleX Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a security role in cases where incremental changes to the base object are being deployed.

## Definition

```XML
DECLARATION
<xs:element name="RoleX" type="DeploymentRoleX" />

USAGE
<SPObject>
        <RoleX
                Operation="SecurityModificationType"
                OperationCode="xs:string"
                WebId="xs:string"
                WebUrl="xs:string"
                RoleId="xs:string"
                Title="xs:string"
                Description="xs:string"
                PermMask="xs:string"
                Hidden="xs:boolean"
                RoleOrder="xs:string"
                Type="xs:string"
                UserId="xs:string"
                UserLogin="xs:string"
        />
</SPObject>

```

## Type

**DeploymentRoleX** (based on [SPRole](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRole.aspx)) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Operation** <br/> |[SecurityModificationType Simple Type (DeploymentManifest)](securitymodificationtype-simple-type-deploymentmanifest.md) <br/> |Required. Enumeration type that specifies which security role modifications are allowed.  <br/> |
|**OperationCode** <br/> |xs:string  <br/> |Required.  <br/> |
|**WebId** <br/> |xs:string  <br/> |Required. Identifier of the Web site to which changes are deployed.  <br/> |
|**WebUrl** <br/> |xs:string  <br/> |Required. URL of the Web site to which changes are deployed.  <br/> |
|**RoleId** <br/> |xs:string  <br/> |Optional. Identifier of the security role for objects that are deployed.  <br/> |
|**Title** <br/> |xs:string  <br/> |Optional. Display name of the role.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Description of the role.  <br/> |
|**PermMask** <br/> |xs:string  <br/> |Optional. Permission mask for the role.  <br/> |
|**Hidden** <br/> |xs:bool  <br/> |Optional. Specifies whether the role is hidden; **true** if hidden, otherwise, **false**.  <br/> |
|**RoleOrder** <br/> |xs:string  <br/> |Optional. Position of the role in  <br/> |
|**Type** <br/> |xs:string  <br/> |Optional. Type for the role as listed in the [Microsoft.SharePoint.SPRoleType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleType.aspx) enumeration.  <br/> |
|**UserId** <br/> |xs:string  <br/> |Optional. Identifier of users that belong to the role.  <br/> |
|**UserLogin** <br/> |xs:string  <br/> |Optional. Logon credential for user.  <br/> |
   
### Child elements

None
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPRole](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRole.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [Role Element (DeploymentManifest)](role-element-deploymentmanifest.md)

