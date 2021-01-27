---
title: Parameter element (parametersType complexType) (Action4)
manager: soliver
ms.date: 01/27/2021
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: 1a694945-69a8-57b5-c3aa-f8c2edca165c
---

# Parameter element (parametersType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Used to describe the input and output parameters for a method call to a custom **Action** or **Condition**. The **Parameter** element is of type [parametersType](parameterstype-complextype-action4.md).

## Usage

```XML
<Parameters>
    <Parameter />
</Parameters>
```

## Element information

- **Schema file**: Actions4.xsd

## Definition

```XML
<xs:element name="Parameter" minOccurs="0" maxOccurs="unbounded">
  <xs:attribute name="Name" type="s:string" use="required" />
  <xs:attribute name="Type" type="s:string" use="required" />
  <xs:attribute name="Direction" type="s:string" use="required" />
  <xs:attribute name="Description" type="s:string" />
  <xs:attribute name="DesignerType" type="s:string" />
  <xs:attribute name="ShowLookupForDropdown" type="s:boolean" />
  <xs:attribute name="DisplayName" type="s:string" />
  <xs:attribute name="InitialValue" type="s:string" />
  <xs:attribute name="InitialBinding" type="s:string" />
  <xs:attribute name="EventCategory" type="s:string" />
</xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

|                                              Element                                              |                          Type                           | Description |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------- |
| [Parameters](parameters-element-flow-elementflows-elementworkflowinfo-elementaction4.md)          | [parametersType](parameterstype-complextype-action4.md) |             |
| [Parameters](parameters-element-action-elementactions-elementworkflowinfo-elementaction4.md)      | [parametersType](parameterstype-complextype-action4.md) |             |
| [Parameters](parameters-element-condition-elementconditions-elementworkflowinfo-elementaction.md) | [parametersType](parameterstype-complextype-action4.md) |             |

### Child elements

None.

### Attributes

|         Attribute         |   Type    | Required |                                                             Description                                                              |        Possible values        |
| ------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| **Description**           | s:string  | optional | Specifies the text to display when the parameter is selected in a grid matching parameters names with current values.                | Values of the s:string type.  |
| **DesignerType**          | s:string  | optional | Specifies the possible interface elements to use when editing the value of a parameter.                                              | Values of the s:string type.  |
| **Direction**             | s:string  | required | Specifies an input or output parameter. Valid values are In, Out, and Optional. Values are not case-sensitive.                       | Values of the s:string type.  |
| **DisplayName**           | s:string  | optional | Specifies the name to display when showing the parameter in a grid structure matching names of parameters with their current values. | Values of the s:string type.  |
| **EventCategory**         | s:string  | optional | The category to which the event belongs; for example, ListItemEvent or ProjectEvent.                                                 | Values of the s:string type.  |
| **InitialBinding**        | s:string  | optional | Specifies the default variable to use for the parameter when creating a new condition or action that contains the parameter.         | Values of the s:string type.  |
| **InitialValue**          | s:string  | optional | Used to specify the default initial value that is passed to the parameter. Values are not case-sensitive.                            | Values of the s:string type.  |
| **Name**                  | s:string  | required | Used to associate the **FieldBind** element with the parameter. Values are not case-sensitive.                                       | Values of the s:string type.  |
| **ShowLookupForDropdown** | s:boolean | optional | Specifies whether a lookup button is displayed for a drop-down list.                                                                 | Values of the s:boolean type. |
| **Type**                  | s:string  | required | Partially qualified Microsoft .NET data type. Values are not case-sensitive. For example: System.Object, mscorlib                    | Values of the s:string type.  |
