---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cd9ce74a-ac5a-4ebc-8e4c-3b16bcad828e
---

# Action Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the information that is needed for the workflow engine to process a workflow activity, which is called an **action** in Microsoft SharePoint Foundation 2010. A workflow **Action** element represents a
workflow activity, such as sending email notifications, updating SharePoint Foundation 2010 list items, creating and assigning tasks, and many other activities.

By default, SharePoint Foundation 2010 provides 23 built-in workflow actions. These are defined in the WSS.ACTIONS file.

## Definition

```XML
<Actions>
    <Action>
        <Parameters>
        </Parameters>
        <RuleDesigner>
        </RuleDesigner>
        <DataSources>
        </DataSources>
        <Modifications>
            <Modification>
            </Modification>
        </Modifications>
        <ActionVariables>
        </ActionVariables>
        <ActionBody>
        </ActionBody>
        <ActionConditions>
        </ActionConditions>
    </Action>
</Actions>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
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
<td align="left"><p>Required **text**. Represents the description of the workflow action that is displayed to the workflow editor.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ClassName**</p></td>
<td align="left"><p>Required **text**. Fully qualified name of the class that implements the workflow action; for example, **Microsoft.SharePoint.WorkflowActions.EmailActivity**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Required **text**. The Microsoft .NET assembly name that contains instructions to implement the **Action** element. The text should include the PublicKeyToken, Version, and Culture.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FunctionName**</p></td>
<td align="left"><p>Optional **text**. For sandboxed solutions, specifies the name of a function to call.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Category**</p></td>
<td align="left"><p>Optional **text**. Provides a category for the workflow action. This **text** is used to filter the list of available actions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CreatesTask**</p></td>
<td align="left"><p>Optional **Boolean**. If set to **true**, a task list item is created in the workflow. If left blank, the assumption is **false**, and no task list items are created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CreatesInList**</p></td>
<td align="left"><p>Optional **text**. If a value is set for this attribute, the workflow creates an item in a list. Values must map to a parameter name that contains the **ID** of the list or document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AppliesTo**</p></td>
<td align="left"><p>Required **text**. Indicates whether this workflow action should be available for lists, document libraries, or both. Valid values include **list**, **doclib**, and **all**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsError**</p></td>
<td align="left"><p>Optional **Boolean**. If set to **true**, instances of this **Action** element are considered an error by the client application.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListModeration**</p></td>
<td align="left"><p>Optional **Boolean**. If set to **true**, this **Action** element applies to a list or document library that has content approval enabled. If left blank, the assumption is **false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UsesCurrentItem**</p></td>
<td align="left"><p>Optional **Boolean**. If set to **true**, indicates that the current item should be used or modified. If set to **false** or left blank, this **Action** element uses only the SharePoint list or document library item that is specified.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CreatedTaskFormType**</p></td>
<td align="left"><p>Optional **text**. Specifies the type of a created task: **DataCollectTask** to create a task that collects data from one user; **GroupAssignedTask** to create a task that collects data from one or more users; **TodoItemTask** to create a task that does not collect data from users but only exists for a user to validate that they have done something; or **TaskProcess** to create a task that has a form that allows for ad-hoc collaboration and might collect data from one or more users.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**__SolutionId**</p></td>
<td align="left"><p>Optional **text**. Specifies a GUID that the client application writes to the implementation-specific action. The server uses the GUID to help locate the assembly at run time of the workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SandboxedFunction**</p></td>
<td align="left"><p>Optional **Boolean**. If set to **true**, the client application inserts an implementation-specific action when this action is selected. The action should be configured to call a function defined by the conjunction of **AssemblyName**, **ClassName**, and **FunctionName**. If set, **AssemblyName**, **ClassName**, **FunctionName**, and **__SolutionId** must also be set.</p></td>
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
<td align="left"><p><a href="parameters-element-workflowinfo.md">Parameters</a></p>
<p><a href="ruledesigner-element-workflowinfo.md">RuleDesigner</a></p>
<p><a href="datasources-element-workflowinfo.md">DataSources</a></p>
<p><a href="modifications-element-workflowinfo.md">Modifications</a></p>
<p><a href="actionvariables-element-workflowinfo.md">ActionVariables</a></p>
<p><a href="actionbody-element-workflowinfo.md">ActionBody</a></p>
<p><a href="actionconditions-element-workflowinfo.md">ActionConditions</a></p></td>
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
<td align="left"><p><a href="actions-element-workflowinfo.md">Actions</a></p></td>
</tr>
</tbody>
</table>

## Example

The following code example demonstrates how to construct an **Action** element so that it is displayed in the workflow editor. Note that this XML has been modified for readability.

```XML 
    <WorkflowInfo>
      <Conditions>…</Conditions>
      <Actions Sequential="then" Parallel="and">
        <Action Name="Update my custom SharePoint list"
                ClassName="CustomActivities.OrderListFunctions"
                Assembly="CustomActivities,      
                          PublicKeyToken=b03f5f7f11d50a3a, 
                          Version=1.0.0.0, 
                          Culture=neutral"
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
                       Name="UpdateList"
            </Parameters>
        </Action>
      </Actions>
    </WorkflowInfo>
```

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








