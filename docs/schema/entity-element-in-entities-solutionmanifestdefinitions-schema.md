---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 02ff2123-1176-8c8d-4f6b-3aa6962e2b4f
---

# Entity Element in Entities 

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines the external content type that this context definition is associated with.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<Entity EntityTypeName = "String" EntityTypeNamespace = "String" Name = "String" Description = "String"> </Entity>
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
<td align="left"><p>**EntityTypeName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the external content type as defined in the BDC model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EntityTypeNamespace**</p></td>
<td align="left"><p>Required.</p>
<p>The namespace this external content type belongs to, as defined in the BDC model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the external content type in the solution manifest. This value can be different from the name defined in the BDC model and is used to identify the external content type only within the scope of the solution manifest.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the external content type.</p>
<p>Attribute type: **String**</p></td>
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
<td align="left"><p><span sdata="link"><a href="view-element-in-entityinstancedefinition-solutionmanifestdefinitions-schema.md">View Element in EntityInstanceDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Specifies the **SpecificFinder** method instance of the external content type that should be run to get the external data.</p></td>
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
<td align="left"><p><span sdata="link"><a href="entities-element-in-contextdefinition-solutionmanifestdefinitions-schema.md">Entities Element in ContextDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Contains this external content type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








