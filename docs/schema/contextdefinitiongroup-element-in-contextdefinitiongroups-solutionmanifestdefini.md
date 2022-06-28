---
title: ContextDefinitionGroup Element in ContextDefinitionGroups
description: Outlines the ContextDefinitionGroup element, which defines a context definition group containing a list of context definitions for one of the Outlook Item Types
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 39f8840b-4970-041d-f0d8-13168662249c
---

# ContextDefinitionGroup Element in ContextDefinitionGroups

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a context definition group containing a list of context definitions for one of the Outlook Item Types such as Contact, Task, Post, or Calendar, or if showing data in a task pane, an EntityView.

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest`

**Schema**: SolutionManifestDefinitions

```XML
<ContextDefinitionGroup ItemType = "String" Description = "String"> </ContextDefinitionGroup>
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
<td align="left"><p>**ItemType**</p></td>
<td align="left"><p>Required.</p>
<p>The Outlook Item Type this context definition group represents.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="40%" />
<col width="60%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**EntityView**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook task pane.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OutlookAppointment**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook Appointment item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OutlookContact**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Contact item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OutlookPost**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Post item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OutlookTask**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Task item.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for this context definition group.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

|Element|Description|
|----------|-----------|
|[ContextDefinition Element in ContextDefinitionGroup (SolutionManifestDefinitions Schema)](contextdefinition-element-in-contextdefinitiongroup-solutionmanifestdefinitions.md)|Defines a context for an external content type that is of this Outlook Item Type.|

<br/>

### Parent elements
|Element|Description|
|----------|-----------|
|[ContextDefinitionGroups Element in SolutionDefinition (SolutionManifestDefinitions Schema)](contextdefinitiongroups-element-in-solutiondefinition-solutionmanifestdefinition.md)|The **ContextDefinitionGroups** element that contains this context definition group.|

<br/>

<br/>
