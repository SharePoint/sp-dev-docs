---
title: "ViewFields Element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 06/14/2022
description: Describes ViewFields Element (DeploymentManifest - SPWebPart) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 9b4599eb-f7cd-487b-8970-bc44000c8fde
---

# ViewFields Element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of fields that are included on a Windows SharePoint Services 3.0 web part view.

## Definition

```XML
DECLARATION
<xs:element name="ViewFields" type="SPFieldLinkCollection" minOccurs="0" maxOccurs="1" />

USAGE
<WebPart>
        <ViewFields>
                <FieldRef />
        </ViewFields>
</WebPart>

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

[WebPart Element (DeploymentManifest)](webpart-element-deploymentmanifest.md)

## See also

- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [ViewFields](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewFields.aspx)
- [SPFieldLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLinkCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
