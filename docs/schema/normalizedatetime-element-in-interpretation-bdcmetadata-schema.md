---
title: NormalizeDateTime element in Interpretation
description: NormalizeDateTime element in Interpretation specifies the rule used to convert the representation of a date and time value to another representation.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: bbae3bfa-0754-d576-2bee-1ac0e8508a57
---

# NormalizeDateTime element in Interpretation 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the rule used to convert the representation of a date and time value to another representation. For example, this rule can specify converting a value represented in Coordinated Universal Time (UTC) into a local time zone.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
<NormalizeDateTime LobDateTimeMode = "String"> </NormalizeDateTime>
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
<td align="left"><p>**LobDateTimeMode**</p></td>
<td align="left"><p>Required.</p>
<p>Specifies the conversion to apply.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>UTC</p></td>
<td align="left"><p>The value that is received from the external system is UTC (Coordinated Universal Time). If the value received is **Local**, it is converted to UTC. BDC sends UTC to the external system.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Local</p></td>
<td align="left"><p>The value received from the external system is **Local**. If the value received from the external system is **Local**, it will be converted to UTC. BDC sends **Local** to the external system.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Unspecified</p></td>
<td align="left"><p>The value sent by the external system has Unspecified kind. BDC assumes the value is in UTC by overwriting the kind to be UTC. BDC sends UTC values as Unspecified kind to the external system.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

|Element|Description|
|-------|-----------|
|[Interpretation element in TypeDescriptor (BDCMetadata Schema)](interpretation-element-in-typedescriptor-bdcmetadata-schema.md)|An **Interpretation** element that specifies the rules to apply to the data that is stored in the data structures represented by a **TypeDescriptor**.|








