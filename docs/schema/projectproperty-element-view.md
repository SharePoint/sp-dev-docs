---
title: "ProjectProperty element (View)"
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- View schema
api_type:
- schema
ms.assetid: b334ab94-ecf1-4fe2-bfb7-20be79d5b072
description: Used to return a global property of the current SharePoint site.
---

# ProjectProperty element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **ProjectProperty** element can be used to return a global property of the current SharePoint site.

```XML
<ProjectProperty
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
</ProjectProperty>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|          Attribute          |                                                                                                 Description                                                                                                  |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AutoHyperLink**           | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`).                                                                     |
| **AutoHyperLinkNoEncoding** | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`) but without HTML encoding.                                           |
| **AutoNewLine**             | Optional **Boolean**. **TRUE** to insert `<BR>` tags into the text stream and to replace multiple spaces with a nonbreaking space (`&nbsp;`).                                                                |
| **Default**                 | Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string (`""`).                                                                               |
| **ExpandXML**               | Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.                                   |
| **HTMLEncode**              | Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities. |
| **Select**                  | Required **Text**. Specifies the name of the property to select.                                                                                                                                             |
| **StripWS**                 | Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.                                                                                        |
| **URLEncode**               | Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, `%c3%ab` for character `ë`).                                                              |
| **URLEncodeAsURL**          | Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) are not encoded.                                      |

### Child elements

None

### Parent elements

Numerous

### Occurrences

- Minimum: 0
- Maximum: Unbounded

## Example

The following line of code returns the **Title** property from the current website.

```XML
<ProjectProperty Select="Title"/>
```

## See also

- [ListProperty element (View)](listproperty-element-view.md)
- [Property element (View)](property-element-view.md)
