---
title: PropertyBagParentTypeDefinition simpleType
description: Describes the PropertyBagParentTypeDefinition simpleType and provides the type information, a definition, and the enumeration values.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 71bc7f6c-12dd-ba2e-40ba-de4be9f9c39d
---

# PropertyBagParentTypeDefinition simpleType

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information


| Resource | File |
|---|---|
| **Base Type** | xs:string |
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| *Schema file** | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:simpleType name="PropertyBagParentTypeDefinition">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Web" />
            <xs:enumeration value="Folder" />
            <xs:enumeration value="ListItem" />
            <xs:enumeration value="File" />
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
<td align="left"><p>Web</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>Folder</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>ListItem</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>File</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

<br/>
