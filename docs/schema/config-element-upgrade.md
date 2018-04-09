---
title: "Config Element (Upgrade)"
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
ms.assetid: c1dc6528-0eee-400a-8ca7-89b4924f5ccd
description: "Last modified: March 09, 2015"
---

# Config Element (Upgrade)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies the top-level containing element for the upgrade definition.
  
```
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

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**xmlns** <br/> |Specifies the Microsoft SharePoint Foundation 2010 Upgrade namespace:  `urn:Microsoft.SharePoint.Upgrade` <br/> |
   
## Child Elements

||
|:-----|
|[WebTemplate](webtemplate-element-upgrade.md)|
   
## Parent Elements

||
|:-----|
|None |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

For an example of how this element is used, see [Upgrade Definition schema](upgrade-definition-schema.md).
  

