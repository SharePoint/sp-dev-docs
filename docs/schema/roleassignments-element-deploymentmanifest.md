---
title: "RoleAssignments Element (DeploymentManifest)"
description: "Describes the RoleAssignments Element (DeploymentManifest), which Represents a collection of deployment role assignment (DeploymentRoleAssignments) objects."
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 14fccefa-96a8-4c07-bb55-87a27dbff332
---

# RoleAssignments Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of deployment role assignment (**DeploymentRoleAssignments**) objects.

## Definition

```XML
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

**DeploymentRoleAssignments** (based on [SPRoleAssignmentCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignmentCollection.aspx))

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[RoleAssignment Element (DeploymentManifest)](roleassignment-element-deploymentmanifest.md)

### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)

## See also

- [SPRoleAssignmentCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleAssignmentCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
