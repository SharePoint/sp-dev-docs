---
title: "ManifestFiles element (DeploymentSystemData)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b0386913-8ac3-4a6e-a021-e73c9b1b12a7
description: "Last modified: March 09, 2015"
---

# ManifestFiles element (DeploymentSystemData)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of system data (SystemData.xml) files exported to the content migration package.

## Definition

```XML
DECLARATION
<xs:element 
    name="ManifestFiles" 
    type="SPManifestFiles" 
    minOccurs="1" maxOccurs="1" 
/>
USAGE
<SystemData>
    <ManifestFiles>
        <ManifestFile />
    </ManifestFiles>
</SystemData>

```

## Type

**SPManifestFiles**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [ManifestFile element (DeploymentSystemData)](manifestfile-element-deploymentsystemdata.md)
   
### Parent elements

- [SystemData element (DeploymentSystemData)](systemdata-element-deploymentsystemdata.md)
   
## See also

- [DeploymentSystemData Schema](deploymentsystemdata-schema.md)

