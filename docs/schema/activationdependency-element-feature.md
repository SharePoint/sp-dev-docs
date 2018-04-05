---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d0a43250-3ad2-4f55-8ac5-7d82e32eb9cb
---

# ActivationDependency Element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a Feature on which activation of the current Feature depends.

## Definition

```XML
<ActivationDependency 
  FeatureDescription = string 
  FeatureId = Guid 
  FeatureTitle = string 
  MinimumVersion = string 
  SolutionId = Guid 
  SolutionName = string 
  SolutionTitle = string 
  SolutionUrl = string>
</ActivationDependency>
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
<td align="left"><p>**FeatureDescription**</p></td>
<td align="left"><p>Optional **string**. The description of the Feature dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Required **Guid**. The ID of the Feature dependency.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FeatureTitle**</p></td>
<td align="left"><p>Optional **string**. The title of the Feature dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MinimumVersion**</p></td>
<td align="left"><p>Optional **string**. The minimum version of the Feature dependency. This attribute must use the pattern *n.n.n.n*, where each occurrence of *n* is a numeric value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Optional **Guid**. The ID of the solution dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionName**</p></td>
<td align="left"><p>Optional **string**. The name of the solution dependency.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionTitle**</p></td>
<td align="left"><p>Optional **string**. The title of the solution dependency.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SolutionUrl**</p></td>
<td align="left"><p>Optional **string**. The URL of the solution dependency.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="activationdependencies-element-feature.md">ActivationDependencies</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


## Remarks

Microsoft SharePoint Foundation does not support a cross-scope activation dependency if the current Feature depends upon another Feature at a more restrictive scope, or if the current Feature depends on a hidden Feature.

## Example

For an example of how this element is used, see [Feature.xml Files](feature-xml-files.md).








