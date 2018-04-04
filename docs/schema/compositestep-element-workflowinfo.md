---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4e71ca46-7b14-4595-a498-5de85d905043
---

# CompositeStep Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a step in a composite workflow activity.

## Definition

```XML
<CompositeStep>
    <DataSources>    </DataSources>
</CompositeStep>
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
<td align="left"><p>Required **text**. The localized name of the step.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ClassName**</p></td>
<td align="left"><p>Required **text**. Uniquely identifies the class in the binary file specified by **Assembly**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Required **text**. Specifies the binary file in which the step is implemented.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AppliesTo**</p></td>
<td align="left"><p>Required **appliesToTypes**. Indicates whether this step should be available for lists, document libraries, or both. Valid values include **list**, **doclib**, and **all**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Order**</p></td>
<td align="left"><p>Optional **integer**. Specifies the sort order of elements in the step.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **text**. Specifies additional information about the step.</p></td>
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
<td align="left"><p><a href="datasources-element-workflowinfo.md">DataSources</a></p></td>
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
<td align="left"><p><a href="compositesteps-element-workflowinfo.md">CompositeSteps</a></p></td>
</tr>
</tbody>
</table>

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








