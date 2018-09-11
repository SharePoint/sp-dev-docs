---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c22128ef-caba-4735-8655-f278430785e8
---

# RuleDesigner Element (WorkflowActions)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Complex type element. The **RuleDesigner** element contains information that is needed to render a workflow sentence in a declarative, code-free workflow editor, such as Microsoft SharePoint Designer 2010.

## Definition

```XML
<RuleDesigner>
  <FieldBind>
    <Option>
    <DataSourceRef>
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
<td align="left"><p>**Sentence**</p></td>
<td align="left"><p>Required **text**. Text that is displayed in the workflow editor that represents the workflow rule. The rule sentence can contain static text and also text that is dynamically generated at run time.</p>
<p>Variables can be embedded into the sentence using the notation %1, %2, and so on. Each variable maps to a **FieldBind** element **Id**. Then, during workflow design, the text that is displayed for these variables is the **Text** attribute of the **FieldBind** element.</p></td>
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
<td align="left"><p><a href="fieldbind-element-workflowactions.md">FieldBind</a></p></td>
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
<td align="left"><p><a href="default-element-workflowactions.md">Default</a></p>
<p><a href="action-element-workflowactions.md">Action</a></p></td>
</tr>
</tbody>
</table>

## See also

- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)






