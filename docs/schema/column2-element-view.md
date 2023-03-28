---
title: Column2 element (View)
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- View schema
api_type:
- schema
ms.assetid: 1d9e0e0a-b1e7-4c12-a147-aab199ae681c
description: Used in rendering a hyperlink. In Microsoft SharePoint Foundation, hyperlinks are stored as two separate values.
---

# Column2 element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Used in rendering a hyperlink. In Microsoft SharePoint Foundation, hyperlinks are stored as two separate values. The actual URL value is stored as one value, and the descriptive text is stored as the other. In a **Link** field, `<Column/>` returns the value of the URL, and `<Column2/>` returns the descriptive text of the hyperlink.

```XML
<Column2
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  ShowField = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</Column2>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|        **Attribute**        |                                                                                                                                                                                                           **Description**                                                                                                                                                                                                            |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AutoHyperLink**           | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`).                                                                                                                                                                                                                                                                                             |
| **AutoHyperLinkNoEncoding** | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`) but without HTML encoding.                                                                                                                                                                                                                                                                   |
| **AutoNewLine**             | Optional **Boolean**. **TRUE** to insert `<BR>` tags into the text stream and to replace multiple spaces with a nonbreaking space (`&nbsp;`).                                                                                                                                                                                                                                                                                        |
| **Default**                 | Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string (`""`).                                                                                                                                                                                                                                                                                                       |
| **ExpandXML**               | Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.                                                                                                                                                                                                                                                           |
| **HTMLEncode**              | Optional **Boolean**. **TRUE** to convert embedded characters so that they're displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.                                                                                                                                                                                                                         |
| **Name**                    | Optional **Text**. Allows the **Column** element to be used outside the field rendering context by supplying an ID (for example,  `<Column Name="`_ID_`"/>`).                                                                                                                                                                                                                                                                        |
| **ShowField**               | Optional **Text**. The **ShowField** attribute can be set to the column name to display. By default, a hyperlinked text from the Title column of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list.   The following data types are allowed as targets of a **ShowField** attribute: **Text**, **Choice**, and **Counter**. |
| **StripWS**                 | Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.                                                                                                                                                                                                                                                                                                                |
| **URLEncode**               | Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, `%c3%ab` for character `ë`).                                                                                                                                                                                                                                                                                      |
| **URLEncodeAsURL**          | Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) aren't encoded.                                                                                                                                                                                                                                                              |

### Child elements

None

### Parent elements

Numerous

### Occurrences

- Minimum: 0
- Maximum: Unbounded

## Example

The following [Switch](switch-element-view.md) statement evaluates the **Column2** value and, if it's empty, sets the HTML encoding of the [Column](column-element-view.md) element value (in other words, of the URL) to **TRUE**. Otherwise, it sets the HTML encoding of the URL's descriptive text to **TRUE**.

```XML
<Switch>
  <Expr>
    <Column2/>
  </Expr>
  <Case Value="">
    <Column HTMLEncode="TRUE"/>
  </Case>
  <Default>
    <Column2 HTMLEncode="TRUE"/>
  </Default>
</Switch>
```

## See also

- [Column element (View)](column-element-view.md)
