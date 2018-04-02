---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a5458eec-878b-4b20-715f-245660d09069
---

# DeclarativeAssociation Element 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DOCS-LESSTHANDeclarativeAssociationDOCS-GREATERTHAN** element derives from the **DOCS-LESSTHANAssociationDOCS-GREATERTHAN** element. In intermediate declarative Microsoft Outlook 2010 solutions, this element is used to describe an association of the external content type that the Outlook folder contains. Specifically, this element is used to set or get the Outlook property that maps to the entity instance reference of the association. If set, this is used by the External Item Picker functionality.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<Association  xsl:type="DeclarativeAssociation" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance"  DisplayNameOfficeItemPropertyName = "String" AssociationName = "String" EntityTypeNamespace = "String" EntityTypeName = "String" ReferenceOfficeItemPropertyName = "String" Name = "String" Description = "String"> </Association>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**DisplayNameOfficeItemPropertyName**</p></td>
<td align="left"><p>The display name of the <span class="ui">Office Item Property Name</span> from the Solution Manifest.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AssociationName**</p></td>
<td align="left"><p>The name of the association from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EntityTypeNamespace**</p></td>
<td align="left"><p>The name of the entity namespace from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EntityTypeName**</p></td>
<td align="left"><p>The entity name from the BDC model.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReferenceOfficeItemPropertyName**</p></td>
<td align="left"><p>The name of the Outlook property in which you want to store the entity instance reference of the association. Must match the name of an **OfficeItemProperty** in the Solution Manifest.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>A name for the association.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
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

None.


<br/>

<br/>







