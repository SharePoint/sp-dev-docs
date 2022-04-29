---
title: ElementManifestReference complexType
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.service: sharepoint
ms.localizationpriority: medium
ms.assetid: 68fbe6bd-90ce-9e5d-81cd-be907176bd54
---

# ElementManifestReference complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|   |   |
|---|---|
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |
| **Extension base**  | None |

## Definition

```XML
    <xs:complexType name="ElementManifestReference">
        <xs:attribute name="Location" type="RelativeFilePath" use="required" />
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

None.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
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
<td align="left"><p>Location</p></td>
<td align="left"><p>RelativeFilePath</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the RelativeFilePath type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>







