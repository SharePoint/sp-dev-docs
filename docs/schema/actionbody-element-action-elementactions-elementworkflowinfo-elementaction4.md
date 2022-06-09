---
title: ActionBody element
description: Discusses the usage, element information, definition, and attributes as it relates to the ActionBody element.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: c9996ac3-be53-440c-8810-55b91031869b
---

# ActionBody element 

(Action element) (Actions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies the body of a custom action.

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
    <xs:element name="ActionBody"  minOccurs="0"  maxOccurs="1"  >
        <xs:complexType>
            <xs:sequence>
                <xs:element name="ActionBody" >
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








