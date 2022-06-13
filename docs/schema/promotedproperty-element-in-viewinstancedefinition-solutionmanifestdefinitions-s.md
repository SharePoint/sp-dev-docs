---
title: PromotedProperty Element in ViewInstanceDefinition
description: Describes the PromotedProperty element in ViewInstanceDefinition and provides the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 12a4acb8-df31-bdca-1dea-b6534c7c6195
---

# PromotedProperty Element in ViewInstanceDefinition 

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies what data to get from the external system and keep up to date with respect to the corresponding item in Microsoft Outlook.

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest`

**Schema**: SolutionManifestDefinitions

```XML
<PromotedProperty ViewInstancePath = "String" OfficeItemPropertyName = "String" ReadOnly = "Boolean" Name = "String" Description = "String"> </PromotedProperty>
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
<td align="left"><p>**ViewInstancePath**</p></td>
<td align="left"><p>Required.</p>
<p>The return type descriptor name as defined in the view (the **SpecificFinder** method instance) in the BDC model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OfficeItemPropertyName**</p></td>
<td align="left"><p>Optional.</p>
<p>A name for the property in this solution. This name must match the property name defined later in the solution definition when defining Office Item Customizations.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether this property should be read-only in Outlook. If set to **true**, users cannot update this property in Outlook.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the property. This must be unique within the scope of this **ContextDefinition**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the property.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

None.

### Parent elements

  
| Element | Description |
| --- | --- |
| [View Element in EntityInstanceDefinition (SolutionManifestDefinitions Schema)](view-element-in-entityinstancedefinition-solutionmanifestdefinitions-schema.md) | The view this promoted property belongs to. |

<br/>

<br/>








