---
title: ClientWebPartPropertyType simpleType
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: aed2ce76-7e2d-84df-e80b-496d5b4bd3d8
---

# ClientWebPartPropertyType simpleType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Base Type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:simpleType name="ClientWebPartPropertyType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="string" />
            <xs:enumeration value="int" />
            <xs:enumeration value="boolean" />
            <xs:enumeration value="enum" />
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
<td align="left"><p>string</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>int</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>enum</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







