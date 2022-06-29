---
title: "Formats Element (DeploymentManifest - SPView)"
description: "Formats Element (DeploymentManifest - SPView) represents formatting parameters for an instance of a SharePoint view (SPView) object."
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 2168f567-15fb-498c-ad9b-34e9fa03b985
---

# Formats Element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents formatting parameters for an instance of a SharePoint view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="Formats" minOccurs="0" maxOccurs="unbounded" />

USAGE
<View>
        <Formats />
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
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
