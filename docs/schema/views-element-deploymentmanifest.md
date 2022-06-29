---
title: "Views Element (DeploymentManifest)"
manager: soliver
ms.date: 06/15/2022
description: Describes Views Element (DeploymentManifest) and includes information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 2d9bc3a6-ed02-400b-9243-1e51de45b409
---

# Views Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of Windows SharePoint Services 3.0 view object instances.

## Definition

```XML
DECLARATION
<xs:element name="Views" type="SPViewCollection" minOccurs="0" maxOccurs="1" />

USAGE
<List>
        <Views>
                <View />
        </Views>
</List>

```

## Type

[SPViewCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPViewCollection.aspx) object

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[View Element (DeploymentManifest)](view-element-deploymentmanifest.md)

### Parent elements

[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)

## See also

- [SPViewCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPViewCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
