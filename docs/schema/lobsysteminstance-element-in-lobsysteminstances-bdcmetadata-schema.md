---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.LobSystemInstance
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a0c37891-ef4f-58af-445c-5ff4d5ad6cef
---

# LobSystemInstance Element in LobSystemInstances 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an external system instance.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized names of this external system instance.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of this external system instance.</p></td>
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
<td align="left"><p><span sdata="link"><a href="lobsysteminstances-element-in-lobsystem-bdcmetadata-schema.md">LobSystemInstances Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A list of external system instances.</p></td>
</tr>
</tbody>
</table>








