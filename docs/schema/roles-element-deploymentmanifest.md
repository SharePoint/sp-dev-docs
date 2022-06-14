---
title: "Roles Element (DeploymentManifest)"
description: "The Roles Element (DeploymentManifest) represents a collection of Windows SharePoint Services 3.0 deployment role (DeploymentRole) objects."
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 605edbbd-b46e-4c62-a012-adbaba0bcf17
---

# Roles Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Windows SharePoint Services 3.0 deployment role (**DeploymentRole**) objects.

## Definition

```XML
DECLARATION
<xs:element name="Roles" type="DeploymentRoles" />

USAGE
<SPObject>
        <Roles
                <Role />
        />
<SPObject>

```

## Type

**DeploymentRoles** (based on [SPRoleCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleCollection.aspx)) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[Role Element (DeploymentManifest)](role-element-deploymentmanifest.md)
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPRoleCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRoleCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

