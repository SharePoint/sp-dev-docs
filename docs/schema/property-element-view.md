---
title: "Property Element (View)"

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
ms.assetid: c01137cb-20ca-4574-b843-31d046388897
description: "Last modified: March 09, 2015"
---

# Property Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Returns the property from the context of the current [ForEach](foreach-element-view.md) loop. When a view or field is selected, the **Property** element can be used to retrieve a specific attribute value from it. 
  
```
<Property
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
..ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  OuterLookupField = "TRUE" | "FALSE"
  Select = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</Property>
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
|**Name** <br/> |Optional **Text**. Specifies the name of the property.  <br/> |
|**OuterLookupField** <br/> |Optional **Text**. Used in field definitions  <br/> |
|**Select** <br/> |Required **Text**. Specifies the name of the property to select.  <br/> |
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
   
### Remarks

The line  `<Property Select="."/>` returns the body of the element in the schema that is being enumerated. For example, within a **ForEach** statement such as  `<ForEach Select="CHOICES/CHOICE">`, specifying  `<Property Select="."/>` would return the text of one of the conditionals. 
  
If a property cannot be found, a subelement of the current element in the schema enumeration is evaluated whose name is equal to the text specified by **Select**. For example, if a **Field** element has no property called **Default**, then  `<Property Select="Default"/>` will also search for a subelement called **Default** and render its body text if found. 
  
## Example

The following line of code returns the **Name** property from the current field or view. 
  
```XML
<Property Select="Name"/>
```

## See also



[ListProperty Element (View)](listproperty-element-view.md)
  
[ProjectProperty Element (View)](projectproperty-element-view.md)

