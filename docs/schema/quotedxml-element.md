---
title: "QuotedXML element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9731bc10-8986-4597-97d5-eea87ea2962b
description: Used to HTML-decode and execute the Collaborative Application Markup Language (CAML) that the element contains. 
---

# QuotedXML element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used to HTML-decode and execute the Collaborative Application Markup Language (CAML) that the element contains. This can be useful if you want to put CAML somewhere that is intolerant of the concatenation characters ("&amp;"), for example, inside a hyperlink, an HTML attribute, or a Microsoft JScript string literal.
  
```XML
<QuotedXML>
</QuotedXML>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
## Example

In the following example, the **QuotedXML** element contains content that will be executed as CAML. 
  
```XML
<QuotedXML>
  &amp;lt;ListProperty Select=&amp;quot;Title&amp;quot;/&amp;gt;
</QuotedXML>
```


