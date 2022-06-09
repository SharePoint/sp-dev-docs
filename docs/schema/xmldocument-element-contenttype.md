---
title: XmlDocument Element (ContentType)
description: Describes the XmlDocument element (ContentType) and provides the element's definition, attributes, parent elements, remarks, and an example.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, xmldocument element (contenttype)
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 8244b782-90c4-42b1-b603-8d858e348ae4
---

# XmlDocument Element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a single XML document that is included in the content type.

## Definition

```XML
<XmlDocument
  NamespaceURI="Text" >
</XmlDocument>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
| --- | --- |
| **NamespaceURI** | Optional **Text**. Specifies the URI to the schema namespace for the contents of this **XmlDocument** element. |

### Child elements

None

### Parent elements

- [XmlDocuments](xmldocuments-element-contenttype.md)

### Occurrences

- Minimum: 0 
- Maximum: No limit

### Remarks

You can include custom information in content type definitions by adding special XML nodes. These XML nodes are represented by the **XMLDocument** element in the content type definition and can be accessed programmatically through the object model. A content type can include any number of **XMLDocument** elements. The contents of each **XMLDocument** element can conform to any given schema; they only need be valid XML.

For more information about using **XmlDocument** elements to encapsulate custom information within your content type, see [Custom Information in Content Types](https://msdn.microsoft.com/library/83cc5cea-0422-4115-b330-2283283718d7(Office.15).aspx).

## Example

The following example shows an **XmlDocument** element containing custom information that specifies which form templates to use in displaying this content type.

For more information about the actual information contained in the **XmlDocument** element, see [FormTemplates Schema Overview](https://msdn.microsoft.com/library/88de244c-8d40-4f4d-953d-c7bbbc1dac24(Office.15).aspx).

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
- [Content Types](https://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)









