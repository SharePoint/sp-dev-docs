---
title: Column element (View)
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- View schema
api_type:
- schema
ms.assetid: 577395b8-0a8d-4317-85cf-b0f674c93b92
description: Returns the raw data value for a particular field, as opposed to the formatted version provided by the Field element.
---

# Column element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Returns the raw data value for a particular field, as opposed to the formatted version provided by the [Field](field-element-view.md) element. In the case of a **Lookup** field, **Column** returns the local value (an ID number in the list that references another list), while the [LookupColumn](lookupcolumn-element-view.md) element returns the data from the foreign table.

```XML
<Column
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  Format="DateTime"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  ShowField = "Text"
  StripWS = "TRUE" | "FALSE"
  SubColumnNumber = Integer
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</Column>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|        **Attribute**        |                                                                                                                                                                                                                   **Description**                                                                                                                                                                                                                    |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AutoHyperLink**          | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`).                                                                                                                                                                                                                                                                                                        |
| **AutoHyperLinkNoEncoding** | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`) but without HTML encoding.                                                                                                                                                                                                                                                                              |
| **AutoNewLine**             | Optional **Boolean**. **TRUE** to insert `<BR>` tags into the text stream and to replace multiple spaces with a nonbreaking space (`&nbsp;`).                                                                                                                                                                                                                                                                                                 |
| **Default**                 | Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string (`""`).                                                                                                                                                                                                                                                                                                                 |
| **Format**                  | Optional **Text**. Controls the date formatting for date fields. Supported formats include **DateTime**, **DateOnly**, **TimeOnly**, **ISO8601**, **ISO8601Basic**, and **ISO8601Gregorian**.                                                                                                                                                                                                                                                   |
| **HTMLEncode**              | Optional **Boolean**. **TRUE** to convert embedded characters so that they're displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.                                                                                                                                                                                                                                    |
| **Name**                    | Optional **Text**. Allows the **Column** element to be used outside the field rendering context by supplying an ID (for example,  `<Column Name="_ID_"/>`).                                                                                                                                                                                                                                                                                   |
| **ShowField**               | Optional **Text**. The **ShowField** attribute can be set to the column name to display. By default, a hyperlinked text from the **Title** column of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list.  The following data types are allowed as targets of a **ShowField** attribute: **Text**, **Choice**, and **Counter**.|
| **StripWS**                 | Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.                                                                                                                                                                                                                                                                                                                         |
| **SubColumnNumber**         | Optional **Integer**.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **URLEncode**               | Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, `%c3%ab` for character `ë`).                                                                                                                                                                                                                                                                                               |
| **URLEncodeAsURL**          | Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) aren't encoded.                                                                                                                                                                                                                                                                         |

### Child elements

None

### Parent elements

Numerous

### Occurrences

- Minimum: 0
- Maximum: Unbounded (1 within [Limit](limit-element-view.md))

### Remarks

When an empty **Column** element (`<Column/>`) is used, it's sensitive to the current setting of the `DisplayMode` variable. The display mode is set implicitly according to the current command being used.

If a view or item is being displayed, `DisplayMode` is set to **Display**. If an item is being created from a form, `DisplayMode` is set to **New**. If an existing item is being edited, `DisplayMode` is set to **Edit**. The `DisplayMode` variable can be overridden in the page by setting it directly, for example, `<SetVar Name="DisplayMode">Edit</SetVar>`.

Using `<Column/>` to render a date field or a number field will render the data in the locale of the server because `<Column/>` renders numeric values according to the locale-specific rules of the server.

## See also

- [Column2 element (View)](column2-element-view.md)
- [Field element (View)](field-element-view.md)
- [LookupColumn element (View)](lookupcolumn-element-view.md)
