---
title: CommandUIDefinitionsType complexType
description: Describes the definition, type, element, and attribute information for CommandUIDefinitionsType complexType.
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 869cf0c7-be68-47d8-c82c-ee0893ca90cb
---

# CommandUIDefinitionsType complexType 

(AppHostWebFeatures)

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Type information

**Namespace**: `http://schemas.microsoft.com/sharepoint/`

**Schema file**: apphostwebfeatures.xsd

**Extension base**: None

## Definition

```XML
    <xs:complexType name="CommandUIDefinitionsType">
        <xs:sequence>
            <xs:element name="CommandUIDefinition" type="CommandUIDefinitionType" minOccurs="1" maxOccurs="unbounded"></xs:element>
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
<td align="left"><p><a href="commanduidefinition-element-commanduidefinitionstype-complextypeapphostwebfeatur.md">CommandUIDefinition</a></p></td>
<td align="left"><p><a href="commanduidefinitiontype-complextype-apphostwebfeatures.md">CommandUIDefinitionType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.


<br/>

<br/>






