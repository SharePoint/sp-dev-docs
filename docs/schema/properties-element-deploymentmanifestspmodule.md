---
title: "Properties Element (DeploymentManifest - SPModule)"
description: Describes the Properties element (DeploymentManifest - SPModule) and provides a definition, the type, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 2804fb78-9819-4cbb-b0fd-44eb0645a3b4
---

# Properties Element (DeploymentManifest - SPModule)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of properties on an instance of a Windows SharePoint Services 3.0 module ([SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="Properties" type="Dictionary" />
USAGE
<Module>
        <Properties
                <Property />
        />
</Module>

```

## Type

[Dictionary](https://msdn.microsoft.com/library/System.Collections.Generic.Dictionary.aspx)

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)

### Parent elements

[Module Element (DeploymentManifest)](module-element-deploymentmanifest.md)

## See also

- [SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx)
- [Dictionary](https://msdn.microsoft.com/library/System.Collections.Generic.Dictionary.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
