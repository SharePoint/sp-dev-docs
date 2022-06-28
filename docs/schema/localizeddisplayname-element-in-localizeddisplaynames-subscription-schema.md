---
title: LocalizedDisplayName Element in LocalizedDisplayNames (Subscription Schema)
description: Details on the LocalizedDisplayName Element in LocalizedDisplayNames (Subscription Schema)
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f6fd7c82-4d2b-12f4-7c42-dd11f48919bf
---

# LocalizedDisplayName Element in LocalizedDisplayNames (Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a localized display name of a metadata object.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**Schema**: Subscription

```XML
<LocalizedDisplayName LCID = "Integer"> </LocalizedDisplayName>
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
<td align="left"><p>**LCID**</p></td>
<td align="left"><p>Required.</p>
<p>The locale identifier (ID) of this localized display name.</p>
<p>Attribute type: **Integer**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

| Element | Description |
| --- | --- |
| [LocalizedDisplayNames Element in MetadataObject (Subscription Schema)](localizeddisplaynames-element-in-metadataobject-subscription-schema.md) | A list of localized display names. |
