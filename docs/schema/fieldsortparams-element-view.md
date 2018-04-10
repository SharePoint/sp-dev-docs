---
title: "FieldSortParams Element (View)"
ms.

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
ms.assetid: 9ded692b-91e0-43aa-a142-12aaeeee8a90
description: "Last modified: March 09, 2015"
---

# FieldSortParams Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the sort direction on a list, rendering **Asc** or **Desc** based on whether the field has been sorted and on the current default sort direction for the field. Rendering of this field is conditional and depends on the current sorting URL sent in the request to the server. 
  
```
<FieldSortParams
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
..ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</FieldSortParams>
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

The following example creates a default URL for a sort on a list. The **FieldSortParams** element is used to return the sort direction, which is assigned to the **SORTINGFIELDS** attribute in the resulting <A> tag. 
  
```XML
<Default>
   <HTML><![CDATA[<A ID="diidSort]]></HTML>
   <Property Select='Name'/>
   <HTML><![CDATA[" TITLE=]]></HTML>
   <HTML>"Sort by </HTML>
   <Property Select='DisplayName' HTMLEncode='TRUE'/>
   <HTML><![CDATA[" SORTINGFIELDS="]]></HTML>
   <FieldSortParams/>
   <HTML><![CDATA[" HREF="javascript:" 
      OnClick='javascript:SubmitFormPost("]]></HTML>
   <ScriptQuote NotAddingQuote="TRUE">
      <PageUrl/>
      <HTML><![CDATA[?]]></HTML>
      <FieldSortParams/>
   </ScriptQuote>
   <HTML><![CDATA[");javascript:return false;'>]]></HTML>
   <Property Select='DisplayName' HTMLEncode="TRUE"/>
   <HTML><![CDATA[</A><IMG SRC="]]></HTML>
   <FieldSortImageURL/>
   <HTML><![CDATA[" ALT=]]></HTML>
   <Switch>
      <Expr>
         <GetVar Name='SortDir'/>
      </Expr>
      <Case Value='Asc'>
         <HTML>"Sort Ascending"</HTML>
      </Case>
      <Case Value='Desc'>
         <HTML>"Sort Descending"</HTML>
      </Case>
      <Default>
         <HTML>""</HTML>
      </Default>
   </Switch>
   <HTML><![CDATA[ BORDER=0>]]></HTML>
</Default>
```

## See also



[FieldFilterImageURL Element](fieldfilterimageurl-element.md)
  
[FieldSortImageURL Element](fieldsortimageurl-element.md)

