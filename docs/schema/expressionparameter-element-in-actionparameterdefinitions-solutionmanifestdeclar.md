---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 696dbdc0-f11d-5cab-1ff0-8d5512018d42
---

# ExpressionParameter Element in ActionParameterDefinitions 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **ExpressionParameter** element defines a parameter for an action that can take a value from the context of the current item.

**Namespace**: 
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

**Schema**: SolutionManifestDeclarativeExtensions

```
<ExpressionParameter  EntityViewInstanceReference = "String" Expression = "String" Name = "String" Description = "String"> </ExpressionParameter>
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
<td align="left"><p>**EntityViewInstanceReference**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the primary view in the context.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Expression**</p></td>
<td align="left"><p>Required.</p>
<p>The field name in the view in dot notation. For example, **Customer.Name** or **Customer.Address.Zip**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the parameter.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the parameter.</p>
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
<td align="left"><p><span sdata="link"><a href="parameters-element-in-actiondefinition-solutionmanifestdeclarativeextensions-sch.md">Parameters Element in ActionDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **Parameters** element that contains this parameter.</p></td>
</tr>
</tbody>
</table>


<br/>

<br/>








