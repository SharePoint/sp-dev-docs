---
title: FeatureTemplateReferences complexType
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.service: sharepoint
ms.localizationpriority: medium
ms.assetid: a1f9ee64-f188-16ac-9d9d-bdb4f703f963
---

# FeatureTemplateReferences complexType 

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
    <xs:complexType name="FeatureTemplateReferences">
        <xs:sequence>
            <xs:element name="Feature" type="FeatureTemplateReference" minOccurs="0" maxOccurs="unbounded"></xs:element>
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
<td align="left"><p><a href="feature-element-featuretemplatereferences-complextypeapphostwebfeatures.md">Feature</a></p></td>
<td align="left"><p><a href="featuretemplatereference-complextype-apphostwebfeatures.md">FeatureTemplateReference</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.

<br/>

<br/>







