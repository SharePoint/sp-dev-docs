---
title: AppPrerequisiteCollection complexType
description: Outlines information, a definition, and elements and attributes for the AppPrerequisiteCollection complexType in Sharepoint.
manager: soliver
ms.date: 06/07/2022
ms.audience: Developer
ms.topic: article
ms.localizationpriority: medium
ms.assetid: fdd507be-29c5-eeb1-3cc1-b821ed81472d
---

# AppPrerequisiteCollection complexType

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information
**Namespace**: `http://schemas.microsoft.com/sharepoint/2012/app/manifest`

**Schema file**: appmanifest.xsd

**Extension base**: None

## Definition

```XML
    <xs:complexType name="AppPrerequisiteCollection">
      <xs:sequence>
        <xs:element name="AppPrerequisite"  type="AppPrerequisite"
         maxOccurs="500"
        >
        </xs:element>

      </xs:sequence>
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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
<td align="left"><p><a href="appprerequisite-element-appprerequisitecollection-complextypesharepoint-add-in-m.md">AppPrerequisite</a></p></td>
<td align="left"><p><a href="appprerequisite-complextype-sharepoint-add-in-manifest.md">AppPrerequisite</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

None.
