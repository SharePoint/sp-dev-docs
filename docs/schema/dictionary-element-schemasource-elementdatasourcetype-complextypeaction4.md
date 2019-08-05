---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c3fa67ee-c8f0-d66c-751f-856b92932ab4
---

# Dictionary element 

(SchemaSource element) (dataSourceType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Specifies a dictionary of name-value pairs from which to retrieve fields.

## Usage

```XML
    <SchemaSource>
        <Dictionary />
    </SchemaSource>
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
    <xs:element name="Dictionary"  minOccurs="0" maxOccurs="1">
         <xs:attribute name="ValueFrom" type="s:string"  />
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
<td align="left"><p><a href="schemasource-element-datasourcetype-complextypeaction4.md">SchemaSource</a></p></td>
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
<td align="left"><p>**ValueFrom**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The specified dictionary.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








