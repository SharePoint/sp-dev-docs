---
title: ActionConditions element (Action element)
description: Discusses the definition, elements and attributes for ActionConditions element (Action element) for SharePoint Server 2013.
manager: laurawi
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 57949d5d-6bdf-d343-ee73-2502afde5ecb
---

# ActionConditions element (Action element)

(Actions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

## Usage

```XML 
    <Actions>
        <Action>
            <ActionVariables />
            <ActionBody />
            <ActionConditions />
        </Action>
    </Actions>
```

## Element information

|Information|Location|
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |


## Definition

```XML
    <xs:element name="ActionConditions"  minOccurs="0"  maxOccurs="1"  >
        <xs:complexType>
            <xs:sequence>
                <xs:element name="ActionConditions"  >
                </xs:element>
           </xs:sequence>
        </xs:complexType>
    </xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

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
<td align="left"><p><a href="action-element-actions-elementworkflowinfo-elementaction4.md">Action</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Attributes

None.
