---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fcbb11a2-eb91-40ae-914b-cf3678a072db
---

# Actions Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Microsoft SharePoint Foundation 2010 provides a number of default actions to a declarative, code-free workflow editor, such as Microsoft SharePoint Designer 2010, that can be used to build workflows that address common business needs. However, complex business rules can sometimes require customized actions. You can use the **Actions** element to add custom workflow activities and expand the workflow actions available to you beyond those that are included in the default list.

## Definition

```
<WorkflowInfo>
    <Conditions>...</Conditions>
    <Actions>
        <Action>...</Action>
    </Actions>
</WorkflowInfo>
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
<td align="left"><p>**Parallel**</p></td>
<td align="left"><p>Required **text**. If the user who is creating the workflow indicates that all workflow actions should be executed in parallel, the string that is defined in this attribute is used to join the **Actions** elements in the **RuleDesigner** sentence.</p>
<p>The default value for this attribute is **and** (which is defined in the WSS.ACTIONS file) and applies only to the English language version of SharePoint Foundation 2010. This value cannot be overridden in a custom .ACTIONS file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequential**</p></td>
<td align="left"><p>Required **text**. If the user who is creating the workflow indicates that all workflow actions should be executed in sequence, the string that is defined in this attribute is used to join the **Actions** elements in the **RuleDesigner** sentence.</p>
<p>The default value is **then** (which is defined in the WSS.ACTIONS file) and applies only to the English language version of SharePoint Foundation 2010. This value cannot be overridden in a custom .ACTIONS file.</p></td>
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
<td align="left"><p><a href="action-element-workflowinfo.md">Action</a></p>
<p><a href="default-element-workflowinfo.md">Default</a></p></td>
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
<td align="left"><p><a href="workflowinfo-element-workflowinfo.md">WorkFlowInfo</a></p></td>
</tr>
</tbody>
</table>

## Example

The following example demonstrates how to construct the **Actions** element so that parent and child **Action** elements appear correctly in the workflow designer.

```XML
    <WorkflowInfo>
      <Conditions>…</Conditions>
      <Actions Sequential="then" Parallel="and">
        <Action Name="Update my custom SharePoint list"
                ClassName="CustomActivities.OrderListFunctions"
                Assembly="CustomActivities,
                          PublicKeyToken=71e9bce111e9429c,
                          Version=1.0.0.0,
                          Culture=nuetral"
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
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








