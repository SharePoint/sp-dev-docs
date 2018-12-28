---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Parameter
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 811cad0b-ba71-8be0-0765-3e0dec18a0d3
---

# Parameter Element in Parameters 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a parameter of a method.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

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
<td align="left"><p>The localized names of the parameter.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the parameter.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="https://docs.microsoft.com/en-us/sharepoint/dev/schema/typedescriptor-element-bdcmetadata-schema">TypeDescriptor</a></p></td>
<td align="left"><p>The root type descriptor of the parameter.</p></td>
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
<td align="left"><p><span sdata="link"><a href="parameters-element-in-method-bdcmetadata-schema.md">Parameters Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The **Parameters** element that contains this parameter.</p></td>
</tr>
</tbody>
</table>








