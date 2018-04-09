---
title: "LookupColumn Element (View)"


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
ms.assetid: b0174c70-04ea-43ea-b4e7-ce584d2a6ab0
description: "Last modified: March 09, 2015"
---

# LookupColumn Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Functions similarly to the [Column](column-element-view.md) element but only valid when referring to a **Lookup** field. The only distinction between the **Column** and **LookupColumn** elements for **Lookup** fields is that **LookupColumn** retrieves the raw value of the column from the foreign list, while **Column** retrieves the raw value of the column in the local list. 
  
```
<LookupColumn
    HTMLEncode = "TRUE" | "FALSE"    IncludeVersions = "TRUE" | "FALSE" 
    Name = "Text"
    ShowField = "Text"
    StripWS = "TRUE" | "FALSE"
    URLEncode = "TRUE" | "FALSE"
    URLEncodeAsURL = "TRUE" | "FALSE">
</LookupColumn>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**IncludeVersions** <br/> |Optional **Boolean**.  <br/> |
|**Name** <br/> |Required **Text**. Specifies the name of the lookup column. Allows the **LookupColumn** element to be used outside the field rendering context by supplying an ID.  <br/> |
|**ShowField** <br/> |Optional **Text**. Specifies the field to be displayed in the list that is referenced through the **Lookup** field. If this attribute is not specified, the default is to display the value contained in the **Title** field.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL and not to encode the forward slash ("/").  <br/> |
   
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
|Minimum: 0  <br/> Maximum: Unbounded (1 within [Expr1](expr1-element-view.md), [Expr2](expr2-element-view.md), and [UrlBaseName](urlbasename-element-view.md))  <br/> |
   
### Remarks

In the case of a **Lookup** field called LookupTitle that points to the title of item 1 in an announcements list,  `<LookupColumn Name="LookupTitle"/>` would render "Get Started with SharePoint Foundation!" while  `<Column Name="LookupTitle"/>` would render "1". Consequently, in most situations involving **Lookup** fields, use the **LookupColumn** element instead of the [Column](column-element-view.md) element. The only time to use the **Column** element is when you need a raw reference to the ID of the item in the target list, perhaps for constructing your own link to the target item. 
  
## Example

The following example uses the **LookupColumn** element to return a value that is used in creating a complete URL for a page on the server. 
  
```XML
<HTML><![CDATA[ <a href="  ]]></HTML>
<HttpHost URLEncodeAsURL="TRUE" />
<LookupColumn URLEncodeAsURL="TRUE" />
<HTML><![CDATA[ ">  ]]></HTML>
```

## See also



[Column Element (View)](column-element-view.md)

