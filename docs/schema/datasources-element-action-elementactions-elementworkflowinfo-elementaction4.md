---
title: DataSources element (Action element)
description: DataSources element (Action element) specifies the data sources for an action.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: d398e427-1f28-f4e2-e6b0-f2878f258a1b
---

# DataSources element (Action element) 

(Actions element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies the data sources for an action.

## Usage

```XML
    <Action>
        <DataSources>
            <DataSource />
        </DataSources>
    </Action>
```

## Element information

| Information  |  Location |
|---|---|
| **Element type**  |  |
| **Namespace**     |  |
| **Schema file**   | Actions4.xsd |

## Definition

```XML 
    <xs:element name="DataSources" type="dataSourcesType" minOccurs="0" maxOccurs="1" >
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
<td align="left"><p><a href="action-element-actions-elementworkflowinfo-elementaction4.md">Action</a></p></td>
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








