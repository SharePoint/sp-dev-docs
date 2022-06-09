---
title: Container element
description: Describes the Container element (LayoutDefinitions Schema), which specifies the layout for the External Data Parts.
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: b8da155c-7f37-461a-84ab-99a41b0720ea
---

# Container element 

(LayoutDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the layout for the External Data Parts.

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Layout`

**Schema**: LayoutDefinitions

```XML
<Container ContainerType = "String" FillParent = "Boolean"> </Container>
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
<th align="left">Attribute</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">**ContainerType**</td>
<td align="left">Required.</p>
<p>The container type.</p>
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
<td align="left">Stack</td>
<td align="left">Specifies that Office External Parts in this layout will be stacked vertically or horizontally.</td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left">**FillParent**</td>
<td align="left">Optional.</p>
<p>Specifies whether this layout element is maximized within its parent.</p>
<p>Attribute type: **Boolean**</td>
</tr>
</tbody>
</table>

### Child elements

| Element | Description |
| --- | --- |
|[CustomProperties element in UIelement (LayoutDefinitions schema)](customproperties-element-in-uielement-layoutdefinitions-schema)|The list of the custom properties.|
|[Children element in Container (LayoutDefinitions schema)](children-element-in-container-layoutdefinitions-schema)|The list of the Office External Parts in this layout.|

### Parent elements

None.








