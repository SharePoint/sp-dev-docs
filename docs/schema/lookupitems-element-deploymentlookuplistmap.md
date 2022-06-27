---
title: "LookupItems Element (DeploymentLookupListMap)"
description: Outlines a definition, type, attributes, child elements, and parent elements for the LookupItems element in Sharepoint.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: d9c835b9-7008-4431-a819-c354f042d817
---

# LookupItems Element (DeploymentLookupListMap)
  
**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of lookup item (**SPLookupItem**) instances. Provides a list of lookup references from list item to list item.

## Definition

```XML
DECLARATION
<xs:element 
        name="LookupItems" type="SPLookupItems"
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<LookupList>
        <LookupItems>
                <LookupItem />
        </LookupItems>
</LookupList>

```

## Type

**SPLookupItems**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[LookupItem Element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md)
   
### Parent elements

[LookupList Element (DeploymentLookupListMap)](lookuplist-element-deploymentlookuplistmap.md)
   
### Remarks

For more information, see [LookupItem Element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md)
  
## See also

- [DeploymentLookupListMap Schema](deploymentlookuplistmap-schema.md)

