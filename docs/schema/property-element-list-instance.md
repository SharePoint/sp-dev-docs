---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 93b34073-8dd2-4b68-a692-c8ee6bb307bd
---

# Property Element (List Instance)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a property for a list instance.

## Definition

```XML
<Property 
  Name = string
  Value = string
  Type = int | string | DateTime />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **string**. Specifies the name of the property.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>Optional **string**. Specifies the value of the property.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **choice**. Specifies the type of the property. Acceptable values are **int**, **string**, or **DateTime**.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="datasource-element-list-instance.md">DataSource Element (List Instance)</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>

### Remarks

See the Remarks section of the topic [DataSource Element (List Instance)](datasource-element-list-instance.md) for information about the use of this element.








