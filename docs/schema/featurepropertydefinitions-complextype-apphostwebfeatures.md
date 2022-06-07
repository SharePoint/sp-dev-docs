---
title: FeaturePropertyDefinitions complexType
description: Outlines information, a definition, and elements and attributes for the FeaturePropertyDefinitions complexType in Sharepoint.
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 89621dc1-7a85-8403-5ad1-01d62c4f9fdc
---

# FeaturePropertyDefinitions complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Resource  |  File |
|---|---|
| Namespace  | `http://schemas.microsoft.com/sharepoint/` |
| Schema file  | apphostwebfeatures.xsd |
| Extension base  | None |

## Definition

```XML
    <xs:complexType name="FeaturePropertyDefinitions">
        <xs:sequence>
            <xs:element name="Property" type="FeaturePropertyDefinition" minOccurs="0" maxOccurs="unbounded"></xs:element>
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
<td align="left"><p><a href="property-element-featurepropertydefinitions-complextypeapphostwebfeatures.md">Property</a></p></td>
<td align="left"><p><a href="featurepropertydefinition-complextype-apphostwebfeatures.md">FeaturePropertyDefinition</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.

<br/>

<br/>







