---
title: DataSource element
description: Learn about the DataSource element.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
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

|  Information |  Location |
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |

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

| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| **InternalName** | s:string | required | Specifies the internal name for the data source for a reference from a [DataSourceRef element (FieldBind element) (ruleDesignerType complexType) (Action4)](datasourceref-element-fieldbind-elementruledesignertype-complextypeaction4.md). | Values of the s:string type. |
| **Name** | s:string | required | Specifies a localizable display name for the data source. | Values of the s:string type. |
| **NameProperty** | s:string | required | Specifies how to differentiate the user interface (UI) elements defined in a [DataSource element (dataSourcesType complexType) (Action4)](datasource-element-datasourcestype-complextypeaction4.md). If the value begins with "Parent.", the value is retrieved from the parent of the action or composite step that declares the **DataSource** element. | Values of the s:string type. |








