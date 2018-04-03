---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Model
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d7823090-b20d-2c96-c359-081c055d0e65
---

# Model Element 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the root element that represents an application definition. Models define external content types that are contained by external applications.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<Model Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Model>
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>The name of the **Model**.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>The default display name of the **Model**.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Specifies whether the **Model** is used frequently. If this is set to **true**, the **Model** is cached by the Business Data Connectivity (BDC) service.</p>
<p>Optional.</p>
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
<td align="left"><p>The localized names of the **Model**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the **Model**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The access control list (ACL) of the **Model**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="lobsystems-element-in-model-bdcmetadata-schema.md">LobSystems Element in Model (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The **LobSystems** contained inside this **Model**.</p></td>
</tr>
</tbody>
</table>

### Parent elements

None.








