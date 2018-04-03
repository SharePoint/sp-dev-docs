---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 74ddbc41-2cc4-433d-a38c-9dae695ea434
---

# AssemblyRedirect Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a transformation from one binary file to another binary file in a versioned binary file system so that the client has sufficient information to load the desired binary file.

## Definition

```
<AssemblyRedirects>
    <AssemblyRedirect>    </AssemblyRedirect>
</AssemblyRedirects>
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
<td align="left"><p>**From**</p></td>
<td align="left"><p>Required **text**. The name of the file to transform.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**To**</p></td>
<td align="left"><p>Required **text**. The name of the transformed file.</p></td>
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
<td align="left"><p><a href="assemblyredirects-element-workflowinfo.md">AssemblyRedirects</a></p></td>
</tr>
</tbody>
</table>

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








