---
title: "PageUrl Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: 391d3fbe-d080-4e53-811f-df8e2642b12f
description: "Last modified: March 09, 2015"
---

# PageUrl Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the absolute, encoded URL of the current page. 
  
```
<PageUrl
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
..ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE"
    WebRel = "TRUE" | "FALSE">
</PageUrl>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AutoHyperLink** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com).  <br/> |
|**AutoHyperLinkNoEncoding** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.  <br/> |
|**AutoNewLine** <br/> |Optional **Boolean**. **TRUE** to insert <BR> tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).  <br/> |
|**Default** <br/> |Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string ("").  <br/> |
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
|**WebRel** <br/> |Optional **Boolean**. **TRUE** to specify that the URL is a site-relative URL.  <br/> |
   
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
   
## Example

The following example uses the **PageUrl** element to return the URL of the current page and surrounds the column title with a link for filtering. 
  
```XML
<HTML><![CDATA[ <A ID="diidSort ]]></HTML>
<Property Select="Name" />
<HTML><![CDATA[ " TITLE= ]]></HTML>
<HTML>"Sort by </HTML>
<Property Select="DisplayName" HTMLEncode="TRUE" />
<HTML><![CDATA[ " SORTINGFIELDS=" ]]></HTML>
<FieldSortParams />
<HTML><![CDATA[ " HREF="javascript:" 
   OnClick='javascript:SubmitFormPost(" ]]></HTML>
<ScriptQuote NotAddingQuote="TRUE">
   <PageUrl />
   <HTML><![CDATA[ ? ]]></HTML>
   <FieldSortParams />
</ScriptQuote>
<HTML><![CDATA[ ");javascript:return false;'> ]]></HTML>
<Property Select="DisplayName" HTMLEncode="TRUE" />
<HTML><![CDATA[ </A>]]></HTML>
```


