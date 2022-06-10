---
title: LobSystemInstance Element in LobSystemInstances (BDCMetadata Schema)
description: Details on the LobSystemInstance Element in LobSystemInstances (BDCMetadata Schema)
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.LobSystemInstance
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: a0c37891-ef4f-58af-445c-5ff4d5ad6cef
---

# LobSystemInstance Element in LobSystemInstances (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an external system instance.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
<LobSystemInstance Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </LobSystemInstance>
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the external system instance.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the external system instance.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this external system instance is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches the external system instance.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

  
| Element | Description |
| --- | --- |
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized names of this external system instance. |
| [Properties Element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md) | The properties of this external system instance. |

### Parent elements

  
| Element | Description |
| --- | --- |
| [LobSystemInstances Element in LobSystem (BDCMetadata Schema)](lobsysteminstances-element-in-lobsystem-bdcmetadata-schema.md) | A list of external system instances. |








