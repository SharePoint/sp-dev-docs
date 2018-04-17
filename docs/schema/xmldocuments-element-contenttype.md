---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, xmldocuments element (contenttype)
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 90198d80-5f53-4f05-967e-40bb367b48ac
---

# XmlDocuments Element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains a collection of [XmlDocument](xmldocument-element-contenttype.md) elements.

## Definition

```XML
<XmlDocuments>
</XmlDocuments>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**None**</p></td>
<td align="left"><p></p></td>
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
<td align="left"><p><a href="xmldocument-element-contenttype.md">XmlDocument</a></p></td>
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
<td align="left"><p><a href="contenttype-element-contenttype.md">ContentType</a></p></td>
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

### Remarks

The **XmlDocuments** element contains a collection of **XmlDocument** elements.

You can include custom information in content type definitions by adding special XML nodes. These XML nodes are represented by the **XmlDocument** element in the content type definition and can be accessed programmatically through the object model. A content type can include any number of **XmlDocument** elements. The contents of each **XmlDocument** element can conform to any given schema; they only need to be valid XML.

For more information about using **XmlDocument** elements to encapsulate custom information within your content type, see [Custom Information in Content Types](http://msdn.microsoft.com/library/83cc5cea-0422-4115-b330-2283283718d7(Office.15).aspx).

## Example

The following example shows an **XmlDocuments** element that contains an **XmlDocument** element containing custom information that specifies which form templates to use in displaying this content type.

For more information on the actual information contained in the **XmlDocument** element, see [FormTemplates Schema Overview](http://msdn.microsoft.com/library/88de244c-8d40-4f4d-953d-c7bbbc1dac24(Office.15).aspx).

```XML
    <XmlDocuments>
      <XmlDocument NamespaceURI="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms">
        <FormTemplates xmlns="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms">
          <Display>DocumentLibraryForm</Display>
          <Edit>DocumentLibraryForm</Edit>
          <New>DocumentLibraryForm</New>
        </FormTemplates>
      </XmlDocument>
    </XmlDocuments>
```

## See also

- [Content Type Definitions](content-type-definitions.md)
- [Content Types](http://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)








