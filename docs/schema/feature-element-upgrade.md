---
title: "Feature Element (Upgrade)"
ms.author: NormSohl
author: NormSohl
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
description: "Last modified: March 09, 2015"
---

# Feature Element (Upgrade)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies a Feature to be marked as "provisioned" for Web sites or site collections created in Microsoft SharePoint Foundation 2010.
  
```
<Feature
  ID = "GUID"
  Force = "true" | "false"/>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Force** <br/> |Optional **Boolean**. **true** if the Feature is installed by force during upgrade, even if the Feature is already installed; otherwise, **false**.  <br/> |
|**ID** <br/> |Required **GUID**. Specifies the identifier (ID) of the Feature.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[AppliedSiteFeatures](appliedsitefeatures-element-upgrade.md), [AppliedWebFeatures](appliedwebfeatures-element-upgrade.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Remarks

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

