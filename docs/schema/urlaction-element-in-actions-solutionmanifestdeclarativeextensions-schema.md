---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 83b560be-7aef-fb36-616d-16217334cf92
---

# UrlAction Element in Actions 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DOCS-LESSTHANCodeMethodActionDOCS-GREATERTHAN** element is used to execute a URL-based action in Microsoft Outlook 2010.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<UrlAction  Url = "String" Caption = "String" Tooltip = "String" Image = "String" DisplayLocations = "String" DisplayOrder = "Int" Scope = "String" Name = "String" Description = "String"> </UrlAction>
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
<td align="left"><p>**Url**</p></td>
<td align="left"><p>The full URL of the page that the user browses to when he or she clicks the action. A command can include parameters that will be populated with the contents of one or more fields in the external content type. In the URL that you type in this field, you can include placeholders for each parameter to use. Placeholders should be numbered with integers starting at zero (0, 1, 2, and so on) and should be of the form {number}. For example, the following sample URL provides two parameters, **p0** and **p1**:</p>
<p>`http://www.adventure-works.com/sample.aspx?p0={0}&amp;p1={1}`</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Caption**</p></td>
<td align="left"><p>The caption for the action. This is displayed as a caption for the action in the Outlook user interface.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Tooltip**</p></td>
<td align="left"><p>The tooltip for the action. This is displayed as a tooltip for the action in the Outlook user interface.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image**</p></td>
<td align="left"><p>The path to an icon file. The icon is displayed for the action in the Outlook user interface. The path should be relative to the location of the solution manifest.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayLocations**</p></td>
<td align="left"><p>The locations in the Outlook user interface where this action should be displayed. This attribute can be a combination of the following bit flags: **0** (none, action is not displayed anywhere), **1** (action is displayed on the external data parts menu), **2** (action is displayed on the item context menu), **4** (action is displayed on the ribbon).</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayOrder**</p></td>
<td align="left"><p>Used if the action is surfaced in a List External Data Part. Specifies the suggested position of this action among the other actions of this external content type in the menu.</p>
<p>Optional.</p>
<p>Attribute type: Int</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>Used if the action is surfaced in a List External Data Part. Specifies whether this action needs an item to be selected in a List External Data Part.</p>
<p>Optional.</p>
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
<td align="left"><p>ItemContext</p></td>
<td align="left"><p>Needs an item context. For example, an update action needs an item context to update an item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>StaticContext</p></td>
<td align="left"><p>Does not need an item context. For example, a create action does not need any item context.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>A name for this action.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for this action.</p>
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
<td align="left"><p><span sdata="link"><a href="parameters-element-in-actiondefinition-solutionmanifestdeclarativeextensions-sch.md">Parameters Element in ActionDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>Actions can take parameters. The **Parameters** element lists the parameters of the action.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><span sdata="link"><a href="actions-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md">Actions Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **Actions** element that contains this action.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








