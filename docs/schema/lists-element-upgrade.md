---
title: "Lists element (Upgrade)"
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
ms.assetid: a375d4a2-af94-498f-abe2-69336cc21fe4
description: Contains definitions for how existing lists should be upgraded on a list template by list template basis.
---

# Lists element (Upgrade)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains definitions for how existing lists should be upgraded on a list template by list template basis.
  
```XML
<Lists>
  <List
    FromTemplateId = "Integer"
    ToFeatureId = "GUID"
    v3Type = "Integer">
  </List>
  <List
    FromTemplateId = "Integer"
    ToFeatureId = "GUID"
    v3Type = "Integer">
  </List>
  ...
</Lists>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [List](list-element-upgrade.md)
   
### Parent elements

- [WebTemplate](webtemplate-element-upgrade.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1
   
## Example

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

