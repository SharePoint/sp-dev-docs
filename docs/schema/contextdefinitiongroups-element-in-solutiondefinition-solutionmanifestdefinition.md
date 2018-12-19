---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0ac81036-992e-d3da-d3ee-6a9aa52e0718
---

# ContextDefinitionGroups Element in SolutionDefinition 

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Lists the context definitions that are part of this Microsoft Business Connectivity Services (BCS) solution, grouped by the Outlook Item Type to which they refer. The manifest file can contain a context definition group containing a list of context definitions for each one of the Outlook Item Types such as Contact, Task, Post, or Calendar. If you want to show related external data in the context of a task pane, you can include an additional context definition group for a context named EntityView.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<ContextDefinitionGroups></ContextDefinitionGroups>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

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
<td align="left"><p><span sdata="link"><a href="contextdefinitiongroup-element-in-contextdefinitiongroups-solutionmanifestdefini.md">ContextDefinitionGroup Element in ContextDefinitionGroups (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Defines a context definition group containing a list of context definitions for one of the Outlook Item Types such as Contact, Task, Post, or Calendar, or if showing related data in a task pane, an EntityView.</p></td>
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
<td align="left"><p><span sdata="link"><a href="solutiondefinition-element-solutionmanifestdefinitions-schema.md">SolutionDefinition Element (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>The solution definition that contains these context definition groups.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








