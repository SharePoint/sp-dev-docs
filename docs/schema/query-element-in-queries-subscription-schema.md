---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2de9afb8-7c23-7f22-a48b-07a4f31154cc
---

# Query Element in Queries 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a **Finder** or **IDEnumerator** method instance to execute to populate the cache.

**Namespace**: http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

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

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-subscription-schema.md">LocalizedDisplayNames Element in MetadataObject (Subscription Schema)</a></span></p></td>
<td align="left"><p>A list of localized display names for this query.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-subscription-schema.md">Properties Element in MetadataObject (Subscription Schema)</a></span></p></td>
<td align="left"><p>This is not used by Business Connectivity Services in this release.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="filtervalues-element-in-query-subscription-schema.md">FilterValues Element in Query (Subscription Schema)</a></span></p></td>
<td align="left"><p>A list of filter values for the **Finder** or the **IDEnumerator** method instance.</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="queries-element-in-subscription-subscription-schema.md">Queries Element in Subscription (Subscription Schema)</a></span></p></td>
<td align="left"><p>The list of queries that contains this query.</p></td>
</tr>
</tbody>
</table>








