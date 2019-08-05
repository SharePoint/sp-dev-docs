---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bccc46e6-d8a3-d3b7-6517-d7aee670e602
---

# DataSourceRef element 

(FieldBind element) (ruleDesignerType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Specifies the possible values from the [DataSource element (dataSourcesType complexType) (Action4)](datasource-element-datasourcestype-complextypeaction4.md) that are associated with the **Action** or **Condition** element that is the parent of the **RuleDesigner**. This enables dynamic population of the list of possible values by nesting an **Action** or a **Condition** element inside an **Action** or **CompositeStep** element, and passing the list of values from the parent element. If there is more than one **DataSourceRef** element, the list of possible values is the union of the possible values.

## Usage

```XML
    <FieldBind>
        <DataSourceRef />
    </FieldBind>
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
    <xs:element name="DataSourceRef"      minOccurs="1"     maxOccurs="unbounded"    >
         <xs:attribute name="Ref"   type="s:string"     />
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
<td align="left"><p><a href="fieldbind-element-ruledesignertype-complextypeaction4.md">FieldBind</a></p></td>
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
<td align="left"><p>**Ref**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the internal name of the **DataSource** element from which to obtain a list of possible values.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








