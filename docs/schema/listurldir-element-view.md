---
title: "ListUrlDir element (View)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: c4f01916-0982-4d02-8242-69c58c9758cb
description: Renders the absolute URL of the list's home directory. 
---

# ListUrlDir element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the absolute URL of the list's home directory. 
  
```XML
<ListUrlDir
  ForInstance = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  ServerRel = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</ListUrlDir>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ForInstance** <br/> |Optional **Boolean**. **TRUE** to render the subfolder URL of the current meeting instance. If the document library does not support multiple-instance data, the root URL of the document library is rendered.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**ServerRel** <br/> |Optional **Boolean**. **TRUE** to specify that the URL is relative instead of absolute.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) are not encoded.  <br/> |
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0  
- Maximum: Unbounded  
   
## See also

- [ListTemplate element (Site)](listtemplate-element-site.md)

