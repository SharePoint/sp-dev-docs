---
title: Parameter element (coercionParametersType complexType) (Action4)
description: Details on the  Parameter element (coercionParametersType complexType) (Action4)
manager: soliver
ms.date: 01/27/2021
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: f1952ebe-19b3-1bcf-9880-0ef3013e101b
---

# Parameter element (coercionParametersType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Used to describe hidden input parameters for an activity that is used as the coercion. Also defines additional input values to be always added internally when an activity used as a coercion is inserted into the workflow. The Parameter element is of type [coercionParametersType](coercionparameterstype-complextype-action4.md).

## Element information

- Schema file: Actions4.xsd

## Definition

```XML
<xs:element name="Parameter" minOccurs="0" maxOccurs="unbounded">
  <xs:complexType>
    <xs:all>
    <xs:element name="ActivityBody" minOccurs="1" maxOccurs="1">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="ActivityBody">
            </xs:element>
          </xs:sequence>
        </xs:complexType>
    </xs:element>
    </xs:all>
    <xs:attribute name="Name" type="s:string" use="required" />
    <xs:attribute name="Type" type="s:string" use="required" />
    <xs:attribute name="Value" type="s:string" />
  </xs:complexType>
</xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

|                                             Element                                              |                                  Type                                   |                                                     Description                                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Parameters](parameters-element-coercion-elementcoercions-elementworkflowinfo-elementaction4.md) | [coercionParametersType](coercionparameterstype-complextype-action4.md) | Container for **Parameter** elements that includes descriptions of the parameters in **coercion** method signatures. |

### Child elements

|                                                  Element                                                   | Type |              Description               |
| ---------------------------------------------------------------------------------------------------------- | ---- | -------------------------------------- |
| [ActivityBody</a></p>](activitybody-element-parameter-elementcoercionparameterstype-complextypeaction4.md) |      | Specifies the body of a custom action. |

### Attributes

| Attribute |   Type   | Required |                        Description                         |          Possible values     |
| --------- | -------- | -------- | ---------------------------------------------------------- | ---------------------------- |
| **Name**  | s:string | required | Name of the activity parameter that is used as a coercion. | Values of the s:string type. |
| **Type**  | s:string | required | Data type of the parameter.                                | Values of the s:string type. |
| **Value** | s:string | optional | The value to be set for the activity parameter.            | Values of the s:string type. |
