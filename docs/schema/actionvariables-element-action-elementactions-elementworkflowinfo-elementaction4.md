---
title: ActionVariables element (Action element)
description: Discusses the definition, elements and attributes for ActionVariables element (Action element) which specifies local variables for the action.
manager: laurawi
ms.date: 07/12/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 69d4c465-600d-9d78-6ed9-1e024ec8ad1d
---

# ActionVariables element (Action element)

(Actions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies local variables for the action.

## Usage

```xml
<Actions>
  <Action>
    <ActionVariables />
    <ActionBody />
    <ActionConditions />
  </Action>
</Actions>
```

## Element information

| Name  | Details  |
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |


## Definition

```xml
<xs:element name="ActionVariables" minOccurs="0" maxOccurs="1">
  <xs:complexType>
    <xs:sequence>
    <xs:element name="ActionVariables"></xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

- [Action](action-element-actions-elementworkflowinfo-elementaction4.md)

### Child elements

None.

### Attributes

None.
