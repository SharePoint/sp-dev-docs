---
title: "LookupItem Element (DeploymentLookupListMap)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c0e4af3f-673d-42ba-a456-d925b346f5a4
description: "Last modified: March 09, 2015"
---

# LookupItem Element (DeploymentLookupListMap)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a reference object (**SPLookupItem**) that holds references from list item to list item when the items are exported to a content migration package.

## Definition

```XML
DECLARATION
<xs:element 
        name="LookupItem" 
        type="SPLookupItem" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<LookupItems>
        <LookupItem
                Id="Guid"
                DocId="Guid"
                Url="xs:string"
                Included="xs:boolean"
        />
</LookupItems>

```

## Type

**SPLookupItem**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentLookupListMap)](guid-simple-type-deploymentlookuplistmap.md) <br/> |A unique identifier for the specified lookup item.  <br/> |
|**DocId** <br/> |[Guid Simple Type (DeploymentLookupListMap)](guid-simple-type-deploymentlookuplistmap.md) <br/> |Unique identifier of the document represented by the list item.  <br/> |
|**Url** <br/> |xs:string  <br/> |URL to the list item.  <br/> |
|**Included** <br/> |xs:boolean  <br/> |Specifies whether the list item is included with the export package; **true** if the item is included, otherwise, **false**.  <br/> |
   
### Child elements

None
   
### Parent elements

[LookupItems Element (DeploymentLookupListMap)](lookupitems-element-deploymentlookuplistmap.md)
   
## See also

- [DeploymentLookupListMap Schema](deploymentlookuplistmap-schema.md)

