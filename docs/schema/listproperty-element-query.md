---
title: ListProperty element (Query)
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- Query schema
api_type:
- schema
ms.assetid: 43b14808-e65a-402a-8fd4-fb3dc133ea34
description: In CAML, returns the value of a specified column in the List of Lists table.
---

# ListProperty element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Returns the value of a specified column in the List of Lists table.

```XML
<ListProperty
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Select = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</ListProperty>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|Attribute|Description|
|:-----|:-----|
|**AutoHyperLink** |Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink, for example, `www.microsoft.com`.  |
|**AutoHyperLinkNoEncoding** |Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`) but without HTML encoding.  |
|**AutoNewLine** |Optional **Boolean**. **TRUE** to insert `<BR>` tags into the text stream and to replace multiple spaces with a nonbreaking space `&nbsp;`.  |
|**Default** |Optional **Text**. Sets the default **ProgID** for the application that created the list.  |
|**ExpandXML** |Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.  |
|**HTMLEncode** |Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.  |
|**Select** |Required **Text**. Specifies a field in the List of Lists table.  |
|**StripWS** |Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.  |
|**URLEncode** |Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, `%c3%ab` for character `ë`.  |
|**URLEncodeAsURL** |Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL and not to encode the forward slash (`/`).  |

### Child elements

None

### Parent elements

- [Value](value-element-query.md)

### Occurrences

- Minimum: 0
- Maximum: Unbounded
