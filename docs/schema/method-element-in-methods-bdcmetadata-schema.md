---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Method
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 70e87a9e-4959-0a7b-3f37-ddec36473ff4
---

# Method Element in Methods 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a method of an external content type.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<Method IsStatic = "Boolean" LobName = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Method>
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
<td align="left"><p>**IsStatic**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the execution of this method requires an external item (**EntityInstance**) to serve as a context for execution. If set to **true**, the method represents a static method and does not require a specific **EntityInstance** to provide context for execution. If set to **false**, the method represents an instance method and requires an **EntityInstance** to provide the context for execution.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LobName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the operation defined in the external system that is represented by this method.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of this method.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the method.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this method is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches this method in memory.</p>
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
<td align="left"><p>The localized display names of the method.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the method.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The access control list (ACL) of this method.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="filterdescriptors-element-in-method-bdcmetadata-schema.md">FilterDescriptors Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The filter descriptors of the method.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="parameters-element-in-method-bdcmetadata-schema.md">Parameters Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The parameters of the method. A method cannot have more than one return parameter.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="methodinstances-element-in-method-bdcmetadata-schema.md">MethodInstances Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The method instances of the method.</p></td>
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
<td align="left"><p><span sdata="link"><a href="methods-element-in-entity-bdcmetadata-schema.md">Methods Element in Entity (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A list of methods of an external content type.</p></td>
</tr>
</tbody>
</table>








