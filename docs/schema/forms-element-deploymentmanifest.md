---
title: "Forms Element (DeploymentManifest)"
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 52b6a7ad-02b1-4e8f-8b30-73fc2b330848
description: Forms Element (DeploymentManifest) represents a collection of Windows SharePoint Services 3.0 form object instances.
---

# Forms Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of Windows SharePoint Services 3.0 form ([SPFormCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFormCollection.aspx)) object instances.

## Definition

```XML
DECLARATION
<xs:element name="Forms" type="SPFormCollection" minOccurs="0" maxOccurs="1" />

USAGE
<List>
        <Forms>
                <Form />
        </Forms>
</List>

```

## Type

[SPFormCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFormCollection.aspx)

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

[Form Element (DeploymentManifest)](form-element-deploymentmanifest.md)

### Parent elements

[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)

## See also

- [SPFormCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFormCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
