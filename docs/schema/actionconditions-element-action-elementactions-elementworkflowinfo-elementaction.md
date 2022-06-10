---
title: ActionConditions element (Action element)
description: Discusses the usage, definition, elements and attributes for the ActionConditions element for SharePoint.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
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
  
| Element | Type | Description |
| --- | --- | --- |
| [Action](action-element-actions-elementworkflowinfo-elementaction4.md) |     |     |

### Child elements

None.

### Attributes

None.
