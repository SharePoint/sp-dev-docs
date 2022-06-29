---
title: "PagedClientCallbackRowset element (DeploymentManifest - SPView)"
description: "PagedClientCallbackRowset element (DeploymentManifest - SPView) represents a row set returned from a callback to a paged client on an instance of a SharePoint view (SPView) object."
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 8bd99d11-95b5-4eb1-a8e4-e313deeec7a4
---

# PagedClientCallbackRowset element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a row set returned from a callback to a paged client on an instance of a SharePoint view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="PagedClientCallbackRowset" minOccurs="0" maxOccurs="1" />

USAGE
<View>
        < PagedClientCallbackRowset />
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

- [View element (DeploymentManifest)](view-element-deploymentmanifest.md)

## See also

- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
