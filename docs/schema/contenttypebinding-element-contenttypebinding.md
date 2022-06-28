---
title: ContentTypeBinding Element (ContentTypeBinding)
description: Outlines information, a definition, elements and attributes for the ContentTypeBinding element in Sharepoint.
manager: soliver
ms.date: 06/07/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 0e8825a9-29a0-48ee-bf97-2276e786fb46
---

# ContentTypeBinding Element (ContentTypeBinding)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a content type to provision on a list defined in the onet.xml schema.

## Definition

```XML
<ContentTypeBinding
    ContentTypeId="Text"
    ListUrl="Text"
    RootWebOnly="TRUE" | "FALSE"
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
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>Required **Text**. A string that represents the content type ID of the site content type to add to the specified list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListUrl**</p></td>
<td align="left"><p>Required **Text**. A string that represents the Web-relative path to the list to which to add the content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to associate this binding only on the root website in a site collection.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

[Elements Element (ContentTypeBinding)](elements-element-contenttypebinding.md)

### Remarks

Lists defined in the onet.xml schema cannot be modified directly.

## Example

Following is an example of the **ContentTypeBinding** element specifying the content type to bind to the specified list.

```XML
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
        <ContentTypeBinding ContentTypeId="0x010102" ListUrl="Shared Documents" />
        <ContentTypeBinding ContentTypeId="0x010108" ListUrl="Shared Documents" />
    </Elements>
```

## See also

- [Content Type Bindings](content-type-bindings.md)
