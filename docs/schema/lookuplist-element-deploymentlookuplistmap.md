---
title: "LookupList Element (DeploymentLookupListMap)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8f3366bd-8238-433f-bb41-88adbee251df
description: "Last modified: March 09, 2015"
---

# LookupList Element (DeploymentLookupListMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an instance of a lookup list (**SPLookupList**) object for export to a content migration package.

## Definition

```XML
DECLARATION
<xs:element 
    name="LookupList" 
    type="SPLookupList" 
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<LookupLists>
    <LookupList
          <LookupItems />
        Id="Guid"
        Url="xs:string"
        Included="xs:boolean"
    />
<LookupLists>

```

## Type

**SPLookupList**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentLookupListMap)](guid-simple-type-deploymentlookuplistmap.md) <br/> |Optional. Unique identifier of the lookup list.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. URL to the lookup list.  <br/> |
|**Included** <br/> |xs:boolean  <br/> |Optional. Specifies whether the list item is included with the export package; **true** if the list item is included, otherwise **false**.  <br/> |
   
### Child elements

[LookupItems Element (DeploymentLookupListMap)](lookupitems-element-deploymentlookuplistmap.md)
   
### Parent elements

[LookupLists Element (DeploymentLookupListMap)](lookuplists-element-deploymentlookuplistmap.md)
   
## See also

- [DeploymentLookupListMap Schema](deploymentlookuplistmap-schema.md)

