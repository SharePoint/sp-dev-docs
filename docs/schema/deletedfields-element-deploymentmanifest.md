---
title: "DeletedFields Element (DeploymentManifest)"
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f9264341-830b-413e-8bdd-05f3f16a8445
description: DeletedFields Element (DeploymentManifest) represents a container of deleted fields specified for a SharePoint list.
---

# DeletedFields Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a container of deleted fields specified for a SharePoint list.

## Definition

```XML
DECLARATION
<xs:element name="DeletedFields" type="ListDeletedFields" minOccurs="0" maxOccurs="1" />

USAGE
<List>
   <DeletedFields>
      <DeletedField />
   </DeletedFields>>
</List>
```

## Type

**ListDeletedFields**

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[DeletedField Element (DeploymentManifest)](deletedfield-element-deploymentmanifest.md)

### Parent elements

[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)

## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)
- [DeletedField Element (DeploymentManifest)](deletedfield-element-deploymentmanifest.md)
