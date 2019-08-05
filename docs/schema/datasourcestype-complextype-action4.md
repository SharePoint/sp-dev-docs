---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 37824f01-75e0-6235-cdcd-8e10db69ab21
---

# dataSourcesType complexType (Action4)

**Applies to**: SharePoint Server 2013

Base type definition for **DataSources** elements; applies to
[DataSources(Action)](datasources-element-action-elementactions-elementworkflowinfo-elementaction4.md) and
[DataSources(CompositeStep)](datasources-element-compositestep-elementcompositesteps-elementworkflowinfo-elem.md).

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="dataSourcesType">
        <xs:sequence>
            <xs:element name="DataSource" type="dataSourceType" minOccurs="0"     maxOccurs="unbounded">
            </xs:element>  
        </xs:sequence>
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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








