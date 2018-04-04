---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7f3e7e9f-256f-4570-ba3f-745bbdfbc5b8
---

# Association Element (WorkflowConfig)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the information necessary for a declarative rules-based, code-free workflow editor, such as Microsoft SharePoint Designer 2010, to associate a workflow template with the specified SharePoint list in SharePoint Foundation.

## Definition

```
<Association
  ListID="Text"
  TaskListID="Text"
  HistoryListID="Text"
  StartManually="true" | "false"
  StartOnCreate="true" | "false"
  StartOnChange="true" | "false"
>
</Association>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes
<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Attribute</p></td>
<td align="left"><p>Description</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the list to which the workflow should be associated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TaskListID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the task list the workflow should use for workflow tasks, if any.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HistoryListID**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID of the history list the workflow should use for logging workflow history events, if any.</p>
<p>If not specified, the workflow logs workflow history events to a default history list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StartManually**</p></td>
<td align="left"><p>Optional **Boolean**. If set to true, the workflow may be manually started by users.</p>
<p>If this attribute is not present, SharePoint Foundation treats the workflow as if this attribute is set to false.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StartOnCreate**</p></td>
<td align="left"><p>Optional **Boolean**. If set to true, SharePoint Foundation starts the workflow automatically when a new item is created on the list to which the workflow is associated.</p>
<p>If this attribute is not present, SharePoint Foundation treats the workflow as if this attribute is set to false.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StartOnChange**</p></td>
<td align="left"><p>Optional **Boolean**. If set to true, SharePoint Foundation starts the workflow automatically when an item is changed on the list to which the workflow is associated.</p>
<p>If this attribute is not present, SharePoint Foundation treats the workflow as if this attribute is set to false.</p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><span sdata="link"><a href="workflowconfig-element.md">WorkflowConfig Element</a></span></p></td>
</tr>
</tbody>
</table>

### Remarks

After the workflow has been associated with a specific SharePoint list, the values of the following attributes are stored in the [SPWorkflowAssociation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.aspx) object for the workflow:

- The StartManually attribute value is stored in the [AllowManual](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.allowmanual.aspx) property.

- The StartOnCreate attribute value is stored in the [AutoStartCreate](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.autostartcreate.aspx) property.

- The StartOnChange attribute value is stored in the [AutoStartChange](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.autostartchange.aspx) property.

- The HistoryListID attribute value is stored in the [HistoryListId](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.historylistid.aspx) property.

- The TaskListID attribute value is stored in the [TaskListId](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.workflow.spworkflowassociation.tasklistid.aspx) property.

Applications created to work as a declarative rules-based, code-free workflow editor can use the **AssociateWorkflowMarkup(String, String)** method of the **websvcWebPartPages** Web Service to create a workflow template and associate it to a SharePoint list specifying a workflow markup file, a workflow configuration file, and optionally, a workflow rules markup file.

For more information about creating an application that can act as a declarative rules-based, code-free workflow editor, see [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx).

## Example

The following example shows an Association element for a workflow configuration. The element attributes specify the SharePoint list to which the workflow is associated, the task list the workflow uses, that the workflow can be started manually, and that the workflow starts automatically when a new item is created on the list.

```XML
    <Association
        ListID="{B8C6FEEA-8066-462E-958D-1B4E90FE1C34}"
        TaskListID="{C64BA541-9D5B-42F3-A989-96F56FD51155}"
        StartManually="true"
        StartOnCreate="true"
    >
```

## See also

- [Workflow configuration schema reference](workflow-configuration-schema-reference.md)
- [Workflow Development for Windows SharePoint Services](https://msdn.microsoft.com/en-us/library/office/ms414613.aspx)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Office SharePoint Designer Overview](https://msdn.microsoft.com/en-us/library/office/ms454098.aspx)







