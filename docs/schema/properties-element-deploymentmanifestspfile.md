---
title: "Properties Element (DeploymentManifest - SPFile)"
description: Describes the Properties element (DeploymentManifest - SPFile) and provides a definition, the type, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 57ce0f76-68ed-44d3-b6b8-8947650fcf8b
---

# Properties Element (DeploymentManifest - SPFile)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of properties on an instannce of a Windows SharePoint Services 3.0 file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="Properties" type="Dictionary" minOccurs="0" />

USAGE
<File>
        <Properties
                <Property />
        />
</File>

```

## Type

**Dictionary**

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)

### Parent elements

[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)

## See also

- [SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
