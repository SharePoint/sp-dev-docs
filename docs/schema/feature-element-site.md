---
title: "Feature Element (Site)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: f2ba770d-4b36-4865-9365-5bec061b8c07
description: "Last modified: March 09, 2015"
---

# Feature Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a reference to a Feature within a site definition. 
  
```
<Feature
  Id = "Text"  SourceVersion = "Text">
</Feature>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required **Text**. Specifies a unique identifier for the feature.  <br/> |
|**SourceVersion** <br/> |Optional **Text**.  <br/> |
   
### Child elements

||
|:-----|
|[Properties](properties-element-site.md)|
   
### Parent elements

||
|:-----|
|[SiteFeatures](sitefeatures-element-site.md), [WebFeatures](webfeatures-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

