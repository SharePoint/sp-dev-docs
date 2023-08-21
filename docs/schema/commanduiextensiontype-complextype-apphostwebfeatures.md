---
title: CommandUIExtensionType complexType
description: Describes the CommandUIExtensionType complexType, including type information, elements, attributes, and child elements.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 1e7626eb-2820-374e-ae39-be3a3178b2ab
---

# CommandUIExtensionType complexType

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Name | Value |
|---|---|
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |
| **Extension base**  | None |

## Definition

```XML
    <xs:complexType name="CommandUIExtensionType">
        <xs:sequence>
            <xs:element name="CommandUIDefinitions" type="CommandUIDefinitionsType" minOccurs="0" maxOccurs="1"></xs:element>
            <xs:element name="CommandUIHandlers" type="CommandUIHandlersType" minOccurs="0" maxOccurs="1"></xs:element>
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
<td align="left"><p><a href="commanduidefinitions-element-commanduiextensiontype-complextypeapphostwebfeature.md">CommandUIDefinitions</a></p></td>
<td align="left"><p><a href="commanduidefinitionstype-complextype-apphostwebfeatures.md">CommandUIDefinitionsType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="commanduihandlers-element-commanduiextensiontype-complextypeapphostwebfeatures.md">CommandUIHandlers</a></p></td>
<td align="left"><p><a href="commanduihandlerstype-complextype-apphostwebfeatures.md">CommandUIHandlersType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.

<br/>

<br/>
