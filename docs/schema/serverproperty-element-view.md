---
title: "ServerProperty Element (View)"
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
ms.assetid: 9749a722-c4f3-447e-9576-50be55d8dcfd
description: "Last modified: March 09, 2015"
---

# ServerProperty Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a property that applies to a Web application.
  
```
<ServerProperty
  Default = "Text"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  Select = "Text"
  ShowField = "TRUE" | "FALSE"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</ServerProperty>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Default** <br/> |Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string ("").  <br/> |
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  <br/> |
|**Name** <br/> |Optional **Text**. Specifies the name of the server property.  <br/> |
|**Select** <br/> |Required **Text**. Specifies the name of the property to select.  <br/> |
|**ShowField** <br/> |Optional **Text**. The **ShowField** attribute can be set to the field name to display. By default, a hyperlinked text from the Title field of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list.  <br/> The following data types are allowed as targets of a **ShowField** attribute: **Text**, **Choice**, and **Counter**.  <br/> |
|**StripWS** <br/> |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  <br/> |
|**URLEncode** <br/> |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).  <br/> |
|**URLEncodeAsURL** <br/> |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.  <br/> |
   
### Child elements

||
|:-----|
|[Column](column-element-view.md)|
   
### Parent elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

