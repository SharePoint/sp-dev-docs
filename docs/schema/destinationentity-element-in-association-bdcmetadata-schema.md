---
title: DestinationEntity Element in Association
description: Describes the DestinationEntity Element in Association and provides the elements and attributes.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.DestinationEntity
ms.localizationpriority: medium
ms.assetid: 15c53c3b-888d-67c7-af7d-ef36922eeebc
---

# DestinationEntity Element in Association

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the destination external content type in the **Association**.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
<DestinationEntity Namespace = "String" Name = "String"> </DestinationEntity>
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
<td align="left"><p>**Namespace**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the entity namespace.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the destination entity.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

| Element | Description |
| --- | --- |
| [Association Element in MethodInstances (BDCMetadata Schema)](association-element-in-methodinstances-bdcmetadata-schema.md) |
