---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4941218a-f3bf-4671-a3ba-9247ca1465e0
---

# VariableType Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a type that can be used for local variables in the workflow.

## Definition

```XML
<VariableTypes>
    <VariableType>    </VariableType>
</VariableTypes>
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
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **text**. Specifies the variable type name.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **text**. Specifies the display name of the type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Optional **text**. Specifies the binary file that defines the class specified by **Type**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CoercionActivity**</p></td>
<td align="left"><p>Required **text**. Identifies a class that can convert values of any type into the type specified by **Type**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Boolean**. **true** to use this type as the default variable type; otherwise, **false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ItemIdType**</p></td>
<td align="left"><p>Optional **Boolean**. **true** to use this type as the type for identifying list items in lists; otherwise, **false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**. **true** to hide the display of the type name; otherwise, **false**.</p></td>
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
<td align="left"><p><a href="variabletypes-element-workflowinfo.md">VariableTypes</a></p></td>
</tr>
</tbody>
</table>


## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)








