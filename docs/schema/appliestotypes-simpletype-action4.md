---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a77fa6ed-b4ba-2d9d-92a5-33b34287da9a
---

# appliesToTypes simpleType (Action4)

**Applies to**: SharePoint Server 2013

Simple type for specifying which SharePoint object type the action applies to.

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Base type</span></p></td>
<td align="left"><p>s:string</p></td>
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
    <s:simpleType name="appliesToTypes">
        <s:restriction base="s:string">
            <s:enumeration value="none" />
            <s:enumeration value="list" />
            <s:enumeration value="doclib" />
            <s:enumeration value="all" />
            <s:enumeration value="displayonly" />
        </s:restriction>
    </s:simpleType>
```

## Enumeration values

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>none</p></td>
<td align="left"><p>Applies to no SharePoint object type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>list</p></td>
<td align="left"><p>Applies to SharePoint lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>doclib</p></td>
<td align="left"><p>Applies to SharePoint document libraries.</p></td>
</tr>
<tr class="even">
<td align="left"><p>all</p></td>
<td align="left"><p>Applies to all object types - that is, both lists and document libraries.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>displayonly</p></td>
<td align="left"><p>Provided for display in the user interface but applies to no object type.</p></td>
</tr>
</tbody>
</table>








