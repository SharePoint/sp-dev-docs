---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d334d1ef-f7a4-d709-3b9b-ce564aa60890
---

# Association Element in Associations 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a subscription association.

**Namespace**: http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

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
<td align="left"><p>The list of the localized display names of this subscription association.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-subscription-schema.md">Properties Element in MetadataObject (Subscription Schema)</a></span></p></td>
<td align="left"><p>Not used by Business Connectivity Services in this release.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="filtervalues-element-in-association-subscription-schema.md">FilterValues Element in Association (Subscription Schema)</a></span></p></td>
<td align="left"><p>The list of the filter values for the **Association** method instance execution.</p></td>
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
<td align="left"><p><span sdata="link"><a href="associations-element-in-subscription-subscription-schema.md">Associations Element in Subscription (Subscription Schema)</a></span></p></td>
<td align="left"><p>The **Associations** element that contains this subscription association.</p></td>
</tr>
</tbody>
</table>








