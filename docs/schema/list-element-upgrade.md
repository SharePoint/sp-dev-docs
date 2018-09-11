---
title: "List element (Upgrade)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Upgrade schema
api_type:
- schema
ms.assetid: 7acb7d24-d174-4fdd-9700-f4e7fe45fd17
description: Specifies how an existing list should be upgraded.
---

# List element (Upgrade)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies how an existing list should be upgraded.
  
```XML
<List
  FromTemplateId = "Integer"
  ToFeatureId = "GUID"
  v3Type = "Integer">
</List>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**FromTemplateId** <br/> |Required **Integer**. Specifies the list definition to be upgraded.  <br/> |
|**ToFeatureId** <br/> |Required **GUID**. Specifies the identifier (ID) of the content type feature to which the old list definition is upgraded.  <br/> |
|**v3Type** <br/> |Required **Integer**. Specifies the content type ID to which the old list definition is upgraded. Example:  `v3Type="0x0104` <br/> |
   
### Child elements

None
   
### Parent elements

- [Lists](lists-element-upgrade.md)
   
### Occurrences

- Minimum: 0 
- Maximum: Unbounded 
   
## Example

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md). 
  

