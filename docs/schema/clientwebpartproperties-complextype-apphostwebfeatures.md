---
title: ClientWebPartProperties complexType
description: Describes the definition, type, element, and attribute information for ClientWebPartProperties complexType.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 129a6bac-5a23-ee80-3db8-8e06c8401abe
---

# ClientWebPartProperties complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

| Namespace | Schema File | Extension Base |
|-----------|-------------|----------------|
| `http://schemas.microsoft.com/sharepoint/` | apphostwebfeatures.xsd | None |

## Definition

```XML
    <xs:complexType name="ClientWebPartProperties">
        <xs:sequence>
            <xs:element name="Property" type="ClientWebPartProperty" minOccurs="0" maxOccurs="unbounded"></xs:element>
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
<td align="left"><p><a href="property-element-clientwebpartproperties-complextypeapphostwebfeatures.md">Property</a></p></td>
<td align="left"><p><a href="clientwebpartproperty-complextype-apphostwebfeatures.md">ClientWebPartProperty</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.


<br/>

<br/>






