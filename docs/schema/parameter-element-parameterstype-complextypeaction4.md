---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1a694945-69a8-57b5-c3aa-f8c2edca165c
---

# Parameter element 

(parametersType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Used to describe the input and output parameters for a method call to a custom **Action** or **Condition**. The **Parameter** element is of type [parametersType](parameterstype-complextype-action4.md).

## Usage

```XML
    <Parameters>
        <Parameter />
    </ Parameters >
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
<td align="left"><p><a href="parameters-element-flow-elementflows-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="parameters-element-action-elementactions-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="parameters-element-condition-elementconditions-elementworkflowinfo-elementaction.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
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
<td align="left"><p>**Description**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the text to display when the parameter is selected in a grid matching parameters names with current values.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DesignerType**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the possible interface elements to use when editing the value of a parameter.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies an input or output parameter. Valid values are In, Out, and Optional. Values are not case-sensitive.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the name to display when showing the parameter in a grid structure matching names of parameters with their current values.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventCategory**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The category to which the event belongs; for example, ListItemEvent or ProjectEvent.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**InitialBinding**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the default variable to use for the parameter when creating a new condition or action that contains the parameter.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**InitialValue**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Used to specify the default initial value that is passed to the parameter. Values are not case-sensitive.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Used to associate the **FieldBind** element with the parameter. Values are not case-sensitive.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowLookupForDropdown**</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies whether a lookup button is displayed for a drop-down list.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Partially qualified Microsoft .NET data type. Values are not case-sensitive. For example: System.Object, mscorlib</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








