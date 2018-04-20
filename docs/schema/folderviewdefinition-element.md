---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f50b6453-1324-4684-afe7-b2a524d4da16
---

# FolderViewDefinition Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes a folder view in Microsoft Outlook 2010.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<FolderViewDefinition ViewName = "String" ViewType = "ViewType" IsDefault = "Boolean" ViewFileName = "String" Name = "String" Description = "String"> </FolderViewDefinition>
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
<td align="left"><p>**ViewName**</p></td>
<td align="left"><p>The name of the Outlook view.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ViewType**</p></td>
<td align="left"><p>The type of Outlook view to use.</p>
<p>Required.</p>
<p>The following are the possible values for this attribute.</p>
<ul>
<li><p>**TableView**</p></li>
<li><p>**CardView**</p></li>
<li><p>**CalendarView**</p></li>
<li><p>**IconView**</p></li>
<li><p>**TimelineView**</p></li>
<li><p>**BusinessCardView**</p></li>
<li><p>**DailyTaskListView**</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsDefault**</p></td>
<td align="left"><p>Specifies whether data is displayed in this view by default.</p>
<p>Required.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ViewFileName**</p></td>
<td align="left"><p>The Outlook view definition file name with the .ovd extension.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>The name of the Outlook view.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the view.</p>
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
<td align="left"><p>**Views**</p></td>
<td align="left"><p>Contains this view.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








