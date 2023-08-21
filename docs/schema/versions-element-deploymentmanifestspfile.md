---
title: "Versions Element (DeploymentManifest - SPFile)"
manager: soliver
ms.date: 06/14/2022
description: Describes Versions Element (DeploymentManifest - SPFile) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: b2d307aa-414e-4988-9a2a-5a85083c3100
---

# Versions Element (DeploymentManifest - SPFile)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of file version collection ([SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx)) objects specifying the versions of the file.

## Definition

```XML
DECLARATION
<xs:element name="Versions" type="SPFileVersionCollection" minOccurs="0" maxOccurs="1" />

USAGE
<SPObject>
        <File>
                <Versions>
                        <File />
                </Versions>
        </File>
</SPObject>

```

## Type

[SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx) object

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[File Element (DeploymentManifest - SPFileVersionCollection)](file-element-deploymentmanifestspfileversioncollection.md)

### Parent elements

[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)

## See also

- [SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
