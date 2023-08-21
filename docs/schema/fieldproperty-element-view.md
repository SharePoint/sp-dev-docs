---
title: FieldProperty element (View)
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- View schema
api_type:
- schema
ms.assetid: 91c9e1be-8915-4a4f-b94c-7674ff89c8f2
description: Specifies a property of a field.
---

# FieldProperty element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a property of a field.

```XML
<FieldProperty
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  Select = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</FieldProperty>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|        Attribute        |                                                                                               Description                                                                                                |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AutoHyperLink**           | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`).                                                                     |
| **AutoHyperLinkNoEncoding** | Optional **Boolean**. **TRUE** to surround text with `<A>` tags if the text appears like a hyperlink (for example, `www.microsoft.com`) but without HTML encoding.                                           |
| **AutoNewLine**             | Optional **Boolean**. **TRUE** to insert `<BR>` tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).                                                              |
| **Default**                 | Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string (`""`).                                                                               |
| **ExpandXML**               | Optional **Boolean**. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.                                   |
| **HTMLEncode**              | Optional **Boolean**. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities. |
| **Name**                    | Required **Text**. Specifies the name of the field property.                                                                                                                                                 |
| **Select**                  | Optional **Text**. Specifies the name of a property that applies to the property specified by the **Name** attribute.                                                                                        |
| **StripWS**                 | Optional **Boolean**. **TRUE** to remove white space from the beginning and end of the value returned by the element.                                                                                        |
| **URLEncode**               | Optional **Boolean**. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, `%c3%ab` for character `ë`.                                                               |
| **URLEncodeAsURL**          | Optional **Boolean**. Like **URLEncode**, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (`/`) are not encoded.                                      |

### Child elements

None

### Parent elements

Numerous

### Occurrences

- Minimum: 0
- Maximum: Unbounded

## Example

The following example uses a [Switch](switch-element-view.md) statement to evaluate whether the body of a field has rich text formatting. If rich text is applied, hyperlinks are automatically generated without encoding; otherwise, hyperlinks are encoded.

```XML
<Switch>
   <Expr>
      <FieldProperty Name="Body" Select="RichText" />
   </Expr>
   <Case Value="TRUE">
      <HTML><![CDATA[ <div> ]]></HTML>
      <Limit Len="250" AutoHyperLinkNoEncoding="TRUE" MoreText="...">
         <Column Name="Body" />
      </Limit>
      <HTML><![CDATA[ </div> ]]></HTML>
   </Case>
   <Default>
      <Limit Len="250" MoreText="..." AutoHyperLink="TRUE"
            AutoNewLine="TRUE">
         <Column Name="Body" />
      </Limit>
   </Default>
</Switch>
```
