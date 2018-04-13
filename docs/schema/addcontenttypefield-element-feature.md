---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cb04a3ac-f41a-4ffe-aaa1-d4bf3fb6347d
---

# AddContentTypeField element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the content type field to add during a Feature upgrade.

## Definition

```XML
<AddContentTypeField 
  ContentTypeId = string
  FieldId = string
  PushDown = TRUE | FALSE />
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
<td align="left"><p>**ContentTypeId**</p></td>
<td align="left"><p>Optional **string**. Specifies the content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FieldId**</p></td>
<td align="left"><p>Optional **string**. Specifies the field in the content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PushDown**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies whether the content type field should be applied to inheriting content types and lists.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="upgradeactions-element-feature.md">UpgradeActions element (Feature)</a></p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>








