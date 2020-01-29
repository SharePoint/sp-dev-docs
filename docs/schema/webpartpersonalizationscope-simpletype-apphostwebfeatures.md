---
title: WebPartPersonalizationScope simpleType
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: 6559a32e-1b3c-89d0-48ee-46208f7c0495
---

# WebPartPersonalizationScope simpleType 

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
    <xs:simpleType name="WebPartPersonalizationScope">
        <xs:restriction base="xs:string">
            <xs:enumeration value="shared" />
            <xs:enumeration value="user" />
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
<td align="left"><p>shared</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>user</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







