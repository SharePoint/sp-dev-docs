---
title: HttpHost element (View)
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
ms.assetid: 617594cb-8371-441a-b210-26050c865edc
description: Renders the URL to the Web application containing the current SharePoint website, such as  http://server.
---

# HttpHost element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the URL to the Web application containing the current SharePoint website, such as  `http://server`.
  
```XML
<HttpHost
  HTMLEncode = "TRUE | "FALSE"
  URLEncodeAsURL = "TRUE | "FALSE">
</HttpHost>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) are not encoded.  <br/> |
   
### Child elements

None
   
### Parent elements

Numerous
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
## Example

As an example, `My server is <HttpHost/>` returns the following: `My server is http://someservername.com`.
  
The following example constructs an opening `<A>` tag, using the **HttpHost** element to return the server path. 
  
```XML
<HTML>
  <![CDATA[ <a href="  ]]>
</HTML>
<HttpHost URLEncodeAsURL="TRUE" />
<LookupColumn URLEncodeAsURL="TRUE" />
<HTML>
  <![CDATA[ ">  ]]>
</HTML>
```

## See also

- [HTMLBase element](htmlbase-element.md)
- [HttpVDir element (View)](httpvdir-element-view.md)

