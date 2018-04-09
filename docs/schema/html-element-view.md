---
title: "HTML Element (View)"
ms.author: NormSohl
author: NormSohl
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
ms.assetid: 407484ef-5401-44b0-948c-7f5046fd9287
description: "Last modified: March 09, 2015"
---

# HTML Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Escapes contained HTML tags so that the Collaborative Application Markup Language (CAML) parser does not parse the tags.
  
```
<HTML>
</HTML>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Optional **Text**. Provides an identifier for the contents of the **HTML** element.  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following line illustrates how to escape HTML tags by using this element and a CDATA section.
  
```XML
<HTML><![CDATA[...HTML tags...]]></HTML>
```

## See also

#### Reference

[XML Element](../../collaborative-application-markup-language-caml-schemas/query-schema/xml-element.md)

