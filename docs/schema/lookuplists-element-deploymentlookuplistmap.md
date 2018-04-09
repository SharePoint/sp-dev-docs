---
title: "LookupLists Element (DeploymentLookupListMap)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ecee28f0-0d23-46c2-bf69-ebb356d7f322
description: "Last modified: March 09, 2015"
---

# LookupLists Element (DeploymentLookupListMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of deployment lookup list (**SPLookupList**) objects exported to the content migration package.

## Definition

```XML
DECLARATION
<xs:element name="LookupLists" type="SPLookupLists" />
USAGE
<LookupLists>
    <LookupList />
</LookupLists>

```

## Type

**SPLookupLists**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[LookupList Element (DeploymentLookupListMap)](lookuplist-element-deploymentlookuplistmap.md)
   
### Parent elements

None
   
### Remarks

The **LookupLists** element is the root element in the **DeploymentLookupListMap** schema, and therefore has no parent element. 
  
## See also

- [DeploymentLookupListMap Schema](deploymentlookuplistmap-schema.md)

