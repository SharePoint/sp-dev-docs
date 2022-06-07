---
title: FeatureScope simpleType
description: Outlines information, a definition, and enumeration values for FeatureScope simpleType in SharePoint.
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: f716ce8f-d5fc-d717-c6bb-551fc2dc6ba2
---

# FeatureScope simpleType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Resource  |  File |
|---|---|
| Base Type  | xs:string |
| Namespace  | `http://schemas.microsoft.com/sharepoint/` |
| Schema file  | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:simpleType name="FeatureScope">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Web" />
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
</tbody>
</table>

<br/>

<br/>







