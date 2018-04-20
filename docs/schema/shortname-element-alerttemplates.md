---
title: "ShortName element (AlertTemplates)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: 52ae55c9-791f-427e-af69-6069a5fad5fd
description: Specifies a short name for the alert template filter.
---

# ShortName element (AlertTemplates)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a short name for the alert template filter. The name can be specified as a string that contains a Resource variable. Resource variables that are listed in AlertTemplates.xml, such as `$Resources:Alerts_anything_filter_shortname`, can be found in core.resx, which is located in  _local_drive_ `\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\Resources`.
  
```XML
<ShortName>
</ShortName>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

None
   
### Parent elements

- [FilterDefinition](filterdefinition-element-alerttemplates.md)
   
## Example

For an example of how this element is used, see [FilterDefinition element (AlertTemplates)](filterdefinition-element-alerttemplates.md).
  

