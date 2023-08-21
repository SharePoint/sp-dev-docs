---
title: "ViewHeader Element (DeploymentManifest - SPView)"
manager: soliver
ms.date: 06/15/2022
description: Describes ViewHeader Element (DeploymentManifest - SPView) and provides information about elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: fc419f4d-05ef-4615-bb56-021266089c07
---

# ViewHeader Element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a parameter that defines the view of the header area on an instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="ViewHeader" minOccurs="0" maxOccurs="unbounded" />

USAGE
<View>
        <ViewHeader />
</View>

```

## Type

**xs:string**

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
- [ViewHeader](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewHeader.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
