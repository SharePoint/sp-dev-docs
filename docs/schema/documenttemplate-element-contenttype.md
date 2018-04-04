---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, documenttemplate element
ms.prod: office-online-server
localization_priority: Normal
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

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**TargetName**</p></td>
<td align="left"><p>Optional Text. Specifies the path to the document template. This path can be absolute, relative to the server base URL, or relative to the content type's resource folder.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><span sdata="link"><a href="contenttype-element-contenttype.md">ContentType Element (ContentType)</a></span></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p></td>
</tr>
<tr class="even">
<td align="left"><p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

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
- [Content Types](http://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)







