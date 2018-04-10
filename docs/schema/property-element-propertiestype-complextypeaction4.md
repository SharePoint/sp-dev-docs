---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 86e5f37b-d8ec-2825-2d4d-03da34be47d0
---

# Property element (propertiesType complexType) 

(Action4)

**Applies to**: SharePoint Server 2013

A property of the parent [Block element (Blocks element) (WorkflowInfo element) (Action4)](block-element-blocks-elementworkflowinfo-elementaction4.md) element as rendered in the workflow visual designer user interface.

## Usage

```XML
    <Blocks>
        <Block>
            <Property />
        </Block>
    </Blocks>
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
    <xs:element name="Property" minOccurs="0" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="DesignerType" type="s:string" />
         <xs:attribute name="DisplayName" type="s:string" />
         <xs:attribute name="Description" type="s:string" />
         <xs:attribute name="TypeFrom" type="s:string" />
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
<td align="left"><p><a href="block-element-blocks-elementworkflowinfo-elementaction4.md">Block</a></p></td>
<td align="left"><p><a href="propertiestype-complextype-action4.md">propertiesType</a></p></td>
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
<col width="20%" />
<col width="35%" />
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
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DesignerType**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TypeFrom**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








