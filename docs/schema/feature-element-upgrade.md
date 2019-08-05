---
title: "Feature element (Upgrade)"
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
ms.assetid: b3e237f2-b91e-4824-a545-6ce8d05480e5
description: Specifies a Feature to be marked as "provisioned" for websites or site collections created in Microsoft SharePoint Foundation 2010.
---

# Feature element (Upgrade)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a Feature to be marked as "provisioned" for websites or site collections created in Microsoft SharePoint Foundation 2010.
  
```XML
<Feature
  ID = "GUID"
  Force = "true" | "false"/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Force** <br/> |Optional **Boolean**. **True** if the Feature is installed by force during upgrade, even if the Feature is already installed; otherwise, **False**.  <br/> |
|**ID** <br/> |Required **GUID**. Specifies the identifier (ID) of the Feature.  <br/> |
   
### Child elements

None
   
### Parent elements

- [AppliedSiteFeatures](appliedsitefeatures-element-upgrade.md)
- [AppliedWebFeatures](appliedwebfeatures-element-upgrade.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
## Example

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

