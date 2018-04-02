---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 55db90e4-b32d-1e97-5909-7afa7152276f
---

# DeclarativeSolutionSettings Element 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DOCS-LESSTHANSolutionSettingsDOCS-GREATERTHAN** element is used to define the settings for the declarative solution, such as the ID, display name, description, and so on.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<SolutionSettings xsl:type="DeclarativeSolutionSettings" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance" CustomRibbonManager = "String" SolutionId = "String" SolutionDisplayName = "String" SolutionVersion = "String" Description = "String"> </SolutionSettings>
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
<td align="left"><p>**CustomRibbonManager**</p></td>
<td align="left"><p>Optional.</p>
<p>The custom ribbon manager that is used by the solution.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Required.</p>
<p>A unique identifier for this solution. This can be a GUID. In the log, the solution ID may be used to locate errors and warnings pertaining to this solution.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionDisplayName**</p></td>
<td align="left"><p>Required.</p>
<p>The display name of the solution. This is used in the user interface (UI), for example, in the taskpane.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionVersion**</p></td>
<td align="left"><p>Required.</p>
<p>The version of this solution. This attribute is not used by the product in its current release.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for this solution.</p>
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








