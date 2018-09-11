---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f50e24c6-674b-241f-5af6-1b6205be93be
---

# OBPart element in ArrayOfOBPart 

(LayoutDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an External Data Part.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Layout

**Schema**: LayoutDefinitions

```XML
<OBPart PartType = "String" QualifiedTypeName = "String" DataSourceName = "String" DataSourceOrigin = "String" Description = "String" Text = "String" Expanded = "Boolean" FillParent = "Boolean"> </OBPart>
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
<td align="left"><p>**PartType**</p></td>
<td align="left"><p>Required.</p>
<p>The type of the Office External Part.</p>
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
<td align="left"><p>InfoPath</p></td>
<td align="left"><p>The default Microsoft InfoPath Office External Part.</p></td>
</tr>
<tr class="even">
<td align="left"><p>List</p></td>
<td align="left"><p>The default List Office External Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Custom</p></td>
<td align="left"><p>A custom Office External Part.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**QualifiedTypeName**</p></td>
<td align="left"><p>Optional.</p>
<p>If PartType is Custom, you must provide this attribute. It specifies the fully qualified .NET Framework type name of the custom Office External Part.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DataSourceName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the data source to use for this Office External Part (for example, the name of the external content type's view, the **SpecificFinder** method instance).</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DataSourceOrigin**</p></td>
<td align="left"><p>Optional.</p>
<p>This is not used in the current release.</p>
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
<td align="left"><p>Context</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Container</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A brief phrase that describes what the Office External Part does, for use in ToolTips.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Optional.</p>
<p>The title of the Office External Part.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Expanded**</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the Office External Part is expanded when it is displayed for the first time in a Stack container.</p>
<p>Attribute type: **Boolean**. **True** if the External Data Part is expanded when it is displayed for the first time in a Stack container; otherwise, **false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FillParent**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies if this Office External Part is maximized within its parent container.</p>
<p>Attribute type: **Boolean**</p></td>
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
<td align="left"><p><span sdata="link"><a href="customproperties-element-in-uielement-layoutdefinitions-schema.md">CustomProperties element in UIElement (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The list of the custom properties of the Container or Office External Part.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="titlebar-element-in-obpart-layoutdefinitions-schema.md">TitleBar element in OBPart (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The UI and behavior of the title bar of the Office External Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actionnames-element-in-obpart-layoutdefinitions-schema.md">ActionNames element in OBPart (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The actions that are exposed by this Office External Part.</p></td>
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
<td align="left"><p><span sdata="link"><a href="children-element-in-container-layoutdefinitions-schema.md">Children element in Container (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>








