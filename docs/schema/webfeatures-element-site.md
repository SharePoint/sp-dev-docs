---
title: "WebFeatures Element (Site)"
ms.author: rickki
author: rickki
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
ms.assetid: 7f810810-c902-405e-9eef-f797a7032e5d
description: "Last modified: March 09, 2015"
---

# WebFeatures Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies Web site Features to activate in sites that are created through the site definition.
  
```
<WebFeatures>
</WebFeatures>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[Feature](feature-element-site.md)|
   
### Parent elements

||
|:-----|
|[Configuration](configuration-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

Microsoft SharePoint Foundation activates features specified within the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file in the order that they are listed. Consequently, you must specify Features that are depended upon before Features that depend upon them. 
  

