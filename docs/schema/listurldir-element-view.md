---
title: "ListUrlDir Element (View)"
ms.author: NormSohl
author: NormSohl
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
description: "Last modified: March 09, 2015"
---

# ListUrlDir Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Renders the absolute URL of the list's home directory. 
  
```
<ListUrlDir
  ForInstance = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  ServerRel = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</ListUrlDir>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ForInstance** <br/> |Optional **Boolean**. **TRUE** to render the subfolder URL of the current meeting instance. If the document library does not support multiple-instance data, then the root URL of the document library is rendered.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**ServerRel** <br/> |Optional **Boolean**. **TRUE** to specify that the URL is relative instead of absolute.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## See also

#### Other resources

[ListTemplate Element (Site)](../../collaborative-application-markup-language-caml-schemas/site-schema/listtemplate-element-site.md)

