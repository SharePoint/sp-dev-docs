---
title: Coercion element
description: Describes the definition, usage, attribute and element information for Coercion element, which specifies a coercion for converting data from one form to another.
manager: laurawi
ms.date: 06/09/2022
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

**Element type**: ---

**Namespace**: ---

**Schema file**: Actions4.xsd

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

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="35%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><b>Assembly</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the binary file in which the coercion is implemented.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>CatchAll</b></p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Set to <b>true</b> to show the coercion in scenarios in which either the <b>DestinationType</b> or the <b>DestinationFieldType</b> allows it, regardless of <b>SourceType</b> or <b>SourceFieldType</b> values. Set to <b>false</b> to show the coercion only in scenarios in which <b>SourceType</b> or <b>SourceFieldType</b> specifies that it should be shown.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>ClassName</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Uniquely identifies the class in the binary file that is specified by the <span class="parameter">Assembly</span> value.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>DestinationFieldType</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The output field type of the coercion. If the destination cannot handle this type, the coercion is not displayed.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>DestinationType</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The output class type of the coercion value. If the destination cannot handle this type, the coercion is not displayed.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>DisplayName</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the display name of the coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>Id</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Unique guid identifier of the coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>Name</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The internal name for the coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>RankDefault</b></p></td>
<td align="left"><p>s:integer</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies a sort value for the list of coercions.</p></td>
<td align="left"><p>Values of the s:integer type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>SourceFieldType</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The field type to use to determine whether to show the coercion. If set, the client shows the coercion only when the previous value is of the matching type unless <b>SourceFieldType</b> or <b>CatchAll</b> specifies otherwise.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>SourceProperty</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The name of the argument in the activity that is to be used to bind to the input.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>SourceType</b></p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>A class type from which the data is converted. If set, the client shows the coercion only when the previous value is of the matching type unless <b>SourceFieldType</b> or <b>CatchAll</b> specifies otherwise.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>

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







