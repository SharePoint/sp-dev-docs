---
title: "Field Element (View)"
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
ms.assetid: 491dd867-2dea-485e-a0b8-b33e53094bba
description: "Last modified: March 09, 2015"
---

# Field Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the formatted value of a field for use within a view definition. 
  
```
<Field
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</Field>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AutoHyperLink** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears to be a hyperlink (for example, www.microsoft.com).  <br/> |
|**AutoHyperLinkNoEncoding** <br/> |Optional **Boolean**. **TRUE** to surround text with <A> tags if the text appears to be a hyperlink (for example, www.microsoft.com) but without HTML encoding.  <br/> |
|**AutoNewLine** <br/> |Optional **Boolean**. **TRUE** to insert <BR> tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**Name** <br/> |Optional **Text**. Allows the **Field** element to be used outside the field rendering context by supplying an ID (for example,  `<Field Name="` _ID_ `"/>`).  <br/> |
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
|Minimum: 0  <br/> Maximum: Unbounded (1 within [UrlBaseName](urlbasename-element-view.md))  <br/> |
   
### Remarks

Use the **Field (View)** element to return a formatted field value for display within a view, and use the [Column](column-element-view.md) element to return the raw data value of the field. The **Field** element does not specify attributes when it is used within [UrlBaseName](urlbasename-element-view.md), and only **Name** is specified when it is used within [Expr1](expr1-element-view.md), [Expr2](expr2-element-view.md), or [Row](row-element-site.md).
  
To create a custom field definition as a pluggable Feature that is based on a default SharePoint Foundation field type and that can be reused across sites and lists, use the [Field (Field)](../../sharepoint-features-schemas/field-definitions/field-element-field.md) element to define a custom [site column](http://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432%28Office.15%29.aspx). To create a custom field definition for a list definition based on a default field type, use the [Field (List - Definition)](field-element-list.md) element within a [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file. To create a [custom field type](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13%28Office.15%29.aspx) that implements a custom class for special data validation and field rendering, use the [Field (Field Types)](../../other-sharepoint-schemas/field-types-schema/field-element-field-types.md) element. 
  

