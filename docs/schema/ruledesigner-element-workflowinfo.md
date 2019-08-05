---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dd956283-103a-42e9-b082-58f7f3c3dbfc
---

# RuleDesigner Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Complex type element that contains information that is needed to render a workflow sentence in a declarative, code-free workflow editor, such as Microsoft SharePoint Designer 2010.

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
<td align="left"><p>Required **text**. Text displayed in the workflow editor that represents the workflow rule. The rule sentence can contain static text and also text that is dynamically generated at run time.</p>
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
<td align="left"><p><a href="fieldbind-element-workflowinfo.md">FieldBind</a></p></td>
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
<td align="left"><p><a href="default-element-workflowinfo.md">Default</a></p>
<p><a href="condition-element-workflowinfo.md">Condition</a></p>
<p><a href="action-element-workflowinfo.md">Action</a></p></td>
</tr>
</tbody>
</table>

## Example

The following XML demonstrates how to construct a **RuleDesigner** element so that it can be displayed in a code-free workflow editor.

```XML
    <WorkflowInfo>
      <Conditions>…</Conditions>
      <Actions Sequential="then" Parallel="and">
        <Action Name="Update my custom SharePoint list"
                ClassName="CustomActivities.OrderListFunctions"
                Assembly="CustomActivities"
                Category="My Custom Actions"
                CreatesTask="true"
                CreatesInList="UpdateList"
                AppliesTo="all"
                ListModeration="false"
                UsesCurrentItem="true">
          <RuleDesigner Sentence="Update %1">
            <FieldBind Field="UpdateList"
                       Function="UpdateOrderList"
                       DesignerType="ChooseListItem"
                       ID="1"
                       Text="My Custom List">
            </FieldBind>
          </RuleDesigner>
          <Parameters>
            <Parameter Type="System.String, mscorlib"
                       Direction="In"
                       Name="UpdateList" />
          </Parameters>
        </Action>
      </Actions>
    </WorkflowInfo>
```

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)





