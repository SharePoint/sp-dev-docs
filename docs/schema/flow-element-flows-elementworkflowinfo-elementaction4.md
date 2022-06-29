---
title: Flow element
description: Flow element represents the activity underlying the 'Go to a stage' action in the visual workflow designer.
manager: laurawi
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: c94f34a7-6f7f-23d1-893c-b8d7bd5853a4
---

# Flow element

(Flows element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Represents the activity underlying the **Go to a stage** action in the visual workflow designer.

## Usage

```XML
    <Flows>
        <Flow>
            <RuleDesigner />
            <Paramters />
        </Flow>
    </Flows>
```

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:element name="Flow" minOccurs="0" maxOccurs="unbounded">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1"  maxOccurs="1">
             </xs:element>
             <xs:element name="Parameters" type="parametersType" minOccurs="1" maxOccurs="1">
             </xs:element>
          </xs:sequence>
          <xs:attribute name="Name" type="s:string" use="required" />
          <xs:attribute name="Category" type="s:string" use="required" />
       </xs:complexType>
    </xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

| Element | Type | Description |
|---------|------|-------------|
| [Flows](flows-element-workflowinfo-elementaction4.md)| | Container element for individual [Flow element (Flows element) (WorkflowInfo element) (Action4)](flow-element-flows-elementworkflowinfo-elementaction4.md) elements. |

### Child elements


| Element | Type | Description |
|---------|------|-------------|
| [Parameters](parameters-element-flow-elementflows-elementworkflowinfo-elementaction4.md) | [parametersType](parameterstype-complextype-action4.md) | Serves as a container for **Parameter** elements, and contains no definable attributes. Includes the descriptions of the parameters in an action method signature. |
| [RuleDesigner](ruledesigner-element-flow-elementflows-elementworkflowinfo-elementaction4.md) | [ruleDesignerType](ruledesignertype-complextype-action4.md) | Contains information that allows the rendering of a declarative sentence in the visual workflow editor in SharePoint Designer or Visual Studio. |

### Attributes

| Attribute | Type | Required | Description | Possible Values |
|-----------|------|----------|-------------|-----------|
| **Category** | s:string | required | Specifies the ribbon category in the visual designer user interface (in this case, **Common Flows**) that contains the **Go to a stage** action. | Values of the s:string type. |
| **Name** | s:string | required | Specifies the string that identifies the action in the visual designer user interface. In this case, the name is **Go to a stage**. | Values of the s:string type. |
