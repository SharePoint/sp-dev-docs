---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d8930948-e804-18ee-7c4b-b0bd39ccf62a
---

# SolutionSettings Element in SolutionDefinition 

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines the settings for this Microsoft Business Connectivity Services (BCS) solution such as the ID, display name, and description.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```
<SolutionSettings SolutionId = "String" SolutionDisplayName = "String" SolutionVersion = "String" AddInProgId = "String" LoadedOnDemand = "Boolean" Description = "String"> </SolutionSettings>
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
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Required.</p>
<p>A unique identifier for this solution. This can be a GUID. The solution ID may be used to locate in the log errors and warnings pertaining to this solution.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionDisplayName**</p></td>
<td align="left"><p>Required.</p>
<p>The display name of the solution. This will be used in the user interface (UI) for example, in the task pane.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionVersion**</p></td>
<td align="left"><p>Required.</p>
<p>The version of this solution. This attribute is not used by the product in its current release.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AddInProgId**</p></td>
<td align="left"><p>Optional.</p>
<p>This attribute is not used by the product in its current release.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**LoadedOnDemand**</p></td>
<td align="left"><p>Optional.</p>
<p>This attribute is not used by the product in its current release.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for this solution.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p><span sdata="link"><a href="solutiondefinition-element-solutionmanifestdefinitions-schema.md">SolutionDefinition Element (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>The solution definition these settings belong to.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








