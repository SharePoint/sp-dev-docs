---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b8e5572f-cf9d-f8c2-a271-e722a11bbfa3
---

# View Element in EntityInstanceDefinition 

(SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the **SpecificFinder** method instance of the external content type that should be run to get external data.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<View ViewName = "String" IsPrimary = "Boolean" Name = "String" Description = "String"> </View>
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
<td align="left"><p>**ViewName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the SpecificFinder method instance as defined in the BDC model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsPrimary**</p></td>
<td align="left"><p>Optional.</p>
<p>Has no semantic meaning but must always be set to **true**.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the view within the scope of this context definition.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the view.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

<br/>

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
<td align="left"><p><span sdata="link"><a href="promotedproperty-element-in-viewinstancedefinition-solutionmanifestdefinitions-s.md">PromotedProperty Element in ViewInstanceDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Creates a property mapping between properties of the external content type defined in the BDC model and the properties of the Outlook Item.</p></td>
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
<td align="left"><p><span sdata="link"><a href="entity-element-in-entities-solutionmanifestdefinitions-schema.md">Entity Element in Entities (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>The external content type this view this belongs to.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








