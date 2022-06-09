---
title: XmlDocuments Element (ContentType)
description: Describes the XmlDocuments element (ContentType) and provides the element's definition, child elements, parent elements, remarks, and an example.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, xmldocuments element (contenttype)
ms.prod: sharepoint
ms.localizationpriority: medium
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

None

### Child elements

- [XmlDocument](xmldocument-element-contenttype.md)

### Parent elements

- [ContentType](contenttype-element-contenttype.md)

### Occurrences

- Minimum: 0 
- Maximum: 1

### Remarks

The **XmlDocuments** element contains a collection of **XmlDocument** elements.

You can include custom information in content type definitions by adding special XML nodes. These XML nodes are represented by the **XmlDocument** element in the content type definition and can be accessed programmatically through the object model. A content type can include any number of **XmlDocument** elements. The contents of each **XmlDocument** element can conform to any given schema; they only need to be valid XML.

For more information about using **XmlDocument** elements to encapsulate custom information within your content type, see [Custom Information in Content Types](https://msdn.microsoft.com/library/83cc5cea-0422-4115-b330-2283283718d7(Office.15).aspx).

## Example

The following example shows an **XmlDocuments** element that contains an **XmlDocument** element containing custom information that specifies which form templates to use in displaying this content type.

For more information on the actual information contained in the **XmlDocument** element, see [FormTemplates Schema Overview](https://msdn.microsoft.com/library/88de244c-8d40-4f4d-953d-c7bbbc1dac24(Office.15).aspx).

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








