---
title: "Column Element (View)"
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
ms.assetid: 577395b8-0a8d-4317-85cf-b0f674c93b92
description: "Last modified: March 09, 2015"
---

# Column Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the raw data value for a particular field, as opposed to the formatted version provided by the [Field](field-element-view.md) element. In the case of a **Lookup** field, **Column** returns the local value (an ID number in the list that references another list), while the [LookupColumn](lookupcolumn-element-view.md) element returns the data from the foreign table. 
  
```
<Column
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
    Default = "Text"
  Format="DateTime"
    HTMLEncode = "TRUE" | "FALSE"
    Name = "Text"
    ShowField = "Text" 
    StripWS = "TRUE" | "FALSE"
  SubColumnNumber = Integer
    URLEncode = "TRUE" | "FALSE"
    URLEncodeAsURL = "TRUE" | "FALSE">
</Column>
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
|**Format** <br/> |Optional **Text**. Controls the date formatting for date fields. Supported formats include **DateTime**, **DateOnly**, **TimeOnly**, **ISO8601**, **ISO8601Basic**, and **ISO8601Gregorian**.  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**Name** <br/> |Optional **Text**. Allows the **Column** element to be used outside the field rendering context by supplying an ID (for example,  `<Column Name="` _ID_ `"/>`).  <br/> |
|**ShowField** <br/> |Optional **Text**. The **ShowField** attribute can be set to the column name to display. By default, a hyperlinked text from the **Title** column of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list.  <br/> The following data types are allowed as targets of a **ShowField** attribute: **Text**, **Choice**, and **Counter**.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**SubColumnNumber** <br/> |Optional **Integer**.  <br/> |
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
|Minimum: 0  <br/> Maximum: Unbounded (1 within [Limit](limit-element-view.md))  <br/> |
   
### Remarks

Note that when an empty **Column** element (  `<Column/>)` is used, it is sensitive to the current setting of the  `DisplayMode` variable. The display mode is set implicitly according to the current command being used. If a view or item is being displayed,  `DisplayMode` is set to **Display**. If an item is being created from a form,  `DisplayMode` is set to **New**. If an existing item is being edited,  `DisplayMode` is set to **Edit**. The  `DisplayMode` variable can be overridden in the page by setting it directly, for example,  `<SetVar Name="DisplayMode">Edit</SetVar>`.
  
Using  `<Column/>` to render a date field or a number field will render the data in the locale of the server because  `<Column/>` renders numeric values according to the locale-specific rules of the server. 
  
## See also



[Column2 Element (View)](column2-element-view.md)
  
[Field Element (View)](field-element-view.md)
  
[LookupColumn Element (View)](lookupcolumn-element-view.md)

