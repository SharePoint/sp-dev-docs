---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 020a3861-ae16-6031-6d91-a5c775f4cadd
---

# DataSource element 

(dataSourcesType complexType) (Action4)

**Applies to**: SharePoint Server 2013

## Usage

```XML
    <DataSource>
        <SchemaSource />
        <Evaluation />
    </DataSource>
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
<td align="left"><p><a href="datasourcetype-complextype-action4.md">dataSourceType</a></p></td>
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
    <xs:element name="DataSource"      type="dataSourceType" minOccurs="0"     maxOccurs="unbounded"    >
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
<td align="left"><p><a href="datasources-element-compositestep-elementcompositesteps-elementworkflowinfo-elem.md">DataSources</a></p></td>
<td align="left"><p><a href="datasourcestype-complextype-action4.md">dataSourcesType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="datasources-element-action-elementactions-elementworkflowinfo-elementaction4.md">DataSources</a></p></td>
<td align="left"><p><a href="datasourcestype-complextype-action4.md">dataSourcesType</a></p></td>
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
<td align="left"><p><a href="evaluation-element-datasourcetype-complextypeaction4.md">Evaluation</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="schemasource-element-datasourcetype-complextypeaction4.md">SchemaSource</a></p></td>
<td align="left"><p></p></td>
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
<td align="left"><p>**InternalName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the internal name for the data source for a reference from a <span sdata="link"><a href="datasourceref-element-fieldbind-elementruledesignertype-complextypeaction4.md">DataSourceRef element (FieldBind element) (ruleDesignerType complexType) (Action4)</a></span>.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies a localizable display name for the data source.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NameProperty**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies how to differentiate the user interface (UI) elements defined in a <span sdata="link"><a href="datasource-element-datasourcestype-complextypeaction4.md">DataSource element (dataSourcesType complexType) (Action4)</a></span>.</p><p>If the value begins with "Parent.", the value is retrieved from the parent of the action or composite step that declares the **DataSource** element.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








