---
title: Coercion element (WorkflowInfo)
description: The Coercion Element (WorkflowInfo) specifies a coercion for converting data from one form to another.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 370d9f60-5565-4660-854c-31f79daad941
---

# Coercion element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a coercion for converting data from one form to another.

## Definition

```XML
<Coercions>
    <Coercion>    </Coercion>
</Coercions>
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
<td align="left"><p><b>Name</b></p></td>
<td align="left"><p>Required text. The internal name for the coercion.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>Assembly</b></p></td>
<td align="left"><p>Required text. Specifies the binary file in which the coercion is implemented.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>DisplayName</b></p></td>
<td align="left"><p>Required text. Specifies the display name of the coercion.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>CatchAll</b></p></td>
<td align="left"><p>Required Boolean. <b>True</b> to show the coercion in scenarios in which either the <b>DestinationType</b> or the <b>DestinationFieldType</b> allows it, regardless of <b>SourceType</b> or <b>SourceFieldType</b> values. <b>False</b> to show the coercion only in scenarios in which <b>SourceType</b> or <b>SourceFieldType</b> specifies that it should be shown.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>RankDefault</b></p></td>
<td align="left"><p>Required integer. Specifies a sort value for the list of coercions.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>SourceType</b></p></td>
<td align="left"><p>Optional text. A class type from which the data is converted. If set, the client shows the coercion only when the previous value is of the matching type unless <b>SourceFieldType</b> or <b>CatchAll</b> specifies otherwise.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>SourceFieldType</b></p></td>
<td align="left"><p>Optional <b>FieldInternalType</b>. The field type to use to determine whether to show the coercion. If set, the client shows the coercion only when the previous value is of the matching type unless <b>SourceFieldType</b> or <b>CatchAll</b> specifies otherwise.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>DestinationType</b></p></td>
<td align="left"><p>Required text. The output class type of the coercion value. If the destination cannot handle this type, the coercion is not displayed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><b>DestinationFieldType</b></p></td>
<td align="left"><p>Optional <b>FieldInternalType</b>. The output field type of the coercion. If the destination cannot handle this type, the coercion is not displayed.</p></td>
</tr>
<tr class="even">
<td align="left"><p><b>ClassName</b></p></td>
<td align="left"><p>Optional text. Uniquely identifies the class in the binary file that is specified by the <b>Assembly</b>.</p></td>
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
<td align="left"><p><a href="coercions-element-workflowinfo.md">Coercions</a></p></td>
</tr>
</tbody>
</table>


## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








