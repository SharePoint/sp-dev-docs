---
title: "ListProperty Element (View)"


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
ms.assetid: 74139d44-48d0-4885-8c48-70404137178f
description: "Last modified: March 09, 2015"
---

# ListProperty Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the value of a specified column in the List of Lists table.
  
```
<ListProperty
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  ExpandXML = "TRUE" | "FALSE"
  ForInstance = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Select = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</ListProperty>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AutoHyperLink** <br/> |Optional **Boolean**. **TRUE** to surround text with **\<A\>** tags if the text appears like a hyperlink, for example, www.microsoft.com.  <br/> |
|**AutoHyperLinkNoEncoding** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.  <br/> |
|**AutoNewLine** <br/> |Optional **Boolean**. **TRUE** to insert **\<BR\>** tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).  <br/> |
|**Default** <br/> |Optional **Text**. Sets the default **ProgID** for the application that created the list.  <br/> |
|**ExpandXML** <br/> |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  <br/> |
|**ForInstance** <br/> |Optional **Boolean**. **TRUE** to return the number of items belonging to the current Meeting Instance ID by filtering on the InstanceID field. If the list does not support multiple-instance data, returns the total number of items in the list.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**Select** <br/> |Required **Text**. Specifies a field in the List of Lists table.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL and not to encode the forward slash ( **/**).  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded (1 within [Expr1](expr1-element-view.md) and [Expr2](expr2-element-view.md))  <br/> |
   
## Example

The following example defines the link to display when the number of items exceeds the limit set for the page through the [RowLimit](../../collaborative-application-markup-language-caml-schemas/list-schema/rowlimit-element-list.md) element. The example uses the **ListProperty** element to return the URL for the default view. 
  
```XML
<RowLimitExceeded>
   <HTML><![CDATA[<table class="ms-summarycustombody" cellpadding=0 
      cellspacing=0 border=0>
         <TR><TD Class="ms-vb"><a href="]]></HTML>
   <ListProperty Select='DefaultViewUrl'/>
   <HTML><![CDATA[" ID=onetidMoreEvts>]]></HTML>
   <HTML>(More Events...)</HTML>
   <HTML><![CDATA[</a></TD></TR>
      <tr><td height="8"><IMG SRC="/_layouts/images/blank.gif" width=1 
         height=8 alt=""></td></tr></table>]]></HTML>
</RowLimitExceeded>
```

## See also



[Property Element (View)](property-element-view.md)
  
[SetList Element (View)](setlist-element-view.md)

