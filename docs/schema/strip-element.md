---
title: "Strip Element"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 1219e531-4915-473c-89d5-25667763ec6f
description: "Last modified: March 09, 2015"
---

# Strip Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a horizontally scrolling strip that contains one or more controls.
  
```
<Strip />
```

### Child elements

||
|:-----|
|[ControlRef](controlref-element.md)|
   
### Parent elements

||
|:-----|
|[Row](row-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following example defines a strip with three controls for paging forward and backward.
  
```XML
<Row>
  <Strip>
    <ControlRef TemplateAlias="previousPage" DisplayMode="Small" />
    <ControlRef TemplateAlias="currentPage" DisplayMode="Medium" />
    <ControlRef TemplateAlias="nextPage" DisplayMode="Small" />
  </Strip>
</Row>
```


