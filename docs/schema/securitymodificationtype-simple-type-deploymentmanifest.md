---
title: "SecurityModificationType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6ecf42b2-0c38-4ecf-b819-fa931965ab49
description: "Last modified: March 09, 2015"
---

# SecurityModificationType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Specifies the allowable security modifications for a specified user, user group, role, or role assignment.

## Definition

```XML
<xs:simpleType name="SecurityModificationType">
        <xs:restriction base="xs:string">
                <xs:enumeration value="Add" />
                <xs:enumeration value="Delete" />
                <xs:enumeration value="Update" />
                <xs:enumeration value="MemberAdd" />
                <xs:enumeration value="MemberDelete" />
                <xs:enumeration value="RoleAdd" />
                <xs:enumeration value="RoleDelete" />
                <xs:enumeration value="RoleUpdate" />
                <xs:enumeration value="RoleAssignmentAdd" />
                <xs:enumeration value="RoleAssignmentDelete" />
        </xs:restriction>
</xs:simpleType>

```

## Enumeration values

|**Value**|**Description**|
|:-----|:-----|
|**Add** <br/> |Adds a security object (user, group, or role)  <br/> |
|**Delete** <br/> |Deletes a security object.  <br/> |
|**Update** <br/> |Updates a security object.  <br/> |
|**MemberAdd** <br/> |Adds a member to a SharePoint group.  <br/> |
|**MemberDelete** <br/> |Deletes a member from a SharePoint group.  <br/> |
|**RoleAdd** <br/> |Adds a SharePoint role.  <br/> |
|**RoleDelete** <br/> |Deletes a SharePoint role.  <br/> |
|**RoleUpdate** <br/> |Updates a SharePoint role.  <br/> |
|**RoleAssignmentAdd** <br/> |Adds an assignment to a SharePoint role.  <br/> |
|**RoleAssignmentDelete** <br/> |Deletes an assignment from a SharePoint role.  <br/> |
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [GroupX Element (DeploymentManifest)](groupx-element-deploymentmanifest.md)

