---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content type definition schema, folder element
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 381be88e-111d-4e23-b851-0d38c38cc415
---

# Folder Element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the relative folder path for the content type's resource folder.

## Definition

```XML
<Folder
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
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**TargetName**</p></td>
<td align="left"><p>Optional **Text**. The relative folder path for the content type's resource folder.</p></td>
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

The resource folder is the storage location for any file, such as a document template, that is used by the content type.

## See also

- [ResourceFolder](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.spcontenttype.resourcefolder.aspx)
- [Content Type Definitions](content-type-definitions.md)
- [Content Types](http://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)








