---
title: ActionVariables element (Action element)
description: Discusses the ActionVariables element (Action element) use and syntax including definitions and code samples.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 69d4c465-600d-9d78-6ed9-1e024ec8ad1d
---

# ActionVariables element (Action element) 

(Actions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies local variables for the action.

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
    <xs:element name="ActionVariables"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionVariables"     >

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
