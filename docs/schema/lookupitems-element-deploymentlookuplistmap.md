---
title: "LookupItems Element (DeploymentLookupListMap)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d9c835b9-7008-4431-a819-c354f042d817
description: "Last modified: March 09, 2015"
---

# LookupItems Element (DeploymentLookupListMap)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of lookup item ( **SPLookupItem**) instances. Provides a list of lookup references from list item to list item.
  
```
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

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[LookupItem Element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md)|
   
### Parent elements

||
|:-----|
|[LookupList Element (DeploymentLookupListMap)](lookuplist-element-deploymentlookuplistmap.md)|
   
### Remarks

For more information, see [LookupItem Element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md)
  
## See also



[DeploymentLookupListMap Schema](deploymentlookuplistmap-schema.md)

