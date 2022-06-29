---
title: Coercion element (WorkflowInfo)
description: The Coercion Element (WorkflowInfo) specifies a coercion for converting data from one form to another.
manager: laurawi
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
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


| Attribute | Description |
| --- | --- |
| **Name** | Required text. The internal name for the coercion. |
| **Assembly** | Required text. Specifies the binary file in which the coercion is implemented. |
| **DisplayName** | Required text. Specifies the display name of the coercion. |
| **CatchAll** | Required Boolean. **True** to show the coercion in scenarios in which either the **DestinationType** or the **DestinationFieldType** allows it, regardless of **SourceType** or **SourceFieldType** values. **False** to show the coercion only in scenarios in which **SourceType** or **SourceFieldType** specifies that it should be shown. |
| **RankDefault** | Required integer. Specifies a sort value for the list of coercions. |
| **SourceType** | Optional text. A class type from which the data is converted. If set, the client shows the coercion only when the previous value is of the matching type unless **SourceFieldType** or **CatchAll** specifies otherwise. |
| **SourceFieldType** | Optional **FieldInternalType**. The field type to use to determine whether to show the coercion. If set, the client shows the coercion only when the previous value is of the matching type unless **SourceFieldType** or **CatchAll** specifies otherwise. |
| **DestinationType** | Required text. The output class type of the coercion value. If the destination cannot handle this type, the coercion is not displayed. |
| **DestinationFieldType** | Optional **FieldInternalType**. The output field type of the coercion. If the destination cannot handle this type, the coercion is not displayed. |
| **ClassName** | Optional text. Uniquely identifies the class in the binary file that is specified by the **Assembly**. |

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
