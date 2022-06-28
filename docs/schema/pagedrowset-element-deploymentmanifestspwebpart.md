---
title: "PagedRowset Element (DeploymentManifest - SPWebPart)"
description: "PagedRowset Element (DeploymentManifest - SPWebPart) represents a paged rowset on an instance of a SharePoint web part (WebPart) object."
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: dd9ba038-fc94-4dc2-aaf6-5fe6fc51edf2
---

# PagedRowset Element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a paged rowset on an instance of a SharePoint web part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)) object.

## Definition

```XML
DECLARATION
<xs:element name="PagedRowset" minOccurs="0" maxOccurs="unbounded" />

USAGE
<WebPart>
        <PagedRowset />
</WebPart>

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

- [WebPart Element (DeploymentManifest)](webpart-element-deploymentmanifest.md)

## See also

- [WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)
