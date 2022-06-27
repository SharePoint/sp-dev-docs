---
title: Properties element (ClientWebPartDefinition complexType)
description: Describes the Properties element (ClientWebPartDefinition complexType) and provides the element information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 4aa16313-3172-c658-a072-e477f8140709
---

# Properties element (ClientWebPartDefinition complexType) 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

| Resource | File |
|---|---|
| **Element type** | ClientWebPartProperties |
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file** | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:element name="Properties" type="ClientWebPartProperties" minOccurs="0" maxOccurs="1"></xs:element>
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
<td align="left"><p><a href="clientwebpart-element-elementdefinitioncollection-complextypeapphostwebfeatures.md">ClientWebPart</a></p></td>
<td align="left"><p><a href="clientwebpartdefinition-complextype-apphostwebfeatures.md">ClientWebPartDefinition</a></p></td>
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
<td align="left"><p><a href="property-element-clientwebpartproperties-complextypeapphostwebfeatures.md">Property</a></p></td>
<td align="left"><p><a href="clientwebpartproperty-complextype-apphostwebfeatures.md">ClientWebPartProperty</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/> 

### Attributes

None.

<br/> 

<br/> 








