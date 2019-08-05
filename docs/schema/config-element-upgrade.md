---
title: "Config element (Upgrade)"
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
ms.assetid: c1dc6528-0eee-400a-8ca7-89b4924f5ccd
description: Specifies the top-level containing element for the upgrade definition.
---

# Config element (Upgrade)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the top-level containing element for the upgrade definition.
  
```XML
<Config
  xmlns = "urn:Microsoft.SharePoint.Upgrade">
  <WebTemplate 
    BeginFromSchemaVersion = "Integer"
    EndFromSchemaVersion = "Integer"
    FromProductVersion = "Integer"
    ID = "Integer"
    LocaleId = "Integer"
    RemoveSiteExternalSecurityProvider = "true | "false"
    ToSchemaVersion = "Integer"
    ...
  </WebTemplate>
</Config>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**xmlns** <br/> |Specifies the Microsoft SharePoint Foundation 2010 Upgrade namespace:  `urn:Microsoft.SharePoint.Upgrade` <br/> |
   
### Child elements

- [WebTemplate](webtemplate-element-upgrade.md)
   
### Parent elements

None
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
## Example

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

