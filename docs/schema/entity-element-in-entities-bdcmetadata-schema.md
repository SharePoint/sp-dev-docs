---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Entity
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a8455bc4-12d8-85e0-146e-5d1d8579e1f5
---

# Entity Element in Entities 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an external content type.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<Entity Namespace = "String" Version = "String" EstimatedInstanceCount = "Integer" DefaultOperationMode = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Entity>

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
<td align="left"><p>**Namespace**</p></td>
<td align="left"><p>Required.</p>
<p>The namespace that this external content type belongs to.</p>
<p>Attribute type: **String**</p>
<p>**Note**: The namespace should not contain the special character "**DOCS-ASTERISK**".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Required.</p>
<p>The version number of this external content type.</p>
<p>Attribute type: **String**</p>
<p>**Warning**: When the BDC model changes, you must increase the version number of the external content type. If the structure of an external content type changes, you should increase the major number. Examples of structural changes include adding a field to a **SpecificFinder** or changing an identifier field. If the change does not affect the structure of the external content type, for example, when adding a creator method, changing connection information, or when changing names of **LobSystems** and type descriptors, you should change the build number and revision number.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EstimatedInstanceCount**</p></td>
<td align="left"><p>Optional.</p>
<p>The estimated number of external items contained by the external system.</p>
<p>Default value: 10000</p>
<p>Attribute type: **Integer**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultOperationMode**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies the default behavior when interacting with the external system while creating, deleting, updating, or reading external items.</p>
<p>Default value: Default</p>
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
<td align="left"><p>Online</p></td>
<td align="left"><p>Bypass the cached external items for all operations and interact with the external system directly.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Cached</p></td>
<td align="left"><p>Perform <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> operations directly against the cached external items. For <strong>Read</strong> operations, if the requested external items are available in the cache, use the external items in the cache. Otherwise, bypass the cache to obtain the external items from the external system, and put it in the cache for later use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Offline</p></td>
<td align="left"><p>Perform <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> operations against only the cached external items.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Use the System default behavior. This uses Cached mode if the environment supports caching external items.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the external content type.</p>
<p>Attribute type: **String**</p>
<p>**Note**: The name of an external content type should not contain the asterisk special character "**DOCS-ASTERISK**".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the external content type.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this external content type will be frequently used. If set to **true**, the Business Data Connectivity (BDC) service will cache this external content type in memory.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p>The localized display names of this external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of this external content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The access control list (ACL) of this external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="identifiers-element-in-entity-bdcmetadata-schema.md">Identifiers Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The identifiers of the external content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="methods-element-in-entity-bdcmetadata-schema.md">Methods Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The methods of the external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="associationgroups-element-in-entity-bdcmetadata-schema.md">AssociationGroups Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The association groups of the external content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actions-element-in-entity-bdcmetadata-schema.md">Actions Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The actions of the external content type.</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p><span sdata="link"><a href="entities-element-in-lobsystem-bdcmetadata-schema.md">Entities Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The list of external content types in this external system.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [What Are External Content Types?](http://msdn.microsoft.com/library/2d8d2614-faaa-4ba2-a897-615a383c36a9(Office.15).aspx)








