---
title: Elements element (AppHostWebFeatures)
description: Discusses the Element information
Definition
Elements and attributes for the Elements element (AppHostWebFeatures)
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 52d0b0de-1541-1790-70d2-76d37013af74
---

# Elements element (AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

|  &nbsp; |&nbsp;   |
|---|---|
| **Element type**  | ElementDefinitionCollection |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |

## Definition 

```XML
    <xs:element name="Elements" type="ElementDefinitionCollection"></xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.


### Parent elements

None.

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
<td align="left"><p><a href="clientwebpart-element-elementdefinitioncollection-complextypeapphostwebfeatures.md">ClientWebPart</a></p></td>
<td align="left"><p><a href="clientwebpartdefinition-complextype-apphostwebfeatures.md">ClientWebPartDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="customaction-element-elementdefinitioncollection-complextypeapphostwebfeatures.md">CustomAction</a></p></td>
<td align="left"><p><a href="customactiondefinition-complextype-apphostwebfeatures.md">CustomActionDefinition</a></p></td>
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
<td align="left"><p>Id</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
</tr>
</tbody>
</table>


<br/> 
<br/> 






