---
title: ElementManifestReferences complexType
description: Describes the ElementManifestReferences complexType and provides the type information, a definition, and the elements and attributes.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: b7a6739c-2a8a-abc2-a8f7-2a898c329709
---

# ElementManifestReferences complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Information | Location |
|---|---|
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |
| **Extension base**  | None |

## Definition

```XML
    <xs:complexType name="ElementManifestReferences">
        <xs:sequence minOccurs="0" maxOccurs="unbounded">
            <xs:element name="ElementManifest" type="ElementManifestReference" minOccurs="0" maxOccurs="unbounded"></xs:element>
            <xs:element name="ElementFile" type="ElementManifestReference" minOccurs="0" maxOccurs="unbounded"></xs:element>
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
<td align="left"><p><a href="elementfile-element-elementmanifestreferences-complextypeapphostwebfeatures.md">ElementFile</a></p></td>
<td align="left"><p><a href="elementmanifestreference-complextype-apphostwebfeatures.md">ElementManifestReference</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="elementmanifest-element-elementmanifestreferences-complextypeapphostwebfeatures.md">ElementManifest</a></p></td>
<td align="left"><p><a href="elementmanifestreference-complextype-apphostwebfeatures.md">ElementManifestReference</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.

<br/>

<br/>







