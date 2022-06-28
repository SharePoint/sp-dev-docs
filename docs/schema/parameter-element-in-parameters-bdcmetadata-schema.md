---
title: Parameter Element in Parameters (BDCMetadata Schema)
description: Describes the Parameter element in Parameters (BDCMetadata Schema) and provides the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Parameter
ms.localizationpriority: medium
ms.assetid: 811cad0b-ba71-8be0-0765-3e0dec18a0d3
---

# Parameter Element in Parameters (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a parameter of a method.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
<Parameter Direction = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Parameter>
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
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>Required.</p>
<p>The direction of the parameter.</p>
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
<td align="left"><p>In</p></td>
<td align="left"><p>The represented **Parameter** is an input parameter.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Out</p></td>
<td align="left"><p>The represented parameter is an output parameter.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>InOut</p></td>
<td align="left"><p>The represented parameter is an input and output parameter. In C#, these correspond to "**ref**".</p></td>
</tr>
<tr class="even">
<td align="left"><p>Return</p></td>
<td align="left"><p>The represented parameter is a return parameter.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the parameter.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the parameter.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **Parameter** is used frequently.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements


| Element | Description |
| --- | --- |
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized names of the parameter. |
| [Properties Element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md) | The properties of the parameter. |
| [TypeDescriptor](typedescriptor-element-bdcmetadata-schema.md) | The root type descriptor of the parameter. |

### Parent elements


| Element | Description |
| --- | --- |
| [Parameters Element in Method (BDCMetadata Schema)](parameters-element-in-method-bdcmetadata-schema.md) | The **Parameters** element that contains this parameter. |
