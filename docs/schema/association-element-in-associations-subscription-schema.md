---
title: Association element in Associations
description: Association element in Associations represents a subscription association.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: d334d1ef-f7a4-d709-3b9b-ce564aa60890
---

# Association element in Associations 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a subscription association.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**Schema**: Subscription

```XML
<Association RefreshIntervalInMinutes = "Long" MethodInstanceName = "String" LobSystemInstanceName = "String" TargetSubscriptionName = "String" TargetView = "String" Enabled = "Boolean" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Association>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
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
<p>The time interval at which to refresh the cache. This value cannot be less than 10 minutes. If the value is set to less than 10 minutes, Microsoft Business Connectivity Services (BCS) ignores this value and uses the default value of 60 minutes.</p>
<p>Attribute type: **Long**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MethodInstanceName**</p></td>
<td align="left"><p>Required.</p>
<p>The **Association** method instance name that returns the related external items.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LobSystemInstanceName**</p></td>
<td align="left"><p>Required.</p>
<p>The external system name of the **Association** method instance.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TargetSubscriptionName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the target subscription that should contain these related external items. This subscription also must exist in the solution package.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TargetView**</p></td>
<td align="left"><p>Required.</p>
<p>The **SpecificFinder** view for the related external items.</p>
<p>Attribute type: <strong>String</strong></p></td>
</tr>
<tr class="even">
<td align="left"><p>**Enabled**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this subscription association is enabled. If not enabled, the **Association** method instance is not run and the cache is not populated with the related external items. If not specified, the association is enabled.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the subscription association.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the subscription association.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>This value is ignored by Business Connectivity Services in the current release.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

|Element|Description|
|---|---|
|[LocalizedDisplayNames element in MetadataObject (Subscription Schema)](/sharepoint/dev/schema/localizeddisplaynames-element-in-metadataobject-subscription-schema)|The list of the localized display names of this subscription association.|
|[Properties element in MetadataObject (Subscription Schema)](sharepoint/dev/schema/properties-element-in-metadataobject-subscription-schema)|Not used by Business Connectivity Services in this release.|
|[FilterValues element in Association (Subscription Schema)](/sharepoint/dev/schema/filtervalues-element-in-association-subscription-schema)|The list of the filter values for the **Association** method instance execution.|

### Parent elements

|Element|Description|
|---|---|
|[Associations element in Subscription (Subscription Schema)](/sharepoint/dev/schema/association-element-in-associations-subscription-schema)|The **Associations** element that contains this subscription association.|








