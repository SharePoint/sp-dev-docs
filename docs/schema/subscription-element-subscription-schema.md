---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1eaeefb2-8b18-bf8c-3594-f72ac27cd74d
---

# Subscription Element 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The top-level (root) element that defines a cache subscription.

**Namespace**: http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

**Schema**: Subscription

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
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-subscription-schema.md">Properties Element in MetadataObject (Subscription Schema)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="identities-element-in-subscription-subscription-schema.md">Identities Element in Subscription (Subscription Schema)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="queries-element-in-subscription-subscription-schema.md">Queries Element in Subscription (Subscription Schema)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="associations-element-in-subscription-subscription-schema.md">Associations Element in Subscription (Subscription Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

### Parent elements

None.








