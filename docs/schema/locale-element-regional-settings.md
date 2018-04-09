---
title: "Locale Element (Regional Settings)"


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
ms.assetid: 43003802-d5f7-4501-be81-c46ded2352fc
description: "Last modified: March 09, 2015"
---

# Locale Element (Regional Settings)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in RGNLSTNG.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033\XML) to specify a locale in the regional settings. 
  
```
<Locale
  ID = "Integer"
  Name = "Text">
</Locale>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Integer**. Specifies the locale ID.  <br/> |
|**Name** <br/> |Required **String**. Contains the name of the locale.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Locales](locales-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

