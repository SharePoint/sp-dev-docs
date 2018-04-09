---
title: "Role Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 76bf9339-6d33-48a5-b59f-a5d5317c9778
description: "Last modified: March 09, 2015"
---

# Role Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 deployment role (**DeploymentRole**) object.

## Definition

```XML
DECLARATION
<xs:element name="Role" type="DeploymentRole" minOccurs="0" maxOccurs="unbounded" />

USAGE
<Roles>
        <Role
                RoleId="xs:string"
                Title="xs:string"
                Description="xs:string"
                PermMask="xs:string"
                Hidden="xs:boolean"
                RoleOrder="xs:string"
                Type="xs:string"
        />
</Roles>

```

## Type

**DeploymentRole** (based on [SPRole](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRole.aspx)) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**RoleId** <br/> |xs:string  <br/> |Required. Integer that specifies the member ID.  <br/> |
|**Title** <br/> |xs:string  <br/> |Required. Specifies the name for the role.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Provides a description of the role.  <br/> |
|**PermMask** <br/> |xs:string  <br/> |Required. Specifies a permission mask for the role.  <br/> |
|**Hidden** <br/> |xs:boolean  <br/> |Required. Specifies whether the role is hidden; **true** if the role is hidden, otherwise, **false**.  <br/> |
|**RoleOrder** <br/> |xs:string  <br/> |Optional. Specifies the order in which permission levels are displayed on the **Permission Levels** page of a site collection.  <br/> |
|**Type** <br/> |xs:string  <br/> |Optional. Specifies the role type, as listed in the [Microsoft.SharePoint.SPRoleType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleType.aspx) enumeration.  <br/> |
   
### Child elements

None
   
### Parent elements

[Roles Element (DeploymentManifest)](roles-element-deploymentmanifest.md)
   
### Remarks

The value of the **RoleID** property corresponds to the unique member ID for the role, which is specified in the [SPMember.ID](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPMember.ID.aspx) property of the [SPMember](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPMember.aspx) class. 
  
## See also

- [SPRole](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRole.aspx)
- [SPMember](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPMember.aspx)
- [ID](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPMember.ID.aspx)
- [SPRoleType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleType.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

