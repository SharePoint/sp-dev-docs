---
title: AppPrincipalTypeDefinition simpleType
description: Discusses the type information, definition, and enumeration values for AppPrincipalTypeDefinition simpleType.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: article
ms.localizationpriority: medium
ms.assetid: b9118c51-c78a-2643-7b27-2456cd9eb282
---

# AppPrincipalTypeDefinition simpleType

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

The add-in principal type.

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|Information|Location|
|---|---|
| **Base type**  | xs:string |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/2012/app/manifest` |
| **Schema file**  | appmanifest.xsd |

## Definition

```XML
    <xs:simpleType  name="AppPrincipalTypeDefinition">
      <xs:restriction base="xs:string">
        <xs:enumeration value="Internal"/>
        <xs:enumeration value="External"/>
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
<td align="left"><p>Internal</p></td>
<td align="left"><p>Internal add-in principal.</p></td>
</tr>
<tr class="even">
<td align="left"><p>External</p></td>
<td align="left"><p>External add-in principal.</p></td>
</tr>
</tbody>
</table>
