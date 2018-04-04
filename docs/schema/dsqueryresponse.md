---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- dsQueryResponse XML
ms.assetid: 4c8c17dc-af06-4ef1-a1ad-831a1ea19e06
---

# dsQueryResponse

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Top-level element that contains the list data that is rendered by [the XSLT list view rendering system](http://msdn.microsoft.com/library/7c1e0b6f-f53f-4379-a2b3-fbbaf2e00593(Office.15).aspx).

## Definition

```
<dsQueryResponse 
  ViewStyleID="Integer" 
  BaseViewID="Integer" 
  TemplateType="Integer" 
  RowLimit="Integer">
</dsQueryResponse>
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
<td align="left"><p>**ViewStyleID**</p></td>
<td align="left"><p>The ID of the view style of the view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseViewID**</p></td>
<td align="left"><p>The ID of the base view of the list. This is the same value as **BaseViewID**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateType**</p></td>
<td align="left"><p>The ID of the type of the list template. Must be the numerical version of one of the **SPListTemplateType** enumeration values. This is the same value as **BaseTemplate**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RowLimit**</p></td>
<td align="left"><p>The maximum number of rows to be displayed on a single list view page.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="rows-dsqueryresponse.md">Rows</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

None


### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 1</p>
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


### Example

For an example, see [Examples of Input and Result Node Trees in XSLT Transformations](http://msdn.microsoft.com/library/cbe88144-25ac-4cd2-8f2a-50e8c271c6ae(Office.15).aspx).








