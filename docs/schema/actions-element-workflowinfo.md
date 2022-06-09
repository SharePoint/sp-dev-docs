---
title: Actions element (WorkflowInfo)
description: The Actions element (WorkflowInfo) provides a number of default actions to a declarative, and can be used to build workflows.
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: fcbb11a2-eb91-40ae-914b-cf3678a072db
---

# Actions element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Microsoft SharePoint Foundation 2010 provides a number of default actions to a declarative, code-free workflow editor, such as Microsoft SharePoint Designer 2010, that can be used to build workflows that address common business needs. However, complex business rules can sometimes require customized actions. You can use the **Actions** element to add custom workflow activities and expand the workflow actions available to you beyond those that are included in the default list.

## Definition

```XML
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
  
| Attribute | Description |
| --- | --- |
| **Parallel** | Required **text**. If the user who is creating the workflow indicates that all workflow actions should be executed in parallel, the string that is defined in this attribute is used to join the **Actions** elements in the **RuleDesigner** sentence. </br> The default value for this attribute is **and** (which is defined in the WSS.ACTIONS file) and applies only to the English language version of SharePoint Foundation 2010. This value cannot be overridden in a custom .ACTIONS file. |
| **Sequential** | Required **text**. If the user who is creating the workflow indicates that all workflow actions should be executed in sequence, the string that is defined in this attribute is used to join the **Actions** elements in the **RuleDesigner** sentence. </br> The default value is **then** (which is defined in the WSS.ACTIONS file) and applies only to the English language version of SharePoint Foundation 2010. This value cannot be overridden in a custom .ACTIONS file. |

### Child elements

[Action](action-element-workflowinfo.md)

[Default](default-element-workflowinfo.md)

### Parent elements

[WorkFlowInfo](workflowinfo-element-workflowinfo.md)

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
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)
