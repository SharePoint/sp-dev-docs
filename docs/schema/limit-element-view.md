---
title: "Limit Element (View)"


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
ms.assetid: 42685632-0d0c-44a4-8dcf-34f772cdc705
description: "Last modified: March 09, 2015"
---

# Limit Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Truncates text to a specified size.
  
```
<Limit
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  IgnoreTags = "TRUE" | "FALSE"
  Len = "Integer"
  MoreText = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</Limit>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AutoHyperLink** <br/> |Optional **Boolean**. **TRUE** to surround text with **\<A\>** tags if the text appears like a hyperlink (for example, www.microsoft.com).  <br/> |
|**AutoHyperLinkNoEncoding** <br/> |Optional **Boolean**. **TRUE** to surround text with **\<A\>** tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.  <br/> |
|**AutoNewLine** <br/> |Optional **Boolean**. **TRUE** to insert **\<BR\>** tags into the text stream and to replace multiple spaces with a nonbreaking space ( **&amp;nbsp;**).  <br/> |
|**Default** <br/> |Optional **Text**. Renders the text assigned to this attribute if the value returned by the **Select** attribute of another element is an empty string.  <br/> |
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**IgnoreTags** <br/> |Optional **Boolean**. **TRUE** to exclude tags when truncating text.  <br/> |
|**Len** <br/> |Optional **Integer**. Determines the maximum number of characters to show. The default value is 128.  <br/> |
|**MoreText** <br/> |Optional **Text**. Specifies the text to append to the end of the returned string to indicate that its limit has been surpassed.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
   
### Child elements

||
|:-----|
|[Column](column-element-view.md), [More](more-element-view.md), [Text](text-element-view.md)|
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

Note that the **Limit** element will not break words. For example,  `<Limit Len=3>Microsoft Corporation</Limit>` returns Microsoft, not Mic. 
  
## Example

The following example limits the text of the **Body** field to 250 characters and puts an ellipsis (" **...**") after the string if it is cut off.
  
```XML
<Limit Len="250" MoreText="..." AutoHyperLink="TRUE" 
  AutoNewLine="TRUE">
  <Column Name="Body"/>
</Limit>
```


