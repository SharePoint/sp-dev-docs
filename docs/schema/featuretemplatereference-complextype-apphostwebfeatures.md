---
title: FeatureTemplateReference complexType
description: Outlines information, a definition, and elements and attributes for the FeatureTemplateReference complexType in Sharepoint.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: e2803a29-86ec-1894-a77d-aa8692e9b84f
---

# FeatureTemplateReference complexType

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

|  Resource | File  |
|---|---|
| **Namespace** | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file** | apphostwebfeatures.xsd |
| **Extension base** | None |

## Definition

```XML
    <xs:complexType name="FeatureTemplateReference">
        <xs:sequence>
            <xs:element name="Properties" type="FeaturePropertyDefinitions" minOccurs="0" maxOccurs="1"></xs:element>
        </xs:sequence>
        <xs:attribute name="ID" type="UniqueIdentifier" use="required" />
        <xs:attribute name="Name" type="xs:string" use="optional" />
        <xs:attribute name="SourceVersion" type="FeatureVersion" use="optional" />
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
<td align="left"><p><a href="properties-element-featuretemplatereference-complextypeapphostwebfeatures.md">Properties</a></p></td>
<td align="left"><p><a href="featurepropertydefinitions-complextype-apphostwebfeatures.md">FeaturePropertyDefinitions</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>ID</p></td>
<td align="left"><p>UniqueIdentifier</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the UniqueIdentifier type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the xs:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SourceVersion</p></td>
<td align="left"><p><a href="featureversion-simpletype-apphostwebfeatures.md">FeatureVersion</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the FeatureVersion type.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>
