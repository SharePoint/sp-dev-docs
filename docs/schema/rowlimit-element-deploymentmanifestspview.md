---
title: "RowLimit element (DeploymentManifest - SPView)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 00e6b2da-870a-4592-87a4-d8b5ad20f7b1
description: "Last modified: March 09, 2015"
---

# RowLimit element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents the limit on the number of rows (items) returned by a view query on a given page.

## Definition

```XML
DECLARATION
<xs:element name="RowLimit" minOccurs="0" maxOccurs="unbounded" />

USAGE
<View>
        <RowLimit />
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

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

