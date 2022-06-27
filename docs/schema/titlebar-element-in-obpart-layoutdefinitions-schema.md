---
title: TitleBar Element in OBPart
manager: soliver
ms.date: 06/14/2022
description: Describes TitleBar Element in OBPart and includes information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: b8f24906-53c6-cc28-9472-f0a507fec064
---

# TitleBar Element in OBPart 

(LayoutDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the user interface (UI) and behavior of the title bar of the Office External Part.

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Layout`

**Schema**: LayoutDefinitions

```XML
<TitleBar Visible = "Boolean" ShowCollapseExpand = "Boolean"> </TitleBar>
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
<td align="left"><p>**Visible**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the title bar is visible or hidden.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowCollapseExpand**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the Expand button or Collapse button is shown or hidden.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

| Element | Description |
| --- | --- |
| [OBPart Element in ArrayOfOBPart (LayoutDefinitions Schema)](obpart-element-in-arrayofobpart-layoutdefinitions-schema.md) | The Office External Part this title bar belongs to. |








