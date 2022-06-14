---
title: Coercion element
description: Describes the definition, usage, attribute and element information for Coercion element, which specifies a coercion for converting data from one form to another.
manager: laurawi
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 334e3037-6f5c-01b2-ed1a-6f568087f196
---

# Coercion element 

(Coercions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies a coercion for converting data from one form to another.

## Usage

```XML 
    <Coercions>
        <Coercion />
    </Coercions>
```

## Element information

| Information | Location |
|-------------|----------|
| **Element Type** | |
| **Namespace** | |
| **Schema File** | Actions4.xsd |

## Definition

```XML
    <xs:element name="Coercion"      minOccurs="0"     maxOccurs="unbounded"    >
        <xs:complexType>
            <xs:all>
                <xs:element name="Parameters"      type="coercionParametersType" minOccurs="0"     maxOccurs="1"    >
                </xs:element>  
            </xs:all>
            <xs:attribute name="Name"   type="s:string"      use="required"     />
            <xs:attribute name="Assembly"   type="s:string"     />
            <xs:attribute name="DisplayName"   type="s:string"      use="required"     />
            <xs:attribute name="CatchAll"   type="s:boolean"      use="required"     />
            <xs:attribute name="RankDefault"   type="s:integer"      use="required"     />
            <xs:attribute name="SourceType"   type="s:string"     />
            <xs:attribute name="SourceFieldType"   type="s:string"     />
            <xs:attribute name="DestinationType"   type="s:string"      use="required"     />
            <xs:attribute name="DestinationFieldType"   type="s:string"     />
            <xs:attribute name="ClassName"   type="s:string"      use="required"     />
            <xs:attribute name="Id"   type="s:string"      use="required"     />
            <xs:attribute name="SourceProperty"   type="s:string"      use="required"     />
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
<td align="left"><p><a href="coercions-element-workflowinfo-elementaction4.md">Coercions</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="parameters-element-coercion-elementcoercions-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="coercionparameterstype-complextype-action4.md">coercionParametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| **Assembly** | s:string | optional | Specifies the binary file in which the coercion is implemented. | Values of the s:string type. |
| **CatchAll** | s:boolean | required | Set to **true** to show the coercion in scenarios in which either the **DestinationType** or the **DestinationFieldType** allows it, regardless of **SourceType** or **SourceFieldType** values. Set to **false** to show the coercion only in scenarios in which **SourceType** or **SourceFieldType** specifies that it should be shown. | Values of the s:boolean type. |
| **ClassName** | s:string | required | Uniquely identifies the class in the binary file that is specified by the Assembly value. | Values of the s:string type. |
| **DestinationFieldType** | s:string | optional | The output field type of the coercion. If the destination cannot handle this type, the coercion is not displayed. | Values of the s:string type. |
| **DestinationType** | s:string | required | The output class type of the coercion value. If the destination cannot handle this type, the coercion is not displayed. | Values of the s:string type. |
| **DisplayName** | s:string | required | Specifies the display name of the coercion. | Values of the s:string type. |
| **Id** | s:string | required | Unique guid identifier of the coercion. | Values of the s:string type. |
| **Name** | s:string | required | The internal name for the coercion. | Values of the s:string type. |
| **RankDefault** | s:integer | required | Specifies a sort value for the list of coercions. | Values of the s:integer type. |
| **SourceFieldType** | s:string | optional | The field type to use to determine whether to show the coercion. If set, the client shows the coercion only when the previous value is of the matching type unless **SourceFieldType** or **CatchAll** specifies otherwise. | Values of the s:string type. |
| **SourceProperty** | s:string | required | The name of the argument in the activity that is to be used to bind to the input. | Values of the s:string type. |
| **SourceType** | s:string | optional | A class type from which the data is converted. If set, the client shows the coercion only when the previous value is of the matching type unless **SourceFieldType** or **CatchAll** specifies otherwise. | Values of the s:string type. |

## Sample coercion definition

In the following example coercion definition, the coercion with the name `AsDNGuidFromString` uses the activity **Microsoft.Activities.Expressions.ParseGuid** and the **ParseGuid.Value** *InArgument* to accept input from other activities.

```
    <Coercion Name="AsDNGuidFromString"
          DisplayName="As Guid"
          CatchAll="false"
          RankDefault="21"
          SourceType="System.String"
          DestinationType="System.Guid"
          Id="6682B03F-170A-461B-8DFB-D668A1C4220A"
          ClassName="Microsoft.Activities.Expressions.ParseGuid"
          Assembly="Microsoft.Activities, Version=2.0.0.0,
              Culture=neutral, PublicKeyToken=31bf3856ad364e35"
          SourceProperty="Value">
```







