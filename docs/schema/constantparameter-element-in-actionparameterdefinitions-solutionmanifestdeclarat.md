---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 12b3bdb6-09d0-b59a-e36c-6f8f628bfd27
---

# ConstantParameter element in ActionParameterDefinitions 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **ConstantParameter** element defines a constant parameter for an action.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<ConstantParameter  ValueType = "String" Value = "String" Name = "String" Description = "String"> </ConstantParameter>
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
<td align="left"><p>**ValueType**</p></td>
<td align="left"><p>The .NET type name of the parameter to be passed to the method of a code-based action. Must be one of the following:</p><br/>
<div class="tableSection">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>System.Boolean</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Byte</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.SByte</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Char</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Decimal</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Double</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Single</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int32</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt32</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int64</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt64</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int16</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt16</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Guid</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.DateTime</p></td>
</tr>
</tbody>
</table>
</div>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>The constant value of the parameter.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>A name for the constant parameter.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the parameter.</p>
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
<td align="left"><p><span sdata="link"><a href="parameters-element-in-actiondefinition-solutionmanifestdeclarativeextensions-sch.md">Parameters element in ActionDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **Parameters** element that contains all the parameters of an action.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>





