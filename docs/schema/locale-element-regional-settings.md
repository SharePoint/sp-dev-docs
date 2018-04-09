---
title: "Locale Element (Regional Settings)"
ms.author: NormSohl
author: NormSohl
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

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Used in RGNLSTNG.XML (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033\XML) to specify a locale in the regional settings. 
  
```
<Locale
  ID = "Integer"
  Name = "Text">
</Locale>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Required **Integer**. Specifies the locale ID.  <br/> |
|**Name** <br/> |Required **String**. Contains the name of the locale.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|[Locales](locales-element-regional-settings.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

