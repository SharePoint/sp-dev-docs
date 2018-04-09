---
title: "HttpVDir Element (View)"


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
ms.assetid: b77312e4-d455-45e8-a087-19f4b30dfb9e
description: "Last modified: March 09, 2015"
---

# HttpVDir Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the root directory of the current subsite. For example, for  `http://myserver/myweb/default.aspx`, the **HttpVDir** element would return  `http://myserver/myweb/`.
  
```
<HttpVDir
  CurrentWeb = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</HttpVDir>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**CurrentWeb** <br/> |Optional **Boolean**.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
   
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
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example defines the **More Items** link to display when the number of items in the list exceeds the limit set with the [RowLimit](../../collaborative-application-markup-language-caml-schemas/list-schema/rowlimit-element-list.md) element for number of items to display on a page. The example uses the **HttpVDir** element to construct the full path for an image file. 
  
```XML
<RowLimitExceeded>
   <HTML><![CDATA[ 
      <TABLE class="ms-summarystandardbody" width="100%" border=0 
            rules=rows>
         <TR><TD Class="ms-vb"><a href="]]></HTML>
   <ListProperty Select="DefaultViewUrl"/>
   <HTML><![CDATA[ " ID=onetidMore>]]></HTML>
   <HTML>(More Items...)</HTML>
   <HTML><![CDATA[</a></TD></TR><tr><td height="8"><img src="]]></HTML>
   <HttpVDir/>
   <HTML><![CDATA[
      /_layouts/images/blank.gif" width="1" height="8" alt="">
      </td></tr></TABLE>]]></HTML>
</RowLimitExceeded>
```

## See also



[HTMLBase Element](../../collaborative-application-markup-language-caml-schemas/general-schema/htmlbase-element.md)


[HttpPath Element (View)](httppath-element-view.md)

