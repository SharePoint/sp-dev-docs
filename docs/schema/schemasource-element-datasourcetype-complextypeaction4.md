---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: aeeb657e-126d-7783-bf73-93b98c52b60b
---

# SchemaSource element 

(dataSourceType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Specifies how data source fields are displayed.

## Usage

```XML
    <SchemaSource>
        <Fields />
        <ContentType />
        <Dictionary />
        <NestedInitiationFieldNodes />
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
    <xs:element name="SchemaSource">
               <xs:complexType>
               <xs:choice>
         <xs:element name="Fields" minOccurs="0" maxOccurs="1">
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Field" minOccurs="1" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" />
         <xs:attribute name="DisplayName" type="s:string" />
         <xs:attribute name="Type" type="s:string" />
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ContentType" minOccurs="0" maxOccurs="1">
         <xs:attribute name="IDFrom" type="s:string" />
      </xs:element>  
         <xs:element name="Dictionary" minOccurs="0" maxOccurs="1">
         <xs:attribute name="ValueFrom" type="s:string" />
      </xs:element>  
         <xs:element name="NestedInitiationFieldNodes" minOccurs="0" maxOccurs="1">
      </xs:element>  
           </xs:choice>
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
<td align="left"><p><a href="datasource-element-datasourcestype-complextypeaction4.md">DataSource</a></p></td>
<td align="left"><p><a href="datasourcetype-complextype-action4.md">dataSourceType</a></p></td>
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
<td align="left"><p><a href="contenttype-element-schemasource-elementdatasourcetype-complextypeaction4.md">ContentType</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="dictionary-element-schemasource-elementdatasourcetype-complextypeaction4.md">Dictionary</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fields-element-schemasource-elementdatasourcetype-complextypeaction4.md">Fields</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="nestedinitiationfieldnodes-element-schemasource-elementdatasourcetype-complextyp.md">NestedInitiationFieldNodes</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








