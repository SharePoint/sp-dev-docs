---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6b5cd80c-fd89-8ea1-3657-d711dc513976
---

# FilterValue Element in FilterValues 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a filter value for a query or association. The FilterValue element can contain a mix of character data and child elements.

**Namespace**: http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

**Schema**: Subscription

```XML
<FilterValue FilterDescriptorName = "String" Type = "String" FilterIndex = "Integer"> </FilterValue>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**FilterDescriptorName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the filter descriptor in the model.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required.</p>
<p>The data type of the filter value.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FilterIndex**</p></td>
<td align="left"><p>Required.</p>
<p>Must always be set to zero.</p>
<p>Attribute type: **Integer**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="filtervalues-element-in-query-subscription-schema.md">FilterValues Element in Query (Subscription Schema)</a></span></p></td>
<td align="left"><p>The **FilterValues** element that contains this filter value.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="filtervalues-element-in-association-subscription-schema.md">FilterValues Element in Association (Subscription Schema)</a></span></p></td>
<td align="left"><p>The **FilterValues** element that contains this filter value.</p></td>
</tr>
</tbody>
</table>








