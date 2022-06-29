---
title: ClientWebPartDefinitionContentType simpleType
description: Describes the definition, type information, and enumeration values for ClientWebPartDefinitionContentType simpleType.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f097071f-3a01-20c3-1178-860270677478
---

# ClientWebPartDefinitionContentType simpleType

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information | Location |
|-------------|----------|
| **Base Type** | xs:string |
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| **Schema File** | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:simpleType name="ClientWebPartDefinitionContentType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="html" />
        </xs:restriction>
    </xs:simpleType>
```

## Enumeration values

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>html</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

<br/>
