---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 427da5ae-bc81-34ae-84ad-b4d723650b9f
---

# DeclarativeContextDefinitionGroup Element 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DeclarativeContextDefinitionGroup** element derives from the **ContextDefinitionGroup** element. In intermediate declarative Microsoft Outlook 2010 solutions, this element is used to define a context definition group that contains a list of context definitions for one of the Outlook Item Types, such as Contact, Task, Post, or Calendar, or if showing data in a taskpane, an EntityView.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<ContextDefinitionGroup xsl:type="DeclarativeContextDefinitionGroup" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance" RibbonFileName = "String" ItemType = "String" Description = "String"> </ContextDefinitionGroup>
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
<td align="left"><p>**RibbonFileName**</p></td>
<td align="left"><p>The relative path to the ribbon file for this context. The path is relative to the location of the solution manifest file.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ItemType**</p></td>
<td align="left"><p>The Outlook Item Type that this context definition group represents.</p>
<p>Required.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>EntityView</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook taskpane.</p></td>
</tr>
<tr class="even">
<td align="left"><p>OutlookAppointment</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook Appointment item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>OutlookContact</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Contact item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>OutlookPost</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Post item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>OutlookTask</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Task item.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for this context definition group.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
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
<td align="left"><p><a href="https://docs.microsoft.com/en-us/sharepoint/dev/schema/declarativecontextdefinitiongroup-element-solutionmanifestdeclarativeextensions">ContextDefinition</a></p></td>
<td align="left"><p>The **ContextDefinition** element is used to define a context for an external content type that is of this Outlook Item Type.</p></td>
</tr>
</tbody>
</table>

### Parent elements

None.

<br/>


<br/>









