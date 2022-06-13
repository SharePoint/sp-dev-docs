---
title: ClientWebPart element (ElementDefinitionCollection complexType)
description: Describes the definition, element, type, and attribute information for ClientWebPart element (ElementDefinitionCollection complexType).
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 591cae5f-359c-267b-6cd6-27f45ed437f3
---

# ClientWebPart element (ElementDefinitionCollection complexType)

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

| Element Type | Namespace | Schema File |
|--------------|-----------|-------------|
| ClientWebPartDefinition | `http://schemas.microsoft.com/sharepoint/` | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:element name="ClientWebPart" type="ClientWebPartDefinition"></xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.


### Parent elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elements-element-apphostwebfeatures.md">Elements</a></p></td>
<td align="left"><p><a href="elementdefinitioncollection-complextype-apphostwebfeatures.md">ElementDefinitionCollection</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="content-element-clientwebpartdefinition-complextypeapphostwebfeatures.md">Content</a></p></td>
<td align="left"><p><a href="clientwebpartdefinitioncontent-complextype-apphostwebfeatures.md">ClientWebPartDefinitionContent</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-clientwebpartdefinition-complextypeapphostwebfeatures.md">Properties</a></p></td>
<td align="left"><p><a href="clientwebpartproperties-complextype-apphostwebfeatures.md">ClientWebPartProperties</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="10%" />
<col width="30%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>DefaultHeight</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:int type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DefaultWidth</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:int type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Title</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
</tbody>
</table>

<br/> 
<br/> 






