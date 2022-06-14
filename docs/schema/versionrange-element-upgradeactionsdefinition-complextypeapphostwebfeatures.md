---
title: VersionRange element (UpgradeActionsDefinition complexType)
manager: soliver
ms.date: 06/14/2022
description: Describes VersionRange element (UpgradeActionsDefinition complexType) and provides information on elements and attributes.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: b07b2138-93cd-4c67-473d-b9b9d138eff1
---

# VersionRange element (UpgradeActionsDefinition complexType) 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

| Information | Location |
|---|---|
| **Element type**  | VersionRangeDefinition |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:element name="VersionRange" type="VersionRangeDefinition" minOccurs="0" maxOccurs="unbounded"></xs:element>
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
<td align="left"><p><a href="upgradeactions-element-featuredefinition-complextypeapphostwebfeatures.md">UpgradeActions</a></p></td>
<td align="left"><p><a href="upgradeactionsdefinition-complextype-apphostwebfeatures.md">UpgradeActionsDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/> 

### Child elements

None.

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
<td align="left"><p>BeginVersion</p></td>
<td align="left"><p><a href="featureversion-simpletype-apphostwebfeatures.md">FeatureVersion</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the FeatureVersion type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>EndVersion</p></td>
<td align="left"><p><a href="featureversion-simpletype-apphostwebfeatures.md">FeatureVersion</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the FeatureVersion type.</p></td>
</tr>
</tbody>
</table>

<br/> 

<br/> 








