---
title: DocumentTemplate Element (ContentType)
manager: soliver
ms.date: 06/13/2022
description: Describes the DocumentTemplate Element and includes sections that describe attributes, child elements, and parent elements.
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, documenttemplate element
ms.localizationpriority: medium
ms.assetid: 7434d1f8-551a-425c-8b9b-d4e961cd4f5e
---

# DocumentTemplate Element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the document template for the content type. This is the file which SharePoint Foundation opens as a template when a user requests a new item of this content type.

## Definition

```XML
<DocumentTemplate
  TargetName="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
| --- | --- |
| **TargetName** | Optional **Text**. Specifies the path to the document template. This path can be absolute, relative to the server base URL, or relative to the content type's resource folder. |

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None.</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span><a href="contenttype-element-contenttype.md">ContentType Element (ContentType)</a></span></p></td>
</tr>
</tbody>
</table>

### Occurrences

|     |
| --- |
| Minimum: 0 |
| Maximum: 1 |

## Example

The following example specifies a document template for a content type. In this case, the path specified is relative to the server base URL.

```XML
    <ContentType
    …
      <DocumentTemplate TargetName="/_layouts/NewCTDoc.aspx" />
    </ContentType>
```

## See also

- [Content Type Definitions](content-type-definitions.md)
- [Content Types](https://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)
