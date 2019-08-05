---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- workflow definition schema, extendedstatuscolumnvalues element
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 111e8cac-cd35-49c9-88e1-92e34a3bfeb1
---

# ExtendedStatusColumnValues Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains a collection of custom workflow status column values.

## Definition

```XML
<ExtendedStatusColumnValues/>
</ExtendedStatusColumnValues>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="statuscolumnvalue-element-workflow.md">StatusColumnValue Element (Workflow)</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="metadata-element-workflow.md">MetaData Element (Workflow)</a></p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

### Remarks

This element contains a collection of **StatusColumnValue** elements, each of which represents a single custom status column value.

## Example

The following example specifies three custom workflow status column values: **Canceled**, **Approved**, and **Rejected**.

```XML
    <MetaData>
    …
      <ExtendedStatusColumnValues>
        <StatusColumnValue>Canceled</StatusColumnValue>
        <StatusColumnValue>Approved</StatusColumnValue>
        <StatusColumnValue>Rejected</StatusColumnValue>
      </ExtendedStatusColumnValues>  
    </MetaData>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)






