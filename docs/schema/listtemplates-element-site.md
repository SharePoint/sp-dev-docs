---
title: "ListTemplates Element (Site)"
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
ms.assetid: 1da0da4b-bb4d-4a77-802d-57fd43a6a30e
description: "Last modified: March 09, 2015"
---

# ListTemplates Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the collection of list definitions in an [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file for lists that can be created on a site. 
  
```
<ListTemplates>
</ListTemplates>
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
|[ListTemplate](listtemplate-element-site.md)|
   
### Parent elements

||
|:-----|
|[Project](project-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

In Microsoft SharePoint Foundation the list template for a standard SharePoint list is usually defined within the element manifest file of the Feature that contains the list definition. For more information about list template Features, see [List Template Files](../../sharepoint-features-schemas/list-template-files/list-template-files.md).
  

