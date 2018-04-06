---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- workflow definition schema, statuspageurl element (workflow)
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 844cbf61-91bb-467b-ac38-cbfb027c9159
---

# StatusPageUrl Element (Workflow)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the URL of a custom workflow status page for the workflow.

## Definition

```XML
<StatusPageUrl>
</StatusPageUrl>
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

The URL you specify must be server-relative.

If you do not specify a custom status page, SharePoint Foundation uses the default status page, located at `_layouts/WrkStat.aspx`.

## Example

The following example specifies a custom workflow status page for the workflow.

```XML
    <StatusPageUrl>_layouts/myWrkStatus.aspx</StatusPageUrl>
```

## See also

- [Workflow Definitions](workflow-definitions.md)
- [Workflows in Windows SharePoint Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)
- [Workflow Deployment Using Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)









