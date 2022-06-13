---
title: Layout Element in Layouts
description: Describes the Layout element in Layouts and provides the elements and attributes.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 3cb10648-a1ac-9aba-5273-efc0aa34041c
---

# Layout Element in Layouts 

(SolutionManifestDeclarativeExtensions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **Layout** element is used to specify the location of the layout file that contains layout information for the external data part.

**Namespace**: 
`http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions`

**Schema**: SolutionManifestDeclarativeExtensions

```
<Layout  DisposeOnContextDeactivation = "Boolean" LayoutFileName = "String" Name = "String" Description = "String"> </Layout>
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
<td align="left"><p>**DisposeOnContextDeactivation**</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the layout resources should be released when the context is deactivated.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LayoutFileName**</p></td>
<td align="left"><p>Required.</p>
<p>The XML layout file name without the .xml extension.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the layout.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

  
| Element | Description |
| --- | --- |
| [Properties](https://msdn.microsoft.com/library/9c1b404f-2cab-313d-a1ec-529325bae676.aspx) | Can contain a property named \*\*AssociatedActionType\*\* to specify the type of action that is associated with this layout. Accepted values are Edit, Create, and ViewDetails. |

### Parent elements

  
| Element | Description |
| --- | --- |
| [Layouts Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)](layouts-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md) | The \*\*Layouts\*\* element that contains this layout. |

</br>

</br>






