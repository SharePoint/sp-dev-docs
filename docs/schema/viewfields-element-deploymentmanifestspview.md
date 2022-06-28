---
title: "ViewFields Element (DeploymentManifest - SPView)"
manager: soliver
ms.date: 06/14/2022
description: Describes ViewFields Element (DeploymentManifest - SPView) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f37b6076-a862-4bad-a55c-73f31a59c1b8
---

# ViewFields Element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of fields that are included in a Windows SharePoint Services 3.0 view.

## Definition

```XML
DECLARATION
<xs:element name="ViewFields" type="SPFieldLinkCollection" minOccurs="0" maxOccurs="1" />

USAGE
<View>
        <ViewFields>
                <FieldRef />
        </ViewFields>
</View>

```

## Type

[SPFieldLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLinkCollection.aspx) object

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[FieldRef Element (DeploymentManifest - SPFieldLinkCollection)](fieldref-element-deploymentmanifestspfieldlinkcollection.md)

### Parent elements

[View Element (DeploymentManifest)](view-element-deploymentmanifest.md)

## See also

- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [ViewFields](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewFields.aspx)
- [SPFieldLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLinkCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
