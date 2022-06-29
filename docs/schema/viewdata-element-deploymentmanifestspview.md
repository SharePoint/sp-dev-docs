---
title: "ViewData Element (DeploymentManifest - SPView)"
manager: soliver
ms.date: 06/14/2022
description: Describes ViewData Element (DeploymentManifest - SPView) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 8406a683-d281-4372-b9f8-e993e5790f01
---

# ViewData Element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a parameter that enables a view of data associated with an instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="ViewData" minOccurs="0" maxOccurs="1" />

USAGE
<View>
        <ViewData />
</View>

```

## Type

xs:string

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

None

### Parent elements

[View Element (DeploymentManifest)](view-element-deploymentmanifest.md)

## See also

- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [ViewData](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewData.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
