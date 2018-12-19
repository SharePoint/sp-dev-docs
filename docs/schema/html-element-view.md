---
title: "HTML element (View)"
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
description: Escapes contained HTML tags so that the Collaborative Application Markup Language (CAML) parser does not parse the tags.
---

# HTML element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Escapes contained HTML tags so that the Collaborative Application Markup Language (CAML) parser does not parse the tags.
  
```XML
<HTML>
</HTML>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Optional **Text**. Provides an identifier for the contents of the **HTML** element.  <br/> |
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
## Example

The following line illustrates how to escape HTML tags by using this element and a CDATA section.
  
```XML
<HTML><![CDATA[...HTML tags...]]></HTML>
```

## See also

- [XML element](xml-element.md)

