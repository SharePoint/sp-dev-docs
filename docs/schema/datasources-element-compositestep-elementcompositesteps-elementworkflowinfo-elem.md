---
title: DataSources element (CompositeStep element)
description: DataSources element (CompositeStep element) specifies the data sources for a composite step.
manager: laurawi
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 780cd2b8-97d2-c8b3-d56b-9a0e1e72338b
---

# DataSources element (CompositeStep element)

(CompositeSteps element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies the data sources for a composite step.

## Usage

```XML
    <CompositeStep>
        <DataSources>
            <DataSource />
        </DataSources>
    </CompositeStep>
```

## Element information

|  Information | Location  |
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |

## Definition

```XML
    <xs:element name="DataSources" type="dataSourcesType" minOccurs="0"maxOccurs="1">
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
<td align="left"><p><a href="compositestep-element-compositesteps-elementworkflowinfo-elementaction4.md">CompositeStep</a></p></td>
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
<td align="left"><p><a href="datasource-element-datasourcestype-complextypeaction4.md">DataSource</a></p></td>
<td align="left"><p><a href="datasourcetype-complextype-action4.md">dataSourceType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.
