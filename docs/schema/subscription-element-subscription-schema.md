---
title: Subscription element
manager: soliver
ms.date: 06/14/2022
description: Describes Subscription element and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 1eaeefb2-8b18-bf8c-3594-f72ac27cd74d
---

# Subscription element 

(Subscription schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The top-level (root) element that defines a cache subscription.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**schema**: Subscription

```XML
<Subscription EntityName = "String" EntityNamespace = "String" RefreshIntervalInMinutes = "Long" View = "String" Enabled = "Boolean" LobSystemInstanceName = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Subscription>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**EntityName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the external content type.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EntityNamespace**</p></td>
<td align="left"><p>Required.</p>
<p>The namespace that the external content type belongs to.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RefreshIntervalInMinutes**</p></td>
<td align="left"><p>Required.</p>
<p>The interval in minutes at which Microsoft Business Connectivity Services (BCS) refreshes the cache subscription. Cannot be less than 10 minutes. If set to less than 10 minutes, the value will be ignored by Business Connectivity Services.</p>
<p>Attribute type: **Long**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**View**</p></td>
<td align="left"><p>Required.</p>
<p></p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Enabled**</p></td>
<td align="left"><p>Optional.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LobSystemInstanceName**</p></td>
<td align="left"><p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

| Element | Description |
| --- | --- |
| [LocalizedDisplayNames element in MetadataObject (Subscription schema)](localizeddisplaynames-element-in-metadataobject-subscription-schema.md) |     |
| [Properties element in MetadataObject (Subscription schema)](properties-element-in-metadataobject-subscription-schema.md) |     |
| [Identities element in Subscription (Subscription schema)](identities-element-in-subscription-subscription-schema.md) |     |
| [Queries element in Subscription (Subscription schema)](queries-element-in-subscription-subscription-schema.md) |     |
| [Associations element in Subscription (Subscription schema)](associations-element-in-subscription-subscription-schema.md) |     |

### Parent elements

None.








