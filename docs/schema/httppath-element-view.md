---
title: "HttpPath Element (View)"


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
ms.assetid: 81ffc99f-f457-444c-8dec-5900cf827c60
description: "Last modified: March 09, 2015"
---

# HttpPath Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the path to the appropriate OWSSVR.DLL file.
  
```
<HttpPath
  ForInstance = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  ServerRel = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</HttpPath>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ForInstance** <br/> |Optional **Boolean**.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**ServerRel** <br/> |Optional **Boolean**. **TRUE** to specify that the URL is relative instead of absolute.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

By default, this element appends **CS=** _XXX_, where  _XXX_ is the Microsoft Office SharePoint Designer 2007 character set (for example, 109 = UTF-8) of the page that contains the element. This allows the form handler to properly interpret data coming from the browser, which is encoded by using the character set and the encoding of the page that contains the form.  `<HttpPath/>` returns  `http://` _Server_Name_ `/_vti_bin/owssvr.dll?CS=109`.
  
Prevent the character set from being represented by setting the **CS** attribute to **FALSE**. For example,  `<HttpPath CS="FALSE"/>` returns  `http://` _Server_Name_ `/_vti_bin/owssvr.dll`.
  
## See also



[HTMLBase Element](htmlbase-element.md)

