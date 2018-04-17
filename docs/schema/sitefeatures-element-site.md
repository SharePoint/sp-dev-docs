---
title: "SiteFeatures element (Site)"
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
ms.assetid: 8e2776f2-cdc2-4e27-9a6b-0a4b308b7562
description: Specifies site collection Features to activate in site collections that are created through the site definition.
---

# SiteFeatures element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies site collection Features to activate in site collections that are created through the site definition.
  
```XML
<SiteFeatures>
</SiteFeatures>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Feature](feature-element-site.md)
   
### Parent elements

- [Configuration](configuration-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  
   
### Remarks

Microsoft SharePoint Foundation activates features specified within the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file in the order that they are listed. Consequently, you must specify Features that are depended upon before Features that depend upon them. 
  

