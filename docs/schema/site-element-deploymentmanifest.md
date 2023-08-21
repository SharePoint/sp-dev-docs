---
title: "Site Element (DeploymentManifest)"
manager: soliver
ms.date: 6/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: cc6c37c3-c1b4-414b-a3b4-8bf5bcffe607
description: Site Element (DeploymentManifest) represents an instance of a Windows SharePoint Services 3.0 site object.
---

# Site Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents an instance of a Windows SharePoint Services 3.0 site ([SPSite](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="Site" type="SPSite" />

USAGE
<SPObject>
        <Site
                Id="Guid"
        />
</SPObject

```

## Type

**SPSite**

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Global unique identifier of the Windows SharePoint Services 3.0 site object.  <br/> |

### Child elements

None

### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)

## See also

- [SPSite](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPSite.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
