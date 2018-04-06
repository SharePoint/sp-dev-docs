---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- workflow definition schema, statuscolumnvalue element (workflow)
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d5335216-5214-4b3d-b515-5381543969aa
---

# StatusColumnValue Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a custom workflow status column value.

## Definition

```XML
<StatusColumnValue>
</StatusColumnValue>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="extendedstatuscolumnvalues-element-workflow.md">ExtendedStatusColumnValues Element (Workflow)</a></p></td>
</tr>
</tbody>
</table>

### Remarks

Specify your custom status column values as an ordered list. Each status column value corresponds to an integer that represents its place in a 0-based ordered list of column values. Use this integer, rather than the text value you specify here, to refer to the status column value in the workflow code. This enables you to change the status column value in the workflow definition without having to recompile the workflow assembly, as well as making it possible for you to specify localizable status column values.

The first fifteen status column values are reserved for internal use. Therefore, the first status column value you specify is assigned the integer value of 15; the second status value, 16; and so on.

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










