---
title: "Language element (Regional Settings)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Regional Settings schema
api_type:
- schema
ms.assetid: 7c03b64c-4b27-4a2d-9b36-c0e0a9ebcadb
description: Used in RGNLSTNG.XML to specify a natural language in the regional settings, or used within a field display pattern to render a language name.
---

# Language element (Regional Settings)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in RGNLSTNG.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033\XML) to specify a natural language in the regional settings, or used within a field display pattern to render a language name.
  
```XML
<Language
   HTMLEncode = "TRUE" | "FALSE" 
   ID = "Integer"
   Name = "Text">
</Language>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**HTMLEncode** <br/> |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities. Used in field display patterns.  <br/> |
|**ID** <br/> |Optional **Integer**. Specifies the locale identifier (LCID) for the language. Used in RGNLSTNG.XML.  <br/> |
|**Name** <br/> |Optional **Text**. Specifies the name of the language. Used in RGNLSTNG.XML.  <br/> |
   
### Child elements

- [Column](column-element-view.md)
   
### Parent elements

- [DisplayPattern](displaypattern-element-list.md)
- [Languages](languages-element-regional-settings.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
### Remarks

The **Language** element contains no [Column](column-element-view.md) subelement when used within the [Languages](languages-element-regional-settings.md) collection of the RGNLSTNG.XML file. 
  

