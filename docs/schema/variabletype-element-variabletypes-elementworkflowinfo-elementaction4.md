---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 90dac5a4-51c4-d178-fb00-3db3ac79f365
---

# VariableType element 

(VariableTypes element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies a type that can be used for local variables in the workflow.

## Usage

```XML
    <VariableTypes>
        <VariableType />
    </VariableTypes>
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
    <xs:element name="VariableType">
         <xs:attribute name="Type" type="s:string" use="required" />
         <xs:attribute name="DisplayName" type="s:string" use="required" />
         <xs:attribute name="Assembly" type="s:string" />
         <xs:attribute name="Default" type="s:boolean" />
         <xs:attribute name="ItemIdType" type="s:boolean"  />
         <xs:attribute name="Hidden" type="s:boolean" />
      </xs:element>  
```

## Elements and attributes

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
<td align="left"><p><a href="variabletypes-element-workflowinfo-elementaction4.md">VariableTypes</a></p></td>
<td align="left"><p></p></td>
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
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the binary file that defines the class specified by the **Type** attribute.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Set to **true** to use this type as the default variable type; otherwise, **false**.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the display name of the type.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Set to **true** to hide the **Display Name** of the type; otherwise, **false**.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ItemIdType**</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Set to **true** to use this type as the type for identifying list items; otherwise, **false**.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the variable data type.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








