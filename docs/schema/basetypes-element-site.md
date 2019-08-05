---
title: "BaseTypes element (Site)"
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
ms.assetid: 821c67d7-1799-480a-ae82-2f4c1b0b0655
description: Contains the collection of BaseType elements in the Onet.xml file of a site definition. 
---

# BaseTypes element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains the collection of **BaseType** elements in the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) file of a site definition. 
  
```XML
<BaseTypes>
</BaseTypes>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [BaseType](basetype-element-site.md)
   
### Parent elements

- [Project](project-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  <br/> 
   
### Remarks

The fields defined in a base type may not be deleted from a derived list without breaking the list (for example, a document library will not function without the file name column), although fields may be added to the list.
  

