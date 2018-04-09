---
title: "SiteDefinitionManifest Element (Solution)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Solution Schema
api_type:
- schema
ms.assetid: 2f51fe9d-fd61-48a8-b2e2-e6bd3f315f4b
description: "Last modified: March 09, 2015"
---

# SiteDefinitionManifest Element (Solution)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies a site definition manifest to include in the solution.
  
```
<SiteDefinitionManifest
  Location="Text">
  <WebTempFile
    Location="Text">
</SiteDefinitionManifest>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Location  <br/> |Required **Text**. The relative path of the root folder for a site definition.  <br/> |
   
## Child Elements

||
|:-----|
|[WebTempFile](webtempfile-element-solution.md)|
   
## Parent Elements

||
|:-----|
|[SiteDefinitionManifests](sitedefinitionmanifests-element-solution.md)|
   
## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
  

