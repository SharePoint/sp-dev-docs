---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 41eea6a6-336c-1397-41fb-b0b0bd389d60
---

# FilterValues Element in Query 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the list of filter values for this query execution.

**Namespace**: http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog

**Schema**: Subscription

```XML
<FilterValues></FilterValues>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

### Child elements

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
<td align="left"><p><span sdata="link"><a href="filtervalue-element-in-filtervalues-subscription-schema.md">FilterValue Element in FilterValues (Subscription Schema)</a></span></p></td>
<td align="left"><p>A filter value for this query execution. If filter values are not provided, any filter values provided in the model for this method instance are used. If the model does not contain filter values, default values are used.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><span sdata="link"><a href="query-element-in-queries-subscription-schema.md">Query Element in Queries (Subscription Schema)</a></span></p></td>
<td align="left"><p>The query that this list of filter values belongs to.</p></td>
</tr>
</tbody>
</table>








