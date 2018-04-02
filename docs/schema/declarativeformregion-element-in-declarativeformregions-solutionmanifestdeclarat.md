---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0cb3c1b0-96c7-0f7c-5451-3c60c5b5aca7
---

# DeclarativeFormRegion Element in DeclarativeFormRegions 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **DOCS-LESSTHANDeclarativeFormRegionDOCS-GREATERTHAN** element is used to describe the form region in which external data is displayed in Microsoft Outlook 2010.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<FormRegion  xsl:type="DeclarativeFormRegion" InternalName = "String" Type = "String" ShowInspectorComposeMode = "Boolean" ShowInspectorReadMode = "Boolean" Title = "String" Name = "String" Description = "String"> </FormRegion>
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
<td align="left"><p>**InternalName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the form region.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required.</p>
<p>The type of the form region.</p>
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
<td align="left"><p>Adjoining</p></td>
<td align="left"><p>The form region is displayed at the bottom of the first page of a form.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Replacement</p></td>
<td align="left"><p>The form region replaces the default page of the form.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReplaceAll</p></td>
<td align="left"><p>The form region replaces the entire form.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Separate</p></td>
<td align="left"><p>Displayed as a full additional form page.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInspectorComposeMode**</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the form region is available in compose mode in Outlook.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInspectorReadMode**</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the form region is available in read mode in Outlook.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional.</p>
<p>The title of the form region.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the form region.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the form region.</p>
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
<td align="left"><p><span sdata="link"><a href="picture-element-in-declarativeformregion-solutionmanifestdeclarativeextensions-s.md">Picture Element in DeclarativeFormRegion (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANPictureDOCS-GREATERTHAN** element is used to describe the icon to use in Outlook 2010 for the form region.</p></td>
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
<td align="left"><p><span sdata="link"><a href="declarativeformregions-element-solutionmanifestdeclarativeextensions-schema.md">DeclarativeFormRegions Element (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DeclarativeFormRegions** element that contains this form region.</p></td>
</tr>
</tbody>
</table>








