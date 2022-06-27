---
title: "SPObjects Element (DeploymentManifest)"
manager: soliver
ms.date: 06/13/2022
description: Describes SPObjects Element (DeploymentManifest) and includes information on type, elements, and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: af7fcfa9-22c1-4600-942f-b9a0419d0b65
---

# SPObjects Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of top-level Windows SharePoint Services 3.0 objects.

## Definition

```XML
DECLARATION
<xs:element name="SPObjects" type="SPGenericObjectCollection">
</xs:element>

USAGE
<SPObjects>
        <SPObject />
</SPObjects>

```

## Type

**SPGenericObjectCollection**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
### Parent elements

None
   
### Remarks

The **SPObjects** element is the root element of the DeploymentManifest.xsd schema and therefore has no parent element. 
  
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

