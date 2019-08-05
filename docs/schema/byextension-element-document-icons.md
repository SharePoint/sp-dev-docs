---
title: "ByExtension element (Document Icons)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Document Icons schema
api_type:
- schema
ms.assetid: 76e53cd5-5ce2-484a-88ed-81847c04e4d7
description: Defines icons for documents according to their file name extensions.
---

# ByExtension element (Document Icons)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines icons for documents according to their file name extensions. 
  
```XML
<ByExtension>
</ByExtension>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Mapping](mapping-element.md)
   
### Parent elements

- [DocIcons](docicons-element-document-icons.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  

<br/> 
   
### Remarks

This element is used in the [DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb%28Office.15%29.aspx) file to drive mapping between file extensions and their corresponding document library icons. 
  
If you want the document library feature to support a new file extension, add the extension to a **ByExtension** section, and then restart the server. 
  
For an example that shows how to use the **ByExtension** element, see [DocIcons element (Document Icons)](docicons-element-document-icons.md). 
  

