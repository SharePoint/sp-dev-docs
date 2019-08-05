---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d7f1d00f-0f32-c744-65bd-cc2c8ceee2b9
---

# Blocks element 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Provides container element for **Block** elements.

## Usage

```XML
    <Blocks>
         <Block />
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
    <xs:element name="Blocks" minOccurs="0" maxOccurs="1" >
        <xs:complexType>
            <xs:sequence>
                <xs:element name="Block" type="propertiesType" minOccurs="0" maxOccurs="unbounded" >
                </xs:element>  
           </xs:sequence>
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
<td align="left"><p><a href="workflowinfo-element-action4.md">WorkflowInfo</a></p></td>
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
<td align="left"><p><a href="block-element-blocks-elementworkflowinfo-elementaction4.md">Block</a></p></td>
<td align="left"><p><a href="propertiestype-complextype-action4.md">propertiesType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








