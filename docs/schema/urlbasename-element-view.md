---
title: "UrlBaseName Element (View)"
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
ms.assetid: 979ebe53-c76e-4f9e-96d4-2132cac502f8
description: "Last modified: March 09, 2015"
---

# UrlBaseName Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Renders the base name of a particular URL.
  
```
<UrlBaseName
  HTMLEncode = "TRUE" | "FALSE">
</UrlBaseName>
```
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes


|**Attribute**|**Description**|
|:-----|:-----|
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
   
### Child elements

||
|:-----|
|[Field](field-element-view.md), [LookupColumn](lookupcolumn-element-view.md)|
   
### Parent elements

||
|:-----|
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

This element is particularly useful in document library views.
  
Remember that Collaborative Application Markup Language (CAML) is case-sensitive; note the lowercase "rl" in **UrlBaseName**.
  
## Example

The following example uses the **UrlBaseName** element to construct the absolute URL for a thumbnail image in a picture library. 
  
```XML
<DisplayPattern>
   <HttpHost />
   <UrlDirName>
      <HTML>/</HTML>
      <LookupColumn URLEncodeAsURL="TRUE" Name="FileRef" />
   </UrlDirName>
   <HTML>/_t/</HTML>
   <UrlBaseName>
      <Field Name="EncodedAbsUrl" />
   </UrlBaseName>
   <HTML>_</HTML>
   <GetFileExtension>
      <Field Name="EncodedAbsUrl" />
   </GetFileExtension>
   <HTML>.jpg</HTML>
</DisplayPattern>
```

If the image file has a .jpg extension and is contained in a picture library on a subsite, the example creates a URL in the following form:
  
 `http://Server_Name/Subsite_Name/Library_Name/_t/File_Base_Name/_jpg.jpg`
  
## See also



[URL](url-element-view.md)
  
[UrlDirName](urldirname-element-view.md)

