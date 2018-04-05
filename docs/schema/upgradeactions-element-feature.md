---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5af24ac1-a290-454d-b32b-bc7f7a4634f0
---

# UpgradeActions Element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the upgrade actions for the Feature.

## Definition

```XML
<UpgradeActions 
  ReceiverAssembly = string
  ReceiverClass = string>
  <AddContentTypeField />
  <ApplyElementManifests>
    ...
  <CustomUpgradeActions>
    ...
  </CustomUpgradeActions>
  <MapFile />
  <VersionRange>
    ...
  </VersionRange>
</UpgradeActions>
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
<td align="left"><p>**ReceiverAssembly**</p></td>
<td align="left"><p>Optional **string**. Specifies the strong name of the assembly. This attribute may not be used when the Feature that is being upgraded is inside an SharePoint Add-in.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReceiverClass**</p></td>
<td align="left"><p>Optional **string**. Specifies the receiver class. This attribute may not be used when the Feature that is being upgraded is inside an SharePoint Add-in.</p></td>
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
<td align="left"><p><span sdata="link"><a href="addcontenttypefield-element-feature.md">AddContentTypeField Element (Feature)</a></span>,</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="applyelementmanifests-element-feature.md">ApplyElementManifests Element (Feature)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="customupgradeaction-element-feature.md">CustomUpgradeAction Element (Feature)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="mapfile-element-feature.md">MapFile Element (Feature)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="versionrange-element-feature.md">VersionRange Element (Feature)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="feature-element-feature.md">Feature Element (Feature)</a></span></p></td>
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
<td align="left"><p>Minimum: 0</p>
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>








