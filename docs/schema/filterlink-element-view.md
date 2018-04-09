---
title: "FilterLink Element (View)"
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
ms.assetid: 4840227e-3207-4e29-8698-c65a9fa192ce
description: "Last modified: March 09, 2015"
---

# FilterLink Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns the URL for filtering a view; typically used in the toolbars that appear above lists.
  
```
<FilterLink
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
..ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Paged = "TRUE" | "FALSE"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</FilterLink>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AutoHyperLink** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com).  <br/> |
|**AutoHyperLinkNoEncoding** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.  <br/> |
|**AutoNewLine** <br/> |Optional **Boolean**. **TRUE** to insert <BR> tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).  <br/> |
|**Default** <br/> |Optional **Text**. Specifies the filter string to use in generating the hypertext reference (HREF) for a link to an item when the URL does not specify a  _Filter_ parameter. If empty, the link URL will not contain a  _Filter_ parameter.  <br/> |
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**Paged** <br/> |Optional **Boolean**. **TRUE** if items in the list are displayed page by page.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).  <br/> |
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
   
## Remarks

The **FilterLink** element returns a URL string like the following: 
  
```
http://Site_Name/Lists/Events/AllItems.aspx?Filter=1&amp;View=%7b4A760E71%2dEBF2%2d4A88%2d9B2E%2dCFDE10E1825A%7d
```

## Example

The following example uses the **FilterLink** element to construct a hyperlink for the filter icon, so that clicking the icon posts the URL for applying filter options in the list view. 
  
```XML
<HTML><![CDATA[ <a tabindex=2 ID=diidFilterButton class="ms-toolbar" 
   title=]]></HTML>
<HTML>"Filter"</HTML>
<HTML><![CDATA[ ACCESSKEY=L href="javascript:" 
   OnClick='javascript:SubmitFormPost("]]></HTML>
<ScriptQuote NotAddingQuote="TRUE">
   <FilterLink Paged="FALSE"/>
</ScriptQuote>
<HTML><![CDATA[");javascript:return false;'>
   <img src="/_layouts/images/tbfilter.gif" ID="tbbuttonstart1" 
   alt=]]></HTML>
<HTML>"Filter"</HTML>
<HTML><![CDATA[ border=0 width=16 height=16></a></HTML>
```


