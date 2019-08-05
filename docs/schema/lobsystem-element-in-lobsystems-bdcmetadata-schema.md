---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.LobSystem
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d4e58d7d-a628-8093-97fe-7c3136e8f6f2
---

# LobSystem Element in LobSystems 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents an external data source.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<LobSystem Type = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </LobSystem>
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
<td align="left"><p>**Type**</p></td>
<td align="left"><p>The type of the LobSystem.</p>
<p>Required.</p>
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
<td align="left"><p>Database</p></td>
<td align="left"><p>The represented external data source is a database.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DotNetAssembly</p></td>
<td align="left"><p>The represented external data source is a set of .NET Framework classes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Wcf</p></td>
<td align="left"><p>The represented external data source is a WCF Service endpoint.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebService</p></td>
<td align="left"><p>The represented external data source is a Web service. This has been deprecated; use Wcf instead.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Custom</p></td>
<td align="left"><p>The represented external data source has a custom connector implemented to manage the connection and data transfer.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>The name of the LobSystem.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>The default display name of the LobSystem.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Specifies whether the LobSystem is frequently used. If frequently used, Business Data Connectivity (BDC) service caches the LobSystem.</p>
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
<td align="left"><p>The localized names of the **LobSystem**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the properties of an **LobSystem**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the access control list (ACL) of an **LobSystem**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="proxy-element-in-lobsystem-bdcmetadata-schema.md">Proxy Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies a user-provided proxy that is identical to the one that would be generated if this element was not present.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="lobsysteminstances-element-in-lobsystem-bdcmetadata-schema.md">LobSystemInstances Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the external system instances for this external system.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="entities-element-in-lobsystem-bdcmetadata-schema.md">Entities Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the external content types in this external system.</p></td>
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
<td align="left"><p><span sdata="link"><a href="lobsystems-element-in-model-bdcmetadata-schema.md">LobSystems Element in Model (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies a list of external systems in this model.</p></td>
</tr>
</tbody>
</table>








