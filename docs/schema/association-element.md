---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0a4f3b7e-b3c7-4ffd-be1d-d97333f2df8e
---

# Association Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **Association** element is used to describe an association.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```
<Association AssociationName = "String" EntityTypeNamespace = "String" EntityTypeName = "String" ReferenceOfficeItemPropertyName = "String" Name = "String" Description = "String"> </Association>
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
<td align="left"><p>**AssociationName**</p></td>
<td align="left"><p>The name of the association from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EntityTypeNamespace**</p></td>
<td align="left"><p>The namespace name from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EntityTypeName**</p></td>
<td align="left"><p>The name of the external content type from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReferenceOfficeItemPropertyName**</p></td>
<td align="left"><p>The name of the **OfficeItemProperty** in the solution manifest that represents the entity instance reference for the association.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>The name of the association.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the association.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

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
<td align="left"><p>**Associations**</p></td>
<td align="left"><p>The **Associations** element that contains this association.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







