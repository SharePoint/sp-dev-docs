---
title: Query Element in Queries
manager: soliver
description: Describes the Query element in Queries, which specifies a Finder or IDEnumerator method instance to execute to populate the cache.
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 2de9afb8-7c23-7f22-a48b-07a4f31154cc
---

# Query Element in Queries

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a **Finder** or **IDEnumerator** method instance to execute to populate the cache.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**Schema**: Subscription

```XML
<Query RefreshIntervalInMinutes = "Long" MethodInstanceName = "String" Enabled = "Boolean" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Query>
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
<td align="left"><p>**RefreshIntervalInMinutes**</p></td>
<td align="left"><p>Required.</p>
<p>The time interval in minutes at which to refresh the cache. This value cannot be less than 10 minutes. If set to less than 10 minutes, Microsoft Business Connectivity Services (BCS) ignores this value and uses the default refresh interval of 60 minutes.</p>
<p>Attribute type: **Long**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MethodInstanceName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **Finder** or **IDEnumerator** method instance defined in the model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Enabled**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this query is enabled. If not enabled, this query is not run.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of this query.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of this query.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>This attribute is not used by Business Connectivity Services in this release.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

|Element|Description|
| --- | --- |
|[LocalizedDisplayNames Element in MetadataObject (Subscription Schema)](localizeddisplaynames-element-in-metadataobject-subscription-schema.md)|A list of localized display names for this query.|
|[Properties Element in MetadataObject (Subscription Schema)](properties-element-in-metadataobject-subscription-schema.md)|This is not used by Business Connectivity Services in this release.|
|[FilterValues Element in Query (Subscription Schema)](filtervalues-element-in-query-subscription-schema.md)|A list of filter values for the **Finder** or the **IDEnumerator** method instance.|

### Parent elements

|Element|Description|
| --- | --- |
|[Queries Element in Subscription (Subscription Schema)](queries-element-in-subscription-subscription-schema.md)|The list of queries that contains this query.|
