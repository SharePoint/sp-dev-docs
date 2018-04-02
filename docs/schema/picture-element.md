---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3ca1d9db-6066-46e4-921a-94f0756a6fc8
---

# Picture Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes the icon to use in Microsoft Outlook 2010.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<Picture IconFilePath = "String" Description = "String"> </Picture>
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
<td align="left"><p>**IconFilePath**</p></td>
<td align="left"><p>The path to the icon file on the file system. This path is relative to the path of the solution manifest file (Oir.config).</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for this picture.</p>
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
<td align="left"><p>**FormRegion**</p></td>
<td align="left"><p>The form region this picture is for.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OutlookFolder**</p></td>
<td align="left"><p>The folder this picture is for.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








